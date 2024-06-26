import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './design/components/Acceso'; // Importa el componente Acceso
import MainHeader from './design/components/MainHeader';
import MainProduct from './design/components/MainProduct';

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
      </Routes>
    </Router>
    );

    
};

export default App;


