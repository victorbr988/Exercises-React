import './App.css'
import Pokemon from './Components/Pokemon'
import data from './data';
function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="container">
        {data.map((element) => <Pokemon  pokemons ={element} key={element.id}/>)}
      </div>
      
    </div>
  )
}

export default App
