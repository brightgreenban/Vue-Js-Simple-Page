function car(name, model, price, img, roll, volume, power, speed, consum, review) {
  return{
    name, model, price, img, roll, volume, power, speed, consum, review 
  }
}
function gallery(text){
  return{
    text
  }
}
function post(date, tittle, text, src){
  return{
    date, tittle, text, src
  }
}

const galerys = [
gallery('Новый Mercedes-Benz GLE'),
gallery('Новый Mercedes-Benz GLE'),
gallery('Новый Mercedes-Benz GLE'),
gallery('Новый Mercedes-Benz GLE')
];

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
  'The world ended yesterday', 
  'Im looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?', 'https://54e3b5eda07df4ee99f2-2e770d1f64513848fdc6405cea716ecf.ssl.cf1.rackcdn.com/WDDWK8GBXJF690743/523a61c3a7629c59cc4ad2864e60f252.jpg'
),
post(
  '4 Октября, 2018', 
  'The world ended yesterday', 
  'Im looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?', 'https://54e3b5eda07df4ee99f2-2e770d1f64513848fdc6405cea716ecf.ssl.cf1.rackcdn.com/WDDWK8GBXJF690743/523a61c3a7629c59cc4ad2864e60f252.jpg'
),
post(
  '14 Октября, 2018', 
  'The world ended yesterday', 
  'Im looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...?', 'https://54e3b5eda07df4ee99f2-2e770d1f64513848fdc6405cea716ecf.ssl.cf1.rackcdn.com/WDDWK8GBXJF690743/523a61c3a7629c59cc4ad2864e60f252.jpg'
)
];