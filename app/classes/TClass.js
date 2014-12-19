var TClass = (function () {
    function TClass() {
    }
    TClass.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    TClass.prototype.toString = function () {
        return this.toJson();
    };
    return TClass;
})();
//# sourceMappingURL=TClass.js.map