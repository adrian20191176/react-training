import { DUMMY_MEALS } from '../../assets/meals';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} itemDescription={meal.description} />);
    return <section className={classes.meals}>
        <Card>
            <ul>{meals}</ul>
        </Card>
    </section>
};


export default AvailableMeals;