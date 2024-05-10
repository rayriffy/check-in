export const fetcher = (input: string | URL, init?: RequestInit) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
    },
  }).then(async (o) => {
    // console.log(input, o.ok, o.statusText);
    if (o.ok) return o.json();
    throw new Error(o.statusText);
  });
