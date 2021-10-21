export interface Meal {
  idMeal: number;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  ingredients: {
    ingredient: string;
    measure: string;
  }[];
  strImageSource: string;
  strSource: string;
  [key: string]: any;
}
