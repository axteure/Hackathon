# Utiliser une image de base Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package pour installer les dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers du backend
COPY . .

# Exposer le port utilisé par le backend
EXPOSE 5000

# Commande par défaut pour lancer le serveur
CMD ["node", "app.js"]
