import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AddUpdate from "./pages/AddUpdate";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/addupdate" element={<AddUpdate />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
