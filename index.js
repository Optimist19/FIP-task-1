// In the course of the project/task, some of the ES6 features were touched, such as let and const for global scope and function scope, map(), arrow function. Filter, Reducer and Object are used also in the project.



const btn = document.getElementById("btn");
const LName = document.getElementById("LName");
const FName = document.getElementById("FName");
const phone = document.getElementById("phone");
const arrayInput = document.getElementById("arrayInput");
const reducerData = document.getElementById("reducer-data");

let arrOfUsers = [];
let id = 0;

btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (LName.value === "" && FName.value === "" && phone.value === "") {
    alert("Put your details, please");
    return;
  }

  const lastName = LName.value;
  const firstNam = FName.value;
  const phoneNum = phone.value;
  id++;

  arrOfUsers.push({ lastName, firstNam, phoneNum, id });

  alert("Successfully added");

  LName.value = "";
  FName.value = "";
  phone.value = "";

  displayUserList();
  totalId();
  mapFtn()
});


//This shows up when the arrOfUsers is empty

function whenArrayIsEmpty() {
  if (arrOfUsers.length === 0) {
    arrayInput.innerHTML = `<tr><td colspan="4" class="center">No user data yet, please put in your data</td></tr>`;
  }
}

whenArrayIsEmpty()


// This shows the data in the array(arrOfUsers) to the the frontend(arrayInput)

function displayUserList() {
  let show = "";

  arrOfUsers.forEach((user) => {
    show += `<tr>
      <td>${user.id}</td>
      <td>${user.firstNam}</td>
      <td>${user.lastName}</td>
      <td>${user.phoneNum}</td>
      <td><button onclick="deleteUser(${user.id})">Delete</button></td>
    </tr>
      
    `;
  });

  arrayInput.innerHTML = show;
}

// Delete Ftn

function deleteUser(id) {
  arrOfUsers = arrOfUsers.filter((user) => user.id !== id);

  displayUserList();
  whenArrayIsEmpty()
}

// Reducer

const initialValue = 0;
function totalId() {
  const sumWithInitial = arrOfUsers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue
  );
  console.log(sumWithInitial, "sumWithInitial");
  reducerData.innerHTML = `<small>Reducer:${sumWithInitial}</small>`;
}


// For the map method

const mapFtn = ()=>{
 const mapResult = arrOfUsers.map(user => user.id * 2)
 console.log(mapResult,"mapResult")
}


