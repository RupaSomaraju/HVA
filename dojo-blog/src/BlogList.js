const BlogList = ({blogs, title}) => {
    //const blogs=props.blogs;
    //const title=props.title;
  const handldeDelete =(id) =>{
    
  }
    //console.log(props,blogs)

    return ( 
        <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>written by { blog.author }</p>
            <button onClick={() => handldeDelete(blog.id)}>delete blog</button>
            </div>
          ))}
        </div>
     );
}
 
export default BlogList;