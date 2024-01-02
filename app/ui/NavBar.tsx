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
      <ul className="flex flex-row mt-2 mb-2 sm:m-4 sm:rounded-full overflow-y-auto sm:overflow-hidden w-fit h-fit sm:shadow-md sm:shadow-slate-700">
        {menuItems.map((item, idx) => (
          <MenuElement key={`menu-item-${idx}`} item={item} />
        ))}
      </ul>
    </nav>
  )
}