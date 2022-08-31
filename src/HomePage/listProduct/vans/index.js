

function Vans () {

    let products = [
        'image/pixlr-bg-result (1).png',
        'image/pixlr-bg-result (2).png',
        'image/pixlr-bg-result (3).png',
        'image/pixlr-bg-result (4).png',
        'image/pixlr-bg-result (5).png',
        'image/pixlr-bg-result (6).png',
        'image/pixlr-bg-result (7).png',
        'image/pixlr-bg-result (8).png',
        'image/pixlr-bg-result (9).png',
        'image/pixlr-bg-result (10).png',
        'image/pixlr-bg-result (11).png',
        'image/pixlr-bg-result (12).png'
    ]

    function RenderBanner ({title}){
        return <img src={`image/${title}-sneaker.jpg`} width="100%" alt=""></img>
    }

    function RenderProductsBrand({ title, products }) {
        let productsBrand = products.map((product, index) => {
            return <div key={title + index} className="col-lg-2 col-6 col-sm-4">
                <div className="product">
                    <div className="product__icon">
                        <i className='bx bx-news'></i>
                    </div>
                    <div className="product__image">
                        <img src={product} width="100%" alt="" />
                    </div>
                    <div className="product__name">
                        <p>JORDAN 1 LOW SMOKE V1</p>
                    </div>
                    <div className="product__price">
                        <p>600.000 VND</p>
                    </div>
                    <div className="product__action">
                        <a href=""><button>Thông Tin</button></a>
                        <a href=""><button>Đặt Hàng</button></a>
                    </div>
                </div>
            </div>
        })
        return productsBrand;
    }
    

    return (
        <div className="row" id="vans" style={{justifyContent: 'center', marginTop: '50px'}}>
            <div className="col-lg-10" id="vans__banner" style={{cursor: 'pointer'}}>
                <RenderBanner title='vans'/>
            </div>
            <div className="col-lg-10" style={{marginTop: '50px'}}>
                <div className="row row-sneakers row-sneakers-vans">
                    <RenderProductsBrand title='vans' products={products} />
                </div>
                <div className="see-more">
                        <p>See More ...</p>
                </div>
            </div>
        </div>
    )
}

export default Vans