require.config({
    baseUrl: "scripts",
    paths: {
        "subscription": "modules/subscription",
        "subModule": "modules/subModule",
        "idGenerator": "modules/idGenerator"
    },
    shim:{
        /*
        Explicit dependencie registration for non-AMD modules
        'non-amd-module': {
            deps:['dependent-module']
        },                              
        */
    }
});