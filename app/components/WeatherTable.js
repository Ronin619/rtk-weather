import WeatherDataRow from './WeatherDataRow'
import { useSelector } from 'react-redux'

export default function WeatherTable() {
  const weatherData = useSelector((state) => state.weather.weatherData)

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {weatherData.length > 0 &&
          weatherData.map((data) => (
            <WeatherDataRow key={data.id} data={data} />
          ))}
      </tbody>
    </table>
  )
}
