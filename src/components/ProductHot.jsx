import sp from '../assets/sp.jpg';
import Card from './Card';
import TitleProduct from './TitleProduct';
function ProductHot() {
    const productNews = [
        { id: 1, productName: "Sản phẩm 1", image: sp },
        { id: 2, productName: "Sản phẩm 2", image: sp },
        { id: 3, productName: "Sản phẩm 3", image: sp },
        { id: 4, productName: "Sản phẩm 4", image: sp },
        { id: 5, productName: "Sản phẩm 5", image: sp },
        { id: 6, productName: "Sản phẩm 6", image: sp },

    ]
    return (<>
        <div className="container">
            <TitleProduct title="Sản phẩm Hot" link="link-gi-day" />
            <div className="row">
                {productNews.map(item =>
                    <div className="col-lg-4" key={item.id}>
                        <Card productName={item.productName} image={item.image} />
                    </div>
                )}


            </div>
        </div>
    </>)
}
export default ProductHot;

