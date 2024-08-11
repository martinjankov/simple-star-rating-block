=== Simple Star Rating Block ===
Contributors: martin7ba
Tags: block, star rating, Gutenberg, custom fields, reviews
Tested up to: 6.6.1
Stable tag: 0.1.1
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Development Version: https://github.com/martinjankov/simple-star-rating-block

Simple Star Rating Block allows you to display star ratings either by manually entering the value or pulling it from a custom field.

== Description ==

Simple Star Rating Block is a versatile and user-friendly WordPress plugin designed to integrate seamlessly with the Gutenberg editor. Whether you need to display star ratings for products, services, or content, this block makes it easy and efficient.

Development Version can be found on: https://github.com/martinjankov/simple-star-rating-block

### Features:

- **Manual Entry:** Add star ratings manually.
- **Custom Field Integration:** Pull star ratings from custom fields for dynamic content.
- **ACF Integration:** To use ACF Custom Fields for pulling rating number from, your ACF Group for the Field needs to have enabled "Show in REST" (see image 4 below).
- **Customization:** Adjust star sizes, colors, and styles to match your site’s design.
- **Responsive Design:** Ensures star ratings look great on all devices.
- **Ease of Use:** Intuitive interface for quick setup and integration.

== Installation ==

To install the Simple Star Rating Block plugin, follow these steps:

1. **Upload:** Upload the plugin files to the `/wp-content/plugins/simple-star-rating-block` directory.
2. **Activate:** Activate the plugin through the 'Plugins' screen in WordPress.
3. **Configuration:** Configure the settings to suit your needs via the Gutenberg block settings.

== Frequently Asked Questions ==

= How do I add a star rating to a post, page or custom post type? =

Simply add the "Star Rating Block" from the Gutenberg block inserter, then set your desired rating or link it to a custom field.

= Can I customize the appearance of the star ratings? =

Yes, you can customize the size, color, and style of the stars through the block settings in the Gutenberg editor.

= I don't see ACF fields in the Custom Field Key List? =

To see the ACF fields in the list you need to enable the ACF Group where the field is to show in the REST API. See screenshot 4 on how to do that.

== Screenshots ==

1. **Star Rating Block in Action:** Demonstrates the star rating block as displayed on a post or page.
2. **Block Settings Panel:** Shows the settings available for customizing the star rating block.
3. **Star Rating Block in Action In Post Context:** Demonstrates the star rating block as displayed on a post or page.
4. **Enable Option for ACF Group to pull rating from ACF Field :** Enable "Show in REST" so that the ACF Group can show in the Fields list on the Simple Star Rating Block

== Changelog ==

= 0.1.1 =

- Enabled to successfully pull custom fields from Custom Post Types
  _Release Date - 11 August 2024_

= 0.1.0 =

- Initial release
  _Release Date - 07 July 2024_

== Arbitrary section ==

### Additional Information:

For more advanced usage, you can hook into the block’s filters and actions to extend its functionality. This is particularly useful for developers who want to integrate the star ratings with other plugins or custom code.

### Support:

If you encounter any issues or have questions, please contact us directly at [martin@martincv.com](mailto:martin@martincv.com).
