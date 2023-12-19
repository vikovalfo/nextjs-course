import MealItem from './meal-item';
import styles from './meals-grid.module.css';

export default function MealGrid({ meals }) {
    return (
        <>
            <ul className={styles.meals}>
                {meals.map(meal => <li key={meal.id}><MealItem {...meal} /></li>)}
            </ul>
        </>
    );
}