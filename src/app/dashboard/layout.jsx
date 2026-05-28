import NavLink from "@/components/NavLink";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-5">
        <h2 className="text-2xl font-bold mb-5">
          <span className="text-orange-500">Paw</span><span className="text-blue-500">Haven</span>
        </h2>

        <div className="flex flex-col gap-3">

         
          <NavLink href="/dashboard/my-requests" > My Requests</NavLink>
          <NavLink href="/dashboard/add-pet"> Add Pet</NavLink>
          <NavLink href="/dashboard/my-listings"> My Listings</NavLink>

        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-5 bg-gray-100">
        {children}
      </div>

    </div>
  );
}