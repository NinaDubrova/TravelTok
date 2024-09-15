import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import MainRoutes from './routes/MainRoutes.jsx'

function App() {
  return (
    <div className='app-container'>
      <MainRoutes/>
      <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
    </div>
  )
}

export default App
