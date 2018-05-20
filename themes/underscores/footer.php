<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Popple
 */

?>
		</div><!-- row -->
	</div><!-- #content -->
</div>
	<footer id="colophon" class="site-footer">
		<div class="content-footer footer-main container">
			<div class="row">
				<div class="footer-widget col-sm-6 col-md">
						<?php dynamic_sidebar( 'footer-widget-1' ); ?>
				</div>
				<div class="footer-widget col-sm-6 col-md">
						<?php dynamic_sidebar( 'footer-widget-2' ); ?>
				</div>
				<div class="footer-widget col-sm">
						<?php dynamic_sidebar( 'footer-widget-3' ); ?>
				</div>
			</div>
		</div>
		<div class="content-footer site-info container-fluid">
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'popple' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'popple' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'popple' ), 'popple', '<a href="http://underscores.me/">Underscores.me</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
