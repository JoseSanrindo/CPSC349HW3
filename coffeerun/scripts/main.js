(function (window){
    'use strict';
    var App=Window.App;
    var Truck=App.Truck;
    var DataStore=App.DataStore;
    var myTruck=new Truck('ncc1701',new DataStore());
    window.myTruck=myTruck;
})(window);