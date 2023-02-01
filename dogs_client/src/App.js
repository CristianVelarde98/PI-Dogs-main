// css
import "./App.css";

// Routing
import { Routes, Route } from "react-router-dom";

// Paginas
import Landing from "./Paginas/Pagina_Inicial/Landing.jsx";
import Home from "./Paginas/Pagina_Principal/Home.jsx";
import Detalle from "./Paginas/Pagina_Detalle/Detalle.jsx";
import Nuevo from "./Paginas/Crear_Nuevo/Nuevo.jsx";

function App() {
  return (
    <div className="App">
      <div class="bg-container">
        <div class="transparent"></div>
      </div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Detalle/:id" element={<Detalle />} />
        <Route exact path="/Formulario" element={<Nuevo />} />
      </Routes>
    </div>
  );
}

export default App;
