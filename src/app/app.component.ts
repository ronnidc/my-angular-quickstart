import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
// [ ] means property binding - Component to DOM
// ( ) means event binding - DOM to Component

  title = 'Customer App';
  name = 'Ward';
  wardsColor = 'darkgreen';
  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Eric'},
    {id: 4, name: 'Sally'},
    {id: 5, name: 'Emmet'}
  ];

  changeSuitColor() {
    // this.wardsColor = 'red';
    this.wardsColor = this.wardsColor === 'darkgreen' ?
    'darkred' : 'darkgreen';
  }
}
