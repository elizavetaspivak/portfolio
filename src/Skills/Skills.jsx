import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade'

export function Skills() {

    const skillArr = [
        {
            title: "React",
            imgLogo: <i style={{color: '#fd4766'}} className="fab fa-react"></i>,
            skills: ["Functional components", "Class components", "Hooks", "Promises", "HOC", 'Flux', "REST API", "Axios", "Test Driven Development", "Snapshot Testing", "Storybook", "MaterialUI"]
        },
        {
            title: "Redux",
            imgLogo: <i style={{color: '#1ba2db'}} className="fas fa-server"></i>,
            skills: ["Action Creators", "Middleware","Selectors", "Redusers", "Combine Reducers", "Provider","Connect", "Compose", "Redux-form", "Redux-thunk", "React-redux"]
        },
        {
            title: "JavaScript & TypeScript",
            imgLogo: <i style={{color: '#337dff'}} className="fab fa-js-square"></i>,
            skills: ["ES6", "Callbacks", "Promise", "Event Loop", "This", "Prototype & Proto", "OOP", 'Functional programming', "Closures", "Hoisting"]
        },
        {
            title: "HTML & CSS",
            imgLogo: <i style={{color: '#59c98d'}} className="far fa-file-code"></i>,
            skills: ["Responsive design", "Sass", "Gh-pages", "Bootstrap", 'Float', 'Flexbox', "Grid", 'Mobile-first & Desktop-first', 'Cross-browser compatibility']
        }
    ]

    return (
        <div id='skills' className={style.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={'My Skills'}/>
                    <div className={style.skills}>
                        {skillArr.map((skills) => (
                            <Skill key={skills.title}
                                   icon={skills.imgLogo}
                                   title={skills.title}
                                   description={skills.skills}/>))}
                    </div>
                </div>
            </Fade>
        </div>
    )
}