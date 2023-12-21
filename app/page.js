'use client';

import { useState } from 'react';
import Dot from './components/dots';
import H1 from './components/h1';
import Button from './components/button';
import Paragraph from './components/p';
import Button2 from './components/button2';
import H2 from './components/h2';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1); // Function to increment page number
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Function to decrement page number
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
          h2Text="¿Que relacion tenes con esa "/>
          <H1
          h1Text=" persona especial?"/>
          <Paragraph
          pText="random paragraph"/>
          <Button2
          btn2Text="Relative"/>
          <Button2
          btn2Text="Couple"/>
          <Button2
          btn2Text="Friend"/>
          <Button2
          btn2Text="Co-worker"/>
          <Button
              btnBgColor="#6750A4"
              btnColor="white"
              btnMarginTop="100px"
              btnText="Siguiente"
              onClick={handleNextPage}/>
              <Button
              btnBgColor="#79747E"
              btnColor="6750A4"
              btnMarginTop="10px"
              btnText="Atras"
              onClick={handlePrevPage}
            />
          </>
          
        )}
      </div>
    </>
  );
}
