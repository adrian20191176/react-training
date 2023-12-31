import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

import { useRef } from 'react';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const amountNumber = +enteredAmount;
        props.onAddToCart(amountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount"
            ref={amountInputRef}
            input={{
                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: '1'
            }} />
        <button>+ Add</button>
    </form>
};

export default MealItemForm;