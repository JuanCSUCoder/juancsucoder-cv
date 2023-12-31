import Link from "next/link";

export type MenuItem = {
  label: string;
  tag: string;
};

export default function MenuElement({ item }:{item: MenuItem}) {
  return (
    <li>
      <Link href={`#${item.tag}`} className="block p-1 sm:p-3 sm:pb-2 hover:bg-slate-300 box-border text-center">{ item.label }</Link>
    </li>
  )
}