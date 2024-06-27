function TitleProduct({ title, link }) {
    return (<>
        <div className="d-flex justify-content-between pt-3 pb-3 align-items-center">
            <h4>{title}</h4>
            <a href={link}>Xem thêm</a>
        </div>
    </>)
}
export default TitleProduct;