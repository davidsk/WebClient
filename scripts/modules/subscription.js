(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    }
}(this, function () {

    function Subscription(name) {
        // This first guard ensures that the callee has invoked our Class' constructor function
        // with the `new` keyword - failure to do this will result in the `this` keyword referring 
        // to the callee's scope (typically the window global) which will result in the following fields
        // (name and _age) leaking into the global namespace and not being set on this object.
        if (!(this instanceof Subscription)) {
            throw new TypeError("Subscription constructor cannot be called as a function.");
        }

        this.name = name;

        this.eventHandlers = {};
    }

    Subscription.prototype = {

        /**
         * Whenever you replace an Object's Prototype, you need to repoint
         * the base Constructor back at the original constructor Function, 
         * otherwise `instanceof` calls will fail.
         */
        constructor: Subscription,

        /**
         * All methods added to a Class' prototype are public (visible); they are able to 
         * access the properties and methods of the Person class via the `this` keyword.  Note that
         * usage of the `this` keyword is required, failure to use it will result in the JavaScript engine
         * trying to resolve the definition on the global object.
         */

        subscribe: function(event, handler) {

            // current implementation
            var eventRegister = this.eventHandlers[event] || [];

            eventRegister.push(handler);

            this.eventHandlers[event] = eventRegister;
        },

        unsubscribe: function(event, handler) {
            var handlerIndex = this.eventHandlers[event].indexOf(handler);
            this.eventHandlers[event].splice(handlerIndex, 1);
        },

        raiseEvent: function(eventId, data) {
            
            if(this.name){
                console.log(this.name + " raised event '" + eventId + "'");
            }
            
            var eventRegister = this.eventHandlers[eventId] || [];

            eventRegister.forEach(function(handler) {
                handler(data);
            });
        }
    }

    return Subscription;

}));
