import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title';

export function Skills() {
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JavaScript'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                    <Skill title={'React'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                    <Skill title={'Redux'}
                           description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                </div>
            </div>
        </div>
    )
}