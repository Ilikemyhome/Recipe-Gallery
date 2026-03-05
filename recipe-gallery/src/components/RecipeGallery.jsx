import React from "react";



const recipes = [
  {
    id: 1,
    title: "Pozole Rojo",
    ingredients: ["Pork", "Hominy", "Guajillo Chiles", "Garlic", "Oregano", "Lettuce", "Radishes", "Lime"],
    image: "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/E10_pozole_OCHS5740_s4x3.jpg.rend.hgtvcom.826.620.suffix/1567710898657.webp"
  },
  {
    id: 2,
    title: "Tacos de Asada",
    ingredients: ["Steak", "Tortillas", "Cilantro", "Onion", "Lime"],
    image: "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/carne-asada-tacos1-1196x560.jpg"
  },
  {
    id: 3,
    title: "Chilaquiles Verdes",
    ingredients: ["Tortilla Chips", "Salsa Verde", "Crema", "Cheese", "Eggs"],
    image: "https://www.isabeleats.com/wp-content/uploads/2020/10/chilaquiles-verdes-small-9.jpg"
  },

  {
    id: 4,
    title: "Broken image",
    ingredients: ["Ingredient 1", "Ingredient 2"],
    image: "https://example.com/broken-image.jpg"
  },

  {
    id: 5,
    title: "No ingredients",
    ingredients: [],
    image: "https://images.ctfassets.net/r208a72kad0m/MooSrKbLUDMOHCSMfMLO7/bb9694cc579f03383c322eb6488b81a0/Kattraser__1_.png?w=1086&q=100"
  },

  {
    
    title: "No id",
    ingredients: ["ingredient 1", "ingredient 2"],
    image: "https://images.ctfassets.net/r208a72kad0m/MooSrKbLUDMOHCSMfMLO7/bb9694cc579f03383c322eb6488b81a0/Kattraser__1_.png?w=1086&q=100"
  }
];

export default function RecipeGallery() {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}