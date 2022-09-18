import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  http: any;


  constructor(){
    this.http=HttpClient;
    this.getData();
    
  }

  array:any=[
      {
        ID:1,
        NAME:"XYZ",
        AGE:25,
        EMAIL:"a@gmail.com",
        ADDR:"abcd abcd",
      },
      {
        ID:2,
        NAME:"PQR",
        AGE:26,
        EMAIL:"b@gmail.com",
        ADDR:"axyz xyz",
      }
  ];

  tabkey:any=[];
  tabvalue:any=[];

  getData(){
    console.log("Type of array => "+typeof(this.array))
    this.array.forEach((element:any) => {
      console.log(element);
      this.tabkey=Object.keys(element);
      this.tabvalue.push(Object.values(element));
    });  
  }


  callApi(){
    return this.http.get('http://localhost:8080/api/getStudent/5');
  }

}
