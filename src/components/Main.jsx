import TitleTable from "./TitleTable";

function Main() {
    const students = [
        { id: 1, fullName: "Phùng Đức Đăng", email: "a@gmail.com", sex: true, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" },
        { id: 2, fullName: "Đỗ Quang Anh", email: "a@gmail.com", sex: true, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" },
        { id: 3, fullName: "Phạm Tuấn ANh", email: "a@gmail.com", sex: true, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" },
        { id: 4, fullName: "Phạm Băng Băng", email: "a@gmail.com", sex: false, avatar: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-12.jpg" }
    ]
    return (<>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <TitleTable title="Danh sách sinh viên" />
                    {students.length > 0 ?
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>FullName</th>
                                    <th>Email</th>
                                    <th>Sex</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td scope="row">{item.id}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.sex ? "Nam" : "Nữ"}</td>
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
export default Main;