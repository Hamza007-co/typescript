function full_info() {
    var user_name = (document.getElementById("name").value);
    var user_address = (document.getElementById("address").value);
    var user_tel = parseInt(document.getElementById("tel").value);
    var user_email = (document.getElementById("email").value);
    var user_postcode = parseInt(document.getElementById("postcode").value);
    var user_city = (document.getElementById("town").value);
    var user_time = parseInt(document.getElementById("delivery-time").value);
    var user_ins = (document.getElementById("instructions").value);
    var user_tooping = document.getElementsByName("tooping");
    var user_size = document.getElementsByName("size");
    var user_extras = document.getElementsByName("extras");
    var top = "";
    for (var i = 0; i < user_tooping.length; i++) {
        if (user_tooping[i].checked) {
            top = user_tooping[i].value;
        }
    }
    var siz = "";
    for (var i = 0; i < user_size.length; i++) {
        if (user_size[i].checked) {
            siz = user_size[i].value;
        }
    }
    var ext = "";
    for (var i = 0; i < user_extras.length; i++) {
        if (user_extras[i].checked) {
            ext = user_extras[i].value;
        }
    }
    document.write("<table border=1>\n            <thead>\n            <tr>\n            <th>Name</th>\n            <th>Email</th>\n           \n            <th>phone</th>\n            <th>address</th>\n            <th>city</th>\n            <th>postcode</th>\n            <th>instruction</th>\n            <th>time</th>\n            <th>tooping</th>\n            <th>extras</th>\n            <th>size</th>\n            </tr>\n            </thead>\n            <tbody>\n            <td>".concat(user_name, "</td>\n            <td>").concat(user_address, "</td>\n            <td>").concat(user_email, "</td>          \n            <td>").concat(user_city, "</td>\n            <td>").concat(user_time, "</td>\n            <td>").concat(user_postcode, "</td>\n            <td>").concat(user_tel, "</td>\n            <td>").concat(user_ins, "</td>\n            <td>").concat(user_size, "</td>\n            <td>").concat(user_tooping, "</td>\n            <td>").concat(user_extras, "</td>\n            </tbody>\n            </table>"));
}
