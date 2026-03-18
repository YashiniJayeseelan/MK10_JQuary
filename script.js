function semak() {
    var user = $("#username").val();
    var pass = $("#password").val();

    if (user == "" || pass == "") {
        alert("Sila isi kedua-dua ruang Username dan Password!");
        return false;
    }
    
    alert("Proses log masuk sedang dilakukan...");
    return true;
}