
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import{action,comedy,orginals} from './url'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPoster url={orginals} title='Netflix orginals'/>
    <RowPoster url={action} title='Action' isSmall/>
    <RowPoster url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
