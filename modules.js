function seller() {
    var name,age,type;

    function doResume(yourname,yourage,yourtype) {
        name = yourname
        age = yourage
        type = yourtype
    }

    var resume = {
        login: doResume
    }
    return resume

}

var qwe = seller()