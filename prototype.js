let name = "   zohaib   "
console.log(name.length);

// let makes prototype
String.prototype.removeWhiteSpace = function() {
    return this.trim();
}
console.log(name.removeWhiteSpace().length);
