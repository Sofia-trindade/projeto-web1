import './globals.css'
// import {lora} from '@/app/fonts'
import styles from './page.module.css'
import Image from 'next/image'
import planta1 from '../../public/planta1.png'
import iconeExtra from '../../public/iconsExtra.png'
import planta2 from '../../public/planta2.png'
import iconeproximo from '../../public/iconeproximo.svg'
import iconeproximo1 from '../../public/iconeproximo1.svg'


function Planta1 ({x, y}) {
  return (
  
      <div style={{left:x, top:y}} className={styles.planta1}>
        <Image src={planta1}/>
      </div>
   
  );
   
}

function Titulo ({x, y}){
  return(
    <h2 style={{left:x, top:y}} className={styles.titulo}>
      Best house plants varieties.
    </h2>
  );
} 

function Frame2 ({children, x, y}) {
  return(
    <div style={{left:x, top:y}} className={styles.frame2}>
      {children}
    </div>
  )
}


function Botao ({children, x, y}) {
  return (
     
      <button style={{left:x, top:y}} className={styles.botao}>{children}</button>
     
   );
 }

function TextoTipo1 ({children, x, y}) {
  return (
     
      <p style={{left:x, top:y}} className={styles.textoTipo1}>{children}</p>
     
   );
 }
 function TextoTipo2 ({children, x, y}) {
  return (
     
      <p style={{left:x, top:y}} className={styles.textoTipo2}>{children}</p>
     
   );
 }
 function TextoTipo3 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.textoTipo3}>{children}</p>

  );
 }

 function IconeExtra ({imagem, x, y}){
  return(
      
    <Image src={imagem} style={{left:x, top:y}} className={styles.iconeExtra}/>
    

  );
 }
 function Frame27 ({children, x, y}) {
  return(
    <div style={{left:x, top:y}} className={styles.frame27}>
      {children}
    </div>
    
  )
}

function IconeProximo({imagem, x, y}){
  return (

    <Image src={imagem} style={{left:x, top:y}} className={styles.iconeProximo}/>

  )
}

function Planta2 ({x, y}) {
  return (
  
      <div style={{left:x, top:y}} className={styles.planta2}>
        <Image src={planta2}/>
      </div>
   
  ); 

}
function Palavra1 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.palavra1}>{children}</p>

  );
 }


export default function Home() {
  return (
    <main>
      <Planta1 x={0} y={58.2}/> 
      <Titulo x={26.26} y={119.24}/>

      <Frame2 x={0} y={329}>
        <div>
          <p style={{left:31.91, top:37.02}} className={styles.p}>Beautiful living greenery for homes and offices</p>
        </div>

        <div>
        <p style={{left:31.91, top:156.36}} className={styles.p1}>Bloomberg</p>
        </div>

        <div>
        <p style={{left:210.6, top:156.36}} className={styles.p2}>Forbes</p>
        </div>
      <TextoTipo1 x={31.91} y={102.75}>Wer've been mentioned in the press</TextoTipo1>
      <Botao x={343.35} y={42.76}>Shop now</Botao>
      </Frame2>

      <TextoTipo1 x={31.91} y={601.18}>Each houseplant set is handled quickly and safely
      before being sent to your destination in specially
      designed insulated packaging.</TextoTipo1>

      <TextoTipo2 x={351.01} y={601.18}>Learn how ve take care of your plant
      at every stage of its journey from our
      greenhouse to your home.</TextoTipo2>

      <IconeExtra imagem={iconeExtra} x={449.93} y={733.29}/>
      <TextoTipo3 x={351.01} y={733.29}>Learn more</TextoTipo3>
      
      <Frame27 x={0} y={1037.7}>
      <TextoTipo2 x={310.16} y={195}>We put everything together</TextoTipo2>
      <IconeProximo imagem={iconeproximo} x={816.25} y={215.71}/>
      <IconeProximo imagem={iconeproximo1} x={854.54} y={215.71}/>
      <Palavra1 x={32.55} y={215} >STEP 1</Palavra1>
      </Frame27>
      <Planta2 x={31.91} y={848.16} />

      <Botao x={32.55} y={1531.67}>See all</Botao>


    </main>
  )
}
