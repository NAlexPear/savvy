var Links = function () {

  var obj = {};

  obj.shared = {
    facebook : "https://www.facebook.com/Savvy-Coders-1616883465226928/",
    linkedin : "https://www.linkedin.com/company/10377788?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10377788%2Cidx%3A2-1-2%2CtarId%3A1453332316324%2Ctas%3Asavvy%20coders",
    twitter : 'https://twitter.com/savvycoders'
  };

  obj.stlouis = {
    meetup : "http://www.meetup.com/Saint-Louis-Savvy-Coders-Meetup/",
    location: 'TechArtista',
    address: '4818 Washington Blvd, St. Louis, MO 63108',
    location_link: 'http://www.techartista.org/',
    city: 'St. Louis'
  };

  obj.nashville = {
    meetup : "http://www.meetup.com/savvycoders/",
    location: 'the Refinery',
    address: '438 Houston St Suite 263, Nashville, TN 37203',
    location_link : 'http://www.refinerynashville.com/',
    city: 'Nashville'
  };

  (function(){
    $.get('https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=Nashville&token=3AVRLNLGQFC43LTG24ID',function (data) {
      obj.nashville.eventbrite = data.events[0].url;
    });
    $.get('https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=St.Louis&token=3AVRLNLGQFC43LTG24ID',function(data){
      obj.stlouis.eventbrite = data.events[0].url;
    });
  }());

  return obj;
};
