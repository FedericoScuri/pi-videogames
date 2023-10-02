
✔️✔️✔️✔️✔️✔️
❌❌❌❌❌❌


-------------------------🖱 BASE DE DATOS---------------------------------✔️
Deberás crear dos modelos para tu base de datos. Una será para los videojuegos y la otra será para los géneros (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos las propiedades que debe tener cada modelo.

📍 MODELO 1 | Videogames✔️

ID (deben ser distintos a los que vienen de la API). *
Nombre. *
Descripción. *
Plataformas. *
Imagen. *
Fecha de lanzamiento. *
Rating. *

📍 MODELO 2 | Genres✔️

ID. *
Nombre. *



---------------------------🖱 BACK-END---------------------------------------


Tu servidor deberá contar con las siguientes rutas:

📍 GET | /videogames
Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.✔️


📍 GET | /videogames/:idVideogame✔️
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.


📍 GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.


📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).


📍 GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.




-------------------------------------FRONT-END---------------------------------------------------------

Se debe desarrollar una aplicación utilizando React y Redux que contenga las siguientes vistas:

📍 LANDING PAGE | deberás crear una página de inicio o bienvenida con:

Alguna imagen de fondo representativa al proyecto.
Botón para ingresar a la home page.

📍 HOME PAGE | la página principal de tu SPA debe contener:

SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /videogames y deberá mostrar su:
Imagen.
Nombre.
Géneros.
Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico.
Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 15 videojuegos por página.
⚠️ IMPORTANTE: se deben mostrar tanto los videojuegos traidos desde la API como así también los de la base de datos, pero NO está permitido almacenar en la base de datos los videojuegos de la API. Solamente se pueden guardar aquellos creados desde el form.

⚠️ IMPORTANTE: debido a que en la API existen alrededor de 500.000 videojuegos, por cuestiones de performance puedes tomar la simplificación de obtener y paginar los primeros 100 videojuegos.


📍 DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un videojuego:

ID.
Nombre.
Imagen.
Plataformas.
Descripción.
Fecha de lanzamiento.
Rating.
Géneros.

📍 FORM PAGE |: en esta vista se encontrará el formulario para crear un nuevo videojuego.

Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

Nombre.
Imagen.
Descripción.
Plataformas.
Fecha de lanzamiento.
Rating.
Posibilidad de seleccionar/agregar varios géneros en simultáneo.
Botón para crear el nuevo videojuego.
