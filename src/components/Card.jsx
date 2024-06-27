function Card({ productName, image }) {
    return (<>
        <div className="card">
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
                <h4 className="card-title text-center">{productName}</h4>
                <a href="" className='btn btn-block btn-success'>Xem thêm</a>
            </div>
        </div>
    </>)
}
export default Card;