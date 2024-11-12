const check = () => {
    var sName = document.getElementById("txtName").value;
    var reName = /^\w/;
    if(!reName.test(sName)){
        alert("Login Name field can't left blank!");
        document.getElementById("txtName").focus();
        return false;
    }
    var sMail = document.getElementById("txtMail").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;        
    if(!reMail.test(sMail)){
        document.getElementById("txtMail").style.border = "2px solid red";
        alert("Invalid email!");
        document.getElementById("txtMail").focus();
        return false;
    }else{
        document.getElementById("txtMail").style.border = "";
    }
    var sPw = document.getElementById("txtPw").value;
    var rePw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[\w]{3,18}$/;
    if(!rePw.test(sPw)){
        alert("Password must be 3 to 18 characters long, containing both letters and numbers, including at least 1 uppercase letter!");
        document.getElementById("txtPw").value = "";
        document.getElementById("txtPw").focus();
        return false;
    }
    var sCfPw = document.getElementById("txtCfPw").value;
    if(sPw !== sCfPw){
        alert("Confirmed Password does not match the original Password!")
        document.getElementById("txtCfPw").value = "";
        document.getElementById("txtCfPw").focus();
        return false;
    }
    alert(
        "Information" + "\n" + 
        "-----------------------" + "\n" +
        "Login Name: " + sName + "\n" + 
        "Email: " + sMail
    );
}
    document.addEventListener("DOMContentLoaded", () => {
        const togglePassword = (inputId, iconElement) => {
            const passwordInput = document.getElementById(inputId);
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            iconElement.innerHTML = type === "password" ? "&#128586;" : "&#128565;"; // Thay đổi biểu tượng
        };

        document.getElementById("showPw1").addEventListener("click", function() {
            togglePassword("txtPw", this);
        });

        document.getElementById("showPw2").addEventListener("click", function() {
            togglePassword("txtCfPw", this);
        });
    });