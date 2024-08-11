<?php
/**
 * Template for star rating
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package SimpleStarRatingBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$rating = 0;

if ( $attributes['useCustomField'] ) {
	$rating = (float) get_post_meta( get_the_ID(), $attributes['customField'], true );
} else {
	$rating = (float) ( $attributes['rating'] ?? 0 );
}

$full_stars   = floor( $rating );
$partial_star = $rating - $full_stars;

$star_color = $attributes['starColor'] ?? '#FFC700';
$star_size = $attributes['starSize'] ?? 20;

?>
<span <?php echo get_block_wrapper_attributes(); ?> title="<?php echo esc_attr( $rating ); ?>" style="font-size: <?php echo esc_attr( $star_size ); ?>px;">
	<?php
	for ( $i = 1; $i <= 5; $i++ ) {
		if ( $i <= $full_stars ) {
			echo '<div class="ssrb-star ssrb-full" style="background-color: ' . esc_attr( $star_color ) . ';"></div>';
		} elseif ( $i == $full_stars + 1 && $partial_star > 0 ) {
			$percentage = round( $partial_star * 100 );
			echo '<div class="ssrb-star ssrb-perc-' . esc_attr( $percentage ) . '" style="background-image: linear-gradient(90deg, ' . esc_attr( $star_color ) . ' ' . esc_attr( $percentage ) . '%, transparent ' . esc_attr( $percentage ) . '%);"></div>';
		} else {
			echo '<div class="ssrb-star"></div>';
		}
	}
	?>
</span>
