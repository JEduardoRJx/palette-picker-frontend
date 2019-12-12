
export const fetchData = async (url) => {
  const response = await fetch(url)
    .catch(error => console.log(error));
  if (response.ok) {
    const data = await response.json()
    return data;
  } else {
    throw Error(response.statusText)
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