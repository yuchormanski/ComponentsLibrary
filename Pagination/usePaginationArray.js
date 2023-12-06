async function usePagination(url) {
  const res = await fetch(url, { method: "GET" });
  const data = await res.json();
  return data;
}

export { usePagination };
