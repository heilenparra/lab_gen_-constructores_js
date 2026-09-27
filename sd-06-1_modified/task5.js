function FriendsList (nombres){

    this.nombres= nombres
}

const lista = new FriendsList (process.argv.slice(4))


    console.log (lista.nombres)



/*5. Creen un constructor para un objeto `FriendsList` que almacene una lista de nombres en un array.
    - Su programa debe leer la cantidad de nombres y los nombres desde los argumentos de la línea de comandos.
    - Su programa debe luego imprimir el array directamente en la consola.
        - La salida debería verse así: `[ 'nombre1', 'nombre2' ]`*/