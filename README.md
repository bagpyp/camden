# This is a Big Commerce website, created for Hillcrest Sports by Robbie Cunningham and Dylan Manley.
## Made with a custom Camden template for Big Commerce, using React, Javascript, Handelbars, Jquery, SCSS, Webpack, Node and HTML.


# f
F is for flair, framework, foundation, first, footing, fundamental, focus, flexible, etc... This is a modified version of the BigCommerce [Cornerstone](https://github.com/bigcommerce/cornerstone) base theme which we use at Flair Consultancy to build all new BC Themes.

### Stencil Documentation
Refer to the [Stencil](https://stencil.bigcommerce.com/docs) documentation site for details on how to work with the BigCommerce theme framework.

## Features of this base theme
We have built into this base theme the following modules, which you may include by default, or disable within config.json and remove from the Theme Editor schema. We would recommend not removing the styles, scripts and templates from the theme, as we may want to introduce features in future theme updates. All features can be controlled through config.json.

### PaymentFont Integration
This enables us to offer a wider selection of payment method and provider logos on the frontend. Current logos available:

* AmazonPay
* American Express
* Apple Pay
* Diners
* Discover
* JCB
* Klarna
* Mastercard
* Mastercard SecureCode
* Paypal
* Verified by Visa
* Visa
* Visa Pay
* Powered by Braintree
* Powered by SagePay
* Powered by Skrill
* Powered by Square
* Powered by Stripe

### FontAwesome 5 Free Integration
We have included the popular [FontAwesome 5](https://fontawesome.com/) library in our theme. You can simply include references to their icons as described in their documentation - this will also work for theme customers using these in their store content. Note that only the free, open source, commercial use icons are included in this theme.

```
<i class="fas fa-shopping-cart"></i>
```

### Animate on Scroll support
We have included the [AOS](http://michalsnik.github.io/aos/) library in our base theme. To activate animation support, set the `enable_animations` option in config.json to `true`. Includin the following component inside element tags in theme files `{{> components/f/animations/aos}}` will generate the minimum required `data-aos` attribute. Include variables to set further options.

As an example `<div class="foo" {{> components/f/animations/aos effect='flip-left' offset='300' duration='2000' easing='ease-out-cubic' delay='1000' anchor='#selector' anchor_placement='top-center' once='true'}}>` will generate all the optional advance setting attributes as described in the [AOS documentation](https://github.com/michalsnik/aos#-advanced-settings).

### Maximum Page Width
We have provided a config.json variable: `max_page_width`, to easily control the maximum container width for the theme project. This may or may not be exposed to the theme editor schema, depending on our theme design. Reference this value in your scss using `stencilNumber("max_page_width")`.

### Storyboard Hero Banner
Set `carousel-type` in config.json to `storyboard` to activate our contemporary style hero banners. We have set up basic styling for positioning 1-5 banners.

### Hero Container Width
Set the width of the hero container to either full width (no margins) or to match the width of the `.container` class, defined above. In config.json, set the value of `hero_width` to `full` or `contain`.

### Global Banner Strip
Enable a sitewide global banner to appear below the main navigation by setting `show_global_banner` in config.json to `true`. For the banner to display then at least one of the `global_banner_message_X` options must be populated. the message and URL fields are limited to 64 chartacters. The `global_banner_link_X` options should only contain the [path](https://www.mattcutts.com/blog/seo-glossary-url-definitions/) to the related content, not the protocol and hostname. The schema has been set up to offer an optional list of FontAwesome icons to attach to each banner message.

### Newsletter Popup
We have included a simple newsletter popup module that can be configured to prompt store visitors to join the mailing list. Activate it by setting `show_newsletter_popup` in config.json to `true`. Once you submit an email address or dismiss the popup, the module will set a cookie to prevent itself from appearing again for 999 days (on submit) or the time specified in `newsletter_popup_reappear_after` (in days). Delete the `nlHide` cookie to get the popup to appear again, or style the opacity/display for the `.newsletterPopup-overlay` class in your inspector.

Adjust `newsletter_popup_delay` in config.json to change the delay in ms between page load and the popup appearing.

We have set up an experimental way to pull a banner image into the popup. Assign a filename to the `newsletter_popup_image` option in config.json, i.e. `newsletter.jpg`. Note that this value has a 64 character limit. Our theme will then pull the filename from the stores WebDAV file system. A theme owner will need to create a folder called `img` in the `content` folder, and then upload a file, the same name and format, to pull it into the newsletter popup.

There are some customisation fields available for the newsletter related to styling: `newsletter_popup_backgroundColor`, `newsletter_popup_text_color` and `newsletter_popup_close_color`. We have also provided fields to easily override the language strings used in the popup: `newsletter_popup_title` and `newsletter_popup_intro`.

### Add to Cart Mode
Control the behavior of the add to cart functionality on the product page with `add_to_cart_mode` in config.json. Set to either display a popup window (`popup`), drop the minicart (`dropdown`) or show nothing and simply update the cart quantity (`none`).

### Infinite Scroll on Category Page
Set `enable_infinte_scrolling` to `true` in config.json to enable [Infinite Scroll](https://infinite-scroll.com/) on the category page.

### On Sale Badges
We have replaced the current Cornerstone sale badge system with our own, to match the classes of our other custom labels. Set `show_sale_tags` in config.json to `true` and any discounted product, i.e. with a sale price will display the tag.

### Sale Percentage Savings
With sale tags enabled, you can also choose to show the percentage saved as another tag on the product grid. Set `show_percentage_saving` to `true` to activate this feature. These tags will only display if Sales Badges are activated.

### Custom Labels on Product Grid
Store owners can attach a custom label to products listed in the category grid by setting up a custom field with the label `Promotion Label`. Our base theme also works for stores using our legacy theme with used the field label `GridTag`. Control whether these custom labels appear on the frontend by setting `show_custom_product_labels` in config.json to `true` or `false`.

### Show All Custom Fields on Product Grid
Setting `show_custom_fields_on_grid` to `true` in config.json will display all custom fields attached to a product in the category grid listing. Custom fields with the reserved labels "Promotion Label", "GridTag", "Related Content" and "Blog Post Description" will be ignored and will not display on the frontend.

### Show Availability Field on Product Grid
Setting `show_availability_on_grid` to `true` in config.json will pull each products "Availability" field into the category listing grid.

### Show Stock on Product Grid
The setting `show_stock_level_on_grid` should be set to `false` by default, when bundling a theme, as the system generates stock levels on any products with inventory levels, regardless of the control panel inventory display settings. Enabling this feature will show a stock level on each product in the category grid.

### Show Selling Fast Tags on Product Grid
Like the setting above, leave `show_selling_fast_tags` set to `false` by default, as this acts in the same way. If activated, it will show a "Selling Fast!" label on the product grid if inventory levels are equal to or less than the set warning level.

### Colour Swatches on Product Grid
We have included a module to display colour swatches on any product with a colour swatch option in the category grid listing. Set `show_swatches_on_grid` to `true` in config.json to enable this module. Options must be configured to use the swatch type for these to display.

### Colour Swatch Shape
We have bundled two styles for colour swatches in our base theme; square and round. To display round swatches, set `enable_circular_swatches` to `true` in config.json. These styles will apply sitewide, on the category, quick view and product pages.

### Size Options on Product Grid
We have included a module to display product sizes on the category grid listing. Set `show_sizes_on_grid` to `true` in config.json to enable this module. Set the value of `size_label` to match the label used in store for the option set you want to display, i.e. `Size`.

### Show Add to Wishlist on Product Grid
Setting `show_wishlist_on_grid` in config.json to `true` will display an Add to Wishlist button on the category product listing grid.

### Rename the Warranty Field
As the "Warranty" field attached to product data can contain HTML, we have included an easy way for the customer to override the name of the field label on the frontend, without delving into the language files. Set `rename_warranty_field` to any character string to render a new label on the frontend. Note that this string is limited to 64 characters.

### Show Newest Blog Articles on the Homepage
Setting `show_articles_on_homepage` to `true` in config.json will enable a panel on the homepage to display latest posts. It will pull in thumbnail images from each post if they exist. The number of posts displayed is dependent on the `homepage_blog_posts_count` setting. The `homepage_blog_posts_column_count` setting assigns the number of columns on the desktop view in the frontend.

### Sticky Header Navigation
Set `enable_sticky_navigation` to `true` to enable a sticky header navigation. This will make the main navigation, logo and cart element stick to the top of the viewport on screens over 800 pixels wide.

### Configurable Navigation
Six styles of navigation have been added for desktop viewports. In config.json, set `navigation_design` to `simple` for a traditional dropdown menu, listing top level categories in the main navigation, droping into subcategories and expanding as further child categories require. Set to `expanded` for a similar dropdown style, this time displaying third level child categories under subcategory headings. Set to `marketplace` for a columnised mega-menu style dropdown.

In addition to these three styles, set `enclose_category_menu` to `true` to enclose all category navigation menus inside a single "Shop Online" link. Clicking the link will display new variations of the navigation. Set the name of this enclosed menu link using `enclosed_category_menu_name`.

To hide the "View All [Top Level Category]" link in the non-enclosed menu versions, set `hide_category_view_all` to true.

### Featured Categories on the Homepage
We have included a custom panel that will pull in specific categories that you want to feature. This is flexible enough for the store owner to determine which categories they want to feature without having to base it off an existing category structure. To enable the feature, set `show_homepage_featured_categories` to `true` in config.json. Set how many columns will appear on the desktop version by assigning `featured_category_columns`.

Once activated, the panel will search for a category the store owner has designated as the top level featured category. Set this value against `featured_category_name`. Note that this field has a 64 character limit. The panel will locate the specified top level category, and providing it contains subcategories, will list those as the "Featured Categories". We recommend setting up a category image for each featured category to pull through into that grid.

There are two additional options for this panel - setting `hide_featured_category_names` to `true` will hide the category name that appears in addition to the featured category image. This is useful if a store owner wants to include styled text in the category image. Setting `hide_navigation_featured_categories` to `true` will hide the specified top level "featured" category from the main navigation.

### Display the Store Phone Number in the Header
Set `show_phone_number_in_header` to `true` in config.json.

### Image Hover Switcher on the Product Grid
We have included a module in our base theme that switches the product thumbnail image on the category grid with a second alternative image on hover. This will always pull in the second image from the product image object. To ensure that our module works correctly, the main second image in sequence should not be set to display as the thumbnail in the store control panel. Both the original thumbnail and the second hover image should be the same dimensions/ratio. To activate this feature, set `enable_image_hover_switcher` to `true` in config.json.

### Product Count on Category Listing
This shows the total number of products in a category, along with a count of how many are currently displaying. If the total is 100 or less, a link will appear with the option to "Show All". If there are more than 100 products in a category, the link will give the option to "Show 100 Products". To disable this feature, set `hide_product_count_on_category` to `true` in config.json.

### Replace the Utility Menu with Icons
This option replaces the text labels in the top utility menu, i.e. "Search", "My Account" etc. with FontAwesome 5 icons. Set `replace_utility_menu_with_icons` in config.json to `true` to enable this.

### Custom Cart Icon
To accommodate all types of stores, we have linked the cart icon to a FontAwesome 5 class. [Available icons](https://fontawesome.com/icons?d=gallery&q=shopping) are shopping-cart, shopping-basket and shopping-bag. Set `cart_icon` in config.json to `cart`, `basket` or `bag` to select the appropriate icon.

### Hide Category Image on Category Pages
The option `hide_category_image_on_categories` in config.json should be set to `true` if we use category images for navigation purposes. Any imagery used for marketing can be added through the built in banners system or through the category content editor.

### Show Sub Categories as a Grid on Category Pages
Enabling this mode will replace the list of sub categories on the left column of the category page with a grid in the main content column. This is best used when sub categories have images assigned to them. Set `show_subcategories_as_grid` to `true` to activate this feature, and specify how many columns will be shown in the desktop viewport by setting `subcategories_grid_column_count`.

### Show Selected Swatch Option in Labels on the Product Page
By request we have included a feature that shows the name of a selected colour swatch or "rectangle" option next to the label. Enable it by setting `show_selected_option_on_label` to `true` in config.json.

### Editorial Mode
We have developed a module that can link products to blog posts and list them in an article, and link related blog posts to product pages. To enable this feature, set `enable_editorial_mode` to `true` in config.json.

To set up linked products in a blog post, you can do so by adding a tag that starts `RP:` followed by the ID of a product you want to link. `RP:90` will link the product with the ID of 90 to the post on the frontend. Include further products by delimiting the ID's with colons, i.e. `RP:77:78:90`. This will pull product ID's 77, 78 and 90 into the post when rendered on the frontend. These special tags will not appear in the blog post tags section on the frontend.

You can pull in additional content into the related products by setting up a custom field with the label `Blog Post Description`, and assigning the value content that you would like to display on the listing. Note that there is a 256 character limit on custom field values. This may include HTML.

To include a related blog article on a product page, set up a custom field on the product with the label `Related Content`. In the value, paste the URL of the related blog post. Note that you must be using the blog on your BC site, not an external blog.

Both the "Related Content" and "Blog Post Description" fields will not show up in our themes on the product page in the frontend.

### Twitter Embedded Timelines
Our base theme includes an option to embed a Twitter timeline widget on the homepage. Set `enable_embedded_twitter_feed` to `true` in config.json to activate the module. We have set up the module to pull in a curated collection from Twitter, that needs to be administered from Tweetdeck. Once a collection has been created, set the following options up - `twitter_screen_name` should reflect the store owner's Twitter account name, `twitter_collection_id` should reflect the curated collection ID and `twitter_display_type` should be set to either `timeline` or `grid` depending on how the timeline should be displayed. The number of posts displayed can be adjusted in the `twitter_posts_count` setting.

### Instagram Feed
We have included [Instafeed.js](http://instafeedjs.com/) in this base theme. To enable the feed, set `enable_instagram_feed` in config.json to `true`. Instafeed has been configured to pull in a users feed of images from their own Instagram account. This will require a valid access token with an access scope of `basic`. Generate an access token with the [blackCICIDA app](https://apps.blackcicada.com/instagram-access-token-generator/), and set `instagram_access_token` to the value of the generated token string.

Limit the number of posts pulled into the module by setting `instagram_posts_count` and adjust the number of columns displayed on the frontend on a desktop viewport by setting `instagram_columns_count`.
