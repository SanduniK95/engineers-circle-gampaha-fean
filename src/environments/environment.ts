// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  apiBaseUrl: 'http://localhost:4000/api',

  firebase: {
    apiKey: "AIzaSyBzlekLOg0_Y15S0Ve9tC1FpVKJymDRw8E",
    authDomain: "engineers-circle-gampaha-fean.firebaseapp.com",
    databaseURL: "https://engineers-circle-gampaha-fean.firebaseio.com",
    projectId: "engineers-circle-gampaha-fean",
    storageBucket: "engineers-circle-gampaha-fean.appspot.com",
    messagingSenderId: "465713684074"
  },
  stripeKey:'pk_test_Z3KhhDxNMRvxkNcrTLZxwlSV000Wg1t5E6'
};

