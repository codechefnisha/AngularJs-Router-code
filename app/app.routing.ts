import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing = RouterModule.forRoot(appRoutes);