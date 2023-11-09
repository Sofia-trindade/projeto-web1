import './globals.css'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from  '../../public/logo.png'

export const metadata ={
  title: 'Freebie | Planty |  Plants E-commerce Landing Page Design',
}

function Logo ({x, y}){
  return(
    <div style={{left:x, top:y}} className={styles.logo}>
      <Image src={logo}/>
    </div>
  )
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={50} y={28.29}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
