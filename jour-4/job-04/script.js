function postJs({ bodyParam, route }) {
  fetch(`http://${window.location.hostname}/${route}`, {
    method: "POST",
    body: JSON.stringify({
      bodyParam,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
