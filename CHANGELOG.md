# Changelog

## 1.5.0 (2020-04-22)

### Added
- Control to stop newly created "ungrouped" accounts being able to see the catalogue and pricing

### Fixed
- Homepage hero content not showing when set to lockdown mode 2
- Display issue on account created screen
- Display issue with SVG icons focus state in header

## 1.4.0 (2020-04-16)

### Added
- Page Builder regions to homepage, content, category, product and article pages
- Page Builder regions to header and footer

### Fixed
- Issue with min-height being applied by sticky cart when page is short
- Cart bug where quantities would be changed after hitting enter key
- Wishlist bug where new wishlists could be created without a name and deleted without confirmation
- Positioning issue with new PayPal buttons
- Issue where an address could not be deleted in address list

## 1.3.0 (2019-08-06)

### Added
- Additional schema data for Google
- Controls for homepage login box colors in the theme editor

### Changed
- Handlebars scope for Options on returns page
- Switched off dynamic typing in the multi-add CSV import script
- Optimized SVG icons
- Align subcategories as a grid with padding
- Layout of compare page to accommodate more than 4 products
- Hide the description container on the product page if empty

### Fixed
- SKU fields now available on the product page even when master product has no SKU
- AMP iframe now loading correctly
- Stop add/remove buttons jumping around in Chrome and Safari on the multi-add page
- Add to cart script bug when quantity boxes are switched off
- Add to cart styling when quantity boxes are switched off
- Wishlist display switcher on account page
- Wishlist grid on account page
- Issue with hero slide 1 height on large screens
- Display issues in account/recent order details when order shipped to multiple locations

## 1.2.2 (2019-05-22)

### Changed
- Multi add form no longer removes form rows on success

### Fixed
- Bug with server responses when using quick add by SKU

## 1.2.1 (2019-04-23)

### Fixed
- Stock level only shows in search result when theme setting is enabled

## 1.2.0 (2019-04-17)

### Added
- Additional payment icons for the majority of Adyen services
- New save to list functionality, available in the B2B features panel in theme editor

### Fixed
- Sale tag now shows on the product page for sale items
- Issue with recent platform change to the faceted search system

### Removed
- Unnecessary font options in the optimized checkout settings in theme editor

## 1.1.0 (2019-04-09)

### Added
- New CSV upload feature on the add multiple SKUs page. Upload a 2 column CSV with a "sku" and "qty" heading to mass submit a cart
- Option to show product SKUs in the cart and mini cart
- Option to show the quantity already in cart on product cards and lists
- Google Pay, Alipay, WeChat Pay and UnionPay payment icons

### Changed
- Replaced Payment Font with SVG payment icons
- Optimized the mobile homepage

### Fixed
- Adjusted margins on the coupon and gift certificate boxes in the cart
- Restored borders to the header form inputs so they display correctly when the background is set to white
- Short description now appears on mobile product pages
- Adjusted some spacing issues with the product page image carousel
- View Full Description now links correctly in quick view modal

## 1.0.1 (2019-03-29)

### Added
- Option in theme editor to hide "ex. tax" label when only ex. tax prices are visible

### Changed
- Made the image panel on the product page sticky when products have a long options set

### Fixed
- Cleaned up the checkout page message when a minimum order value is set

## 1.0.0 (2019-03-19)
- Initial commit for the theme store
