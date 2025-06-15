import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import NossoCafe from "./pages/NossoCafe";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import Cardapio from "./pages/Cardapio";

const App = () => {
  return (  
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/"/>
          <Route path="nosso-cafe" element={<NossoCafe />}/>
          <Route path="noticias" element={<Noticias />}/>
          <Route path="contato" element={<Contato />}/>
          <Route path="cardapio" element={<Cardapio />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;