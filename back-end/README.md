spaghetti-back-end
==================
**Version:** 0.0.1

### /createUser/{userName}/password/{password}
---
##### ***POST***
**Description:** Create a new user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | path | The desired username | Yes | string |
| password | path | The desired password | Yes | string |

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