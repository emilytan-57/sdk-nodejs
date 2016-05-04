
/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CheckABookingRequest
 *
 * @constructor
 */
function CheckABookingRequest() {
    this.productTypeUuid = null;     
    this.pax = null;     
    this.children = null;     
    this.timeSlotUuid = null;     
    this.addons = null;     
    this.arrivalDate = null;     
    this.usePromotion = null;     
}

CheckABookingRequest.prototype = new BaseModel();
CheckABookingRequest.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
CheckABookingRequest.prototype.getProductTypeUuid = function() {
    return this.productTypeUuid;
};

/**
 * Setter for ProductTypeUuid
 * 
 * @param {string} value 
 */
CheckABookingRequest.prototype.setProductTypeUuid = function(value) {
    this.productTypeUuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
CheckABookingRequest.prototype.getPax = function() {
    return this.pax;
};

/**
 * Setter for Pax
 * 
 * @param {int} value 
 */
CheckABookingRequest.prototype.setPax = function(value) {
    this.pax = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
CheckABookingRequest.prototype.getChildren = function() {
    return this.children;
};

/**
 * Setter for Children
 * 
 * @param {int} value 
 */
CheckABookingRequest.prototype.setChildren = function(value) {
    this.children = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
CheckABookingRequest.prototype.getTimeSlotUuid = function() {
    return this.timeSlotUuid;
};

/**
 * Setter for TimeSlotUuid
 * 
 * @param {string} value 
 */
CheckABookingRequest.prototype.setTimeSlotUuid = function(value) {
    this.timeSlotUuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
CheckABookingRequest.prototype.getAddons = function() {
    return this.addons;
};

/**
 * Setter for Addons
 * 
 * @param {array} value 
 */
CheckABookingRequest.prototype.setAddons = function(value) {
    this.addons = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
CheckABookingRequest.prototype.getArrivalDate = function() {
    return this.arrivalDate;
};

/**
 * Setter for ArrivalDate
 * 
 * @param {string} value 
 */
CheckABookingRequest.prototype.setArrivalDate = function(value) {
    this.arrivalDate = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {bool}
 */
CheckABookingRequest.prototype.getUsePromotion = function() {
    return this.usePromotion;
};

/**
 * Setter for UsePromotion
 * 
 * @param {bool} value 
 */
CheckABookingRequest.prototype.setUsePromotion = function(value) {
    this.usePromotion = value;
};

module.exports = CheckABookingRequest;