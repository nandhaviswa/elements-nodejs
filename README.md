# elements-nodejs

    User{
        number id,
        alphanumeric username,
        email email,
    }

    Profile{
        number userId,
        string firstName,
        string lastName,
        enum gender,
        date dob,
    }

    Address{
        number profileId,
        alphanumeric line1,
        alphanumeric line2,
        alphanumeric district,
        alphanumeric state,
        alphanumeric country,
        number pincode,
        boolean default,
    }

 - User has atmost one profile 
 - Profile belongs to User 
 - Profile has many address

- Clone the repository and navigate to project root
```sh
git clone https://github.com/navayuvan/elements-nodejs.git
cd ~/Workspace/elements-nodejs
```
- Install necessary dependencies and run UT
```sh
npm install
npm test
```
- Start the docker service
```sh
sudo service docker start
sudo service docker status
```
- Pull necessary docker images
```sh
docker pull adminer:latest
docker pull mysql:8.0
docker image ls
```
- Launch the containers
```sh
docker run -d --name elements-mysql -e MYSQL_ROOT_PASSWORD=root mysql:8.0
docker run -d --name elements-adminer adminer
docker container ls
```
- Get the IP address of the containers
```sh
docker inspect elements-mysql | grep IPAddress
docker inspect elements-adminer | grep IPAddress
```
- Login to mysql container and create user and password for the application
```sh
docker exec -it elements-mysql /bin/sh
mysql -uroot -proot
```
- Execute queries in [data/schema.mysql.sql](https://github.com/navayuvan/elements-nodejs/blob/main/data/schema.mysql.sql)
```sh
mysql -u'elements' -p'elements' -h'127.0.0.1'
```
- Execute remaining queries in [data/schema.mysql.sql](https://github.com/navayuvan/elements-nodejs/blob/main/data/schema.mysql.sql)
- Copy the env file and modify the values for the environment
```sh
cp data/env ./.env
vim .env
```
- Import data/elements-nodejs.postman_collection.json in postman
- Launch the application using the below command.
```sh
clear && HTTP_PORT_NO=4000  npm run dev
```
- Check the application by healthcheck URL.
```sh
google-chrome 'http://127.0.0.1:4000/healthcheck'
google-chrome 'http://127.0.0.1:4000/user/index'
```
- Login to the adminer using google chrome command.
```sh
google-chrome 'http://172.17.0.3:8080/?server=172.17.0.2&username=elements&db=elements&sql='
```
- Build docker image
```sh
docker build -t elements-nodejs:latest .
```
- Launch container from docker image
```sh
docker run -d --name test-elements-nodejs elements-nodejs:latest
```
- SSH into the running container
```sh
docker exec -it test-elements-nodejs /bin/bash
```
- Stop all the running containers
```sh
docker container stop $(docker container ls -a -q)
docker container rm $(docker container ls -a -q)
```
- Remove all the downloaded images
```sh
docker image rm $(docker image ls -aq)
```
