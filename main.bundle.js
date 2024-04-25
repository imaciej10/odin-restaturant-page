/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chef1.png":
/*!***********************!*\
  !*** ./src/chef1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bba89a33a46f4918152.png";

/***/ }),

/***/ "./src/chef2.png":
/*!***********************!*\
  !*** ./src/chef2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ba8fc5e96e2cbb70589.png";

/***/ }),

/***/ "./src/chef3.png":
/*!***********************!*\
  !*** ./src/chef3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98d991da19fa2641f2ff.png";

/***/ }),

/***/ "./src/chef4.png":
/*!***********************!*\
  !*** ./src/chef4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b293bdaaf77dc9c3319.png";

/***/ }),

/***/ "./src/chef5.png":
/*!***********************!*\
  !*** ./src/chef5.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9106cfb8d50f8ce90874.png";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chef1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef1.png */ "./src/chef1.png");
/* harmony import */ var _chef2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chef2.png */ "./src/chef2.png");
/* harmony import */ var _chef3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chef3.png */ "./src/chef3.png");
/* harmony import */ var _chef4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chef4.png */ "./src/chef4.png");
/* harmony import */ var _chef5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chef5.png */ "./src/chef5.png");






const content = document.getElementById("content");

function setClass(elem, className) {
  elem.classList.add(className);
}

const clearContent = function (element) {
  element.innerHTML = "";
};

const loadMain = function () {
  const heading = document.createElement("h1");
  const cooks = document.createElement("div");
  const cooksTitle = document.createElement("div");
  cooksTitle.textContent = "Give warm welcome to our amazing cooks";

  const chiefs = [];
  const names = [];
  const containers = [];
  const para = [];
  clearContent(content);

  for (let i = 0; i < 4; i++) {
    const p = document.createElement("p");
    para.push(p);
  }
  for (let i = 0; i < 5; i++) {
    const cook = new Image();
    setClass(cook, "avi");
    chiefs.push(cook);
  }

  for (let i = 0; i < 5; i++) {
    const name = document.createElement("div");
    const container = document.createElement("div");
    setClass(name, "name");
    container.classList.add("cook");
    names.push(name);
    containers.push(container);
  }

  chiefs[0].src = _chef1_png__WEBPACK_IMPORTED_MODULE_0__;
  chiefs[1].src = _chef2_png__WEBPACK_IMPORTED_MODULE_1__;
  chiefs[2].src = _chef3_png__WEBPACK_IMPORTED_MODULE_2__;
  chiefs[3].src = _chef4_png__WEBPACK_IMPORTED_MODULE_3__;
  chiefs[4].src = _chef5_png__WEBPACK_IMPORTED_MODULE_4__;
  names[0].textContent = "Martina";
  names[1].textContent = "Arthur";
  names[2].textContent = "Palmer";
  names[3].textContent = "Dutch";
  names[4].textContent = "Devin";

  setClass(cooks, "cooks");
  setClass(cooksTitle, "cooksTitle");
  containers.forEach((container, index) => {
    container.appendChild(names[index]);
    container.appendChild(chiefs[index]);
  });

  containers.forEach((container) => cooks.append(container));

  heading.textContent = "Tiny Tastes";
  para[0].textContent =
    "Welcome to Tiny Tastes, where small bites pack a cosmic punch! Nestled in the heart of the multiverse, our restaurant takes you on an intergalactic journey through flavor. From miniature marvels to bite-sized wonders, each dish is a portal to culinary delight. Step into our dimension and savor the universe's smallest, yet most unforgettable, gastronomic adventures. Join us at 'Tiny Tastes'—where every bite is an epic odyssey!";

  para[1].textContent =
    "Embark on a culinary voyage through the cosmos at 'Micro Munchies,' where flavor knows no bounds and every dish is a universe unto itself. Our tiny titans of taste defy the laws of dimensionality, packing a universe of flavors into every petite portion. From our quantum quiches to our subatomic sliders, each dish is a masterpiece crafted with cosmic care. Join us at 'Micro Munchies,' where big flavor comes in small packages, and every bite is a journey through the infinite expanse of taste.";

  para[2].textContent =
    "At Restaurant Tiny Bites, crafting our meals is a meticulous art form, infused with passion and creativity. We begin by sourcing only the freshest, finest ingredients from local farmers and trusted suppliers, ensuring each component contributes to a symphony of flavors. Our chefs, skilled artisans of the culinary realm, embark on a journey of experimentation and innovation, constantly pushing boundaries to create dishes that tantalize the taste buds and ignite the senses. Every recipe is a labor of love, meticulously crafted with attention to detail and an unwavering commitment to quality. From delicate appetizers to hearty mains and decadent desserts, each dish tells a story, a narrative of tradition, innovation, and gastronomic delight.";

  para[3].textContent =
    " We strive to cater to diverse palates and dietary preferences, offering a wide array of options that cater to vegetarians, vegans, and meat lovers alike. Presentation is paramount at Tiny Bites, with each plate meticulously arranged to captivate not only the palate but also the eye. Our dedication to excellence extends beyond the kitchen, with attentive staff providing impeccable service, ensuring every dining experience is memorable and extraordinary. At Tiny Bites, we believe that a meal is not just sustenance; it is an experience to be savored, shared, and cherished. Join us on a culinary adventure where every bite is a journey into the sublime, where flavors dance on the palate and memories are made to last a lifetime. ";
  content.append(
    heading,
    para[0],
    para[1],
    para[2],
    para[3],
    cooksTitle,
    cooks
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadMain });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVDQUFLO0FBQ3ZCLGtCQUFrQix1Q0FBSztBQUN2QixrQkFBa0IsdUNBQUs7QUFDdkIsa0JBQWtCLHVDQUFLO0FBQ3ZCLGtCQUFrQix1Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Z0JBQTZnQjtBQUM3Z0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXR1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXR1cmFudC1wYWdlLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IENoZWYxIGZyb20gXCIuL2NoZWYxLnBuZ1wiO1xuaW1wb3J0IENoZWYyIGZyb20gXCIuL2NoZWYyLnBuZ1wiO1xuaW1wb3J0IENoZWYzIGZyb20gXCIuL2NoZWYzLnBuZ1wiO1xuaW1wb3J0IENoZWY0IGZyb20gXCIuL2NoZWY0LnBuZ1wiO1xuaW1wb3J0IENoZWY1IGZyb20gXCIuL2NoZWY1LnBuZ1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBzZXRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IGxvYWRNYWluID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjb29rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvb2tzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb29rc1RpdGxlLnRleHRDb250ZW50ID0gXCJHaXZlIHdhcm0gd2VsY29tZSB0byBvdXIgYW1hemluZyBjb29rc1wiO1xuXG4gIGNvbnN0IGNoaWVmcyA9IFtdO1xuICBjb25zdCBuYW1lcyA9IFtdO1xuICBjb25zdCBjb250YWluZXJzID0gW107XG4gIGNvbnN0IHBhcmEgPSBbXTtcbiAgY2xlYXJDb250ZW50KGNvbnRlbnQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmEucHVzaChwKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IGNvb2sgPSBuZXcgSW1hZ2UoKTtcbiAgICBzZXRDbGFzcyhjb29rLCBcImF2aVwiKTtcbiAgICBjaGllZnMucHVzaChjb29rKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXRDbGFzcyhuYW1lLCBcIm5hbWVcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb29rXCIpO1xuICAgIG5hbWVzLnB1c2gobmFtZSk7XG4gICAgY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XG4gIH1cblxuICBjaGllZnNbMF0uc3JjID0gQ2hlZjE7XG4gIGNoaWVmc1sxXS5zcmMgPSBDaGVmMjtcbiAgY2hpZWZzWzJdLnNyYyA9IENoZWYzO1xuICBjaGllZnNbM10uc3JjID0gQ2hlZjQ7XG4gIGNoaWVmc1s0XS5zcmMgPSBDaGVmNTtcbiAgbmFtZXNbMF0udGV4dENvbnRlbnQgPSBcIk1hcnRpbmFcIjtcbiAgbmFtZXNbMV0udGV4dENvbnRlbnQgPSBcIkFydGh1clwiO1xuICBuYW1lc1syXS50ZXh0Q29udGVudCA9IFwiUGFsbWVyXCI7XG4gIG5hbWVzWzNdLnRleHRDb250ZW50ID0gXCJEdXRjaFwiO1xuICBuYW1lc1s0XS50ZXh0Q29udGVudCA9IFwiRGV2aW5cIjtcblxuICBzZXRDbGFzcyhjb29rcywgXCJjb29rc1wiKTtcbiAgc2V0Q2xhc3MoY29va3NUaXRsZSwgXCJjb29rc1RpdGxlXCIpO1xuICBjb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lciwgaW5kZXgpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZXNbaW5kZXhdKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpZWZzW2luZGV4XSk7XG4gIH0pO1xuXG4gIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiBjb29rcy5hcHBlbmQoY29udGFpbmVyKSk7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGlueSBUYXN0ZXNcIjtcbiAgcGFyYVswXS50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lIHRvIFRpbnkgVGFzdGVzLCB3aGVyZSBzbWFsbCBiaXRlcyBwYWNrIGEgY29zbWljIHB1bmNoISBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgbXVsdGl2ZXJzZSwgb3VyIHJlc3RhdXJhbnQgdGFrZXMgeW91IG9uIGFuIGludGVyZ2FsYWN0aWMgam91cm5leSB0aHJvdWdoIGZsYXZvci4gRnJvbSBtaW5pYXR1cmUgbWFydmVscyB0byBiaXRlLXNpemVkIHdvbmRlcnMsIGVhY2ggZGlzaCBpcyBhIHBvcnRhbCB0byBjdWxpbmFyeSBkZWxpZ2h0LiBTdGVwIGludG8gb3VyIGRpbWVuc2lvbiBhbmQgc2F2b3IgdGhlIHVuaXZlcnNlJ3Mgc21hbGxlc3QsIHlldCBtb3N0IHVuZm9yZ2V0dGFibGUsIGdhc3Ryb25vbWljIGFkdmVudHVyZXMuIEpvaW4gdXMgYXQgJ1RpbnkgVGFzdGVzJ+KAlHdoZXJlIGV2ZXJ5IGJpdGUgaXMgYW4gZXBpYyBvZHlzc2V5IVwiO1xuXG4gIHBhcmFbMV0udGV4dENvbnRlbnQgPVxuICAgIFwiRW1iYXJrIG9uIGEgY3VsaW5hcnkgdm95YWdlIHRocm91Z2ggdGhlIGNvc21vcyBhdCAnTWljcm8gTXVuY2hpZXMsJyB3aGVyZSBmbGF2b3Iga25vd3Mgbm8gYm91bmRzIGFuZCBldmVyeSBkaXNoIGlzIGEgdW5pdmVyc2UgdW50byBpdHNlbGYuIE91ciB0aW55IHRpdGFucyBvZiB0YXN0ZSBkZWZ5IHRoZSBsYXdzIG9mIGRpbWVuc2lvbmFsaXR5LCBwYWNraW5nIGEgdW5pdmVyc2Ugb2YgZmxhdm9ycyBpbnRvIGV2ZXJ5IHBldGl0ZSBwb3J0aW9uLiBGcm9tIG91ciBxdWFudHVtIHF1aWNoZXMgdG8gb3VyIHN1YmF0b21pYyBzbGlkZXJzLCBlYWNoIGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSBjcmFmdGVkIHdpdGggY29zbWljIGNhcmUuIEpvaW4gdXMgYXQgJ01pY3JvIE11bmNoaWVzLCcgd2hlcmUgYmlnIGZsYXZvciBjb21lcyBpbiBzbWFsbCBwYWNrYWdlcywgYW5kIGV2ZXJ5IGJpdGUgaXMgYSBqb3VybmV5IHRocm91Z2ggdGhlIGluZmluaXRlIGV4cGFuc2Ugb2YgdGFzdGUuXCI7XG5cbiAgcGFyYVsyXS50ZXh0Q29udGVudCA9XG4gICAgXCJBdCBSZXN0YXVyYW50IFRpbnkgQml0ZXMsIGNyYWZ0aW5nIG91ciBtZWFscyBpcyBhIG1ldGljdWxvdXMgYXJ0IGZvcm0sIGluZnVzZWQgd2l0aCBwYXNzaW9uIGFuZCBjcmVhdGl2aXR5LiBXZSBiZWdpbiBieSBzb3VyY2luZyBvbmx5IHRoZSBmcmVzaGVzdCwgZmluZXN0IGluZ3JlZGllbnRzIGZyb20gbG9jYWwgZmFybWVycyBhbmQgdHJ1c3RlZCBzdXBwbGllcnMsIGVuc3VyaW5nIGVhY2ggY29tcG9uZW50IGNvbnRyaWJ1dGVzIHRvIGEgc3ltcGhvbnkgb2YgZmxhdm9ycy4gT3VyIGNoZWZzLCBza2lsbGVkIGFydGlzYW5zIG9mIHRoZSBjdWxpbmFyeSByZWFsbSwgZW1iYXJrIG9uIGEgam91cm5leSBvZiBleHBlcmltZW50YXRpb24gYW5kIGlubm92YXRpb24sIGNvbnN0YW50bHkgcHVzaGluZyBib3VuZGFyaWVzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCB0YW50YWxpemUgdGhlIHRhc3RlIGJ1ZHMgYW5kIGlnbml0ZSB0aGUgc2Vuc2VzLiBFdmVyeSByZWNpcGUgaXMgYSBsYWJvciBvZiBsb3ZlLCBtZXRpY3Vsb3VzbHkgY3JhZnRlZCB3aXRoIGF0dGVudGlvbiB0byBkZXRhaWwgYW5kIGFuIHVud2F2ZXJpbmcgY29tbWl0bWVudCB0byBxdWFsaXR5LiBGcm9tIGRlbGljYXRlIGFwcGV0aXplcnMgdG8gaGVhcnR5IG1haW5zIGFuZCBkZWNhZGVudCBkZXNzZXJ0cywgZWFjaCBkaXNoIHRlbGxzIGEgc3RvcnksIGEgbmFycmF0aXZlIG9mIHRyYWRpdGlvbiwgaW5ub3ZhdGlvbiwgYW5kIGdhc3Ryb25vbWljIGRlbGlnaHQuXCI7XG5cbiAgcGFyYVszXS50ZXh0Q29udGVudCA9XG4gICAgXCIgV2Ugc3RyaXZlIHRvIGNhdGVyIHRvIGRpdmVyc2UgcGFsYXRlcyBhbmQgZGlldGFyeSBwcmVmZXJlbmNlcywgb2ZmZXJpbmcgYSB3aWRlIGFycmF5IG9mIG9wdGlvbnMgdGhhdCBjYXRlciB0byB2ZWdldGFyaWFucywgdmVnYW5zLCBhbmQgbWVhdCBsb3ZlcnMgYWxpa2UuIFByZXNlbnRhdGlvbiBpcyBwYXJhbW91bnQgYXQgVGlueSBCaXRlcywgd2l0aCBlYWNoIHBsYXRlIG1ldGljdWxvdXNseSBhcnJhbmdlZCB0byBjYXB0aXZhdGUgbm90IG9ubHkgdGhlIHBhbGF0ZSBidXQgYWxzbyB0aGUgZXllLiBPdXIgZGVkaWNhdGlvbiB0byBleGNlbGxlbmNlIGV4dGVuZHMgYmV5b25kIHRoZSBraXRjaGVuLCB3aXRoIGF0dGVudGl2ZSBzdGFmZiBwcm92aWRpbmcgaW1wZWNjYWJsZSBzZXJ2aWNlLCBlbnN1cmluZyBldmVyeSBkaW5pbmcgZXhwZXJpZW5jZSBpcyBtZW1vcmFibGUgYW5kIGV4dHJhb3JkaW5hcnkuIEF0IFRpbnkgQml0ZXMsIHdlIGJlbGlldmUgdGhhdCBhIG1lYWwgaXMgbm90IGp1c3Qgc3VzdGVuYW5jZTsgaXQgaXMgYW4gZXhwZXJpZW5jZSB0byBiZSBzYXZvcmVkLCBzaGFyZWQsIGFuZCBjaGVyaXNoZWQuIEpvaW4gdXMgb24gYSBjdWxpbmFyeSBhZHZlbnR1cmUgd2hlcmUgZXZlcnkgYml0ZSBpcyBhIGpvdXJuZXkgaW50byB0aGUgc3VibGltZSwgd2hlcmUgZmxhdm9ycyBkYW5jZSBvbiB0aGUgcGFsYXRlIGFuZCBtZW1vcmllcyBhcmUgbWFkZSB0byBsYXN0IGEgbGlmZXRpbWUuIFwiO1xuICBjb250ZW50LmFwcGVuZChcbiAgICBoZWFkaW5nLFxuICAgIHBhcmFbMF0sXG4gICAgcGFyYVsxXSxcbiAgICBwYXJhWzJdLFxuICAgIHBhcmFbM10sXG4gICAgY29va3NUaXRsZSxcbiAgICBjb29rc1xuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkTWFpbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9