import {useEffect, useRef} from 'react'
import styles from './newArrival.module.scss'
import clsx from 'clsx'

function NewArrival () {

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
        'image/pixlr-bg-result (12).png',
        'image/pixlr-bg-result (13).png',
        'image/pixlr-bg-result (14).png',
        'image/pixlr-bg-result (15).png',
        'image/pixlr-bg-result (16).png'
    ]
    let listproduct1 = products.slice(0, products.length / 2)
    let listproduct2 = products.slice(products.length / 2, products.length)
    useEffect( () => {
        const row_products1 = document.getElementById("product1")
        const row_products2 = document.getElementById("product2")
        let width_product 
        var row = document.querySelectorAll('.row-products .col-lg-4');
        const left = document.querySelector('.left')
        const right = document.querySelector('.right')
        var soLuong;
        var index = 0;
        
        setInterval(() => {
            width_product= row_products1.offsetWidth;
        },1000)
        // so le
        if ((row.length - 1) % 2 == 0) {
            soLuong = (row.length + 1) / 2;
        }
        // so chan
        else {
            soLuong = row.length / 2;
        }
        var y = 0;
        setInterval(function () {
            if (index == soLuong - 3) {
                index = 0;
                y = 0;
            } else {
                ++index;
                y -= width_product;
            }
            var chuoi = y + 'px';
            row_products1.style.marginLeft = chuoi;
            row_products2.style.marginLeft = chuoi;
        }, 5000);
        left.onclick = function sangTrai() {
            if (index == 0) {
                index = soLuong - 3;
                y = -width_product * index;
            } else {
                --index;
                y += width_product;
            }
            var chuoi = y + 'px';
            row_products1.style.marginLeft = chuoi;
            row_products2.style.marginLeft = chuoi;
    
        }
        right.onclick = function () {
            if (index == soLuong - 3) {
                index = 0;
                y = 0;
            } else {
                ++index;
                y -= width_product;
            }
            var chuoi = y + 'px';
            row_products1.style.marginLeft = chuoi;
            row_products2.style.marginLeft = chuoi;
        }
    })

    return (
        <div className="row" id={styles.newArrival}>
            <div className="col-lg-5 new_arrivals_desktop">
                <img src="image/new-arrivals.jpg" width="100%" alt=""/>
            </div>
            <div className="col-lg-5 new_arrivals_another">
                <img src="https://rainbow-sidecar-7b7.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F55b4dc8a-237b-40da-95ef-5da9bbdc2da0%2FUntitled.png?table=block&id=436ed8f1-d1e9-4d2f-a566-0e26252456b6&spaceId=603fbb7b-e83f-4728-90e1-eae06d3a88c2&width=2000&userId=&cache=v2" width="100%" alt=""/>
            </div>
            <div className={clsx('col-lg-6', styles.new_products)}>
                <div id="row-products1" className={clsx(styles.row_products, 'row-products')}>
                    {listproduct1.map((product, index) => {
                        return <div key={'newProduct' + index} className={clsx('col-lg-4', 'col-6', 'col-sm-4', styles.row_products_trans)} id={index === 0 ? 'product1' : ''}>
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
                                            <a href=""><button><i class="fa-solid fa-circle-question"></i> Thông Tin</button></a>
                                            <a href=""><button><i class="fa-solid fa-cart-shopping"></i> Đặt Hàng</button></a>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
                <div id="row-products2" className={clsx(styles.row_products, 'row-products')}>
                    {listproduct2.map((product, index) => {
                        return <div key={'newProduct' + index + products.length} className={clsx('col-lg-4', 'col-6', 'col-sm-4', styles.row_products_trans)} id={index === 0 ? 'product2' : ''}>
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
                                    <a href=""><button><i class="fa-solid fa-circle-question"></i> Thông Tin</button></a>
                                    <a href=""><button><i class="fa-solid fa-cart-shopping"></i> Đặt Hàng</button></a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <i id={styles.left} className='bx bx-left-arrow-alt left'></i>
                <i id={styles.right} className='bx bx-right-arrow-alt right'></i>
            </div>
        </div>
    )
}

export default NewArrival