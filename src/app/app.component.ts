import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Importi';
  count = 0;
  disabled = false;
  isAdmin = true;
  isClient = false;
  isAuthenticated = false;
  color = "qsd";
  counter(type:string){
    type === 'add' ? this.count++ : this.count--;
  }
  users = [
    {name:'nidhal', telephone: 123456},
    {name:'chayma', telephone: 123456},
    {name:'nader', telephone: 123456},
    {name:'mohamed', telephone: 123456}
  ];

  ngOnInit(){
    this.resetVariable(this.isAuthenticated);
  }

  resetVariable(isAuthenticated:boolean){
    if(isAuthenticated === false){
      this.isAdmin = this.isClient = false;
    }else{
      this.isClient = true;
    }
  }

}


