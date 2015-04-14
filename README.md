Site Web Corporate Xebia
========================

Pour les allergiques à la ligne de commande
----

### Travailler sur le site

    * ouvrir le répertoire contenant le site
    * double cliquer sur le fichier workOnSite.command
    * attendre que le mot *watch* apparaisse
    * recharger la page de navigateur qui s'est ouverte

### Déployer en prod

    * ouvrir le répertoire contenant le site
    * double cliquer sur le fichier deploySite.command

En ligne de commande
----

### Travailler sur le site


  * Ouvrir un terminal
  * aller dans le répertoire contenant le site (cd <nom du site>)
  * Lancer la commande <code>npm run watch</code>
  * Faire les modifications que l'on désire
  * Voir le rendu ou ouvrant le fichier *index.html* du répertoire *dist*

### Mettre à jour sa copie local

  * `git pull --rebase`

### Envoyer ses modifications au serveur

   * `git add .`
   * `git commit -am "mon message"`
   * `git push`


### Déployer en prod


  * Ouvrir un terminal
  * aller dans le répertoire contenant le site (cd <nom du site>)
  * Lancer la commande <code>npm run deploy</code>
