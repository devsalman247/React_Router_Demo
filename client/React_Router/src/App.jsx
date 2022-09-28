import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Detail from "./components/Details"
import NoMatch from "./components/NoMatch"

function App() {
  return (
    <div className="App w-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="details" element={<Detail />} />
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  )
}

export default App