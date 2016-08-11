function showMessage(message) {
    $("#input").text(message);
    $("#password").text(message);
}

function log() {
    let name = $("#input").val();
    let password = $("#password").val();
    start(name, password);
    alert(name, password);
}

function start(name, password) {
    $.get('./judge/'+name,function (result) {
        alert(result);
    })
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