function full_info(){
    var user_name:string = ((document.getElementById("name") as HTMLInputElement).value)
    var user_address:string = ((document.getElementById("address") as HTMLInputElement).value)
    var user_tel:number =parseInt((document.getElementById("tel")as HTMLInputElement).value)
    var user_email:string =((document.getElementById("email") as HTMLInputElement).value)
    var user_postcode:number=parseInt((document.getElementById("postcode") as HTMLInputElement).value)
    var user_city: String =((document.getElementById("town") as HTMLSelectElement).value);
    var user_time:number = parseInt((document.getElementById("delivery-time")as HTMLInputElement).value)
    var user_ins:string = ((document.getElementById("instructions")as HTMLInputElement).value)
    var user_tooping = (document.getElementsByName("tooping")as NodeListOf<HTMLInputElement>);
    var user_size = (document.getElementsByName("size") as NodeListOf<HTMLInputElement>);
    var user_extras = (document.getElementsByName("extras") as NodeListOf<HTMLInputElement>);
    
    var top:string ="";
    for(var i = 0; i< user_tooping . length; i++){
     if((user_tooping[i] as HTMLInputElement).checked){
         top = (user_tooping[i] as HTMLInputElement).value
     }
    }
    var siz:string="";
    for(var i = 0; i< user_size . length; i++){
        if((user_size[i] as HTMLInputElement).checked){
            siz = (user_size[i] as HTMLInputElement).value
        }
       }

       var ext:string="";
       for(var i = 0; i< user_extras . length; i++){
           if((user_extras[i] as HTMLInputElement).checked){
               ext = (user_extras[i] as HTMLInputElement).value
           }
          }


          document.write(`<table border=1>
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
           
            <th>phone</th>
            <th>address</th>
            <th>city</th>
            <th>postcode</th>
            <th>instruction</th>
            <th>time</th>
            <th>tooping</th>
            <th>extras</th>
            <th>size</th>
            </tr>
            </thead>
            <tbody>
            <td>${user_name}</td>
            <td>${user_address}</td>
            <td>${user_email}</td>          
            <td>${user_city}</td>
            <td>${user_time}</td>
            <td>${user_postcode}</td>
            <td>${user_tel}</td>
            <td>${user_ins}</td>
            <td>${user_size}</td>
            <td>${user_tooping}</td>
            <td>${user_extras}</td>
            </tbody>
            </table>`)
        }
