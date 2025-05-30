import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'demo project';
  subject: string = 'Angular';
  img: string = 'https://images.theconversation.com/files/413827/original/file-20210729-21-neazw1.jpg?ixlib=rb-4.1.0&rect=10%2C0%2C3356%2C2624&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip' ;
  desg: string = "default";

  buttonClick(){
    alert('button clicked ');
  }

  printName(name:string, age:number):void {
    console.log(`Hello ${name} i am ${age} years old`)
  }

  getname(event:any){
    console.log(event)
    console.log(event.target.value)
  }

  getdata(data:any){
    console.log(data)
    console.log(data.value)
  }

  getdesg(){
    console.log(this.desg)
  }
}

