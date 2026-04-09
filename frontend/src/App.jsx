export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      
      <aside className="w-64 bg-slate-800 p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-3">
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Orders Analytics
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-500 p-4 rounded-lg">Revenue</div>
          <div className="bg-purple-500 p-4 rounded-lg">Orders</div>
          <div className="bg-green-500 p-4 rounded-lg">Customers</div>
          <div className="bg-orange-500 p-4 rounded-lg">Top Product</div>
        </div>

      </main>

    </div>
  )
}