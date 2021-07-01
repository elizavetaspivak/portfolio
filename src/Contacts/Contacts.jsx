import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Title';
import Fade from 'react-reveal/Fade'

export function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade bottom>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.formContainer}>
                    <input className={style.inputName} placeholder={'Name'} type="text"/>
                    <input className={style.inputEmail} placeholder={'Email'} type="text"/>
                    <textarea placeholder={'Your message'} className={style.textArea}></textarea>
                </form>
                <button className={style.submit} type="submit">SUBMIT</button>
            </div>
            </Fade>
        </div>
    )
}