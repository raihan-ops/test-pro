import './admin-layout.css'
import LogoutButton from "@/components/common/LogoutButton";
import SideMenu from "@/components/layouts/admin/SideMenu";

export const metadata = {
    title: "Admin Portal",
    description: "Admin Portal",
}

const AdminLayout = ({children}) => {
    return (
        <div className="admin-layout-wrapper w-full h-screen flex flex-row relative">
            <SideMenu/>
            <div className="flex-1 h-full">
                <div className="h-16 bg-emerald-700 flex items-center justify-end px-8">
                    <LogoutButton/>
                </div>
                <div className="w-full h-[calc(100%-64px)] p-2">
                    <div className="p-4 h-full border overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;
