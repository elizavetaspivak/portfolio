import style from './Header.module.scss'
import {Nav} from '../Nav/Nav';
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";

export function Header() {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerMenu/>
        </div>
    )
}