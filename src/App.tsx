import { Header, Footer } from "@/components/index"
import { Outlet, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  const routes = ["/login", "/signup"]

  if (routes.includes(location.pathname)) {
    return (
      <>
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <Header />
          <main>
            <Outlet />
          </main>
        <Footer />
      </>
    )
  }
}

