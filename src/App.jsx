import './App.css'
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App() {

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/about',
    element: <h1>About</h1>
  },
  {
    path: '/contact',
    element: <h1>Contact</h1>
  },
])  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
