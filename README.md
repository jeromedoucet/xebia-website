Site Web Corporate Xebia
------------------------
Ce dépôt contient le code source du site web Corporate de Xebia.
Il tourne — au choix — sur Jekyll ou Node.

Pour Jekyll:
* Installez [jekyll](https://github.com/mojombo/jekyll/wiki/install)
* Executez jekyll --server
* Ouvrez votre navigateur sur http://localhost:4000

Pour Node:
* Installez [node](http://nodejs.org)
* Installez la dépendance Express: npm install express
* Executez node server.js
* Ouvrez votre navigateur sur http://localhost:4000

Ce site est structuré à l'aide de [Require](http://requirejs.org/) et de [Backbone](http://backbonejs.org/). L'index.html lance Xebia.js. Cette dernière charge toutes les librairies (jQuery...) puis instancie un Router. Le Router encapsule l'initialisation du plugin jquery.ferro (qui positionne les 5 pages du site en croix et crée des transitions animées entre elles). Ensuite, le Router initialisera les 5 pages du site lors de leur apparition à l'écran.

Le plugin jquery.ferro nécessite la présence de backgrounds dans index.html — d'ou la certaine lourdeur de ce fichier. Il identifie les noeuds dotés de la classe 'sliding' et les répartit sur la page en fonction d'une matrice. Chacun de ces div est composé de deux éléments, le background (déjà présent) et le contenu (ajouté par la suite). Les 5 vues Backbone (assets/js/views) manipulent chacune le contenu d'un de ces 5 div (à l'aide d'un sélecteur indiqué avec 'el') et d'une template associée (assets/tmpl). Ces vues sont créées par le Router lorsque l'url de la page est modifiée (par jquery.ferro). 

Chacune des vues est à l'écoute des évènements se produisant dans son contenu. La vue Passport illustre cela : au click sur sa bannière 'Who we are' elle effectue un selector à l'intérieur de son contenu afin d'y ajouter du texte.

Par défaut, les vues utilise la méthode 'render' pour s'actualiser ; voir si cela se prète au cas présent.

Url Utiles
----------
* [Trello du projet](https://trello.com/board/corporate-web-site-2012/4fe319d537985068397de16d)
* [Site déployé](http://xebia-france.github.com/xebia-website/)
