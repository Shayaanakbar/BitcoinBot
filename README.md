# UpholdTakeHome

Shayaan Akbar, May 21 2021

#This project is a simple example on how to deploy a bot we created to detect the 
#price of bitcoin as it hits an variance of .01% increasing or decreasing.
#For this, I understand that you'll need to have this skills:

Javascript: Intermediate

NodeJS: Intermediate

Terminal: Intermediate

postgres: Intermediate 

Docker: Intermediate

**This text will be bold** The technologies used to make the model application was:

Node: as language

Node: as web framework

Docker: for image/container creation

SendGrid: for sending notifications via Email

postgres: database storage

# Prerequisites
To run this project, you'll need to have the following installed:

Node.js : https://nodejs.org

npm :

npm install npm@latest -g

#Installation
Register at SendGrid and create an API KEY.

#Clone the repo :

git clone https://github.com/Shayaanakbar/UpholdTakeHome
Install dependencies (use sudo if required) :

npm install
Start the server :

npm start

#Docker & Dockerfile

Docker is an excellent container image manager and did the system isolation work for me. 

I just made a simple Dockerfile, See Below:


#Dockerfile

FROM node:16.1.0

RUN mkdir -p /opt/app

WORKDIR /opt/app

RUN adduser app

COPY pricebook/ .

RUN npm install

RUN chown -R app /opt/app

USER app

EXPOSE 3000

CMD ["npm", "run", "pm2"]
