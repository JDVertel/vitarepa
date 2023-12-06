<template>
  <nav class="navbar bg-body-tertiary">
    <div
      class="container-nav d-flex justify-content-between align-items-center"
    >
      <button
        class="toggle-btn"
        data-bs-target="#offcanvas-menu"
        data-bs-toggle="offcanvas"
      >
        &#9776;
      </button>
      <i
        class="toggle-btn bi bi-cart2"
        data-bs-target="#offcanvas-menu-derecha"
        data-bs-toggle="offcanvas"
      ></i>
    </div>
  </nav>

  <!-- Start: Sidebar -->
  <div
    class="offcanvas offcanvas-start bg-body"
    tabindex="-1"
    data-bs-backdrop="false"
    id="offcanvas-menu"
  >
    <div class="offcanvas-header">
      <a
        class="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
        href="/"
        ><span class="titulos-sidebar fs-2"
          >VitArepa <i class="icono-eco material-icons">eco</i>
          <h6 class="lema-sidebar">Le damos balance a tu vida</h6></span
        ></a
      ><button
        class="close-sedebar bi bi-x-lg"
        type="button"
        aria-label="Close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
      <div>
        <hr class="custom-hr mt-0" />
        <ul class="nav nav-pills flex-column mb-auto">
          <strong class="separador-sidebar-uno">Navegación</strong>
          <li class="nav-item">
            <a class="nav-link link-body-emphasis" href="#"
              ><i class="bi bi-house"></i>
              <strong>Pagina principal</strong>
            </a>
          </li>
          <router-link class="no-decoracion" to="/Vitrina">
            <li class="nav-item">
              <a class="nav-link link-body-emphasis" href="#"
                ><i class="bi bi-basket3"></i>
                <strong>Vitrina de productos</strong>
              </a>
            </li>
          </router-link>
          <strong class="separador-sidebar">Nuestas redes</strong>
          <li class="nav-item">
            <a
              class="nav-link link-body-emphasis"
              href="https://www.facebook.com/Vitarepastore/"
              ><i class="bi bi-facebook"></i> <strong>Facebook</strong>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link link-body-emphasis"
              href="https://www.instagram.com/vitarepa_store/?hl=es"
              ><i class="bi bi-instagram"></i> <strong>Instagram</strong>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link link-body-emphasis"
              href="https://wa.me/3118610819"
              ><i class="bi bi-whatsapp"></i> <strong>WhatsApp</strong>
            </a>
          </li>
          <strong class="separador-sidebar">Ingresar</strong>
          <li class="nav-item">
            <a
              class="nav-link link-body-emphasis"
              data-bs-toggle="modal"
              data-bs-target="#login"
              href="#"
              ><i class="bi bi-person-add"></i> <strong>Iniciar sesión</strong>
            </a>
          </li>
          <router-link class="no-decoracion" to="/PanelAdmin">
            <li class="nav-item">
              <a class="nav-link link-body-emphasis" href="#"
                ><i class="bi bi-border-width"></i> <strong>Panel Admin</strong>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
  <!-- End: Sidebar -->

  <!-- Start: Sidebar derecha -->
  <div
    class="offcanvas offcanvas-end bg-body"
    tabindex="-1"
    data-bs-backdrop="false"
    id="offcanvas-menu-derecha"
  >
    <div class="offcanvas-header">
      <a
        class="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
        ><span class="titulos-sidebar fs-2"
          >Carrito <i class="icono-eco material-icons">eco</i>
          <h6 class="lema-sidebar">Visualiza tus pedidos</h6></span
        ></a
      ><button
        class="close-sedebar bi bi-x-lg"
        type="button"
        aria-label="Close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between pt-0">
      <div>
        <hr class="custom-hr mt-0" />

        <!-- Estructura del carrito -->
        <div
          class="cart-item d-flex justify-content-between align-items-center"
        >
          <div class="product-details">
            <div class="product-cantidad-container">
              <!-- Icono izquierdo -->
              <div class="icon-container">
                <i class="bi bi-dash-circle"></i>
              </div>

              <!-- Número -->
              <p class="product-cantidad">1</p>

              <!-- Icono derecho -->
              <div class="icon-container">
                <i class="bi bi-plus-circle"></i>
              </div>
            </div>
            <h5 class="product-name">Arepa 1</h5>
            <p class="product-price">$50.000</p>
          </div>
          <button class="btn btn-custom btn-remove">
            <i class="iconos-botones bi bi-x-lg"></i>Eliminar
          </button>
        </div>
        <hr />
        <div
          class="cart-item d-flex justify-content-between align-items-center"
        >
          <div class="product-details">
            <div class="product-cantidad-container">
              <!-- Icono izquierdo -->
              <div class="icon-container">
                <i class="bi bi-dash-circle"></i>
              </div>

              <!-- Número -->
              <p class="product-cantidad">1</p>

              <!-- Icono derecho -->
              <div class="icon-container">
                <i class="bi bi-plus-circle"></i>
              </div>
            </div>
            <h5 class="product-name">Arepa 2</h5>
            <p class="product-price">$50.000</p>
          </div>
          <button class="btn btn-custom btn-remove">
            <i class="iconos-botones bi bi-x-lg"></i>Eliminar
          </button>
        </div>
        <hr />
        <div
          class="cart-item d-flex justify-content-between align-items-center"
        >
          <div class="product-details">
            <div class="product-cantidad-container">
              <!-- Icono izquierdo -->
              <div class="icon-container">
                <i class="bi bi-dash-circle"></i>
              </div>

              <!-- Número -->
              <p class="product-cantidad">1</p>

              <!-- Icono derecho -->
              <div class="icon-container">
                <i class="bi bi-plus-circle"></i>
              </div>
            </div>
            <h5 class="product-name">Arepa 100% natural sin colorantes - baja en sal</h5>
            <p class="product-price">$50.000</p>
          </div>
          <button class="btn btn-custom btn-remove">
            <i class="iconos-botones bi bi-x-lg"></i>Eliminar
          </button>
        </div>
        <hr />

        <!-- Total y botón de compra -->
        <div
          class="total-cart-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="total">Total</h5>
            <p>$150.000</p>
          </div>
          <button
            class="btn btn-custom btn-checkout"
            data-bs-toggle="modal"
            data-bs-target="#formulario-compra"
            href="#"
          >
            <i class="iconos-botones bi bi-cart2"></i>Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End: Sidebar derecha -->

  <!-- Modal que hace de login -->
  <div
    class="modal fade modal-small modal-transparent"
    id="login"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-right">
      <div class="modal-content">
        <div class="modal-body">
          <!-- Start: Login Form Basic -->
          <section class="position-relative py-1 py-xl-1">
            <div class="container">
              <div class="d-flex justify-content-center align-items-center">
                <div class="card mb-5">
                  <div class="card-body d-flex flex-column align-items-center">
                    <center>
                      <a
                        class="link-body-emphasis-login d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
                        ><span class="titulos-sidebar fs-2"
                          >VitArepa <i class="icono-eco material-icons">eco</i>
                          <h6 class="lema-sidebar">
                            Le damos balance a tu vida
                          </h6></span
                        ></a
                      >
                      <hr class="custom-hr-login" />
                    </center>
                    <br />
                    <form class="text-center" method="post">
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="Tu correo"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                          required
                          minlength="8"
                          maxlength="10"
                        />
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-custom d-block w-100">
                          <i class="iconos-botones bi bi-person-add"></i>Iniciar
                          sesión
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal que hace de login -->

  <!-- Modal para finalizar compra -->
  <div
    class="modal fade modal-small modal-transparent"
    id="formulario-compra"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg modal-right">
      <div class="modal-content">
        <div class="modal-body">
          <!-- Start: Login Form Basic -->
          <section class="position-relative py-1 py-xl-1">
            <div class="container">
              <div class="d-flex justify-content-center align-items-center">
                <div class="card mb-5">
                  <div class="card-body d-flex flex-column align-items-center">
                    <center>
                      <a
                        class="link-body-emphasis-login d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
                        ><span class="titulos-sidebar fs-2"
                          >VitArepa <i class="icono-eco material-icons">eco</i>
                          <h6 class="lema-sidebar">
                            Contactanos para comprar
                          </h6></span
                        ></a
                      >
                      <hr class="custom-hr-login" />
                    </center>
                    <br />
                    <form class="text-center">
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="Tu correo"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Tu nombre"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          id="numero"
                          name="numero"
                          placeholder="Tu teléfono"
                          class="form-control"
                          required
                        />
                      </div>

                      <a class="api_WhatsApp" href="https://wa.me/3118610819">
                        <div class="mb-3">
                          <button
                            type="submit"
                            class="btn btn-custom d-block w-100"
                          >
                            <i class="iconos-botones bi bi-whatsapp"></i>
                            Facturar
                          </button>
                        </div></a
                      >
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal para finalizar compra -->

  <router-view></router-view>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "App",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.modal-small .modal-dialog {
  max-width: 300px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}

.modal-transparent .modal-content {
  background-color: transparent; 
  border: none; 
  box-shadow: none;
}

.link-body-emphasis-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
