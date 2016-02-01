var Helpers = function(){
  var obj = {};

  var linkSwitch = function (CityLinks) {
    //links should be an object of important links
    //with keys equal to their CSS selector targets
    var targets = Object.keys(CityLinks);

    //loop over array of target classes, replace the href attr for each element
    for (var i = 0; i<targets.length; i++){
      var $el = $('.' + targets[i]);
      var content = CityLinks[targets[i]];

      $el.each(function(){
        //for each instance of the function, check whether the href or text content should be changed
        if(content.match('http')){
          $el.attr('href', content);
        } else {
          $el.text(content);
        }
      });
    }
  };
  obj.linkSwitch = linkSwitch;
  obj.linkUpdate = function(Links, city){
    $.get('https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=St.Louis&token=3AVRLNLGQFC43LTG24ID',function(data){
      Links.stlouis.eventbrite = data.events[0].url;
      linkSwitch(Links[city]);
    });
    $.get('https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=Nashville&token=3AVRLNLGQFC43LTG24ID',function (data) {
      Links.nashville.eventbrite = data.events[0].url;
    });
  };

  return obj;
};
