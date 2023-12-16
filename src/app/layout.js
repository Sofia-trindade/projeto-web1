import './globals.css'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from  '../../public/logo.png'
import busca from '../../public/iconsBusca.png'
import login from '../../public/iconsLogin.png'
import carrinho from '../../public/iconsCarrinho.png'
import face from '../../public/facebook.png'
import twiter from '../../public/twiter.png'
import instagram from '../../public/instagram.png'




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

function ItemMenu ({children, x, y}){
  return(
    <p style={{left:x, top:y}} className={styles.itemMenu}>{children}</p>
  );
}

function Icones ({imagem, x, y}){
  return(
    <Image src={imagem} style={{left:x, top:y}} className={styles.icones}/>

  );
}

function Footer ({children, x, y}){
  return(
    <div style={{left:x, top:y}} className={styles.footer}>
      {children}
    </div>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={50} y={20.08}/>
          
          <ItemMenu x={339.52} y={25.53}>Plants</ItemMenu>
          <ItemMenu x={396.32} y={25.53}>For offices</ItemMenu>
          <ItemMenu x={472.9} y={25.53}>Plants care</ItemMenu>
          <ItemMenu x={552.04} y={25.53}>About</ItemMenu>

          <Icones imagem={busca} x={799.02} y={23.61}/>
          <Icones imagem={login} x={835.4} y={23.61}/>
          <Icones imagem={carrinho} x={871.77} y={23.61}/>
        
        </header>
        <main>
          {children}
        </main>

        <footer>
          
          <Footer x={0} y={3545.17}>
            <Logo x={38.29} y={34.46}/>

            <div>
            <ItemMenu x={350.37} y={47.23}>Help</ItemMenu>
            <ItemMenu x={409.08} y={47.23}>Contact Us</ItemMenu>
            <ItemMenu x={496.52} y={47.23}>Privacy & Terms</ItemMenu>
            </div>
            

            <div>
              
            <Icones imagem={face} x={772.22} y={47.23} className={styles.icone1}/>
            <Icones imagem={twiter} x={818.17} y={47.23} className={styles.icone2}/>
            <Icones imagem={instagram} x={871.77} y={47.23} className={styles.icone2}/>
            </div>

          </Footer>
        </footer>
      </body>
    </html>
  )
}
