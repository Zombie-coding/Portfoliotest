import ArrowSvg from "../ArrowSvg/ArrowSvg";
import MainTitle from "../MainTitle/MainTitle";
import SocialList from "./SocialList";
import styles from '../../styles/contact.module.scss';
import ContactForm from "./ContactForm";
import { useMediaQuery } from "../../hooks";

const Contact = () => {
    const isMobile485 = useMediaQuery(485);

    return (
        <section className={styles.contact} id='contact'>
            <div className="container">
                <MainTitle text='Kirjutage mulle' />
            </div>
            <div className="sub-container">
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>
                        <p className={styles.contact__text}>
                        Kas te töötate millegi suurepärase kallal? Ma aitaksin teid hea meelega selle ellu viia! Kirjuta mulle e-kirja ja me alustame kohe projekti!
                        </p>
                        <p className={styles.contact__text}>
                        Lihtsalt tee seda.
                        </p>
                        {!isMobile485 && <>
                            <h3 className={styles.contact__title}>
                                <span className={styles.contact__title__text}>Olen sotsiaalmeedias:</span>
                                <span className={styles.contact__title__arrow}><ArrowSvg /></span>
                                <span className={styles.contact__title__border} />
                            </h3>
                            <SocialList />
                        </>}
                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;