# Utiliser une image de base légère avec Nginx
FROM nginx:alpine

# Copier les fichiers de l'application dans le conteneur
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]