import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function Dashboard (){

    const data = [
        { name: "Paid", value: 12},
        { name: "Pending", value: 5},
        { name: "Refunded", value: 2 }
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-500 p-4 rounded-lg">Revenue</div>
                <div className="bg-purple-500 p-4 rounded-lg">Orders</div>
                <div className="bg-green-500 p-4 rounded-lg">Customers</div>
                <div className="bg-orange-500 p-4 rounded-lg">Top Products</div>
            </div>

            <div className = "bg-slate-800 p-6 rounded-lg">
                <h2 className = "mb-4 text-lg"> Orders by Status</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="value"/>
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    )
}