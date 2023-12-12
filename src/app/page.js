import './globals.css'
// import {lora} from '@/app/fonts'
import styles from './page.module.css'
import Image from 'next/image'
import planta1 from '../../public/planta1.png'
// import botao from '../../public/Buttons.png'
// import logos from '../../public/Forbes.png'



function Planta1 ({x, y}) {
  return (
    <div style={{left:x, top:y}} className={styles.planta1}>
      <Image src={planta1}/>
    </div>
  );
}

// function Titulo ({x, y}){
//   return(
//     <h2 style={{left:x, top:y}} className={styles.titulo}>
//       Best house plants varieties.
//     </h2>
//   );
// } 

// function Botao ({x, y}) {
//   return (
//      <div style={{left:x, top:y}} className={styles.botao}>
//       <Image src={botão}/>
//      </div>
//    );
//  }
//  function Logos({x, y}){
//   return(
//     <div style={{left: x , top: y}} className={styles.logos}>
//       <Imagem src={Forbes}/>
//       <Image src={Bloomberg}/>
//     </div>
//   )

//  }
//  function SubTitulo ({x, y}) {
//   return (
//      <h4 style={{left:x, top:y}} className={styles.subTitulo}> 
//       Beautiful living greenery for
//       homes and offices
//      </h4>
//    );
//  }

//  function Frase ({x, y}) {
//    return (
//      <p style={{left:x, top:y}} className={styles.frase}> 
//        Wer've been mentioned in the press
//      </p>
//    );
//  }

export default function Home() {
  return (
    <main>
      <Planta1 x={0} y={58.2}/> 
      {/* <Titulo x={26.26} y={119.24}/>
       <Botao x={29} y={312.29}/>
      <SubTitulo x={31.91} y={37.02}/>
      <Frase x={35.49} y={479.2}/> 
      <Logo x={31.91} y={156.36}/> */}
    </main>
  )
}
