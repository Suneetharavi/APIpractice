//Importing route and our components
import { Route, Routes } from "react-router-dom";
import Cat from "./pages/Cat"
import Nav from "./components/Nav";


export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/Cat" element={<Cat/>}/>
        </Routes>
    </div>
  );
}