function AppViewModel() {
  this.firstName = ko.observable("Bert");
  this.lastName = ko.observable("Bertington");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);
  this.capitalizeLastName = function () {
    var currentVal = this.firstName(); // Read the current value
    this.firstName(currentVal.toUpperCase()); // Write back a modified value
  };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
