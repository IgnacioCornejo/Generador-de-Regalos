

const gifts = [
    { name: "Pelota", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 0, max: 5 }, gustos: ["Juegos"] },
    { name: "Bate de Beisbol", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 6, max: 12 }, gustos: ["Juegos"] },
    { name: "prueba 1", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 19, max: 19 }, gustos: ["Juegos"] },
    { name: "prueba 2", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 6, max: 12 }, gustos: ["Musica", "Tecnologia"] },
    { name: "Oso de peluche", relacion: ["Pareja"], edad: { min: 13, max: 18 }, gustos: ["Juegos"] },
    { name: "Bloques de juguete", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 0, max: 5 }, gustos: ["Juegos"] },
    { name: "Bicicleta", relacion: ["Familiar"], edad: { min: 6, max: 12 }, gustos: ["Juegos"] },
    { name: "Guitarra", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 6, max: 12 }, gustos: ["Musica"] },
    { name: "Copa de vino", relacion: ["Familiar", "Amigo", "Compañero Laboral"], edad: { min: 19, max: 19 }, gustos: ["Cocina"] },
    { name: "Taza", relacion: ["Familiar", "Pareja", "Amigo", "Compañero Laboral"], edad: { min: 12, max: 19 }, gustos: ["Cocina"] },
    { name: "Tabla de madera para cortar", relacion: ["Familiar", "Amigo", "Compañero Laboral"], edad: { min: 12, max: 19 }, gustos: ["Cocina"] },
    { name: "Portaretrato digital", relacion: ["Familiar", "Amigo", "Compañero Laboral"], edad: { min: 19, max: 19 }, gustos: ["Tecnologia", "Arte"] },
    { name: "Auriculares", relacion: ["Familiar", "Amigo", "Compañero Laboral"], edad: { min: 19, max: 19 }, gustos: ["Tecnologia", "Musica"] },
];
export default gifts;

localStorage.setItem('giftsData', JSON.stringify(gifts));


