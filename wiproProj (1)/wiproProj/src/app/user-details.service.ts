import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QnA } from './QnA';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  registration(use):Observable<Object>{
    return this.http.post("http://localhost:8080/wipro/addUser",use);
  }

  loginUser(uname,pass){
    return this.http.get(`http://localhost:8080/wipro/logCheck/${uname}/${pass}`);
  }
  loginAdmin(uname,pass,role){
    return this.http.get(`http://localhost:8080/wipro/logCheck/${uname}/${pass}/${role}`);
  }

  viewQues():Observable<QnA[]>{
    return this.http.get<QnA[]>("http://localhost:8080/wipro/viewQues");
  }

  addQuestion(que){
    return this.http.post("http://localhost:8080/wipro/addQues",que);

  }
  addAnswer(id,ans){
    return this.http.post(`http://localhost:8080/wipro/addAns/${id}`,ans);
  }



}
