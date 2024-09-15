import { ToastContainer } from 'react-toastify'
import './App.css'
import MainRoutes from './routes/routes.jsx'
import 'react-toastify/dist/ReactToastify.css';

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
