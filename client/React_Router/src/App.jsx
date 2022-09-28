import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Detail from "./components/Details"
import NoMatch from "./components/NoMatch"
import User from "./components/User"
import Profile from "./components/Profile"
import Dynamic from "./components/Dynamic"

function App() {
  return (
    <div className="App w-full flex justify-center items-center">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="details" element={<Detail />} >
          <Route path="user" element={<User />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="profile/:id" element={<Dynamic />}/>
        </Route>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  )
}

export default App