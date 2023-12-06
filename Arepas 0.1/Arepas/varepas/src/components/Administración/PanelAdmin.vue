<template>
  <!-- Logo -->
  <div
    style="position: relative"
    class="logotipo animate__animated animate__backInDown"
  >
    <img src="https://i.ibb.co/yF1mWnW/Sabor-familiar-4.png" alt="Logo" />
  </div>

  <main>
    <div class="container-global">
      <div class="separador"><h5 class="titulo">Administrar</h5></div>

      <div
        class="accordion animate__animated animate__fadeInLeft"
        id="miAcordeon"
      >
        <!-- Acordeón para ventas -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="ventaRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ventaRegistroCollapse"
              aria-expanded="true"
              aria-controls="ventaRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-bag-check"></i>
              Ventas
            </button>
          </h2>
          <div
            id="ventaRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="ventaRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="no-decoracion" to="/RegistroVentas">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Registro de Ventas</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-bag-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para gastos-->
        <div class="accordion-item">
          <h2 class="accordion-header" id="gastosRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#gastosRegistroCollapse"
              aria-expanded="false"
              aria-controls="gastosRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-cart-check"></i>
              Gastos
            </button>
          </h2>
          <div
            id="gastosRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="gastosRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="no-decoracion" to="/RegistroGastos">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Registro de Gastos</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-cart-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para cientes -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="clientesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#clientesRegistroCollapse"
              aria-expanded="false"
              aria-controls="clientesRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-person-check"></i>
              Clientes
            </button>
          </h2>
          <div
            id="clientesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="clientesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="no-decoracion" to="/RegistroClientes">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Registro de Clientes</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-person-add"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para inventario -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="InventarioRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InventarioRegistroCollapse"
              aria-expanded="false"
              aria-controls="InventarioRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-clipboard-check"></i>
              Inventario
            </button>
          </h2>
          <div
            id="InventarioRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InventarioRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="no-decoracion" to="/RegistroProductos">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Registro de Productos</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-clipboard-plus-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link
                      class="no-decoracion"
                      to="/ModificarInventario"
                    >
                      <div class="card">
                        <div class="textos">
                          <center><h6>Modificar Inventario</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-clipboard-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <!-- Acordeón para informes -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="InfomesRegistroHeading">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#InfomesRegistroCollapse"
              aria-expanded="false"
              aria-controls="InfomesRegistroCollapse"
            >
              <i class="iconos-panelAdmin bi bi-clipboard-data"></i>
              Informes
            </button>
          </h2>
          <div
            id="InfomesRegistroCollapse"
            class="accordion-collapse collapse"
            aria-labelledby="InfomesRegistroHeading"
            data-bs-parent="#miAcordeon"
          >
            <div class="accordion-body">
              <div class="contenedor">
                <center>
                  <div class="contenedor-conciertos">
                    <router-link class="no-decoracion" to="/Ventas">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Informe de Ventas</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="no-decoracion" to="/Gastos">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Informe de Gastos</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>

                    <router-link class="no-decoracion" to="/General">
                      <div class="card">
                        <div class="textos">
                          <center><h6>Informe General</h6></center>

                          <i
                            class="iconosGrandes-panelAdmin bi bi-clipboard-data-fill"
                          ></i>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.no-decoracion {
  text-decoration: none !important;
  color: white;
}
.contenedor {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;

  /* Grid */
  display: grid;
  grid-template-columns: 3fr;
  gap: 20px;
}

.contenedor-conciertos {
  /* Grid */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: -30px;
  margin-top: -30px;
}

.card {
  border-radius: 10px;
  min-height: 200px;
  font-weight: bold;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;

  border-radius: 50px 0px;
  border-style: dashed;
  border-color: #78dc00;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.352);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card .textos {
  height: 100%;
  color: #000000;

  /* Flebox */
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}

@media screen and (max-width: 900px) {
  .contenedor-conciertos {
    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 700px) {
  .contenedor-conciertos {
    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-conciertos {
    /* Grid */
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>
