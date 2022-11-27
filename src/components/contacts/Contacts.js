
import { createRef, useEffect } from 'react';
import './contacts.css';

function Contacts() {
    const timeOutDurationFixed = 40; //количество секунд на которое уходит пользак в мут
    var timeOutDuration;

    const { userName, email } = getUserContact();

    let canSend = true; //флаг-разрешение на отправку сообщений
    const maxSendCount = 5; //максимальное количество сообщений, который пользак может отправить за раз
    let msgCount = 0; //счетчик сколько он отправил сообщений
    const updateInterval = 1; //частота обновления времени мута в локалке (в секундах)

    const inpUserNameRef = createRef();
    const inpEmailRef = createRef();
    const inpQuestionRef = createRef();

    const userNameIndicator = createRef();
    const emailIndicator = createRef();
    const questionIndicator = createRef();

    const sendLimitNotification = createRef();
    const sendQuestionBtn = createRef();

    useEffect(() => { //Если в локалке есть инфа, что пользак в муте на какое то время, при обновлении страницы
        //Он так же закидывается в мут на это время <3
        timeOutDuration = localStorage.getItem('timeOutDuration');
        if (timeOutDuration > 0)
            sendTimeOut(timeOutDuration);
    });

    function sendTimeOut(timeOutDuration) {
        canSend = false;
        sendQuestionBtn.current.classList.add('errorBtn');
        if (!timeOutDuration)
            timeOutDuration = timeOutDurationFixed;
        sendLimitNotification.current.textContent = `Вы слишком много отправляли сообщения за короткий период. Подождите ${timeOutDuration} сек.`;
        const updateTimeOutInfo = setInterval(function () {
            timeOutDuration--;
            localStorage.setItem('timeOutDuration', timeOutDuration);
            sendLimitNotification.current.textContent = `Вы слишком много отправляли сообщения за короткий период. Подождите ${timeOutDuration} сек.`;
            if (timeOutDuration <= 0) {
                timeOutDuration = 0;
                localStorage.setItem('timeOutDuration', timeOutDuration);
                clearTimeout(updateTimeOutInfo);
            }

        }, 1000 * updateInterval);
        setTimeout(function () {
            sendLimitNotification.current.textContent = '';
            sendQuestionBtn.current.classList.remove('errorBtn');
            msgCount = 0;
            canSend = true;
        },
            1000 * timeOutDuration
        )
    }

    function updateUserContacts(userName, email) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email)
    }

    function getUserContact() {
        let userName = localStorage.getItem('userName');
        let email = localStorage.getItem('email');
        return { userName, email }
    }

    /*////////////////*/
    /* About Validate */
    /*////////////////*/
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        if (re.test(email) === true) {
            return email;
        } else {
            return false;
        };
    }

    function removeTags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    /*////////////////*/
    /* End Validate */
    /*////////////////*/

    function sendQuestion(canSend) {
        if (canSend) {
            if (msgCount < maxSendCount) {
                let question = removeTags(inpQuestionRef.current.value);
                let email = removeTags(inpEmailRef.current.value);
                let userName = removeTags(inpUserNameRef.current.value);
                email = validateEmail(email);
                if (!userName || userName.replace(/ /g, '') === '') {
                    userNameIndicator.current.className = 'errorForm';
                    canSend = false;
                } else {
                    userNameIndicator.current.className = 'valideForm';
                }
                if (!question || question.replace(/ /g, '') === '') {
                    questionIndicator.current.className = 'errorForm';
                    canSend = false;
                } else {
                    questionIndicator.current.className = 'valideForm';
                }
                if (!email) {
                    emailIndicator.current.className = 'errorForm';
                    canSend = false;
                } else {
                    emailIndicator.current.className = 'valideForm';
                }
                if (canSend) {
                    msgCount++;
                    inpQuestionRef.current.value = '';
                    updateUserContacts(userName, email);
                    /************************************************************************/
                    /*тут должна вызываться апишка отправки письма на почту*/
                    /**********************************************************************/
                }
            } else {
                sendTimeOut();
            }
        }
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', textAlign: 'center' }}>
            <p style={{ color: '#000000', marginTop: '45vh', fontSize: '5vw' }} >alxtrusov@gmail.com</p>
        </div>
    );

    /*return (
      <div className='contactPageContainer'>
           <div className='contactPageDescription'>
               <p className='textTitleScndLvl'>ВАШЕ СООБЩЕНИЕ</p>
           </div>

           <p className='valideForm' ref={userNameIndicator}>ИМЯ</p>
           <input
               maxLength='100'
               className='inputForm inputFormStyle'
               ref={inpUserNameRef}
               defaultValue={userName}
           />
           <p className='valideForm' ref={emailIndicator}>E-MAIL</p>
           <input
               maxLength='100'
               className='inputForm inputFormStyle'
               ref={inpEmailRef}
               defaultValue={email}
           />
           <p className='valideForm' ref={questionIndicator}>CООБЩЕНИЕ</p>
           <textarea
               maxLength='600'
               ref={inpQuestionRef}
               placeholder='Введите сообщение'
               rows="1"
               className='questionForm inputFormStyle'
           />

           <p ref={sendLimitNotification} className='sendLimitNotification errorForm'></p>
           <button ref={sendQuestionBtn} className='sendQuestionBtn' onClick={() => { sendQuestion(canSend) }}>Отправить</button>
       </div>
   );*/
}

export default Contacts;