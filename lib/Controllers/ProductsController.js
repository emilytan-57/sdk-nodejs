/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ProductsController = {

    /**
     * Get information about product using its UUID as parameter.###Response+ `uuid` - UUID of product+ `published` - true / false+ `title` - Title of product. Everytime on English+ `titleTranslated` - Title of product on requested language+ `description` - Description of product. Everytime on English+ `descriptionTranslated` - Description of product on requested language+ `highlights` - Highlights of product. Everytime on English+ `highlightsTranslated` - Highlights of product on requested language+ `additionalInfo` - Additional information of product. Everytime on English+ `additionalInfoTranslated` - Additional information of product on requested language+ `priceIncludes` - What's included in product price+ `priceIncludesTranslated` - Translated version of `priceIncludes`+ `itinerary` - Activity itinerary - only applicable for Package type, will be `NULL` for others+ `itineraryTranslated` - translated version of itinerary+ `warnings` - Warnings of the activity (related to safety and insurance)+ `warningsTranslated` - translated version of warnings+ `safety` - activity safety information+ `safetyTranslated` - translated version of safety information+ `latitude` - Latitude+ `longitude` - Longitude+ `minPax` - Minimum number of pax+ `maxPax` - Maximum number of pax+ `basePrice` - Base price of product (for list only)+ `currency` - Currency+ `isFlatPaxPrice` - `true/false` (An indication to tell if the `Product` has the same price for each pax in all of its `productTypes`)+ `reviewCount` - Number of reviews+ `reviewAverageScore` - Average score+ `typeName` - Type of product+ `typeUuid` - Type UUID+ `businessHoursFrom` - supplier business hours `from`+ `businessHoursTo` - supplier business hours `to`+ `meetingTime` - meeting time+ `hotelPickup` - false+ `meetingLocation` - instructions about meeting location with supplier+ `meetingLocationTranslated` - translated version of meeting location+ `photosUrl` - Base URL for images+ `photos` - Array of photos in different dimensions (Sizes: original, 75x50, 175x112, 680x325)+ `categories` - Array of categories+ `productTypes`    + `uuid` - UUID of Product Type    + `title` - Title of Product Type    + `titleTranslated` - Translated version of title    + `description` - Description of Product Type    + `descriptionTranslated` - translated version of description    + `durationDays` - duration in days    + `durationHours` - duration in hours    + `durationMinutes` - duration in  minutes    + `paxMin` - Minimum number of people    + `paxMax` - Maximum number of people    + `daysInAdvance` - how many days in advance booking can be made    + `isNonRefundable` - True if product not refundable    + `hasChildPrice` - Does product has child price    + `minAdultAge` - The minimum age allowed for an adult    + `maxAdultAge` - The maximum age allowed for an adult    + `allowChildren` - Is a child allowed for this product    + `minChildAge` - The minimum age allowed for a child    + `maxChildAge` - The maximum age allowed for a child    + `instantConfirmation` - if it's TRUE then booking this product should return new Booking status = `approved`, but if we're out of stock of e-tickets it can still return `waiting`     + `voucherUse` - instruction on how to use the voucher (Using what? Go to what palce? To redeem with who?)    + `voucherUseTranslated` - translated version of how to use voucher    + `voucherRedemptionAddress` - Voucher redemption address IF client needs to redeem a voucher.     + `voucherRedemptionAddressTranslated` - translated version of `voucherRedemptionAddress`    + `recommendedMarkup` - Apply this markup if you want to match with BMG's website prices    + `prices` - List of prices for Product Type for one month. The prices array consist of price for adults depending of number of adults and price for child.    + `timeSlots` - Available timeslots for product, might be `null`. If the `ProductType` has timeslots, the `timeslotUUID` of the product is REQUIRED in `Check a Booking` and `Create a new booking` methods.+ `addons` - Add-ons for product+ `locations` - Information about product location+ `url` - URL of product + `staticUrl` - Static URL of product+ `guideLanguages` - Available languages speak by tour guide.+ `audioHeadsetLanguages` - Available languages for Audio Headset material.+ `writtenLanguages` - Available written languages for reading material.If product has been deleted from BeMyGuest database response will be:        {          "error": {            "code": "GEN-GONE",            "http_code": 410,            "message": "Resource No Longer Available"          }        }### Promotional pricesExample of promotion data block:        "promotion": {              "type": "early_booking",              "daysInAdvance": 30,              "hoursInAdvance": null,              "name": "Early Bird",              "adult": {                "2": 93.45              },              "child": 0,              "discountPercent": 30,              "cancellationPolicy": []        }- If product type has promotional prices for selected date only one promotion (with best price) will be visible in API.- there are 3 types of promotions (`type` parameter) : `early_booking`, `last_minute` and `discount`- `early_booking` will have value for `daysInAdvance` parameter provided (`hoursInAdvance` will be `NULL`)- `last_minute` will have value for `hoursInAdvance` provided (`daysInAdvance` will be `NULL`)- `discount` type will have both `daysInAdvance` and `hoursInAdvance` set to `NULL`
     * @param {string} uuid    Required parameter: UUID of product
     * @param {string|null} currency    Optional parameter: currency UUID, also currency code may be provided in exchange
     * @param {string|null} dateEnd    Optional parameter: product's prices end date, format YYYY-MM-DD
     * @param {string|null} dateStart    Optional parameter: product's prices start date, format YYYY-MM-DD
     * @param {string|null} language    Optional parameter: language UUID, also language code may be provided
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GETProductResponse}
     */
    getProduct : function(uuid, currency, dateEnd, dateStart, language, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/products/{uuid}/";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "uuid" : uuid
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "currency" : currency,
            "date_end" : dateEnd,
            "date_start" : dateStart,
            "language" : language
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "X-Authorization" : configuration.xAuthorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 410) {
                    callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:response.body},null,context);
                } else if (response.statusCode == 400) {
                    callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 404) {
                    callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:response.body},null,context);
                } else if (response.statusCode == 405) {
                    callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * ###ResponseA response object has the following attributes:  + `uuid` - UUID of product+ `published` - true / false,+ `title` - Title of product. Always on English+ `titleTranslated` - Title of product on requested language+ `description` - Description of product. Always on English+ `descriptionTranslated` - Description of product on requested language+ `highlights` - Highlights of product. Always on English+ `highlightsTranslated` - Highlights of product on requested language+ `additionalInfo` - Additional information of product. Always on English+ `additionalInfoTranslated` - Additional information of product on requested language+ `priceIncludes` - What's included in product price+ `priceIncludesTranslated` - Translated version of `priceIncludes`+ `itinerary` - Activity itinerary - only applicable for Package type, will be `NULL` for others+ `itineraryTranslated` - translated version of itinerary+ `warnings` - Warnings of the activity (related to safety and insurance)+ `warningsTranslated` - translated version of warnings+ `safety` - activity safety information+ `safetyTranslated` - translated version of safety information+ `latitude` - Latitude+ `longitude` - Longitude+ `minPax` - Minimum number of pax+ `maxPax` - Maximum number of pax+ `basePrice` - Base price of product (for list only)+ `currency` - Currency+ `isFlatPaxPrice` - `true/false` (An indication to tell if the `Product` has the same price for each pax in all of its `productTypes` for the selected date. )+ `reviewCount` - Number of reviews+ `reviewAverageScore` - Average score+ `typeName` - Type of product+ `typeUuid` - Type UUID+ `businessHoursFrom` - supplier business hours `from`+ `businessHoursTo` - supplier business hours `to`+ `meetingTime` - meeting time+ `hotelPickup` - `true/false` + `meetingLocation` - instructions about meeting location with supplier+ `meetingLocationTranslated` - translated version of meeting location+ `photosUrl` - Base URL for images+ `photos` - Array of photos in different dimensions (Sizes: original, 75x50, 175x112, 680x325)+ `categories` - Array of categories+ `locations` - Information about product location+ `url` - URL of product If you requested only unpublished (`published` = `false`) products then the list will be simplified.Each element will consist only of these attributes:        {          "data": [            {                "uuid":"b03ce312-742f-5256-bfe2-014daf1c8d01",                "published":false,                "title":"Everest BaseCamp Trek - 16 Days",                "titleTranslated":null            },            {                "uuid":"d70fb77c-3e97-591e-b876-d638a643c41b",                "published":false,                "title":"Half day rock climbing, Ha Long Bay, Vietnam",                "titleTranslated":null            }            [...]        }If you requested only deleted (`deleted` = `false`) products then the list will be simplified.In this case `published` parameter will be ignored.This parameter exists to help partners to synchronize its cached products database.Each element will consist only of these attributes:        {          "data": [            {                "uuid":"b03ce312-742f-5256-bfe2-014daf1c8d01",                "deletedAt":"2015-06-01 14:28:37",                "title":"Everest BaseCamp Trek - 16 Days",                "titleTranslated":null            },            {                "uuid":"d70fb77c-3e97-591e-b876-d638a643c41b",                "published":"deletedAt":"2015-06-01 14:28:37",                "title":"Half day rock climbing, Ha Long Bay, Vietnam",                "titleTranslated":null            }            [...]        }###RequestA request can take these parameters:+ `type`: `b90bd912-3e92-52e6-8abb-c2722cf947db` (optional, string) - UUID of type of product+ `country`: `ebbfac98-5f89-5106-9c4e-9e5dfd485231` (optional, string) - UUID of country+ `city`: `f67e3919-036d-11e5-a2a9-d07e352b4840` (optional, string) - UUID of city - it will always overwrite (nullify) country parameter if provided+ `price_min`: 25.00 (optional, decimal) - minimal price in decimal format 000.00 - it's compared to base price+ `price_max`: 100.00 (optional, decimal) - max price in decimal format 000.00+ `category`: `5a6495b5-9a58-5257-93db-902ca3cf8b40` (optional, string) - UUID of litsing category+ `pax`: `2` (optional, integer) - number of guests+ `currency`: `79efbd4e-3648-5204-8f35-a0e51661a4c7` (optional, string) - currency UUID, also currency code may be provided in exchange+ `language`: `ZH-HANS` (optional, string) - language UUID, also language code may be provided+ `date_start`: `2015-06-25` (optional, string) - product start date, format YYYY-MM-DD+ `date_end`: `2015-06-30` (optional, string) - product end date, format YYYY-MM-DD+ `query`: `diving in Bali` (optional, string) - free phrase for text search for example &query=Bali+ `duration_days_min`: `0` (optional,integer) - product duration minimum days (default 0)+ `duration_days_max`: `0` (optional,integer) - product duration maximum days (default NULL)+ `latitude`: `1.313430` (optional, float) - search in distance radius: latitude value + `longitude`: `103.883768` (optional, float) - search in distance radius: longitude value+ `distance`: `10.5` (optional, float) - search in distance radius in km - to use this param you need to provide always 3 parameters: latitude, longitude and distance+ `sort`: `price` (optional, string) - sorting field, example: &sort=date,-price  or &sort=price+ `page`: `5` (optional, integer) - page number for results+ `per_page`: `25` (optional, integer) - how many results per page - if not provided default value from user account will be used+ `published`: `true` (optional, string) - default is set to true, if set to false then a list of shortened unpublished products will be returned+ `deleted`: `false` (optional, string) - default is set to false, if set to true then a list of shortened deleted products will be returned
     * @param {string|null} category    Optional parameter: UUID of litsing category
     * @param {string|null} city    Optional parameter: UUID of city, it will always overwrite country parameter if provided
     * @param {string|null} country    Optional parameter: UUID of country
     * @param {string|null} currency    Optional parameter: currency UUID, also currency code may be provided in exchange
     * @param {string|null} dateEnd    Optional parameter: product end date, format YYYY-MM-DD
     * @param {string|null} dateStart    Optional parameter: product start date, format YYYY-MM-DD
     * @param {string|null} deleted    Optional parameter: default is set to `false`
     * @param {string|null} distance    Optional parameter: Distance in km
     * @param {int|null} durationDaysMax    Optional parameter: product duration maximum days (default NULL)
     * @param {int|null} durationDaysMin    Optional parameter: product duration minimum days (default 0)
     * @param {string|null} language    Optional parameter: language UUID, also language code may be provided. It will overwrite the default language from user account
     * @param {string|null} latitude    Optional parameter: Latitude value
     * @param {string|null} longitude    Optional parameter: Longitute value
     * @param {double|null} page    Optional parameter: page number for results
     * @param {double|null} pax    Optional parameter: number of people
     * @param {double|null} perPage    Optional parameter: how many results per page - if not provided default value from user account will be used
     * @param {int|null} priceMax    Optional parameter: max price in decimal format 000.00
     * @param {int|null} priceMin    Optional parameter: minimal price in decimal format 000.00 - it's compared to base price
     * @param {string|null} published    Optional parameter: default is always set to `true`
     * @param {string|null} query    Optional parameter: free phrase for text search for example &query=Bali
     * @param {string|null} sort    Optional parameter: sorting field, example: &sort=date,-price  or &sort=price
     * @param {string|null} type    Optional parameter: UUID of type of product
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GETProductsResponse}
     */
    getProductsList : function(category, city, country, currency, dateEnd, dateStart, deleted, distance, durationDaysMax, durationDaysMin, language, latitude, longitude, page, pax, perPage, priceMax, priceMin, published, query, sort, type, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/products";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "category" : category,
            "city" : city,
            "country" : country,
            "currency" : currency,
            "date_end" : dateEnd,
            "date_start" : dateStart,
            "deleted" : deleted,
            "distance" : distance,
            "duration_days_max" : durationDaysMax,
            "duration_days_min" : durationDaysMin,
            "language" : language,
            "latitude" : latitude,
            "longitude" : longitude,
            "page" : page,
            "pax" : pax,
            "per_page" : perPage,
            "price_max" : priceMax,
            "price_min" : priceMin,
            "published" : published,
            "query" : query,
            "sort" : sort,
            "type" : type
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "X-Authorization" : configuration.xAuthorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 400) {
                    callback({errorMessage: "Wrong Arguments", errorCode: 400, errorResponse:response.body},null,context);
                } else if (response.statusCode == 401) {
                    callback({errorMessage: "Unauthorized", errorCode: 401, errorResponse:response.body},null,context);
                } else if (response.statusCode == 403) {
                    callback({errorMessage: "Forbidden", errorCode: 403, errorResponse:response.body},null,context);
                } else if (response.statusCode == 404) {
                    callback({errorMessage: "Resource Not Found", errorCode: 404, errorResponse:response.body},null,context);
                } else if (response.statusCode == 405) {
                    callback({errorMessage: "Method Not Allowed", errorCode: 405, errorResponse:response.body},null,context);
                } else if (response.statusCode == 410) {
                    callback({errorMessage: "Resource No Longer Available", errorCode: 410, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = ProductsController;