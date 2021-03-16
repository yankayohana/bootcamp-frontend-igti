let employees = [];
let roles = [];


function salaryAscending() {
    employee.sort();
    let table = renderTable();
    document.getElementById("tbody").innerHTML = table;
}

function renderTable() { // gera a tabela de funcionarios
   let rows = employees.map(employee => {
        let role = roles.find((role) => role.id == employee.role_id)
        return  `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td><td>${employee.salary}</td></tr>`
    });
    return `<table>${rows.join('')}</table>`
}

function fetchJson(url) {
    return fetch(url)
    .then((response) => {
        return response.json();
    })
}

async function solution() {
   try {
        [employees, roles]= await Promise.all([
           fetchJson("http://localhost:3000/employees"),
           fetchJson("http://localhost:3000/roles"),
         ])
           let table = renderTable();
           document.getElementById("tbody").innerHTML = table;
       } catch(erro) {
        showError(erro);
   }
   } 

function showError(erro) {
    document.getElementById("tbody").innerHTML = `<tr><td>Erro ao carregar dados</td></tr>`;
}

solution();

