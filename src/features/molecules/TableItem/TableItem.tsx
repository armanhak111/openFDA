import React from 'react';

import { IData } from '../../../redux/types';
import styles from './tableItem.module.scss';

const TableItem: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className={styles.tableItemWrapper}>
      <div className={styles.tableItemContainer}>
        <div className={styles.tableItemWrapper}>
          <div>
            <div className={styles.tableItemCurrentName}>Event ID</div>
            <div className={styles.tableItemCurrentValue}>{data.event_id}</div>
          </div>
          <div>
            <div className={styles.tableItemCurrentName}>Postal Code</div>
            <div className={styles.tableItemCurrentValue}>{data.postal_code}</div>
          </div>
          <div>
            <div className={styles.tableItemCurrentName}>Product Type</div>
            <div className={styles.tableItemCurrentValue}>{data.product_type}</div>
          </div>
          <div>
            <div className={styles.tableItemCurrentName}>State</div>
            <div className={styles.tableItemCurrentValue}>{data.state}</div>
          </div>
          <div>
            <div className={styles.tableItemCurrentName}>Status</div>
            <div className={styles.tableItemCurrentValue}>{data.status}</div>
          </div>
          <div>
            <div className={styles.tableItemCurrentName}>Recalling Firm</div>
            <div className={styles.tableItemCurrentValue}>{data.recalling_firm}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(TableItem);
