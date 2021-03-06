import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { FormsModule } from '@angular/forms';
import { PuppyDetailComponent } from './puppy-detail/puppy-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { PuppySearchComponent } from './puppy-search/puppy-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PuppiesComponent,
    PuppyDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PuppySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
