import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/Title';

export function Contacts() {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.formContainer}>
                    <input className={style.inputName} placeholder={'Name'} type="text"/>
                    <input className={style.inputEmail} placeholder={'Email'} type="text"/>
                    <textarea placeholder={'Your message'} className={style.textArea}></textarea>
                </form>
                <input className={style.submit} type="submit" value="Submit"/>
            </div>
        </div>
    )
}