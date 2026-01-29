import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines'

export default function WeatherDataRow({ data }) {
  const handleSetDefault = () => {
    console.log('Clicked!')
  }
  return (
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
      <td>
        <button
          type="button"
          className="btn btn-outline-secondary default-Btn btn-sm"
          onClick={handleSetDefault}
        >
          Set Default
        </button>
      </td>
    </tr>
  )
}
