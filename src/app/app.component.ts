import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IComment } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  commentForm! : FormGroup;
  showEmoji: boolean = false;
  
  comments:Array<IComment> = [];

  constructor(){}

  ngOnInit(){
    this.commentForm = new FormGroup({
      comment : new FormControl(null, Validators.required)
    });
    }

  showEmojiPicker() {
    this.showEmoji = !this.showEmoji;
  }

  removeComment(index: number) {
    this.comments.splice(index, 1);
  }

  submit() {
    let commentData = this.commentForm.get('comment');
    let value = commentData?.value;

    let obj: any = {};
    obj.text = value;
    obj.dateTime = new Date();

    this.comments.push(obj);
    this.commentForm.reset();
    
  }


  addEmoji($event: any) {
    let commentData = this.commentForm.get('comment');
    let value = commentData?.value;

    if(!value) value = '';  //checking if value doesn't exits then assign ''

    commentData?.patchValue(value + $event.emoji.native)
  }
}
