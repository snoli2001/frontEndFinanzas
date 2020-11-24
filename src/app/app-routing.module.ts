import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NewCreditLineComponent} from "./pages/new-credit-line/new-credit-line.component";
import {ClientsComponent} from "./pages/clients/clients.component";
import {CreditsComponent} from "./pages/credits/credits.component";
import {NewClientComponent} from "./pages/new-client/new-client.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MaintenanceComponent} from "./pages/maintenance/maintenance.component";
import {OperationsComponent} from "./pages/operations/operations.component";
import {ReceiptComponent} from "./pages/receipt/receipt.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'newCredit', component:NewCreditLineComponent},
  {path: 'newClient', component:NewClientComponent},
  {path: 'maintenance', component:MaintenanceComponent},
  {path: 'operations/:idClient', component:OperationsComponent},
  {path: 'receipt/:idClient', component:ReceiptComponent},
  {path:  '**', pathMatch:'full', redirectTo:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
