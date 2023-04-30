import {
    combineReducers,
    configureStore,
  } from '@reduxjs/toolkit';
  import EncryptedStorage from 'react-native-encrypted-storage';
  import { createWhitelistFilter } from 'redux-persist-transform-filter';
  
  import {
    FLUSH,
    PAUSE,
    PERSIST,
    PersistConfig,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';
  import autoLevelMerge2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
  
  import userReducer from './slices/user/slice';
  
  
  const rootPersistConfig: PersistConfig<any> = {
    version: 1,
    debug: __DEV__,
    key: 'FinancePersonalKey',
    whitelist: ['user'],
    storage: EncryptedStorage,
    stateReconciler: autoLevelMerge2,
    transforms: [
      createWhitelistFilter('user', ['budget', 'transactions']),
    ],
  };
  
  const reducers = combineReducers({
    user: userReducer,
  });
  
  const persistedReducer = persistReducer<ReturnType<typeof reducers>>(
    rootPersistConfig,
    reducers,
  );
  
  const store = configureStore({
    reducer: persistedReducer,
    devTools: __DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };
  
  export type AppRootState = ReturnType<typeof store.getState>;
  
  export type AppGetState = () => AppRootState;
  
  export type AppDispatch = typeof store.dispatch;
  