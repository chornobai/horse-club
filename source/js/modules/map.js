
const mapApi = () => {
  let center = [52.299607718140614, 104.34037095474848];
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {

      center: [52.29917359652787, 104.33846122192986],
      zoom: 16,
    });

    let pin = new ymaps.Placemark(center, {},
      {
        iconLayout: 'default#image',
        iconImageHref: '../../img/svg/pin-map.svg',
        iconImageSize: [83, 83],
        iconOffset: [-10, -30]
      });
    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(pin);
  }

}

window.mapApi = mapApi;

export {mapApi};
