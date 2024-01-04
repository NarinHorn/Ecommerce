import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  signUp(data:object):void {
    alert(data);
    console.log(data);
  }
}
