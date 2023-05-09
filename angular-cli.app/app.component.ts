import { Component } from '@angular/core';

var exontrol = require("app/exontrol.common.min.js");
               require("app/exontrol.patch.min.js");

Object.assign(exontrol, require("app/exontrol.icalendar.min.js")); // adds IRecur prototype to exontrol object, defines the exontrol.ICalendar.IRecur class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
    window.onload = function ()
    {
      var oRecur = new exontrol.ICalendar.IRecur();
    }
  }
}
