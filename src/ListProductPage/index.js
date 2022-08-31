
import { useEffect, useReducer } from 'react'
import Footer from './footer'
import './ListProductPage.scss'

function ListProductPage ({title}) {
    let cateProducts = [
        {
            name : 'jordan',
            types : ['Jordan Low', 'Jordan High', 'Jordan Mid']
        },
        {
            name : 'nike',
            types : ['Nike Low', 'Nike High', 'Nike Mid']
        },
        {
            name : 'adidas',
            types : ['adidas Low', 'adidas High', 'adidas Mid']
        },
        {
            name : 'vans',
            types : ['vans Low', 'vans High', 'vans Mid']
        },
        {
            name : 'vans',
            types : ['vans Low', 'vans High', 'vans Mid']
        },
        {
            name : 'vans',
            types : ['vans Low', 'vans High', 'vans Mid']
        },
        {
            name : 'vans',
            types : ['vans Low', 'vans High', 'vans Mid']
        },
    ]
    let prices = ['Dưới 500.000đ', '500.000đ - 1.000.000đ', '1.000.000đ - 1.500.000đ', '1.500.000đ - 2.000.000đ', 'Trên 2.000.000đ']
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
    let isOpenListType = false
    const handleClickCateProduct = (name) => {
        if (isOpenListType === false) {
            let listType = document.querySelector('#' + name + ' .listType')
            listType.style.display = 'block'
            listType.classList.add('active')
            isOpenListType = true
        }else {
            let listType = document.querySelector('#' + name + ' .listType')
            let active = document.querySelector('.active')
            if (listType === active) {
                isOpenListType = false
                listType.classList.remove('active')
                listType.style.display = 'none'
            }else {
                active.classList.remove('active')
                listType.classList.add('active')
                active.style.display = 'none'
                listType.style.display = 'block'
            }
        }
    }
    const RenderProductsBrand = ({ title, products }) => {
        let productsBrand = products.map((product, index) => {
            return <div key={title + index} className="col-lg-3 col-6 col-sm-4">
                <div className="product">
                    <div className="product__icon">
                        <i className="fa-solid fa-cart-plus" style={{fontSize : '25px'}}></i>
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
                        <a href=""><button><i className="fa-solid fa-circle-question"></i> Thông Tin</button></a>
                        <a href=""><button><i className="fa-solid fa-cart-shopping"></i> Đặt Hàng</button></a>
                    </div>
                </div>
            </div>
        })
        return productsBrand;
    }
    let sizes = [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5]

    useEffect(() => {
        let btnOption = document.getElementById('btnOption')
        let wrapper__TOC = document.getElementById('wrapper__TOC')
        let content = document.querySelector('.content')
        let btnCloseTOC = document.getElementById('btnClose__TOC')
        let mainContent = document.getElementById('wrapper__mainContent')

        window.onscroll = () => {
           const cur_Top = window.scrollY - 55
           btnOption.style.marginTop = window.scrollY + 'px'
           wrapper__TOC.style.top =  cur_Top + 'px'
        }
        btnOption.onclick = () => {
            btnOption.style.display = 'none'
            mainContent.style.opacity = '0.3'
            wrapper__TOC.style.left = '0'
        }
        btnCloseTOC.onclick = () => {
            btnOption.style.display = 'block'
            wrapper__TOC.style.left =  content.offsetWidth + 'px'
            mainContent.style.opacity = '1'
        }   
        if (content.offsetWidth <= 1023) {
                wrapper__TOC.style.position = 'absolute'
                wrapper__TOC.style.width = content.offsetWidth
                wrapper__TOC.style.left =  content.offsetWidth + 'px'
        } 
            
    })
    return (
        <div id='listProduct'>
            <div id='parentToChildren' className='col-lg-12'>
                {'Trang Chủ > ' + ' All ' + title}
            </div>
            <div id='wrapper'>
                <div id='btnOption'><i className="fa-solid fa-angle-left"></i></div>
                <div id='wrapper__TOC' className='col-lg-2'>
                    <div id='btnClose__TOC'><i class="fa-solid fa-xmark"></i></div>
                    <div className='wrapper__TOC_item'>
                        <h5>DANH MỤC SẢN PHẨM</h5>
                        <div className='categoryArea'>
                            {cateProducts.map((cateProduct) => {
                                return <div 
                                            onClick={() => handleClickCateProduct(cateProduct.name)} 
                                            id={cateProduct.name} 
                                            key={cateProduct.name}
                                            className='categoryProduct'
                                        >
                                        <p><img src={`https://bit.ly/${cateProduct.name}-icon`}width='30px' height="100%" alt=""/> {cateProduct.name.toUpperCase()} </p>
                                        <div className='listType' style={{display: 'none', marginLeft : '20px'}}>
                                            {cateProduct.types.map((type) => {
                                                return (
                                                    <p key={type}>{type}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                            })}
                        </div>
                    </div>
                    
                    <div className='wrapper__TOC_item'>
                        <h5>MỨC GIÁ</h5>
                        <div className='categoryArea'>
                            {prices.map((price) => {
                                console.log('a')
                                return <div key={'price' + price}>
                                        <p className='price'> <input type='radio' /> {price}</p>
                                    </div>
                            })}
                        </div>
                    </div>

                    <div className='wrapper__TOC_item'>
                        <h5>THEO KÍCH CỠ</h5>
                        <div className='categoryArea cateSizes'>
                            {sizes.map((size) => {
                                return <div key={'size' + size} style={{padding : '0px 7px'}}>
                                        <p className='size'> <input type='checkbox' /> {size}</p>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
                <div id='wrapper__mainContent' className='col-lg-9'>
                    <div className='col-lg-12'>
                        <img src={`image/${title}-sneaker.jpg`} width="100%" alt=""></img>
                    </div>
                    <div className='row'>
                        <RenderProductsBrand title='vans' products={products} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ListProductPage