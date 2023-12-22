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
  const [selectedButton, setSelectedButton] = useState(null);
  
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); // Function to increment page number
  };
  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Function to decrement page number
  };
  const handleSelectButton = (buttonText) => {
    // Set the selected button when a Button2 is clicked
    setSelectedButton(buttonText);

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
              backgroundColor1="#6750A4"
              backgroundColor2="#D9D9D9"
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
              backgroundColor1="#6750A4"
              backgroundColor2="#D9D9D9"
              backgroundColor3="#D9D9D9"
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
              selected={selectedButton === 'Relative'}
              onClick={() => handleSelectButton('Relative')}
            />
            <Button2
              btn2Text="Couple"
              selected={selectedButton === 'Couple'}
              onClick={() => handleSelectButton('Couple')}
            />
            <Button2
              btn2Text="Friend"
              selected={selectedButton === 'Friend'}
              onClick={() => handleSelectButton('Friend')}
            />
            <Button2
              btn2Text="Co-worker"
              selected={selectedButton === 'Co-worker'}
              onClick={() => handleSelectButton('Co-worker')}
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
              selected={selectedButton === '10-20'}
              onClick={() => handleSelectButton('10-20')}
            />
            <Button3
              btn3Text="20-30"
              selected={selectedButton === '20-30'}
              onClick={() => handleSelectButton('20-30')}
            />
            <Button3
              btn3Text="30-40"
              selected={selectedButton === '30-40'}
              onClick={() => handleSelectButton('30-40')}
            />
            <Button3
              btn3Text="40-50"
              selected={selectedButton === '40-50'}
              onClick={() => handleSelectButton('40-50')}
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
              h2Text="¿Que edad tiene  esa " />
            <H1
              h1Text=" persona especial?" />
            <Paragraph
              pText="random paragraph" />
            <div className="flex space-x-4">
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
            </div>
            <div className="flex space-x-4">
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
              <Button4
                btn4Text="sports"
                iconImg="/sportsIcon.svg" />
            </div>
          </>

        )}
      </div>
    </>
  );
}
