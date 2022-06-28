import React from 'react';

import { IData } from '../../../redux/types';
import styles from './cardItem.module.scss';

const CardItem: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className={styles.cardItemWrapper}>
      <div className={styles.cardItemContainer}>
        <div>
          <div className={styles.descriptionWrapper}>
            <div>{data.classification}</div>
            <div>{data.city}</div>
            <div className={styles.description}>{data.product_description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(CardItem);
