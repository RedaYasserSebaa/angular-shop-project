import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  id:any;
  items:any;
  
  phone=[
    {id:1,title:"Apple iPhone 15 Pro",name:"iPhone 15 Pro, Blue 128 Online At The Best Price With 1 Year Of Apple Certified Service And Support.",price:4499,img:"assets/images/iphone.png"},
    {id:2,title:"Samsung S24 Ultra",name:"SAMSUNG Galaxy S24 Ultra, AI Phone, 256GB Storage, Titanium Black, 12GB RAM, Android Smartphone.",price:3729,img:"assets/images/S24.png"},
    {id:3,title:"Nokia G42",name:"Nokia G42, 256 GB, 8 Ram, 5G, Camera 50 Mega Pixels.",price:779,img:"assets/images/nokia.png"},
  ]

  constructor(private route:ActivatedRoute){}

  private store=inject(Store);
  increment(){
    this.store.dispatch(increment());
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "تمت الإضافة الى السلة بنجاح"
    });
  }

  ngOnInit()
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.items=this.phone.filter(e=>e.id==this.id)
    console.log(this.items);
  }
}
