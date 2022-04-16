import { BrowserRouter } from "react-router-dom";
import Context from "./components/pages/context/context";
import Header from "./components/header";
import AnimatedRoutes from "./components/animatedRoutes";

function App() {
  return (
    <Context>
      <BrowserRouter>
           <Header />
      <AnimatedRoutes />
      </BrowserRouter>
      </Context>
  );
}

export default App;
