/// <reference path="../collection.ts" />

enum Service_IJet_Query_Sign {
    equals = ':',
    notEquals = '!:',
    contains = '~',
    notContains = '!~',
    and = ',',
    or = ';'
}

class Service_IJet_Query extends collections.Set {

    public delimeter = Service_IJet_Query_Sign.or;

    public addCondition ( fieldName : string, fieldValue : string, operator? = Service_IJet_Query_Sign.equals ) {

    }


}
