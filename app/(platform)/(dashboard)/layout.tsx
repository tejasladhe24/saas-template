import { TopBar } from "./_components/top-bar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="h-full">
        <TopBar className="fixed top-0 h-16" />
        {children}
    </div>
}

export default DashboardLayout