import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  phone=[
    {id:1,title:"Apple iPhone 15 Pro",name:"iPhone 15 Pro, Blue 128 Online At The Best Price With 1 Year Of Apple Certified Service And Support.",price:4499,img:"assets/images/iphone.png"},
    {id:2,title:"Samsung S24 Ultra",name:"SAMSUNG Galaxy S24 Ultra, AI Phone, 256GB Storage, Titanium Black, 12GB RAM, Android Smartphone.",price:3729,img:"assets/images/S24.png"},
    {id:3,title:"Nokia G42",name:"Nokia G42, 256 GB, 8 Ram, 5G, Camera 50 Mega Pixels.",price:779,img:"assets/images/nokia.png"},
  ]
}
