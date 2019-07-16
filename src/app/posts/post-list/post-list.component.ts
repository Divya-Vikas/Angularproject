import { Component, OnInit} from '@angular/core';
import { Post } from "src/app/posts/post.model";
import { PostsService } from "src/app/posts/posts.service";
import { Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
posts:Post[]=[];
private postsSub:Subscription;
//   {
//   category:"first", itemname:"bread",amount:40,expensedate:"qwer"
// },
// {
//   category:"first", itemname:"bread",amount:40,expensedate:"qwer"
// },
// {
//   category:"first", itemname:"bread",amount:40,expensedate:"qwer"
// },
// ]
  constructor(public postsService:PostsService) { }

  ngOnInit() {
    this.posts=this.postsService.getPosts();
    this.postsSub=this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
this.posts=posts;
    });
  }
ngOnDestroy(){
  this.postsSub.unsubscribe();
}
}
