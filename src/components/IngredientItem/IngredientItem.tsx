import type {Ingredient} from "../../types";

interface IngredientItemProps {
    ingredient: Ingredient;
    onAdd: (name: string) => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, onAdd }) => {

    return (
        <div className="ingredient">
            <button className="btn-ing" onClick={() => onAdd(ingredient.name)}>
                <img
                    className="ingredient-image"
                    src={ingredient.image}
                    alt={ingredient.name}
                />
                <span className="price">({ingredient.price} som)</span>
            </button>
        </div>
    );

};

export default IngredientItem;