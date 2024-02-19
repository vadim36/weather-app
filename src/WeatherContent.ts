import WeatherService from "./api/WeatherService"

export default abstract class WeatherContent { 
  private static _weatherData: Weather[] = [] 

  public static async getWeatherData(event: Event):Promise<Weather[]> {
    event.preventDefault()
    const $formLocation = document.querySelector('[data-form-location]')
    const cityName = ($formLocation as HTMLFormElement)
      .locationInput.value
    
    const coordinates: Coordinates = await WeatherService.getCoordinates(cityName)
    const tmpWeatherData: Weather[] | void = await WeatherService.getWeather(coordinates)
    if (tmpWeatherData === undefined) throw new Error('Server Error')
    return this._weatherData = JSON.parse(JSON.stringify(tmpWeatherData))
  }

  public static renderContent():string {
    return (`
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

  private static renderMainContent():string {
    return (`
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
    `)
  }

  public static get weatherData():Weather[] {
    return WeatherContent._weatherData
  }

  public static set weatherData(value: Weather[]) {
    WeatherContent._weatherData = value
  }
}