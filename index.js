const form = document.getElementById("form");
const itemList = document.querySelector("#items");
const btn = document.querySelector("#btn");
const filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //get input value
  let newValue = document.getElementById("task");
  //create new li element
  let li = document.createElement("li");
  //add class

  li.className = "list-group-item text-center text-success fw-bolder";
  //add text node with input value
  li.appendChild(document.createTextNode(newValue.value));
  itemList.appendChild(li);
  //create new delete button element
  let deletebtn = document.createElement("button");
  //add class
  deletebtn.className = "btn btn-danger btn-sm  float-right delete";
  // append text node
  deletebtn.appendChild(document.createTextNode("x"));
  li.appendChild(deletebtn);

  //remove items
  itemList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      if (confirm("are you sure?")) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  });
});

//filter tasks
filter.addEventListener("keyup", (e) => {
  //convert to lowercase
  let text = e.target.value.toLowerCase();
  let li = itemList.getElementsByTagName("li");
  //convert to an array

  Array.from(li).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
