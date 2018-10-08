
	        var objEquipos= [];
            class Equipo{
                constructor(nombre,img,Director,miembros,resenia,categoria,puntos,liga)
                {this.nombre = nombre;
                this.img=img;
                this.Director= Director;
                this.miembros= miembros;
                this.resenia= resenia;
                this.categoria= categoria;
                this.puntos= puntos;
                this.liga = liga
                }
            }

            var millonarios = new Equipo( "Millonarios",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzDsshv3XTuv839D1Eq2R5nTCuIPaPkpQ_AbC3wmfuOBnU1oX",
                 "Miguel Ángel Russo",
                 [" Matias De los Santos", " Janeiler Rivas", "Breiner Paz", "Andrés Cadavid ", "Felipe Román", "Omar Bertel"],
                 "Muyyy buen equipo",
                 "Primera C",
                 10,
                 "Aguila");

            var tolima = new Equipo("Tolima",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfQhbS9MuaBuvIy3Ub5T6XvvTn04xIBuqO3w7xeuCJkOj7eKjXg",
                 "Alberto Gamero",
                 [" Carlos Rentería", " Rafael Robayo", "Rafael Carrascal", "Luis González ", "Yohandry Orozco", "Carlos Robles"],
                 "Muyyy buen equipo",
                 "Primera C",
                 8,
                 "Postobon")

            var pasto = new Equipo("Pasto",
                 "https://www.elespectador.com/sites/default/files/pas.jpg",
                 "Hernán Alberto Lisi",
                 [" Carlos Villagra", "Carlos Rodas", "Harnol Palacios", "Juan Fernando Rebolledo ", "Walden Vargas", "Omar Bertel"],
                 "Muyyy buen equipo",
                 "Primera B",
                 7,
                 "Postobon")
            var envigado = new Equipo("Envigado",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnhlQkPaeyfRU7LPKT4GqIDaA6j4oNEwYEySpIyF1RHQqzKSTg",
                 "Octavio Zambrano",
                 [" William Parra", " Andrés Ricaurte", "Javier Calle", "Larry Angulo ", "Ever Valencia", "Juan Fernando Caicedo"],
                 "Muyyy buen equipo",
                 "Primera A",
                 5,
                 "Aguila" ) 

            var leones = new Equipo("Leones",
                 "http://as01.epimg.net/colombia/imagenes/2017/01/31/futbol/1485829608_318593_1485832987_noticia_normal.jpg",
                 "Pablito perez",
                 ["Camilo castro", "Pipe pelaez", "Andres cepeda", "David Cruz"],
                 "Muyyy buen equipo",
                 "Primera B",
                 18,
                 "Postobon")

            var caldas = new Equipo("Once Caldas",
                 "https://cde.peru.com//ima/0/1/4/4/9/1449893/924x530/seleccion-peruana.jpg",
                 "Miguel Herrera",
                 ["Carlos Brehen", "Luis Brehen", "Francisco Martínez", "Jorge Pereda", "Palma Pérez", "Alonso Sordo Noriega", "Manuel de la Garza"],
                 "Muyyy buen equipo",
                 "Primera B",
                 3,
                 "Aguila")
          
            var patriotas = new Equipo( "Patriotas",
                 "https://images.eltiempo.digital/files/article_multimedia/uploads/2018/08/01/5b62393d23637.png",
                 "Miguel Ángel Russo",
                 [" Matias De los Santos", " Janeiler Rivas", "Breiner Paz", "Andrés Cadavid ", "Felipe Román", "Omar Bertel"],
                 "Muyyy buen equipo",
                 "Primera C",
                 10,
                 "Aguila" )     
           


            var santaFe = new Equipo("Santa Fe",
                 "https://integralatampost.s3.amazonaws.com/uploads/article/picture/5606/20180304_Equipos-de-f%C3%BAtbol-que-no-fichan-extranjeros.jpg",
                 "Alberto Gamero",
                 [" Carlos Rentería", " Rafael Robayo", "Rafael Carrascal", "Luis González ", "Yohandry Orozco", "Carlos Robles"],
                 "Muyyy buen equipo",
                 "Primera C",
                 8,
                 "Postobon")

            var equida = new Equipo( "La Equidá",
                 "https://www.elespectador.com/sites/default/files/pas.jpg",
                 "Hernán Alberto Lisi",
                 [" Carlos Villagra", "Carlos Rodas", "Harnol Palacios", "Juan Fernando Rebolledo ", "Walden Vargas", "Omar Bertel"],
                 "Muyyy buen equipo",
                 "Primera B",
                 7,
                 "Aguila")

            
            var bucaramanga = new Equipo( "Bucaramanga",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnhlQkPaeyfRU7LPKT4GqIDaA6j4oNEwYEySpIyF1RHQqzKSTg",
                 "Octavio Zambrano",
                 [" William Parra", " Andrés Ricaurte", "Javier Calle", "Larry Angulo ", "Ever Valencia", "Juan Fernando Caicedo"],
                 "Muyyy buen equipo",
                 "Primera A",
                 5,
                 "Aguila")

           objEquipos.push(millonarios,tolima,pasto,envigado,equida,bucaramanga,santaFe,patriotas,caldas,leones);


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
			   function ligas(entrada){
                

                pintarPorLiga = "";
                var equiposPorLiga = []; // se inicializan los equipos
                var elegido = entrada;
                if(elegido==0){
                    ligasSeleccionadas= false;
                   equiposPorLiga = objEquipos.filter(function (equipo) {
                    return equipo.liga == "Aguila";})
                }
                else{
                    ligasSeleccionadas=true;
                   equiposPorLiga = objEquipos.filter(function (equipo) {
                    return equipo.liga == "Postobon";})
                }
                localStorage.setItem("seleccion", ligasSeleccionadas);
                localStorage.setItem("equipo",equiposPorLiga);
          //funcion pintar
             console.log(equiposPorLiga)
                 equiposPorLiga.forEach(function(item, index){
                     if(index%4==0){
                        pintarPorLiga+= '<div class="content-grids" id="margencard"><div class="col-6 col-md-4" id="margencard" content-grid1">'+
                        '<img src="'+item.img+'" width=300px height=200px  />'+
				 	   '</div>'
                     }
                     else{
                        pintarPorLiga+= '<div class="col-6 col-md-4" id="margencard" content-grid1">'+
                        '<img src="'+item.img+'" width=300px height=200px  />'+
				 	    '</div>'
                     }   
				   
               });

                document.getElementById('cuerpoLigas').innerHTML = pintarPorLiga+'</div>';
            }



            function filtro(cat) {
                pintarPorLiga = "";
                pintarPorfiltro = "";
                var equiposFiltrados = objEquipos.filter(function (equipo) {
                    return equipo.categoria == cat;
                })

              
                    //funcion para ordenar
                    equiposFiltrados.sort(function (a, b) {
                        a = a.puntos;
                        b = b.puntos;
                        if (a > b) 
                            {return 1;}
                        else if (a < b) 
                            {return -1;}
                        return 0; });
                    
                 equiposFiltrados.forEach(function(item, index){
                   pintarPorfiltro+= ' <div class="card">'+
                  '<img id="imgequipo" src="'+item.img+'" width="500px" height="300px">'+
                    '<div class="container">'+
                     '<h2>'+item.nombre+'</h2>' +
                     '<strong><p>'+item.Director+'</p></strong>'+
                        ' <strong><p>Jugadores:</p></strong>'
                        +'<p id="miembros"></p>'
                        +' <strong><p>Reseña:</p></strong>'
                        +'<p >'+item.resenia+'</p>'+
                        +'<strong><p>Categoria:</p></strong>'
                        + '<p>'+item.categoria+'</p>'+
                        '<p> Puntaje : '+item.puntos+'</p>'+
                          '</div></div>'
               })

                document.getElementById('cuerpoLigas').innerHTML = pintarPorfiltro }

            
            function verificarTabla(){
                var equiposSeleccionados=[] ;
                equiposSeleccionados = localStorage.getItem("equipo")
               
                pintarPorLiga = "";
                pintarPorfiltro = "";
               
                    //funcion para ordenar
                    equiposSeleccionados.sort(function (a, b) {
                        a = a.puntos;
                        b = b.puntos;
                        if (a > b) 
                            {return 1;}
                        else if (a < b) 
                            {return -1;}
                        return 0; });
                    
                 equiposSeleccionados.forEach(function(item, index){
                    console.log(item)

                   pintarPorfiltro+= '<li class="collection-item avatar">'+
                   '<img src="images/yuna.jpg" alt="" class="circle">'+
                   '<span class="title">Title</span>'+
                   '<p>First Line <br>'+
                      'Second Line'+
                   '</p>'+
                   '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'+
                 '</li>'
               })

                document.getElementById('itemsTabla').innerHTML = pintarPorfiltro

            }

            verificarTabla()


