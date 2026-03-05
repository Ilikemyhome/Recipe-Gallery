# Recipe Gallery

A simple and responsive recipe gallery built with React and Vite. The gallery displays a collection of recipes using a card layout, including each recipe’s title, image, and list of ingredients. This project demonstrates component-based UI design, JSX rendering, array mapping, and basic responsive styling.

## Setup & Installation
Follow these steps to run the project locally:
npm create vite@latest recipe-gallery -- --template react
cd recipe-gallery
npm install
npm run dev


The development server will start and provide a local URL where you can view the app.

## Project Structure
src/
  components/
    RecipeGallery.jsx
  App.jsx
  App.css
  main.jsx


- RecipeGallery.jsx renders the recipe cards.
- App.jsx imports and displays the gallery.
- App.css contains global and gallery styling.


## Features
- Displays multiple recipes using a clean card layout.
- Each card includes:
- Recipe title
- Ingredients list
- Image with uniform sizing
- Responsive grid layout using CSS Grid.
- Modular component structure.


## Each recipe object includes:
- id — unique identifier
- title — recipe name
- ingredients — array of ingredient strings
- image — URL to a recipe image


## Test Cases

### Normal Cases
- Gallery renders all recipes
- All recipe cards appear with correct titles, images, and ingredients.
- Images display uniformly
- All images have the same height and width due to CSS rules.
- Ingredients list renders correctly
- Each recipe shows all ingredients as list items.
### Edge Cases
- Missing or invalid image URL
    - Card still renders; browser shows a broken image icon.
- Empty ingredients array
    - Card renders with an empty list area and no errors.
- Duplicate or missing recipe ID
- React logs a warning about keys, but the gallery still displays.


## Responsiveness- Layout adjusts automatically using auto-fit and minmax().
- Cards wrap into multiple columns on larger screens.
- Single-column layout on small screens.


