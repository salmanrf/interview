const CardComponent = ({post}) => {
  const {id, title, userId, body} = post;
  
  return (
    <div className="card-component">
      <header className="card-header">
        <span class="post-id">{id}</span> 
        <span>
          {title.length > 30 ? 
            title.substr(0, 30) + "..."
            :
            title
          }
        </span>
      </header>
      <div className="card-post-user">
        <span>by {userId}</span>
      </div>
      <main className="card-post-content">
        <p>
          {body}
        </p>
      </main>
    </div>
  );
}

export default CardComponent;