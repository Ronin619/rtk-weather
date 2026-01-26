import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines'
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
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {weatherData.length > 0 &&
          weatherData.map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.city}</th>
                <td>
                  <Sparklines
                    data={data.temperature}
                    limit={5}
                    width={100}
                    height={20}
                    margin={5}
                  >
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="mean" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines
                    data={data.pressure}
                    limit={5}
                    width={100}
                    height={20}
                    margin={5}
                  >
                    <SparklinesLine color="green" />
                    <SparklinesReferenceLine type="mean" />
                  </Sparklines>
                </td>
                <td>
                  <Sparklines
                    data={data.humidity}
                    limit={5}
                    width={100}
                    height={20}
                    margin={5}
                  >
                    <SparklinesLine color="red" />
                    <SparklinesReferenceLine type="mean" />
                  </Sparklines>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
