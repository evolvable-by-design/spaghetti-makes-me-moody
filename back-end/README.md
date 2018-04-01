spaghetti-back-end
==================
**Version:** 0.0.1

### /analyzeText/
---
##### ***POST***
**Description:** Get analysis data and feedback for given text

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| data | body | the data containing the text and username + password if applicable | Yes | [analyzeEntry](#analyzeentry) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Text analysis success | [entryAnalysis](#entryanalysis) |
| 400 | Error | [ErrorResponse](#errorresponse) |
| default | Error | [ErrorResponse](#errorresponse) |

### /createUser/{userName}/password/{password}
---
##### ***PUT***
**Description:** Create a new user, optionally setting their historyData ifsome has already been generated

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | path | The desired username | Yes | string |
| password | path | The desired password | Yes | string |
| historyData | body | A list of history data that the user has alreadygenerated before they signed up | No | object |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | User creation success | [genericResponse](#genericresponse) |
| 400 | User name already exists | [ErrorResponse](#errorresponse) |
| default | Error | [ErrorResponse](#errorresponse) |

### /retrieveUser/{userName}/password/{password}
---
##### ***GET***
**Description:** Retrieve an existing user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | path | The existing username | Yes | string |
| password | path | The existing password | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Success | [genericResponse](#genericresponse) |
| 400 | User name does not exist | [ErrorResponse](#errorresponse) |
| 401 | Password incorrect | [ErrorResponse](#errorresponse) |
| default | Error | [ErrorResponse](#errorresponse) |

### /updateUser/{userName}/password/{password}
---
##### ***POST***
**Description:** Takes a JSON object in the request body, and adds it to thefront of the 'entryList' field. Currently accepts any valid JSON object.

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | path | The needed username | Yes | string |
| password | path | The needed password | Yes | string |
| body | body | Entry to be added | Yes | object |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | User updated successfully! | [genericResponse](#genericresponse) |
| 404 | User not found! | [ErrorResponse](#errorresponse) |
| default | Error | [ErrorResponse](#errorresponse) |

### /deleteEntry/{userName}/password/{password}/entryIndex/{entryIndex}
---
##### ***DELETE***
**Description:** Deletes a user entry at given array index

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | path | The needed username | Yes | string |
| password | path | The needed password | Yes | string |
| entryIndex | path | Array index of the entry to be deleted | Yes | integer |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | The entry at index was deleted successfully. | [genericResponse](#genericresponse) |
| 404 | User not found! | [ErrorResponse](#errorresponse) |
| default | Error | [ErrorResponse](#errorresponse) |

### /swagger
---
### Models
---

### genericResponse  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | Yes |

### ErrorResponse  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | Yes |

### analyzeEntry  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| text | string |  | Yes |
| username | string |  | No |
| password | string |  | No |

### entryAnalysis  

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| message | string |  | Yes |
| data | object |  | Yes |