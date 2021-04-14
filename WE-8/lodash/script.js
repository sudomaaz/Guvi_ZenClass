var lodashFun = /** @class */ (function () {
    function lodashFun() {
    }
    lodashFun.prototype.chunkfun = function (arr, val) {
        var chunkarr = [];
        for (var i = 0; i < arr.length; i += val) {
            (chunkarr).push(arr.slice(i, i + val));
        }
        return chunkarr;
    };
    lodashFun.prototype.reducefun = function (arr, initialvalue) {
        return arr.reduce(function (total, item) {
            return total + item;
        }, initialvalue);
    };
    lodashFun.prototype.filterfun = function (arr, age) {
        return arr.filter(function (value) {
            return value >= age;
        });
    };
    lodashFun.prototype.findfun = function (arr, findNum) {
        return arr.find(function (value) {
            return value == findNum;
        });
    };
    lodashFun.prototype.somefun = function (arr) {
        return arr.some(function (value) { return value % 2 == 0; });
    };
    return lodashFun;
}());
var lodashobj = new lodashFun();
console.log("Chunk Function: " + lodashobj.chunkfun([1, 2, 3, 4, 5], 2));
console.log("Reduce Function: " + lodashobj.reducefun([1, 2, 3, 4, 5], 0));
console.log("Filter Function: " + lodashobj.filterfun([18, 12, 23, 14, 35], 18));
console.log("Find Function: " + lodashobj.findfun([1, 2, 3, 4, 5], 2));
console.log("Some function: " + lodashobj.somefun([1, 2, 3, 4, 5]));
