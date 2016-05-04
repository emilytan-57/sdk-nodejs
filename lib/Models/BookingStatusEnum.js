/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */

var BookingStatusEnum = {

    //Confirms given booking
    CONFIRM : "confirm",

    //Cancels given booking
    CANCEL : "cancel",

    //If confirmationEmailSentAt value is not null then copy of the confirmation email sent to partner will be sent again and the timestamp value of this field will be updated
    RESEND : "resend"

};

module.exports = BookingStatusEnum;