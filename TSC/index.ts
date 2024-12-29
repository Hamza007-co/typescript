function fullprint(){
    var employee_name: String =((document.getElementById("fname") as HTMLInputElement).value);

    var employee_email: String =((document.getElementById("email") as HTMLInputElement).value);
    var employee_salary: Number =parseInt((document.getElementById("sal") as HTMLInputElement).value);
    var employee_dec: String =((document.getElementById("des") as HTMLSelectElement).value);
    var employee_dep: String =((document.getElementById("dep") as HTMLSelectElement).value);

    document.write(`<table border=1>
    <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
   
    <th>salary</th>
    <th>Designation</th>
    <th>Other Info</th>
    </tr>
    </thead>
    <tbody>
    <td>${employee_name}</td>
    <td>${employee_email}</td>
        <td>${employee_salary}</td>
  
    <td>${employee_dec}</td>
    <td>${employee_dep}</td>
    </tbody>
    </table>`)
}