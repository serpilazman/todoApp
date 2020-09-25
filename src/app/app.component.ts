import { Component } from '@angular/core';
import { model,TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new model();
  
  getItems(){
    return this.model.items.filter(item=>!item.action);
  }

  getUser(){
    return this.model.user;
  }

  addItem(value){
    if(value!=""){
      this.model.items.push(new TodoItem(value,false));
    }
  }



}
