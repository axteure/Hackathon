# Utiliser une image de base Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package pour installer les dépendances
COPY package*.json ./

# Installer Nodemon pour le développement
RUN npm install -g nodemon

# Copier le reste des fichiers du backend
COPY . .

# Exposer le port utilisé par le backend
EXPOSE 5000

# Commande par défaut pour un environnement de développement
CMD ["nodemon", "--legacy-watch", "app.js"]
