<template>
  <div class="container-global">
    <div class="separador"><h5 class="titulo">Informe de ventas</h5></div>
    <div id="contenedorT" class="container">
      <form enctype="multipart/form-data" method="post">
        <div id="card-form" class="card shadow mb-3">
          <div id="card-header" class="card-header py-3">
            <p class="text-primary m-0 fw-bold">
              <span class="camposObligatorios">Historial del ventas</span>
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
                  <i id="icono-modal" class="material-icons align-middle"
                    >search</i
                  >
                </button>
                <div class="btnventas btn-group dropdown" role="group">
                  <button
                    type="button"
                    class="btnventas"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="material-icons">filter_alt</i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item"
                        ><i
                          style="margin-right: 5px"
                          class="bi bi-file-text-fill"
                        ></i
                        ><input type="number" placeholder="Código factura"
                      /></a>
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><i style="margin-right: 5px" class="bi bi-box-fill"></i
                        ><input type="number" placeholder="Código producto"
                      /></a>
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><i
                          style="margin-right: 5px"
                          class="bi bi-person-fill"
                        ></i
                        ><input type="number" placeholder="Documento cliente"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Tabla -->
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead style="align-items: center; text-align: center">
                  <tr>
                    <th>Fecha</th>
                    <th>Código Factura</th>
                    <th>Código Producto</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                    <th>Cliente</th>
                    <th>Documento Cliente</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(dataventa, index) in ventas" :key="index">
                    <td>{{ dataventa.fecha }}</td>
                    <td>{{ dataventa.codigoF }}</td>
                    <td>{{ dataventa.codigoP }}</td>
                    <td>{{ dataventa.producto }}</td>
                    <td>{{ dataventa.cantidad }}</td>
                    <td>{{ dataventa.precioUnitario }}</td>
                    <td>{{ dataventa.total }}</td>
                    <td>{{ dataventa.cliente }}</td>
                    <td>{{ dataventa.docliente }}</td>
                    <td>
                      <div class="btnventas btn-group dropstart" role="group">
                        <button
                          type="button"
                          class="btnventas btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="material-icons">settings</i>
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                              class="dropdown-item"
                              @click="eliminarProducto(index)"
                              ><i
                                style="margin-right: 5px"
                                class="bi bi-trash3-fill"
                              ></i
                              >Eliminar</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ventas } from "../../../bd/bd.js";

export default {
  setup() {
    const eliminarProducto = (index) => {
      ventas.value.splice(index, 1);
    };

    return {
      ventas,
      eliminarProducto,
      dataventa: ventas,
    };
  },
};
</script>

<style scoped>
th,
td {
  text-align: center;
  padding: 5px;
}

th {
  background-color: #e6e6e6;
}

input {
  font-size: 12px;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;
}
</style>
