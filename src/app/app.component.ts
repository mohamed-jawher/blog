import { Component, OnInit } from '@angular/core';
import{Login} from'./models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  login!:Login[];
  title = 'TP';
  ngOnInit(){
 this.login=[
  {
    title:'Archiblad !!',
    description:'Etudien_iset tozeur_DSI21',
   imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  createdDate : new Date(),
   snaps:1
  },
  {
    title:'three rock mountain',
    description:'endroit magnifique',
   imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  createdDate : new Date(),
   snaps:0,

  },
  {
    title:'un bon repas',
    description:'yumm c bon!',
   imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
  createdDate : new Date(),
   snaps:0,
  }
 ];
 }} 
