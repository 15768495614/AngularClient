import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestcaseTableComponent } from './components/testcase-table/testcase-table.component';
import { SigninOidcComponent } from './oidc/signin-oidc/signin-oidc.component';
import { RedirectSilentRenewComponent } from './oidc/redirect-silent-renew/redirect-silent-renew.component';
import { AddTestcaseComponent } from './components/add-testcase/add-testcase.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'testcase',
    component: TestcaseTableComponent
  },
  {
    path: 'signin-oidc',
    component: SigninOidcComponent
  },
  {
    path: 'redirect-silentrenew',
    component: RedirectSilentRenewComponent
  },
  {
    path: 'testcase-add',
    component: AddTestcaseComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
