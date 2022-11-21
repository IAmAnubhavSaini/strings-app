# strings

## visit: http://localhost:19000/

## npm

```shell
npm run start
```

## docker

```shell
#docker build . -t f0c1s/strings-app
#docker push f0c1s/strings-app
docker run --rm --name "strings-app" -p19000:19000 -d f0c1s/strings-app
#docker logs -f strings-app
#docker stop strings-app
```
