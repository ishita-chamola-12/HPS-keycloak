// import { KeycloakService } from "keycloak-angular";

// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         await keycloak.init({
//           config: {
//             url: "http://localhost:8180",
//             realm: "HPS-test",
//             clientId: "hps-mock-frontend",
//           },
//           // If set a false you cannot get any information about the user (e.g. username)
//           loadUserProfileAtStartUp: true,
//           initOptions: {
//             onLoad: 'login-required',
//             checkLoginIframe: true,
//             // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
//           },
//           // By default, the keycloak-angular library add 'Authorization: Bearer TOKEN' header to all http requests
//           // Add here if u want to exclude urls (to not have that header)
//            // Enables Bearer interceptor
//          enableBearerInterceptor: true,
//          // Prefix for the Bearer token
//          bearerPrefix: 'Bearer',
//          // URLs excluded from Bearer token addition (empty by default)
//           bearerExcludedUrls: ['/assets']
//         });

//         resolve(resolve);
//       } catch (err) {
//         reject(err);
//       }
//     });
//   };

// }