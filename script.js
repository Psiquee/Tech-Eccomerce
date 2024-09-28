document.querySelector('.navbar-toggler').addEventListener('click', function() {
  let navbarCollapse = document.getElementById('navbarButtonsExample');
  navbarCollapse.classList.toggle('show');
});

const productos = [
  // Netbooks
  { id: 1, categoria: "Netbook", nombre: "Netbook Lenovo", precio: 500, imagen: "http://http2.mlstatic.com/D_NQ_NP_2X_886129-MLU76533202292_052024-F.webp", descuento: null, esNuevo: true },
  { id: 2, categoria: "Netbook", nombre: "Netbook HP", precio: 600, imagen: "https://microglobalpromos.com.ar/2023/img/062023/6C5X6LTAC8_3.jpg", descuento: null, esNuevo: false },
  { id: 3, categoria: "Netbook", nombre: "Netbook Dell", precio: 550, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_724346-MLU74110207570_012024-F.webp", descuento: 10, esNuevo: true },
  { id: 4, categoria: "Netbook", nombre: "Netbook Acer", precio: 650, imagen: "https://sistema.langtecnologia.com.ar/img/qloud/1693/5976_3.jpg", descuento: 5, esNuevo: true },
  { id: 5, categoria: "Netbook", nombre: "Netbook Asus", precio: 580, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_622950-MLA72295175214_102023-F.webp", descuento: null, esNuevo: true },
  { id: 6, categoria: "Netbook", nombre: "Netbook Toshiba", precio: 700, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_745022-MLA78424422778_082024-F.webp", descuento: null, esNuevo: false },

  // PC Armadas
  { id: 7, categoria: "Pc Armadas", nombre: "PC Gamer", precio: 1200, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_813452-MLA49570364178_042022-F.webp", descuento: 5, esNuevo: false },
  { id: 8, categoria: "Pc Armadas", nombre: "PC de Oficina", precio: 800, imagen: "https://electropc.com.ar/wp-content/uploads/oficinamoni-jpg.webp", descuento: null, esNuevo: true },
  { id: 9, categoria: "Pc Armadas", nombre: "PC de Diseño", precio: 1500, imagen: "https://nanotec.com.ar/uploads/img/webp/512/eahvimp9l.webp", descuento: null, esNuevo: true },
  { id: 10, categoria: "Pc Armadas", nombre: "PC para Gaming", precio: 2000, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_688193-MLA54924055401_042023-F.webp", descuento: 10, esNuevo: false },
  { id: 11, categoria: "Pc Armadas", nombre: "PC de Estudio", precio: 700, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_610689-MLA54865198580_042023-F.webp", descuento: null, esNuevo: true },
  { id: 12, categoria: "Pc Armadas", nombre: "PC Compacta", precio: 600, imagen: "https://bangho.vtexassets.com/arquivos/ids/161357-800-auto?v=638126711634930000&width=800&height=auto&aspect=true", descuento: 15, esNuevo: false },

  // Perifericos
  { id: 13, categoria: "Perifericos", nombre: "Mouse Gamer", precio: 50, imagen: "https://media.istockphoto.com/id/960058256/es/foto/rat%C3%B3n-para-juegos-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=SRA19eG-pm8zWELnh-HqjM4Q7WfgPbXura1YrqZueaA=", descuento: null, esNuevo: false },
  { id: 14, categoria: "Perifericos", nombre: "Teclado Mecánico", precio: 100, imagen: "https://images.unsplash.com/photo-1655176471504-98ce2bd8af06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descuento: 15, esNuevo: true },
  { id: 15, categoria: "Perifericos", nombre: "Auriculares Inalámbricos", precio: 80, imagen: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descuento: 10, esNuevo: true },
  { id: 16, categoria: "Perifericos", nombre: "Webcam HD", precio: 60, imagen: "https://images.unsplash.com/photo-1503071866712-4af2112f609b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descuento: null, esNuevo: false },
  { id: 17, categoria: "Perifericos", nombre: "Mouse Inalámbrico", precio: 30, imagen: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descuento: null, esNuevo: true },
  { id: 18, categoria: "Perifericos", nombre: "Silla Gamer", precio: 200, imagen: "https://media.istockphoto.com/id/1281207717/es/foto/silla-de-juego-roja-y-negra-aislada.jpg?s=2048x2048&w=is&k=20&c=nUO-hX3uU-wY6uIqe68m6-VQ0DsOS36EqX7IsjtlOd8=", descuento: null, esNuevo: true },

  // Monitores
  { id: 19, categoria: "Monitores", nombre: "Monitor Samsung", precio: 300, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_843829-MLU72646996287_112023-F.webp", descuento: null, esNuevo: false },
  { id: 20, categoria: "Monitores", nombre: "Monitor LG", precio: 350, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_936720-MLU77463381807_072024-F.webp", descuento: 20, esNuevo: true },
  { id: 21, categoria: "Monitores", nombre: "Monitor Dell", precio: 400, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_941863-MLU72645987607_112023-F.webp", descuento: null, esNuevo: false },
  { id: 22, categoria: "Monitores", nombre: "Monitor BenQ", precio: 320, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_613690-MLA44737119650_012021-F.webp", descuento: 10, esNuevo: true },
  { id: 23, categoria: "Monitores", nombre: "Monitor AOC", precio: 400, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_669857-MLA48690757068_122021-F.webp", descuento: 5, esNuevo: true },
  { id: 24, categoria: "Monitores", nombre: "Monitor Asus", precio: 450, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_699498-MLA44770574696_022021-F.webp", descuento: null, esNuevo: false },

  // Celulares
  { id: 25, categoria: "Celulares", nombre: "iPhone 12", precio: 900, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_875663-MLA45730353061_042021-F.webp", descuento: 5, esNuevo: true },
  { id: 26, categoria: "Celulares", nombre: "Samsung Galaxy S21", precio: 850, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_673487-MLA70080811085_062023-F.webp", descuento: 10, esNuevo: false },
  { id: 27, categoria: "Celulares", nombre: "Google Pixel 6 Pro", precio: 780, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_956464-MLU78693703552_092024-F.webp", descuento: null, esNuevo: true },
  { id: 28, categoria: "Celulares", nombre: "Xiaomi Mi 11T Pro Dual", precio: 700, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_993662-MLA69549729008_052023-F.webp", descuento: null, esNuevo: false },
  { id: 30, categoria: "Celulares", nombre: "OnePlus 12 Dual", precio: 1700, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_735066-MLA74505051261_022024-F.webp", descuento: 8, esNuevo: true },
  { id: 31, categoria: "Celulares", nombre: "Motorola Edge 20", precio: 680, imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_681042-MLA78243954834_082024-F.webp", descuento: 10, esNuevo: false }
];



function mostrarProductos(categoria) {
    const container = document.querySelector('.cards-products .row');
    container.innerHTML = ''; 

    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    
    if (productosFiltrados.length === 0) {
        container.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

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
                    <div><button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Add product</button></div>
                    ${producto.esNuevo ? `<span class="badge bg-success">Nuevo</span>` : ''} 
                </div>
            </div>
        </div>
    `).join(''); 

    container.innerHTML = productosHTML; 
}

function mostrarProductosFiltrados(busqueda) {
    const container = document.querySelector('.cards-products .row');
    container.innerHTML = ''; // Limpiar el contenedor

    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) 
    );

    if (productosFiltrados.length === 0) {
        container.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

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
                    <div><button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Add product</button></div>
                    ${producto.esNuevo ? `<span class="badge bg-success">Nuevo</span>` : ''} 
                </div>
            </div>
        </div>
    `).join(''); 

    container.innerHTML = productosHTML; // inserta HTML
}

// event listener
document.getElementById('search-addon').addEventListener('click', function(event) {
    event.preventDefault(); 
    const searchTerm = document.getElementById('searchInput').value; // valor buscado
    if (searchTerm) {
        mostrarProductosFiltrados(searchTerm); // llamo a la funcion
    } else {
        mostrarProductos(''); 
    }
});

window.onload = function() {
    const page = document.querySelector('[data-page]');
    if (page) {
        const categoria = page.getAttribute('data-page');
        mostrarProductos(categoria.charAt(0).toUpperCase() + categoria.slice(1).replace('-', ' '));
    }
};


//carrito
let carrito = [];

function agregarAlCarrito(productId) {
    const producto = productos.find(prod => prod.id === productId);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} ha sido agregado al carrito.`);
        mostrarCarrito(); 
    }
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function mostrarCarrito() {
    const listaCarrito = document.querySelector('#lista-carrito tbody');
    const totalCarrito = document.querySelector('#total-carrito'); 
    listaCarrito.innerHTML = ''; 

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<tr><td colspan="4">El carrito está vacío.</td></tr>';
        totalCarrito.innerText = 'Total: $0'; 
        return; 
    }

    carrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="borrar btn btn-outline-danger"  data-id="${producto.id}">Eliminar</button></td>
        `;
        listaCarrito.appendChild(fila);
    });

    // calcula total
    const total = calcularTotal();
    totalCarrito.innerText = `Total: $${total.toFixed(2)}`; // actualiza el total 
}

function eliminarElemento(e) {
    if (e.target.classList.contains('borrar')) {
        const productoId = parseInt(e.target.getAttribute('data-id'), 10); // convierte el valor a numero
        

        const index = carrito.findIndex(prod => prod.id === productoId); // compara valor como un id
        if (index > -1) {
            carrito.splice(index, 1); //elimina el producto
            mostrarCarrito(); // actualiza la vista 
        }
    }
}

function vaciarCarrito() {
    carrito.length = 0; // asigna 0 al valor del carro
    mostrarCarrito(); // actualiza el carrit
}

// Event listeners
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);
document.querySelector('#lista-carrito').addEventListener('click', eliminarElemento);


// register

//login

//checkout


document.getElementById('checkout-button').addEventListener('click', function() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de continuar.');
        return;
    }
    
    // Almacena el carrito en sessionStorage
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Redirige a la página de checkout
    window.location.href = 'checkout.html'; // Asegúrate de que este sea el nombre correcto de tu archivo
});