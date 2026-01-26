import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: [
      {
        id: uuidv4(),
        city: 'New York',
        temperature: [56, 54, 50, 45, 58],
        pressure: [78, 85, 46, 55, 65],
        humidity: [1019, 1020, 1025, 1018, 1022],
      },
      {
        id: uuidv4(),
        city: 'Boston',
        temperature: [46, 4, 40, 45, 48],
        pressure: [70, 75, 72, 83, 70],
        humidity: [1000, 1010, 1005, 1007, 1011],
      },
      {
        id: uuidv4(),
        city: 'Atlanta',
        temperature: [76, 74, 70, 75, 78],
        pressure: [88, 85, 86, 85, 85],
        humidity: [1030, 1030, 1035, 1038, 1032],
      },
    ],
  },
  reducers: {
    init: (state) => state,
  },
})

export const { init } = weatherSlice.actions
export default weatherSlice.reducer
