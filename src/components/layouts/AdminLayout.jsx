"use client";
import { useRouter } from "next/router";
import { LogOut, FileText } from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("your_token");
    router.push("/");
  };

  const navItems = [
    { name: "Reports", path: "/reports", icon: <FileText size={18} /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#244A77] text-white flex flex-col shadow-md">
        <div className="flex justify-center items-center p-2">
          <img
            src="/images/icons/logo.svg"
            alt="Logo"
            className="w-30 h-auto"
          />
        </div>

        <nav className="flex flex-col gap-3 flex-grow px-2 py-6">
          {navItems.map((item, index) => (
            <div className="w-full hover:bg-white hover:text-black" key={index}>
              <button
                onClick={() => router.push(item.path)}
                className={`flex items-center gap-3 px-3 py-2 cursor-pointer text-left transition rounded-md w-full ${
                  router.pathname === item.path
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <header className="h-auto py-4 bg-white border-b px-6 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-800">Dashboard |</h1>
            <span className="text-gray-600 ml-1">Welcome, User</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer gap-3 px-3 py-2 bg-gray-400 rounded-md mt-auto text-white hover:text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </header>

        {/* main Content */}
        <main className="flex-1 h-auto p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
