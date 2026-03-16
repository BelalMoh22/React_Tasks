import Button from "../Button/Button";

export default function SideMenu() {
  return (
    <div style={{ margin: "25px", border: "solid teal 5px" }}>
      <Button/>

      <Button>
        <div>
          <span>$$$</span>
          <p>this is content</p>
        </div>
      </Button>

      <Button>
      </Button>
    </div>
  );
}
