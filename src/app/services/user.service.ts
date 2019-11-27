import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  url="https://api.github.com/users";
  getAllUsers():Observable<any>{
    return this.http.get(this.url);
  }

  getReposDetails(userName){
    console.log(userName)
    let userUrl=`https://api.github.com/users/${userName}/repos`;
  
    return this.http.get<string[]>(userUrl);
  }

  

}
