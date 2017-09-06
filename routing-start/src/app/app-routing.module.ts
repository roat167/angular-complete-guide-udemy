import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id', component: UserComponent }, // router with paramenter id
      ] 
    },
    
    //make sure this routes canActivate (using AuthGuard) return true
    { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: 
      [
       { path: ':id', component: EditServerComponent },
       { path: ':id/edit', component: EditServerComponent }   
      ] 
    },
  
    { path: 'not-found', component: PageNotFoundComponent },
    { path:'**', redirectTo: '/not-found' } //always make Subscriptionre it in the last route ** mean every unknows route      
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // <-- register the routes
    ],
    exports: [RouterModule] // tell angular that from this module can be accessible from other modules
})
export class AppRoutingModule {

}