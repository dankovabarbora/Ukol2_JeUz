'use strict';

const leto = dayjs('2021-06-21');
const dnes = dayjs();
const letoElm = document.querySelector('.odpoved');

if (dnes.isAfter(leto)) {
  letoElm.innerHTML = 'ANO';
  console.log('jo je');
} else {
  console.log('neni');
  letoElm.innerHTML = 'NE';
}
