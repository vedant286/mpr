import { Home } from "./Components/Home"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Sign } from "./Components/Sign"
import { Signup } from "./Components/Signup"
import { Main } from "./Components/Main"
const App = () => {
  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Sign/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
