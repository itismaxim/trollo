window.Trollo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert("Hello from Backbone!");
    var trolloRouter = new Trollo.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start(); // Man I hope this is where this goes.
  }
};

$(document).ready(function(){
  Trollo.initialize();
});
