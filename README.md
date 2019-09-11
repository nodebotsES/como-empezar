![setup.jpg](setup.jpg)

# Taller de Nodebots - Como Empezar

Si tienes todo esto instalado antes de llegar no hace falta seguir estos pasos, simplemente salta al [PASO FINAL](#paso-final-ejecuta-un-programa-de-parpadeo). 

Si no, no te preocupes, solo sigue las instrucciones de abajo.

### OPCION 1: MacOS (OS X)

Lo mejor es usar Homebrew porque hace toda la instalacion mas facil.

Abre la terminal (`Applications/Utilities/Terminal.app`) y escribe los siguientes
comandos:

* Para instalar [homebrew](http://brew.sh/)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* Ahora instala GIT (para control de versiones) y node (para instalar y usar [Node.js](http://nodejs.org/))
```
brew install git node
```
* Cierra la terminal escribiendo `exit` y luego abrela otra vez para que los cambios hayan
surtido efecto.

Ahora que ya tenemos las herramientas mas basicas vamos a instalar el resto del software.

* Instala los drivers para [CH340](https://www.geekfactory.mx/tutoriales/tutoriales-arduino/driver-ch340-para-arduino-chinos-o-genericos/) lo que esta en un directorio llamado [drivers](drivers/CH34x_Install_V1.3.pkg)

Ahora vamos a instalar [Interchange](https://github.com/johnny-five-io/nodebots-interchange), un programa que nos ayuda a quemar [`Firmata`](https://www.youtube.com/watch?v=NlEgaMNKj8w) en los microcontroladores. 

Abre la Terminal (`Applications/Utilities/Terminal.app`) y escribe el siguiente comando.

`npm install -g nodebots-interchange`

#### Software opcional, pero que merece la pena tener.

Arduino es un programa opcional, pero merece la pena si quieres entender mas a fondo como usar los microcontroladores de Arduino.

* [Arduino Mac Install guide](http://arduino.cc/en/Guide/MacOSX) 

#### Instalacion de Programas Manualmente (Sin Homebrew)

Si no puedes instalar Homebrew, entonces usa los siguientes enlaces 
para instalar estos programas directamente.

* [Node Version Manager](https://github.com/creationix/nvm) luego instala la ultima version de node.js con `nvm install --lts`
* [Git version control](https://git-scm.com/) 

Si todo ha instalado sin errores puedes saltar al [PASO FINAL](#paso-final-ejecuta-un-programa-de-parpadeo).

### OPCION 2: Linux

Linux es generalmente mas facil de instalar y da menos problemas. Instala los siguientes programas en este orden (asumiendo Ubuntu / Debian):

* Git `apt-get install git`
* curl `apt-get install curl`
* nodejs usando [NVM](https://github.com/creationix/nvm) - o, si no
[sigue las direcciones marcadas aqui](http://nodejs.org). No uses `apt-get` para instalar node.js, ya que siempre lleva versiones muy antiguas.
* [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`, un programa que nos ayuda a quemar [`Firmata`](https://www.youtube.com/watch?v=NlEgaMNKj8w) en los microcontroladores. 

#### Software opcional, pero que merece la pena tener.

Arduino es un programa opcional, pero merece la pena si quieres entender mas a fondo como usar los microcontroladores de Arduino.

* Arduino [Aqui se puede instalar manualmente](http://playground.arduino.cc/Learning/Linux) o simplemente 'apt-get install arduino' te va a dar una version bastante reciente.

Si todo ha instalado sin errores puedes saltar al [PASO FINAL](#paso-final-ejecuta-un-programa-de-parpadeo).

### OPCION 3: Windows

_Nota_

Usuarios de windows generalmente tienen mas problemas.

Asegurate de tener instalados los siguientes programas:

* Git: [Instalador Git](https://git-scm.com/downloads)
* NodeJS: [Instalador de Windows](http://nodejs.org/en/download/)
* Drivers CH340 para Arduino Nano USB: [Instala el ZIP en el directorio de 'drivers'](drivers/CH340%20windows.zip)
* Instalador de Firmata [Interchange](https://github.com/johnny-five-io/nodebots-interchange)

`npm install -g nodebots-interchange`

Programas opcionales (pero que agilizan mucho si hay problemas).

* [Arduino IDE (version 1.6.7 o mayor)](https://www.arduino.cc/en/Main/Software#ad_container_zone)

A veces hay problemas instalando 'Interchange'. Si tienes Arduino IDE instalado no se necesita usar Interchange.

## PASO FINAL: Ejecuta un programa de parpadeo

Siguiente, saca el microcontrolador Arduino e instala Firmata. Este es el programa que ponemos en el Arduino para mandarle instrucciones por USB desde JavaScript.

Conectalo al PC primero, si se enciende una luz roza (POW) ya puedes dar el siguiente paso.

```
interchange install StandardFirmata -a uno
```

Para probar si funciona firmata necesitamos un programa basico de blink (parpadeo del LED). Primero instala este projecto y sigue las intrucciones en la terminal abajo.

```
git clone https://github.com/nodebotsES/como-empezar.git
cd como-empezar
npm install
```

Y luego ejecuta el programa para parpadear el LED: 

```
node blink.js
```

Si va todo bien veras parpadear el LED al lado de la L en el arduino.

```
[ ] RX
[ ] TX
[*] POW 
[*] L     <--- esta luz empezara a parpadear
```

![blink.jpg](blink.jpg)

Abre el fichero [`blink.js`](https://github.com/nodebotsES/como-empezar/blob/master/blink.js) en un editor (recomiendo Visual Studio Code) y mira el codigo. Esta puesto para papadear cada 500ms. 

Cambia esto a 100ms y mira si parpadea mas rapido.

```js
board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);  //  <--- cambia esto para ver si parpadea mas rapido/lento
});
```
