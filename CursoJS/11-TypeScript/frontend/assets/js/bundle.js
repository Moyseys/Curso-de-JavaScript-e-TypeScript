/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Aula019 - validando formulario/index.ts":
/*!*****************************************************!*\
  !*** ./src/Aula019 - validando formulario/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../Aula035 -Exercicio video/index */ \"./src/Aula035 -Exercicio video/index.ts\");\n\n\n//# sourceURL=webpack://11-typescript/./src/Aula019_-_validando_formulario/index.ts?");

/***/ }),

/***/ "./src/Aula035 -Exercicio video/index.ts":
/*!***********************************************!*\
  !*** ./src/Aula035 -Exercicio video/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass VideoPlayer {\n    constructor(videoPlayerElements) {\n        this.videoPlayer = videoPlayerElements.videoPlayer;\n        this.stopButton = videoPlayerElements.stopButton;\n        this.playButton = videoPlayerElements.playButton;\n    }\n    playToggle() {\n        if (this.videoPlayer.paused) {\n            this.playButton.innerText = 'pause';\n            this.videoPlayer.play();\n        }\n        else {\n            this.playButton.innerText = 'play';\n            this.videoPlayer.pause();\n        }\n    }\n    stop() {\n        this.videoPlayer.pause();\n        this.videoPlayer.currentTime = 0;\n        this.playButton.innerText = 'Play';\n    }\n    iniciarEventos() {\n        this.playButton.addEventListener('click', () => {\n            this.playToggle();\n        });\n        this.stopButton.addEventListener('click', () => {\n            this.stop();\n        });\n    }\n}\nexports[\"default\"] = VideoPlayer;\nconst videoPlayerElements = {\n    videoPlayer: document.querySelector('.video'),\n    stopButton: document.querySelector('.stop'),\n    playButton: document.querySelector('.play'),\n};\nconst v1 = new VideoPlayer(videoPlayerElements);\nv1.iniciarEventos();\n\n\n//# sourceURL=webpack://11-typescript/./src/Aula035_-Exercicio_video/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Aula019 - validando formulario/index.ts");
/******/ 	
/******/ })()
;