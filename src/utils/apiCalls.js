
export const fetchData = async (url) => {
  const response = await fetch(url)
    .catch(error => console.log(error));
  if (response.ok && response.status === 200) {
    const data = await response.json()
    return data;
  } else if (response.ok && response.status === 404) {
    console.log("response", response)
  } else {
    // throw Error(response.statusText)
  }
}

export const removeProject = async (user_id, project_id) => {
  const url = `https://tone-zone-api.herokuapp.com/api/v1/${user_id}/projects/${project_id}`
  const options = {
    method: 'DELETE',
    'Content-Type': 'application/json'
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Unable to remove this project at this time. Please try again later')
  }
}

export const addProject = async (user_id, project_name) => {
  const url = `https://tone-zone-api.herokuapp.com/api/v1/${user_id}/projects`
  const options = {
    method: 'POST',
    body: JSON.stringify({
      project_name,
      user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw Error('Unable to post project. Please try again.')
  }
  return response.json()
}

export const addPalette = async (user_id, project_id, palette_name, color_array) => {
  const url = `https://tone-zone-api.herokuapp.com/api/v1/${user_id}/projects/${project_id}/palettes`
  const options = {
    method: 'POST',
    body: JSON.stringify({
      palette_name,
      project_id,
      color1: color_array[0].color,
      color2: color_array[1].color,
      color3: color_array[2].color,
      color4: color_array[3].color,
      color5: color_array[4].color
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    console.log("ERROR", response)
    // throw Error('Unable to post project. Please try again.')
  }
  return response.json()
}