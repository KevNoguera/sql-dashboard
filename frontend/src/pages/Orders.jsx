import { useState } from "react"

export default function Orders() {
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState(null)
    const [ascending, setAscending] = useState(true)
    const [page, setPage] = useState(1)
    const perPage = 5


    const orders = [
        { id: 1, customer: "John Doe", total: 120, status: "Paid" },
        { id: 2, customer: "Kevin Noguera", total: 80, status: "Pending" },
        { id: 3, customer: "Yuderly Tique", total: 45, status: "Cancelled" },
    ]
    const filtered = orders.filter(order => 
        order.customer.toLowerCase().includes(search.toLowerCase())
    )

    const sorted = [...filtered].sort((a,b) => {
        if (!sortBy) return 0

        if (a[sortBy] < b[sortBy]) return ascending ? -1 : 1
        if (a[sortBy] > b[sortBy]) return ascending ? 1 : -1
        return 0
    })

    const start = (page - 1) * perPage
    const paginated = sorted.slice(start, start + perPage)

    const totalPages = Math.ceil(sorted.length / perPage)


    const exportCSV = () => {
        const headers = ["ID","Customer","Total","Status"]

        const rows = filtered.map(order => [
            order.id,
            order.customer,
            order.total,
            order.status
        ])

        let csvContent = 
        headers.join(",") + "\n" + 
        rows.map(row => row.join(",")).join("\n")

        const blob = new Blob([csvContent], { type: "text/csv"})
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = "orders-report.csv"
        a.click()
    }

    const handleSort = (column) => {
        if (sortBy === column) {
            setAscending(!ascending)
        } else {
            setSortBy(column)
            setAscending(true)
        }
    }

    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Orders</h1>

        <input 
        type="text" 
        placeholder="Search customer..." 
        className="mb-4 p-2 rounded bg-slate-700"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}/>

        <button
        onClick={exportCSV}
        className="mb-4 ml-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
            Export CSV
        </button>
        

        <div className="bg-slate-800 rounded-lg p-4">
          <table className="w-full">
            <thead>
            <tr className="text-left border-b border-slate-600">
            <th onClick={() => handleSort("id")} className="p-3 cursor-pointer">ID</th>
            <th onClick={() => handleSort("customer")} className="p-3 cursor-pointer">Customers</th>
            <th onClick={() => handleSort("total")} className="p-3 cursor-pointer">Total</th>
            <th onClick={() => handleSort("status")} className="p-3 cursor-pointer">Status</th>
          </tr>
            </thead>

            <tbody>
                {paginated.map(order => (
                    <tr key={order.id} className="border-b border-slate-700">
                        <td className="p-3">{order.id}</td>
                        <td className="p-3">{order.customer}</td>
                        <td className="p-3">${order.total}</td>
                        <td className="p-3">
                            <span className={ 
                                order.status === "Paid" 
                                ? "text-green-400" 
                                : order.status === "Pending" 
                                ? "text-yellow-400"
                                : "text-red-400"
                            }>
                            {order.status}
                            </span>
                        </td>
                    </tr>
               ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">

            <button
            onClick ={() => setPage(p => Math.max(p - 1, 1))}
            className="bg-slate-700 px-3 py-1 rounded"
            >
            Prev
            </button>
            
            <span>
                Page {page} of {totalPages}
            </span>

            <button 
            onClick={() => setPage (p => Math.min(p +1, totalPages))}
            className="bg-slate-700 px-3 py-1 rounded"
            >
                Next 
            </button>

          </div>
        </div>
      </div>
    )
  }