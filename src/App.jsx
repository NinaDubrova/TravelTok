import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import './App.css'

function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
