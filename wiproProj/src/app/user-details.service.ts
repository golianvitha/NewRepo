import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient:HttpClient) { }

  // registration(use):Observable<Object>{
  //   return this.http.post("http://localhost:8080/wipro/addUser",use);
  // }

  // loginUser(uname,pass){
  //   return this.http.get(`http://localhost:8080/wipro/logCheck/${uname}/${pass}`);
  // }
  // loginAdmin(uname,pass,role){
  //   return this.http.get(`http://localhost:8080/wipro/logCheck/${uname}/${pass}/${role}`);
  // }

  // viewQues():Observable<QnA[]>{
  //   return this.http.get<QnA[]>("http://localhost:8080/wipro/viewQues");
  // }

  // addQuestion(que){
  //   return this.http.post("http://localhost:8080/wipro/addQues",que);

  // }
  // addAnswer(id,ans){
  //   return this.http.post(`http://localhost:8080/wipro/addAns/${id}`,ans);
  // }

    getContestFeed(){
    return this.httpClient.get('http://182.23.130.96:443/sfl/getsflcontest');
  }
  preContestFeed(){
    let formdata=new FormData;
    formdata.append("contestdate","09-01-2023");
    return this.httpClient.post('http://182.23.130.96:443/sfl/getsflprecontestfeed',formdata);
  }

  leaderboard(){
    let formdata=new FormData;
    formdata.append("contestdate","09-01-2023");
    return this.httpClient.post('http://182.23.130.96:443/sfl/getsflleaderboard',formdata);
  }

  teamscore(){
    let json={"contestdate":"05-01-2023", 
      "teamname":"sfluser1" }
    return this.httpClient.post('http://182.23.130.96:443/sfl/getsflteamscore',json);
  }
  joinContest(){
    let json={"contestdate":"09 -01-2023",  "teamname":"sfluser2" ,"selection" : {  "totalbuyamount":434900,"buyinfo":{"BAJFINANCE" : {"buyprice":6610, "quantity":50, "amount":330500 },"HCLTECH" : {"buyprice":1044,"quantity":100,"amount":104400 }}}};
    return this.httpClient.post('http://182.23.130.96:443/sfl/joinsflcontest',json);
  }


}
