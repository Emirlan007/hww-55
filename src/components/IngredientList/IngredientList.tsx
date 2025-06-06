import IngredientItem from "../IngredientItem/IngredientItem.tsx";
import type {Ingredient} from "../../types";

interface IngredientListProps {
    ingredients: Ingredient[];
    onAdd: (name: string) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, onAdd }) => {
    return (
        <>
        {ingredients.map(INGRED => (
                <IngredientItem
                    key={INGRED.name}
                    ingredient={INGRED}
                    onAdd={onAdd}
                />
            ))}
        </>
    )
}

export default IngredientList