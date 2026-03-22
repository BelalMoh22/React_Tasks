import "./App.css";
import Header from "./components/header/Header";
import MyForm from "./components/MyForm/MyForm";
import Post from "./components/Post/Post";
import Products from "./components/Products/Poducts";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  const postDetails = [
    {
      id: 1,
      title: "This is first title",
      description: "This is first description",
    },
    {
      id: 2,
      title: "This is second title",
      description: "This is second description",
    },
    {
      id: 3,
      title: "This is third title",
      description: "This is third description",
    },
  ];

  const postsList = postDetails.map((post) => {
    return (
      <Post key={post.id} title={post.title} description={post.description} />
    );
  });
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post & Side Menu Container  */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Post Container */}
          <div style={{ width: "70%" }}>{postsList}</div>

          {/* Side Menu Container */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
      <hr />
      <MyForm />
      <hr />
      <Products/>
    </>
  );
}

export default App;
