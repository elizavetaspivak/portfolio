import style from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <FontAwesomeIcon color={props.color} icon={props.icon}/>
            </div>
            <div className={style.info}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}