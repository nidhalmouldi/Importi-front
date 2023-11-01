import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = [
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe jaune.jpg', prix: 10.5},
    {name:'Robe', image: 'robe noire.jpg', prix: 10.5},
    {name:'Robe', image: 'jupe rouge.jpg', prix: 10.5},
    {name:'Robe', image: 'pantalon beige.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5},
    {name:'Robe', image: 'robe blue.jpg', prix: 10.5}
  ];

}
