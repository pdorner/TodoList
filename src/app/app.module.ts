import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms" ;




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CustomerService } from "./shared/customer.service";
import { ToDoListService  } from "./shared/to-do-list.service";
import { ToDoListListComponent } from './to-do-list-list/to-do-list-list.component';


@NgModule({
 declarations: [
   AppComponent,
   CustomerComponent,
   CustomerListComponent,
   ToDoListComponent,
   ToDoListListComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,

   AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule, // we will import the classes here too
   FormsModule
 ],
 providers: [CustomerService],
 bootstrap: [AppComponent]
})
export class AppModule { }
