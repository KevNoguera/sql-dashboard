import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css'
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Reports from "./pages/Reports"
import Logs from "./pages/Logs"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex gap-6">

        <aside className="w-64 bg-slate-800 p-6">
          <h1 className="text-2xl font-bold mb-6">
            SQL-Dashboard
          </h1>
          <nav className="space-y-3">
            <Link to="/" className="block">Dashboard</Link>
            <Link to="/orders" className="block">Orders</Link>
            <Link to="/reports" className="block">Reports</Link>
            <Link to="/logs" className="block">Logs</Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}