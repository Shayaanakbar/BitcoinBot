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
