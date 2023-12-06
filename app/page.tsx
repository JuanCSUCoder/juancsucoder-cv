import Image from 'next/image'
import Title from '@/components/basic/Title'
import Subtitle from '@/components/basic/Subtitle'
import Link from 'next/link'
import TitledElement from './components/custom/TitledElement';

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex-row">
        <Image width={400} height={400} src='https://placehold.co/400' alt='Texto explicativo' />
        <Title>Juan Camilo Sánchez Urrego - @JuanCSUCoder</Title>
      </div>
      <ul>
        <TitledElement title="Phone" href="tel:+573186506135">
          +57 318 650 6135
        </TitledElement>
        <TitledElement title="Email" href="mailto:jcsu2019369@gmail.com">
          jcsu2019369@gmail.com
        </TitledElement>
        <TitledElement
          title="LinkedIn"
          href="https://www.linkedin.com/in/juancsucoder/"
        >
          /in/juancsucoder
        </TitledElement>
        <TitledElement title="Telegram" href="https://t.me/juancsucoder">
          @juancsucoder
        </TitledElement>
        <TitledElement
          title="Instagram"
          href="https://www.instagram.com/juancsucoder/"
        >
          @juancsucoder
        </TitledElement>
      </ul>
      <Subtitle>Profile</Subtitle>
      <Subtitle>Skills</Subtitle>
      <Subtitle>Projects & Experience</Subtitle>
      <Subtitle>Education</Subtitle>
    </main>
  );
}
