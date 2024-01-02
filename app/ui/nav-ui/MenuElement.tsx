import Link from "next/link";

export type MenuItem = {
  label: string;
  tag: string;
};

export default function MenuElement({ item }:{item: MenuItem}) {
  return (
    <li>
      <Link href={`#${item.tag}`}>{ item.label }</Link>
    </li>
  )
}