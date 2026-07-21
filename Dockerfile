FROM nginx:alpine

ENV PORT=8080
EXPOSE 8080

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

COPY index.html style.css script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/
