import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { OrgainizationSetUpComponent } from "./orgainization-set-up/orgainization-set-up.component";
import { NewRegistrationComponent } from "./new-registration/new-registration.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'organization',
                component: OrgainizationSetUpComponent
            }
        ]
    },
    {
        path: 'new-registration',
        component: NewRegistrationComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }