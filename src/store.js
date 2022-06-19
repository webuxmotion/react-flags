import axios from 'axios';
import {configureStore} from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countryReducer } from './features/countries/countries-slice';
import { detailsReducer } from './features/details/details-slice';
import { currenciesReducer } from './features/currencies/currencies-slice';
import { carriersReducer } from './features/carriers/carriers-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
    currencies: currenciesReducer,
    carriers: carriersReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) => getDefaultMiddlware({
    thunk: {
      extraArgument: {
        client: axios,
        api,
      },
    },
    serializableCheck: false,
  })
});
