import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Entities/student';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

//here we are doing integration with backend code or api
  public insertStudent(student:any):Observable<string>{
    return this.http.post<string>('http://localhost:8080/api/addStudent',student,{responseType:'text' as 'json'});
  }
  

  public getQueryParam(val:any,key:any):Observable<Array<Student>>{
    return this.http.get<Array<Student>>('http://localhost:8080/api/getQueryParam?name='+val+'&key='+key);
  }

  public getAllQueryParam(val:any,key:any):Observable<Array<Student[]>>{
    
    return this.http.get<Array<Student[]>>('http://localhost:8080/api/getAllQueryParam?age='+val+'&name='+key);
  }

}
