import "./Button.css";
export default function Button(props) {
  const children = props.children;
  return <button className="btn-sideMenu">{children ?? "No Content"}</button>;
}
