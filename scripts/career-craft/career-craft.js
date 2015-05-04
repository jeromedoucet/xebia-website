$(document).ready(function () {
    var $availableActions = $("#available-actions");
    var $chosenActions = $("#chosen-actions");
    var $chooser = $("#actions").fieldChooser($availableActions, $chosenActions);
    $chooser.on("listChanged", function(e, item, targetList){
        if(targetList.attr('id')==='chosen-actions'){
            var totalScore = 0;
            var chosentValues = {}
            for(var i=0;i<targetList.getFields().length; i++){
                var $item = $(targetList.getFields()[i]);
                var fieldId = $item.attr('f-id');
                if(!chosentValues[fieldId]){
                    var fieldScore = $item.attr('score');
                    chosentValues[fieldId]= fieldScore;
                    totalScore+= parseInt(fieldScore);
                }
            }
            if(totalScore>=3){
                $("#game-display").css('display', 'none');
                $("#success-message").css('display', 'block');
                $('body').scrollTop(0);
            } else if(targetList.getFields().length>5){
                $("#game-display").css('display', 'none');
                $("#fail-message").css('display', 'block');
                $('body').scrollTop(0);
            }
        }
    });


    SyntaxHighlighter.all();
});
