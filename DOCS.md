# messiah v0.0.0



- [Api](#api)
	- [Create api](#create-api)
	- [Delete api](#delete-api)
	- [Retrieve api](#retrieve-api)
	- [Retrieve apis](#retrieve-apis)
	- [Update api](#update-api)
	


# Api

## Create api



	POST /api


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Api's name.</p>							|
| bloodGroup			| 			|  <p>Api's bloodGroup.</p>							|
| city			| 			|  <p>Api's city.</p>							|
| phonoNo			| 			|  <p>Api's phonoNo.</p>							|
| email			| 			|  <p>Api's email.</p>							|

## Delete api



	DELETE /api/:id


## Retrieve api



	GET /api/:id


## Retrieve apis



	GET /api


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update api



	PUT /api/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Api's name.</p>							|
| bloodGroup			| 			|  <p>Api's bloodGroup.</p>							|
| city			| 			|  <p>Api's city.</p>							|
| phonoNo			| 			|  <p>Api's phonoNo.</p>							|
| email			| 			|  <p>Api's email.</p>							|


