import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  pageSize: number = 5;
  Allusers: any;
  users: any;
  displayUsers: any;
  tempUsers: any[]=[];
  filterByArray: any[]=[];
  skillSet:any[]=[];

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.skillSet = environment.skillSet;

    this._userService.getAllUsers().subscribe(response => {
      this.Allusers = response.dataSet;
      this.Allusers = this.shuffleArray(this.Allusers);
      this.users = this.Allusers;
      this.displayUsers = this.users.slice(0,this.pageSize);
      environment.allUsers = this.Allusers;

    },error => {
      console.log(error)
    });

  }

  searchUser(searchKeyword:string) {
    if(searchKeyword.toLowerCase()===""){
      this.displayUsers = this.users;
    }else{
      this.displayUsers = this.users.filter((user:any) => {
        return user.userName.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
          || user.userLocation.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1;
      });
    }
  }

  filterBy(filterKey: any) {
    if(!filterKey.checked){
      //add
      this.filterByArray.push(filterKey.name);
      this.tempUsers = this.Allusers.filter((user:any) => {
        return user.userSkills.includes(filterKey.name);
      });

      if(this.filterByArray.length === 1){
        this.users = this.tempUsers;
        this.displayUsers = this.users.slice(0,this.pageSize);
      }else{
        this.users = this.users.concat(this.tempUsers);
        this.displayUsers = this.users.slice(0,this.pageSize);
      }

    }else{
      //remove
      this.filterByArray = this.filterByArray.filter((filterS)=>{
        return filterS != filterKey.name
      });

      this.users = this.users.filter((user:any) => {
        return !user.userSkills.includes(filterKey.name);
      });
      this.displayUsers = this.users.slice(0,this.pageSize);
    }
    if(this.filterByArray.length===0){
      this.users = this.Allusers;
      this.displayUsers = this.users.slice(0,this.pageSize);
    }

  }

  shuffleArray(array: any[]):any[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  paginatorFunc(event: any) {
    this.pageSize = event.pageSize;
    this.displayUsers = this.users.slice(event.pageIndex*event.pageSize, (event.pageIndex+1)*event.pageSize)
  }
}
