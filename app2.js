var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.display = function () {
        console.log("Animal name is: " + this.name);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Dog name is: " + this.name);
    };
    return Dog;
}(Animal));
var obj = new Dog("Samock");
obj.display();
//static keyword
var Windows = /** @class */ (function () {
    function Windows() {
    }
    Windows.showWidth = function () {
        console.log("Width: " + Windows.width);
    };
    Windows.showHeight = function () {
        console.log("Width: " + Windows.height);
    };
    return Windows;
}());
Windows.width = 1024;
Windows.height = 768;
Windows.showWidth();
Windows.showHeight();
//Loop for
obj.mData = ["red", "black", "yellow", "green"];
for (var i = 1; i < obj.mData.length; i++) {
    console.log("I: " + obj.mData[i]);
}
obj.mData.forEach(function (e, index) {
    console.log(index + ":\" " + e);
});
