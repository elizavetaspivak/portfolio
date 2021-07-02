import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade'
import React, {useState} from "react";
import axios from "axios";
import {CircularProgress,} from "@material-ui/core";

export function Contacts(props) {
    const [formData, SetFormData] = useState({formName: "", formEmail: "", formText: ""})

    const [status, setStatus] = React.useState(null);

    const setStatusLoading = (status) => {
        setStatus(status)
    }

    const onChangeName = (e) => {
        SetFormData({...formData, formName: e.currentTarget.value})
    }

    const onChangeEmail = (e) => {
        SetFormData({...formData, formEmail: e.currentTarget.value})
    }

    const onChangeText = (e) => {
        SetFormData({...formData, formText: e.currentTarget.value})
    }

    function sendEmail(e) {
        e.preventDefault();
        setStatusLoading('loading')
        axios.post('https://smtp-portfolio-nodejs-server.herokuapp.com/sendMessage', {
            name: formData.formName,
            email: formData.formEmail,
            text: formData.formText
        })
            .then((res) => {
                SetFormData({formName: "", formEmail: "", formText: ""})
                props.setOpenSucces(true)
                console.log(res)
                setStatusLoading('success')
            })
            .catch((res) => {
                if (res !== 'Ok!') {
                    props.setOpenError(true)
                    setStatusLoading('success')
                }
            })
    }


    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contacts'}/>
                    <form onSubmit={e => sendEmail(e)} className={style.formContainer}>
                        <input className={style.inputName} placeholder={'Name'} type="text" value={formData.formName}
                               onChange={onChangeName}/>
                        <input className={style.inputEmail} placeholder={'Email'} type="text" value={formData.formEmail}
                               onChange={onChangeEmail}/>
                        <textarea placeholder={'Your message'} value={formData.formText} className={style.textArea}
                                  onChange={onChangeText}></textarea>
                        {status === 'loading' ? <CircularProgress style={{marginTop: '60px'}} color='secondary'/> :
                            <button className={style.submit} type="submit">SUBMIT</button>}

                    </form>
                </div>
            </Fade>
        </div>
    )
}