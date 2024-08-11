import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ToggleControl,
	ComboboxControl,
	RangeControl,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { rating, customField, useCustomField, starColor, starSize } =
		attributes;
	const [customFields, setCustomFields] = useState([]);
	const [postMetaData, setPostMetaData] = useState({});

	useEffect(() => {
		if (useCustomField) {
			const postId = wp.data.select("core/editor").getCurrentPostId();
			let postType = wp.data.select("core/editor").getCurrentPostType();
			if (postType === "page" || postType === "post") {
				postType += "s";
			}
			apiFetch({ path: `/wp/v2/${postType}/${postId}` }).then((post) => {
				const md = { ...post.meta, ...post.acf };
				const meta = Object.keys(post.meta);
				const acf = Object.keys(post.acf);

				const fields = [...meta, ...acf];
				setCustomFields(fields);
				setPostMetaData(md);
				updateRating(md[customField] || rating);
			});
		}
	}, [useCustomField]);

	const updateRating = (value) => {
		const numericValue = parseFloat(value);
		if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 5) {
			setAttributes({ rating: numericValue });
		}
	};

	const updateCustomField = (value) => {
		setAttributes({ customField: value });
		const newRating = postMetaData[value];
		if (newRating !== undefined && !isNaN(parseFloat(newRating))) {
			updateRating(newRating);
		} else {
			console.warn(`Invalid custom field value for ${value}: ${newRating}`);
		}
	};

	const fullStars = Math.floor(rating);
	const partialStar = rating - fullStars;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Rating Settings", "simple-star-rating-block")}>
					<ToggleControl
						label={__("Show From Custom Field", "simple-star-rating-block")}
						checked={useCustomField}
						onChange={(value) => setAttributes({ useCustomField: value })}
					/>
					{useCustomField && (
						<ComboboxControl
							label={__("Custom Field Key", "simple-star-rating-block")}
							value={customField}
							options={customFields.map((field) => ({
								label: field,
								value: field,
							}))}
							onChange={updateCustomField}
						/>
					)}
					{!useCustomField && (
						<TextControl
							label={__("Rating", "simple-star-rating-block")}
							type="number"
							min="0"
							max="5"
							step="0.01"
							readOnly={useCustomField}
							value={rating}
							onChange={updateRating}
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__("Style", "simple-star-rating-block")}
					initialOpen={false}
				>
					<ColorPalette
						label={__("Star Color", "simple-star-rating-block")}
						value={starColor}
						onChange={(color) => setAttributes({ starColor: color })}
					/>
					<RangeControl
						label={__("Star Size", "simple-star-rating-block")}
						value={starSize}
						onChange={(value) => setAttributes({ starSize: value })}
						min={10}
						max={50}
					/>
				</PanelBody>
			</InspectorControls>
			<div style={{ fontSize: `${starSize}px` }}>
				{Array.from({ length: 5 }, (_, i) => {
					if (i < fullStars) {
						return (
							<span
								key={i}
								className="ssrb-star ssrb-full"
								style={{ backgroundColor: starColor }}
							></span>
						);
					} else if (i === fullStars && partialStar > 0) {
						const percentage = Math.round(partialStar * 100);
						return (
							<span
								key={i}
								className={`ssrb-star ssrb-perc-${percentage}`}
								style={{
									backgroundImage: `linear-gradient(90deg, ${starColor} ${percentage}%, transparent ${percentage}%)`,
								}}
							></span>
						);
					} else {
						return <span key={i} className="ssrb-star"></span>;
					}
				})}
			</div>
		</div>
	);
}
