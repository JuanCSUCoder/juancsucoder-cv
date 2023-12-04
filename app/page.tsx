import Image from 'next/image'
import Title from '@/components/basic/Title'
import Subtitle from '@/components/basic/Subtitle'

export default function Home() {
  return (
    <main className='p-8'>
      <Title>
        Juan Camilo Sánchez Urrego - @JuanCSUCoder
      </Title>
      <Subtitle>
        Contact Information
      </Subtitle>
      <ul>
        <li>
          <strong>Phone: </strong>
          +57 318 650 6135
        </li>
        <li>
          <strong>Email: </strong>
          <a href="mailto:jcsu2019369@gmail.com">jcsu2019369@gmail.com</a>
        </li>
      </ul>
      <Subtitle>
        Profile
      </Subtitle>
      <Subtitle>
        Skills
      </Subtitle>
      <Subtitle>
        Projects & Experience
      </Subtitle>
      <Subtitle>
        Education
      </Subtitle>
    </main>
  )
}
