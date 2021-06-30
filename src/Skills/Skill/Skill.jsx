import style from './Skill.module.css'


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <i className="devicon devicon-react-original"></i>
            </div>
            <div className={style.info}>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}