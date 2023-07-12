import styles from './listenStyles.module.scss';
import { HEADPHONE, SPOTIFY, MUSIC, PLAY } from '../../assets/images';

const Listen = () => {
  return (
    <div className={styles.listen}>
      <div className={styles.listen__listenImageArrowContainer}>
        <div className={styles.listen__listenImageContainer}>
          <img
            src={HEADPHONE}
            alt='earphones-logo'
            className={styles.listen__listenImage}
          />
        </div>
        <span className={styles.listen__arrow}>&rarr;</span>
      </div>
      <div className={styles.listen__playMusicOptionsContainer}>
        <div
          className={`${styles.listen__playMusicOptions} ${styles.listen__playMusicOptions_1}`}
        >
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_1}`}
          >
            <img
              src={SPOTIFY}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_2}`}
          >
            <img
              src={SPOTIFY}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
        </div>
        <div
          className={`${styles.listen__playMusicOptions} ${styles.listen__playMusicOptions_2}`}
        >
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_1}`}
          >
            <img
              src={MUSIC}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_2}`}
          >
            <img
              src={MUSIC}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
        </div>
        <div
          className={`${styles.listen__playMusicOptions} ${styles.listen__playMusicOptions_3}`}
        >
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_1}`}
          >
            <img
              src={PLAY}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
          <div
            className={`${styles.listen__playMusicOptionsImageContainer} ${styles.listen__playMusicOptionsImageContainer_2}`}
          >
            <img
              src={PLAY}
              alt='earphone'
              className={styles.listen__playMusicOptionsImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;
