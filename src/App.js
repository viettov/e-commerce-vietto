import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo='Título Provisional' descripcion='----'/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
