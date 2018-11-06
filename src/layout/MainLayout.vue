<template>
  <div>
    <header>
      <slot name="header">
        <section class="nav-header">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <img src="https://www.opiwiki.com/pic?w=6&f=108890&e=2&o=703" width="52" height="52"alt="Logo" id="logo">
              <a href="#" class="navbar-brand"> <router-link to="/" class="nav__item"> Mercedes-Benz</router-link></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- </div> -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                  <li>
                    <a class="nav-link" href="#">
                      <router-link to="/" class="nav__item">Главная</router-link>
                    </a><span class="sr-only">(current)</span>
                  </li>
                  <li>
                    <a class="nav-link" href="#"><router-link to="/dealers" class="nav__item">Дилеры</router-link>
                    </a><span class="sr-only">(current)</span>
                  </li>
                  <li>
                    <a class="nav-link" href="#"><router-link to="/history" class="nav__item">История</router-link>
                    </a><span class="sr-only">(current)</span>
                  </li>
                </ul>   
              </div>      
            </div>
          </nav>
        </section>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        <div class="footer-block">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-4 footer__item">
                <p>Телефон салон : (044) 201-60-00 </p>
                <p>Телефон сервис : (044) 201-60-00 </p>
                <p>E-mail : info@mercedes-benz.kiev.ua</p>
              </div>
              <div class="col-12 col-lg-4 footer__item">
                <p><a href="#">Киев</a></p>
                <p><a href="#">Днепр</a></p>
                <p><a href="#">Житомир</a></p>
              </div>
              <div class="col-12 col-lg-4 footer__item">
                <p><a href="#">Cookies</a></p>
                <p><a href="#">Защита данных</a></p>
                <p><a href="#">Правовая информация</a></p>
              </div>
            </div>
          </div>
        </div>
      </slot>
    </footer>
  </div>
</template>
<!-- SCRIPT -->
<script>
  export default {
    name: 'MainLayout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  };
</script>
<!-- END SCRIPT -->

<!-- CSS -->
<style scoped>
.row {
  margin:0 !important;
  padding: 0 !important;
}
.navbar-brand {
  padding-left: 10px;
}
.nav-header {
  background-color: #000;
  padding-top: 5px;
  top: 0;
  left: 0; 
}
.navbar-default .navbar-nav>li>a {
 font-size:20px; 
 color:#fff; 
}
.nav-link {
  padding-right: 0 !important;
  padding-left: .5rem;
}
a.nav__item:hover {
  color:#888;
  text-decoration: none;
}
.bg-dark {
  background-color: #000!important;
}
.router-link-active, a {
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
}
.footer-block {
  margin-top: 40px;
  padding-top: 30px;
  background-color: #343a40;
}
.footer__item p{
  margin-top: -10px;
}
.footer__item a, .footer__item{
  font-size: 12px;
  color: #fff;
}
.footer__item:nth-of-type(1n) {
  text-align: left;
}
.footer__item:nth-of-type(2n) {
  text-align: center;
}
.footer__item:nth-of-type(3n) {
  text-align: right;
}
@media (max-width: 992px) { 
  .footer__item a, .footer__item {
    font-size: 12px;
  }
  .footer__item:nth-of-type(1n) {
    text-align: center;
  }
  .footer__item:nth-of-type(2n) {
    text-align: center;
    visibility: hidden;
  }
  .footer__item:nth-of-type(3n) {
    margin-top: -100px;
    text-align: center;
  }
  .footer__item p{
    margin-top: 0px;
  }
}
</style>
<!-- END CSS -->