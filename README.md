## Table de composantes 
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Fonctionnalités](#Fonctionnalités)

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



* Login page :
La Login-page assure la validité des utilisateurs existaient dans la base de données en assurant la suscrite du site web avec Spring Security .


![LoginPage](https://user-images.githubusercontent.com/51484343/79808173-4fb29900-836d-11ea-9f45-9eafb2690a56.png)


* Welcome Page :
Après la validation de des données fournis par l’utilisateur, une welcome page apparait en spécifiant le nom d’utilisateur connecté.
La différence par rapport au Login page se traduit au niveau de menu (disparition du Button login et l’apparition d’autre Button.


![welcomPage](https://user-images.githubusercontent.com/51484343/79808175-504b2f80-836d-11ea-9aca-ce09be9982d6.png)


* les listes des projets et formations :
La liste des Todos ou projet-formation contient les projets ou formation correspond à l’utilisateur connecté, il fournit des fonctionnalités intéressantes comme la mise à jour, suppression et l’ajout d’un projet .


![List-Todo](https://user-images.githubusercontent.com/51484343/79808171-4fb29900-836d-11ea-8f39-0d11e0f80b89.png)

toute en validant les données modifier ou ajouter.
 
 * Ajout ou l'Updapte :
 l'Ajout ou l'Udapte se fait  En respectant   les cratères de validation 
![AddOrUpdate](https://user-images.githubusercontent.com/51484343/79808168-4e816c00-836d-11ea-937d-60facc244c07.png)
