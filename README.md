# Hangman React

## Componentes

App

- Renderizar el componente Hangman pasándole el número de fallos
- Renderizar el componente GuessWord pasándole la palabra a acertar
- Renderizar el componente UsedLetters pasándole el listado de letras usadas
- Renderizar el componente GameStatus pasándole el estado de la partida
- Renderizar el component Alphabet pasándole una acción
- Modificar el estado de la partida a ganado cuando se hayan acertado todas las letras de la palabra
- Modificar el estado de la partida a perdido cuando el número de fallos sea 11
- Añadir una letra al listado de letras usadas cuando se clique por primera vez en una letra
- Incrementar el número de fallos cuando la letra clicada no esté en la palabra

Hangman

- Renderizar tantas partes del muñequito como número de fallos recibido haya

GuessWord

- Renderizar tantos huecos como letras tenga la palabra recibida
- Renderizar las letras que estén en la palabra recibida

UsedLetters

- Renderizar un listado de letras usadas

GameStatus

- Renderizar un mensaje dependiendo del estado de la partida recibido

Alphabet

- Renderizar un listado de links con las letras del alfabeto
- Cuando haya un clic sobre un link, llamar a la acción recibida

## Datos y acciones

- Palabra a acertar (no es de estado) -> App
- Lista de letras del alfabeto (no es de estado) -> Alphabet
- Lista de letras usadas -> App
  · Añadir una letra -> App la define
- Número de fallos -> App
  · Incrementarlo -> App la define
- Estado de la partida -> App
  · Modificarlo del estado inicial a uno de los otros dos -> App
- Número de aciertos?
  · Incrementarlo
