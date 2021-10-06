import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";


@Injectable()
export class AuthGuardService implements CanActivate {
  allUsers:any[]=[];

  constructor(private router:Router, private _userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {

    /*this._userService.getUser(route.params.id).subscribe(response=>{
      idValidity = response.state;
    },error => {
      alert("An error occurred "+error);
      idValidity = false;
    });*/
    if(environment.allUsers.length === 0){
      this._userService.getAllUsers().subscribe(response => {
        console.log("sdsd")
        environment.allUsers = response.dataSet;
      },error => {
        console.log(error)
      });
    }

    this.allUsers = environment.allUsers;
    let user =  this.allUsers.filter((user:any)=>{
      return user.userId === route.params.id;
    });
    if(user.length>0){
      return true;
    }else{
      this.router.navigateByUrl(route.params.id).catch(isNavigated=>{
      }).catch(navigateError=>{
      });
      return false;
    }
    // return idValidity;
  }
}
