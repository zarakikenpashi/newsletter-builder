import { NavLink } from "react-router-dom"
import {
  Home,
  Mailbox,
  Mails,
  Users,
} from "lucide-react"

export default function SidebarLayout() {
  return (
    
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
        <Mailbox className="h-6 w-6" />
          <span className="">NewsBuilder</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <NavLink
          className={({ isActive }) => {
            return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
              isActive && 'bg-muted'
          }`; 
          }}
          to="/"
          > 
            <Home className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink
          className={({ isActive }) => {
            return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
              isActive && 'bg-muted'
          }`; 
          }}
          to="/newsletters"
          >
            <Mails className="h-4 w-4" />
            NewsLetters
          </NavLink>
          <NavLink
          className={({ isActive }) => {
            return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
              isActive && 'bg-muted'
          }`; 
          }}
          to="/users"
          >
            <Users className="h-4 w-4" />
            Users{" "}
          </NavLink>
        </nav>
      </div>
    </div>
  </div>
  )
}
