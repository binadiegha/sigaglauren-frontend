import { MINDSMADELANDSCAPE, MINDSMALLSCREEN } from '../../assets/images';
import Listening from '../Listening';
import styles from './bannerStyles.module.scss';
import { UseWindowResize } from '../../hooks/UseWindowResize';

const Banner = () => {
  const windowSize = UseWindowResize();

  const image = windowSize.width < 768 ? MINDSMALLSCREEN : MINDSMADELANDSCAPE;

  return (
    <section className={styles.banner}>
      <img
        src={image}
        alt='banner-Image'
        className={styles.banner__bannerImage}
      />
      <div className={styles.banner__listeningContainer}>
        <Listening
          link='https://fanlink.to/jbDV'
          color='#ffffff'
          increaseFontSize={true}
        />
      </div>
    </section>
  );
};

export default Banner;
