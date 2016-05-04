
/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CreateABookingRequest
 *
 * @constructor
 */
function CreateABookingRequest() {
    this.salutation = null;     
    this.firstName = null;     
    this.lastName = null;     
    this.email = null;     
    this.phone = null;     
    this.message = null;     
    this.productTypeUuid = null;     
    this.pax = null;     
    this.children = null;     
    this.timeSlotUuid = null;     
    this.addons = null;     
    this.arrivalDate = null;     
    this.partnerReference = null;     
    this.usePromotion = null;     
}

CreateABookingRequest.prototype = new BaseModel();
CreateABookingRequest.prototype.constructor = BaseModel;

/**
 * One of Mr.|Ms.|Mrs.
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getSalutation = function() {
    return this.salutation;
};

/**
 * Setter for Salutation
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setSalutation = function(value) {
    this.salutation = value;
};

/**
 * Guest's first name
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getFirstName = function() {
    return this.firstName;
};

/**
 * Setter for FirstName
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setFirstName = function(value) {
    this.firstName = value;
};

/**
 * Guest's last name
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getLastName = function() {
    return this.lastName;
};

/**
 * Setter for LastName
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setLastName = function(value) {
    this.lastName = value;
};

/**
 * Guest's email address
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getEmail = function() {
    return this.email;
};

/**
 * Setter for Email
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setEmail = function(value) {
    this.email = value;
};

/**
 * Guest's phone number
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getPhone = function() {
    return this.phone;
};

/**
 * Setter for Phone
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setPhone = function(value) {
    this.phone = value;
};

/**
 * Message to the host
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getMessage = function() {
    return this.message;
};

/**
 * Setter for Message
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setMessage = function(value) {
    this.message = value;
};

/**
 * UUID of the ProductType
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getProductTypeUuid = function() {
    return this.productTypeUuid;
};

/**
 * Setter for ProductTypeUuid
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setProductTypeUuid = function(value) {
    this.productTypeUuid = value;
};

/**
 * Number of adults
 *
 * @return {int}
 */
CreateABookingRequest.prototype.getPax = function() {
    return this.pax;
};

/**
 * Setter for Pax
 * 
 * @param {int} value 
 */
CreateABookingRequest.prototype.setPax = function(value) {
    this.pax = value;
};

/**
 * Number of children
 *
 * @return {int}
 */
CreateABookingRequest.prototype.getChildren = function() {
    return this.children;
};

/**
 * Setter for Children
 * 
 * @param {int} value 
 */
CreateABookingRequest.prototype.setChildren = function(value) {
    this.children = value;
};

/**
 * Selected timeslot. If the product has timeslots, the "timeslotUUID" of the product is REQUIRED in "Check a Booking" and "Create a new booking" methods. Otherwise, it can be excluded
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getTimeSlotUuid = function() {
    return this.timeSlotUuid;
};

/**
 * Setter for TimeSlotUuid
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setTimeSlotUuid = function(value) {
    this.timeSlotUuid = value;
};

/**
 * Add-ons for product (array of uuid/quantity values)
 *
 * @return {array}
 */
CreateABookingRequest.prototype.getAddons = function() {
    return this.addons;
};

/**
 * Setter for Addons
 * 
 * @param {array} value 
 */
CreateABookingRequest.prototype.setAddons = function(value) {
    this.addons = value;
};

/**
 * Arrival date in YYYY-MM-DD format
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getArrivalDate = function() {
    return this.arrivalDate;
};

/**
 * Setter for ArrivalDate
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setArrivalDate = function(value) {
    this.arrivalDate = value;
};

/**
 * Maximum 36 characters partner reference code or number
 *
 * @return {string}
 */
CreateABookingRequest.prototype.getPartnerReference = function() {
    return this.partnerReference;
};

/**
 * Setter for PartnerReference
 * 
 * @param {string} value 
 */
CreateABookingRequest.prototype.setPartnerReference = function(value) {
    this.partnerReference = value;
};

/**
 * f API should check price against "promotion" and not "regular" , default is set to "false"
 *
 * @return {bool}
 */
CreateABookingRequest.prototype.getUsePromotion = function() {
    return this.usePromotion;
};

/**
 * Setter for UsePromotion
 * 
 * @param {bool} value 
 */
CreateABookingRequest.prototype.setUsePromotion = function(value) {
    this.usePromotion = value;
};

module.exports = CreateABookingRequest;