import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade'

export function Skills() {
    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        <Skill title={'React & Redux'}
                               description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}
                               icon={
                                   <i style={{color: '#fd4766'}} className="fab fa-react"></i>}/>
                        <Skill title={'JavaScript & TypeScript'}
                               description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}
                               icon={
                                   <i style={{color: '#337dff'}} className="fab fa-js-square"></i>}/>
                        <Skill title={'Rest API'}
                               description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}
                               icon={
                                   <i style={{color: '#1ba2db'}} className="fas fa-server"></i>}/>
                        <Skill title={'HTML & CSS'}
                               description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}
                               icon={
                                   <i style={{color: '#59c98d'}} className="far fa-file-code"></i>}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}