/**
 * Created by alex on 28.05.2018.
 */
function WikiRequester(aListOfChannels){
    this.channels = aListOfChannels;
    this.url = "https://wind-bow.glitch.me/twitch-api";
}

/*
TwitchChanne.prototype.buildList = function(){
    ;
}
*/

function test(){
    $.ajax({
        url: "https://wind-bow.glitch.me/twitch-api/channels/ESL_SC2",
        data: {
            callback :"?"
        },
        dataType: 'jsonp',
        async: true,
        accept: {
            json: "application/json"
        },
        success: function(data){
            console.log("success");
            console.log(data);
            /*
             $.each( data.query.pages, function( key, value ) {
             $("#data").append("<div class='container'>" +
             "<a class='container-data' href='https://en.wikipedia.org/?curid="+ key +"' target='_blank'>"+
             "<h4 class=''>"+ value.title +"</h4>" +
             "<p class='lead'>"+value.extract+ "</p>" +
             "</div>");
             });
             */
        },
        error: function(data){
            console.log("error");
            console.log(data);
        },
    });
}


function test1(){
    $.ajax({
        url: "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2",
        data: {
            callback :"?"
        },
        dataType: 'jsonp',
        async: true,
        accept: {
            json: "application/json"
        },
        success: function(data){
            console.log("success");
            console.log(data);
            /*
             $.each( data.query.pages, function( key, value ) {
             $("#data").append("<div class='container'>" +
             "<a class='container-data' href='https://en.wikipedia.org/?curid="+ key +"' target='_blank'>"+
             "<h4 class=''>"+ value.title +"</h4>" +
             "<p class='lead'>"+value.extract+ "</p>" +
             "</div>");
             });
             */
        },
        error: function(data){
            console.log("error");
            console.log(data);
        },
    });
}