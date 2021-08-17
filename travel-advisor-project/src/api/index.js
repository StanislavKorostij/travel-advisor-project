import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'cc7957cc0amsh81d3bc5b1bb11a6p1a1c86jsn283fe6625d53',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
