import MobileSidebar from "./MobileSidebar"
import MainLayout from "./MainLayout"
import SidebarLayout from "./SidebarLayout"

export default function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SidebarLayout />
        <div className="flex flex-col">
            <MobileSidebar />
            <MainLayout />
        </div>
    </div>
  )
}
