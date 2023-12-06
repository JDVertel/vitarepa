import { ref } from "vue";

// Ventas
export const factura = ref([
  {
    codigo: "101",
    producto: "Arepa de maiz",
    cantidad: 10,
    precio: 50000,
    total: 500000,
  },
  {
    codigo: "101",
    producto: "Arepa de maiz",
    cantidad: 10,
    precio: 50000,
    total: 500000,
  },
]);

// Gastos
export const gastosr = ref([
  {
    fecha: "20-11-23",
    tipo: "Maquinaria",
    costo: 50000,
    detalles: "Detalles",
    descripcion: "Descripción",
  },
]);

// Clientes
export const clientes = ref([
  {
    nreg_cliente: "Ryan",
    documento: 1095298209,
    telefono: 3222431440,
    correo: "ryan@gmail.com",
    tipo: "Independiente",
  },
]);

// inventario
export const productos = ref([
  {
    codigo: 101,
    producto: "Arepa de maiz",
    cantidad: 10,
    precio: 50000,
    preciodis: 40000,
  },
]);

export const inventario = ref([
  {
    codigo: 101,
    producto: "Arepa de maiz",
  },
]);

// Informes
export const ventas = ref([
  {
    fecha: "2023-11-21",
    codigoF: 10203,
    codigoP: 101,
    producto: "Arepa de maiz",
    cantidad: 10,
    precioUnitario: 50000,
    total: 500000,
    cliente: "Ryan",
    docliente: 1095298209,
  },

  {
    fecha: "2023-11-22",
    codigoF: 10203,
    codigoP: 101,
    producto: "Arepa de maiz",
    cantidad: 10,
    precioUnitario: 50000,
    total: 500000,
    cliente: "Ryan",
    docliente: 1095298209,
  },
]);

export const gastos = ref([
  {
    fecha: "2023-11-01",
    tipo: "Servicios",
    costo: 80000,
    detalles: "Servicio mensual",
    descripcion: "Sercio de luz",
  },
  {
    fecha: "2023-11-01",
    tipo: "Arriendo",
    costo: 400000,
    detalles: "Arriendo mensual",
    descripcion: "Arriendo del local",
  },
  {
    fecha: "2023-11-01",
    tipo: "Transporte",
    costo: 200000,
    detalles: "Domicilio a otro municipio",
    descripcion: "Envío a San Gil",
  },
]);

export const items = ref([
  {
    fecha: "2023-11-01",
    venta: { nombre: "Arepa natural", valor: "$50000" },
    gasto: { nombre: "Arriendo", valor: "$100000" },
  },
  {
    fecha: "2023-11-02",
    venta: { nombre: "Arepa natural", valor: "$50000" },
    gasto: { nombre: "Servicios", valor: "$50000" },
  },
  {
    fecha: "2023-11-03",
    venta: { nombre: "Arepa choclo", valor: "$20000" },
    gasto: { nombre: "Transporte", valor: "$20000" },
  },
  {
    fecha: "2023-11-04",
    venta: { nombre: "Arepa maiz", valor: "$40000" },
    gasto: { nombre: "Maquinaria", valor: "$0" },
  },
  {
    fecha: "2023-11-05",
    venta: { nombre: "Arepa sin azucar", valor: "$20000" },
    gasto: { nombre: "Nomina", valor: "$0" },
  },
]);
