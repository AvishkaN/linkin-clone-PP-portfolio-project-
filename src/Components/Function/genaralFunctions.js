

export const selectPostById=(post,id)=>{
    
    const selectedPost=post.posts.filter(post=>post.id===id);
    
   return selectedPost[0];

};

export const selectCommentById=(comments,postId)=>{
    const selectedComments=comments.filter(comment=>comment.data.postId===postId);
    return selectedComments;

};


