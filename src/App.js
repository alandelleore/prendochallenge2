
import { Route, Routes } from "react-router-dom";

// VISTAS
import NameForm from "./views/NameForm";
import LocationForm from "./views/LocationForm";
import SuccessMessage from "./views/SuccessMessage";
import Agencies from "./views/Agencies";
import "./App.css";

const App = () => {

  return (
    <div className='container p-4 mt-2 col-md-5'>
      <Routes>
        <Route path="/" element={<LocationForm/>}/>
        <Route path="/step2" element={<NameForm/>}/>
        <Route path="/step3" element={<SuccessMessage/>}/>
        <Route path="/step4" element={<Agencies/>}/>
      </Routes>
    </div>
  )
}

export default App