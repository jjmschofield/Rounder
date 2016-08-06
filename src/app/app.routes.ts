import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {NightsOutComponent} from './nights-out'

export const routes:RouterConfig = [
  {path: '', component: NightsOutComponent},
  {path: 'about', component: AboutComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
