import './globals.css'
// import {lora} from '@/app/fonts'
import styles from './page.module.css'
import Image from 'next/image'
import planta1 from '../../public/planta1.png'
import iconeExtra from '../../public/iconsExtra.png'
import planta2 from '../../public/planta2.png'
import iconeproximo from '../../public/iconeproximo.svg'
import iconeproximo1 from '../../public/iconeproximo1.svg'
import lista1 from '../../public/lista1.png'
import lista2 from '../../public/lista2.png'
import lista3 from '../../public/lista3.png'
import lista4 from '../../public/lista4.png'
import avaliacao from '../../public/avaliacao.png'
import frame34 from '../../public/frame34.png'
import frame35 from '../../public/frame35.png'
import frame36 from '../../public/frame36.png'
import line13 from '../../public/line13.png'


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

 function Lista ({imagem, x, y}) {
  return(
    <Image src={imagem} style={{left:x, top:y}} className={styles.lista}/>
  );
 }

 function IconeProximo1({imagem, x, y}){
  return (

    <Image src={imagem} style={{left:x, top:y}} className={styles.iconeProximo1}/>

  )
}

function Avaliacao({imagem, x, y}){
  return (

    <Image src={imagem} style={{left:x, top:y}} className={styles.avaliacao}/>

  )
}

function Palavra2 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.palavra2}>{children}</p>

  );
 }

function Palavra3 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.palavra3}>{children}</p>

  );
 }

 function Palavra4 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.palavra4}>{children}</p>

  );
 }

 function Imagens ({imagem, x, y}){
  return(
    <Image src={imagem} style={{left:x, top:y}} className={styles.imagens}/>

  );

 }

 function Frame36 ({imagem, x, y}){
  return(
    <Image src={imagem} style={{left:x, top:y}} className={styles.frame36}/>

  );

 }

 function TextoTipo4 ({children, x, y}) {
  return (
    <p style={{left:x, top:y}} className={styles.textoTipo4}>{children}</p>

  );
 }

 function Line13({imagem, x, y}){
  return (

    <Image src={imagem} style={{left:x, top:y}} className={styles.line13}/>

  )
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
      
      <Lista imagem={lista1} x={31.91} y={1590.38}/>
      <Palavra1 x={31.91} y={1970.11} >Fiddle-leaf fig</Palavra1>
      <Palavra1 x={225.28} y={1970.11} >$110.99</Palavra1>
      <Lista imagem={lista2} x={294.85} y={1590.38}/>
      <Palavra1 x={294.85} y={1970.11} >Aloe vera</Palavra1>
      <Palavra1 x={488.22} y={1970.11} >$110.99</Palavra1>
      <Lista imagem={lista3} x={557.78} y={1590.38}/>
      <Palavra1 x={557.78} y={1970.11} >Strelitzia nicolai</Palavra1>
      <Palavra1 x={751.15} y={1970.11} >$110.99</Palavra1>
      <Lista imagem={lista4} x={820.72} y={1590.38}/>
      <Palavra1 x={820.72} y={1970.11} >Ficus microcarpa</Palavra1>
      <Palavra1 x={225.28} y={1970.11} >$110.99</Palavra1>

      <Palavra1 x={32.55} y={2100.94} >REVIEWS</Palavra1>
      <TextoTipo1 x={31.91} y={2132.85}>Shop with confidance by reading customer reviews given by individuals who have used Bioomey. Excelient quality and streamlined service are both offered here.</TextoTipo1>
      <Avaliacao imagem={avaliacao} x={32.55} y={2196.67}/>
      <Palavra2  x={138.49} y={2200.49}>5/5</Palavra2>
      <Palavra3  x={31.91} y={2222.19}>2.479 reviews</Palavra3>

      <TextoTipo2 x={315.91} y={2090.09}>We adore all our friends atBloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!</TextoTipo2>
      <IconeProximo1 imagem={iconeproximo} x={837.31} y={2090.09}/>
      <IconeProximo1 imagem={iconeproximo1} x={863.66} y={2090.09}/>

      <Palavra4  x={315.91} y={2314.09}>Pamela S.</Palavra4>
      <TextoTipo1 x={315.91} y={2340.9}>Lake Forest, CA</TextoTipo1>
      <Imagens imagem={frame35} x={31.91} y={2388.12}/>
      <Imagens imagem={frame34} x={389.3} y={2388.12}/>
      
      <Frame36 imagem={frame36} x={32.55} y={2914}/>

      <TextoTipo4 x={31.91} y={3422}>Stay update with special offers, plant-parenting tips, and more.</TextoTipo4>

      <TextoTipo1 x={562.57} y={3467.31}>Your email</TextoTipo1>
      <Botao x={765.44} y={3461.84}>Subscribe</Botao>
   
      <Line13 imagem={line13} x={557.14} y={3491.56}/>


      </main>
  )
}
