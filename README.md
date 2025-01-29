# GadgetHeaven✨

Ultimate destination for cutting-edge, must-have gadgets!

## Live Website

[Visit GadgetHeaven Live](https://gadget-heaven-himadree.netlify.app/)

## Requirement Document

[Download Requirements](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)

## React Fundamentals Used

- **React Components:** Modular, reusable code for UI elements.
- **React Hooks:**
  - `useState` for state management.
  - `useEffect` for side effects like data fetching.
- **React Router:**
  - `Link` for routing different paths.
  - `navLink` for designing active links.
  - `useLoaderData` for efficient static data fetching.
  - `useLocation` for dynamic page-specific styles.
  - `useNavigate` for smooth navigation without loading.
- **React Props:** Passing data between components.

## Data Handling and Management

- **LocalStorage**: To store & persist data (cart and wishlist) across sessions.Also for implementing sigh-up feature and personalized section for the signed-up user.

## Key Features

1. **Structured Navigation:**

   - Navigation bar with active route indicators.
   - Consistent layout across all platforms such as mobile,laptop.
   - 404 page for invalid link

2. **Dynamic Product Pages:**

   - Categories with nested layouts.
   - Individual product detail pages with all properties (e.g., name, price, rating).

3. **Interactive Cart and Wishlist:**

   - Add/remove items in both the cart and wishlist.
   - Prevent duplicate cart & wishlist additions.
   - Add to cart directly from the wishlist with updated cart subtotal.

4. **Enhanced User Experience:**

   - Sort cart items by price (descending).
   - Toast notifications for cart and wishlist updates.
   - Display congratulatory modal upon purchase completion, followed by automatic cart reset.
   - Gadget Heaven news for only the signed-up user

5. **Statistics Page:**
   - Price vs. Product Name Composed Chart (Bar, Area, and Scatter).
