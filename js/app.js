// Model section
var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Ginger');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('Attribution unknown');
  this.nicknames = ko.observableArray(['Gigi', 'Cuddles', 'Foofles']);

  this.level = ko.computed(function() {
    var count = this.clickCount();
    if (count > 50) {
      return 'Adult';
    }
    else if (count > 30 ) {
      return 'Teen';
    }
    else if (count > 10) {
      return 'Infant';
    }
    else {
      return 'Newborn';
    }
  }, this);

};

// ViewModel section
var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
