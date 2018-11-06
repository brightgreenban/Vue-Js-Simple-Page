<template>
  <section class="">
   <main-layout>
     <template slot="header"></template>
     <!-- CONTENT -->
     <div class="content">
       <div class="model-option">
        <div class="container vcenter">
          <div class="row">
            <div
            class="col-2 col-lg-2 text-center model__one"
            v-for="(car, index) of models"
            >
            <a
            href="#"
            class="model__item"
            @click="selectModels(index)"
            > {{car.name}}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container info">
    <div class="row">
      <div class="col-xs-12 col-lg-4 info__item">
        <h2>{{chooser.name}} {{chooser.model}}</h2>
        <p><strong>Выбранная серия:</strong>
          {{chooser.name}}
        </p>
        <p><strong>Модель: </strong>
          {{chooser.model}}
        </p>
        <p><strong>Цена: </strong>
          {{chooser.price}} грн
        </p>
        <button
        type="button"
        class="btn btn-dark info__btn"
        @click="visible=!visible"
        >{{visible?'Скрыть':'Подробнее'}}</button>
        <button
        type="button"
        class="btn btn-dark info__btn"
        @click="modalVisible = true">Купить</button>
      </div>
      <div class="col-xs-12 col-lg-8">
        <img
        v-bind:src="chooser.img"
        v-bind:alt="chooser.name"
        class="info__img img-fluid"
        >
      </div>
      <div
      class="container more-block"
      v-show="visible"
      v:if="moreVeriable">
      <div class="row">
        <div class="col-lg-6" >
          <p>
            <strong>Число и расположение цилиндров - </strong>
            {{chooser.roll}}
          </p>
          <p>
            <strong>Рабочий объём (см³) - </strong>
            {{chooser.volume}}
          </p>
          <p>
            <strong>Номинальная мощность (кВт (л.с.) при об/мин) -  </strong>
            {{chooser.power}}
          </p>
          <p>
            <strong>Максимальная скорость (км/ч) - </strong>
            {{chooser.speed}}
          </p>
          <p>
            <strong>Расход топлива в смешанном цикле (л/100 км) - </strong>
            {{chooser.consum}}
          </p>
        </div>
        <div class="col-lg-6" >
          <p>{{chooser.review}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- MODAL FORM -->
<transition name="modal">
  <div
  class="modal fade show"
  tabindex="-1"
  role="dialog"
  v-if="modalVisible"
  >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Найти салон в Вашем городе</h5>
        <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="modalVisible = false"
        >
        <span aria-hidden="false">&times;</span>
      </button>
    </div>
    <div
    class="modal-body">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-12 left-text news-text"
        v-for="dealer of dealers"
        >
        <p>
          <strong>{{dealer.name}}</strong>
        </p>
        <p>
          <strong>Город: </strong>
          {{dealer.city}}
        </p>
        <p>
          <strong>Телефон салона: </strong>
          {{dealer.phone}}
        </p>
        <p>
          <strong>Факс: </strong>
          {{dealer.fax}}
        </p>
        <p>
          <strong>Сайт: </strong>
          {{dealer.website}}
        </p>
        <hr>
      </div>
    </div>
  </div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-primary"><router-link to="/dealers" class="nav__item">Полный список дилеров</router-link></button>
  <button
  type="button"
  class="btn btn-secondary"
  data-dismiss="modal"
  @click="modalVisible = false"
  >Отмена</button>
</div>
</div>
</div>
</div>
</transition>
<!-- END MODAL FORM -->
<!-- NEWS -->
<div class="container">
  <h2 id="news-tittle">Новости</h2>
  <div class="row">
    <div
    class="col-12 col-lg-4"
    v-for="(post, index) of posts"
    >
    <figure class="post__items align-middle">
      <img
      v-bind:src="post.src"
      v-bind:alt="post.tittle"
      class="img-fluid"
      />
      <div class="date">
        {{post.date}}
      </div>
      <figcaption>
        <h2>{{post.tittle}}</h2>
        <p>
          {{post.text}}
        </p>
        <button
        type="button"
        class="btn btn-light news__btn"
        @click="visiblePostInfo = true; selectPosts
        (index);"
        >Подробнее</button>
      </figcaption>
    </figure>
  </div>
</div>
</div>
<!-- END NEWS -->
<!-- NEWS MODAL -->
<transition name="modal">
  <div
  class="modal fade show"
  tabindex="-1"
  role="dialog"
  v-if="visiblePostInfo"
  v-for="(post, index) of posts"
  >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{visiblePostInfoChoose.tittle}}</h5>
        <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="visiblePostInfo = false"
        >
        <span aria-hidden="false">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <p class="left-text news-text">
              {{visiblePostInfoChoose.fulltext}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-12 left-text news-text">
            <p>{{visiblePostInfoChoose.date}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
      type="button"
      class="btn btn-secondary"
      data-dismiss="modal"
      @click="visiblePostInfo = false"
      >Закрыть</button>
    </div>
  </div>
</div>
</div>
</transition>
<!-- NEW NEWS MODAL -->
</div>
<!-- END CONTENT -->
<template slot="footer">
</template>
</main-layout>
</section>
</template>
<!-- SCRIPT -->
<script>
import MainLayout from '@/layout/MainLayout.vue';
export default {
  name: 'Main',
  data () {
    return {
      message: 'Some Text',
      email: '',
      models: models,
      posts: posts,
      dealers: dealers,
      chooser: models[0],
      visible: false,
      modalVisible: false,
      visiblePostInfo: false,
      visiblePostInfoChoose: posts[0]
    }
  },
  components:{
    MainLayout
  },
  methods: {
    selectPosts: function(index){
      this.visiblePostInfoChoose = posts[index];
    },
    selectModels: function(index){
      this.chooser = models[index];
    }
  },
  computed: {
    showMoreFunc () {
      return this.moreVariable ? 'Hide' : 'Show More';
    }
  }
}
function car(name, model, price, img, roll, volume, power, speed, consum, review) {
  return{
    name, model, price, img, roll, volume, power, speed, consum, review 
  }
}

function post(date, tittle, text, src, fulltext){
  return{
    date, tittle, text, src, fulltext
  }
}

function dealer(city, name ,phone, fax, mail, website){
  return{
    city, name ,phone, fax, mail, website
  }
}

const models = [
car('AMG', 'Купе', '4 320 628', 'static/m1.jpeg', 'v8', '3.982', '340/6.000', '304', '9,3', 
  'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".'),
car('SLC', 'Родстер', '1 267 640', 'static/m2.jpeg', 'v8', '2,999', '367', '250', '8,0-7,8', 
  'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".'),
car('GLS', 'Внедорожник', '2 178 638', 'static/m3.jpeg', 'v8', '3.982', '340/6.000', '304', 
  '9,3', 'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".'),
car('GLE', 'Купе', '1 915 152', 'static/m4.jpeg', 'v8', '3.982', '340/6.000', '304', '9,3', 
  'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".'),
car('GLA', 'SUV', '1 567 640', 'static/m5.jpeg', 'v8', '3.982', '340/6.000', '304', '9,3', 
  'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".'),
car('CLS', 'Купе', '2 038 564', 'static/m6.jpeg', 'v8', '3.982', '340/6.000', '304', '9,3', 
  'Преимущества нашего 4,0-литрового битурбированного двигателя AMG V8. Вновь разработанный 4,0-литровый битурбированный двигатель AMG V8, работающий под капотом автомобиля Mercedes-AMG GT, очарует поклонников AMG по всему миру. Благодаря инновационным технологиям нам удалось создать очень компактный, легкий и надежный высокоэффективный агрегат, собираемый вручную по принципу "Один человек - один двигатель".')
];

const posts = [
post(
  '29 Сентября, 2018', 
  'Сервисные пакеты', 
  'С 01.08.2018 по 31.12.2018 во всей дилерской сети Mercedes-Benz в Украине в рамках акции «Сервисный пакет» предлагается провести диагностику автомобиля по специальным ценам',
  'https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/2016/06/16c516_017.jpg',
  'С 01.08.2018 по 31.12.2018 во всей дилерской сети Mercedes-Benz в Украине в рамках акции «Сервисный пакет» предлагается провести диагностику автомобиля по специальным ценам. Акция проводится в рамках политики заботы о клиентах и позволяет предотвратить лишние затраты на ремонт, заблаговременно обнаружив и устранив эксплуатационную неисправность. Согласно условиям акции, стоимость диагностических работ, заказанных из перечня доступных на момент обращения, позволяет сэкономить до 50% средств, по сравнению с обычным заказом. Предложение действительно при условии заказа и установки оригинальных запасных частей, приобретенных у исполнителя работ, требующих замены по результатам проведенных диагностических работ. Предложение считается действительным также в случае, если результаты диагностики не обнаружили необходимости в замене запасных частей. Перечень диагностических работ, подпадающих под акцию «Сервисные пакеты»:'
  ),
post(
  '4 Октября, 2018', 
  'Экспресс кредит', 
  '«Экспресс Кредит» активно сотрудничает с банками, которые предоставляют специальные условия кредитования на покупку автомобилей, представленных в салонах «УкрАВТО».',
  'https://cdn1.autoexpress.co.uk/sites/autoexpressuk/files/2016/02/beh_4156-crop.jpg',
  "«Экспресс Кредит» активно сотрудничает с банками, которые охотно предоставляют специальные условия кредитования на покупку легковых автомобилей, представленных в салонах «УкрАВТО». Это широкий ассортимент выгодных кредитных программ (больше 25-ти) от надежных банков-партнеров. Система «Экспресс Кредит» предлагает не только наиболее привлекательные условия автокредитования, но и самое удобное оформление.Заполнив анкету в любом автосалоне УкрАВТО, клиент в кратчайший срок может получить ответ банка. Кроме того, узнать предыдущее решение о выдаче кредита отныне возможно в любом городе и в любое время - достаточно лишь заполнить on-line форму на сайте системы «Экспресс Кредит». Узнать более подробную информацию о действующих кредитных предложениях можно на сайте www.express-group.com.ua."
  ),
post(
  '14 Октября, 2018', 
  'Страхование', 
  '«Экспресс Страхование» — динамично развивающаяся страховая компания, основанная при участии лидера рынка автотранспорта Украины — Украинской Автомобильной Корпорации «УкрАВТО».',
  'http://www.eurocarnews.com/media/pictorials/1927/10670.jpg',
  "«Экспресс Страхование» — динамично развивающаяся страховая компания, основанная при участии лидера рынка автотранспорта Украины — Украинской Автомобильной Корпорации «УкрАВТО».Используя многолетний опыт, техническую базу, и инновационные подходы в работе Корпорации «УкрАВТО», страховая компания «Экспресс Страхование» направляет все усилия на завоевание положительного имиджа и доверия клиентов. «Экспресс Страхование» — это оптимальный выбор продуктов полного КАСКО с фиксированными тарифами, возможность защиты авто именно от тех рисков, которые больше всего волнуют Клиента, максимально быстрое оформление и качественное сопровождение договора, своевременное урегулирование страховых событий."
  )
];
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
<!-- END SCRIPT -->

<!-- CSS -->
<style scoped>
.model-option {
  background-color: #000;
  padding-top: 10px;
}
.model__one {
  background-color: #343a40;
  padding: 5px;
}
.model__one a {
  display: block;
}
.model__one:hover {
  background-color: #08D9D6;
  padding: 5px;
  color: #343a40;
}
.model__item {
  text-decoration: none;
  color: #fff;
}
.model__item:hover{
  text-decoration: none;
  color: #343a40;
}
.vcenter {
  display: inline-block;
  float: none;
  vertical-align: middle;
}
.info{
  margin-top: 50px;
}
.info__item {
  text-align: left;
  color: #343a40;
}
.info__img {
  box-shadow: 2px 6px 10px 0px rgba(68, 68, 68, 0.4);
}
.info__btn {
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: 20px;
  float: left;
}
.more-block {
  text-align: left;
  margin-top: 30px;
}
.gallery-block {
  margin-top: 40px;
}
.gallery-block>h2{
  color: #343a40;
  padding-bottom: 20px;
}
#news-tittle {
  padding-top: 40px;
  padding-bottom: 20px;
}
.news__btn {
  margin-top: 15px;
  width: 100%;
  text-align: center;
}
.news-text {
  font-size: 16px;
}
.modal {
  display: block;
}
.modal-content {
  width: 100%;
}
a.model__item{
  padding-left: 0px;
}
/*ANIMATION*/
.modal-enter-active,
.modal-leave-active {
  transition: left 750ms
}
.modal-enter,
.modal-leave-to { 
  left: -200%
}
.modal-leave,
.modal-enter-to {
  left: 0
}
/* END ANIMATION*/
a.nav__item {
  text-decoration: none;
  color: #fff !important;
}
.left-text {
  text-align: left;
}
@media (max-width: 576px) {
  .news-text {
    font-size: 10px;
  }
  /*ANIMATION*/
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 750ms
  }
  .modal-enter,
  .modal-leave-to { 
    opacity: 0
  }
  .modal-leave,
  .modal-enter-to {
    opacity: 1
  }
  /*END ANIMATION*/
}
@media (max-width: 992px) {
  .news-text {
    font-size: 11px;
  }
  .news-text p {
    margin-top: -12px;
  }
  .modal-title {
    font-size: 14px;
  }
  .btn, .btn-primary {
    font-size: 14px;
  }
}
@media (max-width: 767.98px) { 
  a.model__item{
    font-size: 12px;
  }
}
.row {
  margin:0 !important;
  padding: 0 !important;
}
.post__items {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 230px;
  max-width: 100%;
  min-height: 500px;
  width: 100%;
  color: #ffffff;
  text-align: left;
  line-height: 1.4em;
  background-color: #343a40;
}
.post__items * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.post__items img {
  min-width: 100px;
  max-width: 100%;
  vertical-align: 30px;
  opacity: 0.85;
}
.post__items .date {
  position: absolute;
  background-color: #343a40;
  top: 0;
  right: 0;
  width: 100%;
  padding: 10px 25px 0;
  text-align: right;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
}
.post__items .date:before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 700px 50px 0;
  border-color: transparent #343a40 transparent transparent;
}
.post__items figcaption {
  width: 100%;
  background-color: #343a40;
  padding: 0 15px 25px;
  position: relative;
}
.post__items figcaption:before {
  position: absolute;
  content: '';
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 0 700px;
  border-color: transparent transparent transparent #343a40;
}
.post__items figcaption a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  text-decoration: none;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
}
.post__items figcaption a:hover {
  opacity: 1;
}
.post__items h2 {
  margin: 0 0 10px;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 1.2em;
}
.post__items p {
  margin: 0 0 10px;
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.8;
}
</style>
<!-- END CSS -->