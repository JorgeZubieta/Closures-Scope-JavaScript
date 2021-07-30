// Ambito lexico en clousures
const buildCount = i => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount(1);
  // Al ejecutar buildCount(1), lo que se hace es
  // declararse una variable let con el valor 1 (i = 1)
  // esta variable solo vive dentro del scope buildCount
  // el cual ahora está siendo grabado en myCount.
  // Pero debes observar que la función retorna otra
  // función displayCount, la cual ejecuta un console.log.
  // Entonces, lo que se hace con esta línea de ejecución
  // es crear un ámbito léxico y nuestra variable myCount
  // quedaría igual a 
  // myCount = () => {
  //   console.log(count++); // imprime el valor actual de count y le suma 1 después de ejecutarlo.
  // teniendo en cuenta que declaraste count = 1 (i=1)
  // imprimiría 1 y en la siguiente ejecución 1+1 y así 
  // Solo recuerda que la variable count vive en el scope creado
  // en myCount()
  // }

  myCount(); // 1
  myCount(); // 2
  myCount(); // 3


// Aca tenemos un nuevo alcance
const myOtherCount = buildCount(10);
// De acuerdo a lo que te expliqué, aquí se crea otro scope,
// el scope de myOtherCount, por ello no hay variación con el valor
// de la "instancia" anterior de buildCount
myOtherCount(); // 10
zmyOtherCount(); // 11