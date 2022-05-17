<template>
  <!-- Banner -->
  <div class="home container-fluid banner d-flex align-items-center">
    <div class="container text-center text-light">
      <h2 class="display-5 text-shadow">Selamat datang di maRRima Cafe</h2>
      <h3>Makan apa hari ini?</h3>
      <div class="col-md-6 offset-md-3">
        <div class="input-group input-group-sm">
          <select
            class="form-control"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Pilih Kategori Makanan</option>
            <option value="1">Local Food</option>
            <option value="2">Western Food</option>
            <option value="3">Eastern Food</option>
          </select>
          <button class="btn btn-dark btn-color text-light" type="button">
            Telusuri
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Promo -->
  <div class="container-fluid py-5">
    <div class="containaer">
      <h2 class="text-center">Promo Minggu Ini</h2>

      <div class="row justify-content-center mt-4">
        <div class="col-10 col-sm-6 col-md-3 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/chocolate-mousse.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Beli 1 gratis 1</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, labore!
              </p>
            </div>
          </div>
        </div>

        <div class="col-10 col-sm-6 col-md-3 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/brownies.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Bawa Selingkuhan Gratis Brownies</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, labore!
              </p>
            </div>
          </div>
        </div>

        <div class="col-10 col-sm-6 col-md-3 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/coffee.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Beli 2 diskon 40%</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, labore!
              </p>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-dark btn-color mt-3">Lihat Semua Promo</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Service -->
  <div class="container-fluid py-5 main-color">
    <div class="container">
      <h2 class="text-light text-center">Kami Melayani</h2>

      <div class="row mt-5 justify-content-center">
        <div class="col-8 col-sm-6 col-md-4 mb-4 hovered-card">
          <div class="d-flex justify-content-center mb-3">
            <div
              class="
                icon-service
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <i class="bi bi-bicycle display-6"></i>
            </div>
          </div>
          <div class="text-light text-center">
            <h4>Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reprehenderit autem quo numquam! Ullam, iste.
            </p>
          </div>
        </div>

        <div class="col-8 col-sm-6 col-md-4 mb-4 hovered-card">
          <div class="d-flex justify-content-center mb-3">
            <div
              class="
                icon-service
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <i class="bi bi-handbag display-6"></i>
            </div>
          </div>
          <div class="text-light text-center">
            <h4>Take Away</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reprehenderit autem quo numquam! Ullam, iste.
            </p>
          </div>
        </div>

        <div class="col-8 col-sm-6 col-md-4 mb-4 hovered-card">
          <div class="d-flex justify-content-center mb-3">
            <div
              class="
                icon-service
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <i class="bi bi-cup-straw display-6"></i>
            </div>
          </div>
          <div class="text-light text-center">
            <h4>Dine In</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              reprehenderit autem quo numquam! Ullam, iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Produk -->
  <div class="container-fluid py-5">
    <div class="containaer">
      <h2 class="text-center">Paling Banyak dibeli</h2>

      <div class="row justify-content-center mt-4">
        <div class="col-10 col-sm-5 col-md-3 col-lg-2 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/french-fries.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-color">french Fries</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur,</p>
              <h4 class="text-color">Rp 25.000</h4>
            </div>
          </div>
        </div>

        <div class="col-10 col-sm-5 col-md-3 col-lg-2 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/chilled-meat.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-color">Chilled Meat</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur,</p>
              <h4 class="text-color">Rp 35.000</h4>
            </div>
          </div>
        </div>

        <div class="col-10 col-sm-5 col-md-3 col-lg-2 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/coffee.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-color">Coffe Latte</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur,</p>
              <h4 class="text-color">Rp 18.000</h4>
            </div>
          </div>
        </div>

        <div class="col-10 col-sm-5 col-md-3 col-lg-2 hovered-card mb-4">
          <div class="card card-full shadow">
            <img
              src="../assets/img/product/thumb/steak.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-color">Steak</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur,</p>
              <h4 class="text-color">Rp 96.000</h4>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-dark btn-color mt-3">Lihat Lainnya</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Review -->
  <div class="container-fluid py-5 main-color">
    <div class="container">
      <h2 class="text-light text-center mb-4">Apa Kata Customer</h2>

      <div class="row">
        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Makanannya Enak-enak</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Yamamoto Genryuusai
              </figcaption>
            </figure>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Minumannya seger, banyak promo, sering dikasih diskon</p>
              </blockquote>
              <figcaption class="blockquote-footer">Ichigo Kurosaki</figcaption>
            </figure>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Pelayanannya bagus, Karyawannya ramah-ramah</p>
              </blockquote>
              <figcaption class="blockquote-footer">Kisuke Urahara</figcaption>
            </figure>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Tempat nyaman dan bersih, jadi betah berlama-lama</p>
              </blockquote>
              <figcaption class="blockquote-footer">Ulqiora Cifer</figcaption>
            </figure>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Delivery Cepat, jadi perut aman tidak keroncongan</p>
              </blockquote>
              <figcaption class="blockquote-footer">Sosuke Aizen</figcaption>
            </figure>
          </div>
        </div>

        <div class="col-lg-4 mb-3">
          <div class="card card-full p-5">
            <figure>
              <blockquote class="blockquote">
                <p>Take Away GPL, gak pake lama... karyawannya gesit</p>
              </blockquote>
              <figcaption class="blockquote-footer">Kenpachi Zaraki</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Reservasi -->
  <div class="container-fluid py-5">
    <div class="container">
      <h2>Reservasi</h2>
      <p>Jangan smapai kehabisan tempat. Reservasi Sekarang !!!</p>
      <form class="col-md-6 offset-md-3">
        <div class="mb-4">
          <label for="nama" class="form-label">Nama</label>
          <input type="text" class="form-control" id="nama" />
        </div>
        <div class="mb-4">
          <label for="nokontak" class="form-label">No. Kontak</label>
          <input type="text" class="form-control" id="nokontak" />
        </div>
        <div class="mb-4">
          <label for="jumlahmeja" class="form-label">Jumlah Meja</label>
          <input type="number" class="form-control" id="jumlahmeja" />
        </div>
        <div>
          <button class="btn btn-dark btn-color mt-3 w-100">Reservasi</button>
        </div>
      </form>
    </div>
  </div>
</template>
