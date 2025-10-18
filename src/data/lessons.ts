import { Lesson } from '@/types';

export const lessons: Lesson[] = [
  // JavaScript Lessons (1-50)
  {
    id: 1,
    title: "Declaring Variables",
    language: "javascript",
    difficulty: "easy",
    category: "Variables",
    estimatedTime: 2,
    description: "Learn basic variable declaration in JavaScript",
    code: `let name = "John";
const age = 25;
var city = "New York";`
  },
  {
    id: 2,
    title: "Conditional Statements",
    language: "javascript",
    difficulty: "easy",
    category: "Control Flow",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`
  },
  {
    id: 3,
    title: "For Loops",
    language: "javascript",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for loop iteration",
    code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
  },
  {
    id: 4,
    title: "Functions",
    language: "javascript",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 4,
    description: "Basic function declaration and arrow functions",
    code: `function greet(name) {
  return "Hello, " + name;
}

const add = (a, b) => a + b;`
  },
  {
    id: 5,
    title: "Arrays",
    language: "javascript",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 3,
    description: "Array creation and manipulation",
    code: `const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits[0]);`
  },
  {
    id: 6,
    title: "Objects",
    language: "javascript",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Object creation and property access",
    code: `let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);
person.age = 31;`
  },
  {
    id: 7,
    title: "String Methods",
    language: "javascript",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Common string manipulation methods",
    code: `let str = "Hello World";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.substring(0, 5));`
  },
  {
    id: 8,
    title: "Math Operations",
    language: "javascript",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic mathematical operations",
    code: `let num = 3.14159;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.random());`
  },
  {
    id: 9,
    title: "Array Methods",
    language: "javascript",
    difficulty: "medium",
    category: "Data Structures",
    estimatedTime: 5,
    description: "forEach, map, filter, and reduce",
    code: `let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));
let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);`
  },
  {
    id: 10,
    title: "Destructuring",
    language: "javascript",
    difficulty: "medium",
    category: "ES6 Features",
    estimatedTime: 4,
    description: "Array and object destructuring",
    code: `let person = { name: "John", age: 30, city: "NYC" };
let { name, age } = person;

let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;`
  },
  {
    id: 11,
    title: "Promises",
    language: "javascript",
    difficulty: "medium",
    category: "Async Programming",
    estimatedTime: 6,
    description: "Promise creation and handling",
    code: `let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});`
  },
  {
    id: 12,
    title: "Async/Await",
    language: "javascript",
    difficulty: "medium",
    category: "Async Programming",
    estimatedTime: 5,
    description: "Modern async/await syntax",
    code: `async function fetchData() {
  try {
    let response = await fetch("/api/data");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}`
  },
  {
    id: 13,
    title: "Classes",
    language: "javascript",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 6,
    description: "ES6 class syntax",
    code: `class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return "Hello, " + this.name;
  }
}

let person = new Person("Alice");`
  },
  {
    id: 14,
    title: "Modules",
    language: "javascript",
    difficulty: "medium",
    category: "Modules",
    estimatedTime: 4,
    description: "ES6 module imports and exports",
    code: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';
console.log(add(5, 3));`
  },
  {
    id: 15,
    title: "Closures",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 7,
    description: "Understanding closures and scope",
    code: `function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

let addFive = outerFunction(5);
console.log(addFive(3)); // 8`
  },
  {
    id: 16,
    title: "Prototypes",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 8,
    description: "JavaScript prototype chain",
    code: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello, " + this.name;
};

let john = new Person("John");
console.log(john.greet());`
  },
  {
    id: 17,
    title: "Event Handling",
    language: "javascript",
    difficulty: "medium",
    category: "DOM",
    estimatedTime: 5,
    description: "DOM event listeners",
    code: `let button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  console.log("Button clicked!");
  event.preventDefault();
});`
  },
  {
    id: 18,
    title: "Local Storage",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 4,
    description: "Browser storage API",
    code: `localStorage.setItem("username", "john");
let username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");`
  },
  {
    id: 19,
    title: "Fetch API",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 6,
    description: "Making HTTP requests",
    code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`
  },
  {
    id: 20,
    title: "Regular Expressions",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 8,
    description: "Pattern matching with regex",
    code: `let text = "Hello World 123";
let pattern = /\d+/g;
let matches = text.match(pattern);
console.log(matches); // ["123"]

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValidEmail = emailPattern.test("user@example.com");`
  },
  {
    id: 21,
    title: "Template Literals",
    language: "javascript",
    difficulty: "easy",
    category: "ES6 Features",
    estimatedTime: 3,
    description: "String interpolation with template literals",
    code: `let name = "John";
let age = 25;
let message = \`Hello, my name is \${name} and I'm \${age} years old\`;
console.log(message);

let multiline = \`This is a
multiline string
using template literals\`;`
  },
  {
    id: 22,
    title: "Object Destructuring",
    language: "javascript",
    difficulty: "medium",
    category: "ES6 Features",
    estimatedTime: 4,
    description: "Extracting values from objects",
    code: `let person = { name: "Alice", age: 30, city: "NYC" };
let { name, age, city } = person;

// With default values
let { name: fullName, country = "USA" } = person;

// Nested destructuring
let user = { id: 1, profile: { name: "Bob", email: "bob@example.com" } };
let { profile: { name: userName, email } } = user;`
  },
  {
    id: 23,
    title: "Array Destructuring",
    language: "javascript",
    difficulty: "easy",
    category: "ES6 Features",
    estimatedTime: 3,
    description: "Extracting values from arrays",
    code: `let colors = ["red", "green", "blue"];
let [first, second, third] = colors;

// Skipping elements
let [primary, , tertiary] = colors;

// Rest operator
let [head, ...tail] = colors;

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];`
  },
  {
    id: 24,
    title: "Default Parameters",
    language: "javascript",
    difficulty: "easy",
    category: "ES6 Features",
    estimatedTime: 3,
    description: "Function parameters with default values",
    code: `function greet(name = "World") {
  return \`Hello, \${name}!\`;
}

function createUser(name, age = 18, isActive = true) {
  return { name, age, isActive };
}

// Using expressions as defaults
function getCurrentYear() {
  return new Date().getFullYear();
}

function createProfile(name, birthYear = getCurrentYear() - 18) {
  return { name, age: getCurrentYear() - birthYear };
}`
  },
  {
    id: 25,
    title: "Rest Parameters",
    language: "javascript",
    difficulty: "medium",
    category: "ES6 Features",
    estimatedTime: 4,
    description: "Variable number of function arguments",
    code: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

function logMessage(message, ...args) {
  console.log(message, ...args);
}

logMessage("Debug:", "error", 404, { status: "failed" });`
  },
  {
    id: 26,
    title: "Spread Operator",
    language: "javascript",
    difficulty: "medium",
    category: "ES6 Features",
    estimatedTime: 4,
    description: "Expanding arrays and objects",
    code: `// Array spreading
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];

// Object spreading
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };

// Function calls
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);`
  },
  {
    id: 27,
    title: "Symbols",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 6,
    description: "Unique identifiers and private properties",
    code: `// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol("description");

// Using symbols as object keys
let obj = {};
let key = Symbol("key");
obj[key] = "value";

// Well-known symbols
let iterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};`
  },
  {
    id: 28,
    title: "Sets",
    language: "javascript",
    difficulty: "medium",
    category: "Data Structures",
    estimatedTime: 5,
    description: "Collection of unique values",
    code: `let mySet = new Set();

// Adding values
mySet.add(1);
mySet.add("hello");
mySet.add({ name: "John" });

// Checking if value exists
console.log(mySet.has(1)); // true

// Set size
console.log(mySet.size); // 3

// Converting array to set (removes duplicates)
let numbers = [1, 2, 2, 3, 3, 4];
let uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]`
  },
  {
    id: 29,
    title: "Maps",
    language: "javascript",
    difficulty: "medium",
    category: "Data Structures",
    estimatedTime: 5,
    description: "Key-value pairs with any type of key",
    code: `let myMap = new Map();

// Adding key-value pairs
myMap.set("name", "John");
myMap.set(1, "one");
myMap.set({ id: 1 }, "object key");

// Getting values
console.log(myMap.get("name")); // "John"

// Checking if key exists
console.log(myMap.has("name")); // true

// Map size
console.log(myMap.size); // 3

// Iterating over map
for (let [key, value] of myMap) {
  console.log(key, value);
}`
  },
  {
    id: 30,
    title: "WeakMap and WeakSet",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 6,
    description: "Memory-efficient collections",
    code: `// WeakMap - keys must be objects
let weakMap = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, "data1");
weakMap.set(obj2, "data2");

console.log(weakMap.get(obj1)); // "data1"

// WeakSet - only objects as values
let weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

// These collections allow garbage collection of keys/values`
  },
  {
    id: 31,
    title: "Proxy",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 8,
    description: "Intercepting object operations",
    code: `let target = { name: "John", age: 30 };

let proxy = new Proxy(target, {
  get(target, property) {
    console.log(\`Getting \${property}\`);
    return target[property];
  },
  set(target, property, value) {
    console.log(\`Setting \${property} to \${value}\`);
    target[property] = value;
    return true;
  }
});

proxy.name; // "Getting name"
proxy.age = 31; // "Setting age to 31"`
  },
  {
    id: 32,
    title: "Reflect",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 6,
    description: "Reflection API for object operations",
    code: `let obj = { name: "John", age: 30 };

// Reflect methods
console.log(Reflect.has(obj, "name")); // true
console.log(Reflect.get(obj, "name")); // "John"

Reflect.set(obj, "city", "NYC");
console.log(Reflect.get(obj, "city")); // "NYC"

// Getting property names
let keys = Reflect.ownKeys(obj);
console.log(keys); // ["name", "age", "city"]

// Deleting properties
Reflect.deleteProperty(obj, "age");
console.log(obj); // { name: "John", city: "NYC" }`
  },
  {
    id: 33,
    title: "Generators",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 7,
    description: "Functions that can pause and resume",
    code: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with parameters
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1`
  },
  {
    id: 34,
    title: "Iterators",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 6,
    description: "Custom iteration behavior",
    code: `let iterable = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let value of iterable) {
  console.log(value);
}`
  },
  {
    id: 35,
    title: "Web Workers",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 8,
    description: "Background thread execution",
    code: `// main.js
let worker = new Worker('worker.js');

worker.postMessage({ data: [1, 2, 3, 4, 5] });

worker.onmessage = function(event) {
  console.log('Result:', event.data);
};

// worker.js
self.onmessage = function(event) {
  let data = event.data.data;
  let result = data.reduce((sum, num) => sum + num, 0);
  self.postMessage(result);
};`
  },
  {
    id: 36,
    title: "Service Workers",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 9,
    description: "Background scripts for PWA",
    code: `// service-worker.js
self.addEventListener('install', function(event) {
  console.log('Service Worker installing');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});`
  },
  {
    id: 37,
    title: "IndexedDB",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 8,
    description: "Client-side database",
    code: `let request = indexedDB.open('MyDatabase', 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;
  let store = db.createObjectStore('users', { keyPath: 'id' });
  store.createIndex('name', 'name', { unique: false });
};

request.onsuccess = function(event) {
  let db = event.target.result;
  let transaction = db.transaction(['users'], 'readwrite');
  let store = transaction.objectStore('users');
  
  store.add({ id: 1, name: 'John', email: 'john@example.com' });
};`
  },
  {
    id: 38,
    title: "Canvas API",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 8,
    description: "2D graphics rendering",
    code: `let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Drawing shapes
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);

ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeRect(50, 50, 100, 100);

// Drawing text
ctx.fillStyle = 'black';
ctx.font = '20px Arial';
ctx.fillText('Hello Canvas!', 10, 150);`
  },
  {
    id: 39,
    title: "WebGL",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 10,
    description: "3D graphics rendering",
    code: `let canvas = document.getElementById('glCanvas');
let gl = canvas.getContext('webgl');

// Vertex shader source
let vertexShaderSource = \`
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
\`;

// Fragment shader source
let fragmentShaderSource = \`
  precision mediump float;
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
\`;`
  },
  {
    id: 40,
    title: "Web Audio API",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 9,
    description: "Audio processing and synthesis",
    code: `let audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create oscillator
let oscillator = audioContext.createOscillator();
let gainNode = audioContext.createGain();

// Connect nodes
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

// Configure oscillator
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

// Start and stop
oscillator.start();
setTimeout(() => oscillator.stop(), 1000);`
  },
  {
    id: 41,
    title: "Geolocation API",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 5,
    description: "Getting user location",
    code: `if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
      console.log('Accuracy:', position.coords.accuracy);
    },
    function(error) {
      console.error('Error getting location:', error.message);
    }
  );
} else {
  console.log('Geolocation not supported');
}`
  },
  {
    id: 42,
    title: "Notification API",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 5,
    description: "Browser notifications",
    code: `// Request permission
if (Notification.permission === 'default') {
  Notification.requestPermission();
}

// Create notification
if (Notification.permission === 'granted') {
  let notification = new Notification('Hello!', {
    body: 'This is a test notification',
    icon: '/icon.png',
    tag: 'test-notification'
  });
  
  notification.onclick = function() {
    console.log('Notification clicked');
  };
}`
  },
  {
    id: 43,
    title: "WebRTC",
    language: "javascript",
    difficulty: "hard",
    category: "Web APIs",
    estimatedTime: 10,
    description: "Real-time communication",
    code: `// Get user media
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(function(stream) {
    let video = document.getElementById('localVideo');
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Error accessing media:', error);
  });

// Create peer connection
let peerConnection = new RTCPeerConnection({
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
});`
  },
  {
    id: 44,
    title: "WebSocket",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 6,
    description: "Real-time bidirectional communication",
    code: `let socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(event) {
  console.log('Connected to server');
  socket.send('Hello Server!');
};

socket.onmessage = function(event) {
  console.log('Message from server:', event.data);
};

socket.onclose = function(event) {
  console.log('Connection closed');
};

socket.onerror = function(error) {
  console.error('WebSocket error:', error);
};`
  },
  {
    id: 45,
    title: "Web Components",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 8,
    description: "Custom HTML elements",
    code: `class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = \`
      <style>
        :host { display: block; }
        .container { padding: 20px; }
      </style>
      <div class="container">
        <h2>My Custom Component</h2>
        <slot></slot>
      </div>
    \`;
  }
}

customElements.define('my-component', MyComponent);`
  },
  {
    id: 46,
    title: "Shadow DOM",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 7,
    description: "Encapsulated DOM and styling",
    code: `class ShadowComponent extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    
    let style = document.createElement('style');
    style.textContent = \`
      .container { background: lightblue; padding: 10px; }
      .title { color: darkblue; font-weight: bold; }
    \`;
    
    let container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = \`
      <div class="title">Shadow DOM Content</div>
      <slot></slot>
    \`;
    
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define('shadow-component', ShadowComponent);`
  },
  {
    id: 47,
    title: "Custom Elements Lifecycle",
    language: "javascript",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 6,
    description: "Lifecycle hooks for custom elements",
    code: `class LifecycleComponent extends HTMLElement {
  constructor() {
    super();
    console.log('Constructor called');
  }
  
  connectedCallback() {
    console.log('Element added to DOM');
    this.innerHTML = '<p>Component is connected</p>';
  }
  
  disconnectedCallback() {
    console.log('Element removed from DOM');
  }
  
  adoptedCallback() {
    console.log('Element moved to new document');
  }
  
  static get observedAttributes() {
    return ['name', 'age'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(\`Attribute \${name} changed from \${oldValue} to \${newValue}\`);
  }
}

customElements.define('lifecycle-component', LifecycleComponent);`
  },
  {
    id: 48,
    title: "Intersection Observer",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 6,
    description: "Observing element visibility",
    code: `let observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      console.log('Element is visible');
      entry.target.classList.add('visible');
    } else {
      console.log('Element is not visible');
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '0px'
});

// Observe elements
let elements = document.querySelectorAll('.observe-me');
elements.forEach(function(element) {
  observer.observe(element);
});`
  },
  {
    id: 49,
    title: "Resize Observer",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 5,
    description: "Observing element size changes",
    code: `let resizeObserver = new ResizeObserver(function(entries) {
  entries.forEach(function(entry) {
    console.log('Element resized:', entry.contentRect);
    console.log('Width:', entry.contentRect.width);
    console.log('Height:', entry.contentRect.height);
  });
});

// Observe element
let element = document.getElementById('resizable');
resizeObserver.observe(element);`
  },
  {
    id: 50,
    title: "Mutation Observer",
    language: "javascript",
    difficulty: "medium",
    category: "Web APIs",
    estimatedTime: 6,
    description: "Observing DOM changes",
    code: `let mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      console.log('Child nodes changed');
    }
    if (mutation.type === 'attributes') {
      console.log('Attributes changed:', mutation.attributeName);
    }
  });
});

// Observe element
let element = document.getElementById('observe-me');
mutationObserver.observe(element, {
  childList: true,
  attributes: true,
  subtree: true
});`
  },

  // Python Lessons (51-100)
  {
    id: 21,
    title: "Python Variables",
    language: "python",
    difficulty: "easy",
    category: "Variables",
    estimatedTime: 2,
    description: "Basic variable assignment in Python",
    code: `name = "John"
age = 25
is_student = True
height = 5.9`
  },
  {
    id: 22,
    title: "Python Data Types",
    language: "python",
    difficulty: "easy",
    category: "Data Types",
    estimatedTime: 3,
    description: "Understanding Python data types",
    code: `# Numbers
num_int = 42
num_float = 3.14

# Strings
text = "Hello World"
multiline = """This is a
multiline string"""

# Boolean
is_true = True
is_false = False`
  },
  {
    id: 23,
    title: "Python Lists",
    language: "python",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "List creation and manipulation",
    code: `fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

# Accessing elements
print(fruits[0])  # apple
print(fruits[-1])  # orange

# Adding elements
fruits.append("grape")
fruits.insert(1, "mango")`
  },
  {
    id: 24,
    title: "Python Dictionaries",
    language: "python",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Dictionary creation and usage",
    code: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])
print(person.get("age", 0))

# Adding new key-value pairs
person["email"] = "john@example.com"`
  },
  {
    id: 25,
    title: "Python Functions",
    language: "python",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 4,
    description: "Function definition and calls",
    code: `def greet(name):
    return f"Hello, {name}!"

def add_numbers(a, b):
    return a + b

# Function with default parameters
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"`
  },
  {
    id: 26,
    title: "Python Loops",
    language: "python",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 4,
    description: "For and while loops",
    code: `# For loop
for i in range(5):
    print(i)

# For loop with list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1`
  },
  {
    id: 27,
    title: "Python Conditionals",
    language: "python",
    difficulty: "easy",
    category: "Control Flow",
    estimatedTime: 3,
    description: "If-elif-else statements",
    code: `age = 20

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

# Ternary operator
status = "adult" if age >= 18 else "minor"`
  },
  {
    id: 28,
    title: "Python List Comprehensions",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 5,
    description: "Efficient list creation",
    code: `# Basic list comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested list comprehension
matrix = [[i + j for j in range(3)] for i in range(3)]`
  },
  {
    id: 29,
    title: "Python Classes",
    language: "python",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 6,
    description: "Object-oriented programming",
    code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    def have_birthday(self):
        self.age += 1

person = Person("Alice", 25)
print(person.greet())`
  },
  {
    id: 30,
    title: "Python File Handling",
    language: "python",
    difficulty: "medium",
    category: "File I/O",
    estimatedTime: 5,
    description: "Reading and writing files",
    code: `# Writing to file
with open("data.txt", "w") as file:
    file.write("Hello World!")
    file.write("\\nThis is line 2")

# Reading from file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())`
  },
  {
    id: 31,
    title: "Python Exception Handling",
    language: "python",
    difficulty: "medium",
    category: "Error Handling",
    estimatedTime: 5,
    description: "Try-except blocks",
    code: `try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs")`
  },
  {
    id: 32,
    title: "Python Modules",
    language: "python",
    difficulty: "medium",
    category: "Modules",
    estimatedTime: 4,
    description: "Importing and creating modules",
    code: `# Importing modules
import math
import random
from datetime import datetime

# Using imported functions
print(math.sqrt(16))
print(random.randint(1, 10))
print(datetime.now())

# Creating a module
# math_utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b`
  },
  {
    id: 33,
    title: "Python Generators",
    language: "python",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Generator functions and expressions",
    code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Using generator
for num in fibonacci(10):
    print(num)

# Generator expression
squares = (x**2 for x in range(10))
print(list(squares))`
  },
  {
    id: 34,
    title: "Python Decorators",
    language: "python",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Function decorators",
    code: `def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

result = slow_function()`
  },
  {
    id: 35,
    title: "Python Lambda Functions",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 4,
    description: "Anonymous functions",
    code: `# Basic lambda
square = lambda x: x**2
print(square(5))

# Lambda with map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))

# Lambda with filter
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Lambda with sorted
students = [("Alice", 85), ("Bob", 90), ("Charlie", 78)]
sorted_students = sorted(students, key=lambda x: x[1])`
  },
  {
    id: 36,
    title: "Python Tuples",
    language: "python",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 3,
    description: "Immutable sequences",
    code: `# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single_tuple = (42,)

# Accessing elements
print(coordinates[0])  # 10
print(colors[-1])      # blue

# Tuple unpacking
x, y = coordinates
print(f"x: {x}, y: {y}")

# Tuple methods
print(colors.count("red"))  # 1
print(colors.index("green"))  # 1`
  },
  {
    id: 37,
    title: "Python Sets",
    language: "python",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Unordered unique elements",
    code: `# Creating sets
fruits = {"apple", "banana", "orange"}
numbers = set([1, 2, 3, 4, 5])

# Adding elements
fruits.add("grape")
fruits.update(["kiwi", "mango"])

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2
intersection = set1 & set2
difference = set1 - set2

print(union)        # {1, 2, 3, 4, 5, 6}
print(intersection) # {3, 4}
print(difference)   # {1, 2}`
  },
  {
    id: 38,
    title: "Python Dictionaries Advanced",
    language: "python",
    difficulty: "medium",
    category: "Data Structures",
    estimatedTime: 5,
    description: "Advanced dictionary operations",
    code: `# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Nested dictionaries
students = {
    "Alice": {"age": 20, "grade": "A"},
    "Bob": {"age": 19, "grade": "B"}
}

# Dictionary methods
person = {"name": "John", "age": 30, "city": "NYC"}
print(person.keys())    # dict_keys(['name', 'age', 'city'])
print(person.values())  # dict_values(['John', 30, 'NYC'])
print(person.items())   # dict_items([('name', 'John'), ('age', 30), ('city', 'NYC')])`
  },
  {
    id: 39,
    title: "Python String Methods",
    language: "python",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 4,
    description: "Common string operations",
    code: `text = "  Hello World  "

# Basic methods
print(text.strip())           # "Hello World"
print(text.upper())           # "  HELLO WORLD  "
print(text.lower())           # "  hello world  "
print(text.replace("World", "Python"))  # "  Hello Python  "

# Checking methods
print("Hello".isalpha())      # True
print("123".isdigit())        # True
print("Hello123".isalnum())   # True

# Splitting and joining
words = "apple,banana,orange".split(",")
joined = "-".join(words)
print(joined)  # "apple-banana-orange"`
  },
  {
    id: 40,
    title: "Python List Comprehensions Advanced",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 6,
    description: "Complex list comprehensions",
    code: `# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [item for row in matrix for item in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Conditional list comprehension
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Dictionary comprehension with condition
squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Set comprehension
unique_lengths = {len(word) for word in ["hello", "world", "python"]}
print(unique_lengths)  # {5, 6}`
  },
  {
    id: 41,
    title: "Python Generators Advanced",
    language: "python",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Advanced generator patterns",
    code: `# Generator with send()
def counter():
    count = 0
    while True:
        increment = yield count
        if increment is not None:
            count += increment
        else:
            count += 1

gen = counter()
print(next(gen))        # 0
print(gen.send(5))      # 5
print(next(gen))        # 6

# Generator expression
squares = (x**2 for x in range(10))
print(list(squares))    # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Generator with yield from
def flatten(nested_list):
    for item in nested_list:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

nested = [1, [2, 3], [4, [5, 6]]]
print(list(flatten(nested)))  # [1, 2, 3, 4, 5, 6]`
  },
  {
    id: 42,
    title: "Python Context Managers",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 6,
    description: "Resource management with context managers",
    code: `# Using with statement
with open("data.txt", "w") as file:
    file.write("Hello World")

# Custom context manager
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        print(f"Elapsed time: {time.time() - self.start:.2f} seconds")

with Timer():
    # Some code here
    sum(range(1000000))

# Using contextlib
from contextlib import contextmanager

@contextmanager
def temporary_change(obj, attr, new_value):
    old_value = getattr(obj, attr)
    setattr(obj, attr, new_value)
    try:
        yield
    finally:
        setattr(obj, attr, old_value)`
  },
  {
    id: 43,
    title: "Python Property Decorators",
    language: "python",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 5,
    description: "Using property decorators for getters and setters",
    code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2
    
    @property
    def diameter(self):
        return 2 * self._radius

circle = Circle(5)
print(circle.radius)    # 5
print(circle.area)      # 78.54
print(circle.diameter)  # 10

circle.radius = 10
print(circle.area)      # 314.16`
  },
  {
    id: 44,
    title: "Python Metaclasses",
    language: "python",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 9,
    description: "Understanding metaclasses",
    code: `# Simple metaclass
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Singleton(metaclass=SingletonMeta):
    def __init__(self, value):
        self.value = value

# Both instances are the same
s1 = Singleton("first")
s2 = Singleton("second")
print(s1 is s2)  # True

# Metaclass for automatic registration
class RegistryMeta(type):
    def __new__(cls, name, bases, attrs):
        new_class = super().__new__(cls, name, bases, attrs)
        if hasattr(new_class, 'register'):
            new_class.register()
        return new_class

class Plugin(metaclass=RegistryMeta):
    _plugins = []
    
    @classmethod
    def register(cls):
        cls._plugins.append(cls)
    
    def process(self, data):
        raise NotImplementedError

class TextPlugin(Plugin):
    def process(self, data):
        return f"Text: {data}"

class ImagePlugin(Plugin):
    def process(self, data):
        return f"Image: {data}"`
  },
  {
    id: 45,
    title: "Python Descriptors",
    language: "python",
    difficulty: "hard",
    category: "Advanced Concepts",
    estimatedTime: 8,
    description: "Understanding descriptors",
    code: `class ValidatedAttribute:
    def __init__(self, validator):
        self.validator = validator
        self.name = None
    
    def __set_name__(self, owner, name):
        self.name = name
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name)
    
    def __set__(self, instance, value):
        if not self.validator(value):
            raise ValueError(f"Invalid value: {value}")
        instance.__dict__[self.name] = value

def positive_number(value):
    return isinstance(value, (int, float)) and value > 0

class Person:
    age = ValidatedAttribute(positive_number)
    height = ValidatedAttribute(positive_number)
    
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height

person = Person("John", 25, 175.5)
print(person.age)    # 25
print(person.height) # 175.5

# This will raise ValueError
# person.age = -5`
  },
  {
    id: 46,
    title: "Python Async/Await",
    language: "python",
    difficulty: "hard",
    category: "Async Programming",
    estimatedTime: 8,
    description: "Asynchronous programming",
    code: `import asyncio
import aiohttp

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    urls = [
        "https://api.github.com/users/octocat",
        "https://api.github.com/users/torvalds",
        "https://api.github.com/users/gvanrossum"
    ]
    
    # Concurrent execution
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    
    for i, result in enumerate(results):
        print(f"Result {i+1}: {len(result)} characters")

# Run the async function
# asyncio.run(main())

# Async generator
async def async_range(start, stop):
    for i in range(start, stop):
        yield i
        await asyncio.sleep(0.1)

async def consume_async_range():
    async for value in async_range(0, 5):
        print(value)`
  },
  {
    id: 47,
    title: "Python Type Hints",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 6,
    description: "Adding type annotations",
    code: `from typing import List, Dict, Optional, Union, Callable

# Basic type hints
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Function with multiple parameters
def calculate_area(length: float, width: float) -> float:
    return length * width

# List and dictionary type hints
def process_items(items: List[str]) -> Dict[str, int]:
    return {item: len(item) for item in items}

# Optional types
def find_user(user_id: int) -> Optional[Dict[str, str]]:
    users = {1: {"name": "John"}, 2: {"name": "Jane"}}
    return users.get(user_id)

# Union types
def process_id(user_id: Union[int, str]) -> str:
    return str(user_id)

# Callable type hints
def apply_function(func: Callable[[int], int], value: int) -> int:
    return func(value)

# Class with type hints
class User:
    def __init__(self, name: str, age: int, email: Optional[str] = None):
        self.name = name
        self.age = age
        self.email = email
    
    def get_info(self) -> Dict[str, Union[str, int]]:
        return {
            "name": self.name,
            "age": self.age,
            "email": self.email or "No email"
        }`
  },
  {
    id: 48,
    title: "Python Dataclasses",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 5,
    description: "Using dataclasses for data containers",
    code: `from dataclasses import dataclass, field
from typing import List

@dataclass
class Person:
    name: str
    age: int
    email: str = ""
    hobbies: List[str] = field(default_factory=list)
    
    def __post_init__(self):
        if self.age < 0:
            raise ValueError("Age cannot be negative")

@dataclass(frozen=True)
class Point:
    x: float
    y: float
    
    def distance_from_origin(self) -> float:
        import math
        return math.sqrt(self.x**2 + self.y**2)

@dataclass
class Student(Person):
    student_id: str
    gpa: float = 0.0
    
    def is_honor_student(self) -> bool:
        return self.gpa >= 3.5

# Usage
person = Person("Alice", 25, "alice@example.com", ["reading", "coding"])
print(person)  # Person(name='Alice', age=25, email='alice@example.com', hobbies=['reading', 'coding'])

point = Point(3, 4)
print(point.distance_from_origin())  # 5.0

student = Student("Bob", 20, "bob@example.com", ["sports"], "12345", 3.8)
print(student.is_honor_student())  # True`
  },
  {
    id: 49,
    title: "Python Pathlib",
    language: "python",
    difficulty: "medium",
    category: "File I/O",
    estimatedTime: 5,
    description: "Modern path handling",
    code: `from pathlib import Path

# Creating paths
current_dir = Path.cwd()
home_dir = Path.home()
file_path = Path("data") / "file.txt"

# Path operations
print(file_path.exists())        # False
print(file_path.is_file())       # False
print(file_path.is_dir())        # False

# Creating directories
data_dir = Path("data")
data_dir.mkdir(exist_ok=True)

# Writing files
file_path.write_text("Hello, World!")
print(file_path.read_text())     # Hello, World!

# Path properties
print(file_path.name)            # file.txt
print(file_path.stem)            # file
print(file_path.suffix)          # .txt
print(file_path.parent)          # data

# Glob patterns
for py_file in Path(".").glob("*.py"):
    print(f"Python file: {py_file}")

# Recursive search
for py_file in Path(".").rglob("*.py"):
    print(f"Python file: {py_file}")`
  },
  {
    id: 50,
    title: "Python Enum",
    language: "python",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 4,
    description: "Using enumerations",
    code: `from enum import Enum, auto, IntEnum

# Basic enum
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Color.RED)         # Color.RED
print(Color.RED.value)   # 1
print(Color.RED.name)    # RED

# Auto values
class Status(Enum):
    PENDING = auto()
    RUNNING = auto()
    COMPLETED = auto()
    FAILED = auto()

# IntEnum for integer comparison
class Priority(IntEnum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3

# Functional API
Size = Enum('Size', 'SMALL MEDIUM LARGE')
print(Size.SMALL)        # Size.SMALL

# Enum with methods
class Planet(Enum):
    MERCURY = (3.303e+23, 2.4397e6)
    VENUS   = (4.869e+24, 6.0518e6)
    EARTH   = (5.976e+24, 6.37814e6)
    
    def __init__(self, mass, radius):
        self.mass = mass
        self.radius = radius
    
    @property
    def surface_gravity(self):
        G = 6.67300E-11
        return G * self.mass / (self.radius * self.radius)

print(Planet.EARTH.surface_gravity)  # 9.802652743337129`
  },

  // C++ Lessons (101-150)
  {
    id: 46,
    title: "C++ Variables and Types",
    language: "cpp",
    difficulty: "easy",
    category: "Variables",
    estimatedTime: 3,
    description: "Basic variable declaration in C++",
    code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    double height = 5.9;
    char grade = 'A';
    string name = "John";
    bool isStudent = true;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    return 0;
}`
  },
  {
    id: 47,
    title: "C++ Input/Output",
    language: "cpp",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 3,
    description: "Basic input and output operations",
    code: `#include <iostream>
using namespace std;

int main() {
    string name;
    int age;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello " << name << ", you are " << age << " years old." << endl;
    return 0;
}`
  },
  {
    id: 48,
    title: "C++ Control Structures",
    language: "cpp",
    difficulty: "easy",
    category: "Control Flow",
    estimatedTime: 4,
    description: "If-else and switch statements",
    code: `#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter your score: ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 49,
    title: "C++ Loops",
    language: "cpp",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 4,
    description: "For, while, and do-while loops",
    code: `#include <iostream>
using namespace std;

int main() {
    // For loop
    cout << "For loop: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // While loop
    cout << "While loop: ";
    int j = 1;
    while (j <= 5) {
        cout << j << " ";
        j++;
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 50,
    title: "C++ Arrays",
    language: "cpp",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Array declaration and manipulation",
    code: `#include <iostream>
using namespace std;

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Last element: " << numbers[4] << endl;
    
    // Modifying elements
    numbers[0] = 10;
    
    // Printing all elements
    cout << "Array elements: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 51,
    title: "C++ Functions",
    language: "cpp",
    difficulty: "medium",
    category: "Functions",
    estimatedTime: 5,
    description: "Function declaration and definition",
    code: `#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);
void printMessage(string message);

int main() {
    int result = add(5, 3);
    cout << "Sum: " << result << endl;
    
    printMessage("Hello from function!");
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void printMessage(string message) {
    cout << message << endl;
}`
  },
  {
    id: 52,
    title: "C++ Classes",
    language: "cpp",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 6,
    description: "Class definition and objects",
    code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    double width;
    double height;
    
public:
    // Constructor
    Rectangle(double w, double h) : width(w), height(h) {}
    
    // Getter methods
    double getWidth() { return width; }
    double getHeight() { return height; }
    
    // Method
    double getArea() {
        return width * height;
    }
};

int main() {
    Rectangle rect(5.0, 3.0);
    cout << "Area: " << rect.getArea() << endl;
    return 0;
}`
  },
  {
    id: 53,
    title: "C++ Pointers",
    language: "cpp",
    difficulty: "hard",
    category: "Memory Management",
    estimatedTime: 7,
    description: "Pointer declaration and usage",
    code: `#include <iostream>
using namespace std;

int main() {
    int num = 42;
    int* ptr = &num;
    
    cout << "Value: " << num << endl;
    cout << "Address: " << &num << endl;
    cout << "Pointer value: " << ptr << endl;
    cout << "Dereferenced value: " << *ptr << endl;
    
    // Modifying value through pointer
    *ptr = 100;
    cout << "New value: " << num << endl;
    
    return 0;
}`
  },
  {
    id: 54,
    title: "C++ Dynamic Memory",
    language: "cpp",
    difficulty: "hard",
    category: "Memory Management",
    estimatedTime: 8,
    description: "Dynamic memory allocation",
    code: `#include <iostream>
using namespace std;

int main() {
    // Dynamic allocation
    int* arr = new int[5];
    
    // Initialize array
    for (int i = 0; i < 5; i++) {
        arr[i] = i * 2;
    }
    
    // Print array
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Free memory
    delete[] arr;
    
    return 0;
}`
  },
  {
    id: 55,
    title: "C++ STL Vector",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 5,
    description: "Standard Template Library vector",
    code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers;
    
    // Adding elements
    numbers.push_back(1);
    numbers.push_back(2);
    numbers.push_back(3);
    
    // Accessing elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Size: " << numbers.size() << endl;
    
    // Iterating through vector
    for (int i = 0; i < numbers.size(); i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 56,
    title: "C++ STL Map",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 5,
    description: "Key-value pair container",
    code: `#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ages;
    
    // Adding elements
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages["Charlie"] = 35;
    
    // Accessing elements
    cout << "Alice's age: " << ages["Alice"] << endl;
    
    // Checking if key exists
    if (ages.find("David") != ages.end()) {
        cout << "David's age: " << ages["David"] << endl;
    } else {
        cout << "David not found" << endl;
    }
    
    // Iterating through map
    for (auto& pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
    }
    
    return 0;
}`
  },
  {
    id: 57,
    title: "C++ STL Set",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 4,
    description: "Sorted unique elements container",
    code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> numbers;
    
    // Adding elements
    numbers.insert(5);
    numbers.insert(2);
    numbers.insert(8);
    numbers.insert(2); // Duplicate, won't be added
    
    // Checking if element exists
    if (numbers.find(5) != numbers.end()) {
        cout << "5 is in the set" << endl;
    }
    
    // Iterating through set
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Set size
    cout << "Size: " << numbers.size() << endl;
    
    return 0;
}`
  },
  {
    id: 58,
    title: "C++ STL Algorithm",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 6,
    description: "Common STL algorithms",
    code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {5, 2, 8, 1, 9, 3};
    
    // Sorting
    sort(numbers.begin(), numbers.end());
    cout << "Sorted: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Finding element
    auto it = find(numbers.begin(), numbers.end(), 5);
    if (it != numbers.end()) {
        cout << "Found 5 at position: " << distance(numbers.begin(), it) << endl;
    }
    
    // Counting elements
    int count = count_if(numbers.begin(), numbers.end(), [](int n) {
        return n > 5;
    });
    cout << "Numbers greater than 5: " << count << endl;
    
    // Reversing
    reverse(numbers.begin(), numbers.end());
    cout << "Reversed: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 59,
    title: "C++ Function Overloading",
    language: "cpp",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 5,
    description: "Multiple functions with same name",
    code: `#include <iostream>
using namespace std;

// Function overloading
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

// Overloaded constructors
class Rectangle {
private:
    int width, height;
    
public:
    Rectangle() : width(0), height(0) {}
    Rectangle(int w) : width(w), height(w) {}
    Rectangle(int w, int h) : width(w), height(h) {}
    
    int getArea() {
        return width * height;
    }
};

int main() {
    cout << add(5, 3) << endl;        // 8
    cout << add(5.5, 3.2) << endl;    // 8.7
    cout << add(1, 2, 3) << endl;     // 6
    
    Rectangle r1;           // 0x0
    Rectangle r2(5);        // 5x5
    Rectangle r3(4, 6);     // 4x6
    
    cout << "Area: " << r3.getArea() << endl;
    
    return 0;
}`
  },
  {
    id: 60,
    title: "C++ Operator Overloading",
    language: "cpp",
    difficulty: "hard",
    category: "OOP",
    estimatedTime: 7,
    description: "Overloading operators for custom types",
    code: `#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
    
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    
    // Overloading + operator
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
    
    // Overloading - operator
    Complex operator-(const Complex& other) const {
        return Complex(real - other.real, imag - other.imag);
    }
    
    // Overloading << operator (friend function)
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
    
    // Overloading == operator
    bool operator==(const Complex& other) const {
        return real == other.real && imag == other.imag;
    }
};

int main() {
    Complex c1(3, 4);
    Complex c2(1, 2);
    
    Complex c3 = c1 + c2;
    Complex c4 = c1 - c2;
    
    cout << "c1: " << c1 << endl;
    cout << "c2: " << c2 << endl;
    cout << "c1 + c2: " << c3 << endl;
    cout << "c1 - c2: " << c4 << endl;
    
    if (c1 == c2) {
        cout << "c1 equals c2" << endl;
    } else {
        cout << "c1 does not equal c2" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 61,
    title: "C++ Virtual Functions",
    language: "cpp",
    difficulty: "hard",
    category: "OOP",
    estimatedTime: 7,
    description: "Polymorphism with virtual functions",
    code: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void makeSound() {
        cout << "Some generic animal sound" << endl;
    }
    
    virtual ~Animal() {} // Virtual destructor
};

class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        cout << "Meow!" << endl;
    }
};

int main() {
    Animal* animals[3];
    animals[0] = new Animal();
    animals[1] = new Dog();
    animals[2] = new Cat();
    
    for (int i = 0; i < 3; i++) {
        animals[i]->makeSound();
    }
    
    // Clean up
    for (int i = 0; i < 3; i++) {
        delete animals[i];
    }
    
    return 0;
}`
  },
  {
    id: 62,
    title: "C++ Templates",
    language: "cpp",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Generic programming with templates",
    code: `#include <iostream>
using namespace std;

// Function template
template<typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template<typename T>
class Stack {
private:
    T* data;
    int top;
    int capacity;
    
public:
    Stack(int size) : capacity(size), top(-1) {
        data = new T[capacity];
    }
    
    ~Stack() {
        delete[] data;
    }
    
    void push(T item) {
        if (top < capacity - 1) {
            data[++top] = item;
        }
    }
    
    T pop() {
        if (top >= 0) {
            return data[top--];
        }
        return T();
    }
    
    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    // Using function template
    cout << "Max of 5 and 10: " << getMax(5, 10) << endl;
    cout << "Max of 3.5 and 2.1: " << getMax(3.5, 2.1) << endl;
    
    // Using class template
    Stack<int> intStack(5);
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    
    while (!intStack.isEmpty()) {
        cout << "Popped: " << intStack.pop() << endl;
    }
    
    return 0;
}`
  },
  {
    id: 63,
    title: "C++ Smart Pointers",
    language: "cpp",
    difficulty: "hard",
    category: "Memory Management",
    estimatedTime: 8,
    description: "Automatic memory management",
    code: `#include <iostream>
#include <memory>
using namespace std;

class Resource {
private:
    string name;
    
public:
    Resource(string n) : name(n) {
        cout << "Resource " << name << " created" << endl;
    }
    
    ~Resource() {
        cout << "Resource " << name << " destroyed" << endl;
    }
    
    void doSomething() {
        cout << "Resource " << name << " is doing something" << endl;
    }
};

int main() {
    // unique_ptr - exclusive ownership
    unique_ptr<Resource> ptr1 = make_unique<Resource>("Resource1");
    ptr1->doSomething();
    
    // Transfer ownership
    unique_ptr<Resource> ptr2 = move(ptr1);
    if (ptr1 == nullptr) {
        cout << "ptr1 is now null" << endl;
    }
    
    // shared_ptr - shared ownership
    shared_ptr<Resource> shared1 = make_shared<Resource>("SharedResource");
    shared_ptr<Resource> shared2 = shared1;
    
    cout << "Reference count: " << shared1.use_count() << endl;
    
    // weak_ptr - non-owning reference
    weak_ptr<Resource> weak = shared1;
    
    if (auto locked = weak.lock()) {
        locked->doSomething();
    }
    
    return 0;
}`
  },
  {
    id: 64,
    title: "C++ Lambda Expressions",
    language: "cpp",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Anonymous functions in C++",
    code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // Basic lambda
    auto square = [](int x) { return x * x; };
    cout << "Square of 5: " << square(5) << endl;
    
    // Lambda with capture
    int multiplier = 3;
    auto multiply = [multiplier](int x) { return x * multiplier; };
    cout << "5 * 3 = " << multiply(5) << endl;
    
    // Lambda with reference capture
    int sum = 0;
    for_each(numbers.begin(), numbers.end(), [&sum](int x) {
        sum += x;
    });
    cout << "Sum: " << sum << endl;
    
    // Lambda with algorithm
    vector<int> evens;
    copy_if(numbers.begin(), numbers.end(), back_inserter(evens), 
            [](int x) { return x % 2 == 0; });
    
    cout << "Even numbers: ";
    for (int num : evens) {
        cout << num << " ";
    }
    cout << endl;
    
    // Lambda with multiple parameters
    auto add = [](int a, int b) -> int { return a + b; };
    cout << "3 + 4 = " << add(3, 4) << endl;
    
    return 0;
}`
  },
  {
    id: 65,
    title: "C++ Move Semantics",
    language: "cpp",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 9,
    description: "Efficient resource transfer",
    code: `#include <iostream>
#include <vector>
using namespace std;

class MyString {
private:
    char* data;
    size_t length;
    
public:
    // Constructor
    MyString(const char* str) : length(strlen(str)) {
        data = new char[length + 1];
        strcpy(data, str);
        cout << "Constructor called" << endl;
    }
    
    // Copy constructor
    MyString(const MyString& other) : length(other.length) {
        data = new char[length + 1];
        strcpy(data, other.data);
        cout << "Copy constructor called" << endl;
    }
    
    // Move constructor
    MyString(MyString&& other) noexcept : data(other.data), length(other.length) {
        other.data = nullptr;
        other.length = 0;
        cout << "Move constructor called" << endl;
    }
    
    // Destructor
    ~MyString() {
        delete[] data;
        cout << "Destructor called" << endl;
    }
    
    // Copy assignment
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            delete[] data;
            length = other.length;
            data = new char[length + 1];
            strcpy(data, other.data);
            cout << "Copy assignment called" << endl;
        }
        return *this;
    }
    
    // Move assignment
    MyString& operator=(MyString&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            length = other.length;
            other.data = nullptr;
            other.length = 0;
            cout << "Move assignment called" << endl;
        }
        return *this;
    }
    
    const char* c_str() const { return data; }
};

MyString createString() {
    return MyString("Hello World");
}

int main() {
    MyString str1("Hello");
    MyString str2 = str1;  // Copy constructor
    MyString str3 = createString();  // Move constructor
    
    str1 = str2;  // Copy assignment
    str2 = createString();  // Move assignment
    
    return 0;
}`
  },
  {
    id: 66,
    title: "C++ STL Iterator",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 6,
    description: "Iterating through containers",
    code: `#include <iostream>
#include <vector>
#include <list>
#include <set>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    list<string> lst = {"apple", "banana", "cherry"};
    set<int> s = {5, 2, 8, 1, 9};
    
    // Vector iteration
    cout << "Vector: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Range-based for loop
    cout << "List: ";
    for (const auto& item : lst) {
        cout << item << " ";
    }
    cout << endl;
    
    // Set iteration
    cout << "Set: ";
    for (auto it = s.begin(); it != s.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Reverse iteration
    cout << "Vector (reverse): ";
    for (auto it = vec.rbegin(); it != vec.rend(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // Iterator arithmetic
    auto it = vec.begin();
    cout << "First element: " << *it << endl;
    cout << "Third element: " << *(it + 2) << endl;
    
    return 0;
}`
  },
  {
    id: 67,
    title: "C++ Exception Handling",
    language: "cpp",
    difficulty: "medium",
    category: "Error Handling",
    estimatedTime: 6,
    description: "Handling errors with try-catch",
    code: `#include <iostream>
#include <stdexcept>
using namespace std;

class CustomException : public exception {
public:
    const char* what() const noexcept override {
        return "Custom exception occurred";
    }
};

int divide(int a, int b) {
    if (b == 0) {
        throw invalid_argument("Division by zero");
    }
    return a / b;
}

void riskyFunction(int value) {
    if (value < 0) {
        throw CustomException();
    }
    if (value > 100) {
        throw out_of_range("Value too large");
    }
    cout << "Value is safe: " << value << endl;
}

int main() {
    try {
        cout << "10 / 2 = " << divide(10, 2) << endl;
        cout << "10 / 0 = " << divide(10, 0) << endl;
    } catch (const invalid_argument& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    try {
        riskyFunction(50);
        riskyFunction(150);
    } catch (const CustomException& e) {
        cout << "Custom error: " << e.what() << endl;
    } catch (const out_of_range& e) {
        cout << "Range error: " << e.what() << endl;
    } catch (...) {
        cout << "Unknown error occurred" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 68,
    title: "C++ File I/O",
    language: "cpp",
    difficulty: "medium",
    category: "File I/O",
    estimatedTime: 6,
    description: "Reading and writing files",
    code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Writing to file
    ofstream outFile("data.txt");
    if (outFile.is_open()) {
        outFile << "Hello World!" << endl;
        outFile << "This is a test file." << endl;
        outFile << "Numbers: 1 2 3 4 5" << endl;
        outFile.close();
        cout << "File written successfully" << endl;
    }
    
    // Reading from file
    ifstream inFile("data.txt");
    if (inFile.is_open()) {
        string line;
        cout << "File contents:" << endl;
        while (getline(inFile, line)) {
            cout << line << endl;
        }
        inFile.close();
    }
    
    // Binary file operations
    ofstream binaryOut("binary.dat", ios::binary);
    if (binaryOut.is_open()) {
        int numbers[] = {1, 2, 3, 4, 5};
        binaryOut.write(reinterpret_cast<char*>(numbers), sizeof(numbers));
        binaryOut.close();
    }
    
    ifstream binaryIn("binary.dat", ios::binary);
    if (binaryIn.is_open()) {
        int numbers[5];
        binaryIn.read(reinterpret_cast<char*>(numbers), sizeof(numbers));
        cout << "Binary data: ";
        for (int i = 0; i < 5; i++) {
            cout << numbers[i] << " ";
        }
        cout << endl;
        binaryIn.close();
    }
    
    return 0;
}`
  },
  {
    id: 69,
    title: "C++ Multithreading",
    language: "cpp",
    difficulty: "hard",
    category: "Concurrency",
    estimatedTime: 9,
    description: "Parallel programming with threads",
    code: `#include <iostream>
#include <thread>
#include <vector>
#include <mutex>
#include <chrono>
using namespace std;

mutex mtx;
int counter = 0;

void incrementCounter(int id, int times) {
    for (int i = 0; i < times; i++) {
        lock_guard<mutex> lock(mtx);
        counter++;
        cout << "Thread " << id << " incremented counter to " << counter << endl;
    }
}

void workerFunction(int id) {
    cout << "Thread " << id << " started" << endl;
    this_thread::sleep_for(chrono::milliseconds(1000));
    cout << "Thread " << id << " finished" << endl;
}

int main() {
    // Basic threading
    thread t1(workerFunction, 1);
    thread t2(workerFunction, 2);
    
    t1.join();
    t2.join();
    
    // Multiple threads with shared data
    vector<thread> threads;
    for (int i = 0; i < 5; i++) {
        threads.emplace_back(incrementCounter, i, 3);
    }
    
    for (auto& t : threads) {
        t.join();
    }
    
    cout << "Final counter value: " << counter << endl;
    
    return 0;
}`
  },
  {
    id: 70,
    title: "C++ STL Priority Queue",
    language: "cpp",
    difficulty: "medium",
    category: "STL",
    estimatedTime: 5,
    description: "Heap-based priority queue",
    code: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    // Max heap (default)
    priority_queue<int> maxHeap;
    
    maxHeap.push(30);
    maxHeap.push(10);
    maxHeap.push(50);
    maxHeap.push(20);
    maxHeap.push(40);
    
    cout << "Max heap elements: ";
    while (!maxHeap.empty()) {
        cout << maxHeap.top() << " ";
        maxHeap.pop();
    }
    cout << endl;
    
    // Min heap
    priority_queue<int, vector<int>, greater<int>> minHeap;
    
    minHeap.push(30);
    minHeap.push(10);
    minHeap.push(50);
    minHeap.push(20);
    minHeap.push(40);
    
    cout << "Min heap elements: ";
    while (!minHeap.empty()) {
        cout << minHeap.top() << " ";
        minHeap.pop();
    }
    cout << endl;
    
    // Custom comparator
    auto compare = [](int a, int b) { return a > b; };
    priority_queue<int, vector<int>, decltype(compare)> customHeap(compare);
    
    customHeap.push(30);
    customHeap.push(10);
    customHeap.push(50);
    
    cout << "Custom heap elements: ";
    while (!customHeap.empty()) {
        cout << customHeap.top() << " ";
        customHeap.pop();
    }
    cout << endl;
    
    return 0;
}`
  },

  // C Lessons (151-200)
  {
    id: 71,
    title: "C Variables and Types",
    language: "c",
    difficulty: "easy",
    category: "Variables",
    estimatedTime: 3,
    description: "Basic variable declaration in C",
    code: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9f;
    char grade = 'A';
    double pi = 3.14159;
    
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    printf("Pi: %.5f\\n", pi);
    
    return 0;
}`
  },
  {
    id: 72,
    title: "C Input/Output",
    language: "c",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 3,
    description: "Basic input and output in C",
    code: `#include <stdio.h>

int main() {
    char name[50];
    int age;
    
    printf("Enter your name: ");
    scanf("%s", name);
    
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("Hello %s, you are %d years old.\\n", name, age);
    
    return 0;
}`
  },
  {
    id: 73,
    title: "C Arrays",
    language: "c",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Array declaration and usage",
    code: `#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    
    printf("Array elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    // Sum of array elements
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    printf("Sum: %d\\n", sum);
    
    return 0;
}`
  },
  {
    id: 74,
    title: "C Functions",
    language: "c",
    difficulty: "medium",
    category: "Functions",
    estimatedTime: 5,
    description: "Function declaration and definition",
    code: `#include <stdio.h>

// Function declaration
int add(int a, int b);
void printArray(int arr[], int size);

int main() {
    int result = add(10, 20);
    printf("Sum: %d\\n", result);
    
    int numbers[] = {1, 2, 3, 4, 5};
    printArray(numbers, 5);
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void printArray(int arr[], int size) {
    printf("Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}`
  },
  {
    id: 75,
    title: "C Pointers",
    language: "c",
    difficulty: "hard",
    category: "Memory Management",
    estimatedTime: 7,
    description: "Pointer basics in C",
    code: `#include <stdio.h>

int main() {
    int num = 42;
    int* ptr = &num;
    
    printf("Value: %d\\n", num);
    printf("Address: %p\\n", &num);
    printf("Pointer value: %p\\n", ptr);
    printf("Dereferenced: %d\\n", *ptr);
    
    // Modifying through pointer
    *ptr = 100;
    printf("New value: %d\\n", num);
    
    return 0;
}`
  },

  // Java Lessons (91-110)
  {
    id: 91,
    title: "Java Variables",
    language: "java",
    difficulty: "easy",
    category: "Variables",
    estimatedTime: 3,
    description: "Variable declaration in Java",
    code: `public class Main {
    public static void main(String[] args) {
        String name = "John";
        int age = 25;
        double height = 5.9;
        boolean isStudent = true;
        char grade = 'A';
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Is Student: " + isStudent);
        System.out.println("Grade: " + grade);
    }
}`
  },
  {
    id: 92,
    title: "Java Classes and Objects",
    language: "java",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 6,
    description: "Basic class definition and object creation",
    code: `public class Person {
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Method
    public void introduce() {
        System.out.println("Hello, I'm " + name + " and I'm " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        person.introduce();
    }
}`
  },
  {
    id: 93,
    title: "Java Arrays",
    language: "java",
    difficulty: "easy",
    category: "Data Structures",
    estimatedTime: 4,
    description: "Array creation and manipulation",
    code: `public class Main {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Accessing elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Last element: " + numbers[numbers.length - 1]);
        
        // Printing all elements
        System.out.print("All elements: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        // Enhanced for loop
        System.out.print("Using enhanced for loop: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`
  },
  {
    id: 94,
    title: "Java Inheritance",
    language: "java",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 7,
    description: "Class inheritance and method overriding",
    code: `// Parent class
class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.makeSound();
        dog.eat();
    }
}`
  },
  {
    id: 95,
    title: "Java Exception Handling",
    language: "java",
    difficulty: "medium",
    category: "Error Handling",
    estimatedTime: 6,
    description: "Try-catch blocks and exception handling",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        try {
            System.out.print("Enter a number: ");
            int number = scanner.nextInt();
            
            int result = 10 / number;
            System.out.println("Result: " + result);
            
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("This block always executes");
            scanner.close();
        }
    }
}`
  },
  {
    id: 96,
    title: "Java Collections",
    language: "java",
    difficulty: "medium",
    category: "Data Structures",
    estimatedTime: 6,
    description: "ArrayList and HashMap usage",
    code: `import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // ArrayList example
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        
        System.out.println("Fruits: " + fruits);
        System.out.println("Size: " + fruits.size());
        
        // HashMap example
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("John", 25);
        ages.put("Alice", 30);
        ages.put("Bob", 35);
        
        System.out.println("Ages: " + ages);
        System.out.println("John's age: " + ages.get("John"));
    }
}`
  },
  {
    id: 97,
    title: "Java Interfaces",
    language: "java",
    difficulty: "hard",
    category: "OOP",
    estimatedTime: 8,
    description: "Interface definition and implementation",
    code: `// Interface definition
interface Drawable {
    void draw();
    double getArea();
}

// Class implementing interface
class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(5.0);
        circle.draw();
        System.out.println("Area: " + circle.getArea());
    }
}`
  },
  {
    id: 98,
    title: "Java Generics",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Generic classes and methods",
    code: `// Generic class
class Box<T> {
    private T content;
    
    public void setContent(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;
    }
}

// Generic method
class Utils {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        // Using generic class
        Box<String> stringBox = new Box<>();
        stringBox.setContent("Hello");
        System.out.println(stringBox.getContent());
        
        Box<Integer> intBox = new Box<>();
        intBox.setContent(42);
        System.out.println(intBox.getContent());
        
        // Using generic method
        String[] words = {"Hello", "World", "Java"};
        Integer[] numbers = {1, 2, 3, 4, 5};
        
        Utils.printArray(words);
        Utils.printArray(numbers);
    }
}`
  },
  {
    id: 99,
    title: "Java Lambda Expressions",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Lambda expressions and functional interfaces",
    code: `import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Lambda expression for filtering
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
        
        // Lambda expression for mapping
        numbers.stream()
               .map(n -> n * n)
               .forEach(System.out::println);
        
        // Lambda expression for reducing
        int sum = numbers.stream()
                        .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);
        
        // Method reference
        numbers.forEach(System.out::println);
    }
}`
  },
  {
    id: 100,
    title: "Java Multithreading",
    language: "java",
    difficulty: "hard",
    category: "Concurrency",
    estimatedTime: 9,
    description: "Basic multithreading concepts",
    code: `class Counter implements Runnable {
    private int count = 0;
    
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            count++;
            System.out.println(Thread.currentThread().getName() + 
                             " Count: " + count);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Counter counter = new Counter();
        
        Thread thread1 = new Thread(counter, "Thread-1");
        Thread thread2 = new Thread(counter, "Thread-2");
        
        thread1.start();
        thread2.start();
        
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("All threads completed");
    }
}`
  },
  {
    id: 101,
    title: "Java Collections Framework",
    language: "java",
    difficulty: "medium",
    category: "Collections",
    estimatedTime: 6,
    description: "Working with Java collections",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        
        // HashSet
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(2); // Duplicate, won't be added
        
        // HashMap
        Map<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);
        
        // Iterating through collections
        System.out.println("List: " + list);
        System.out.println("Set: " + set);
        System.out.println("Map: " + map);
        
        // Using Iterator
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println("List item: " + iterator.next());
        }
    }
}`
  },
  {
    id: 102,
    title: "Java Generics",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Generic programming in Java",
    code: `// Generic class
class Box<T> {
    private T content;
    
    public void setContent(T content) {
        this.content = content;
    }
    
    public T getContent() {
        return content;
    }
}

// Generic method
class Utils {
    public static <T> void printArray(T[] array) {
        for (T item : array) {
            System.out.print(item + " ");
        }
        System.out.println();
    }
    
    public static <T extends Comparable<T>> T findMax(T[] array) {
        if (array.length == 0) return null;
        
        T max = array[0];
        for (T item : array) {
            if (item.compareTo(max) > 0) {
                max = item;
            }
        }
        return max;
    }
}

public class Main {
    public static void main(String[] args) {
        // Using generic class
        Box<String> stringBox = new Box<>();
        stringBox.setContent("Hello World");
        System.out.println("String box: " + stringBox.getContent());
        
        Box<Integer> intBox = new Box<>();
        intBox.setContent(42);
        System.out.println("Integer box: " + intBox.getContent());
        
        // Using generic methods
        Integer[] numbers = {1, 5, 3, 9, 2};
        String[] words = {"apple", "banana", "cherry"};
        
        Utils.printArray(numbers);
        Utils.printArray(words);
        
        System.out.println("Max number: " + Utils.findMax(numbers));
        System.out.println("Max word: " + Utils.findMax(words));
    }
}`
  },
  {
    id: 103,
    title: "Java Lambda Expressions",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Functional programming with lambdas",
    code: `import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        
        // Lambda expressions
        names.forEach(name -> System.out.println("Hello, " + name));
        
        // Method references
        names.forEach(System.out::println);
        
        // Filter with lambda
        List<String> longNames = names.stream()
            .filter(name -> name.length() > 4)
            .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        
        System.out.println("Long names: " + longNames);
        
        // Map with lambda
        List<Integer> lengths = names.stream()
            .map(String::length)
            .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);
        
        System.out.println("Name lengths: " + lengths);
        
        // Reduce with lambda
        int totalLength = names.stream()
            .mapToInt(String::length)
            .sum();
        
        System.out.println("Total length: " + totalLength);
        
        // Custom functional interface
        Calculator calc = (a, b) -> a + b;
        System.out.println("5 + 3 = " + calc.calculate(5, 3));
    }
}

@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}`
  },
  {
    id: 104,
    title: "Java Stream API",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Processing collections with streams",
    code: `import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "Engineer"),
            new Person("Bob", 30, "Manager"),
            new Person("Charlie", 35, "Engineer"),
            new Person("David", 28, "Designer")
        );
        
        // Filter and map
        List<String> engineerNames = people.stream()
            .filter(person -> person.getJob().equals("Engineer"))
            .map(Person::getName)
            .collect(Collectors.toList());
        
        System.out.println("Engineers: " + engineerNames);
        
        // Group by job
        Map<String, List<Person>> byJob = people.stream()
            .collect(Collectors.groupingBy(Person::getJob));
        
        System.out.println("Grouped by job: " + byJob);
        
        // Average age
        double avgAge = people.stream()
            .mapToInt(Person::getAge)
            .average()
            .orElse(0.0);
        
        System.out.println("Average age: " + avgAge);
        
        // Sort by age
        List<Person> sortedByAge = people.stream()
            .sorted(Comparator.comparing(Person::getAge))
            .collect(Collectors.toList());
        
        System.out.println("Sorted by age: " + sortedByAge);
    }
}

class Person {
    private String name;
    private int age;
    private String job;
    
    public Person(String name, int age, String job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getJob() { return job; }
    
    @Override
    public String toString() {
        return name + "(" + age + ")";
    }
}`
  },
  {
    id: 105,
    title: "Java Optional",
    language: "java",
    difficulty: "medium",
    category: "Advanced Features",
    estimatedTime: 6,
    description: "Handling null values with Optional",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Creating Optional
        Optional<String> empty = Optional.empty();
        Optional<String> present = Optional.of("Hello");
        Optional<String> nullable = Optional.ofNullable(null);
        
        // Checking if present
        if (present.isPresent()) {
            System.out.println("Value: " + present.get());
        }
        
        // Using orElse
        String value = empty.orElse("Default value");
        System.out.println("Empty orElse: " + value);
        
        // Using orElseGet
        String value2 = empty.orElseGet(() -> "Generated value");
        System.out.println("Empty orElseGet: " + value2);
        
        // Using map
        Optional<String> upper = present.map(String::toUpperCase);
        System.out.println("Uppercase: " + upper.get());
        
        // Using filter
        Optional<String> filtered = present.filter(s -> s.length() > 3);
        System.out.println("Filtered: " + filtered.get());
        
        // Chaining operations
        Optional<String> result = present
            .map(String::toUpperCase)
            .filter(s -> s.length() > 3)
            .map(s -> s + "!");
        
        System.out.println("Chained result: " + result.get());
        
        // Practical example
        String name = findNameById(1);
        String displayName = Optional.ofNullable(name)
            .orElse("Unknown");
        System.out.println("Display name: " + displayName);
    }
    
    private static String findNameById(int id) {
        // Simulate database lookup
        if (id == 1) return "Alice";
        return null;
    }
}`
  },
  {
    id: 106,
    title: "Java Reflection",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 8,
    description: "Runtime inspection of classes",
    code: `import java.lang.reflect.*;

public class Main {
    public static void main(String[] args) {
        try {
            // Get class information
            Class<?> clazz = Class.forName("java.util.ArrayList");
            System.out.println("Class name: " + clazz.getName());
            System.out.println("Simple name: " + clazz.getSimpleName());
            
            // Get constructors
            Constructor<?>[] constructors = clazz.getConstructors();
            System.out.println("Constructors: " + constructors.length);
            
            // Get methods
            Method[] methods = clazz.getMethods();
            System.out.println("Methods: " + methods.length);
            
            // Get fields
            Field[] fields = clazz.getDeclaredFields();
            System.out.println("Fields: " + fields.length);
            
            // Create instance using reflection
            Object list = clazz.newInstance();
            System.out.println("Created instance: " + list.getClass().getName());
            
            // Call method using reflection
            Method addMethod = clazz.getMethod("add", Object.class);
            addMethod.invoke(list, "Hello");
            addMethod.invoke(list, "World");
            
            Method sizeMethod = clazz.getMethod("size");
            int size = (Integer) sizeMethod.invoke(list);
            System.out.println("List size: " + size);
            
            // Get method with parameters
            Method getMethod = clazz.getMethod("get", int.class);
            String item = (String) getMethod.invoke(list, 0);
            System.out.println("First item: " + item);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`
  },
  {
    id: 107,
    title: "Java Annotations",
    language: "java",
    difficulty: "hard",
    category: "Advanced Features",
    estimatedTime: 7,
    description: "Creating and using custom annotations",
    code: `import java.lang.annotation.*;
import java.lang.reflect.*;

// Custom annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface TestMethod {
    String description() default "";
    int priority() default 0;
}

// Another annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.CLASS)
@interface Author {
    String name();
    String date();
}

@Author(name = "John Doe", date = "2024-01-01")
class TestClass {
    @TestMethod(description = "Test addition", priority = 1)
    public void testAddition() {
        System.out.println("Testing addition...");
    }
    
    @TestMethod(description = "Test subtraction", priority = 2)
    public void testSubtraction() {
        System.out.println("Testing subtraction...");
    }
    
    public void regularMethod() {
        System.out.println("Regular method");
    }
}

public class Main {
    public static void main(String[] args) {
        // Get class annotations
        Class<?> clazz = TestClass.class;
        Author author = clazz.getAnnotation(Author.class);
        if (author != null) {
            System.out.println("Author: " + author.name());
            System.out.println("Date: " + author.date());
        }
        
        // Get method annotations
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            TestMethod testMethod = method.getAnnotation(TestMethod.class);
            if (testMethod != null) {
                System.out.println("Method: " + method.getName());
                System.out.println("Description: " + testMethod.description());
                System.out.println("Priority: " + testMethod.priority());
            }
        }
    }
}`
  },
  {
    id: 108,
    title: "Java Serialization",
    language: "java",
    difficulty: "medium",
    category: "I/O",
    estimatedTime: 6,
    description: "Object serialization and deserialization",
    code: `import java.io.*;

class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private transient String password; // Won't be serialized
    
    public Person(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", password='" + password + "'}";
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 25, "secret123");
        
        // Serialization
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
            System.out.println("Person serialized successfully");
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        // Deserialization
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person deserializedPerson = (Person) ois.readObject();
            System.out.println("Deserialized person: " + deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}`
  },
  {
    id: 109,
    title: "Java Networking",
    language: "java",
    difficulty: "hard",
    category: "Networking",
    estimatedTime: 8,
    description: "Network programming with sockets",
    code: `import java.io.*;
import java.net.*;

// Server
class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println("Server listening on port 8080...");
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client connected: " + clientSocket.getInetAddress());
                
                // Handle client in a separate thread
                new Thread(() -> handleClient(clientSocket)).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private static void handleClient(Socket clientSocket) {
        try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
             PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Received: " + inputLine);
                out.println("Echo: " + inputLine);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Client
class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 8080);
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in))) {
            
            System.out.println("Connected to server");
            
            String userInputLine;
            while ((userInputLine = userInput.readLine()) != null) {
                out.println(userInputLine);
                String response = in.readLine();
                System.out.println("Server response: " + response);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`
  },
  {
    id: 110,
    title: "Java Database Connectivity",
    language: "java",
    difficulty: "hard",
    category: "Database",
    estimatedTime: 8,
    description: "Connecting to databases with JDBC",
    code: `import java.sql.*;

public class Main {
    private static final String URL = "jdbc:mysql://localhost:3306/testdb";
    private static final String USERNAME = "username";
    private static final String PASSWORD = "password";
    
    public static void main(String[] args) {
        try {
            // Load driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // Create connection
            try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
                System.out.println("Connected to database");
                
                // Create table
                createTable(connection);
                
                // Insert data
                insertData(connection);
                
                // Query data
                queryData(connection);
                
                // Update data
                updateData(connection);
                
                // Delete data
                deleteData(connection);
                
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
    
    private static void createTable(Connection connection) throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(100))";
        try (Statement statement = connection.createStatement()) {
            statement.execute(sql);
            System.out.println("Table created successfully");
        }
    }
    
    private static void insertData(Connection connection) throws SQLException {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "Alice");
            statement.setString(2, "alice@example.com");
            statement.executeUpdate();
            
            statement.setString(1, "Bob");
            statement.setString(2, "bob@example.com");
            statement.executeUpdate();
            
            System.out.println("Data inserted successfully");
        }
    }
    
    private static void queryData(Connection connection) throws SQLException {
        String sql = "SELECT * FROM users";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(sql)) {
            
            System.out.println("Users:");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }
        }
    }
    
    private static void updateData(Connection connection) throws SQLException {
        String sql = "UPDATE users SET email = ? WHERE name = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "alice.new@example.com");
            statement.setString(2, "Alice");
            int rowsUpdated = statement.executeUpdate();
            System.out.println("Updated " + rowsUpdated + " rows");
        }
    }
    
    private static void deleteData(Connection connection) throws SQLException {
        String sql = "DELETE FROM users WHERE name = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, "Bob");
            int rowsDeleted = statement.executeUpdate();
            System.out.println("Deleted " + rowsDeleted + " rows");
        }
    }
}`
  },
  {
    id: 111,
    title: "JavaScript Basic Math Operations",
    language: "javascript",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic arithmetic operations in JavaScript",
    code: `let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);`
  },
  {
    id: 112,
    title: "JavaScript String Concatenation",
    language: "javascript",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 2,
    description: "Combining strings in JavaScript",
    code: `let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName1 = firstName + " " + lastName;
console.log(fullName1);

// Using template literals
let fullName2 = \`\${firstName} \${lastName}\`;
console.log(fullName2);

// Using concat method
let fullName3 = firstName.concat(" ", lastName);
console.log(fullName3);`
  },
  {
    id: 113,
    title: "JavaScript Array Length",
    language: "javascript",
    difficulty: "easy",
    category: "Arrays",
    estimatedTime: 2,
    description: "Getting array length and basic operations",
    code: `let fruits = ["apple", "banana", "orange"];
console.log("Array length:", fruits.length);

// Adding elements
fruits.push("grape");
console.log("After push:", fruits);
console.log("New length:", fruits.length);

// Removing last element
fruits.pop();
console.log("After pop:", fruits);
console.log("New length:", fruits.length);`
  },
  {
    id: 114,
    title: "JavaScript Simple Functions",
    language: "javascript",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Creating and calling simple functions",
    code: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
let add = function(a, b) {
    return a + b;
};

// Arrow function
let multiply = (x, y) => x * y;

// Using functions
console.log(greet("Alice"));
console.log("Sum:", add(5, 3));
console.log("Product:", multiply(4, 6));`
  },
  {
    id: 115,
    title: "JavaScript Simple Objects",
    language: "javascript",
    difficulty: "easy",
    category: "Objects",
    estimatedTime: 3,
    description: "Creating and accessing object properties",
    code: `let person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Accessing properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// Adding new property
person.email = "john@example.com";
console.log("Email:", person.email);

// Updating property
person.age = 26;
console.log("Updated age:", person.age);`
  },
  {
    id: 116,
    title: "JavaScript Simple Loops",
    language: "javascript",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for and while loops",
    code: `// For loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
console.log("Counting down from 3:");
while (count < 3) {
    console.log(3 - count);
    count++;
}

// For...of loop with array
let colors = ["red", "green", "blue"];
console.log("Colors:");
for (let color of colors) {
    console.log(color);
}`
  },
  {
    id: 117,
    title: "JavaScript Simple Conditions",
    language: "javascript",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// Multiple conditions
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}`
  },
  {
    id: 118,
    title: "JavaScript Array Methods",
    language: "javascript",
    difficulty: "easy",
    category: "Arrays",
    estimatedTime: 3,
    description: "Basic array methods",
    code: `let numbers = [1, 2, 3, 4, 5];

// Push and pop
numbers.push(6);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

// Shift and unshift
numbers.unshift(0);
console.log("After unshift:", numbers);

numbers.shift();
console.log("After shift:", numbers);

// Index of
let index = numbers.indexOf(3);
console.log("Index of 3:", index);`
  },
  {
    id: 119,
    title: "JavaScript String Methods",
    language: "javascript",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Basic string manipulation methods",
    code: `let text = "Hello World";

console.log("Original:", text);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Length:", text.length);
console.log("Substring:", text.substring(0, 5));
console.log("Replace:", text.replace("World", "JavaScript"));

// Split string
let words = text.split(" ");
console.log("Split words:", words);`
  },
  {
    id: 120,
    title: "JavaScript Simple Math",
    language: "javascript",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Using Math object for calculations",
    code: `let number = 4.7;

console.log("Number:", number);
console.log("Round:", Math.round(number));
console.log("Floor:", Math.floor(number));
console.log("Ceil:", Math.ceil(number));
console.log("Square root:", Math.sqrt(16));
console.log("Power:", Math.pow(2, 3));
console.log("Random:", Math.random());
console.log("Max:", Math.max(10, 20, 5));
console.log("Min:", Math.min(10, 20, 5));`
  },
  {
    id: 121,
    title: "Python Basic Input/Output",
    language: "python",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 2,
    description: "Getting input from user and displaying output",
    code: `# Getting input from user
name = input("Enter your name: ")
age = input("Enter your age: ")

# Displaying output
print("Hello, " + name + "!")
print("You are " + age + " years old")

# Using f-strings (Python 3.6+)
print(f"Hello, {name}!")
print(f"You are {age} years old")

# Multiple values
print("Name:", name, "Age:", age)`
  },
  {
    id: 122,
    title: "Python Basic Math Operations",
    language: "python",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic arithmetic operations in Python",
    code: `a = 10
b = 3

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor division:", a // b)
print("Modulus:", a % b)
print("Exponentiation:", a ** b)

# Order of operations
result = 2 + 3 * 4
print("2 + 3 * 4 =", result)`
  },
  {
    id: 123,
    title: "Python String Operations",
    language: "python",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Basic string operations and methods",
    code: `text = "Hello World"

print("Original:", text)
print("Uppercase:", text.upper())
print("Lowercase:", text.lower())
print("Length:", len(text))
print("Replace:", text.replace("World", "Python"))
print("Split:", text.split())

# String concatenation
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print("Full name:", full_name)

# String formatting
age = 25
print(f"My name is {full_name} and I am {age} years old")`
  },
  {
    id: 124,
    title: "Python List Basics",
    language: "python",
    difficulty: "easy",
    category: "Lists",
    estimatedTime: 3,
    description: "Creating and manipulating lists",
    code: `# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

print("Fruits:", fruits)
print("Numbers:", numbers)

# Accessing elements
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])

# Adding elements
fruits.append("grape")
print("After append:", fruits)

fruits.insert(1, "mango")
print("After insert:", fruits)

# Removing elements
fruits.remove("banana")
print("After remove:", fruits)

# List length
print("Number of fruits:", len(fruits))`
  },
  {
    id: 125,
    title: "Python Simple Functions",
    language: "python",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Creating and calling simple functions",
    code: `# Function definition
def greet(name):
    return "Hello, " + name + "!"

def add_numbers(a, b):
    return a + b

def multiply(x, y):
    return x * y

# Function calls
message = greet("Alice")
print(message)

sum_result = add_numbers(5, 3)
print("Sum:", sum_result)

product = multiply(4, 6)
print("Product:", product)

# Function with default parameter
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))
print(greet_with_title("Smith", "Dr."))`
  },
  {
    id: 126,
    title: "Python Simple Loops",
    language: "python",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for and while loops",
    code: `# For loop with range
print("Counting 1 to 5:")
for i in range(1, 6):
    print(i)

# For loop with list
fruits = ["apple", "banana", "orange"]
print("Fruits:")
for fruit in fruits:
    print(fruit)

# While loop
count = 0
print("Counting down from 3:")
while count < 3:
    print(3 - count)
    count += 1

# For loop with enumerate
print("Fruits with index:")
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`
  },
  {
    id: 127,
    title: "Python Simple Conditions",
    language: "python",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Multiple conditions
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# Logical operators
temperature = 25
if temperature > 20 and temperature < 30:
    print("Nice weather!")
elif temperature > 30 or temperature < 10:
    print("Extreme weather!")`
  },
  {
    id: 128,
    title: "Python Dictionary Basics",
    language: "python",
    difficulty: "easy",
    category: "Dictionaries",
    estimatedTime: 3,
    description: "Creating and using dictionaries",
    code: `# Creating dictionary
person = {
    "name": "John",
    "age": 25,
    "city": "New York"
}

print("Person:", person)

# Accessing values
print("Name:", person["name"])
print("Age:", person["age"])

# Adding new key-value pair
person["email"] = "john@example.com"
print("After adding email:", person)

# Updating value
person["age"] = 26
print("After updating age:", person)

# Checking if key exists
if "city" in person:
    print("City:", person["city"])

# Dictionary methods
print("Keys:", list(person.keys()))
print("Values:", list(person.values()))`
  },
  {
    id: 129,
    title: "Python Simple Math Functions",
    language: "python",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Using built-in math functions",
    code: `import math

number = 4.7

print("Number:", number)
print("Round:", round(number))
print("Floor:", math.floor(number))
print("Ceil:", math.ceil(number))
print("Square root of 16:", math.sqrt(16))
print("Power 2^3:", math.pow(2, 3))
print("Random number:", math.random())

# Built-in functions
numbers = [10, 20, 5, 15]
print("Numbers:", numbers)
print("Max:", max(numbers))
print("Min:", min(numbers))
print("Sum:", sum(numbers))
print("Length:", len(numbers))

# Absolute value
print("Absolute of -5:", abs(-5))`
  },
  {
    id: 130,
    title: "Python List Methods",
    language: "python",
    difficulty: "easy",
    category: "Lists",
    estimatedTime: 3,
    description: "Common list methods and operations",
    code: `# Creating list
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

print("Original list:", numbers)

# Adding elements
numbers.append(8)
print("After append:", numbers)

numbers.insert(0, 0)
print("After insert at beginning:", numbers)

# Removing elements
numbers.remove(1)
print("After remove first 1:", numbers)

popped = numbers.pop()
print("Popped element:", popped)
print("After pop:", numbers)

# List operations
print("Count of 1:", numbers.count(1))
print("Index of 4:", numbers.index(4))

# Sorting
numbers.sort()
print("Sorted:", numbers)

# Reversing
numbers.reverse()
print("Reversed:", numbers)`
  },
  {
    id: 131,
    title: "C++ Basic Input/Output",
    language: "cpp",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 2,
    description: "Basic input and output operations",
    code: `#include <iostream>
using namespace std;

int main() {
    int age;
    string name;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "!" << endl;
    cout << "You are " << age << " years old." << endl;
    
    return 0;
}`
  },
  {
    id: 132,
    title: "C++ Basic Math Operations",
    language: "cpp",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic arithmetic operations in C++",
    code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "a = " << a << ", b = " << b << endl;
    cout << "Addition: " << a + b << endl;
    cout << "Subtraction: " << a - b << endl;
    cout << "Multiplication: " << a * b << endl;
    cout << "Division: " << a / b << endl;
    cout << "Modulus: " << a % b << endl;
    
    // Increment and decrement
    cout << "a++ = " << a++ << endl;
    cout << "++a = " << ++a << endl;
    
    return 0;
}`
  },
  {
    id: 133,
    title: "C++ Simple Functions",
    language: "cpp",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Creating and calling simple functions",
    code: `#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);
void greet(string name);

int main() {
    int result = add(5, 3);
    cout << "Sum: " << result << endl;
    
    greet("Alice");
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}`
  },
  {
    id: 134,
    title: "C++ Simple Loops",
    language: "cpp",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for and while loops",
    code: `#include <iostream>
using namespace std;

int main() {
    // For loop
    cout << "Counting 1 to 5:" << endl;
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // While loop
    int count = 0;
    cout << "Counting down from 3:" << endl;
    while (count < 3) {
        cout << 3 - count << " ";
        count++;
    }
    cout << endl;
    
    // Do-while loop
    int num = 5;
    cout << "Do-while loop:" << endl;
    do {
        cout << num << " ";
        num--;
    } while (num > 0);
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 135,
    title: "C++ Simple Conditions",
    language: "cpp",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `#include <iostream>
using namespace std;

int main() {
    int age = 18;
    
    if (age >= 18) {
        cout << "You are an adult" << endl;
    } else {
        cout << "You are a minor" << endl;
    }
    
    // Multiple conditions
    int score = 85;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    
    // Logical operators
    int temperature = 25;
    if (temperature > 20 && temperature < 30) {
        cout << "Nice weather!" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 136,
    title: "C++ Arrays Basics",
    language: "cpp",
    difficulty: "easy",
    category: "Arrays",
    estimatedTime: 3,
    description: "Creating and using arrays",
    code: `#include <iostream>
using namespace std;

int main() {
    // Array declaration and initialization
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    cout << "First element: " << numbers[0] << endl;
    cout << "Last element: " << numbers[4] << endl;
    
    // Displaying all elements
    cout << "All elements: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Modifying elements
    numbers[0] = 10;
    cout << "After modification: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    return 0;
}`
  },
  {
    id: 137,
    title: "C++ String Basics",
    language: "cpp",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Working with strings in C++",
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // String declaration
    string name = "John";
    string lastName = "Doe";
    
    // String concatenation
    string fullName = name + " " + lastName;
    cout << "Full name: " << fullName << endl;
    
    // String length
    cout << "Length: " << fullName.length() << endl;
    
    // String comparison
    if (name == "John") {
        cout << "Name matches!" << endl;
    }
    
    // String methods
    cout << "Uppercase: " << fullName << endl;
    
    // Substring
    string sub = fullName.substr(0, 4);
    cout << "Substring: " << sub << endl;
    
    return 0;
}`
  },
  {
    id: 138,
    title: "C++ Simple Classes",
    language: "cpp",
    difficulty: "easy",
    category: "Classes",
    estimatedTime: 4,
    description: "Creating simple classes and objects",
    code: `#include <iostream>
using namespace std;

class Rectangle {
public:
    int width;
    int height;
    
    int getArea() {
        return width * height;
    }
    
    int getPerimeter() {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle rect;
    rect.width = 5;
    rect.height = 3;
    
    cout << "Width: " << rect.width << endl;
    cout << "Height: " << rect.height << endl;
    cout << "Area: " << rect.getArea() << endl;
    cout << "Perimeter: " << rect.getPerimeter() << endl;
    
    return 0;
}`
  },
  {
    id: 139,
    title: "C++ Math Functions",
    language: "cpp",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Using math functions in C++",
    code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double number = 4.7;
    
    cout << "Number: " << number << endl;
    cout << "Round: " << round(number) << endl;
    cout << "Floor: " << floor(number) << endl;
    cout << "Ceil: " << ceil(number) << endl;
    cout << "Square root of 16: " << sqrt(16) << endl;
    cout << "Power 2^3: " << pow(2, 3) << endl;
    cout << "Absolute of -5: " << abs(-5) << endl;
    
    // Trigonometric functions
    double angle = 45.0;
    double radians = angle * M_PI / 180.0;
    cout << "sin(45°): " << sin(radians) << endl;
    cout << "cos(45°): " << cos(radians) << endl;
    
    return 0;
}`
  },
  {
    id: 140,
    title: "C++ Switch Statement",
    language: "cpp",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Using switch statements for multiple conditions",
    code: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday" << endl;
            break;
        case 7:
            cout << "Sunday" << endl;
            break;
        default:
            cout << "Invalid day" << endl;
    }
    
    // Switch with character
    char grade = 'B';
    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good!" << endl;
            break;
        case 'C':
            cout << "Average" << endl;
            break;
        default:
            cout << "Need improvement" << endl;
    }
    
    return 0;
}`
  },
  {
    id: 141,
    title: "C Basic Input/Output",
    language: "c",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 2,
    description: "Basic input and output in C",
    code: `#include <stdio.h>

int main() {
    int age;
    char name[50];
    
    printf("Enter your name: ");
    scanf("%s", name);
    
    printf("Enter your age: ");
    scanf("%d", &age);
    
    printf("Hello, %s!\\n", name);
    printf("You are %d years old.\\n", age);
    
    return 0;
}`
  },
  {
    id: 142,
    title: "C Basic Math Operations",
    language: "c",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic arithmetic operations in C",
    code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("a = %d, b = %d\\n", a, b);
    printf("Addition: %d\\n", a + b);
    printf("Subtraction: %d\\n", a - b);
    printf("Multiplication: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Modulus: %d\\n", a % b);
    
    // Increment and decrement
    printf("a++ = %d\\n", a++);
    printf("++a = %d\\n", ++a);
    
    return 0;
}`
  },
  {
    id: 143,
    title: "C Simple Functions",
    language: "c",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Creating and calling simple functions",
    code: `#include <stdio.h>

// Function declaration
int add(int a, int b);
void greet(char name[]);

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    
    greet("Alice");
    
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}`
  },
  {
    id: 144,
    title: "C Simple Loops",
    language: "c",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for and while loops",
    code: `#include <stdio.h>

int main() {
    // For loop
    printf("Counting 1 to 5:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // While loop
    int count = 0;
    printf("Counting down from 3:\\n");
    while (count < 3) {
        printf("%d ", 3 - count);
        count++;
    }
    printf("\\n");
    
    // Do-while loop
    int num = 5;
    printf("Do-while loop:\\n");
    do {
        printf("%d ", num);
        num--;
    } while (num > 0);
    printf("\\n");
    
    return 0;
}`
  },
  {
    id: 145,
    title: "C Simple Conditions",
    language: "c",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `#include <stdio.h>

int main() {
    int age = 18;
    
    if (age >= 18) {
        printf("You are an adult\\n");
    } else {
        printf("You are a minor\\n");
    }
    
    // Multiple conditions
    int score = 85;
    
    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    
    // Logical operators
    int temperature = 25;
    if (temperature > 20 && temperature < 30) {
        printf("Nice weather!\\n");
    }
    
    return 0;
}`
  },
  {
    id: 146,
    title: "C Arrays Basics",
    language: "c",
    difficulty: "easy",
    category: "Arrays",
    estimatedTime: 3,
    description: "Creating and using arrays",
    code: `#include <stdio.h>

int main() {
    // Array declaration and initialization
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    printf("First element: %d\\n", numbers[0]);
    printf("Last element: %d\\n", numbers[4]);
    
    // Displaying all elements
    printf("All elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    // Modifying elements
    numbers[0] = 10;
    printf("After modification: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    return 0;
}`
  },
  {
    id: 147,
    title: "C String Basics",
    language: "c",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Working with strings in C",
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[50] = "John";
    char lastName[50] = "Doe";
    char fullName[100];
    
    // String concatenation
    strcpy(fullName, name);
    strcat(fullName, " ");
    strcat(fullName, lastName);
    printf("Full name: %s\\n", fullName);
    
    // String length
    printf("Length: %lu\\n", strlen(fullName));
    
    // String comparison
    if (strcmp(name, "John") == 0) {
        printf("Name matches!\\n");
    }
    
    // String copy
    char copy[50];
    strcpy(copy, name);
    printf("Copy: %s\\n", copy);
    
    return 0;
}`
  },
  {
    id: 148,
    title: "C Structures Basics",
    language: "c",
    difficulty: "easy",
    category: "Structures",
    estimatedTime: 4,
    description: "Creating and using structures",
    code: `#include <stdio.h>

struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    struct Person person1;
    
    // Assigning values
    strcpy(person1.name, "Alice");
    person1.age = 25;
    person1.height = 5.6;
    
    // Accessing members
    printf("Name: %s\\n", person1.name);
    printf("Age: %d\\n", person1.age);
    printf("Height: %.1f\\n", person1.height);
    
    // Initializing during declaration
    struct Person person2 = {"Bob", 30, 6.0};
    printf("Person 2: %s, %d, %.1f\\n", person2.name, person2.age, person2.height);
    
    return 0;
}`
  },
  {
    id: 149,
    title: "C Math Functions",
    language: "c",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Using math functions in C",
    code: `#include <stdio.h>
#include <math.h>

int main() {
    double number = 4.7;
    
    printf("Number: %.1f\\n", number);
    printf("Round: %.0f\\n", round(number));
    printf("Floor: %.0f\\n", floor(number));
    printf("Ceil: %.0f\\n", ceil(number));
    printf("Square root of 16: %.0f\\n", sqrt(16));
    printf("Power 2^3: %.0f\\n", pow(2, 3));
    printf("Absolute of -5: %d\\n", abs(-5));
    
    // Trigonometric functions
    double angle = 45.0;
    double radians = angle * M_PI / 180.0;
    printf("sin(45°): %.4f\\n", sin(radians));
    printf("cos(45°): %.4f\\n", cos(radians));
    
    return 0;
}`
  },
  {
    id: 150,
    title: "C Switch Statement",
    language: "c",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Using switch statements for multiple conditions",
    code: `#include <stdio.h>

int main() {
    int day = 3;
    
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        case 6:
            printf("Saturday\\n");
            break;
        case 7:
            printf("Sunday\\n");
            break;
        default:
            printf("Invalid day\\n");
    }
    
    // Switch with character
    char grade = 'B';
    switch (grade) {
        case 'A':
            printf("Excellent!\\n");
            break;
        case 'B':
            printf("Good!\\n");
            break;
        case 'C':
            printf("Average\\n");
            break;
        default:
            printf("Need improvement\\n");
    }
    
    return 0;
}`
  },
  {
    id: 151,
    title: "Java Basic Input/Output",
    language: "java",
    difficulty: "easy",
    category: "I/O",
    estimatedTime: 2,
    description: "Basic input and output in Java",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello, " + name + "!");
        System.out.println("You are " + age + " years old.");
        
        scanner.close();
    }
}`
  },
  {
    id: 152,
    title: "Java Basic Math Operations",
    language: "java",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Basic arithmetic operations in Java",
    code: `public class Main {
    public static void main(String[] args) {
        int a = 10, b = 3;
        
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
        
        // Increment and decrement
        System.out.println("a++ = " + (a++));
        System.out.println("++a = " + (++a));
    }
}`
  },
  {
    id: 153,
    title: "Java Simple Functions",
    language: "java",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Creating and calling simple methods",
    code: `public class Main {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Sum: " + result);
        
        greet("Alice");
        
        int product = multiply(4, 6);
        System.out.println("Product: " + product);
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static int multiply(int x, int y) {
        return x * y;
    }
}`
  },
  {
    id: 154,
    title: "Java Simple Loops",
    language: "java",
    difficulty: "easy",
    category: "Loops",
    estimatedTime: 3,
    description: "Basic for and while loops",
    code: `public class Main {
    public static void main(String[] args) {
        // For loop
        System.out.println("Counting 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // While loop
        int count = 0;
        System.out.println("Counting down from 3:");
        while (count < 3) {
            System.out.print((3 - count) + " ");
            count++;
        }
        System.out.println();
        
        // Enhanced for loop
        String[] fruits = {"apple", "banana", "orange"};
        System.out.println("Fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}`
  },
  {
    id: 155,
    title: "Java Simple Conditions",
    language: "java",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Basic if-else statements",
    code: `public class Main {
    public static void main(String[] args) {
        int age = 18;
        
        if (age >= 18) {
            System.out.println("You are an adult");
        } else {
            System.out.println("You are a minor");
        }
        
        // Multiple conditions
        int score = 85;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        
        // Logical operators
        int temperature = 25;
        if (temperature > 20 && temperature < 30) {
            System.out.println("Nice weather!");
        }
    }
}`
  },
  {
    id: 156,
    title: "Java Arrays Basics",
    language: "java",
    difficulty: "easy",
    category: "Arrays",
    estimatedTime: 3,
    description: "Creating and using arrays",
    code: `public class Main {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Accessing elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Last element: " + numbers[4]);
        
        // Displaying all elements
        System.out.print("All elements: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        // Modifying elements
        numbers[0] = 10;
        System.out.print("After modification: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
    }
}`
  },
  {
    id: 157,
    title: "Java String Basics",
    language: "java",
    difficulty: "easy",
    category: "Strings",
    estimatedTime: 3,
    description: "Working with strings in Java",
    code: `public class Main {
    public static void main(String[] args) {
        String name = "John";
        String lastName = "Doe";
        
        // String concatenation
        String fullName = name + " " + lastName;
        System.out.println("Full name: " + fullName);
        
        // String length
        System.out.println("Length: " + fullName.length());
        
        // String comparison
        if (name.equals("John")) {
            System.out.println("Name matches!");
        }
        
        // String methods
        System.out.println("Uppercase: " + fullName.toUpperCase());
        System.out.println("Lowercase: " + fullName.toLowerCase());
        
        // Substring
        String sub = fullName.substring(0, 4);
        System.out.println("Substring: " + sub);
    }
}`
  },
  {
    id: 158,
    title: "Java Simple Classes",
    language: "java",
    difficulty: "easy",
    category: "Classes",
    estimatedTime: 4,
    description: "Creating simple classes and objects",
    code: `class Rectangle {
    int width;
    int height;
    
    int getArea() {
        return width * height;
    }
    
    int getPerimeter() {
        return 2 * (width + height);
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.width = 5;
        rect.height = 3;
        
        System.out.println("Width: " + rect.width);
        System.out.println("Height: " + rect.height);
        System.out.println("Area: " + rect.getArea());
        System.out.println("Perimeter: " + rect.getPerimeter());
    }
}`
  },
  {
    id: 159,
    title: "Java Math Functions",
    language: "java",
    difficulty: "easy",
    category: "Math",
    estimatedTime: 2,
    description: "Using math functions in Java",
    code: `public class Main {
    public static void main(String[] args) {
        double number = 4.7;
        
        System.out.println("Number: " + number);
        System.out.println("Round: " + Math.round(number));
        System.out.println("Floor: " + Math.floor(number));
        System.out.println("Ceil: " + Math.ceil(number));
        System.out.println("Square root of 16: " + Math.sqrt(16));
        System.out.println("Power 2^3: " + Math.pow(2, 3));
        System.out.println("Absolute of -5: " + Math.abs(-5));
        
        // Random number
        System.out.println("Random number: " + Math.random());
        
        // Max and min
        System.out.println("Max of 10 and 20: " + Math.max(10, 20));
        System.out.println("Min of 10 and 20: " + Math.min(10, 20));
    }
}`
  },
  {
    id: 160,
    title: "Java Switch Statement",
    language: "java",
    difficulty: "easy",
    category: "Conditionals",
    estimatedTime: 3,
    description: "Using switch statements for multiple conditions",
    code: `public class Main {
    public static void main(String[] args) {
        int day = 3;
        
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
        }
        
        // Switch with character
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent!");
                break;
            case 'B':
                System.out.println("Good!");
                break;
            case 'C':
                System.out.println("Average");
                break;
            default:
                System.out.println("Need improvement");
        }
    }
}`
  },

  // Additional JavaScript Lessons (161-200)
  {
    id: 161,
    title: "JavaScript Arrow Functions",
    language: "javascript",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Modern arrow function syntax",
    code: `// Traditional function
function greet(name) {
return "Hello, " + name;
}

// Arrow function
const greetArrow = (name) => {
return "Hello, " + name;
};

// Arrow function with implicit return
const greetShort = name => "Hello, " + name;

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Arrow function with no parameters
const sayHello = () => "Hello World!";

console.log(greet("Alice"));
console.log(greetArrow("Bob"));
console.log(greetShort("Charlie"));
console.log(add(5, 3));
console.log(sayHello());`
  },
  {
    id: 162,
    title: "JavaScript Default Parameters",
    language: "javascript",
    difficulty: "easy",
    category: "Functions",
    estimatedTime: 3,
    description: "Function parameters with default values",
    code: `function greet(name = "World") {
 return \`Hello, \${name}!\`;
}

function createUser(name, age = 18, active = true) {
 return { name, age, active };
}

function calculateArea(width = 10, height = 5) {
 return width * height;
}

console.log(greet()); // "Hello, World!"
console.log(greet("Alice")); // "Hello, Alice!"

console.log(createUser("Bob")); // {name: "Bob", age: 18, active: true}
console.log(createUser("Charlie", 25)); // {name: "Charlie", age: 25, active: true}

console.log(calculateArea()); // 50
console.log(calculateArea(20)); // 100
console.log(calculateArea(20, 10)); // 200`
  },
  {
    id: 163,
    title: "JavaScript Rest Parameters",
    language: "javascript",
    difficulty: "medium",
    category: "Functions",
    estimatedTime: 4,
    description: "Variable number of function arguments",
    code: `function sum(...numbers) {
 return numbers.reduce((total, num) => total + num, 0);
}

function multiply(multiplier, ...numbers) {
 return numbers.map(num => num * multiplier);
}

function logInfo(message, ...args) {
 console.log(message, ...args);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
console.log(multiply(3, 5, 10)); // [15, 30]

logInfo("Debug:", "error", 404, { status: "failed" });`
  },
  {
    id: 164,
    title: "JavaScript Spread Operator",
    language: "javascript",
    difficulty: "medium",
    category: "Arrays",
    estimatedTime: 4,
    description: "Expanding arrays and objects",
    code: `// Array spreading
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Adding elements
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // [1, 2, 3, 4, 5, 6]

// Object spreading
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // {a: 1, b: 2, c: 3, d: 4}

// Function calls
function add(a, b, c) {
 return a + b + c;
}
let values = [1, 2, 3];
console.log(add(...values)); // 6`
  },
  {
    id: 165,
    title: "JavaScript Array Methods",
    language: "javascript",
    difficulty: "medium",
    category: "Arrays",
    estimatedTime: 5,
    description: "Common array manipulation methods",
    code: `let numbers = [1, 2, 3, 4, 5];

// map - transform each element
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - filter elements
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate values
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find - find first matching element
let found = numbers.find(num => num > 3);
console.log(found); // 4

// some - check if any element matches
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - check if all elements match
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true`
  },
  {
    id: 166,
    title: "JavaScript Object Methods",
    language: "javascript",
    difficulty: "medium",
    category: "Objects",
    estimatedTime: 4,
    description: "Working with object properties and methods",
    code: `let person = {
 name: "John",
 age: 30,
 city: "New York"
};

// Object.keys() - get all keys
console.log(Object.keys(person)); // ["name", "age", "city"]

// Object.values() - get all values
console.log(Object.values(person)); // ["John", 30, "New York"]

// Object.entries() - get key-value pairs
console.log(Object.entries(person));
// [["name", "John"], ["age", 30], ["city", "New York"]]

// Object.assign() - copy properties
let person2 = Object.assign({}, person);
person2.name = "Jane";
console.log(person.name); // "John"
console.log(person2.name); // "Jane"

// Object.freeze() - prevent modifications
let frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 10; // Won't change
console.log(frozen.x); // 1`
  },
  {
    id: 167,
    title: "JavaScript Promises",
    language: "javascript",
    difficulty: "medium",
    category: "Async",
    estimatedTime: 6,
    description: "Asynchronous programming with promises",
    code: `// Creating a promise
let promise = new Promise((resolve, reject) => {
 setTimeout(() => {
   let success = Math.random() > 0.5;
   if (success) {
     resolve("Operation successful!");
   } else {
     reject("Operation failed!");
   }
 }, 1000);
});

// Using the promise
promise
 .then(result => {
   console.log("Success:", result);
 })
 .catch(error => {
   console.log("Error:", error);
 })
 .finally(() => {
   console.log("Operation completed");
 });

// Promise.all - wait for all promises
let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
 .then(values => {
   console.log(values); // [1, 2, 3]
 });

// Promise.race - first promise to resolve
let fast = new Promise(resolve => setTimeout(() => resolve("fast"), 100));
let slow = new Promise(resolve => setTimeout(() => resolve("slow"), 1000));

Promise.race([fast, slow])
 .then(result => {
   console.log(result); // "fast"
 });`
  },
  {
    id: 168,
    title: "JavaScript Async/Await",
    language: "javascript",
    difficulty: "medium",
    category: "Async",
    estimatedTime: 5,
    description: "Modern async programming syntax",
    code: `// Async function
async function fetchData() {
 try {
   let response = await fetch('https://api.example.com/data');
   let data = await response.json();
   return data;
 } catch (error) {
   console.error('Error:', error);
   throw error;
 }
}

// Using async function
async function main() {
 try {
   let data = await fetchData();
   console.log('Data received:', data);
 } catch (error) {
   console.error('Failed to fetch data:', error);
 }
}

// Async with Promise.all
async function fetchMultiple() {
 let urls = [
   'https://api.example.com/users',
   'https://api.example.com/posts',
   'https://api.example.com/comments'
 ];

 try {
   let promises = urls.map(url => fetch(url).then(r => r.json()));
   let results = await Promise.all(promises);
   console.log('All data:', results);
 } catch (error) {
   console.error('Error fetching multiple:', error);
 }
}

// Sequential vs Parallel
async function sequential() {
 let result1 = await fetchData();
 let result2 = await fetchData();
 return [result1, result2];
}

async function parallel() {
 let [result1, result2] = await Promise.all([
   fetchData(),
   fetchData()
 ]);
 return [result1, result2];
}`
  },
  {
    id: 169,
    title: "JavaScript Classes",
    language: "javascript",
    difficulty: "medium",
    category: "OOP",
    estimatedTime: 6,
    description: "ES6 class syntax and inheritance",
    code: `class Person {
 constructor(name, age) {
   this.name = name;
   this.age = age;
 }

 greet() {
   return \`Hello, I'm \${this.name}\`;
 }

 getAge() {
   return this.age;
 }

 setAge(newAge) {
   this.age = newAge;
 }
}

// Inheritance
class Student extends Person {
 constructor(name, age, grade) {
   super(name, age);
   this.grade = grade;
 }

 study() {
   return \`\${this.name} is studying\`;
 }

 greet() {
   return \`Hello, I'm \${this.name}, a student in grade \${this.grade}\`;
 }
}

// Static methods
class MathUtils {
 static add(a, b) {
   return a + b;
 }

 static multiply(a, b) {
   return a * b;
 }
}

// Usage
let person = new Person("Alice", 25);
console.log(person.greet()); // "Hello, I'm Alice"

let student = new Student("Bob", 16, 10);
console.log(student.greet()); // "Hello, I'm Bob, a student in grade 10"
console.log(student.study()); // "Bob is studying"

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 6)); // 24`
  },
  {
    id: 170,
    title: "JavaScript Modules",
    language: "javascript",
    difficulty: "medium",
    category: "Modules",
    estimatedTime: 4,
    description: "ES6 module system",
    code: `// math.js - Module definition
export const PI = 3.14159;

export function add(a, b) {
 return a + b;
}

export function subtract(a, b) {
 return a - b;
}

export class Calculator {
 multiply(a, b) {
   return a * b;
 }

 divide(a, b) {
   return a / b;
 }
}

// Default export
export default function greet(name) {
 return \`Hello, \${name}!\`;
}

// main.js - Module usage
import greet, { PI, add, subtract, Calculator } from './math.js';

console.log(PI); // 3.14159
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6

let calc = new Calculator();
console.log(calc.multiply(6, 7)); // 42

console.log(greet("World")); // "Hello, World!"

// Importing with aliases
import { add as sum, subtract as minus } from './math.js';
console.log(sum(2, 3)); // 5
console.log(minus(8, 3)); // 5`
  }
];