import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { DirectoryComponent } from './components/directory/directory.component';
import {MatButtonModule} from "@angular/material/button";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FooterComponent } from './components/footer/footer.component';
import {AuthGuardService} from "./services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    DirectoryComponent,
    PageNotFoundComponent,
    UserPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
