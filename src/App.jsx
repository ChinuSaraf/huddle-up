import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PureComponent } from "react";
import Header from "./components/common/header";
import NoPage from "./components/common/no-page";
import Events from "./components/events";
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
            <Route path="/" element={<Events />}/>
            <Route index element={<Events />} />
            <Route path="events" element={<Events />}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }
};

export default App;
