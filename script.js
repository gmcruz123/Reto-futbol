var objEquipos = [];
class Equipo {
    constructor(nombre, img, Director, miembros, resenia, categoria, puntos, liga,ganados,empatados,perdidos) {
        this.nombre = nombre;
        this.img = img;
        this.Director = Director;
        this.miembros = miembros;
        this.resenia = resenia;
        this.categoria = categoria;
        this.puntos = puntos;
        this.liga = liga;
        this.ganados=ganados;
        this.empatados= empatados;
        this.perdidos=perdidos;

    }
}

var millonarios = new Equipo("Millonarios",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzDsshv3XTuv839D1Eq2R5nTCuIPaPkpQ_AbC3wmfuOBnU1oX",
    "Miguel Ángel Russo",
    [" Matias De los Santos", " Janeiler Rivas", "Breiner Paz", "Andrés Cadavid ", "Felipe Román", "Omar Bertel"],
    "Muyyy buen equipo",
    "Primera C",
    10,
    "Aguila",
    12,
    6,
    2
);

var tolima = new Equipo("Tolima",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfQhbS9MuaBuvIy3Ub5T6XvvTn04xIBuqO3w7xeuCJkOj7eKjXg",
    "Alberto Gamero",
    [" Carlos Rentería", " Rafael Robayo", "Rafael Carrascal", "Luis González ", "Yohandry Orozco", "Carlos Robles"],
    "Muyyy buen equipo",
    "Primera C",
    8,
    "Postobon",
    10,
    5,
    1)

var pasto = new Equipo("Pasto",
    "https://www.elespectador.com/sites/default/files/pas.jpg",
    "Hernán Alberto Lisi",
    [" Carlos Villagra", "Carlos Rodas", "Harnol Palacios", "Juan Fernando Rebolledo ", "Walden Vargas", "Omar Bertel"],
    "Muyyy buen equipo",
    "Primera B",
    7,
    "Postobon",
    8,
    4,
    6)
var envigado = new Equipo("Envigado",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnhlQkPaeyfRU7LPKT4GqIDaA6j4oNEwYEySpIyF1RHQqzKSTg",
    "Octavio Zambrano",
    [" William Parra", " Andrés Ricaurte", "Javier Calle", "Larry Angulo ", "Ever Valencia", "Juan Fernando Caicedo"],
    "Muyyy buen equipo",
    "Primera A",
    5,
    "Aguila",
    15,
    3,
    6)

var leones = new Equipo("Leones",
    "http://as01.epimg.net/colombia/imagenes/2017/01/31/futbol/1485829608_318593_1485832987_noticia_normal.jpg",
    "Pablito perez",
    ["Camilo castro", "Pipe pelaez", "Andres cepeda", "David Cruz"],
    "Muyyy buen equipo",
    "Primera B",
    18,
    "Postobon",
    10,
    9,
    8)

var caldas = new Equipo("Once Caldas",
    "https://cde.peru.com//ima/0/1/4/4/9/1449893/924x530/seleccion-peruana.jpg",
    "Miguel Herrera",
    ["Carlos Brehen", "Luis Brehen", "Francisco Martínez", "Jorge Pereda", "Palma Pérez", "Alonso Sordo Noriega", "Manuel de la Garza"],
    "Muyyy buen equipo",
    "Primera B",
    3,
    "Aguila",
    11,
    9,
    5)

var patriotas = new Equipo("Patriotas",
    "https://images.eltiempo.digital/files/article_multimedia/uploads/2018/08/01/5b62393d23637.png",
    "Miguel Ángel Russo",
    [" Matias De los Santos", " Janeiler Rivas", "Breiner Paz", "Andrés Cadavid ", "Felipe Román", "Omar Bertel"],
    "Muyyy buen equipo",
    "Primera C",
    10,
    "Aguila",
    7,4,3)



var santaFe = new Equipo("Santa Fe",
    "https://integralatampost.s3.amazonaws.com/uploads/article/picture/5606/20180304_Equipos-de-f%C3%BAtbol-que-no-fichan-extranjeros.jpg",
    "Alberto Gamero",
    [" Carlos Rentería", " Rafael Robayo", "Rafael Carrascal", "Luis González ", "Yohandry Orozco", "Carlos Robles"],
    "Muyyy buen equipo",
    "Primera C",
    8,
    "Postobon",
    14,4,2)

var equida = new Equipo("La Equidá",
    "https://www.elespectador.com/sites/default/files/pas.jpg",
    "Hernán Alberto Lisi",
    [" Carlos Villagra", "Carlos Rodas", "Harnol Palacios", "Juan Fernando Rebolledo ", "Walden Vargas", "Omar Bertel"],
    "Muyyy buen equipo",
    "Primera B",
    7,
    "Aguila",
    11,7,2)


var bucaramanga = new Equipo("Bucaramanga",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnhlQkPaeyfRU7LPKT4GqIDaA6j4oNEwYEySpIyF1RHQqzKSTg",
    "Octavio Zambrano",
    [" William Parra", " Andrés Ricaurte", "Javier Calle", "Larry Angulo ", "Ever Valencia", "Juan Fernando Caicedo"],
    "Muyyy buen equipo",
    "Primera A",
    5,
    "Aguila",
    10,8,2
)

objEquipos.push(millonarios, tolima, pasto, envigado, equida, bucaramanga, santaFe, patriotas, caldas, leones);


var selEquipos = document.getElementById("equipos");
var nomEquipo = document.getElementById("nombre");
var imgEquipo = document.getElementById("imgequipo");
var miembros = document.getElementById("miembros");
var categoria = document.getElementById("categoria");
var resenia = document.getElementById("resenia");
var director = document.getElementById("director");
var pintarPorLiga = "";
var ligasSeleccionadas = false
// selEquipos.onchange = function () {
function ligas(entrada) {


    pintarPorLiga = "";
    var equiposPorLiga = []; // se inicializan los equipos
    var elegido = entrada;
    if (elegido == 0) {
        ligasSeleccionadas = false;
        equiposPorLiga = objEquipos.filter(function (equipo) {
            return equipo.liga == "Aguila";
        })
    } else {
        ligasSeleccionadas = true;
        equiposPorLiga = objEquipos.filter(function (equipo) {
            return equipo.liga == "Postobon";
        })
    }
    localStorage.setItem("liga", ligasSeleccionadas);
    localStorage.setItem("equipo", equiposPorLiga);
    //funcion pintar
    console.log(equiposPorLiga)
    equiposPorLiga.forEach(function (item, index) {
        if (index % 4 == 0) {
            pintarPorLiga += '<div class="content-grids" id="margencard"><div class="col-6 col-md-4" id="margencard" content-grid1">' +
                '<img src="' + item.img + '" width=300px height=200px  />' +
                '</div>'
        } else {
            pintarPorLiga += '<div class="col-6 col-md-4" id="margencard" content-grid1">' +
                '<img src="' + item.img + '" width=300px height=200px  />' +
                '</div>'
        }

    });

    document.getElementById('cuerpoLigas').innerHTML = pintarPorLiga + '</div>';
}



function filtro() {
    var li = localStorage.getItem("liga")
    var nomliga = ""
    if (li) {
        nomliga = "Aguila"
    } else {
        nomliga = "Postobon"
    }
    pintarPorLiga = "";
    pintarPorfiltro = "";
    var equiposFiltrados = objEquipos.filter(function (equipo) {
        return equipo.liga == nomliga;
    })


    //funcion para ordenar
    equiposFiltrados.sort(function (a, b) {
        a = a.puntos;
        b = b.puntos;
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    });

    equiposFiltrados.forEach(function (item, index) {
        pintarPorfiltro += `<tr class="table-primary">
                   <td>
                        <img src="` + item.img + `" class="avatar">
                    </td>
                   <td>
                   <p> ` + item.nombre + `</p>
                    </td>
                    <td> `+item.ganados+`</td>
                    <td> `+item.empatados+`</td>
                    <td> `+item.perdidos+`</td>
                    <td> ${item.ganados-item.perdidos}</td>
                    <td> ${item.ganados-item.empatados}</td>
                    <td> ${item.empatados+item.perdidos}</td>
                    <td> ${item.puntos}</td>
                   </tr>`;
    })

    document.getElementById('itemsTabla').innerHTML = pintarPorfiltro
}


filtro()