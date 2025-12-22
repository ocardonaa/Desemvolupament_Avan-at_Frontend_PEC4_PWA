import { Routes } from '@angular/router';
import { ComponentsListComponent } from './pages/components-list/components-list.component';
import { ComponentsDetailComponent } from './pages/components-detail/components-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'components', component: ComponentsListComponent },
    { path: 'components/:id', component: ComponentsDetailComponent },
];
