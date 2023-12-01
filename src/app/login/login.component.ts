import { Component,Input } from '@angular/core';
import { Login } from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  @Input() 
  login!: Login;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number ; 
  imageUrl!: string;
  buttonText!: string;
  ngOnInit(){
    this.title='Archiblad!!';
    this.description='Etudien_iset tozeur_DSI21';
    this.createdDate=new Date();
    this.snaps=22;
    this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-79227381280.jpg' ;
    this.buttonText='oh snap!';
  }
  onSnap(){
    if(this.buttonText==="oh snap!")
    {
      this.buttonText='Opss, unSnap!';
      this.snaps++;
    }
    else{
     
      this.buttonText="oh snap!";
      this.snaps--;
    }

  }
}

