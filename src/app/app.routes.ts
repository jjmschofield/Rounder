import { provideRouter, RouterConfig } from '@angular/router';
import { NightsOutComponent } from './nights-out';
import { NightsOutDetailComponent } from './nights-out/nights-out-detail';
import { RoundsCreateComponent } from './rounds/rounds-create';
import { RoundsDetailComponent } from './rounds/rounds-detail';

export const routes : RouterConfig = [
  {path: '', component: NightsOutComponent},
  {path: 'nights-out', component: NightsOutComponent},
  {path: 'nights-out/:nightOutId', component: NightsOutDetailComponent},
  {path: 'nights-out/:nightOutId/rounds/create', component: RoundsCreateComponent},
  {path: 'nights-out/:nightOutId/rounds/:roundId', component: RoundsDetailComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
