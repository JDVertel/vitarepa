<template>
  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Registro de gastos</h5></div>
      <!-- Start: Ludens - Create-Edit Form -->
      <div id="contenedorT" class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <form enctype="multipart/form-data" method="post">
              <div id="card-form" class="card shadow mb-3">
                <div id="card-header" class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">
                    <span class="camposObligatorios"
                      >Rellene los campos obligatorios *</span
                    >
                  </p>
                </div>
                <!-- Para productos -->
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_tipo">
                          <div style="display: flex; align-items: center">
                            <strong>Tipo *</strong>
                            <i
                              class="material-icons"
                              data-bs-toggle="modal"
                              data-bs-target="#añadir-gasto"
                              style="margin-left: 5px; cursor: pointer"
                            >
                              add_circle
                            </i>
                          </div>
                        </label>

                        <select
                          class="form-select"
                          id="g_tipo"
                          name="g_tipo"
                          required=""
                        >
                          <option value="1">Maquinaria</option>
                          <option value="2">Materia prima</option>
                          <option value="2">Servicios</option>
                          <option value="2">Nomina</option>
                          <option value="2">Arriendo</option>
                          <option value="2">Transporte</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_detalles"
                          ><strong>Detalles *</strong></label
                        ><input
                          class="form-control"
                          type="text"
                          id="g_detalles"
                          placeholder="Detalles del gasto"
                          name="g_detalles"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_valor"
                          ><strong>Valor *</strong></label
                        ><input
                          class="form-control"
                          type="number"
                          id="g_valor"
                          placeholder="$"
                          name="g_valor"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="mb-3">
                        <label class="form-label" for="g_fecha"
                          ><strong>Fecha *</strong></label
                        ><input
                          v-model="fecha"
                          class="form-control dataPicker"
                          type="text"
                          id="g_fecha"
                          placeholder="0"
                          name="g_fecha"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label" for="g_descripcion"
                          ><strong>Descripción *</strong></label
                        ><input
                          class="form-control"
                          type="text"
                          id="g_descripcion"
                          placeholder="Breve descripción del gasto"
                          name="g_descripcion"
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
              </div>
            </form>
          </div>

          <!-- Añadir gasto -->
          <div
            class="modal fade modal-small modal-transparent"
            id="añadir-gasto"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body text-center justify-content-center">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-3 d-flex justify-content-center">
                        <div class="input-group">
                          <input
                            class="form-control"
                            type="text"
                            id="añadir_g"
                            placeholder="Nombre del gasto"
                            name="añadir_g"
                            required=""
                          />
                          <button class="btn btn-custom btn-sm">
                            <i class="bi bi-plus-circle"></i>
                            Añadir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Añadir gasto -->

          <!-- Tabla gastos recientes -->
          <div class="col-sm-12 col-md-6">
            <form enctype="multipart/form-data" method="post">
              <div id="card-form" class="card shadow mb-3">
                <div id="card-header" class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">
                    <span class="camposObligatorios">Gastos recientes</span>
                  </p>
                </div>
                <div class="card-body">
                  <div style="font-size: 12px" class="table-responsive">
                    <table class="table table-bordered">
                      <thead style="align-items: center; text-align: center">
                        <tr>
                          <th>Fecha</th>
                          <th>Tipo</th>
                          <th>Valor</th>
                          <th>Detalles</th>
                          <th>Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="datagastosr in gastosr">
                          <td>{{ datagastosr.fecha }}</td>
                          <td>{{ datagastosr.tipo }}</td>
                          <td>{{ datagastosr.costo }}</td>
                          <td>{{ datagastosr.detalles }}</td>
                          <td>{{ datagastosr.descripcion }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- Tabla gastos recientes -->
        </div>
      </div>
      <!-- End: Ludens - Create-Edit Form -->
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { gastosr } from "../../../bd/bd.js";

export default {
  setup() {
    const fecha = ref("");

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
      gastosr,
      datagastos: gastosr,
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
</style>
