function fullprint() {
    var employee_name = (document.getElementById("fname").value);
    var employee_email = (document.getElementById("email").value);
    var employee_salary = parseInt(document.getElementById("sal").value);
    var employee_dec = (document.getElementById("des").value);
    var employee_dep = (document.getElementById("dep").value);
    document.write("<table border=1>\n    <thead>\n    <tr>\n    <th>Name</th>\n    <th>Email</th>\n   \n    <th>salary</th>\n    <th>Designation</th>\n    <th>Other Info</th>\n    </tr>\n    </thead>\n    <tbody>\n    <td>".concat(employee_name, "</td>\n    <td>").concat(employee_email, "</td>\n        <td>").concat(employee_salary, "</td>\n  \n    <td>").concat(employee_dec, "</td>\n    <td>").concat(employee_dep, "</td>\n    </tbody>\n    </table>"));
}
