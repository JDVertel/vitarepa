<template>
  <!-- Logo -->
  <div
    style="position: relative"
    class="logotipo animate__animated animate__backInDown"
  >
    <img src="https://i.ibb.co/yF1mWnW/Sabor-familiar-4.png" alt="Logo" />
  </div>

  <div class="container-global">
    <div class="separador"><h5 class="titulo">Bienvenidos</h5></div>

    <div class="container-destacado animate__animated animate__fadeInLeft">
      <div class="row list-unstyled">
        <!-- Columna 1 -->
        <div class="col-sm-4">
          <div class="text">
            <p class="descripcion-destacado">
              <i class="icono-destacado material-icons">volunteer_activism</i>
              Alternativa saludable para una sana y buena alimentación.
            </p>
          </div>
        </div>

        <!-- Columna 2 -->
        <div class="col-sm-4">
          <div class="text">
            <p class="descripcion-destacado">
              <i class="icono-destacado material-icons">diversity_3</i>
              Apoyamos con el impulso laboral y agricola de la region.
            </p>
          </div>
        </div>

        <!-- Columna 3 -->
        <div class="col-sm-4">
          <div class="text">
            <p class="descripcion-destacado">
              <i class="icono-destacado material-icons">eco</i>
              Sin conservantes, azucares refinados y grasas saturadas.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="showcase animate__animated animate__fadeInLeft">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <!-- Mapa en la columna izquierda (orden 1) -->
          <div class="col-lg-6 text-white order-lg-1 showcase-img">
            <span></span>
            <iframe
              class="mapa"
              allowfullscreen=""
              frameborder="0"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPrljMtKwVsUS1UOXBQoW-VUEshYYpqHc&amp;q=Charal%C3%A1%2C+Santander&amp;zoom=13"
              width="100%"
              height="400"
            ></iframe>
          </div>

          <!-- Datos en la columna derecha (orden 2) -->
          <div class="col-lg-6 my-auto order-lg-2 showcase-text">
            <div
              class="d-flex flex-column justify-content-center align-items-start h-100"
            >
              <!-- Datos -->
              <div class="d-flex align-items-center p-3">
                <div>
                  <i class="datos-titulo bi bi-telephone"></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Teléfono</h6>
                  <p class="datos-info mb-3">3118610819</p>
                </div>
              </div>
              <div class="d-flex align-items-center p-3">
                <div>
                  <i class="datos-titulo bi bi-clock"></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Horario</h6>
                  <p class="datos-info mb-3">Lunes - Viernes 8:00am 6:00pm</p>
                </div>
              </div>
              <div class="d-flex align-items-center p-3">
                <div>
                  <i class="datos-titulo bi bi-geo-alt"></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Ubicación</h6>
                  <p class="datos-info mb-3">Charalá Carrera 14 #17-55</p>
                </div>
              </div>
              <div class="d-flex align-items-center p-3">
                <div>
                  <i class="datos-titulo bi bi-compass"></i>
                </div>
                <div class="px-2">
                  <h6 class="mb-0">Indicaciones</h6>
                  <p class="datos-info mb-3">
                    <a
                      class="api-busqueda"
                      href="https://www.google.com/maps/dir/?api=1&destination=Charal%C3%A1,%20Santander,%20Colombia"
                      >Buscar ruta más rápida</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="separador">
      <h5 class="titulo">Nosotros</h5>
    </div>

    <div class="row animate__animated animate__fadeInLeft">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">¿Qué hacemos?</h5>
            <h6 class="card-subtitulo">
              <i class="bi bi-bookmark-star-fill" style="font-size: 1rem"></i>
              VitArepa
            </h6>
            <hr />
            <p class="card-text">
              Creacion de productos 100% naturales y saludables, para que los
              clientes puedan acompañar su desayuno, almuerzo, comida o
              comsumirlos como alguna merienda o pasabocas, buscando aportar
              alternativas saludables para una buena alimentacion; lo cual
              genera salud y bienestar a cada uno de los clientes.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">¿Qué te ofrecemos?</h5>
            <h6 class="card-subtitulo">
              <i class="bi bi-bookmark-star-fill" style="font-size: 1rem"></i>
              VitArepa
            </h6>
            <hr />
            <p class="card-text">
              Dentro de los objetivos fundamentales de VitArepa se encuentra la
              misión de aprovechar los productos autóctonos del campo para
              transformarlos en opciones alimenticias saludables. Este enfoque
              no solo persigue el beneficio nutricional para los consumidores,
              sino que también contribuye al impulso agrícola de la región.
            </p>
          </div>
        </div>
      </div>
      <p class="paleta_de_colores"></p>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
