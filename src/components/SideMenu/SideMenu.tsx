import Button from "../Button/Button";

export default function SideMenu() {
  const categories = [
    {
      id: 1,
      title: "اخر المقالات",
      child: (
        <div>
          <span>$$$</span>
        </div>
      ),
    },
    {
      id: 2,
      title: "Button2",
      child: (
        <div>
          <span>###</span>
        </div>
      ),
    },
  ];

  const btnCategories = categories.map((category) => {
    return (
      <Button key={category.id} title={category.title}>
        {category.child}
      </Button>
    );
  });

  return (
    <div style={{ margin: "25px", border: "solid teal 5px" }}>
      {btnCategories}
    </div>
  );
}
