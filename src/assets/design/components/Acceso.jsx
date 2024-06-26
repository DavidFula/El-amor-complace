import '../components/Acceso.css'; // Importa el archivo de estilos CSS
import { useNavigate } from 'react-router-dom';

const Acceso = () => {
  const navigate = useNavigate();

  // Función para manejar el clic en el botón de entrar
  const handleEntrarClick = () => {
    navigate('/HomePage'); 
  };

  // Función para manejar el clic en el botón de salir
  const handleSalirClick = () => {
    window.open('https://www.google.com', '_blank'); // Abre una nueva pestaña con la página de Google
    window.close(); // Cierra la ventana actual
  };

  return (
    <div className="container-form">
      <div className="information">
        <div className="info-childs">
          <h2>El amor complace</h2>
          <p>Verificación de edad. Este sitio web contiene material restringido a menores de edad, que incluye desnudez y representaciones explícitas de actividad sexual. Al entrar, afirma que tiene por lo menos 18 años de edad o la mayoría de edad en la jurisdicción desde que está accediendo al sitio web y que da consentimiento en ver contenido explícito.</p>
          {/* Botón para acceder */}
          <button className="btn-primary" onClick={handleEntrarClick}>Tengo 18 años - Entrar</button>
          {/* Botón para salir */}
          <input type="button" className="btn-secondary" value="No tengo 18 años - Salir" onClick={handleSalirClick} />
        </div>
      </div>
    </div>
  );
};

export default Acceso;


