# Extra Credit:

1. Inside post.initialize set up a click handler on this.$el such that when a user clicks on a post it should invoke highlight method to toggle the highlighting.
2. How can you get the this keyword to point to the post object rather than the window? hint: if we pass the click event this.highlight.bind(this) as its event handler, we will capture the correct context. Google it!
3. If the user clicks on the post a second time, remove the highlighting and set post.active to false.
4. Add an 'edit' button to the page under each post
5. When a user clicks the edit button, it should show them input fields
6. The input fields should be pre-populated w/ the posts current information
7. When the user makes edits and clicks 'save', change the posts' attr's and re-render the post
8. Play with the following:
```javascript
localStorage.setItem('post1_attrs', JSON.stringify(posts[0].attributes))
JSON.parse(localStorage.getItem('post1_attrs'))
```
9. Google localStorage and JSON.stringify, then try using them to cache posts between page refreshes
10. Whenever you call post_factory with an id, check to see if that post has been cached
11. If so, constuct that post from its cached attributes rather than $.get from the server.