import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import MealItem from '../../components/Meals/MealItem/MealItem'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];



function AvailableMeals() {

    const mealList=DUMMY_MEALS
        .map(meal=><MealItem key={meal.id} name={meal.name} 
                      description={meal.description} 
                            price={meal.price} />
                                                    );

    return (
        <Section className='meals'>
          <Card>
              <ul>
                  {mealList}
              </ul>
          </Card>
        </Section>
    )
}


const Section=styled.section`
&.meals {
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: meals-appear 1s ease-out forwards;
}

&.meals ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

@keyframes meals-appear {
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`;






export default AvailableMeals;
