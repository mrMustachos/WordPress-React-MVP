<?php 
//change base permalinks to match react router
add_action('init','barebones_change_base_permalinks');
function barebones_change_base_permalinks() {
    global $wp_rewrite;
    // $wp_rewrite->permalink_structure = 'post/%pagename%/';
    // $wp_rewrite->page_structure = 'page/%pagename%/';
    $wp_rewrite->permalink_structure = 'blog/%pagename%/';
    $wp_rewrite->page_structure = '%pagename%/';
    $wp_rewrite->flush_rules();
}

//adds a custom route for search
//https://benrobertson.io/wordpress/wordpress-custom-search-endpoint

function barebones_register_search_route() {
   
    register_rest_route('wp/v2', '/search', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'barebones_ajax_search',
        'args' => barebones_get_search_args()
    ]);
}

add_action( 'rest_api_init', 'barebones_register_search_route');

function barebones_ajax_search( $request ) {
    $posts = [];
    $results = [];
    // check for a search term
 
    if( isset($request['s'])) :
        // get posts 

        $args = [
            'post_type' => array( 'post', 'page'), 
            's' => $request['s'], 
            'posts_per_page' => 10, 
            'paged' => $request['page']
        ];
        $query = new WP_Query( $args );
        $posts = $query->posts;

        $total = $query->found_posts;
        $totalPages = $query->max_num_pages;

        foreach($posts as $post):  
           
            $item = [
                'id' => $post->ID,
                'author_name' => get_the_author_meta('display_name', $post->post_author),                
                'slug' => $post->post_name,
                'type' => $post->post_type,
                'title' => array(
                    'rendered' => $post->post_title
                ),
                'content' => array(
                    'rendered' => $post->post_content
                ),
                'excerpt' => array(
                    'rendered' => $post->post_excerpt
                ),
            ];

            $categories = get_the_category($post->ID);
                     
            if(!empty($categories[0])){  
                $catArr = array();
                $catArr[] = $categories[0]->term_id;
                $item['category_name'] = $categories[0]->name; 
                $item['categories'] = $catArr;              
            }           

            $results[] = $item;
        endforeach; 

    endif;

    // if( empty($results) ) :
    //     return new WP_Error( 'front_end_ajax_search', 'No results');
    // endif;

    $response = new WP_REST_Response( $results );
    $response->header( 'X-WP-Total', $total);
    $response->header( 'X-WP-TotalPages', $totalPages );

    return $response;     
}

function barebones_get_search_args() {
    $args = [];
    $args['s'] = [
       'description' => esc_html__( 'The search term.', 'barebones_' ),
       'type'        => 'string',
   ]; 

   return $args;
}

function barebones_allow_anonymous_comments() {
    return true;
}
add_filter('rest_allow_anonymous_comments','barebones_allow_anonymous_comments');

function barebones_add_to_post_api (){
    register_rest_field( 'post', 'author_name', array(
        'get_callback' => function( $post ) {
            return get_the_author_meta('display_name', $post['author']);
        }
    ));
    register_rest_field( 'post', 'category_name', array(
        'get_callback' => function( $post ) {
            $categories = get_the_category($post['id']);
            return $categories[0]->name; 
        }
    ));
}

add_action( 'rest_api_init', 'barebones_add_to_post_api');



function barebones_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    //  Let WordPress manage the document title.
    //  By adding theme support, we declare that this theme does not use a
    //  hard-coded <title> tag in the document head, and expect WordPress to
    //  provide it for us.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    // @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
    add_theme_support( 'post-thumbnails' );
}

add_action( 'after_setup_theme', 'cacique_setup' );



// add_action( 'init', 'cacique_products_init' );
// // Register a Products post type - @link http://codex.wordpress.org/Function_Reference/register_post_type
// function cacique_products_init() {
//     $labels = array(
//         'name'               => _x( 'Products', 'post type general name', 'cacique' ),
//         'singular_name'      => _x( 'Product', 'post type singular name', 'cacique' ),
//         'menu_name'          => _x( 'Products', 'admin menu', 'cacique' ),
//         'name_admin_bar'     => _x( 'Product', 'add new on admin bar', 'cacique' ),
//         'add_new'            => _x( 'Add New', 'Product', 'cacique' ),
//         'add_new_item'       => __( 'Add New Product', 'cacique' ),
//         'new_item'           => __( 'New Product', 'cacique' ),
//         'edit_item'          => __( 'Edit Product', 'cacique' ),
//         'view_item'          => __( 'View Product', 'cacique' ),
//         'all_items'          => __( 'All Products', 'cacique' ),
//         'search_items'       => __( 'Search Products', 'cacique' ),
//         'parent_item_colon'  => __( 'Parent Products:', 'cacique' ),
//         'not_found'          => __( 'No recipes found.', 'cacique' ),
//         'not_found_in_trash' => __( 'No recipes found in Trash.', 'cacique' )
//     );

//     $args = array(
//         'labels'             => $labels,
//         'description'        => __( 'Description.', 'cacique' ),
//         'public'             => true,
//         'publicly_queryable' => true,
//         'show_ui'            => true,
//         'show_in_menu'       => true,
//         'show_in_rest'       => true,
//         'query_var'          => true,
//         'rewrite'            => array( 'slug' => 'products' ),
//         'capability_type'    => 'post',
//         'has_archive'        => true,
//         'hierarchical'       => false,
//         'menu_position'      => null,
//         'taxonomies'         => array( 'product-category', 'post_tag', 'category' ),
//         'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
//     );

//     register_post_type( 'products', $args );
// }

// add_action( 'init', 'create_product_taxonomy', 0 );

// function create_product_taxonomy() {
//     register_taxonomy(
//         'product-category',
//         'products',
//         array(
//             'labels' => array(
//                 'name' => 'Product Category',
//                 'add_new_item' => 'Add New Product Category',
//                 'new_item_name' => "New Product Category"
//             ),
//             'show_ui' => true,
//             'show_in_rest' => true,
//             'show_tagcloud' => false,
//             'hierarchical' => true
//         )
//     );
// }