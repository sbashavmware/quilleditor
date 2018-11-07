import { Component, ElementRef } from '@angular/core';

import * as Quill from 'quill';



console.log(Quill)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quill-editor';
  quillEditInst =  null;
  edited = true;
  isReadOnly =  true;
  headerVal = 'Rich Text editor built with Quill in Angular 7 using Clarity';
    options = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

        // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                // dropdown with defaults from theme

      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  constructor(private elem: ElementRef){

  }

  editorInstance(quillInstance) {
    this.quillEditInst =  quillInstance;
    this.quillEditInst.theme.modules.toolbar.container.hidden = true;
    this.edited = true;
  }

  showEditorToolBar = function(){
  this.quillEditInst.theme.modules.toolbar.container.hidden = false;
  this.edited = false;
  this.isReadOnly =  false;
  }

  hideEditorToolBar = function(){
  this.quillEditInst.theme.modules.toolbar.container.hidden = true;
  this.edited = true;
  this.isReadOnly = true;
  }
}
