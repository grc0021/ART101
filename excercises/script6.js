$("#crAdd").click(
    function(){
        let crName = $("#crName").val();
        let crDesc = $("#crDesc").val();
        if (crDesc != ""){
            $("#creature-list").append(crName + ": " + crDesc + ", ");
            $("#crName").val("");
            $("#crDesc").val("");
        }
        else{
            $("#creature-list").append(crName + ", ");
            $("#crName").val("");
        };
    }
);

$('#clearAll').click(
    function(){
        $("#crName").val("");
        $("#crDesc").val("");
    }
)