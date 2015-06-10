Trollo.Routers.Router = Backbone.Router.extend ({
  routes: ({
    '' : 'boardsIndex',
    'api/boards/new' : 'nope',
    'api/boards/:id' : 'boardShow',
    'api/lists/:id' : 'nope',
    'api/cards/:id' : 'nope'
  }),

  initialize: function (options){
    this.$rootEl = options.$rootEl;
    this.boards = new Trollo.Collections.Boards();
  },

  boardsIndex: function (){
    this.boards.fetch();
    var view = new Trollo.Views.BoardsIndex({
      collection: this.boards
    });
    this._switchView(view);
  },

  boardShow: function (id){
    var board = new Trollo.Models.Board({id: id});
    board.fetch();

    var view = new Trollo.Views.BoardShow({
      model: board
    });
    this._switchView(view);
  },

  _switchView: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  nope: function (){
    console.log('Nope!')
  }
})
