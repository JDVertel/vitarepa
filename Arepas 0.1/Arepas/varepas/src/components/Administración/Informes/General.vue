<template>
  <div class="container-global">
    <div class="separador"><h5 class="titulo">Informe general</h5></div>
    <div>
      <div id="contenedorT" class="container">
        <form enctype="multipart/form-data" method="post">
          <div id="card-form" class="card shadow mb-3">
            <div id="card-header" class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span class="camposObligatorios">Clientes registrados</span>
              </p>
            </div>
            <div class="container mt-3">
              <div>
                <!-- Fechas -->
                <div class="c-fechas d-flex justify-content-between">
                  <div class="c-input">
                    <div style="margin-right: 10px" class="input-group-sm">
                      <span class="input-group-text" id="addon-wrapping"
                        >Inicio</span
                      >
                      <input
                        type="date"
                        class="form-control"
                        v-model="fechaInicio"
                      />
                    </div>
                  </div>

                  <div style="display: inline-block">
                    <div class="input-group-sm">
                      <span class="input-group-text" id="addon-wrapping"
                        >Final</span
                      >
                      <input
                        type="date"
                        class="form-control"
                        v-model="fechaFin"
                      />
                    </div>
                  </div>
                  <button type="button" class="btn buscar-tablas">
                    Buscar
                    <i id="icono-modal" class="material-icons align-middle"
                      >search</i
                    >
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!-- Tabla -->
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th colspan="2">Ventas</th>
                      <th colspan="2">Gastos</th>
                    </tr>
                    <tr>
                      <th scope="col">Fecha</th>
                      <th>Nombre</th>
                      <th>Valor</th>
                      <th>Nombre</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(datageneral, index) in items" :key="index">
                      <th>{{ datageneral.fecha }}</th>
                      <td>{{ datageneral.venta.nombre }}</td>
                      <td>{{ datageneral.venta.valor }}</td>
                      <td>{{ datageneral.gasto.nombre }}</td>
                      <td>{{ datageneral.gasto.valor }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Balance</th>
                      <td colspan="2">{{ totalVentas }}</td>
                      <td colspan="2">{{ totalGastos }}</td>
                    </tr>
                  </tfoot>
                </table>
                <p class="ganancias-general">
                  Ganancia: {{ totalVentas - totalGastos }}
                </p>
              </div>
              <!-- Tabla -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { items } from "../../../bd/bd.js";

export default {
  setup() {
    return {
      items,
      datageneral: items,
    };
  },
  computed: {
    totalVentas() {
      return this.items.reduce(
        (total, item) =>
          total +
          parseFloat(item.venta.valor.replace("$", "").replace(",", ".")),
        0
      );
    },
    totalGastos() {
      return this.items.reduce(
        (total, item) =>
          total +
          parseFloat(item.gasto.valor.replace("$", "").replace(",", ".")),
        0
      );
    },
  },
};
</script>

<style scoped>
th {
  background-color: #e6e6e6; /* Color de fondo para las celdas del encabezado */
}
</style>
