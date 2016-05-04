/**
 * BeMyGuestAPIV1Lib
 *
 * This file was automatically generated for BeMyGuest by APIMATIC v2.0 on 05/03/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ConfigController = {

    /**
     * A Config object has the following attributes:+ `timezone` - Our sever timezone+ `now` - Our server timestamp+ `version` - Current version is "1.0"+ `serverUrl` - Main API URL+ `photosUrl` - Base Path to server where we store our images+ `productsSorting` - Available Products lists sorting options (can be combined with commas, for example &sort=date,-price )    + `date` - Date ascending    + `-date` - Date descending    + `price` - Price ascending    + `-price` - Price descending    + `distance` - Distance ascending (works only if `latitude`,`longitude` & `distance` parameters are provided, ignored otherwise)     + `-distance` - Distance descending (works only if `latitude`,`longitude` & `distance` parameters are provided, ignored otherwise)+ user - All important userdata for provided API key    + `name` - Name / Company / Organization    + `email` - E-Mail Address    + `uuid` - Unique ID    + `continueUrl` - Continue URL (not in use now)    + `notifyUrl` - Notify URL (not in use now)    + `suggestedMarkup` - Suggested markup, % decimal value, for example 7.5    + `defaultPagination` - Default Pagination value (per page), between 1-100    + `defaultSortBy` - Default sort by for /products (if not specified)    + `defaultCurrencyUuid` - Default currency UUID for /products (if not specified)    + `defaultCurrencyCode` - Default currency code for /products (if not specified)    + `defaultLanguageUuid` - Default language UUID  /products (if not specified)    + `defaultLanguageCode` - Default language code  /products (if not specified)    + `walletBalance` - Partner's available wallet balance, based on his deposits    + `walletAvailableBalance` - Wallet balance which is a combination of partner's deposit and assigned credit amount    + `wallet_alert_value` - Threshold value in SGD, when `walletBallance` reach this value then BMG and partner will be notified on this event+ `languages` - A list of supported languages.+ `currencies` - An array of supported currencies.+ `types` - An array of supported products types.+ `categories` - A tree of supported product categories.+ `locations` - A tree of supported locations. (Continent -> Country -> State -> City)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {RetrieveConfigResponse}
     */
    retrieveConfig : function(callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/v1/config";
        
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

module.exports = ConfigController;