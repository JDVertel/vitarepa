<template>
  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Registro de productos</h5></div>

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
                <i class="material-icons">add_circle</i>
                Añadir nuevo producto
              </button>
              <i
                style="margin-right: 5px; cursor: pointer"
                class="bi bi-funnel-fill"
              ></i
              ><input type="number" placeholder="Código producto" />
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead style="align-items: center; text-align: center">
                    <tr>
                      <th>Código Producto</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio Venta</th>
                      <th>Precio Distribuidor</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(dataproductos, index) in productos"
                      :key="index"
                    >
                      <td>{{ dataproductos.codigo }}</td>
                      <td>{{ dataproductos.producto }}</td>
                      <td>{{ dataproductos.cantidad }}</td>
                      <td>{{ dataproductos.precio }}</td>
                      <td>{{ dataproductos.preciodis }}</td>
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
                            <label class="form-label" for="id_producto"
                              ><strong>Código *</strong></label
                            ><input
                              class="form-control"
                              type="number"
                              id="id_producto"
                              placeholder="Del producto"
                              name="id_producto"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="n_producto"
                              ><strong>Producto *</strong></label
                            ><input
                              class="form-control"
                              type="text"
                              id="n_producto"
                              placeholder="Nombre del producto"
                              name="n_producto"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="pre_producto"
                              ><strong>Precio Venta *</strong></label
                            ><input
                              class="form-control"
                              type="number"
                              id="pre_producto"
                              placeholder="$"
                              name="pre_producto"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <label class="form-label" for="pred_producto"
                              ><strong>Precio Distribuidor *</strong></label
                            ><input
                              class="form-control"
                              type="number"
                              id="pred_producto"
                              placeholder="$"
                              name="pred_producto"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-15">
                          <div class="mb-3">
                            <strong>Imágenes *</strong>
                            <p class="ifocarga">
                              {{ imagesSelected }} imágenes seleccionadas
                              (Máximo 4)
                            </p>
                            <div class="logo">
                              <p class="logop">
                                <i class="bi bi-box-arrow-up"></i>
                              </p>
                              <br />
                              <input
                                class="foto"
                                :required="imagesSelected !== 4"
                                type="file"
                                ref="fileInput"
                                accept="image/*"
                                multiple
                                @change="handleFileUpload"
                              />
                            </div>
                            <div
                              style="display: flex"
                              class="d-flex flex-wrap gap-1"
                            >
                              <div
                                v-for="(image, index) in uploadedImages"
                                :key="index"
                                class="image-preview"
                              >
                                <img
                                  class="fixed-size-image"
                                  :src="image.src"
                                  :alt="image.alt"
                                />
                              </div>
                              <i
                                class="eliminar-img bi bi-trash3"
                                @click="clearImages"
                                v-if="uploadedImages.length > 0"
                              ></i>
                            </div>
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
import { productos } from "../../../bd/bd.js";
import { ref } from "vue";

export default {
  setup() {
    const uploadedImages = ref([]); // Almacenar las imágenes cargadas
    let imagesSelected = ref(0); // Contador de imágenes seleccionadas

    const eliminarProducto = (index) => {
      productos.value.splice(index, 1);
    };

    const handleFileUpload = (event) => {
      if (imagesSelected.value >= 4) {
        // Límite de 4 imágenes alcanzado, no permitir más
        return;
      }

      const fileInput = event.target;
      const files = fileInput.files;

      // Recorrer los archivos seleccionados
      for (let i = 0; i < files.length; i++) {
        if (imagesSelected.value >= 4) {
          // Límite de 4 imágenes alcanzado, no permitir más
          break;
        }

        const file = files[i];
        const imageURL = URL.createObjectURL(file);

        uploadedImages.value.push({ src: imageURL, alt: "Imagen" });
        imagesSelected.value++;
      }

      // Limpiar el campo de entrada de archivos si es necesario
      fileInput.value = "";
    };

    const clearImages = () => {
      // Restablecer el array de imágenes cargadas y el contador
      uploadedImages.value = [];
      imagesSelected.value = 0;
    };

    return {
      uploadedImages,
      imagesSelected,
      eliminarProducto,
      handleFileUpload,
      clearImages,
      productos,
      dataproductos: productos,
    };
  },
};
</script>

<style scoped>
input {
  font-size: 12px;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;
}

select {
  font-size: 11px;
}

strong {
  font-size: 12px;
}

.ifocarga {
  font-size: 12px;
}

th,
td {
  text-align: center;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}

@media screen and (max-width: 100px) {
  .row .col-6 {
    flex: 0 0 20%;
    max-width: 25%;
  }
}
</style>
