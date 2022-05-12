# API_Rest-Trello
Este Repositorio contiene las pruebas que hice al probar el API Rest de Trello

1. Primero necesitamos una cuenta en [Trello]( https://trello.com/).
2. Para jugar con el API Rest de Trello necesitamos un api key y un token que puedes solicitar aquí: [app-key](https://trello.com/app-key)
    - Una vez estando ahí copiamos la llave muy bien y le damos a donde dice `token`
    - Nos pedira autorizacion, le damos "permitir" y nos mandara a otra ventana con nuestro token, debemos guardarlo muy bien.
3. Podemos jugar con el api de Trello mediante peticiones armadas de [Postman](https://www.postman.com/).
4. En este caso usamos el [archivio](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/files/8585319/Trello.API.LaunchX.postman_collection.json.zip) que nos dio el Mission Commander y probamos la siguiente petición:

<img src="https://user-images.githubusercontent.com/17634377/164958315-1bf2f957-ff16-4dc4-9473-7412943636fe.png" alt="metodo POST">

5. En la sección de `params` llenamos los valores que obtuvimos anteriormente en Trello, nuestro `API Key y el `token`.

<img alt="ejemplo de params" src="https://user-images.githubusercontent.com/17634377/164958333-3ebb95d7-3ad1-47e4-8b66-7347f64ab53e.png">

7. Le damos al botón send y nos debio haber creado un tablero en Trello con el nombre que le especificamos.

![image](https://user-images.githubusercontent.com/98203302/167310533-77074fc8-0ff8-4a1c-8c0f-8738c3f9a63a.png)

8. Del response en postman vamos a copiar el ID del tablero que acabamos de crear y lo guardamos.

![image](https://user-images.githubusercontent.com/17634377/164958474-ae31d46a-3af5-4bf5-afdd-1189b4b632fe.png)

9. Abrimos el siguiente request: ![image](https://user-images.githubusercontent.com/17634377/164958552-5862ca7d-ef96-4bad-af4c-cc92791ade2b.png)
10. Volvemos agregar el APIKEY y el TOKEN.
11. Modificamos la URL justo despues de `/1/boards/` quitamos el valor que nos aparece y ponemos el ID del board creado anteriormente
```
https://api.trello.com/1/boards/BOARDID/lists?key=APIKEY&token=TOKEN
```
12. Envía tu request, y verifica la información que rexcibes. Deberás ver la lista de columnas que tienes en tu tablero:

![image](https://user-images.githubusercontent.com/17634377/164958638-23154b5a-a829-4793-b4da-907c28faa858.png)

13. Copiamos el id que salga en el response.
14. Abrimos el request POST `Create Card By List Id: ![image](https://user-images.githubusercontent.com/17634377/164958673-2e923266-a607-42ba-a322-d8c8dbd73fa0.png)
15. Agrega los parámetros necesarios: idList(el id de la primer columna del paso anterior), key, token, y name (este es el título de tu card nueva).
16. Envía tu request y verifica que la respuesta sea éxitosa. Verifica que efectivamente se haya creado directo en la app de trello.

![image](https://user-images.githubusercontent.com/98203302/167310978-d3b11166-9a00-4929-991d-60e2687fa535.png)

Puedes consultar la documentación del Api Rest de Trello en el siguiente [link](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards).
