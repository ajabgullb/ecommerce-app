import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"

import { About, Contact, Home, Products, Login, Signup } from './pages/index.ts'
import store from "./store/store.ts"
import App from './App.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/home", element: <Home />, },
    { path: "/about", element: <About />, },
    { path: "/contact", element: <Contact />, },
    { path: "/products", element: <Products />, },
    { path: "/login", element: <Login />, },
    { path: "/signup", element: <Signup />, },
  ]
}])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Provider>
)

