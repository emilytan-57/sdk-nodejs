
/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UpdateBookingRequest
 *
 * @constructor
 */
function UpdateBookingRequest() {
    this.uuid = null;     
    this.status = null;     
}

UpdateBookingRequest.prototype = new BaseModel();
UpdateBookingRequest.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
UpdateBookingRequest.prototype.getUuid = function() {
    return this.uuid;
};

/**
 * Setter for Uuid
 * 
 * @param {string} value 
 */
UpdateBookingRequest.prototype.setUuid = function(value) {
    this.uuid = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {BookingStatusEnum}
 */
UpdateBookingRequest.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {BookingStatusEnum} value 
 */
UpdateBookingRequest.prototype.setStatus = function(value) {
    this.status = value;
};

module.exports = UpdateBookingRequest;