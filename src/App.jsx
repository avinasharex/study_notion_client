import { Route, Routes } from 'react-router-dom'
import './input.css'
import Home from './Pages/Home'
function App() {
  return (
    <div className='flex flex-col bg-black w-screen min-h-screen'>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </div>
  )
}

export default App
