# A reproduction of an error related to endoints in SvelteKit.

Try launching the dev server, and then running the following command:

```bash
curl --request POST \
 --url http://localhost:3000/api/auth/login \
 --header 'content-type: application/json' \
 --data '{
	"email": "test@email.com",
}'
```
