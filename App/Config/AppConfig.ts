import Secrets from 'react-native-config'

export default {
    allowTextFontScaling: true,
    apiUrl: Secrets.API_URL,
    databaseVersion: Secrets.SCHEMA_VERSION as number,
    databaseName: Secrets.DATABASE_NAME as string
};
