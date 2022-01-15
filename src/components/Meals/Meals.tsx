import { Fragment, FC } from 'react'

import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals: FC = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals
