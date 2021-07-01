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

            <a href="https://docviewer.yandex.by/view/786292263/?*=nxu4tCLpbsXkf%2FINmFkJ5ocTfux7InVybCI6InlhLWRpc2s6Ly8vZGlzay9TcGl2YWtfQ1YucGRmIiwidGl0bGUiOiJTcGl2YWtfQ1YucGRmIiwibm9pZnJhbWUiOmZhbHNlLCJ1aWQiOiI3ODYyOTIyNjMiLCJ0cyI6MTYyNTA0NDYxMjMwMiwieXUiOiI2MTQzODkzMzkxNjE1NzM5NDU2In0%3D">CV</a>
        </div>
    )
}