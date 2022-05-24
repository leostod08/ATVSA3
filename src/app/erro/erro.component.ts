import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


//página erro
var container = document.getElementById('container');
window.onmousemove = function(e){
  var x = - e.clientX /5,
      y = - e.clientY /5;
     x + 'px';
       y + 'px';
}
