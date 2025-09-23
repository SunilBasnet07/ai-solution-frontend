const { configureStore } = require("@reduxjs/toolkit")
import persistReducer from "redux-persist/es/persistReducer"
import rootReducer from "./rootReducers"
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore"
import { PERSIST } from "redux-persist"
const persistConfig = {
    key: 'ai-solution',
    storage,
    whitelist:['auth']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({
          serializableCheck: {
            ignoreActions: [PERSIST],
          },
        });
      },
})
const persistor = persistStore(store)
export  {store,persistor};