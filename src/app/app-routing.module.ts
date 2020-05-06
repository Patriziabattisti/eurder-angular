import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemFormComponent} from './item-form/item-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'createItem', component: ItemFormComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
