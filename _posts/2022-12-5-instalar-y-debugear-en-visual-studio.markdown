---
layout: post
title: "Cómo instalar y usar Xdebug para depurar en Visual Studio Code"
subtitle: "Debugear en Visual Studio puede ser una liada. Aquí intento ahorrarte el tiempo que perdí encontrando cómo hacerlo."
date: 2022-12-5 21:00:00 +0100
---

# Tabla de contenidos

1. [Introducción](#introduccion)
2. [Paso 1: Instale la extensión Xdebug para Visual Studio Code](#paso-1-instale-la-extension-xdebug-para-visual-studio-code)
3. [Paso 2: Instale Xdebug en su servidor PHP](#paso-2-instale-xdebug-en-su-servidor-php)
4. [Paso 3: Configure Xdebug en su archivo `php.ini`](#paso-3-configure-xdebug-en-su-archivo-phpini)
5. [Paso 4: Reinicie su servidor PHP](#paso-4-reinicie-su-servidor-php)
6. [Paso 5: Cree una nueva configuración de lanzamiento para Xdebug](#paso-5-cree-una-nueva-configuracion-de-lanzamiento-para-xdebug)
7. [Paso 6: Establezca un punto de interrupción en su código PHP](#paso-6-establezca-un-punto-de-interrupcion-en-su-codigo-php)
8. [Paso 7: Inicie el depurador](#paso-7-inicie-el-depurador)
9. [Paso 8: Active el punto de interrupción](#paso-8-active-el-punto-de-interrupcion)
10. [Paso 9: Utilice los controles del depurador](#paso-9-utilice-los-controles-del-depurador)

## Paso 6: Establecer un punto de interrupción en su código PHP
## Paso 7: Inicie el depurador
## Paso 8: Activar el punto de interrupción
## Paso 9: Utilice los controles del depurador

## Introducción

Xdebug es una poderosa extensión de PHP que proporciona capacidades de depuración y perfilado para aplicaciones PHP. En este tutorial, aprenderemos cómo instalar y usar Xdebug para depurar código PHP en Visual Studio Code.

## Paso 1: Instalar la extensión Xdebug para Visual Studio Code

Para usar Xdebug para depurar en Visual Studio Code, primero deberá instalar la extensión Xdebug. Para hacerlo, abra Visual Studio Code y vaya a la pestaña Extensiones (Ctrl+Shift+X). En el cuadro de búsqueda, escriba "Xdebug" e instale la extensión "PHP Debug" de Felix Becker.

## Paso 2: Instale Xdebug en su servidor PHP

A continuación, deberá instalar Xdebug en su servidor PHP. Este proceso variará según su entorno de servidor, pero en la mayoría de los casos, puede utilizar el siguiente comando para instalar Xdebug:

```
pecl install xdebug
```

## Paso 3: Configure Xdebug en su archivo `php.ini`

Después de instalar Xdebug en su servidor, deberá configurarlo editando su archivo `php.ini`. Este archivo suele estar ubicado en el directorio `php` en su servidor. Agregue las siguientes líneas a su archivo `php.ini` para habilitar Xdebug:

```
zend_extension=xdebug.so
xdebug.remote_enable=1
xdebug.remote_host=localhost
xdebug.remote_port=9000
```

## Paso 4: Reinicie su servidor PHP

Después de configurar Xdebug, deberá reiniciar su servidor PHP para aplicar los cambios. Esto habilitará Xdebug y lo hará disponible para su uso.

## Paso 5: Cree una nueva configuración de lanzamiento para Xdebug

Ahora que Xdebug está instalado y configurado, puede comenzar a usarlo para depurar su código PHP. Para hacerlo, abra el proyecto que desea depurar en Visual Studio Code y cree una nueva configuración de lanzamiento para Xdebug. Para hacerlo, abra la pestaña Depurar (Ctrl+Shift+D) y haga clic en el icono de engranaje para crear una nueva configuración de lanzamiento. Seleccione "PHP" de la lista de opciones y, a continuación, agregue las siguientes lineas a su configuración de lanzamiento

```
"serverSourceRoot": "/ruta/hacia/tu/directorio",
"localSourceRoot": "${workspaceRoot}",
```

## Paso 6: Establecer un punto de interrupción en su código PHP

A continuación, establezca un punto de interrupción en su código PHP haciendo clic en el lado izquierdo del número de línea donde desea detener la ejecución. Esto le indicará al depurador que detenga la ejecución en ese punto, lo que le permitirá inspeccionar el estado de su código y variables.

## Paso 7: Inicie el depurador

Para iniciar el depurador, haga clic en el botón "Iniciar depuración" en la pestaña Depurar. Esto iniciará su servidor PHP y conectará Xdebug a Visual Studio Code.

## Paso 8: Activar el punto de interrupción

Ahora que el depurador está en ejecución, abra su proyecto PHP en un navegador web y vaya a la página donde desea comenzar a depurar. Esto activará el punto de interrupción que estableció en el paso 6 y el depurador detendrá la ejecución en ese punto.

## Paso 9: Utilice los controles del depurador

En este punto, puede utilizar los controles del depurador en Visual Studio Code para avanzar paso a paso en su código y examinar el estado de sus variables. También puede usar la consola del depurador para evaluar expresiones y ejecutar comandos en tiempo de ejecución.



[index]: #tabla-de-contenidos