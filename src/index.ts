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

  const coordinates = await WeatherService.getCoordinates(cityName)
  const weatherData = await WeatherService.getWeather(coordinates)
  return console.log(weatherData)
})