function Post(props) {
  return (
    <div style={{ padding: "10px", border: "solid teal 5px", margin: "25px" }}>
      <h2>{props.title ?? "No Content"}</h2>
      <hr />
      <p>{props.description ?? "No Content"}</p>
    </div>
  );
}

export default Post;
