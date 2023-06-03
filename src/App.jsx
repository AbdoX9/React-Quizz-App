import { Home } from "./Components/Home"
import { GlobalStyle } from "./GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Answers } from "./Components/Answers"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/answers"  element={<Answers />}/>
    </Routes>
    
    <GlobalStyle />
    </BrowserRouter>


    )
}

export default App
