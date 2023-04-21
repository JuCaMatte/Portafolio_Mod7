// Importamos las referencias de todas las tablas
 import {carrito} from "./carrito.models.js"
 import {categoria} from "./categoria.models.js"
 import {descuento} from "./descuento.models.js"
 import {detalle_carrito} from "./detalle_carrito.models.js"
 import {producto} from "./producto.models.js"
 import {usuario} from "./usuario.models.js"

 //Relaciones


/* usuarios.hasMany(boletas, {
    foreingKey: "id_usuario",
    sourceKey: "id"
});
boletas.belongTo(usuarios, {
    foreingKey: "id_usuario",
    targetId: "id"
}) */

 //Relación uno a muchos entre usuarios y boletas
 //Un usuario puede taner varias boletas de compras
 //Uma boleta pertene a un único usuario

usuario.hasMany(carrito, {foreingKey: "id_usuario"});
carrito.belongsTo(usuario, {foreingKey: "id_usuario"})

//relacion uno a muchos entre categorias y productos
categoria.hasMany(producto , {foreignKey : "id_categoria"});
producto.belongsTo(categoria , {foreignKey : "id_categoria"})

//relación uno a muchos entre descuentos y productos
descuento.hasMany(producto, {foreignKey : "id_descuento"});
producto.belongsTo(descuento , {foreignKey : "id_descuento"})

//relación uno a muchos entre boletas y detalle_boleta
carrito.hasMany(detalle_carrito, {foreingKey: "id_carrito"});
detalle_carrito.belongsTo(carrito, {foreingKey: "id_carrito"})

//relación uno a muchos entre productos y detalle_boleta
producto.hasMany(detalle_carrito , {foreignKey : "id_producto"});
detalle_carrito.belongsTo(producto , {foreignKey : "id_producto"})