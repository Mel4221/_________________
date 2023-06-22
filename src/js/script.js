/*
setInterval(() => {
    location.reload();                            
}, 1000);

*/

var next,back,index;
index = 0; 
const imgs = [
	"src/img/0.JPG",
	"src/img/1.PNG",
	"src/img/2.PNG",
	"src/img/3.JPG",
	"src/img/4.PNG",
	"src/img/5.JPEG",
	"src/img/6.JPEG",
	"src/img/7.JPEG"
]; 


const content =[
	"El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.",
"CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas.",
"JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web",
"Qué es El frontend. El frontend o «desarrollo del lado del cliente» se refiere a la práctica de producir HTML, CSS y JavaScript. Estos tres elementos se encargan de dar forma a la parte frontal de un sitio web o aplicación. Esto incluye los fondos, colores, texto, animaciones o efectos.",
"El backend es la parte del desarrollo que se encarga de que toda la parte lógica de una app o página web funcione, recogiendo todas aquellas acciones o tareas relacionadas, como la comunicación con el servidor o conexión con la base de datos.",
"Un Servidor Web o servidor HTTP es un programa informático que procesa una aplicación del lado del servidor, realizando conexiones bidireccionales o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o aplicación del lado del cliente.",
"CMS son las siglas de Content Management System, o lo que viene a ser un sistema de gestión de contenidos para páginas web. Un CMS es un software desarrollado para que cualquier usuario pueda administrar y gestionar contenidos de una web con facilidad y sin conocimientos de programación Web.",
"Un Sistema de Gestión de Aprendizaje (Learning Management System, LMS) es un tipo de software o tecnología soportada en línea que permite crear, implementar y desarrollar un programa de entrenamiento o un proceso de aprendizaje específico."
];

const labels = ["HTML","CSS","JavaScript","FrontEnd","Backend","Servidor Web","CMS","LMS"];
next = document.getElementById("next").addEventListener("click",()=>{
	
	if(index < imgs.length){
		document.getElementById("boxImg").src = imgs[index]; 
		document.getElementById("pText").innerText= content[index]; 
		document.getElementById("labelText").innerText= labels [index]; 
		index++; 
		return;
	}else{
		index = 0; 
		document.getElementById("boxImg").src = imgs[index]; 
		document.getElementById("pText").innerText= content[index]; 
		document.getElementById("labelText").innerText= labels [index]; 
	}
});

back = document.getElementById("prev").addEventListener("click",()=>{

    	if(index  != 0){
		index--; 
		document.getElementById("boxImg").src = imgs[index]; 
		document.getElementById("pText").innerText= content[index]; 
		document.getElementById("labelText").innerText= labels [index]; 
		return;
	}else{
		index = imgs.length -1; 
		document.getElementById("boxImg").src = imgs[index]; 
		document.getElementById("pText").innerText= content[index]; 
		document.getElementById("labelText").innerText= labels [index]; 
	}

});  