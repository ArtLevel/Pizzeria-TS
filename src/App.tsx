import React, {FC, useState} from 'react'
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './models/Pizza'

import './App.css'
import DisplayPizzas from './components/DisplayPizzas';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList(prevState => {
      return [
        ...prevState,
        newPizza
      ]
    })
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(prevState => {
      return prevState.map(pizza => pizza.id === newPizza.id ? newPizza : pizza)
    })
  }

  const deletePizza = (id: Pizza['id']) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaForm
          addPizza={addPizza}
        />
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  )
}

export default App;
