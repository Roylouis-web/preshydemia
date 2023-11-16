const getTrending = async (): Promise<Item[]> => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=20`);
    const data = await response.json();
    localStorage.setItem("trending", JSON.stringify(data.recipes));
    return data.recipes;
}

const getVegetarian = async (): Promise<Item[]> => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=20&tags=vegetarian`);
    const data = await response.json();
    localStorage.setItem("veggies", JSON.stringify(data.recipes));
    return data.recipes;
}

const getCategory = async (category: string): Promise<Item2> => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${category}`);
    const data = await response.json();
    localStorage.setItem(category, JSON.stringify(data.results));
    return data.results;
}

const getDish = async (id: string): Promise<Item> => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json();
    return data;
}

const getSearch = async (search: string): Promise<(Item2 | boolean)[]> => {
    let notFound = false;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}`);
    const data = await response.json();
    if (data.results.length === 0) {
        notFound = true;
    }
    return [data.results, notFound];
}

export { getTrending, getVegetarian, getCategory, getDish, getSearch }