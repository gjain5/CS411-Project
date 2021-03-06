function createProgressBar(pctOpen, pctRestricted, pctClosed) {
    var progress = document.createElement("div");
    var open = document.createElement("div");
    var restricted = document.createElement("div");
    var closed = document.createElement("div");
    $(progress).addClass("progress");
    $(open).addClass("progress-bar progress-bar-success").css("width", pctOpen*100 + "%");
    $(restricted).addClass("progress-bar progress-bar-warning").css("width", pctRestricted*100 + "%");
    $(closed).addClass("progress-bar progress-bar-danger").css("width", pctClosed*100 + "%");
    $(progress).append([open, restricted, closed]);
    return progress;
}

$("#subj-dropdown a").click(function(e) {
    var subj = e.target.innerHTML;
    $("#subj-name").text(subj);
    $("#courses-table").empty();
    $("#loading-alert").show();
    $.ajax({
        type: "GET",
        url: "retriever.php",
        data: {
            "year": 2015,
            "term": "fall",
            "subject": subj,
        },
        success: function(data) {
            $("#loading-alert").hide();
            var parsed = $.parseJSON(data);
            console.log(parsed);
            for (var i in parsed) {
                var row = document.createElement("tr");
                var numCell = document.createElement("td");
                var nameCell = document.createElement("td");
                var openCell = document.createElement("td");
                $(numCell).text(parsed[i].num);
                $(nameCell).text(parsed[i].name);

                //Calculate the availability of the various sections
                var avail = parsed[i].status;
                var totalSections = 0;
                var openSections = 0;
                var restrictedSections = 0;
                var closedSections = 0;

                for (var i in avail) {
                    totalSections += parseInt(avail[i]);
                    switch(parseInt(i)) {
                        case 0:
                            closedSections += parseInt(avail[i]);
                            break;
                        case 1:
                        case 3:
                            openSections += parseInt(avail[i]);
                            break;
                        case 2:
                            restrictedSections += parseInt(avail[i]);
                            break;
                    }
                }
                if (totalSections) {
                    $(openCell).append(
                        createProgressBar(
                            openSections/totalSections,
                            restrictedSections/totalSections,
                            closedSections/totalSections
                        )
                    );
                } else {
                    $(openCell).text("Schedule not available");
                }
                $(row).append([numCell, nameCell, openCell]);
                $("#courses-table").append(row);
            }
        }
    });
});

var class_selected;
$("#classbutton").click(function() {
    class_selected = $("#classname").val();
    console.log(class_selected);
    $.ajax({
        type: "GET",
        url: "http://classmaster.web.engr.illinois.edu/api.php",
        data: {
            "courses": class_selected,
        },
        success: function(data) {
            var parsed = $.parseJSON(data);
                for (var j in parsed){ 

                        console.log(parsed[j]);                    
                        var newDiv = document.createElement("div"); 
                        var newContent = document.createTextNode(j); 
                        newDiv.appendChild(newContent); //add the text node to the newly created div. 

                        // add the newly created element and its content into the DOM 
                        var currentDiv = document.getElementById("div1"); 
                        document.body.insertBefore(newDiv, currentDiv);
                        var sections = parsed[j]; 
                        
                            for (var i in sections){ 
                                var newDiv = document.createElement("div"); 
                                var newContent = document.createTextNode(i); 
                                newDiv.appendChild(newContent); //add the text node to the newly created div. 

                                // add the newly created element and its content into the DOM 
                                var currentDiv = document.getElementById("div1"); 
                                document.body.insertBefore(newDiv, currentDiv);
                                console.log(sections[i]); 
                                var status = sections[i];
                          
                            }
                }
            }    
    });
});

