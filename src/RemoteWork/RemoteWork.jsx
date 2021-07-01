import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';
import Fade from 'react-reveal/Fade'
import Button from "../common/components/Button/Button";



export function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <Title title={'Considering options for remote work'}/>
                <Button text={'HIRE ME'} link={'https://www.linkedin.com/in/elizaveta-spivak-51b47b1a0/'}/>
                </div>
            </Fade>
        </div>
    )
}