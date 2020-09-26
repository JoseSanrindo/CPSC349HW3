(function (window){
    'use strict';
    var App=Window.App;
    var Truck=App.Truck;
    var DataStore=App.DataStore;
    var FormHandler=App.FormHandler;
    var myTruck=new Truck('ncc1701',new DataStore());
    window.myTruck=myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
})(window);