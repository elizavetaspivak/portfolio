import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title';
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'

export function Skills() {
    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React & Redux'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'} icon={faReact} color={'#fd4766'}/>
                    <Skill title={'JavaScript & TypeScript'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'} icon={faJs} color={'#337dff'}/>
                    <Skill title={'Rest API'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'} icon={faCode} color={'#1ba2db'}/>
                    <Skill title={'HTML & CSS'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'} icon={faHtml5} color={'#59c98d'}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}