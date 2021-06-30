import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/Title';
import todolistImage from '../assets/image/todolist.png'
import socialNetworkImage from '../assets/image/socialnetwork.png'

export function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }

    const todolist = {
        backgroundImage: `url(${todolistImage})`,
        backgroundSize: 'cover'
    }


    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={style.skills}>
                    <Project style={socialNetwork} title={'Social Network'}
                             description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                    <Project style={todolist} title={'Todo List'}
                             description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                </div>
            </div>
        </div>
    )
}