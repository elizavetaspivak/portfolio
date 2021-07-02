import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade'

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <Title title={'Elizaveta Spivak'}/>
                    <div className={style.href}>
                        <a className={style.hrefItem} href="https://t.me/goesdoes">
                            <i className="fab fa-telegram"></i></a>
                        <a className={style.hrefItem} href="https://www.facebook.com/elizabeth.spivak.1">
                            <i className="fab fa-facebook"></i></a>
                        <a className={style.hrefItem} href="https://www.linkedin.com/in/elizaveta-spivak-51b47b1a0/">
                            <i className="fab fa-linkedin"></i></a>
                    </div>
                    <h4 className={style.rightsReserved}>© 2021 All rights reserved</h4>
                </div>
            </Fade>
        </div>
    )
}