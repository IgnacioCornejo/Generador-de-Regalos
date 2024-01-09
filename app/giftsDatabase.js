

  const gifts = [
    { name: "Pelota", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 0, max: 5 }, gustos: ["Juegos"] },
    { name: "Bate de Beisbol", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 6, max: 12 }, gustos: ["Juegos"] },
    { name: "prueba 1", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 19, max: 120 }, gustos: ["Juegos"] },
    { name: "prueba 2", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 6, max: 12 }, gustos: ["Musica","Tecnologia"] }
  ];
  export default gifts;
  
  localStorage.setItem('giftsData', JSON.stringify(gifts));


