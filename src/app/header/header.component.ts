import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displayName:string = ''
  getName(name: string){
    console.warn(name)
    this.displayName = name
  }
}
