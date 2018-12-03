import { Component, OnInit} from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   urna: boolean
   navLogin: boolean
   ngOnInit () {
      this.urna = false,
      this.navLogin= true
   }
}
