import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Order from './pages/Order'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Order}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App