class TClass {

    toJson () {
        return JSON.stringify(this);
    }

    toString () {
        return this.toJson();
    }

}
