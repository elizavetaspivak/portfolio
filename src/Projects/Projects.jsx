import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/Title/Title';
import todolistImage from '../assets/image/todolist.png'
import socialNetworkImage from '../assets/image/socialnetwork.png'
import Fade from 'react-reveal/Fade'

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
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.skills}>
                    <Project link={'https://github.com/elizavetaspivak/social-network'} style={socialNetwork} title={'Social Network'}
                             description={'SPA with usage AntDesign React UI framework, React Hooks, React Classes, Redux with Redux Thunk and RestAPI.'}/>
                    <Project link={'https://github.com/elizavetaspivak/todolistsReact'} style={todolist} title={'Todo List'}
                             description={' SPA with usage Material UI React UI framework, React Hooks, Redux with Redux Thunk and RestAPI.'}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}