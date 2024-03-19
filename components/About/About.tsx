/* eslint-disable @next/next/no-img-element */
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SocialList';
import styles from '../../styles/about.module.scss';
import { useMediaQuery } from '../../hooks/index';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.about } id='about'>
            <div className="container">
                <MainTitle text='Minust' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                    Aleksander Les
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about__title__border__line} />
                        </span>
                    </h3>
                    <div className={styles.about__text}>
                        <p>
                        Kui juhtiv insener seitsmendas kategoorias, spetsialiseerun elektro- ja mikroskeemilistele töödele ning omades A-pädevust elektroonikatöödes, olen keskendunud professionaalsetele saavutustele elektrotehnikas.
                        </p>
                        <p>
                        Olen juhtinud mitmekülgseid elektrotöid, alates projekteerimisest ja paigaldamisest kuni hoolduse ja seadistamiseni. 
                        Minu spetsialiseerumine hõlmab täpset tööd mikroskeemide ja elektroonikakomponentidega.

Otsin pidevalt võimalusi professionaalseks arenguks, jälgides elektrotehnika uusimaid tehnoloogiaid ja meetodeid. 
Minu eesmärk on luua innovaatilisi lahendusi, mis parandavad elektroonikaseadmete tõhusust ja usaldusväärsust.
                        </p>
                    </div>
                    {!isMobile1080 && <SocialList />}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && <SocialList />}
            </div>
        </section>
    );
}

export default About;