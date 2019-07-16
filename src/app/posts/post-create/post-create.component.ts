import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/post.model';
import { NgForm } from "@angular/forms";
import { PostsService } from "src/app/posts/posts.service";
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost='NO CONTENT';
  enteredValue='';
  enteredTitle='';
  enteredTitl='';
  enteredTit='';
  enteredTi='';

 

  constructor(public postsService:PostsService) { }

  ngOnInit() {
  }

onAddPost(form:NgForm){
//   const post:Post={
// category:form.value.enteredTitle,
//  itemname:form.value.enteredTitl,
//  amount:form.value.enteredTit,
//  expensedate:form.value.enteredTi
// };
this.postsService.addPost(form.value.enteredTitle,form.value.enteredTitl,form.value.enteredTit,form.value.enteredTi);
form.resetForm();
}
}
