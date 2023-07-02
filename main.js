class Producto {
  constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }

  verProductos() {
    return `${this.nombre} (Categoría: ${this.categoria}) \n Precio: $ ${this.precio} \n`;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarAlCarrito(producto) {
    this.productos.push(producto);
  }

  verCarrito() {
    let mensaje = "Carrito:\n";
    if (carrito.productos.length === 0) {
      mensaje += "El carrito está vacío";
    } else {
      carrito.productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - ${
          producto.categoria
        } - ${producto.precio}\n`;
      });
    }
    alert(mensaje);
  }

modificarCarrito() {
    if (this.productos.length === 0) {
      alert("El carrito está vacío");
      return;
    }
  
    let mensaje = "Productos en el carrito:\n";
    this.productos.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.nombre} - ${producto.categoria} - ${producto.precio}\n`;
    });
  
    const numeroProducto = parseInt(
      prompt(mensaje + "\nIngresa el número del producto que deseas eliminar del carrito:")
    );
  
    if (numeroProducto >= 1 && numeroProducto <= this.productos.length) {
      this.productos.splice(numeroProducto - 1, 1);
  
      alert(carrito.verCarrito());
    } else {
      alert("Número inválido.");
    }
  }
}  

class Productos {
  verTodosLosProductos() {
    let mensaje = "Todos los Productos:\n";
    misProductos.forEach((producto, index) => {
      mensaje += index + 1 + ". " + producto.verProductos() + "\n";
    });
    alert(mensaje);
  }

  elegirProductos() {
    let mensaje = "Seleccione un producto:\n";
    misProductos.forEach((producto, index) => {
      mensaje += `${index + 1}. ${producto.nombre}\n`;
    });

    let opcion;
    do {
      opcion = parseInt(
        prompt(mensaje + "\n" + "Presione 0 para volver al menú principal")
      );
      if (opcion >= 1 && opcion <= misProductos.length) {
        const productoSeleccionado = misProductos[opcion - 1];
        carrito.agregarAlCarrito(productoSeleccionado);
      } else if (opcion !== 0) {
        console.log("Número inválido");
      }
    } while (opcion !== 0);
  }
}

const misProductos = [
  new Producto("Cuadro Geometrico", "Decoración", 5000),
  new Producto("Cuadro Luna", "Decoración", 5500),
  new Producto("Cuadro Fotografia", "Decoración", 4000),
  new Producto("Taza cerámica", "Cocina", 3000),
  new Producto("Taza vidrio", "Cocina", 2500),
  new Producto("Lapicero grande", "Oficina", 4000),
  new Producto("Lapicero chico", "Oficina", 3000),
];

const carrito = new Carrito();
const productos = new Productos(carrito);

function ecommerce() {
  do {
    opcion = parseInt(
      prompt(
        "Elige una opción:\n1. Ver todos los productos\n2. Agregar producto al carrito\n3. Ver carrito\n4. Modificar Carrito\n0. Salir"
      )
    );

    switch (opcion) {
      case 1:
        productos.verTodosLosProductos();
        break;
      case 2:
        productos.elegirProductos();
        break;
      case 3:
        carrito.verCarrito();
        break;
      case 4:
        carrito.modificarCarrito();
        break;
      default:
        alert("Opción inválida");
        break;
    }
  } while (opcion !== 0);
}

ecommerce();
