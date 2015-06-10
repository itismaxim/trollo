Trollo.Views.BoardsIndex = Backbone.CompositeView.extend ({

  template: JST['boards_index'],
  formTemplate: JST['boards_new'],

  initialize: function(options) {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {

    this.$el.html(this.template({
      boards: this.collection
    }));

    this.$newBoardButton = $('.add-board');
    this.$newBoardButton.one('click', this.turnIntoForm.bind(this));
    return this;
  },

  turnIntoForm: function(event) {
    var $newBoardForm = $(this.formTemplate());
    $newBoardForm.replaceAll(this.$newBoardButton);
    $newBoardForm.one('submit', this.turnIntoNewBoard.bind(this));
  },

  turnIntoNewBoard: function(event) {
    event.preventDefault();
    var val = $(event.currentTarget).find('input').val();
    var newBoard = new Trollo.Models.Board();
    newBoard.set('title', val);
    newBoard.save();
    this.collection.fetch();
  }
});

    // From the options
    // this.boards = options.boards;
    // if options has collection, it autmoatically get this-ed
