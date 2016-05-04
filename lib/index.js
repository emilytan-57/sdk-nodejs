/**
  * @module BeMyGuestAPIV1Lib
  *  
  * Please refer to
http://docs.bemyguest.apiary.io/
or
http://docs.bemyguestchinese.apiary.io/
  */

var configuration = require('./configuration'),
    ConfigController = require('./Controllers/ConfigController'),
    BookingsController = require('./Controllers/BookingsController'),
    ProductsController = require('./Controllers/ProductsController'),
    UpdateBookingRequest = require('./Models/UpdateBookingRequest'),
    CheckABookingRequest = require('./Models/CheckABookingRequest'),
    BookingStatusesEnum = require('./Models/BookingStatusesEnum'),
    CreateABookingRequest = require('./Models/CreateABookingRequest'),
    BookingStatusEnum = require('./Models/BookingStatusEnum');


function initializer(){}

//Main functional components of BeMyGuestAPIV1Lib
initializer.configuration = configuration;
initializer.ConfigController = ConfigController;
initializer.BookingsController = BookingsController;
initializer.ProductsController = ProductsController;

//Main Models of BeMyGuestAPIV1Lib
initializer.UpdateBookingRequest = UpdateBookingRequest;
initializer.CheckABookingRequest = CheckABookingRequest;
initializer.BookingStatusesEnum = BookingStatusesEnum;
initializer.CreateABookingRequest = CreateABookingRequest;
initializer.BookingStatusEnum = BookingStatusEnum;

module.exports = initializer;