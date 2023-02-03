// css
import "./App.css";

// Routing
import { Routes, Route } from "react-router-dom";

// Paginas
import Landing from "./Paginas/Pagina_Inicial/Landing.jsx";
import Home from "./Paginas/Pagina_Principal/Home.jsx";
import Detalle from "./Paginas/Pagina_Detalle/Detalle.jsx";
import Nuevo from "./Paginas/Crear_Nuevo/Nuevo.jsx";
import Loading from "./Paginas/Loading/Loading";

function App() {
  return (
    <div class="bg-container">
      <div class="transparent">
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Detalle/:id" element={<Detalle />} />
            <Route exact path="/Formulario" element={<Nuevo />} />
            <Route exact path="/CARGA" element={<Loading />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
