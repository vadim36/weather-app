import './index.css'

import WeatherService from './api/WeatherService'

const $buttonShowLocationForm = document
  .querySelector('[data-button-show-location-form]')
const $formLocation = document.querySelector('[data-form-location]')

$buttonShowLocationForm!.addEventListener('click', ():void => {
  const isFormHidden:boolean = $formLocation?.ariaHidden === 'true'
  
  if (isFormHidden) {
    $formLocation!.ariaHidden = 'false'
    ;($buttonShowLocationForm as HTMLInputElement)
      .src = 'public/close.svg'
    $formLocation?.classList.add('flex')
    return $formLocation?.classList.remove('hidden')
  }

  $formLocation!.ariaHidden = 'true'
  ;($buttonShowLocationForm as HTMLInputElement)
    .src = 'public/search.svg'
  $formLocation?.classList.add('hidden')
  return $formLocation?.classList.remove('flex')
})

$formLocation?.addEventListener('submit', async (event: Event)
:Promise<void> => {
  event.preventDefault()
  const cityName = ($formLocation as HTMLFormElement)
    .locationInput.value

  const coordinates: Coordinates = await WeatherService.getCoordinates(cityName)
  const weatherData: Weather[] | void = await WeatherService.getWeather(coordinates)
  if (weatherData === undefined) throw new Error('404 Weather server error')
  return renderWeatherContent(weatherData)
})

function renderWeatherContent(weatherList: Weather[]) {
  document.querySelector('main')!.insertAdjacentHTML('beforeend', `
  <section aria-label="Main Weather info" class="flex flex-col items-center 
  bg-sky-400 text-white gap-3 font-mono p-5">
    <img src="public/weather.svg" alt="Weather Icon" data-weather-icon
      class="size-40">
    <h2 data-weather-temp class="after:content-['°C'] text-7xl font-bold">10</h2>
    <h3 data-weather-body class="text-3xl font-semibold">Облачно</h3>
    <button data-extra-info class="font-semibold text-2xl button tracking-wide">
      Дополнительная информация
    </button>
  </section>

  <section aria-label="Next days info">
    <div class="flex items-center">
      <h2 class="font-mono text-4xl">Сегодня</h2>
      <input type="image" src="public/arrow-down.svg" 
      alt="arrow icon" class="size-12 rotate-[270deg]"
      data-check-location-button>
    </div>
  `)
}