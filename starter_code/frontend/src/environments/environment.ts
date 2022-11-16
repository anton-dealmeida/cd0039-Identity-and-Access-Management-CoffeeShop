/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'udacity-coffee-shop-221116.eu', // the auth0 domain prefix
    audience: 'localhost:5000', // the audience set for the auth0 app
    clientId: 'Kgq57pdWuiVfJTxWSnJX81rYGXmDPRb1', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
