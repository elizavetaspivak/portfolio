import style from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={`${style.icon} ${props.color}`}>
                {props.icon}
            </div>
            <div className={style.info}>
                <h3>{props.title}</h3>
                <div className={style.description}>
                    {
                        props.description.map((someSkill,index) =>
                            <p
                                key={index}
                                className={style.skillDesl}
                            > {someSkill} </p>)}
                </div>
            </div>
        </div>
    )
}