import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title';

export function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title title={'Considering options for remote work'}/>
                <button className={style.hire}>HIRE ME</button>
                </div>
        </div>
    )
}