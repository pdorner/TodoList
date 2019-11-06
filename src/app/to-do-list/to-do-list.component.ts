import { Component, OnInit } from '@angular/core';
import { ToDoListService  } from "../shared/to-do-list.service";


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
 todoArray =[];
 constructor(private todoService: ToDoListService) { }

 submitted: boolean;
 formControls = this.todoService.form1.controls;
 showSuccessMessage: boolean;

 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.todoService.form1.valid){
           if(this.todoService.form1.get("$key1").value == null ){                    
             this.todoService.insertToDo(this.todoService.form1.value);
       
         } else {
                 this.todoService.updateCustomer(this.todoService.form1.value);
                 this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.todoService.form1.reset();// the form will be empty after new record created
         }
   }
 }
}