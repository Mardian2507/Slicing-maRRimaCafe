<template>
  <nav class="navbar navbar-dark fixed-top navbar-expand-lg main-color">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <img
          src="../assets/img/Marrima.png"
          alt="pp"
          style="width: 40px"
          class="me-2"
        />
        <router-link class="navbar-brand me-auto d-none d-lg-block" to="/">
          maRRima Cafe</router-link
        >
        <div class="navbar-nav">
          <router-link class="nav-link me-3" to="/">Home</router-link>
          <router-link class="nav-link me-3" to="/produk">Produk</router-link>
          <router-link class="nav-link me-3" to="/promo">Promo</router-link>
          <router-link class="nav-link me-3" to="/keranjang"
            >Keranjang <i class="bi bi-cart3"></i
          ></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
</style>