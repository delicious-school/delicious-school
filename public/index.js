function showMessage(message) {
    $("#input").text(message);
    $("#password").text(message);
}

function log() {
    let name = $("#input").val();
    let password = $("#password").val();
    // $.post('./', function (data) {
    // if(data === true){
    top.location = '';
    // }
    // })
}

function reset() {
    $("#click-reset").click(function () {
        $("#input").val('');
    });

    $("#click-reset").click(function () {
        $("#password").val('');
    });
}
