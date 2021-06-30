import style from './MyWorks.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './Work/Work';
import {Title} from '../common/components/Title';
import todolistImage from '../assets/image/todolist.png'
import socialNetworkImage from '../assets/image/socialnetwork.png'

export function MyWorks() {
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
                    <Work style={socialNetwork} title={'Social Network'}
                          description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                    <Work style={todolist} title={'Todo List'}
                          description={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam natus reprehenderit voluptatem voluptatum!'}/>
                </div>
            </div>
        </div>
    )
}