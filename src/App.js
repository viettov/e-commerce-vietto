import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo='Título Provisional' descripcion='----'/>
      <ItemCount stock={5} initial={0}/>
    </>
  );
}

export default App;
