'use strict';

/* globals $ */
/* eslint-disable no-unused-vars, no-unused-expressions, max-len */

function Helpers() {
    var obj = {};

    function linkSwitch(CityLinks) {
        // links should be an object of important links
        // with keys equal to their CSS selector targets
        var targets = Object.keys(CityLinks);

        // loop over array of target classes, replace the href attr for each element

        var _loop = function _loop(i) {
            var $el = $('.' + targets[i]);
            var content = CityLinks[targets[i]];

            $el.each(function changeHrefOrText() {
                // for each instance of the function,
                // check whether the href or text content should be changed
                if (content.match('http')) {
                    $el.attr('href', content);
                } else {
                    $el.text(content);
                }
            });
        };

        for (var i = 0; i < targets.length; i++) {
            _loop(i);
        }
    }

    obj.linkSwitch = linkSwitch;
    obj.linkUpdate = function updateCityLinks(Links, city) {
        var APISTL = 'https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=St.Louis&token=3AVRLNLGQFC43LTG24ID';
        var APINASH = 'https://www.eventbriteapi.com/v3/events/search/?organizer.id=8391701576&venue.city=Nashville&token=3AVRLNLGQFC43LTG24ID';

        $.get(APISTL, function handleStLouisEventbriteData(data) {
            Links.stlouis.eventbrite = data.events[0].url;
            linkSwitch(Links[city]);
        });

        $.get(APINASH, function handNashvilleEventbriteData(data) {
            Links.nashville.eventbrite = data.events[0].url;
        });
    };

    obj.getArrowPosition = function calculateArrowPosition($target) {
        var windowWidth = $(window).width();
        var $pointer = $('.pointer-after');
        var targetLeft = $target.offset().left;
        var targetCenter = $target.width() / 2;
        var containerLeft = $target.parent().parent().parent().offset().left;
        var arrowBorderOffsetPx = parseFloat($pointer.css('border-left-width')) * 0.5 + 20;

        return targetLeft + targetCenter - containerLeft + arrowBorderOffsetPx;
    };

    return obj;
}