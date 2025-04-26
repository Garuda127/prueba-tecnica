// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * @summary Se que no se debe subir a github. lo recomendable hacer el environment.example pero por el momento lo dejo asi
 */
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCDavulllkol8FC-jKq01zEQrulls1kp3Y',
    authDomain: 'prueba-tecnica-enacment.firebaseapp.com',
    projectId: 'prueba-tecnica-enacment',
    storageBucket: 'prueba-tecnica-enacment.firebasestorage.app',
    messagingSenderId: '95298614309',
    appId: '1:95298614309:web:c7237ed0831343142ebbcc',
    measurementId: 'G-2MFGVDPSSW',
    databaseUrl: 'https://prueba-tecnica-enacment-default-rtdb.firebaseio.com/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
