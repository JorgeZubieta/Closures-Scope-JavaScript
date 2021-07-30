const person = () => {
    // declarada como variable privada : no se puede cambiar su valor desde otro lado de la app, se neceitan otros metodos para ello como ahora como el setName!
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

// aca ejecuto pro primea ver un llamado de la funcion lo cual imprime el valor privado NAME
newPerson = person();
console.log(newPerson.getName());

// le paso el valor a la fucion person el cual ira dentro de saveName, el cambio es solo para este llamado.
newPerson.setName('Mario Kaito Zubieta');
console.log(newPerson.getName());

newPerson.setName('Jorge Zubieta');
console.log(newPerson.getName());

newPerson = person();
console.log(newPerson.getName());
