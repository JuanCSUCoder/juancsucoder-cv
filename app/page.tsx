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
