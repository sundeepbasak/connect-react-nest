import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCat from "./components/AddCat";
import EditCat from "./components/EditCat";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cats/add' element={<AddCat />} />
          <Route path='/cats/edit/:id' element={<EditCat />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
