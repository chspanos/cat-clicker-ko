var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Ginger');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('Attribution unknown');

  this.level = ko.computed(function() {
    if (this.clickCount() > 50) {
      return 'Adult';
    }
    else if (this.clickCount() > 30 ) {
      return 'Teen';
    }
    else if (this.clickCount() > 10) {
      return 'Infant';
    }
    else {
      return 'Newborn';
    }
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
