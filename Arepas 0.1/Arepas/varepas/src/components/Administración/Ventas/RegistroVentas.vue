<template>
  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Registro de ventas</h5></div>

      <div id="contenedorT" class="container">
        <form enctype="multipart/form-data" method="post">
          <div id="card-form" class="card shadow mb-3">
            <div id="card-header" class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span class="camposObligatorios">Facturar</span>
              </p>
            </div>
            <div class="card-body">
              <div class="invoice-header">
                <p><strong>Nombre de la Empresa:</strong> VitArepa</p>
                <p><strong>Dirección:</strong> Charalá Carrera 14 #17-55</p>
                <p><strong>Teléfono:</strong> 3118610819</p>
              </div>

              <hr />

              <div class="invoice-details">
                <div class="datos-factura">
                  <p>
                    <strong>Nombre cliente:</strong>
                    <input
                      class="factura"
                      type="text"
                      v-model="nombreCliente"
                    />
                  </p>
                  <p>
                    <strong>Documento cliente:</strong>
                    <input
                      class="factura"
                      type="number"
                      v-model="documentoCliente"
                    />
                  </p>
                </div>
                <div>
                  <p><strong>Nro Factura:</strong> 10203</p>
                  <p>
                    <strong>Fecha:</strong>
                    <input
                      v-model="fecha"
                      type="text"
                      class="factura datePicker"
                    />
                  </p>
                </div>
              </div>

              <div class="button-container">
                <button
                  class="btnventas"
                  data-bs-toggle="modal"
                  data-bs-target="#añadirventa"
                  type="button"
                >
                  <i class="material-icons">add_circle</i>
                </button>

                <button class="btnventas" type="button">
                  <i class="material-icons">print</i>
                </button>
              </div>
              <table class="table invoice-items">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(datafactura, index) in factura" key="index">
                    <td>{{ datafactura.codigo }}</td>
                    <td>{{ datafactura.producto }}</td>
                    <td>{{ datafactura.cantidad }}</td>
                    <td>{{ datafactura.precio }}</td>
                    <td>{{ datafactura.total }}</td>
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
                              data-bs-toggle="modal"
                              data-bs-target="#añadirventa"
                              ><i
                                style="margin-right: 5px"
                                class="bi bi-pencil-fill"
                              ></i
                              >Editar</a
                            >
                          </li>
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

              <div class="invoice-total">
                <p><strong>Total:</strong> $1.000.000</p>
              </div>
            </div>
          </div>
          <div class="text-end mb-3">
            <center>
              <a
                class="btn btn-sm btn-custom-form"
                role="button"
                href="#PanelAdmin"
                >Cancelar</a
              ><button class="btn btn-sm btn-custom-form" type="reset">
                Limpiar</button
              ><button class="btn btn-sm btn-custom-form" type="submit">
                <i class="bi bi-floppy-fill"></i>
                Registrar
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>

    <!-- Espacio para el modal de creación -->
    <div
      class="modal fade modal-small modal-transparent"
      id="añadirventa"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="col-sm-12 col-md-12">
              <form enctype="multipart/form-data" method="post">
                <div id="card-form" class="card shadow mb-3">
                  <div id="card-header" class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">
                      <span class="camposObligatorios"
                        >Rellene los campos obligatorios *</span
                      >
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6">
                        <div class="mb-3">
                          <label class="form-label" for="nreg_cliente"
                            ><strong>Código</strong></label
                          ><input
                            class="form-control"
                            type="number"
                            id="nreg_cliente"
                            placeholder="Del producto"
                            name="nreg_cliente"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-3">
                          <label class="form-label" for="s_producto"
                            ><strong>Producto *</strong></label
                          >
                          <select
                            class="form-select"
                            id="s_producto"
                            name="s_producto"
                            required=""
                          >
                            <option value="1">Arepa 1</option>
                            <option value="2">Arepa 2</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-3">
                          <label class="form-label" for="nreg_cliente"
                            ><strong>Cantidad *</strong></label
                          ><input
                            class="form-control"
                            type="number"
                            id="nreg_cliente"
                            placeholder="0"
                            name="nreg_cliente"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="mb-3">
                          <label class="form-label" for="pre_producto"
                            ><strong>Precio *</strong></label
                          ><input
                            disabled
                            class="form-control"
                            type="number"
                            id="pre_producto"
                            name="pre_producto"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-end mb-3">
                    <center>
                      <a
                        class="btn btn-sm btn-custom-form"
                        type="button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >Cancelar</a
                      ><button class="btn btn-sm btn-custom-form" type="reset">
                        Limpiar</button
                      ><button class="btn btn-sm btn-custom-form" type="submit">
                        <i class="bi bi-floppy-fill"></i>
                        Registrar
                      </button>
                    </center>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Espacio para el modal de creación -->
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { factura } from "../../../bd/bd.js";

export default {
  setup() {
    const fecha = ref("");

    const eliminarProducto = (index) => {
      factura.value.splice(index, 1);
    };

    onMounted(() => {
      init_date();
    });

    function init_date() {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const formattedDay = day < 10 ? `0${day}` : day;

      fecha.value = `${formattedDay}-${formattedMonth}-${now
        .getFullYear()
        .toString()
        .substr(2, 2)}`;
    }

    return {
      fecha,
      eliminarProducto,
      factura,
      dataclientes: factura,
    };
  },
};
</script>

<style scoped>
/* Estilos para vista previa de factura */
.invoice-header {
  text-align: start;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
}

.invoice-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 12px;
}

.datos-factura {
  flex: 1;
  font-size: 12px;
}

.invoice-items {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 12px;
}

.invoice-total {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
}

input {
  font-size: 12px;
}

select {
  font-size: 11px;
}

strong {
  font-size: 12px;
}

.factura {
  border-style: none;
  max-width: 100px;
  font-size: 12px;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}
.button-container {
  display: flex;
}
/* Estilos para vista previa de factura */
</style>
