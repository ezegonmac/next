import Image from "next/image"
import Link from "next/link"
import Coffee from '../public/coffee.JPG'

export default function Home() {
  return (
    <div>
      <p>Chanchito feliz</p>
      {/* <Image src='/coffee.JPG' width={400} height={400}/> */}
      {/* <Image src='/coffee.JPG' layout="fill"/> */}
      <Image src={Coffee} width={400} height={400}/>
      <Link href="/chanchitos">Ir a Chanchitos</Link>
  </div>
  )
}
