const apiKey = process.env.SPOONACULAR_API_KEY;

export default async function fetchRecipeById(recipeId) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    );
    const data = await response.json();
    return data || [];
  } catch (e) {}
}

export async function fetchRandomRecipes(number) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.recipes || [];
  } catch (e) {}
}

export async function searchRecipes(params, number) {
  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
  url.searchParams.append("apiKey", apiKey);
  url.searchParams.append("number", number);
  url.searchParams.append("addRecipeInformation", "true");
  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (e) {}
}

export async function searchPopularRecipes(number) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?number=${number}&addRecipeInformation=true&sort=popularity&apiKey=${apiKey}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (e) {}
}

// ...existing code...
