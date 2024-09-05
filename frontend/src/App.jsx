import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import NotFound from "./Pages/NotFound"

const App = () => {
  return (
<Router>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/success" element={<Success/>}/>
<Route path="/notfound" element={<NotFound/>}/>
</Routes>
<Toaster/>
</Router>
  )
}

export default App
