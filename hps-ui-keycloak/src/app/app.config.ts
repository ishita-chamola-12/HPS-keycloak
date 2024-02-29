import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    provideHttpClient(),provideRouter(routes), provideClientHydration(),
    KeycloakService
  ]
};

function initKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init({
    config: {
      url: 'http://localhost:8180',
      realm: 'HPS-test',
      clientId: 'hps-mock-frontend'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe:false
      // silentCheckSsoRedirectUri: window.location.origin
      //   + '/assets/silent-check-sso.html'
    },
  });
}