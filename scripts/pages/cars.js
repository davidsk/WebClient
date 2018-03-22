require(["subModule"], function(subModule){

    var marqueModule = new subModule("Marque");
    var modelModule = new subModule("Model");

    document.querySelectorAll("[name='marque']").forEach(function(element){
        element.addEventListener("change", function(e){
            marqueModule.raiseEvent("change", e);
        });
    });

    document.querySelectorAll("[name='model']").forEach(function(element){
        element.addEventListener("change", function(e){
            modelModule.raiseEvent("change", e);
        });
    });

    marqueModule.subscribe("change", function(e){
        var modelName = e.target.getAttribute("id");

        switch(modelName){
            case "ford":
                document.querySelector("#mondeo").click();
            break;
            case "volkswagen":
                document.querySelector("#passat").click();
            break;
        }
    });

    modelModule.subscribe("change", function(e){
        var modelName = e.target.getAttribute("id");

        switch(modelName){
            case "mondeo":
                document.querySelector("#ford").click();
            break;
            case "passat":
                document.querySelector("#volkswagen").click();
            break;
        }
    });
});