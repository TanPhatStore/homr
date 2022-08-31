
import styles from './banner.module.scss'
import clsx from 'clsx'

function Banner () {

    let banners = [
        'image/SALE.jpg',
        'image/delivery.jpg'
    ]

    return (
        <div id='banner'>
            <div className="row" id={styles.bigBanner}>
                <div className="col-lg-12" style={{padding: '0'}}>
                    <img src="https://s3.amazonaws.com/wapopartners.com/wweek-wp/wp-content/uploads/2016/01/26195531/shoeissuebanner.png"
                        width="100%" alt=""/>
                </div>
            </div>
            <div className="row" id="brands">
                <div className={styles.logoBrands}>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="image/logo-adidas.jpg" width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="image/logo-jordan.jpg" width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="image/logo-nike.jpg" width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="image/logo-vans.jpg" width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="https://brademar.com/wp-content/uploads/2022/05/Converse-Logo-PNG-2007-%E2%80%93-2011.png"
                            width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="https://logos-world.net/wp-content/uploads/2020/11/Yeezy-Emblem.png" width="100%"
                            alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="https://logos-world.net/wp-content/uploads/2021/09/MLB-Logo.png" width="100%" alt=""/>
                    </div>
                    <div className={clsx('col-lg-1', styles.logoBrand__item)}>
                        <img src="https://i.pinimg.com/originals/7e/30/71/7e30717f5dacd08585e139b670726397.jpg"
                            width="100%" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={styles.call}>
                    {banners.map((banner, index) => {
                        return <div key={'banner' + index} className={clsx('col-lg-4', 'col-6', styles.call__item)}>
                                    <img src={banner} width="100%" alt="" />
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Banner