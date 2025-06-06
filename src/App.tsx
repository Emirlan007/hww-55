import './App.css';
import type {Ingredient, SelectedIngredient} from "./types";
import { useState } from "react";
import meatImage from "./assets/meat.jpeg";
import cheeseImage from "./assets/cheese.jpeg";
import baconImage from "./assets/bacon.jpeg";
import saladImage from "./assets/salad.jpeg";
import IngredientList from "./components/IngredientList/IngredientList.tsx";
import SelectedIngredients from "./components/SelectedIngredients/SelectedIngredients.tsx";

const App = () => {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: baconImage},
    {name: 'Salad', price: 10, image: saladImage},
  ];

  const [ingredients, setIngredients] = useState<SelectedIngredient[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Salad', count: 0},
  ]);
  
  const addIngredient = (nameIngred: string) => {
    setIngredients((prevState) => {
      return prevState.map( (ingred) => {
        if (ingred.name === nameIngred) {
          return {
            ...ingred,
            count: ingred.count + 1,
          };
        }
        return ingred;
      });
    });
  };

  const deleteIngredient = (nameIngred: string) => {
    setIngredients((prevState) => {
      return prevState.map( (ingred) => {
        if (ingred.name === nameIngred) {
          return {
            ...ingred,
            count: ingred.count - 1,
          };
        }
        return ingred;
      });
    });
  };

  const buildBurger = () => {
    const burgerComponents: string[] = [];

    ingredients.forEach(ingredient => {
      if (ingredient.count > 0 ) {
        for (let i = 0; i < ingredient.count; i++) {
          burgerComponents.push(ingredient.name)
        }
      }
    });
    return (
        <>
          {burgerComponents.map((burgerItem, i) => (
            <div key={burgerItem + i} className={burgerItem}></div>
          ))}
        </>
    );
  };


  let total = 30;

  if (ingredients.length > 0 && INGREDIENTS.length > 0) {
    total = INGREDIENTS.reduce((acc, ING) => {
      ingredients.forEach(ing => {
        if (ing.name === ING.name) {
          acc = acc + ing.count * ING.price;
        }
      })
      return acc;
    }, 30);
  }

  return (
    <>
      <div className="container">

        <div className="ingredients">
          <h3>Ingredients</h3>
          <div className="ingredients-items">
            <div>
              <IngredientList ingredients={INGREDIENTS} onAdd={addIngredient} />
            </div>
            <div style={{width:'59%', marginLeft: '10px'}}>
              <SelectedIngredients ingredients={ingredients} onDelete={deleteIngredient}/>
            </div>
          </div>
        </div>

        <div className="burger">
          <h3>Burger</h3>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {buildBurger()}
            <div className="BreadBottom"></div>
          </div>
          <p><b>Price:</b> {total}</p>
        </div>

      </div>
    </>
  )
};

export default App;
