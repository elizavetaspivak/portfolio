import style from './Title.module.css';

export function Title(props){
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}