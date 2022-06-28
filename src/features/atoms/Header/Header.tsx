import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { VIEW_MODES } from '../../../constants/main';
import { getCurrentMode } from '../../../redux/selectors/mainSelector';
import { setCurrentMode } from '../../../redux/slices/main';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(getCurrentMode);
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        <div>
          <span>openFDA Data</span>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.button} ${currentTab === VIEW_MODES.Card ? styles.active : ''}`}
              onClick={() => dispatch(setCurrentMode(VIEW_MODES.Card))}
              type="button"
            >
              Card Mode
            </button>
            <button
              className={`${styles.button} ${currentTab === VIEW_MODES.Table ? styles.active : ''}`}
              type="button"
              onClick={() => dispatch(setCurrentMode(VIEW_MODES.Table))}
            >
              Table Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Header);
