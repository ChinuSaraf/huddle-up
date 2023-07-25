import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PureComponent } from "react";
import Header from "./components/common/header";
import NoPage from "./components/common/no-page";
import Events from "./components/events";
import BreakTime from "./components/breakTime";
import SelectCategories from "./components/selectCategories";
import SelectUsername from "./components/selectUsername";

export class App extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<BreakTime />}/>
            <Route index element={<BreakTime />} />
            <Route path="events" element={<Events />}/>
            <Route path="breakTime" element={<BreakTime />}/>
            <Route path="selectCategories" element={<SelectCategories />}/>
            <Route path="selectUsername" element={<SelectUsername />}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }
};

export default App;
