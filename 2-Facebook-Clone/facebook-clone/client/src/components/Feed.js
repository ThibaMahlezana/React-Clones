import StoryBox from "../components/StoryBox";
import CreatePostBox from "../components/CreatePostBox";
import Post from "../components/Post";

function Feed() {
  return (
    <div>
      <StoryBox />
      <CreatePostBox />
      <Post
        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        image="https://picsum.photos/200"
        message="This is where the message will be"
        timestamp="10pm yesterday"
        username="Thiba M"
      />
    </div>
  );
}

export default Feed;
