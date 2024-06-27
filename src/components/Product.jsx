import TitleTable from "./TitleTable";

function Product() {
    const students = [
        { id: 1, name: "Sản phẩm 1", price: 14000, status: true, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" },
        { id: 2, name: "Sản phẩm 1", price: 14000, status: true, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" },

    ]
    return (<>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <TitleTable title="Danh sách sản phâm"></TitleTable>

                    {students.length > 0 ?
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td scope="row">{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td>
                                                <img style={{ width: 100 }} src={item.avatar} alt="" />
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                        : <div className="text-center"><img src="https://sittovietnam.vn/img/notFound.png" alt="" /></div>
                    }
                </div>

            </div>
        </div>
    </>)
}
export default Product;