import {provideRouter, RouterConfig} from '@angular/router';

import {NightsOutComponent} from './nights-out'

export const routes:RouterConfig = [
  {path: '', component: NightsOutComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
