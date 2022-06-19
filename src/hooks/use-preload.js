import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';

import { loadCurrencies } from '../features/currencies/currencies-slice';
import { loadCarriers } from '../features/carriers/carriers-slice';
import { statuses } from '../constants/statuses';

export const usePreload = (items = []) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const itemsLength = items.length;
    const successArr = [];

    items.forEach(el => {
      const item = state[el];

      if (item.status === statuses.RECEIVED) {
        successArr.push(true);
      }
    });

    const isEqual = itemsLength === successArr.length;
    
    if (isEqual) {
      setReady(true);
    }
  }, [state, items]);

  useEffect(() => {
    items.forEach(el => {
      switch (el) {
        case 'currencies':
          if (!state.currencies.list.length) {
            dispatch(loadCurrencies());
          }
          break;
        case 'carriers':
          if (!state.carriers.list.length) {
            dispatch(loadCarriers());
          }
          break;
        default:
          break;
      }
    });
  }, []);

  return [ready];
}
