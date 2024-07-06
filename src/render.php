<?php
/**
 * Template for star rating
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package SimpleStarRatingBlock
 */

$rating = 0;

if ( $attributes['useCustomField'] ) {
	$rating = get_post_meta( get_the_ID(), $attributes['customField'], true );
} else {
	$rating = $attributes['rating'] ?? 0;
}

if ( $rating ) {
	$full_stars   = floor( $rating );
	$partial_star = $rating - $full_stars;
}

?>
<span <?php echo get_block_wrapper_attributes(); ?> title="<?php echo esc_attr( $rating ); ?>">
	<?php
	for ( $i = 1; $i <= 5; $i++ ) {
		if ( $i <= $full_stars ) {
			echo '<div class="ssrb-star ssrb-full"></div>';
		} elseif ( $i == $full_stars + 1 && $partial_star > 0 ) {
			$percentage = round( $partial_star * 100 );
			echo '<div class="ssrb-star ssrb-perc-' . esc_attr( $percentage ) . '"></div>';
		} else {
			echo '<div class="ssrb-star"></div>';
		}
	}
	?>
</span>
