# Utiliser une image légère d'Nginx
FROM nginx:alpine

# Supprimer les fichiers HTML par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier uniquement les fichiers nécessaires
COPY app/ /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en mode non détaché
CMD ["nginx", "-g", "daemon off;"]
