let data = [
    {
        "itemName": "Pencil",
        "itemSellingPrice": "10",
        "itemBuyingPrice": "14",
        "itemStatus": "AVAILABLE"
    },
    {
        "itemName": "Pen",
        "itemSellingPrice": "20",
        "itemBuyingPrice": "30",
        "itemStatus": "SOLD"
    },
    {
        "itemName": "Book",
        "itemSellingPrice": "100",
        "itemBuyingPrice": "140",
        "itemStatus": "AVAILABLE"
    }
]

function Table() {
    return (
        <div className="container">
            <table className="table border">
                <thead>
                <tr>
                    <th scope="col">ItemName</th>
                    <th scope="col">ItemSellingPrice</th>
                    <th scope="col">ItemBuyingPrice</th>
                    <th scope="col">AvailableStatus</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.itemName}</td>
                            <td>{val.itemSellingPrice}</td>
                            <td>{val.itemBuyingPrice}</td>
                            <td>{val.itemStatus}</td>
                            <tr><button className="btn btn-light border">Edit</button><button className="btn btn-light border">Delete</button></tr>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;