## Table de composantes 
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Fonctionnalités](#Fonctionnalités)
* [Front-end](#front-end)

## Introduction
Que vous soyez adepte de l'organisation ou de la procrastination, les applications Candelier vous seront d'un grand secours, le projet est une simple Rest Application qui permet de gérer les listes des projets ou formation que l’utilisateur Voudrai les faire dans un délai bien déterminer.
La partie backend est développé sur J2ee avec l’utilisation de Spring boot pour la partie Web, le Frontend sur Angular 7 et enfin la gestions des données se fait par le SGBD MySQL sur phpMyAdmin .

	
## Technologies
Project is created with:

* Aangular 7
* Spring boot , Spring Security 
* Visual Studio Code - Latest Version
* Java 8+ et JEE
* Phpmyadmin ,MySQL
* Eclipse - Oxygen+ - (Embedded Maven From Eclipse)
	
## Fonctionnalités 
Tout les pages web se constituent d’un menu (header) que le contenu change en fonction de besoin, aussi un footer fixe contient lien vers le code source de projet 


* Login page 
La Login-page assure la validité des utilisateurs existaient dans la base de données en assurant la suscrite du site web avec Spring Security .


![LoginPage](https://user-images.githubusercontent.com/51484343/79798396-37d11a00-8359-11ea-8ccb-fdf96b49c092.png)


* Welcome Page
Après la validation de des données fournis par l’utilisateur, une welcome page apparait en spécifiant le nom d’utilisateur connecté.
La différence par rapport au Login page se traduit au niveau de menu (disparition du Button login et l’apparition d’autre Button.


![welcomPage](https://user-images.githubusercontent.com/51484343/79805418-61447280-8366-11ea-9f32-c5fd08b5f553.png)


* les listes des projets et formations 
La liste des Todos ou projet-formation contient les projets ou formation correspond à l’utilisateur connecté, il fournit des fonctionnalités intéressantes comme la mise à jour, suppression et l’ajout d’un projet toute en validant les données modifier ou ajouter.


![List-Todo](https://user-images.githubusercontent.com/51484343/79797192-1f600000-8357-11ea-860b-90504fa32ce3.png)

figure>
  
![AddOrUpdate](https://user-images.githubusercontent.com/51484343/79805629-d3b55280-8366-11ea-9dcc-f61af5604b95.png)

  <figcaption>Optional title</figcaption>
</figure>


## Front-end
