import { Component } from '@angular/core';
import { Post } from 'src/app/posts/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
 // posts=[];
  storedPosts:Post[]=[];
  onPostAdded(post)
{
this. storedPosts.push(post);
}
}
