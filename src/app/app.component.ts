import { Component } from '@angular/core';

import * as Quill from 'quill';
console.log(Quill)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quill-editor';
  headerVal = 'Rich Text editor built with Quill in Angular 7 using Clarity';
}
