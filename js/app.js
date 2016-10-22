// Model section
var initialCats = [{
    clickCount: 0,
    name: 'Ginger',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Gigi']
  },
  {
    clickCount: 0,
    name: 'Butterscotch',
    imgSrc: 'http://fixnation.org/wordpress/wp-content/uploads/2014/03/cats-kittens_00379052.jpg',
    imgAttribution: 'http://fixnation.org/wordpress/wp-content/uploads/2014/03/cats-kittens_00379052',
    nicknames: ['B-ball']
  },
  {
    clickCount: 0,
    name: 'Felix',
    imgSrc: 'http://wondrouspics.com/wp-content/uploads/2011/12/Cute-Kitten2.jpg',
    imgAttribution: 'http://wondrouspics.com/wp-content/uploads/2011/12/Cute-Kitten2',
    nicknames: ['Tiger']
  },
  {
    clickCount: 0,
    name: 'Snowball',
    imgSrc: 'http://images2.fanpop.com/image/photos/9100000/kitty-kitties-9109284-500-460.jpg',
    imgAttribution: 'http://images2.fanpop.com/image/photos/9100000/kitty-kitties-9109284',
    nicknames: ['Sweetpea']
  },
  {
    clickCount: 0,
    name: 'Tucker',
    imgSrc: 'http://images.fanpop.com/images/image_uploads/Sleepy-Kitty-cats-153784_724_543.jpg',
    imgAttribution: 'http://images.fanpop.com/images/image_uploads/Sleepy-Kitty-cats-153784',
    nicknames: ['Sleepyhead']
  }
];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

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
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.changeCat = function( selectedCat ) {
    self.currentCat(selectedCat);
  };

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
