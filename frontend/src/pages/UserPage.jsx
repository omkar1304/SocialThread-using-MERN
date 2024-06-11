import UserPost from "../components/UserPost";
import UserHeader from "./../components/UserHeader";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        postTitle="Let's talk about threads."
        postImg="/post1.png"
        likes={1200}
        replies={12}
      />
      <UserPost
        postTitle="Nice Tutorial."
        postImg="/post2.png"
        likes={451}
        replies={401}
      />
      <UserPost
        postTitle="Let's talk about threads."
        postImg="/post3.png"
        likes={321}
        replies={989}
      />
      <UserPost
        postTitle="This is my first threads"
        likes={212}
        replies={401}
      />
    </>
  );
};

export default UserPage;
