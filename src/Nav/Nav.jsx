import style from './Nav.module.scss'
import {Link} from 'react-scroll'

export function Nav() {

    return (
        <div className={style.nav}>
            <Link activeClass={style.active}
                  href={'#home'}
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Home</Link>
            <Link activeClass={style.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Skills</Link>
            <Link activeClass={style.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Projects</Link>
            <Link activeClass={style.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Contacts</Link>

            <a href="https://disk.yandex.by/i/rf-39NosnwjgYg">CV</a>
        </div>
    )
}