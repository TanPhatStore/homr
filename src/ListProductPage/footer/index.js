
import Iframe from 'react-iframe'
import styles from './footer.module.scss'
import clsx from 'clsx'

function Footer () {
    return (
        <div id="footer">
            <div className="row" style={{marginTop: '50px',justifyContent: 'center',backgroundColor: '#333'}}>
                <div className="col-lg-5 col-12">
                    <a name="lienhe"></a>
                    <div className={styles.map}>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.34444211022!2d106.7198523!3d10.630326799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289741790d39%3A0x95362685e34cec2f!2zQuG6v24gWGUgTWnhu4FuIMSQw7RuZw!5e0!3m2!1svi!2s!4v1655090761126!5m2!1svi!2s"
                            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                              />
                    </div>
                </div>
                <div className="col-lg-5 col-12">
                    <div className={clsx(styles.info, "info")}>
                        <p style={{fontSize : '30px'}} id="active">CHÚNG TÔI LÀ <b>TẤN PHÁT STORE !</b></p>
                        <p><i className='bx bx-location-plus'></i> Address : Quận Bình Thạnh - TPCHM</p>
                        <p><i className='bx bx-phone'></i> Phone : 0902-491-471</p>
                        <p><i className='bx bx-envelope'></i> Email : tanphat2002@gmail.com</p>
                        <div className="social">
                            <a href=""><i className='bx bxl-facebook-square'></i></a>
                            <a href=""><i className='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{backgroundColor: '#333'}}>
                <div className="col-lg-12">
                    <div className={styles.copy}>
                        <p>@2022 - TẤN PHÁT STORE | MAKE BY VU TIEN DUC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer