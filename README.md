### Cannon Keys Website "Remake" w/ Bootstrap

This project was modeled after https://cannonkeys.com/, one of my personal favorite websites! Overall a very simple, bright, and clean website with great responsiveness/feedback throughout the website.

I'll refer to cannonkeys as the 'original' website.

## Features

The original website greets you with a massive carousel to display different products, and a clean/simple nav bar at the top of the screen. I replicated those same features within my remake using bootstrap components and css.

## Bootstrap Components/Features Used

# Home Page

- Carousel
- Breakpoints
- Bootstrap Table
- Buttons
- Containers
- Text Utilities

# Contact Us / FAQ

- Accordian
- Bootstrap Grid
- Forms
- Validation
- Containers
- Breakpoints

# Navbar

- Offcanvas
- Dropdown menu
- Buttons
- Containers
- Breakpoints


## Javascript

I added 4 functions within main.js, 3 of which are features I plan to implement as detailed below...


# addToCart

A simple function that would take an element of a product (most likely the product ID) and add it into the cart array. Afterward we then call the updateItemCount function, further detailed below...

# updateItemCount

The function first sets a variable itemCount == to the length of the cart array. Then the function fetches an HTML element w/ the ID 'item-count' and sets it equal to our variable, itemCount.

This I would plan to use with an icon to display next to the cart icon on the navbar to show the user how many items are in their cart.

# getDiscountedPrice

This function would calculate what the total price would be for a product, taking both the price and discount variable in as arguments. If the discount is == 0, then we wouldn't do any math and return the original price. Otherwise, we will take the discount (for example .2, 20%) and subtract it from 1 (leaving us with .8), then we multiply the price and resulting discount value and return the final discounted price.

# Validation Function

This function is a working script within the website that enables the browsers built-in form validation. The contact us form is then validated with the original HTML rules (input type="email" for example).

