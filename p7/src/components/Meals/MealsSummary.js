import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Deliverered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available melas and enjoy
                a delicius lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time 
                and course by experienced chefs!
            </p>
        </section>
    ) 
}

export default MealsSummary