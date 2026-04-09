export default function Dashboard (){
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols4 gap-4">
                <div className="bg-blue-500 p-4 rounded-lg">Revenue</div>
                <div className="bg-purple-500 p-4 rounded-lg">Orders</div>
                <div className="bg-green-500 p-4 rounded-lg">Customers</div>
                <div className="bg-orange-500 p-4 rounded-lg">Top Products</div>

            </div>
        </div>
    )
}