type Item = {
      vegetarian: boolean,
      vegan: boolean,
      glutenFree: boolean,
      dairyFree: boolean,
      veryHealthy: boolean,
      cheap: boolean,
      veryPopular: boolean,
      sustainable: boolean,
      lowFodmap: boolean,
      weightWatcherSmartPoints: number,
      gaps: string,
      preparationMinutes: number,
      cookingMinutes: number,
      aggregateLikes: number,
      healthScore: number,
      creditsText: string,
      license: string,
      sourceName: string,
      pricePerServing: number,
      extendedIngredients: {
          id: number,
          aisle: string,
          image: string,
          consistency: string,
          name: string,
          nameClean: string,
          original:  string,
          originalName: string,
          amount: number,
          unit: string,
          meta: never[] | string[],
          measures: {
            us: {
              amount: number,
              unitShort: string,
              unitLong: string
            },
            metric: {
              amount: number,
              unitShort: string,
              unitLong: string
            }
          }
        }[],
  
        id: number,
        title: string,
        readyInMinutes: number,
        servings: number,
        sourceUrl: string,
        image: string,
        imageType: string,
        summary: string,
        cuisines: string[],
        dishTypes: string[],
        diets: string[],
        occasions: never[] | string[],
        instructions: string,
        analyzedInstructions: {
          name: string,
          steps: {
            number: number,
            step: string,
            ingredients: {
              id: number,
              name: string,
              localizedName: string,
              image: string,
            }[] | never[],
            equipment: {
              id: number,
              name: string,
              localizedName: string,
              image: string,
            }[] | never[],
          }[],
        }[],
        originalId: null,
        spoonacularScore: number,
        spoonacularSourceUrl: string,
      };

type Item2 = {
  id: number,
  title: string,
  image: string,
  imageType: string,
}[];