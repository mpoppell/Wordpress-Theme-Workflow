<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Popple
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site row">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'popple' ); ?></a>

	<header id="masthead" class="site-header container-fluid ">
		<div class="container">
		<div class="row align-items-end">
			<div class="site-branding col-xl-4">
				<?php
				the_custom_logo();
				if ( is_front_page() && is_home() ) :
					?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php
				else :
					?>
					<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php
				endif;
				$popple_description = get_bloginfo( 'description', 'display' );
				if ( $popple_description || is_customize_preview() ) :
					?>
					<p class="site-description"><?php echo $popple_description; /* WPCS: xss ok. */ ?></p>
				<?php endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation col">
				<button class="menu-toggle d-sm-none" aria-controls="primary-menu" aria-expanded="false">
					<?php esc_html_e( 'Menu', 'popple' ); ?>
					
				</button>
			
					<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				  'menu_class'        => 'menu nav-menu d-sm-flex justify-content-sm-center',
				 'container_class'        => 'menu-primary-container menu-container d-sm-block d-xl-inline-block',
				) );
				?>
		
			</nav><!-- #site-navigation -->
		</div><!-- .row -->
		</div><!-- .container -->
	</header><!-- #masthead -->
	<div class="container px-4 px-sm-0">
		<header class="entry-header">
				<?php
				if ( is_singular() ) :
					the_title( '<h1 class="entry-title h2">', '</h1>' );
				else :
					the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
				endif;

				if ( 'post' === get_post_type() ) :
					?>
					<div class="entry-meta">
						<?php
						popple_posted_on();
						popple_posted_by();
						?>
					</div><!-- .entry-meta -->
				<?php endif; ?>
		</header><!-- .entry-header -->


		<div id="content" class="site-content container">
			<div class="row">
		
