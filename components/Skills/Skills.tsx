import styles from '../../styles/skills.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text=' Oskused' />
            </div>
            <div className="sub-container">
                <ul className={styles.skills__list}>
                    <SkillsItem
                        title='Kõrgepinge'
                        text='Olen spetsialiseerunud Kõrgepinge valdkonnale, mille raames omandasin üle 7 aasta kogemusi ning osalesin mitmetes projektides.'
                        iconClass={styles.skills__web}
                    />
                    <SkillsItem
                        title='Päikesepaneelid'
                        text='Minu erialane fookus on päikesepaneelide valdkonnas, kus olen töötanud üle 4 aasta ning osalenud mitmetes olulistes projektides.'
                        iconClass={styles.skills__ux}
                    />
                    <SkillsItem
                        title='Tuulegeneraatorit'
                        text='Minu erialane fookus on tuulegeneraatorite paigaldamise ja hoolduse valdkonnas, samuti elektriliste abaronide ja mikrolülituste paigaldamise ning hoolduse alal, milles olen tegutsenud üle 5 aasta ja osalenud mitmetes olulistes projektides.'
                        iconClass={styles.skills__front}
                    />
                    <SkillsItem
                        title='Liini toetus'
                        text='Minu töökogemus hõlmab toetuste paigaldamist ja tõmbamist vahemikus 0,4 kuni 10 kilovatti võimsusega seadmetele.'
                        iconClass={styles.skills__seo}
                    />
                </ul>
            </div>
        </section>
    );
}

export default Skills;