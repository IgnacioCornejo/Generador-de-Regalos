
import Dot from "./components/dots"
import H1 from "./components/h1"
import Button from "./components/button"
import Paragraph from "./components/p"
 
 

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center">
     <Dot
     backgroundColor1= "#6750A4"
     backgroundColor2= "#D9D9D9"
     backgroundColor3= "#D9D9D9" 
     />
     <img className="w-52 h-52 mb-4" src="/imagenScreen1.svg"></img>
     <H1
     h1Text="Vas a poder elegír para quién es"/>
     <H1
     h1Text="el regalo"/>
     <Paragraph
     pText="Tene en cuanta que podes selecciónarlo"/>
     <Paragraph
     pText="las veces que quieras "/>
     <Button
     btnBgColor="#6750A4"
     btnColor="white"
     btnMarginTop="100px"
     btnText="Siguiente"/>
     <Dot
     backgroundColor1= "#6750A4"
     backgroundColor2= "#D9D9D9"
     backgroundColor3= "#D9D9D9" 
     />
     <img className="w-52 h-52 mb-4" src="/imagenScreen1.svg"></img>
     <H1
     h1Text="Vas a poder elegír para quién es"/>
     <H1
     h1Text="el regalo"/>
     <Paragraph
     pText="Tene en cuanta que podes selecciónarlo"/>
     <Paragraph
     pText="las veces que quieras "/>
     <Button
     btnBgColor="#6750A4"
     btnColor="white"
     btnMarginTop="100px"
     btnText="Siguiente"/>
     <Button
     btnBgColor="#79747E"
     btnColor="6750A4"
     btnMarginTop="10px"
     btnText="Atras"/>

     </div>
    </>
  )
}
