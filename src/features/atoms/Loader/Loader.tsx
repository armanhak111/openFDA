import React from 'react';

import styles from './loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <span className={styles.spinner1}></span>
      <span className={styles.spinner2}></span>
      <span className={styles.spinner3}></span>
    </div>
  );
};

export default React.memo(Loader);
