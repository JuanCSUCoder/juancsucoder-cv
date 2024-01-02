import MenuElement, { MenuItem } from "./nav-ui/MenuElement";


const menuItems: MenuItem[] = [
  {
    label: "Profile",
    tag: "profile",
  },
  {
    label: "Languages",
    tag: "langs",
  },
  {
    label: "Stacks",
    tag: "stacks",
  },
  {
    label: "Projects",
    tag: "projects"
  },
  {
    label: "Education",
    tag: "edu"
  },
];

export default function NavBar() {
  return (
    <nav>
      <ul>
        {menuItems.map((item, idx) => (
          <MenuElement key={`menu-item-${idx}`} item={item} />
        ))}
      </ul>
    </nav>
  )
}