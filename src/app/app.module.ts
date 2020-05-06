import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ItemsComponent} from './items/items.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    DashboardComponent,
    ItemFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
