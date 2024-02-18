const API_KEY:string = '40dd0d9fca4d02c5fa33d8b285cdeb4f'

export default class WeatherService {
  static async getCoordinates(cityName:string):Promise<Coordinates> {
    const coordinates:Coordinates[] = []
    
    await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
      .then((response: Response):Promise<CoordinatesData[]> => {
        return response.json()
      })
      .then((coordinatesData: CoordinatesData[]):number => {
        const lat: number = coordinatesData[0].lat
        const lon: number = coordinatesData[0].lon

        return coordinates.push({lat, lon})
      })
      .catch((reject):void => console.log(reject))

    return coordinates[0]
  }
  
  static async getWeather({ lat, lon }: Coordinates):Promise<Weather[] | void> {    
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then((response: Response):Promise<any> => response.json())
      .then((response: WeatherData):Weather[] => response?.list)
      .catch((reject):void => console.log(reject))
  }
}