corregir :  --->  git remote add origin https://github.com/Nathaliamou/PAgina-Web-Recetas-de-cocina.git
El código proporcionado pertenece a una aplicación web de recetas, 
 un componente llamado Content. Este componente importa datos de recetas desde un archivo JSON y los organiza en diferentes 
 categorías: Arroces, Pastas, Postres, Sopas y Ensaladas. Luego, combina todas estas recetas en una sola lista y las mezcla aleatoriamente.
El componente utiliza el contexto infoContext para gestionar el estado de las recetas dentro de la aplicación.
Al montarse, el componente Content establece la información de las recetas en el contexto, permitiendo que otros componentes accedan a estos datos.
Inicialmente, el componente muestra un número limitado de recetas, definido por el estado dataVisible, 
que comienza con un valor de 5. Las recetas se muestran utilizando el componente Articles, que se renderiza para cada receta visible.
Además, se incluye una funcionalidad de carga progresiva. Un botón permite al usuario cargar más recetas,
incrementando el número de recetas visibles en 5 cada vez que se presiona. Esta funcionalidad se gestiona mediante la función loadRecipes.
El objetivo principal del componente Content es ofrecer una visualización dinámica y progresiva de recetas, 
mejorando la experiencia del usuario al permitirle descubrir nuevas recetas de forma gradual sin sobrecargar la interfaz inicial.
NOta: debo agregar el resto de las recetas, nathalia orozco.
