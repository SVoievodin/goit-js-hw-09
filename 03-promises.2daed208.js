!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)})).then((function(e){var n=e.position,t=e.delay;o.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;o.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget[0].valueAsNumber,t=e.currentTarget[1].valueAsNumber,r=e.currentTarget[2].valueAsNumber,o=1;o<=r;o+=1)i(o,n),n+=t;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.2daed208.js.map
