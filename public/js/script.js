  "use strict";
   var settings = {
   	frequency: 15,
    limit: 5
   };

   var bands = new Poller(settings, print_results);
   bands.start();

   function print_results() {
   	var result_array = bands.processData();
      for (var i=0; i<5; i++) {
        var index = i + 1;
        var text_index = "text" + index.toString();
        var tweet_index = "tweet" + index.toString();
        document.getElementById(text_index).innerHTML = result_array[i].name;
        document.getElementById(tweet_index).innerHTML = "<span class='redText tlt'>" + result_array[i].count + "</span> Mentions";
      }
      $('.tlt').textillate({ in: { effect: 'rollIn' } });
   };