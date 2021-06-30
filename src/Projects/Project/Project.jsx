import style from './Project.module.scss'

export function Project(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.showBtn}>SHOW</button>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
}