document.querySelector('.navbar-toggler').addEventListener('click', function() {
  let navbarCollapse = document.getElementById('navbarButtonsExample');
  navbarCollapse.classList.toggle('show');
});

const productos = [
  // Netbooks
  { id: 1, categoria: "Netbook", nombre: "Netbook Lenovo", precio: 500, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 2, categoria: "Netbook", nombre: "Netbook HP", precio: 600, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
  { id: 3, categoria: "Netbook", nombre: "Netbook Dell", precio: 550, imagen: "https://placehold.co/150x150", descuento: 10, esNuevo: true },
  { id: 4, categoria: "Netbook", nombre: "Netbook Acer", precio: 650, imagen: "https://placehold.co/150x150", descuento: 5, esNuevo: true },
  { id: 5, categoria: "Netbook", nombre: "Netbook Asus", precio: 580, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 6, categoria: "Netbook", nombre: "Netbook Toshiba", precio: 700, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },

  // PC Armadas
  { id: 7, categoria: "Pc Armadas", nombre: "PC Gamer", precio: 1200, imagen: "https://placehold.co/150x150", descuento: 5, esNuevo: false },
  { id: 8, categoria: "Pc Armadas", nombre: "PC de Oficina", precio: 800, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 9, categoria: "Pc Armadas", nombre: "PC de Diseño", precio: 1500, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 10, categoria: "Pc Armadas", nombre: "PC para Gaming", precio: 2000, imagen: "https://placehold.co/150x150", descuento: 10, esNuevo: false },
  { id: 11, categoria: "Pc Armadas", nombre: "PC de Estudio", precio: 700, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 12, categoria: "Pc Armadas", nombre: "PC Compacta", precio: 600, imagen: "https://placehold.co/150x150", descuento: 15, esNuevo: false },

  // Perifericos
  { id: 13, categoria: "Perifericos", nombre: "Mouse Gamer", precio: 50, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
  { id: 14, categoria: "Perifericos", nombre: "Teclado Mecánico", precio: 100, imagen: "https://placehold.co/150x150", descuento: 15, esNuevo: true },
  { id: 15, categoria: "Perifericos", nombre: "Auriculares Inalámbricos", precio: 80, imagen: "https://placehold.co/150x150", descuento: 10, esNuevo: true },
  { id: 16, categoria: "Perifericos", nombre: "Webcam HD", precio: 60, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
  { id: 17, categoria: "Perifericos", nombre: "Mouse Inalámbrico", precio: 30, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },
  { id: 18, categoria: "Perifericos", nombre: "Silla Gamer", precio: 200, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: true },

  // Monitores
  { id: 19, categoria: "Monitores", nombre: "Monitor Samsung", precio: 300, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
  { id: 20, categoria: "Monitores", nombre: "Monitor LG", precio: 350, imagen: "https://placehold.co/150x150", descuento: 20, esNuevo: true },
  { id: 21, categoria: "Monitores", nombre: "Monitor Dell", precio: 400, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
  { id: 22, categoria: "Monitores", nombre: "Monitor BenQ", precio: 320, imagen: "https://placehold.co/150x150", descuento: 10, esNuevo: true },
  { id: 23, categoria: "Monitores", nombre: "Monitor AOC", precio: 400, imagen: "https://placehold.co/150x150", descuento: 5, esNuevo: true },
  { id: 24, categoria: "Monitores", nombre: "Monitor Asus", precio: 450, imagen: "https://placehold.co/150x150", descuento: null, esNuevo: false },
];


function mostrarProductos(categoria) {
  const container = document.querySelector('.cards-products .row');
  container.innerHTML = ''; 

  const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

  const productosHTML = productosFiltrados.map(producto => `
      <div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
              <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                  <img src="${producto.imagen}" class="w-100" alt="${producto.nombre}" />
              </div>
              <div class="card-body">
                  <a href="#" class="text-reset">
                      <h5 class="card-title mb-3">${producto.nombre}</h5>
                  </a>
                 <h6 class="mb-3">
                        ${producto.descuento ? 
                            `<s>$${producto.precio}</s><strong class="ms-2 text-danger">$${(producto.precio * (1 - producto.descuento / 100)).toFixed(2)}</strong>` : 
                            `$${producto.precio}`
                        }
                    </h6>
                  ${producto.esNuevo ? `<span class="badge bg-success">Nuevo</span>` : ''} 
              </div>
          </div>
      </div>
  `).join(''); // unir elementos

  container.innerHTML = productosHTML; // insertar html
}


window.onload = function() {
  const page = document.querySelector('[data-page]');

  if (page) {
      const categoria = page.getAttribute('data-page');
      mostrarProductos(categoria.charAt(0).toUpperCase() + categoria.slice(1).replace('-', ' ')); // 
  }
};
