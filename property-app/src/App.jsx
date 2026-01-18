import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { Brochure } from './pages/Brochure'

const App = () => {


  return (
    <>
    <Router>
      <Routes>
        <Route path ='/' element={<Brochure/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
