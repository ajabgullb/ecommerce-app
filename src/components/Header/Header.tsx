import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { ShoppingCart, User } from 'lucide-react'
import { useSelector } from 'react-redux'

import { DropdownMenu, 
  DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

interface IAuthStatus {
  state: Object
  auth: { authStatus: Boolean }
}

export default function Header() {
  const navigate = useNavigate()
  const isLogedIn = useSelector((state: IAuthStatus) => state.auth.authStatus)

  return (
    <header className='sticky w-full mb-3 p-5 flex justify-around items-center border-b-black border-1'>
      <Link to="/home" className='text-3xl font-bold'>
        Ajab<span className='text-orange-700'>Comm</span>
      </Link>

      <nav className='flex gap-5 font-medium'>
        <NavLink 
          className={({ isActive }) => (
            isActive ? "text-orange-700" : "text-black hover:text-orange-700"
          )} 
          to="/home">
            Home
        </NavLink>

        <NavLink 
          className={({ isActive }) => (
            isActive ? "text-orange-700" : "text-black hover:text-orange-700"
          )} 
          to="/about">
            About Us
          </NavLink>

        <NavLink 
          className={({ isActive }) => (
            isActive ? "text-orange-700" : "text-black hover:text-orange-700"
          )} 
          to="/products">
            Products
        </NavLink>

        <NavLink 
          className={({ isActive }) => (
            isActive ? "text-orange-700" : "text-black hover:text-orange-700"
          )} 
          to="/contact">
            Contact Us
        </NavLink>
      </nav>

      <div className='flex gap-5 items-center'>

        {isLogedIn ? (
          <div className='flex justify-center items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger className='cursor-pointer'>
                <User />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>Profile</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>Billing</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>Team</DropdownMenuItem>
                <DropdownMenuItem className='text-red-800 cursor-pointer'>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className='flex gap-2'>
            <Button variant={'outline'}
              className='bg-orange-700 text-white cursor-pointer' 
              onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant={'outline'}
              className='bg-orange-700 text-white cursor-pointer' 
              onClick={() => navigate("/signup")}>
              Signup
            </Button>
          </div>
        )}

        <div>
          <Link to="/cart">
            <ShoppingCart  />
          </Link>
        </div>
      </div>

    </header>
  )
}

