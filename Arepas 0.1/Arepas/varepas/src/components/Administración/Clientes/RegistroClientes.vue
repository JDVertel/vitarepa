<template>
  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Registro de clientes</h5></div>

      <div id="contenedorT" class="container">
        <form enctype="multipart/form-data" method="post">
          <div id="card-form" class="card shadow mb-3">
            <div id="card-header" class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span class="camposObligatorios">Clientes registrados</span>
              </p>
            </div>
            <div class="container mt-3">
              <button
                class="btn-sm btn-custom btn mb-2"
                data-bs-toggle="modal"
                data-bs-target="#crearcliente"
                type="button"
                style="display: flex; align-items: center"
              >
                <i class="material-icons" style="margin-right: 5px"
                  >add_circle</i
                >
                Añadir nuevo cliente
              </button>
              <i
                style="margin-right: 5px; cursor: pointer"
                class="bi bi-funnel-fill"
              ></i
              ><input type="number" placeholder="Documento cliente" />
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead style="align-items: center; text-align: center">
                    <tr>
                      <th>Cliente</th>
                      <th>Documento</th>
                      <th>Teléfono</th>
                      <th>Correo</th>
                      <th>Tipo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(dataclientes, index) in clientes" :key="index">
                      <td>{{ dataclientes.nreg_cliente }}</td>
                      <td>{{ dataclientes.documento }}</td>
                      <td>{{ dataclientes.telefono }}</td>
                      <td>{{ dataclientes.correo }}</td>
                      <td>{{ dataclientes.tipo }}</td>
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
                                data-bs-target="#editarp"
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
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Espacio para el modal de creación -->
      <div
        class="modal fade modal-small modal-transparent"
        id="crearcliente"
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
                              ><strong>Cliente *</strong></label
                            ><input
                              class="form-control"
                              type="text"
                              id="nreg_cliente"
                              placeholder="Nombre del cliente"
                              name="nreg_cliente"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="cc_cliente"
                              ><strong>Número documento *</strong></label
                            ><input
                              class="form-control"
                              type="text"
                              id="cc_cliente"
                              placeholder="Ej: 1095298209"
                              name="cc_cliente"
                              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                              pattern="[0-9]{12,}"
                              title="Ingresa al menos 12 números"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="tel_cliente"
                              ><strong>Teléfono *</strong></label
                            ><input
                              class="form-control"
                              type="text"
                              id="tel_cliente"
                              placeholder="Teléfono de contacto"
                              name="tel_cliente"
                              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                              pattern="[0-9]{10,}"
                              title="Ingresa al menos 10 números"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="c_cliente"
                              ><strong>Correo *</strong></label
                            ><input
                              class="form-control"
                              type="email"
                              id="c_cliente"
                              placeholder="Ej: ryan@gmail.com"
                              name="c_cliente"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="tipo_cliente"
                              ><strong>Tipo *</strong></label
                            >
                            <select
                              class="form-select"
                              id="tipo_cliente"
                              name="tipo_cliente"
                              required=""
                            >
                              <option value="1">Proveedor</option>
                              <option value="2">Independiente</option>
                            </select>
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
                        ><button
                          class="btn btn-sm btn-custom-form"
                          type="reset"
                        >
                          Limpiar</button
                        ><button
                          class="btn btn-sm btn-custom-form"
                          type="submit"
                        >
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
    </div>
  </main>
</template>

<script>
import { clientes } from "../../../bd/bd.js";

export default {
  setup() {
    const eliminarProducto = (index) => {
      clientes.value.splice(index, 1);
    };

    return {
      eliminarProducto,
      clientes,
      dataclientes: clientes,
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
  font-size: 11px;
}

select {
  font-size: 11px;
}

strong {
  font-size: 12px;
}

input {
  font-size: 12px;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;
}

@media screen and (max-width: 100px) {
  .row .col-6 {
    flex: 0 0 20%;
    max-width: 25%;
  }
}
</style>
