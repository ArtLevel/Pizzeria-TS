import React, {FC} from 'react'
import SinglePizza from './SinglePizza';
import Pizza from '../models/Pizza'

interface DisplayPizzasProps {
	pizzasList: Pizza[]
	updatePizza: (newPizza: Pizza) => void,
	deletePizza: (id: Pizza['id']) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
	return (
		<div className='container'>
			{pizzasList.map(pizza => {
				return <SinglePizza key={pizza.id} pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza}/>
			})}
		</div>
	)
}

export default DisplayPizzas

