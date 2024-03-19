import { MutableRefObject, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { useMediaQuery } from '../../hooks/index';
import styles from '../../styles/hero.module.scss';

const Hero = () => {
    const isMobile800 = useMediaQuery(800);
    const isMobile485 = useMediaQuery(485);
    const heroTitle = useRef() as MutableRefObject<HTMLHeadingElement>;

    useEffect(() => {
        const colors = gsap.to(heroTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
          })
          
          const doRandom = () => {
            gsap.timeline()
              .to(heroTitle.current, {
                duration: 0.1,
                opacity: function(){ return gsap.utils.random(.90, .95) },
                delay: function(){ return gsap.utils.random(.1, 2) },
              }).to(heroTitle.current, {
                duration: 0.1,
                opacity: 1,
                onComplete: function(){
                  doRandom()
                }
              })
          }
          
          const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
          
          if (! mediaQuery || ! mediaQuery.matches) {
            colors.play();
            doRandom();
          }
          
    }, []);
    return (
        <section 
            className={styles.hero}
            style={{ backgroundImage: isMobile485 ? '' : `url('/img/hero-bg${isMobile800 ? '-mobile' : ''}.png')` }}
        >
            <div className='sub-container'>
                <div className={styles.hero__inner}>
                    <h1 className={styles.hero__title} ref={heroTitle}>Elektriinsener 8T</h1>
                    <div className={styles.hero__description}>
                        <p>Kas te töötate millegi suurepärase kallal?</p>
                        <p>Ma aitaksin teid väga hea meelega! Kirjutage mulle e-kirja ja me alustame projekti kohe! </p>
                    </div>
                    <Link
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                        className={styles.hero__btn}
                    >
                        Võtke ühendust inseneriga
                    </Link>
                    {!isMobile800 && <Link
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={30}
                        duration={500}
                        className={styles.hero__arrow}
                    />}
                </div>
            </div>
        </section>
    );
}

export default Hero;