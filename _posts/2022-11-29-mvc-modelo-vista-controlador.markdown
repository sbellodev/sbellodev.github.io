---
layout: post
title: "Pokémon y patronces: Modelo. Vista. Controlador."
date: 2022-11-28 01:19:50 +0100
categories: patrones
---

## Tabla de contenidos
{: #index}

1. [Qué es MVC Modelo Vista Controlador][part1]{: #iPart1}
2. [Modelo][part2]
3. [Vista][part3]
4. [Controlador][part4]
5. [Conclusion][part5]
  
## [Qué es MVC Modelo Vista Controlador][index]
{: #part1}

MVC es un patrón de programación, una manera de organizar y estructurar tus ficheros que te facilitar la vida.
Consiste en dividir todo tu código en tres grandes etiquetas Model Vista Controlador.

Vamos a comparalo con cómo funciona una pokedex.
Un pokedex es un dispositivo utilizado para llevar un registro de las diferentes especies de Pokemon que un entrenador ha encontrado o atrapado.
  
## [Modelo][index]
{: #part2}

Representaría los datos sobre las diferentes especies de Pokemon, como sus nombres, tipos y habilidades.
En programación, el Model extrae los datos que buscamos. Suelen ser una consulta SQL, ligada a una BBDD.
  
## [Vista][index] 
{: #part3}

La vista sería la interfaz de usuario del pokedex, que muestra esta información al entrenador. Número, nombre, tipo, descripción.
En programación la vista es todo lo que ves, el frontend, con los datos, la página.

## [Controlador][index]
{: #part4}

El controlador sería el mecanismo que gestiona las interacciones entre el entrenador y el pokedex, como cuando el entrenador busca un Pokemon específico o agrega un nuevo Pokemon al pokedex. Cuando seleccionar un pokemon te interesa "filtrar" la información y sólo mostrar lo que pides.

En programación, es un simple pasador de datos pero puede llevar mucha lógica dentro. 
  
## [Conclusión][index] 
{: #part5}

En resumen, MVC es un patrón simple que puede ayudarte a entender mejor el código y separarlo, para hacerlo más mantenible e independiente.


[index]: #index
[part1]: #part1
[part2]: #part2
[part3]: #part3
[part4]: #part4
[part5]: #part5
