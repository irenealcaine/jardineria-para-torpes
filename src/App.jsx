import SideMenu from "./components/SideMenu"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List"
import Tips from "./pages/Tips";
import Plagues from "./pages/Plagues";
import Fertilizers from "./pages/Fertilizers";



function App() {

  return (
    <>
      <Router>
        <div className="flex">
          <SideMenu />
          <div id="container" className="absolute md:static pl-20 md:pl-0 z-0 w-full h-full bg-green-50">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<List />} />
              <Route path='/tips' element={<Tips />} />
              <Route path='/plagues' element={<Plagues />} />
              <Route path='/fertilizers' element={<Fertilizers />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
