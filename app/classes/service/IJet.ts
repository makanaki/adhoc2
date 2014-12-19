/// <reference path="../collections.ts" />
/// <reference path="../TClass.ts" />

class Service_IJet_Query extends collections.Collection<any> {

    public delimeter = Service_IJet_Query.signOr;

    public static signEquals = ':';
    public static signNotEquals = '!:';
    public static signContains = '~';
    public static signNotContains = '!~';
    public static signAnd = ',';
    public static signOr = ';';

    /**
     * @param fieldName
     * @param fieldValue
     * @param operator
     * @returns {Service_IJet_Query}
     */
    public addCondition ( fieldName : string, fieldValue : string, operator = Service_IJet_Query.signEquals ) {
        this.add(Service_IJet_Query_Condition.getInstance(fieldName, fieldValue, operator));
        return this;
    }

    /**
     * @returns {string}
     */
    public collect () {
        var items = [];
        this.forEach(function(item : any){
            if (!item.collect) return true;
            var tmp = items['collect']();
            if (typeof item == 'Service_IJet_Query') {
                tmp = '(' + tmp + ')';
            }
            items.push(tmp);
            return true;
        });

        return items.join(this.delimeter);
    }

    /**
     * @param delimeter
     * @returns {Service_IJet_Query}
     */
    public static getInstance (delimeter = Service_IJet_Query.signOr) : Service_IJet_Query {
        var tmp = new Service_IJet_Query();
        tmp.delimeter = delimeter;
        return tmp;
    }

    public fromJSON(json : string) {
        var a = [];
        var obj = JSON.parse(json);
        if (collections.isUndefined(obj.length)) {
            throw typeof this + ': invalid JSON provided';
        }
        for (var i=0; i<obj.length; i++) {
            var rec = obj[i];
        }
    }

    /**
     * @param delimeter
     * @returns {Service_IJet_Query}
     */
    public addQuery (delimeter = Service_IJet_Query.signOr) : Service_IJet_Query {
        var query = Service_IJet_Query.getInstance(delimeter);
        this.add(query);
        return query;
    }

}

class Service_IJet_Query_Condition extends TClass {

    public fieldName : string;
    public fieldValue : string;
    public operator : string = Service_IJet_Query.signEquals;

    /**
     * @returns {string}
     */
    public collect () {
        return this.fieldName + this.operator + this.fieldValue;
    }

    /**
     * @param fieldName
     * @param fieldValue
     * @param operator
     * @returns {Service_IJet_Query_Condition}
     */
    public static getInstance ( fieldName: string, fieldValue: string, operator = Service_IJet_Query.signEquals ) : Service_IJet_Query_Condition {

        if ((!fieldValue) || (fieldValue === '')) {
            operator = Service_IJet_Query.signNotEquals;
            fieldValue = '*';
        }

        var tmp = new Service_IJet_Query_Condition();
        tmp.fieldName = fieldName;
        tmp.operator = operator;
        tmp.fieldValue = fieldValue;

        return tmp;

    }



}
