import { useState, useEffect } from 'react';

// CSS :
import '../styles/message-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser, faClose } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';

function MessageScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;
    const WIFI_SCREEN = process.env.REACT_APP_WIFI_SCREEN;

    const FA_STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '17px',
        opacity: '0.9',
        color: 'white'
    }

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'black',
    }

    const CLOSE_STYLE = {
        position: 'absolute',
        top: '25px',
        height: '25px',
        marginLeft: '25px',
        color: 'black',
    }

    const conversationList = [
        {
            sender: 'Hippolyte',
            color: 'blue',
            messages: [
                {
                    text: 'Salut fiston, félicitations pour ta compète de judo ! Je suis fier de toi.',
                    sender: 'my',
                },
                {
                    text: "Merci Papa ! :) Ce n'est que la première coupe ! 💪",
                    sender: 'other',
                },
            ]
        },
        {
            sender: 'Sapinette <3',
            color: 'blue',
            messages: [
                {
                    text: 'Coucou toi',
                    sender: 'my',
                },
                {
                    text: 'Coucou Richie. Comment vas-tu mon coeur ? 😘',
                    sender: 'other',
                },
                {
                    text: 'Toujours bien quand je te parle',
                    sender: 'my',
                },
                {
                    text: 'Tu es toujours partant pour notre escapade au restaurant ? 🥂',
                    sender: 'other',
                },
                {
                    text: "Toujours. En parlant de repas, as-tu retrouvé le document que je cherchais ?",
                    sender: 'my',
                },
                {
                    text: "Oui, je te l'ai mis sur Facebook dans une de mes publications. N'oublie pas de prévenir le restaurant à ce sujet, mon coeur. Je ne veux pas qu'il t'arrive quoi que ce soit de grave 🙏",
                    sender: 'other',
                },
            ]
        },
        {
            sender: 'Gary',
            color: 'blue',
            messages: [
                {
                    text: "J'ai regardé l'épisode 3 de la série hier soir. C'était IN-CROY-ABLE ! 😱",
                    sender: 'other',
                },
                {
                    text: "Je suis d'accord, c'est clairement la meilleure série de l'année ! 👌",
                    sender: 'my',
                },
            ]
        },
    ]

    const [showPopup, setShowPopup] = useState(false);
    const [conversation, setConversation] = useState({});

    const Popup = ({ conversation }) => {
        return (
            <div className='message-popup'>
                <FontAwesomeIcon className='icon' icon={faClose} style={CLOSE_STYLE} onClick={() => setShowPopup(false)}/>
                <div className='popup-container'>
                    <div>
                        {conversation.messages.map(message => (
                            <div className={`message-bubble ${message.sender}`}>{message.text}</div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }
    
    return (
        <div className='message-screen'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
            <div className='message-container'>
                <h1>Messages</h1>
                {conversationList.map(item => (
                <div className='message-item' onClick={() => { setConversation(item); setShowPopup(true) }}>
                    <div className='round-icon blue'>
                        <FontAwesomeIcon icon={faUser} style={FA_STYLE}/>
                    </div>
                    <div className='text'>
                        <p>{item.sender}</p>
                        <p style={{fontSize: '0.7rem', opacity: '0.5'}}>{item.messages[item.messages.length - 1].text.substring(0, 40)}...</p>
                    </div>
                </div>
                ))}
            </div>

            {showPopup && <Popup conversation={conversation} />}

        </div>
    )
}

export default MessageScreen