import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherData } from '../store/slices/weather'

export default function Form() {
  const [city, setCity] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchWeatherData(city))
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm-4 my-1">
          <input
            type="text"
            className="form-control"
            id="cityInput"
            value={city}
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-primary" id="searchBtn">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
