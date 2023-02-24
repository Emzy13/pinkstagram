import Post from "../components/Post";

const posts = [
  {
    id: "100",
    username: "emmzzit",
    userImg: "3.jpeg",
    img: "3.jpeg",
    caption: "prima mea postare<3",
  },
  {
    id: "111",
    username: "emmzzit",
    userImg: "3.jpeg",
    img: "8.jpeg",
    caption: "Meet Muki",
  },
  {
    id: "221",
    username: "emmzzit",
    userImg: "3.jpeg",
    img: "6.jpeg",
    caption: ":)",
  },
];
function Posts() {
  return (
    <div className="mt-1">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          postImg={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
export default Posts;
