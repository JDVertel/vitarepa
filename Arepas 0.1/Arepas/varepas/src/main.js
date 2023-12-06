import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

//componentes

// Navbar (Elementos que se muestran siempre)
import App from "./App.vue";

// Navegación
import Home from "../src/components/Home.vue";
import Vitrina from "../src/components/Vitrina.vue";
import PanelAdmin from "../src/components/Administración/PanelAdmin.vue";

// Ventas
import RegistroVentas from "../src/components/Administración/Ventas/RegistroVentas.vue";
import Factura from "../src/components/Administración/Ventas/Factura.vue";

// Gastos
import RegistroGastos from "../src/components/Administración/Gastos/RegistroGastos.vue";

// Clientes
import RegistroClientes from "../src/components/Administración/Clientes/RegistroClientes.vue";

// Inventario
import RegistroProductos from "../src/components/Administración/Inventario/RegistroProductos.vue";
import ModificarInventario from "../src/components/Administración/Inventario/ModificarInventario.vue";

// Informes
import Ventas from "../src/components/Administración/Informes/Ventas.vue";
import Gastos from "../src/components/Administración/Informes/Gastos.vue";
import General from "../src/components/Administración/Informes/General.vue";















// Definir rutas
const routes = [

// Navegación
  {
    path: "/",
    component: Home,
  },

  { path: "/Vitrina", component: Vitrina },
  { path: "/PanelAdmin", component: PanelAdmin },

  // Ventas
  { path: "/RegistroVentas", component: RegistroVentas },
  { path: "/Factura", component: Factura },

  // Gastos
  { path: "/RegistroGastos", component: RegistroGastos },

  // Clientes
  { path: "/RegistroClientes", component: RegistroClientes },

  // Inventario
  { path: "/RegistroProductos", component: RegistroProductos },
  { path: "/ModificarInventario", component: ModificarInventario },

  // Informes
  { path: "/Ventas", component: Ventas },
  { path: "/Gastos", component: Gastos },
  { path: "/General", component: General },
];





















//objeto rutas - vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//instancia de vue
const app = createApp(App);

app.use(router);

app.mount("#app");
