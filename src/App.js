
import { Route, Routes } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

import NameForm from "./views/NameForm";
import LocationForm from "./views/LocationForm";
import SuccessMessage from "./views/SuccessMessage";
import Agencies from "./views/Agencies";
import "./App.css";

const App = () => {

  //const history = useNavigate();



  // const getCompStep = () => {
  //   switch (step) {
  //     case 1: 
  //       return <LocationForm />;
  //     case 2: 
  //       return <NameForm />;
  //     case 3:
  //       return <SuccessMessage/>;
  //     case 4:
  //       return <Agencies/>;
  //     default:
  //       return <LocationForm/>;
  //   }
  // }

  return (
    <div className='container p-4 mt-2 col-md-5'>
      
      {/* <>{getCompStep()}</> */}
    
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