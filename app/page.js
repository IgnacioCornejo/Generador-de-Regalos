'use client';

import { useState } from 'react';
import Dot from './components/dots';
import H1 from './components/h1';
import Button from './components/button';
import Paragraph from './components/p';
import Button2 from './components/button2';
import H2 from './components/h2';
import Button3 from './components/button3';
import Button4 from './components/button4';


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const [selectedButton2, setSelectedButton2] = useState(null);
  const [selectedButton3, setSelectedButton3] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); // Function to increment page number
  };
  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Function to decrement page number
  };
  const handleSelectButton2 = (buttonText) => {
    setSelectedButton2(buttonText);
  };


  const handleSelectButton3 = (buttonText) => {
    setSelectedButton3(buttonText);
  };
  const handleSelectButton4 = (buttonText) => {
    const isSelected = selectedOptions.includes(buttonText);

    if (isSelected) {
      // If the button is already selected, remove it from the options
      setSelectedOptions(prevOptions =>
        prevOptions.filter(option => option !== buttonText)
      );
    } else {
      // If the button is not selected, add it to the options
      setSelectedOptions(prevOptions => [...prevOptions, buttonText]);
    }
  };




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
              btnColor="6750A4"
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
              btnColor="6750A4"
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
              btn2Text="Relative"
              selected={selectedButton2 === 'Relative'}
              onClick={() => handleSelectButton2('Relative')}
            />
            <Button2
              btn2Text="Couple"
              selected={selectedButton2 === 'Couple'}
              onClick={() => handleSelectButton2('Couple')}
            />
            <Button2
              btn2Text="Friend"
              selected={selectedButton2 === 'Friend'}
              onClick={() => handleSelectButton2('Friend')}
            />
            <Button2
              btn2Text="Co-worker"
              selected={selectedButton2 === 'Co-worker'}
              onClick={() => handleSelectButton2('Co-worker')}
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
              btn3Text="10-20"
              selected={selectedButton3 === '10-20'}
              onClick={() => handleSelectButton3('10-20')}
            />
            <Button3
              btn3Text="20-30"
              selected={selectedButton3 === '20-30'}
              onClick={() => handleSelectButton3('20-30')}
            />
            <Button3
              btn3Text="30-40"
              selected={selectedButton3 === '30-40'}
              onClick={() => handleSelectButton3('30-40')}
            />
            <Button3
              btn3Text="40-50"
              selected={selectedButton3 === '40-50'}
              onClick={() => handleSelectButton3('40-50')}
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
                btn4Text="sports"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('sports')}
                onClick={() => handleSelectButton4('sports')} />
              <Button4
                btn4Text="technology"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('technology')}
                onClick={() => handleSelectButton4('technology')} />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="art"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('art')}
                onClick={() => handleSelectButton4('art')}
              />
              <Button4
                btn4Text="food"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('food')}
                onClick={() => handleSelectButton4('food')} />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="books"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('books')}
                onClick={() => handleSelectButton4('books')} />
              <Button4
                btn4Text="games"
                iconImg="/sportsIcon.svg"
                selected={selectedOptions.includes('games')}
                onClick={() => handleSelectButton4('games')} />
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
            <img className="w-52 h-52 mb-4" src="/feedbackImg.svg" alt="Screen 2"></img>
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
            <H1
              h1Text="felicitaciones aca esta tu regalo" />
              <Paragraph
              pText="Te dejamos una lista de posibles regalos para la"/>
              <Paragraph
          pText="persona seleccionada. ¡Que lo disfrutes!"/>
          </>
          
      
          
        )}

      </div>
    </>
  );
}
