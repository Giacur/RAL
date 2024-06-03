import { useEffect, useState } from "react";
import "./App.css";
import "flowbite";
import HeaderImage from "./components/HeaderImage";
import Main from "./pages/Main";
import Calculator from "./pages/Calculator";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);

  //! gestionde dello stato per cambio pagina
  const [selectedPage, setSelectedPage] = useState(0);  

  const changePageHandler = () => {
    setSelectedPage(1);
  }

  if(selectedPage === 0) {
    return <Main onClick={changePageHandler} />;
  }else if(selectedPage === 1) {
    return <Calculator />
  }
}

export default App;
