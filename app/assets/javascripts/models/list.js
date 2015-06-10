Trollo.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',

  comparator: 'ord',

  cards: function () {
    if (!this._cards) {
      this._cards = new Trollo.Collections.Cards([], { list: this});
    }
    return this._cards;
  },

  parse: function(response) {
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    return response;
  }
});
