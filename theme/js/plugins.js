(function(window, document, $) {
  'use strict';

  //typeform
  $(function(){
    var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if(!gi.call(d,id)){
      js=ce.call(d,'script');
      js.id=id;
      js.src=b+'share.js';
      q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)
    }
  });

  //wufoo
  var z1ktxdgn1mk06ld;
  (function(d, t) {
    var s = d.createElement(t), options = {
    'userName':'savvycoders',
    'formHash':'z1ktxdgn1mk06ld',
    'autoResize':true,
    'height':'690',
    'async':true,
    'host':'wufoo.com',
    'header':'show',
    'ssl':true};
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    s.onload = s.onreadystatechange = function() {
    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    try { z1ktxdgn1mk06ld = new WufooForm();z1ktxdgn1mk06ld.initialize(options);z1ktxdgn1mk06ld.display(); } catch (e) {}};
    var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
    })(document, 'script');

  //Google Analytics (through tags manager)
  (function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];
      a.async=1;
      a.src=g;
      m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66700715-1', 'auto');
  ga('send', 'pageview');

}(window, document, window.jQuery));
