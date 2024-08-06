function CounterViewModel() {
  let self = this;
  self.firstName = ko.observable("Wayne");
  self.count = ko.observable(0);

  self.increase = function () {
    let currentValue = self.count();
    self.count(currentValue + 1);
  };

  self.decrease = function () {
    let currentValue = self.count();
    if (currentValue > 0) {
      self.count(currentValue - 1);
    }
  };

  self.dogStatus = ko.computed(function () {
    if (self.count() === 1) {
      return "UNDERWHELMED.";
    }
    if (self.count() === 2) {
      return "LISTENING...";
    }
    if (self.count() > 2) {
      return "THRILLED!";
    }
    return "UPSET.";
  });
}

const knockoutApp = document.querySelector("#knockout-app");
console.log(knockoutApp);
ko.applyBindings(new CounterViewModel(), knockoutApp);
