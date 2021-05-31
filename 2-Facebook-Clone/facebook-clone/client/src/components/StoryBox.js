import Story from "../components/Story";
function StoryBox() {
  return (
    <div className="storyBox">
      <Story
        image="https://picsum.photos/id/237/200/300"
        title="Title"
        profileSrc="https://picsum.photos/id/238/200/300"
      />
      <Story
        image="https://picsum.photos/id/239/200/300"
        title="Title"
        profileSrc="https://picsum.photos/id/240/200/300"
      />
      <Story
        image="https://picsum.photos/id/251/200/300"
        title="Title"
        profileSrc="https://picsum.photos/id/250/200/300"
      />
      <Story
        image="https://picsum.photos/id/231/200/300"
        title="Title"
        profileSrc="https://picsum.photos/id/232/200/300"
      />
      <Story
        image="https://picsum.photos/id/233/200/300"
        title="Title"
        profileSrc="https://picsum.photos/id/234/200/300"
      />
    </div>
  );
}

export default StoryBox;
