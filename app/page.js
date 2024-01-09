'use client';

import { useState, useEffect } from 'react';
import Dot from './components/dots';
import H1 from './components/h1';
import Button from './components/button';
import Paragraph from './components/p';
import Button2 from './components/button2';
import H2 from './components/h2';
import Button3 from './components/button3';
import Button4 from './components/button4';
import gifts from './giftsDatabase'



export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const [selectedButton2, setSelectedButton2] = useState('');
  const [selectedButton3, setSelectedButton3] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); // Function to increment page number
  };
  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Function to decrement page number
  };




  const handleSelectButton2 = (buttonText) => {
    setSelectedButton2(buttonText);
    setUserSelections(prevSelections => ({
      ...prevSelections,
      relacion: buttonText // Update the 'relacion' property in userSelections
    }));
  };


  const handleSelectButton3 = (buttonText) => {
    setSelectedButton3(buttonText);
    setUserSelections(prevSelections => ({
      ...prevSelections,
      edad: buttonText // Update the 'edad' property in userSelections
    }));
  };
  const handleSelectButton4 = (buttonText) => {
    const isSelected = selectedOptions.includes(buttonText);

    if (isSelected) {
      setSelectedOptions(prevOptions =>
        prevOptions.filter(option => option !== buttonText)
      );
      setUserSelections(prevSelections => ({
        ...prevSelections,
        gustos: prevSelections.gustos.filter(option => option !== buttonText) // Remove deselected option
      }));
    } else {
      setSelectedOptions(prevOptions => [...prevOptions, buttonText]);
      setUserSelections(prevSelections => ({
        ...prevSelections,
        gustos: [...prevSelections.gustos, buttonText] // Add selected option
      }));
    }
  };

  const [userSelections, setUserSelections] = useState({
    relacion: '',
    edad: '',
    gustos: ''
  });

  console.log(gifts);
  console.log('User Selections:', userSelections);



  const [storedGifts, setStoredGifts] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedGiftsString = localStorage.getItem('giftsData');
      const parsedGifts = storedGiftsString ? JSON.parse(storedGiftsString) : [];
      setStoredGifts(parsedGifts);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount on the client side

  const filteredGifts = storedGifts.filter((gift) => {
    const { relacion, edad, gustos } = userSelections;

    const isRelacionMatch = gift.relacion.includes(relacion);
    const isEdadMatch = gift.edad.min <= parseInt(edad) && gift.edad.max >= parseInt(edad);

    // Check if 'gustos' is an array before using 'some()'
    const areGustosMatch = Array.isArray(gift.gustos) && Array.isArray(gustos) &&
      gustos.some((gusto) => Array.isArray(gift.gustos) && gift.gustos.includes(gusto));

    return isRelacionMatch && isEdadMatch && areGustosMatch;
  });


  return (
    <>
      <div className="flex flex-col items-center">
        {currentPage === 1 && (
          <>
            <Dot
              backgroundColor1="#6750A4"
              backgroundColor2="#D9D9D9"
              backgroundColor3="#D9D9D9"
            />
            <img className="w-52 h-52 mb-4" src="/imagenScreen1.svg" alt="Screen 1"></img>
            <H1 h1Text="Vas a poder elegír para quién es" />
            <H1 h1Text="el regalo" />
            <Paragraph pText="Tene en cuenta que podes seleccionarlo" />
            <Paragraph pText="las veces que quieras" />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage}
            />
          </>
        )}

        {currentPage === 2 && (
          <>
            <Dot
              backgroundColor1="#D9D9D9"
              backgroundColor2="#6750A4"
              backgroundColor3="#D9D9D9"
            />
            <img className="w-52 h-52 mb-4" src="/imagenScreen2.svg" alt="Screen 2"></img>
            <H1 h1Text="Vas a poder elegír para quién es" />
            <H1 h1Text="el regalo" />
            <Paragraph pText="Tene en cuenta que podes seleccionarlo" />
            <Paragraph pText="las veces que quieras" />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage}
            />
            <Button
              btnBgColor="#79747E"
              btnColor="black"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />
          </>
        )}
        {currentPage === 3 && (
          <>
            <Dot
              backgroundColor1="#D9D9D9"
              backgroundColor2="#D9D9D9"
              backgroundColor3="#6750A4"
            />
            <img className="w-52 h-52 mb-4" src="/imagenScreen3.svg" alt="Screen 2"></img>
            <H1 h1Text="Vas a poder elegír para quién es" />
            <H1 h1Text="el regalo" />
            <Paragraph pText="Tene en cuenta que podes seleccionarlo" />
            <Paragraph pText="las veces que quieras" />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage}
            />
            <Button
              btnBgColor="#79747E"
              btnColor="black"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />


          </>

        )}
        {currentPage === 4 && (
          <>
            <H2
              h2Text="¿Que relacion tenes con esa " />
            <H1
              h1Text=" persona especial?" />
            <Paragraph
              pText="random paragraph" />
            <Button2
              btn2Text="Familiar"
              selected={selectedButton2 === 'Familiar'}
              onClick={() => handleSelectButton2('Familiar')}
            />
            <Button2
              btn2Text="Pareja"
              selected={selectedButton2 === 'Pareja'}
              onClick={() => handleSelectButton2('Pareja')}
            />
            <Button2
              btn2Text="Amigo"
              selected={selectedButton2 === 'Amigo'}
              onClick={() => handleSelectButton2('Amigo')}
            />
            <Button2
              btn2Text="Compañero Laboral"
              selected={selectedButton2 === 'Compañero Laboral'}
              onClick={() => handleSelectButton2('Compañero Laboral')}
            />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage} />
            <Button
              btnBgColor="#79747E"
              btnColor="6750A4"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />
          </>

        )}
        {currentPage === 5 && (
          <>
            <H2
              h2Text="¿Que edad tiene  esa " />
            <H1
              h1Text=" persona especial?" />
            <Paragraph
              pText="random paragraph" />
            <Button3
              btn3Text="0-5"
              selected={selectedButton3 === '0-5'}
              onClick={() => handleSelectButton3('0-5')}
            />
            <Button3
              btn3Text="6-12"
              selected={selectedButton3 === '6-12'}
              onClick={() => handleSelectButton3('6-12')}
            />
            <Button3
              btn3Text="13-18"
              selected={selectedButton3 === '13-18'}
              onClick={() => handleSelectButton3('13-18')}
            />
            <Button3
              btn3Text="19+"
              selected={selectedButton3 === '19+'}
              onClick={() => handleSelectButton3('19+')}
            />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage} />
            <Button
              btnBgColor="#79747E"
              btnColor="6750A4"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />
          </>
        )}
        {currentPage === 6 && (
          <>
            <H2
              h2Text="¿Que le gusta a esa " />
            <H1
              h1Text=" persona especial?" />
            <Paragraph
              pText="random paragraph" />
            <div className="flex space-x-4">
              <Button4
                btn4Text="Musica"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Musica')}
                onClick={() => handleSelectButton4('Musica')} />
              <Button4
                btn4Text="Tecnologia"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Tecnologia')}
                onClick={() => handleSelectButton4('Tecnologia')} />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="Arte"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Arte')}
                onClick={() => handleSelectButton4('Arte')}
              />
              <Button4
                btn4Text="Cocina"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Cocina')}
                onClick={() => handleSelectButton4('Cocina')} />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="Libros"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Libros')}
                onClick={() => handleSelectButton4('Libros')} />
              <Button4
                btn4Text="Juegos"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('Juegos')}
                onClick={() => handleSelectButton4('Juegos')} />
            </div>
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage} />
            <Button
              btnBgColor="#79747E"
              btnColor="6750A4"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />
          </>

        )}
        {currentPage === 7 && (
          <>
            <img className="w-52 h-52 mb-4 mt-10" src="/feedbackImg.svg" alt="Screen 2"></img>
            <H2 h2Text="Felicitaciones completaste los" />
            <H1 h1Text="pasos para que elijamos tu regalo" />
            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage} />
            <Button
              btnBgColor="#79747E"
              btnColor="6750A4"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />

          </>
        )}
        {currentPage === 8 && (
          <>
            <H2
              h2Text="felicitaciones aca esta tu regalo" />
            <Paragraph
              pText="Te dejamos una lista de posibles regalos para la" />
            <Paragraph
              pText="persona seleccionada. ¡Que lo disfrutes!" />

            {
              filteredGifts.map((gift, index) => (
                <div className='mt-5' style={{ color: "black", textAlign: "center" }} key={gift.name}>
                  <div>{gift.name}</div>
                  {index !== filteredGifts.length - 1 && <hr className="mt-3" style={{ borderWidth: "1px", width: '320px', }} />} {/* Add <hr /> if not the last gift */}
                  {index === filteredGifts.length - 1 && <hr className="mt-3" style={{ borderWidth: "1px", width: '320px', }} />} {/* Add <hr /> for the last gift */}
                </div>
              ))
            }

            <H2
              h2Text="Algunos lugares donde comprar estos regalos:" />

            <div className="flex space-x-8 mt-16 mb-5">
              <a href="https://www.amazon.com/ref=nav_logo" target="_blank"><img className="w-20 h-10 mb-4" src="/amazonLogo.svg" alt="Screen 1"></img></a>
              <a href="https://best.aliexpress.com/?spm=a2g0o.best.logo.1.3e1322aeaSAZDo&gatewayAdapt=glo2esp&browser_redirect=true" target="_blank"><img className="w-20 h-10 mb-4" src="/aliexpressLogo.svg" alt="Screen 1"></img></a>

            </div>
            <div className="flex space-x-8">
              <a href="https://www.mercadolibre.com.ar/" target="_blank"><img className="w-20 h-15 mb-4" src="/mercadolibreLogo.svg" alt="Screen 1"></img></a>
              <a href="https://www.ebay.com/" target="_blank"><img className="w-20 h-10 mb-4" src="/ebayLogo.svg" alt="Screen 1"></img></a>

            </div>

            <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Volver al inicio"
              onClick={() => setCurrentPage(4)}
            />

          </>



        )}

      </div>
    </>
  );
}
