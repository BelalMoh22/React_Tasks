import "./App.css";
import Header from "./components/header/Header";
import Post from "./components/Post/Post";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post & Side Menu Container  */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Post Container */}
          <div style={{ width: "70%" }}>
            <Post title = "This is first title" description = "This is first description"/>
            <Post title = "This is second title" description = "This is second description"/>
            <Post title= "This is third title" description = "This is third description"/>
          </div>

          {/* Side Menu Container */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
