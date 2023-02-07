import { useState } from 'react';

// CSS :
import '../styles/email-screen.css';

// FontAwesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faClose } from '@fortawesome/free-solid-svg-icons';

// Context :
import useMyContext from '../hooks/useMyContext';


function EmailScreen() {

    const ctx = useMyContext();

    const HOME_SCREEN = process.env.REACT_APP_HOME_SCREEN;

    const FA_STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '17px',
        opacity: '0.9'
    }

    const CHEVRON_STYLE = {
        position: 'absolute',
        top: '45px',
        height: '40px',
        marginLeft: '15px',
        opacity: '0.9',
        color: 'white',
    }

    const CLOSE_STYLE = {
        position: 'absolute',
        top: '25px',
        height: '25px',
        marginLeft: '25px',
        color: 'black',
    }

    const emailList = [
        {
            sender: 'Hippolyte Monsquier',
            senderEmail: 'hippolyte.mousquier@hotmail.fr',
            initials: 'HM',
            object: 'Anniversaire de mamie',
            text: `Coucou Papa, ${"\n\n"}Je t'ai envoyé des idées de cadeaux pour l'anniversaire de mamie. Dis-moi ce que tu en penses à l'occasion.${"\n\n"}Bisous, Hippolyte.`,
            color: 'blue',
        },
        {
            sender: 'Restaurant Le Môme',
            senderEmail: 'reservation@le-mome.fr',
            initials: 'LM',
            object: 'Confirmation de votre réservation',
            text: `Monsieur Mousquier,${"\n\n"} Nous avons le plaisir de vous confirmer votre réservation dans notre restaurant mercredi 8 février à 20h30.${"\n\n"}Cordialement,${"\n"}Le Restaurant Le Môme${"\n\n"}5, avenue Mirabeau, Aix-en-Provence.`,
            color: 'orange',
        },
        {
            sender: 'Sandrine Pieint',
            senderEmail: 'sandrine.pieint@gmail.com',
            initials: 'SP',
            object: 'Je te demande pardon...',
            text: `Mon amour, Il n'a jamais été dans mon intention de mettre la puce à l'oreille de ta femme. J'ai eu tort et je m'en excuse. ${"\n\n"}Je t'aime. ${"\n\n"}Ta Sapinette ❤️`,
            color: 'pink',
        },
        {
            sender: 'Garage Robert',
            senderEmail: 'sav@garage-robert.fr',
            initials: 'GR',
            object: 'Devis contrôle technique',
            text: `Monsieur Mousquier, veuillez trouver ci-joint votre devis pour le contrôle technique de votre véhicule. ${"\n\n"}Cordialement. ${"\n\n"}Garage Robert.`,
            color: 'green',
        },
    ]

    const [showPopup, setShowPopup] = useState(false);
    const [emailItem, setEmailItem] = useState({});

    const Popup = ({ emailItem }) => {
        return (
            <div className='email-popup'>
                <FontAwesomeIcon className='icon' icon={faClose} style={CLOSE_STYLE} onClick={() => setShowPopup(false)}/>
                <div className='popup-container'>
                    <h1>{emailItem.object}</h1>
                    <div className='email-item'>
                        <div className={`round-icon ${emailItem?.color}`}>
                            <h1>{emailItem.initials}</h1>
                        </div>
                        <div className='text'>
                            <p>{emailItem.sender}</p>
                            <p style={{fontSize: '0.7rem', opacity: '0.8'}}>De : {emailItem.senderEmail}</p>
                            <p style={{fontSize: '0.7rem', opacity: '0.8'}}>À : {process.env.REACT_APP_EMAIL_ADDRESS}</p>
                        </div>
                    </div>
                    <p style={{fontSize: '0.9rem'}}>{emailItem.text}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='email-screen'>
            <FontAwesomeIcon className='icon' icon={faChevronLeft} style={CHEVRON_STYLE} onClick={() => ctx.setScreen(HOME_SCREEN)}/>
            <div className='email-container'>
                <h1>Gmail</h1>

                {emailList.map(item => (
                    <div className='email-item' onClick={() => { setEmailItem(item); setShowPopup(true) }}>
                        <div className={`round-icon ${item?.color}`}>
                            <h1>{item.initials}</h1>
                        </div>
                        <div className='text'>
                            <p>{item.sender}</p>
                            <p style={{fontSize: '0.8rem', opacity: '0.8', fontWeight: 'bold'}}>{item.object}</p>
                            <p style={{fontSize: '0.7rem', opacity: '0.5'}}>{item.text.substring(0, 40)}...</p>
                        </div>
                    </div>
                    ))}
                </div>

            {showPopup && <Popup emailItem={emailItem} />}

        </div>
    )
}

export default EmailScreen