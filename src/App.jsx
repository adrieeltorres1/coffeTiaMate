import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import NossoCafe from "./pages/NossoCafe";

const App = () => {
  return (  
    <>
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/"/>
          <Route path="nosso-cafe" element={<NossoCafe />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;