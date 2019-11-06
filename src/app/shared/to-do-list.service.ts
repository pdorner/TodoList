import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private firebase: AngularFireDatabase) { }
         todoList: AngularFireList<any>;

        form1 = new FormGroup({
     		$key1: new FormControl(null),
     		todoObject: new FormControl('', Validators.required),

    
         });

            getToDo(){
                 this.todoList = this.firebase.list('todo');
                 return this.todoList.snapshotChanges();
         }
         insertToDo(todo){
                 this.todoList.push({
                 todoObject: todo.todoObject
                         
                  });
         }
         populateForm(todo){

    	    this.form1.setValue(todo);console.log("hi ");
          }   
          updateCustomer(todo){
            this.todoList.update(todo.$key1,{
       todoObject:  todo.todoObject,
        
    });
  }     
  deleteCustomer($key1: string){
    this.todoList.remove($key1);
  }
  
}
