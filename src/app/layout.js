import './globals.css'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from  '../../public/logo.png'
import busca from '../../public/iconsBusca.png'
import login from '../../public/iconsLogin.png'
import carrinho from '../../public/iconsCarrinho.png'

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

function Menu1 ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.menu1}>Plants</p>
  );
}

function Menu2 ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.menu2}>For offices</p>
  );
}

function Menu3 ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.menu3}>Plants care</p>
  );
}

function Menu4 ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.menu4}>About</p>
  );
}

function IconeBusca ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.iconeBusca}>
      <Image src={busca}/>
    </p>
  );
}

function IconeLogin ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.iconeLogin}>
      <Image src={login}/>
    </p>
  );
}

function IconeCarrinho ({x, y}) {
  return(
    <p style={{left:x, top:y}} className={styles.iconeCarrinho}>
      <Image src={carrinho}/>
    </p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={50} y={20.08}/>
          <Menu1 x={377.57} y={28.29}/>
          <Menu2 x={440.74} y={28.29}/>
          <Menu3 x={525.9} y={28.29}/>
          <Menu4 x={613.91} y={28.29}/>
          <IconeBusca x={888.51} y={26.26}/>
          <IconeLogin x={929.03} y={26.26}/>
          <IconeCarrinho x={969.48} y={26.26}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
