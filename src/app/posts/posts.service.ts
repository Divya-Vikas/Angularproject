import { Injectable } from '@angular/core';
import { Post } from "src/app/posts/post.model";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PostsService {
private posts:Post[]=[];
private postsUpdated=new Subject<Post[]>();
  constructor() { }
  getPosts(){
    return [...this.posts];
}
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}

addPost( category:string, itemname:string,amount:string,expensedate:string){
  const post:Post={
    category:category, itemname: itemname,amount:amount,expensedate:expensedate
  };
  this.posts.push(post);
  this.postsUpdated.next([...this.posts]);
}


}
