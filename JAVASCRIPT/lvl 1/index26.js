// list
let staff = ["Manager", "Admin", "Blocked_User", "Developer"];
// loop
for (let i =0; i < staff.length ; i++){
    if (staff[i] == "Blocked_User"){
        console.log("Blocked user found, stopping search...");
        continue;
    }
    else{
        console.log(staff[i]);
    }
}