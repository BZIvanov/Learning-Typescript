$(document).ready(function() {
    $("#create").click(function() {
        
        checker();
    
        let firstItem = $("#first").val();
        let secondItem = $("#second").val();
        let thirdItem = Number($("#third").val());
        let forthItem = $("#forth").val();
        let fifthItem = $("#fifth").val();
        let sixthItem = $("#sixth").val();
        let numberOfTags = Number($("#howMany").val());
        let tagStep = Number($("#tagStep").val());
        let dotStep = $("#dotStep").val();
        let loopStep = 1;
        let dataItem = thirdItem;
        if (tagStep != 0) {
            loopStep = tagStep;
        }

        if (fifthItem != "") {
            fifthItem = Number(fifthItem);
        }
        if (dotStep != "") {
            dotStep = Number(dotStep);
        }
        let textResult = "";
        for (let i = thirdItem; i < thirdItem + (numberOfTags * loopStep); i += loopStep) {
            textResult += `${firstItem}${secondItem}${dataItem}${forthItem}${fifthItem}${sixthItem}\n`;
            dataItem += tagStep;
            if(Number.isInteger(dotStep)) {
                fifthItem += dotStep;
            } 
        }
        if ($("#forth").val() == "." && $("#dotStep").val() == "") {
            $("#dotStep").css("background-color", "red");
        }
        else {
            $("#dotStep").css("background-color", "yellow");
        }
        
        $("#result").val(textResult.split(","));
    })

    //check if dot is added for tag with dot. If not remove cells content on others
    function checker() {
        if ($("#forth").val() != ".") {
            $("#fifth").val("");
            $("#dotStep").val("");
        }
    }
});
