---
layout: post
title: "Cómo instalar y usar Xdebug para depurar en Visual Studio Code"
subtitle: "Debugear en Visual Studio puede ser una liada. Aquí intento ahorrarte el tiempo que perdí encontrando cómo hacerlo."
date: 2022-12-5 21:00:00 +0100
---

## Tabla de contenidos

1. [Introducción](#introducción)
2. [Paso 1: Instala la extensión Xdebug para Visual Studio Code](#paso-1-instala-la-extensión-xdebug-para-visual-studio-code)
3. [Paso 2: Instala Xdebug en tu servidor PHP](#paso-2-instala-xdebug-en-tu-servidor-php)
4. [Paso 3: Configura Xdebug en tu archivo `php.ini`](#paso-3-configura-xdebug-en-tu-archivo-phpini)
5. [Paso 4: Reinicia tu servidor PHP](#paso-4-reinicia-tu-servidor-php)
6. [Paso 5: Crea una nueva configuración de lanzamiento para Xdebug](#paso-5-crea-una-nueva-configuración-de-lanzamiento-para-xdebug)
7. [Paso 6: Establece un punto de interrupción en tu código PHP](#paso-6-establece-un-punto-de-interrupción-en-tu-código-php)
8. [Paso 7: Inicia el depurador](#paso-7-inicia-el-depurador)
9. [Paso 8: Activa el punto de interrupción](#paso-8-activa-el-punto-de-interrupción)
10. [Paso 9: Utiliza los controles del depurador](#paso-9-utiliza-los-controles-del-depurador)


## [Introducción][index]

Xdebug es una poderosa extensión de PHP que proporciona capacidades de depuración y perfilado para aplicaciones PHP. En este tutorial, aprenderemos cómo instalar y usar Xdebug para depurar código PHP en Visual Studio Code.

## [Paso 1: Instala la extensión Xdebug para Visual Studio Code][index]

Para usar Xdebug para depurar en Visual Studio Code, primero deberas instalar la extensión Xdebug. Para hacerlo, abre Visual Studio Code y ve a la pestaña Extensiones (Ctrl+Shift+X). En el cuadro de búsqueda, escribe "Xdebug" e instala la extensión "PHP Debug" de Felix Becker.

## [Paso 2: Instala Xdebug en tu servidor PHP][index]

A continuación, deberas instalar Xdebug en su servidor PHP. Este proceso variará según su entorno de servidor, pero en la mayoría de los casos, puedes utilizar el siguiente comando para instalar Xdebug:

```
pecl install xdebug
```

## [Paso 3: Configura Xdebug en tu archivo php.ini][index]

Después de instalar Xdebug en su servidor, deberas configurarlo editando su archivo `php.ini`. Este archivo suele estar ubicado en el directorio `php` en su servidor. Agregua las siguientes líneas a su archivo `php.ini` para habilitar Xdebug:

```
zend_extension=xdebug.so
xdebug.remote_enable=1
xdebug.remote_host=localhost
xdebug.remote_port=9000
```

## [Paso 4: Reinicia tu servidor PHP][index]

Después de configurar Xdebug, deberas reiniciar su servidor PHP para aplicar los cambios. Esto habilitará Xdebug y lo hará disponible para su uso.

## [Paso 5: Crea una nueva configuración de lanzamiento para Xdebug][index]

Ahora que Xdebug está instalado y configurado, puedes comenzar a usarlo para depurar su código PHP. Para hacerlo, abre el proyecto que desea depurar en Visual Studio Code y crea una nueva configuración de lanzamiento para Xdebug. Para hacerlo, abre la pestaña Depurar (Ctrl+Shift+D) y haz clic en el icono de engranaje para crear una nueva configuración de lanzamiento. Selecciona "PHP" de la lista de opciones y, a continuación, agregua las siguientes lineas a su configuración de lanzamiento

```
"serverSourceRoot": "/ruta/hacia/tu/directorio",
"localSourceRoot": "${workspaceRoot}",
```

## [Paso 6: Establece un punto de interrupción en tu código PHP][index]

A continuación, establece un punto de interrupción en su código PHP haciendo clic en el lado izquierdo del número de línea donde desea detener la ejecución. Esto le indicará al depurador que detenga la ejecución en ese punto, lo que te permitirá inspeccionar el estado de su código y variables.

## [Paso 7: Inicia el depurador][index]

Para iniciar el depurador, haz clic en el botón "Iniciar depuración" en la pestaña Depurar. Esto iniciará su servidor PHP y conectará Xdebug a Visual Studio Code.

## [Paso 8: Activa el punto de interrupción][index]

Ahora que el depurador está en ejecución, abre tu proyecto PHP en un navegador web y vaya a la página donde desea comenzar a depurar. Esto activará el punto de interrupción que estableció en el paso 6 y el depurador detendrá la ejecución en ese punto.

## [Paso 9: Utiliza los controles del depurador][index]

En este punto, puedes utilizar los controles del depurador en Visual Studio Code para avanzar paso a paso en su código y examinar el estado de sus variables. También puedes usar la consola del depurador para evaluar expresiones y ejecutar comandos en tiempo de ejecución.



[index]: #tabla-de-contenidos