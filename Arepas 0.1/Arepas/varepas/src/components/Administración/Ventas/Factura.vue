<template>
  <main>
    <div class="container-global">
      <div id="contenedorT" class="container">
        <form enctype="multipart/form-data" method="post">
          <div id="card-form" class="card shadow mb-3">
            <div id="card-header" class="card-header py-3">
              <p class="text-primary m-0 fw-bold"></p>
            </div>
            <div class="card-body">
              <div class="invoice-header">
                <p><strong>Nombre de la Empresa:</strong> VitArepa</p>
                <p><strong>Dirección:</strong> Charalá Carrera 15 #20-30</p>
                <p><strong>Teléfono:</strong> 3166163979</p>
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
              <table class="table invoice-items">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(datafactura, index) in factura" key="index">
                    <td>{{ datafactura.codigo }}</td>
                    <td>{{ datafactura.producto }}</td>
                    <td>{{ datafactura.cantidad }}</td>
                    <td>{{ datafactura.precio }}</td>
                    <td>{{ datafactura.total }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="invoice-total">
                <p><strong>Total:</strong> $1.000.000</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
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
.logo-img {
  height: 200px;
  width: 200px;
}

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
