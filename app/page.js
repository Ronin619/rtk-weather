'use client'
import axios from 'axios'
import data from './data'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="text-center pb-2 mb-4 border-bottom">Redux Weather</h1>

      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-sm-4 my-1">
            <input
              type="text"
              className="form-control"
              id="cityInput"
              placeholder="Enter City"
            />
          </div>
          <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary" id="searchBtn">
              Submit
            </button>
          </div>
        </div>
      </form>

      <div>
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
            <tr>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}
