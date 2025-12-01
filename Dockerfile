# Käytä kevyttä nginx-imagea staattisille sivuille
FROM nginx:alpine

# Kopioi koko projektikansio Nginxin oletus web-hakemistoon
COPY . /usr/share/nginx/html

# Ei erillistä käynnistyskomentoa – nginx käynnistyy automaattisesti