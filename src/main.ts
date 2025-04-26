import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import {
  provideFirebaseApp,
  initializeApp,
  FirebaseApp,
} from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

// Registro de iconos
addIcons({
  'search-outline': searchOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase((app) => getDatabase()),
  ],
});
