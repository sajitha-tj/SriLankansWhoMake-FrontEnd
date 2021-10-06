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

    this.user = environment.allUsers.filter(({userId})=> userId===this.linkRoute.snapshot.params.id)[0];

  }

  makeLinkClass(link:any) {
    let linkArray = link.split(".");
    console.log(linkArray[0]);
  }
}
