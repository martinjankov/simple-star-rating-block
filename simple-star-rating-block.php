<?php
/**
 * Plugin Name:       Simple Star Rating Block
 * Description:       Simple Star Rating Block is a versatile and user-friendly WordPress plugin designed to integrate seamlessly with the Gutenberg editor. Whether you need to display star ratings for products, services, or content, this block makes it easy and efficient.
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            MartinCV
 * Author URI:        https://www.martincv.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-star-rating-block
 *
 * @package SimpleStarRatingBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function martincv_simple_star_rating_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'martincv_simple_star_rating_block_block_init' );
