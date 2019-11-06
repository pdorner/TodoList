import { Component, OnInit } from '@angular/core';
import { ToDoListService  } from "../shared/to-do-list.service";


@Component({
  selector: 'app-to-do-list-list',
  templateUrl: './to-do-list-list.component.html',
  styleUrls: ['./to-do-list-list.component.css']
})
export class ToDoListListComponent implements OnInit {
todoArray =[];
showDeletedMessage : boolean;
searchText:string = "";


 constructor(private todoService: ToDoListService) { }

 ngOnInit() {
         this.todoService.getToDo().subscribe(
                 (list) => {
                         this.todoArray = list.map( (item) => {
                                return {
                                        $key1 : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}
onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.todoService.deleteCustomer($key);
        this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000);
       }
   }
   filterCondition(todo){
     return todo.todoObject.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }

}