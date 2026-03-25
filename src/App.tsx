import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MyForm from "./components/MyForm/MyForm";
import Post from "./components/Post/Post";
import Products from "./components/Products/Products";
import RequestTracker from "./components/RequestTracker/RequestTracker";
import SideMenu from "./components/SideMenu/SideMenu";
import { List } from "./components/useContext/List";
import { sizeContext } from "./contexts/placeContext";

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

  // useContext
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 200 : 100;
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
      <Products />
      <hr />
      <RequestTracker />
      <hr />
      <label htmlFor="">
        <input
          type="checkbox"
          name=""
          id=""
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use Large Images
      </label>
      <hr />
      <sizeContext.Provider value={imageSize}>
        <List />
      </sizeContext.Provider>
    </>
  );
}

export default App;
