import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MainRoutes from './routes/MainRoutes.jsx'
import AdminRoutes from './routes/AdminRoutes.jsx';
import './styles/App.css'

function App() {
  return (
    <div className='app-container'>
      <MainRoutes/>
      <AdminRoutes/>
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
