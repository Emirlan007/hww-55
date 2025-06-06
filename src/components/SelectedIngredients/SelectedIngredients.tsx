import type {SelectedIngredient} from "../../types";
import * as React from "react";

interface SelectedIngredientsProps {
    ingredients: SelectedIngredient[];
    onDelete: (name: string) => void
}

const SelectedIngredients: React.FC<SelectedIngredientsProps> = ({ingredients, onDelete}) => {

    return (
        <>
        {ingredients.map(ingredient => (
                <div key={ingredient.name}
                     style={{display: 'flex',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         marginBottom: '10px'}}
                >
                    <p><b style={{marginRight: '10px'}}>{ingredient.name}</b> x {ingredient.count}</p>
                    {ingredient.count > 0 ? <button className="remove-btn" onClick={() =>onDelete(ingredient.name)}>Remove</button> : null}

                </div>
            ))}
            </>
    );
};

export default SelectedIngredients;