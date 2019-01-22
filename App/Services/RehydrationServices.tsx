import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import DebugConfig from '../Config/DebugConfig';
import ReduxPersist from '../Config/ReduxPersist';

const updateReducers = (store) => {
    const reducerVersion = ReduxPersist.reducerVersion;
    const config = ReduxPersist.storeConfig;

    AsyncStorage.getItem('reducerVersion')
        .then((localVersion) => {
            if (localVersion !== reducerVersion) {
                if (DebugConfig.useReactotron) {
                    console.tron.display({
                        name: 'PURGE',
                        value: {
                            'Old Version:': localVersion,
                            'New Version:': reducerVersion
                        },
                        preview: 'Reducer Version Change Detected',
                        important: true
                    });
                }
                // Purge store
                persistStore(store, config, startup).purge();
                AsyncStorage.setItem('reducerVersion', reducerVersion);
            } else {
                persistStore(store, config, startup);
            }
        })
        .catch(() => {
            persistStore(store, config, startup);
            AsyncStorage.setItem('reducerVersion', reducerVersion);
        });
};

export default { updateReducers };
