import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";

const App:React.FC=()=>{

  return(
    <div className="bg-[rgba(24,24,26,1)]">
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
    </div>
  )
}

export default App;