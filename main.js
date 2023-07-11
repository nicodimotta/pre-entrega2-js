// Capturar entradas mediante prompt()
let cantidadMousepad1 = prompt("Ingrese la cantidad de mousepads 1:");
let cantidadMousepad2 = prompt("Ingrese la cantidad de mousepads 2:");
let cantidadMousepad3 = prompt("Ingrese la cantidad de mousepads 3:");
let cantidadMousepad4 = prompt("Ingrese la cantidad de mousepads 4:");
let cantidadMousepad5 = prompt("Ingrese la cantidad de mousepads 5:");

// Convertir las entradas a números
cantidadMousepad1 = parseInt(cantidadMousepad1);
cantidadMousepad2 = parseInt(cantidadMousepad2);
cantidadMousepad3 = parseInt(cantidadMousepad3);
cantidadMousepad4 = parseInt(cantidadMousepad4);
cantidadMousepad5 = parseInt(cantidadMousepad5);

// Declarar variables y objetos necesarios para simular el proceso seleccionado
let mousepads = [
  { id: 1, name: "Mousepad 1", price: 10 },
  { id: 2, name: "Mousepad 2", price: 15 },
  { id: 3, name: "Mousepad 3", price: 12 },
  { id: 4, name: "Mousepad 4", price: 20 },
  { id: 5, name: "Mousepad 5", price: 18 }
];

let cartItems = [];

// Funciones esenciales del proceso a simular
function addToCart(mousepadId, quantity) {
  let mousepad = mousepads.find(item => item.id === mousepadId);
  if (mousepad) {
    let cartItem = {
      id: mousepad.id,
      name: mousepad.name,
      price: mousepad.price,
      quantity: quantity
    };
    cartItems.push(cartItem);
  }
}

function calcularSubtotal() {
  let subtotal = 0;
  for (let item of cartItems) {
    subtotal += item.price * item.quantity;
  }
  return subtotal;
}

function calcularTotal(subtotal, discountPercentage) {
  let discountAmount = (subtotal * discountPercentage) / 100;
  return subtotal - discountAmount;
}

// Métodos de búsqueda y filtrado sobre el Array
function findMousepadById(mousepadId) {
  return mousepads.find(item => item.id === mousepadId);
}

function filterMousepadsByPrice(minPrice, maxPrice) {
  return mousepads.filter(item => item.price >= minPrice && item.price <= maxPrice);
}

// Ejemplo de uso
addToCart(1, cantidadMousepad1);
addToCart(2, cantidadMousepad2);
addToCart(3, cantidadMousepad3);
addToCart(4, cantidadMousepad4);
addToCart(5, cantidadMousepad5);

let subtotal = calcularSubtotal();
let total = calcularTotal(subtotal, 10);

console.log("Subtotal: $" + subtotal);
console.log("Total (con 10% de descuento): $" + total);
console.log("Mousepad con ID 3: ", findMousepadById(3));
console.log("Mousepads entre $10 y $15: ", filterMousepadsByPrice(10, 15));

// Efectuar una salida utilizando alert() o console.log()
let output = "Carrito de Compras:\n\n";
for (let item of cartItems) {
  output += "Nombre: " + item.name + "\n";
  output += "Cantidad: " + item.quantity + "\n";
  output += "Precio Unitario: $" + item.price + "\n";
  output += "Subtotal: $" + (item.price * item.quantity) + "\n\n";
}
output += "Subtotal: $" + subtotal + "\n";
output += "Total (con 10% de descuento): $" + total;

alert(output);