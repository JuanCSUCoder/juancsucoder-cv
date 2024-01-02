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
    <nav className="flex justify-center items-center">
      <ul className="flex flex-row m-4 rounded-full overflow-hidden w-fit h-fit shadow-md shadow-slate-700">
        {menuItems.map((item, idx) => (
          <MenuElement key={`menu-item-${idx}`} item={item} />
        ))}
      </ul>
    </nav>
  )
}