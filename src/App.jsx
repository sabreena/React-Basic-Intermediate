import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

function App() {
  let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/store":
      component = <Store />;
      break;
    case "/about":
      component = <About />;
      break;
    default:
      component = <Home />;
  }

  return (
    <>
    <Navbar />
    {component}
    </>
  )
}

export default App;
