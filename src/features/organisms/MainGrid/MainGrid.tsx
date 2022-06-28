import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { VIEW_MODES } from '../../../constants/main';
import { useGetDataWithInfiniteScroll } from '../../../hooks/useGetDataWithInfiniteScroll';
import {
  getCurrentData,
  getCurrentMode,
  getLoadingState,
} from '../../../redux/selectors/mainSelector';
import { IData } from '../../../redux/types';
import Loader from '../../atoms/Loader';
import CardItem from '../../molecules/CardItem';
import TableItem from '../../molecules/TableItem';
import styles from './mainGrid.module.scss';

const MainGrid: React.FC = () => {
  const currentMode = useSelector(getCurrentMode);
  const { sendRequest } = useGetDataWithInfiniteScroll();
  const data = useSelector(getCurrentData);
  const loading = useSelector(getLoadingState);
  useEffect(() => {
    sendRequest();
  }, []);
  const Component = useMemo(() => {
    return currentMode.localeCompare(VIEW_MODES.Card) ? TableItem : CardItem;
  }, [currentMode]);
  if (!data.length && loading) {
    return <Loader />;
  }
  return (
    <div id="wrapper" className={styles.gridContainer}>
      {data.map((element: IData, index) => {
        return <Component key={`${element.event_id}+${index}`} data={element} />;
      })}
    </div>
  );
};
export default React.memo(MainGrid);
