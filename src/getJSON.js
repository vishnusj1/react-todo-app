class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

const loadJson = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    alert(`No results found.`);
    return;
  } else {
    throw new HttpError(response);
  }
};

// const getData = async (e) => {
//   e.preventDefault();
//   const input = document.querySelector('#search-bar');
//   const location = input.value;
//   showLoader();
//   getWeatherData(location);
//   input.value = '';
// };

const getJSON = async (url) => {
  const data = await loadJson(`${url}`);
  // if (data) {
  // const processedData = processData(data);
  //   return processedData;
  // } else {
  //   return;
  // }
  return data;
};
export default getJSON;
