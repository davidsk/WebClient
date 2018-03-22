(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['subscription'], factory);
    }
}(this, function (Subscription) {

    function SubModule(name) {

        if (!(this instanceof SubModule)) {
            throw new TypeError("SubModule constructor cannot be called as a function.");
        }

        Subscription.call(this, name);
    }

    // subclass extends superclass
    SubModule.prototype = Object.create(Subscription.prototype);
    SubModule.prototype.constructor = SubModule;
    
    return SubModule
}));