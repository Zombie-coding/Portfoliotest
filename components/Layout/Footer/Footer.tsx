import Link from 'next/link';
import Logo from '../../Logo/Logo';
import SocialList from './SocialList';
import { useMediaQuery } from '../../../hooks/index';
import styles from '../../../styles/footer.module.scss';

const Footer = () => {
    const isMobile725 = useMediaQuery(725);

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <span className={styles.footer__border} />
                <div className={styles.footer__inner}>
                    <div className={styles.footer__left}>
                        {isMobile725 && <SocialList marginBottom={25} />}
                        <Logo marginBottom={44} />
                        <p className={styles.footer__copyright}>© 1990-Still <br />«Aleksander»</p>
                    </div>
                    <div className={styles.footer__right}>
                        <div className={styles.footer__right__top}>
                            <p className={styles.footer__right__top__text}>Jaga saiti oma sõpradega:</p>
                            {!isMobile725 && <SocialList />}
                        </div>
                        <div className={styles.footer__right__bottom}>
                            <ul className={styles.footer__list}>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-policy" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                        Failide kasutamise poliitika cookie
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-of-clients" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                        Privaatsuspoliitika
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-policy" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                        Isikuandmete töötlemise poliitika
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles.footer__list__item}>
                                    <Link href="/personal-data-of-clients" legacyBehavior>
                                        <a className={styles.footer__list__item__link}>
                                        Nõusolek klientide isikuandmete töötlemiseks - üksikisikud
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;