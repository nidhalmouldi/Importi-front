import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

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
  @Input() isAuthenticatedHeader: boolean = false;
}
