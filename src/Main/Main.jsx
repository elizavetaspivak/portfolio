import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-particles-js";
import Tilt from "react-tilt/dist/tilt";


const ParticlesOpt = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

export function Main() {
    return (
        <div id='home' className={style.mainBlock}>
            <Particles className={style.particles} params={ParticlesOpt}/>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Hi There</span>
                    <h1>I am Elizaveta Spivak</h1>
                    <ReactTypingEffect speed={100} eraseSpeed={40} eraseDelay={3500} typingDelay={350}
                        text={["A Front-End Developer."]}
                    />
                </div>
                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <div className={style.mainPhoto}>
                        <div className={style.myImage}></div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}