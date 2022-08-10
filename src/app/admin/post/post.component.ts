import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postForm = new FormGroup({
  title: new FormControl(),
  content: new FormControl()
})
  constructor() { }

  ngOnInit(): void {
  }

}
