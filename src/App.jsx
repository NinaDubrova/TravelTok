import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import './App.css'
import MainRoutes from './routes/routes.jsx'

function App() {

  return (
    <div className='app-container'>
      <MainRoutes/>
    </div>
  )
}

export default App
