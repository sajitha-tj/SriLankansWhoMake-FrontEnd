import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersDB: any[]=[];

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any>{
    return this.http.get( `${environment.userRouteLink}getAllUsers`);
  }

  public getUser(userId: string): Observable<any>{
    return this.http.get( `${environment.userRouteLink}getUser`,{
      headers: {id:userId}
    });
  }
}
