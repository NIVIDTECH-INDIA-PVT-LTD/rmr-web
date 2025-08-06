'use client';
import { useRouter } from 'next/router';
import { LogOut, FileText } from 'lucide-react';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("your_token");
    router.push("/admin");
  };

  const navItems = [
    { name: "Reports", path: "/reports", icon: <FileText size={18} /> },

  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f2937] text-white flex flex-col px-5 py-8 shadow-md">
        <h2 className="text-2xl font-bold mb-10 tracking-wide">MyApp</h2>

        <nav className="flex flex-col gap-3 flex-grow">
          {navItems.map((item, index) => (
            <div className='w-full hover:bg-blue-600'>
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className={`flex items-center gap-3 px-3 py-2 cursor-pointer text-left transition ${
                router.pathname === item.path ? "bg-gray-700 w-full" : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
            </div>
          ))}

          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer gap-3 px-3 py-2 rounded-md mt-auto text-red-400 hover:text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 h-full">
        {/* Header */}
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm z-10">
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <span className="text-gray-600">Welcome, User</span>
        </header>

        {/* main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
