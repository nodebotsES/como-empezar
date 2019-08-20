![setup.jpg](setup.jpg)

# Taller de Nodebots - Como Empezar

Si tienes todo esto instalado antes de llegar no hace falta gastar mas tiempo. 

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

* Instala los drivers para CH340 - lo que esta en un directorio llamado
[drivers](drivers/CH34x_Install_V1.3.pkg)

Ahora vamos a instalar [Interchange](https://github.com/johnny-five-io/nodebots-interchange), un programa que nos ayuda a quemar `Firmata` en los microcontroladores. 

Abre la Terminal (`Applications/Utilities/Terminal.app`) y escribe el siguiente comando.

`npm install -g nodebots-interchange`

Si todo ha instalado sin errores salta al [PASO FINAL](#paso-final-ejecuta-un-programa-de-parpadeo).

#### Manual installs

Si no puedes instalar Homebrew, entonces usa los siguientes enlaces 
para instalar estos programas directamente.

* [Node Version Manager](https://github.com/creationix/nvm) then install the latest long term support version of Node.js with `nvm install --lts`
* [Git version control](https://git-scm.com/)
* [Arduino Mac Install guide](http://arduino.cc/en/Guide/MacOSX) NB This package is optional,
you can use it to write C code for your hardware.


### OPCION 2: Linux

Linux is generally pretty straight forward. Install the following (assuming Ubuntu / Debian style machines):

* Install Git `apt-get install git`
* Install curl `apt-get install curl`
* Install nodejs using [NVM](https://github.com/creationix/nvm) - alternatively
[follow the appropriate directions here](http://nodejs.org). Don't use your
package manager as the version won't be up to date enough to work with hardware.
* Install [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`

Optionally:

* Arduino [Available here to install manually](http://playground.arduino.cc/Learning/Linux) or a simple 'apt-get install arduino' should do it for a relatively recent version.

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

### OPCION 3: Windows

_Please note_

Windows users can have the most problems with getting up and running of anyone.
Please ensure you can install Johnny Five before coming to the event or you may
slow down on the day.

Install the following:

* Git: [Windows Installer for Git](https://git-scm.com/downloads)
* NodeJS: [Windows Installer here](http://nodejs.org/en/download/)
* Serial driver software: [In the drivers folder install the windows package](drivers/CH340%20windows.zip)
* Install [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`

```
    npm install johnny-five
```

This will shake out any problems you've got. Occasionally there is trouble with
Windows but they are fairly well documented and a quick google of the error
message will usually resolve it.

## PASO FINAL: Ejecuta un programa de parpadeo

Next, if you have an arduino nano to hand, you might want to get it setup with firmata.

Make sure its connected to the PC by USB first, there should be a red LED lighting up when you do.

```
interchange install StandardFirmata -a nano
```

To test you've got Firmata running, you'll need a basic blink program. First install `simplebot` project.

```
git clone https://github.com/nodebotsau/simplebot.git
cd simplebot
npm install
```

Then run the blink program: 

```
node examples/blink.js
```

If it all goes well. You'll see a blinking LED positioned next to the L on your arduino.

```
[ ] RX
[ ] TX
[*] POW 
[*] L     <--- this light will start flashing
```

![blink.jpg](blink.jpg)

Open the [`examples/blink.js`](https://github.com/nodebotsau/simplebot/blob/master/examples/blink.js) program in an editor and look at the code. Its currently set to blink every 500ms. 

Try changing this to 100ms and see if it blinks faster now.

```js
board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);  //  <--- try changing this value see if it blinks faster/slower
});
```
