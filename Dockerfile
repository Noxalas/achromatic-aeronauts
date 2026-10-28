FROM nginx:alpine

# remove default nginx static assets
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
