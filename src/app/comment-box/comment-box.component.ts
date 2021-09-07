import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() text: string = '';
  @Input() dateTime: string | Date | number | null = '';

  @Output() removeCommentHandler = new EventEmitter();

  constructor() { }

  removeComment() {
    this.removeCommentHandler.emit();
  }

  ngOnInit(): void {
  }

}
