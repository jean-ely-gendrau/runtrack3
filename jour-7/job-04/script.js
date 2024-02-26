/******************************************** FUNCTIONS *****************************/
// Fonction Fect API post
// bodyParam les paramètres à transmètre avec la requête POST
// route : la point de déstination
async function postJs({ route, bodyParam }) {
  let bodyParamFormat = "";

  if (bodyParam) {
    bodyParamFormat = Object.entries(bodyParam)
      .map(([key, val], index) => {
        return `${key}=${val}`;
      })
      .join("&");
  }
  const res = await fetch(
    `https://${window.location.hostname}/jour-7/job-04/${route}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: bodyParamFormat,
    }
  );

  return await res.text();
}

const selectList = document.getElementById("listForm");

const handelSelect = async (e) => {
  e.preventDefault();
  console.log(e);
  const res = await postJs({
    route: "JsPhp.php",
    bodyParam: { action: "selectForm", filename: e.target.value },
  });
  console.log(res, e.target.value);
  newDom = new DOMParser();
  afterNode = newDom.parseFromString(res, "text/html");
  e.target.after(afterNode.body);
};

if (selectList) {
  selectList.addEventListener("change", handelSelect);
}
