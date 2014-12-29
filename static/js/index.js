exports.documentReady = function(){
  $('.switch_pad').click(function(){
    var padId = prompt("Enter the ID of the Pad you want to quick load");
    if(padId) pad.switchToPad(padId);
  });
}
