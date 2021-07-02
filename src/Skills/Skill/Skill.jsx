import style from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={`${style.icon} ${props.color}`}>
                {props.icon}
            </div>
            <div className={style.info}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}