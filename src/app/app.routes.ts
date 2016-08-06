import {provideRouter, RouterConfig} from '@angular/router';
import {NightsOutOverviewComponent} from './nights-out/nights-out-overview';

export const routes:RouterConfig = [
  {path: '', component: NightsOutOverviewComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
