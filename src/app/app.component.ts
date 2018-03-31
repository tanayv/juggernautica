import { Component, OnInit, ElementRef } from '@angular/core';


declare var AFRAME;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  aframe: any;
  elem: any;

  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  

  ngOnInit() {
    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % COLORS.length;
          this.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('I was clicked at: ', evt.detail.intersection.point);
        });
      }
    });
    

  }
}
