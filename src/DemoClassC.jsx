import React from "react";

class DemoClassC extends React.Component {
    constructor() {
        super();
        this.state = { fullName: "Phùng Đăng" }
        this.changeText = this.changeText.bind(this)
    }
    changeText() {
        this.setState({ fullName: "Tuần ANh" })
    }
    render() {
        return (<>
            <h1>Xin chao Class Component {this.state.fullName}</h1>
            <button onClick={this.changeText}>Change Text</button>
        </>)
    }
}

export default DemoClassC;