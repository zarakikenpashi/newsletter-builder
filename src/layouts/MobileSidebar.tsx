import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import {
    CircleUser,
    Home,
    Mailbox,
    Mails,
    Menu,
    Search,
    Users,
  } from "lucide-react"
import { NavLink,Link } from "react-router-dom"

export default function MobileSidebar() {
  return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link 
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                  
                >
                  <Mailbox className="h-6 w-6" />
                  <span className="sr-only">NewsBuilder</span>
                </Link>
                <NavLink
          className={({ isActive }) => {
            return `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
              isActive && 'bg-muted'}`; 
          }}
          to="/"
          >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>

                <NavLink
          className={({ isActive }) => {
            return `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
              isActive && 'bg-muted'
          }`; 
          }}
          to="/newsletters"
          >
                  <Mails className="h-5 w-5" />
                  NewsLetters
                </NavLink>
                <NavLink
          className={({ isActive }) => {
            return `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
              isActive && 'bg-muted'
          }`; 
          }}
          to="/users"
                >
                  <Users className="h-5 w-5" />
                  Users
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Recherche un email..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Paramètres</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
  )
}
