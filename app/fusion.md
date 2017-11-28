# Yelp Fusion

## Authentication

### URL
`https://api.yelp.com/oauth2/token`

### Parameters
| Name | Type | Description |
| ------------- | ------------- | ------------- |
| grant_type | string | The OAuth2 grant type to use. Right now, only client_credentials is supported. |
| client_id	| string | The client id for you app with Yelp. |
| client_secret	| string | The client secret for you app with Yelp. |

### Response Body
```
{
  "access_token": "ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 15552000
}
```

## Search API

### Request
```
GET https://api.yelp.com/v3/businesses/search
```

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
| term | string | Optional. Search term (e.g. "food", "restaurants"). If term isn’t included we search everything. The term keyword also accepts business names such as "Starbucks". |
| location | string | Required if either latitude or longitude is not provided. Specifies the combination of "address, neighborhood, city, state or zip, optional country" to be used when searching for businesses. |
| latitude | decimal | Required if location is not provided. Latitude of the location you want to search nearby.
| longitude | decimal | Required if location is not provided. Longitude of the location you want to search nearby.
| radius | int | Optional. Search radius in meters. If the value is too large, a AREA_TOO_LARGE error may be returned. The max value is 40000 meters (25 miles). |
| categories | string | Optional. Categories to filter the search results with. See the list of supported categories. The category filter can be a list of comma delimited categories. For example, "bars,french" will filter by Bars and French. The category identifier should be used (for example "discgolf", not "Disc Golf"). |
| locale | string | Optional. Specify the locale to return the business information in. See the list of supported locales. |
| limit | int | Optional. Number of business results to return. By default, it will return 20. Maximum is 50. |
| offset | int | Optional. Offset the list of returned business results by this amount. |
| sort_by | string | Optional. Sort the results by one of the these modes: best_match, rating, review_count or distance. By default it's best_match. The rating sort is not strictly sorted by the rating value, but by an adjusted rating value that takes into account the number of ratings, similar to a bayesian average. This is so a business with 1 rating of 5 stars doesn’t immediately jump to the top. |
| price | string | Optional. Pricing levels to filter the search result with: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$. The price filter can be a list of comma delimited pricing levels. For example, "1, 2, 3" will filter the results to show the ones that are $, $$, or $$$. |
| open_now | boolean | Optional. Default to false. When set to true, only return the businesses open now. Notice that open_at and open_now cannot be used together. |
| open_at | int | 	Optional. An integer represending the Unix time in the same timezone of the search location. If specified, it will return business open at the given time. Notice that open_at and open_now cannot be used together. |
| attributes | string | Optional. Additional filters to restrict search results. Possible values are:<br><br>
* hot_and_new - Hot and New businesses
* request_a_quote - Businesses that have the Request a Quote feature
* waitlist_reservation - Businesses that have an online waitlist
* cashback - Businesses that offer Cash Back
* deals - Businesses that offer Deals
* gender_neutral_restrooms - Businesses that provide gender neutral restrooms

You can combine multiple attributes by providing a comma separated like "attribute1,attribute2". If multiple attributes are used, only businesses that satisfy ALL attributes will be returned in search results. For example, the attributes "hot_and_new,cashback" will return businesses that are Hot and New AND offer Cash Back.
