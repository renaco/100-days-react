const URL_SERVICE = 'https://run.mocky.io/v3/00efa05c-2efd-4b33-9957-5d5a84285a3e'

export const getPosts = () => {
  return fetch(URL_SERVICE).then((response) => response.json())
}
