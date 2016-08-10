function showMessage(message) {
    $("#input").text(message);
    $("#password").text(message);
}

function log() {
    let name = $("#input").val();
    let password = $("#password").val();
    // auto
}

function reset() {
    // document.getElementById("t").value="";
    $("#click-reset").click(function (){
        $("#input").val('');
    });

    $("#click-reset").click(function (){
        $("#password").val('');
    });
}