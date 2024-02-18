const postJs = async ({ bodyParam, route }) => {
  console.log(JSON.stringify(bodyParam));
  const req = await fetch(
    `http://${window.location.hostname}/jour-4/job-04/${route}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(bodyParam),
    }
  );

  const response = await req.json();
  if (response === "error no bdd") {
    window.location.replace(
      `http://${window.location.hostname}/jour-4/job-04/install.php`
    );
  } else {
    return response;
  }
};

function initProject() {
  const fecth = postJs({
    bodyParam: { action: "initProject" },
    route: "user.php",
  });

  fecth.then((response) => console.log(response));
}
initProject();
