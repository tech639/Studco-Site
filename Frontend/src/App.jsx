import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import PrivateRoutes from './routes/PrivatesRoutes'
import LandingPage from './pages/LandingPage'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './pages/Dashboard'
import {withAuthenticationRequired} from '@auth0/auth0-react'

function App() { 
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/dashboard' element={<PrivateRoutes component={Dashboard} />}/>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
