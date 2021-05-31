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
        image="https://picsum.photos/550"
        message="Check out my lovely cute puppy, what do you thin guys"
        timestamp="12:01 am yesterday"
        username="Thiba"
      />
      <Post
        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        message="I have an idea guys ..."
        timestamp="12:01 am yesterday"
        username="Thiba"
      />
    </div>
  );
}

export default Feed;
