import styles from '../../../styles/socialListFooter.module.scss';
import Image from 'next/image'; // Импортируем компонент изображения из next/image

const SocialList = ({ marginBottom }: { marginBottom?: number }) => (
    <ul className={styles.social__list} style={{ marginBottom }}>
        <li className={styles.social__list__item}>
            <a href="#" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>facebook</span>
                <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__fb}`}>
                    <Image src="/img/facebook.svg" alt="facebook" width={20} height={20} /> {/* Заменяем <img> на <Image /> */}
                </span>
            </a>
        </li>
        <li className={styles.social__list__item}>
            <a href="https://www.facebook.com/kristjan.moto.1/" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}></span>
                <span className={``}>
                </span>
            </a>
        </li>
        <li className={styles.social__list__item}>
            <a href="#" className={styles.social__list__item__link}>
                <span className={``}>
                </span>
            </a>
        </li>
    </ul>
);

export default SocialList;