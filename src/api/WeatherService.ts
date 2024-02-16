export default class WeatherService {
  static async getData(lat: string, lon: string):Promise<void> {
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=40dd0d9fca4d02c5fa33d8b285cdeb4f`)
      .then((response) => response.json())
      .then((response) => response?.list)
      .catch((reject):void => console.log(reject))
  }
}