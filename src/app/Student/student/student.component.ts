import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Entities/student';
import { StudentService } from 'src/app/Services/student.service';
import { Route,ActivatedRoute,ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  student: Student | any;

  listStudent: Student[] | any;

  msg:any;

  std: Student=new Student();



  constructor(private studentService:StudentService,private route:ActivatedRoute,private fb:FormBuilder) {
   }

  urlKeyParam:any;
  urlValueParam:any;

  tabkey:any=[];
  tabvalue:any=[];

  ngOnInit(): void {


    console.log(this.route.snapshot.queryParamMap.has('name'))
    console.log(this.route.snapshot.queryParamMap.has('key'))


    console.log(this.route.snapshot.queryParamMap.get('name'))
    console.log(this.route.snapshot.queryParamMap.get('key'))


    if (this.route.snapshot.queryParamMap.get('name') && this.route.snapshot.queryParamMap.get('key')){
      console.log("getQuery")
      this.urlValueParam=this.route.snapshot.queryParamMap.get('name')
      this.urlKeyParam=this.route.snapshot.queryParamMap.get('key')
      this.getQuery(this.urlValueParam,this.urlKeyParam);
      
    }else{
      console.log("getAllQuery")
      this.urlValueParam=this.route.snapshot.queryParamMap.get('age')
      this.urlKeyParam=this.route.snapshot.queryParamMap.get('name')

      this.getAllQuery(this.urlValueParam,this.urlKeyParam);

    }
    console.log(this.urlKeyParam+" < param > "+this.urlValueParam)
  }

  public insertStudentData(){
    this.studentService.insertStudent(this.std).subscribe((data)=>{
      this.msg=data;
    })
  }


  private getQuery(val:any,key:any){
    this.studentService.getQueryParam(val,key).subscribe(data => {
      this.student = data;
      
      console.log(this.student)

      this.tabkey=Object.keys(data);
      this.tabvalue.push(Object.values(data));

    });
  }
  
  private getAllQuery(age:any,key:any){
    this.studentService.getAllQueryParam(age,key).subscribe(data => {
      this.listStudent = data;
      console.log(this.listStudent)

      data.forEach((element:any) => {
        this.tabkey=Object.keys(element);
        this.tabvalue.push(Object.values(element));
      });  
      console.log("this.tabKey => "+this.tabkey)
      console.log("this.tabKey => "+this.tabvalue)
    });    
  }

}
