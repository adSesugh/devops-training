### WEEK 1 PROJECT:  

Simple microservice application  

 1. Create a simple microservice application  

 2. Your application should contain two microservices: a frontend service   and a backend service (with or without a database)  

 3. You can use any programming language of choice  

 4. Your frontend service should fetch the word “TALENT PLUS” from the backend service using an API call.

### How to use
To run the app after installing docker do the following below:

#### Laravel App
******************************************
-   Change to laravel directory 
-   Run `docker-compose up -d` to start up the laravel app. use the http://localhost:8000 to view in your browser
-   To run migration `docker-composer exec app php artisan migrate` 
-   To access the shell `docker-compose exec app bash`

#### Nodejs App
*******************************************
-   Change to nodejs app directory
-   Run `docker-compose up -d`
-   In your browser use http://localhost:3050 to access the api


### WEEK 2 PROJECT TASK 

1. Create a helm chart
2. Your helm chart should deploy you two application containers: frontend app and it’s backend into your Kubernetes cluster
3. configure nginx Ingress to access your applications 



