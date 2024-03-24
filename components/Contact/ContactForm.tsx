import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactInput from "./ContactInput";
import emailjs from '@emailjs/browser';
import styles from '../../styles/contact.module.scss';

const ContactForm = () => {
    const [acceptWithRules, setAcceptWithRules] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

    const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setSpinner(true);
        emailjs.sendForm('service_eo3cq17', 'template_qbdc3ef', formRef.current, 'KGhm8GCb7j8cV0sVC')
        .then(result => {
            setSpinner(false);
            toast(`Saadetud andmed ${result.text}`);
        }, error => {
            setSpinner(false);
            toast.error(`Saadetud andmed ${error.text}`);
        })

        formRef.current.reset();
        setAcceptWithRules(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Дополнительная логика, если нужно
    }

    return (
        <form onSubmit={handleSubmit} className={styles.contact__form} ref={formRef}>
            <ContactInput
                text="Eesnimi ja Perekonnanimi*"
                placeholder="Täpsustage oma nimi"
                type="text"
                name='fullName'
            />
            <ContactInput
                text="Ametikoht/ettevõte"
                placeholder="Märkige oma ametikoht/ettevõte"
                type="text"
                name='company'
            />
            <ContactInput
                text="E-mail*"
                placeholder="Palun sisestage oma E-post"
                type="email"
                name='email'
            />
            <ContactInput
                text="Telefon*"
                placeholder="Sisestage oma telefoninumber"
                
                type="tel"
                name='phone'
            />
            <button
                type="button"
                className={styles.contact__form__btn}
                disabled={!acceptWithRules}
                onClick={sendEmail}
            >
                {spinner ? <PropagateLoader color="#fff" /> : 'Saada teade'}
            </button>
            <label className={styles.contact__checkbox}>
                <input
                    className={styles.contact__checkbox__input}
                    type="checkbox"
                    onChange={toggleAcceptWithRules}
                />
                <span className={styles.contact__checkbox__span} />
                <span className={styles.contact__checkbox__text}>Vajutades nupule &quot;Avalduse esitamine&quot; nõustun järgmisega 
                <Link href='/personal-data-of-clients' passHref legacyBehavior><a className={styles.contact__checkbox__link}>Privaatsuspoliitika</a></Link> ja mina annan <Link legacyBehavior href='/personal-data-of-clients' passHref><a className={styles.contact__checkbox__link}>Nõusolek isikuandmete töötlemiseks.</a></Link></span>
            </label>
        </form>
    );
}

export default ContactForm;
