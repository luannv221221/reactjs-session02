import { useState } from "react";

function DemoFunctionalC() {
    const [fullName, setFullName] = useState("Phùng Đăng");
    const changeText = () => {
        setFullName("Tên mơi")
    }
    return (<>
        <h1>Xin chao Class Component {fullName}</h1>
        <button onClick={changeText}>Change Text 2</button >
    </>)
}
export default DemoFunctionalC;