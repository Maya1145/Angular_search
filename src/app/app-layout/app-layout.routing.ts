
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { AppParentDashComponent } from "./app-parent-dash/app-parent-dash.component";
import { AppChildDashComponent } from "./app-child-dash/app-child-dash.component";

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', redirectTo: 'searchdetails', pathMatch: 'full' },
            { path: 'searchdetails', component: AppParentDashComponent },
            { path: 'companyDetails', component: AppChildDashComponent }
        ]
    }
];
export const PrgRouting = RouterModule.forChild(routes);