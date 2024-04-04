import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';

export interface useredit{
  status:number;
  user :User;
}
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:8000/api/user';
  constructor(private http: HttpClient) {
 
   }
   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
 
  delete(id: number) {
    return this.http.delete(`http://localhost:8000/api/user/${id}`);
  }
  saveUser(userData:object): Observable<User[]> {
    return this.http.post<User[]>(`http://localhost:8000/api/user`, userData);
  }
  getuser(id:number){
    return this.http.get<useredit>(`http://localhost:8000/api/user/${id}`)
  }
  update(inputdata:object,id:number){
return this.http.put(`http://localhost:8000/api/user/${id}`,inputdata);
  }
  }

