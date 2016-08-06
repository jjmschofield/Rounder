import {provideRouter, RouterConfig} from '@angular/router';
import {NightsOutOverviewComponent} from './nights-out/nights-out-overview';
import {NightsOutDetailComponent} from './nights-out/nights-out-detail'

export const routes:RouterConfig = [
  {path: '', component: NightsOutOverviewComponent},
  {path: 'nights-out', component: NightsOutOverviewComponent},
  {path: 'nights-out/:id', component: NightsOutDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
