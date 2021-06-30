import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Elizaveta Spivak'}/>
                <div className={style.href}>
                    <div className={style.hrefItem}></div>
                    <div className={style.hrefItem}></div>
                    <div className={style.hrefItem}></div>
                    <div className={style.hrefItem}></div>
                    <div className={style.hrefItem}></div>
                </div>
                <h4 className={style.rightsReserved}>© 2021 All rights reserved</h4>
            </div>
        </div>
    )
}