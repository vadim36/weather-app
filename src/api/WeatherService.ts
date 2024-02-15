export default class WeatherService {
  static async getData():Promise<void> {
    return await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=54.198705&lon=37.641062&appid=40dd0d9fca4d02c5fa33d8b285cdeb4f')
      .then((response) => response.json())
      .then((response) => response?.list)
      .catch((reject):void => console.log(reject))
  }
}