const bossText = "Narcis Stan";
const container1 = document.querySelector(".message");
const tableUsers = document.querySelector(".tableusers");

const usersDatabase = [
  {
    id: "1",
    username: "cristianmasala",
    name: "Cristian Masala",
    email: "cristian.masala@moneygold.ro",
    role: "Utilizator",
    departament: "Marketing",
    branch: "Sediu Principal",
  },
  {
    id: "2",
    username: "narcisstan",
    name: "Narcis Stan",
    email: "narcis.stan@moneygold.ro",
    role: "Administrator",
    departament: "Management",
    branch: "Sediu Principal",
  },
  {
    id: "3",
    username: "roxanaverzea",
    name: "Roxana Verzea",
    email: "roxana.verzea@moneygold.ro",
    role: "Utilizator",
    departament: "Operator Amanet",
    branch: "Bucuresti",
  },
  {
    id: "4",
    username: "alinapavalache",
    name: "Alina Pavalache",
    email: "alina.pavalache@moneygold.ro",
    role: "Utilizator",
    departament: "Financiar",
    branch: "Sediu Principal",
  },
];

messageOfTheDay =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const generateMessage = function (publisher, markup) {
  return `<p>${markup}</p> 
 
 <b>Posted by: </b><h3> ${publisher}</h3>`;
};

container1.insertAdjacentHTML(
  "beforeend",
  generateMessage(bossText, messageOfTheDay)
);

const generateUsers = function (array) {
  let str = array
    .map((v) => {
      return `<tr key="${v.id}">
       <td>${Number(v.id)}</td>
       <td>${v.username}</td>
       <td>${v.name}</td>
       <td>${v.email}</td>
       <td>${v.role}</td>
       <td>${v.departament}</td>
       <td>${v.branch}</td>
       <td class="rowtest">
       <div class="dropdown fa fa-ellipsis-v">
       <div  class="dropdown-content">
         <a href="#">Edit</a>
         <a href="#">Deactivate</a>
         <a href="#">Delete</a>
       </div>
     </div>


       </td>
          <tr/>`;
    })
    .join();

  tableUsers.insertAdjacentHTML("beforeend", str.replaceAll(",", ""));
};

generateUsers(usersDatabase);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

const tab = document.querySelectorAll(".rowtest");

tab.forEach((v, i) => {
  v.addEventListener("click", function (e) {
    e.target.querySelector(".dropdown-content").classList.toggle("show1");

    if (e.target.matches(".dropdown-content")) {
      document.querySelector(".dropdown-content").classList.toggle("show1");
    }
  });
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".rowtest")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.addEventListener("click", function (e) {
  let box = document.querySelector(".rowtest");
  let box3 = document.querySelector(".dropdown");

  if (String(e.target) != String(box) && String(e.target) != String(box3)) {
    let box2 = document.querySelectorAll(".dropdown-content");
    box2.forEach((v) => {
      v.classList.remove("show1");
    });
  }
});

function showComponent(id) {
  document
    .querySelectorAll(".components")
    .forEach((v) => v.classList.add("hidden"));

  console.log(document.getElementById(`${id}1`));
  document.getElementById(`${id}1`).classList.remove("hidden");
}
