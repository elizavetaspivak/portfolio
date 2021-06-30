import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

export function Main() {
    return (
        <div id='home' className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Hi There</span>
                    <h1>I am Elizaveta Spivak</h1>
                    <p>A Frontend Developer.</p>
                </div>
                <div className={style.mainPhoto}>

                </div>
            </div>
        </div>
    )
}