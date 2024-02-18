interface CoordinatesData {
  country: string,
  lat: number,
  lon: number,
  local_names: { [key: string]: string },
  name: string,
  state: string
}

interface Coordinates {
  lat: number,
  lon: number
}

interface Weather {
  clouds: {
    all: number
  },
  dt: Data,
  dt_txt: string,
  main: {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_kf: number,
    temp_max: number,
    temp_min: number
  },
  pop: number,
  snow?: {
    '3h': number
  },
  sys: {
    pod: string
  },
  visibility: number,
  weather: {
    description: string,
    icon: string,
    id: number,
    main: string
  }[],
  wind: {
    deg: number,
    gust: number,
    speed: number
  }
}