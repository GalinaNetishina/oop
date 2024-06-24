
import canIterate from "./canIterate.js";

console.assert(canIterate(new Map())==true, 'Map is iterable'); 
console.assert(canIterate(new Set())==true, 'Set is iterable'); 
console.assert(canIterate(null) ==false, 'null is not iterable'); 
console.assert(canIterate(10)==false, 'integer is not iterable'); 
console.assert(canIterate("Netology")==true, 'String is iterable'); 