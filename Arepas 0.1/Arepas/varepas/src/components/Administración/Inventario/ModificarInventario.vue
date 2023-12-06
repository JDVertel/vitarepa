<template>
  <div class="container-global">
    <div class="separador"><h5 class="titulo">Modificar inventario</h5></div>
    <div>
      <div id="contenedorT" class="container">
        <form enctype="multipart/form-data" method="post">
          <div id="card-form" class="card shadow mb-3">
            <div id="card-header" class="card-header py-3">
              <p class="text-primary m-0 fw-bold">
                <span class="camposObligatorios">Productos registrados</span>
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
                <i class="material-icons">check_circle</i>
                Finalizar cambios
              </button>
              <i
                style="margin-right: 5px; cursor: pointer"
                class="bi bi-funnel-fill"
              ></i
              ><input type="number" placeholder="Código producto" />
            </div>
            <div class="card-body">
              <!-- Tabla -->
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead style="align-items: center; text-align: center">
                    <tr>
                      <th>Código</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(datainventario, index) in inventario"
                      :key="index"
                    >
                      <td>{{ datainventario.codigo }}</td>
                      <td>{{ datainventario.producto }}</td>
                      <td>
                        <input
                          v-model="cantidadStock"
                          class="cantidad"
                          type="number"
                          id="stock"
                          name="stock"
                          required=""
                        />
                      </td>

                      <td>
                        <div class="btns btn-group" role="group">
                          <button
                            type="button"
                            class="btns btn"
                            @click="eliminarProducto(index)"
                          >
                            <i class="bi bi-trash3-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import { inventario } from "../../../bd/bd.js";
import { ref } from "vue";

export default {
  setup() {
    const cantidadStock = ref(1);

    const eliminarProducto = (index) => {
      inventario.value.splice(index, 1);
    };

    return {
      cantidadStock,
      eliminarProducto,
      inventario,
      datainventario: inventario,
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
</style>
