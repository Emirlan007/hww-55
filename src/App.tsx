import './App.css';
import type {Ingredient, SelectedIngredient} from "./types";
import { useState } from "react";
import meatImage from "./assets/meat.jpeg";
import cheeseImage from "./assets/cheese.jpeg";
import baconImage from "./assets/bacon.jpeg";
import saladImage from "./assets/salad.jpeg";

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
          }
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
          }
        }
        return ingred;
      });
    });
  }

  
  return (
    <>
      <div className="container">

        <div className="ingredients">
          <h3>Ingredients</h3>
          <div className="ingredients-items">
            <div>
              {INGREDIENTS.map(INGRED => (
                  <div key={INGRED.name} className="ingredient">
                    <button className="btn-ing"
                            onClick={() => addIngredient(INGRED.name)}
                    >
                      <img className="ingredient-image"
                           src={INGRED.image}
                           alt={INGRED.name}/>
                      <span className="price">({INGRED.price} som)</span>
                    </button>

                  </div>
              ))}
            </div>
            <div style={{width:'59%', marginLeft: '10px'}}>
              {ingredients.map(ingredient => (
                  <div key={ingredient.name}
                       style={{display: 'flex',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         marginBottom: '10px'}}
                  >
                    <p><b style={{marginRight: '10px'}}>{ingredient.name}</b> x {ingredient.count}</p>
                    {ingredient.count > 0 ? <button className="remove-btn" onClick={() =>deleteIngredient(ingredient.name)}>Remove</button> : null}

                  </div>
              ))}
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

            <div className="BreadBottom"></div>
          </div>
          <p><b>Price</b> {}</p>
        </div>

      </div>

    </>
  )
};

export default App
