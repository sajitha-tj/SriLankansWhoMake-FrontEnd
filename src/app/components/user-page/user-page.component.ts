import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: any;

  constructor(private linkRoute : ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {

    if(environment.allUsers.length>0) {
      this.user = environment.allUsers.filter(({userId}) => userId === this.linkRoute.snapshot.params.id)[0];
    }else{
      this._userService.getUser(this.linkRoute.snapshot.params.id).subscribe(response=>{
      this.user = response.dataSet;
    },error => {
      alert("An error occurred "+error);
    });
    }

  }

  makeLinkClass(link:any) {
    let linkArray = link.split(".");
    console.log(linkArray[0]);
  }
}
