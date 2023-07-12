import { useState } from 'react';
import styles from './newLetterStyles.module.scss';
import {
  validateForm,
  validateEmailField,
  validateField,
} from '../../Utilities/validateInputs';
import { motion } from 'framer-motion';

const NewsLetter = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'email') {
      validateEmailField(formData, errors, setErrors);
    } else {
      validateField(name, formData, errors, setErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      console.log(formData);
      setFormData({ ...formData, name: '', email: '' });
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className={styles.newsLetter}>
      <form
        className={styles.newsLetter__form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>
          Discover the world of music like never before! Subscribe to our
          newsletter and be the first to know about electrifying concerts,
          exclusive releases, and backstage secrets. Embark on a musical journey
          and explore our store for incredible merchandise that amplifies your
          love for music!
        </p>

        <div className={styles.newsLetter__formGroup}>
          <label htmlFor='name'>
            Name{' '}
            {errors.name && (
              <span className={styles.newsLetter__errorMessage}>
                {errors.name}
              </span>
            )}
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.newsLetter__formGroup}>
          <label htmlFor='email'>
            Email{' '}
            {errors.email && (
              <span className={styles.newsLetter__errorMessage}>
                {errors.email}
              </span>
            )}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <motion.button
          className={styles.newsLetter__button}
          onClick={handleSubmit}
          whileTap={{ scale: 0.96 }}
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
};

export default NewsLetter;
