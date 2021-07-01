import style from './Project.module.scss'
import Button from "../../common/components/Button/Button";

export function Project(props) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <Button text={'SHOW'} link={props.link}/>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
}