const button = document.getElementById("button");

if (button) {
  const showHide = () => {
    const element = document.getElementById("citation");
    if (element) {
      element.classList.contains("displayNone")
        ? element.classList.remove("displayNone")
        : element.classList.add("displayNone");
    } else {
      const article = document.createElement("article");
      article.setAttribute("id", "citation");
      article.innerText =
        "L'important n'est pas la chute, mais l'atterrissage.";
      document.body.prepend(article);
    }
  };

  button.addEventListener("click", showHide);
}
