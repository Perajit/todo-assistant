export const request = (url, requestOptions) => {
  return fetch(url, requestOptions)
    .then((res) => res.json());
};
