import Image from 'next/image'
import Title from '@/components/basic/Title'
import Subtitle from '@/components/basic/Subtitle'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8">
      <Title>Juan Camilo Sánchez Urrego - @JuanCSUCoder</Title>
      <Subtitle>Contact Information</Subtitle>
      <ul>
        <li>
          <strong>Phone: </strong>
          <a href="tel:+573186506135">+57 318 650 6135</a>
        </li>
        <li>
          <strong>Email: </strong>
          <a target="_blank" href="mailto:jcsu2019369@gmail.com">
            jcsu2019369@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn: </strong>
          <a target="_blank" href="https://www.linkedin.com/in/juancsucoder/">
            /in/juancsucoder
          </a>
        </li>
      </ul>
      <Subtitle>Profile</Subtitle>
      <Subtitle>Skills</Subtitle>
      <Subtitle>Projects & Experience</Subtitle>
      <Subtitle>Education</Subtitle>
    </main>
  );
}
