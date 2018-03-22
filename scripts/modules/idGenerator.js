define([], function () {

    var newObjectId = 0;

    function getNextId() {
        return --newObjectId;
    }

    return {
        getNextId: getNextId
    }
})