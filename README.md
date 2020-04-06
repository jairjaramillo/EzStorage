## EzStorage

EzStorage is a series of Javascript functiosn to easily store objects and other non-string data into the browser Local or Session Storage

### Built With

This app was made using this technologies

* <a href="https://www.javascript.com/" target="_blank">Javascript</a>
* <a href="https://nodejs.org/en/" target="_blank">Node JS</a>

## Getting Started
To get a local copy up and running follow these simple example steps:

### Prerequisite Instalations
* Git
* Nodejs
* NPM

If you're using an Ubuntu Linux Distribution or derivate, you can install these programs by using these commands in your Linux Terminal:

```sh
sudo apt update
sudo apt install git
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* If you're using Microsoft Windows, the Git installer can be found <a href="https://gitforwindows.org/" target="_blank">here</a>, and Node JS/NPM installer can be found <a href="https://nodejs.org/en/download/" target="_blank">here</a>.
* If you have another type of Linux Distribution, you can check how to install Node JS and NPM by checking <a href="https://nodejs.org/en/download/package-manager/" target="_blank">this article</a>.

### NPM installation

Install this package with NPM:
```sh
npm install -D ez-storage
```
then you just need to import the module on the javascript file where you will use it:
```sh
import EzStorage from 'ez-storage';
```

## Usage

**EzStorage.localLoad:** Looks for the storage value on your localStorage, and if it finds it, it returns it, otherwhise it returns NULL.

**EzStorage.sessionLoad:** Looks for the storage value on your sessionStorage, and if it finds it, it returns it, otherwhise it returns NULL.

**EzStorage.localSave:** Checks if localStorage is available at the moment, and if does, saves the data into the selected storage.

**EzStorage.sessionSave:** Checks if sessionStorage is available at the moment, and if does, saves the data into the selected storage.

For more information about the parameters and outputs, please look at the declaration file and intellisense description.

### Source Installation

Clone this GitHub repository:
```sh
git clone https://github.com/jairjy/ezStorage.git
```
Go to the repository folder and install the NPM modules:

```sh
npm install
```

Then, generate output files:

```sh
npm run dev
```
For development mode, and:

```sh
npm run build
```
For production.
## Usage

After NPM generates the output files, an 'index.js and 'index.d.ts' files will be generated on the "dist" folder.

Then you can use 'index.js' on your project.

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

* Jair Jaramillo: <a href="https://github.com/jairjy" target="_blank">Github</a>, <a href="https://twitter.com/jairjy" target="_blank">Twitter</a>
