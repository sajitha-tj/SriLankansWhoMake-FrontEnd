import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectoryComponent} from "./components/directory/directory.component";
import {AboutComponent} from "./components/about/about.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UserPageComponent} from "./components/user-page/user-page.component";

const routes: Routes = [
  {path:'', component:DirectoryComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent, pathMatch:'full'},
  {path:'blogs', redirectTo:'', pathMatch:'full'},
  {path:'user/:id', component:UserPageComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
