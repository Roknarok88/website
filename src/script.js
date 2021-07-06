const bossText = "Narcis Stan";
const container1 = document.querySelector(".components");
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
  return `<h2>Message of the day</h2>
 
 <p>${markup}</p> 
 
 <b>Posted by: </b><h3> ${publisher}</h3>`;
};

container1.insertAdjacentHTML(
  "beforeend",
  generateMessage(bossText, messageOfTheDay)
);

const generateUsers = function (array) {
  let str = array
    .map((v) => {
      return `<tr>
       <td>${Number(v.id)}</td>
       <td>${v.username}</td>
       <td>${v.name}</td>
       <td>${v.email}</td>
       <td>${v.role}</td>
       <td>${v.departament}</td>
       <td>${v.branch}</td>
    <tr/>`;
    })
    .join();

  console.log(str);

  tableUsers.insertAdjacentHTML("beforeend", str.replaceAll(",", ""));
};

generateUsers(usersDatabase);

//test test
