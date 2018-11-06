<template>
  <section class="">
   <main-layout>
    <template slot="header"></template>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div id="carouselExampleIndicators" class="header-image carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://di-uploads-pod5.dealerinspire.com/waltersmercedesbenz/uploads/2017/06/CLA-Coupe-3.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://di-uploads-pod5.dealerinspire.com/waltersmercedesbenz/uploads/2016/04/2016-mb-c-class-smaller-1.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://di-uploads-pod5.dealerinspire.com/waltersmercedesbenz/uploads/2017/08/2018-e-class-coupe-main.jpg" alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <p> В Украине Мерседес-Бенц имеет честь представлять компания "АвтоКапитал", Генеральное представительство Daіmler AG в Украине, которая работает на украинском рынке седьмой год, активно расширяя и развивая дилерскую сеть во всех регионах, непрерывно совершенствуя качество специализированного сервисного обслуживания. Сегодня дилерская сеть компании "АвтоКапитал" представлена двадцатью одним дилером в крупнейших городах Украины.</p>
          </div>
          <div class="col-12 col-lg-12">
            <p class="accent-text">Поиск по официальным дилерам: </p>
          </div>
          <!--GOOGLE MAP-->
          <div class="col-12 col-lg-12">
            <div id="myMap"></div>
          </div>
          
          <!--END GOOGLE MAP-->
        </div>
      </div>
      <!--DEALER LIST-->
      <div class="container dealer-list">
        <div
        class="row"
        v-for="dealer of dealers"
        >
        <div class="col-12 col-lg-12">
          <p class="accent-text">
            <strong>{{dealer.name}}
              <span class="dealerOf">Официальный дилер</span>
            </strong>
          </p>
          <p>
            <strong>Город: </strong>
            {{dealer.city}}
          </p>
          <p>
            <strong>Факс: </strong>
            {{dealer.fax}}
          </p>
          <p>
            <strong>Телефон салона: </strong>
            {{dealer.phone}}
          </p>
          <p>
            <strong>Сайт: </strong>
            {{dealer.website}}
          </p>
          <hr>
        </div>
      </div>
    </div>
    <!--END DEALER LIST-->
  </div>
  <template slot="footer"></template>
</main-layout>
</section>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue';
export default {
  name: 'Models',
  data () {
    return {
      dealers: dealers,
      map: '',
      markers: [
      { 
       position: {
         latitude: 50.348883,
         longitude: 30.553728
       }
     },
     {
       position: {
         latitude: 49.823901, 
         longitude: 23.927118
       }
     },
     {
       position: {
         latitude: 48.399302, 
         longitude: 35.047612 
       }
     }
     ]
   }
 },
 components:{
  MainLayout
},
methods: {
},
mounted: function() {
  console.log("map: ", google.maps)
  const element = document.getElementById('myMap')
  const options = {
    zoom: 6,
    center: new google.maps.LatLng(49.248883, 30.553728)
  }
  this.map = new google.maps.Map(element, options)
  this.markers.forEach((marker) => {
    const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
    marker.map = this.map
    marker.position = position
    new google.maps.Marker(marker)
  })
}
};
function dealer(city, name ,phone, fax, mail, website){
  return{
    city, name ,phone, fax, mail, website
  }
}

const dealers = [
dealer(
  'Киев',
  'СП ООО «Автомобильный Дом Украина-Мерседес Бенц»',
  '(044) 201-60-00',
  '(044) 201-60-90',
  'info@mercedes-benz.kiev.ua',
  'www.mercedes-benz.kiev.ua'
  ),
dealer(
  'Львов',
  'ПАО «Галичина-Авто»',
  '(0332) 28-18-18',
  '(0332) 28-18-18',
  'info@mercedes-benz.lviv.ua',
  'www.mercedes-benz-lv.in.ua'
  ),
dealer(
  'Днепр',
  'Филиал "Автосалон Мерседес" ЧАО «Днепропетровск-Авто»',
  '(056) 748-88-88',
  '(056) 748-88-88',
  'аuto@mercedes-center.dp.ua',
  'www.mercedes-dnepr.com.ua '
  )
];
</script>

<style scoped>
p {
  text-align: left;
  color: #343a40;
}
.row {
  margin:0 !important;
  padding: 0 !important;
}
.header-image {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.accent-text {
  color: #FFFFFF;
  background-color: #343a40;
  padding: 5px;
}
#myMap {
  height:300px;
  width: 100%;
}
.dealer-list {
  padding-top: 30px;
}
.dealerOf {
  float: right;
}
</style>