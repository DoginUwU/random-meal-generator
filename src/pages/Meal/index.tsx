import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Meal as MealProps } from "../../@types/meal";
import Button from "../../components/Button";
import api from "../../utils/axios";
import {
  Container,
  Categorys,
  Instructions,
  Ingredients,
  Loading,
} from "./styles";

const Meal = () => {
  const history = useHistory();
  const [meal, setMeal] = useState<MealProps>();

  useEffect(() => {
    api.get<{ meals: MealProps[] }>("/random.php").then((response) => {
      const { meals } = response.data;
      const ingredients = [];

      for (let index = 1; index < 999; index++) {
        const ingredient = meals[0][`strIngredient${index}`];
        const measure = meals[0][`strMeasure${index}`];
        if (!ingredient && !measure) break;
        if (ingredient.length) {
          ingredients.push({
            ingredient,
            measure,
          });
        }
      }
      setMeal({ ...meals[0], ingredients });
    });
  }, []);

  const handleReload = () => {
    history.go(0);
  };

  return (
    <Container>
      <Button onClick={handleReload}>Get meal 🍕</Button>
      {meal ? (
        <>
          <h1>{meal.strMeal}</h1>
          <Categorys>
            <li>{meal.strCategory}</li>
            <li>{meal.strArea}</li>
            {meal.strTags &&
              meal.strTags
                .split(",")
                .filter((a) => a.length > 0)
                .map((tag) => <li key={tag}>{tag}</li>)}
          </Categorys>
          <Instructions>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
          </Instructions>
          <Ingredients>
            <h3>Ingredients</h3>
            <ul>
              {meal.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>{ingredient.ingredient}</span>
                  <span id="measure">{ingredient.measure}</span>
                </li>
              ))}
            </ul>
            <iframe
              src={meal.strYoutube.replace("watch?v=", "embed/")}
              title="video"
            />
          </Ingredients>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </Container>
  );
};

export default Meal;
