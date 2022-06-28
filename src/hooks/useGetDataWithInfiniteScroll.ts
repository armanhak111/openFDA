import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getData } from '../redux/slices/main';
import { AppDispatch } from '../store';

export const useGetDataWithInfiniteScroll = () => {
  const [offset, setOffset] = useState<number>(0);
  const [enabledRequest, setEnabledRequest] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const sendRequest = useCallback(() => {
    dispatch(getData(50, offset, setEnabledRequest));
  }, [getData]);

  useEffect(() => {
    if (enabledRequest) {
      dispatch(getData(50, offset + 50, setEnabledRequest));
      setOffset((prevState) => prevState + 50);
    }
  }, [enabledRequest]);

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > document.body.clientHeight / 1.5) {
        setEnabledRequest(true);
      }
    },
    false
  );
  return {
    sendRequest,
  };
};
