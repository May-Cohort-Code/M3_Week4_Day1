import "./App.css";
import { Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/Apartmentspage";
import AddApartmentPage from "./pages/AddApartmentPage";
import ApartmentDetails from "./pages/ApartmentDetails";
 
 
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
        <Route path="/:id" element={<ApartmentDetails></ApartmentDetails>}></Route>
      </Routes>
    </div>
  );
}
 
export default App;