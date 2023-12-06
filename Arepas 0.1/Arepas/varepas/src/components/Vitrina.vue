<template>
  <!-- Logo -->
  <div
    style="position: relative"
    class="logotipo animate__animated animate__backInDown"
  >
    <img src="https://i.ibb.co/yF1mWnW/Sabor-familiar-4.png" alt="Logo" />
  </div>

  <div class="container-global">
    <div class="separador">
      <h5 class="titulo">Vitrina</h5>
    </div>
  </div>

  <!-- Contenedor de productos -->
  <div class="contenedor-imagenes animate__animated animate__fadeInLeft">
    <!-- Img 1 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button
          type="button"
          class="btn btn-light round-btn2"
          data-bs-toggle="modal"
          data-bs-target="#infop"
        >
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 2 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 3 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 4 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 5 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 6 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 7 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button type="button" class="btn btn-light round-btn2">
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>

    <!-- Img 8 -->
    <div class="imagen">
      <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
      <div class="overlay">
        <h3 class="precioV">
          <i class="material-icons">paid</i>
          50.000
        </h3>

        <button
          @click="mostrarReserva"
          type="button"
          class="btn btn-light round-btn2"
        >
          <i class="iadd material-icons">add</i>
        </button>
      </div>
    </div>
  </div>

  <div>
    <!-- Espacio para el modal -->
    <div
      class="modal fade modal-small"
      id="infop"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Detalles del producto
            </h1>
            <button
              type="button"
              class="close-modal bi bi-x-lg"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="contenedor-imagenes-Modal">
                <!-- Img 1 -->
                <div class="imagen">
                  <img src="https://i.ibb.co/SR2D4Mm/1.jpg" alt="" />
                </div>
                <div class="row animate__animated animate__fadeInho">
                  <div class="col-12">
                    <div class="card-modal">
                      <div class="card-body">
                        <h5 class="card-title-modal">Arepa de maiz pelado</h5>
                        <hr class="custom-hr" />
                        <p class="card-text-modal">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque nemo voluptatum cumque! Corporis vel.
                        </p>
                        <hr class="custom-hr" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <select
                    class="form-select"
                    id="s_unidad"
                    name="s_unidad"
                    @change="seleccionado = true"
                  >
                    <option disabled selected>Seleccione cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>

                  <button class="btn btn-custom" :disabled="!seleccionado">
                    <i class="bi bi-cart2"></i> Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Espacio para el modal -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const seleccionado = ref(false);
    return {
      seleccionado,
    };
  },
};
</script>

<style scoped></style>
