/* eslint-disable */
export const fetcher = (url: string): Promise<any> =>
  fetch(url, {
    credentials: "include",
  }).then((res) => res.json());
