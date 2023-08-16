export const fetcher = <T>(url: string): Promise<T> =>
  fetch(url, {
    credentials: "include",
  }).then((res) => res.json());
