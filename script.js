let parentClicks = 0;
let childClicks = 0;
let myParentVlicks = 0;



document.getElementById("child").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  document.getElementById("child-count").innerHTML = ++childClicks + " ";
});

document.getElementById("secondChild").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation(e);

  document.getElementById("parent-count").innerHTML = ++parentClicks + " ";
});

document
  .getElementById("mysecondChild")
  .addEventListener("click", function (e) {
    e.preventDefault(e);
    e.stopPropagation(e);

    document.getElementById("myparent-count").innerHTML =
      ++myParentVlicks + " ";
  });
