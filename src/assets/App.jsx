import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './design/components/Acceso'; // Importa el componente Acceso
import MainHeader from './design/components/MainHeader';
import MainProduct from './design/components/MainProduct';
import Categoria1 from './design/components/Categorías/Categoría1'; // Ejemplo para Lencería y disfraces
import Categoria2 from './design/components/Categorías/Categoría2'; // Ejemplo para otra categoría
// Agrega más importaciones para otras categorías

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceso />} />
        <Route path="/HomePage" element={
          <>
            <MainHeader /> 
            <MainProduct />
            
          </>
        } />
        {/* Agrega más rutas para otras categorías */}
      </Routes>
    </Router>
  );
};

export default App;

