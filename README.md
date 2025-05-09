# CRM Frontend

Ce projet contient la partie frontend d'un CRM (Customer Relationship Management). Il a été construit avec React et gère l'interface utilisateur pour un système de gestion des leads avec deux rôles : Employeur et Manager.

## Fonctionnalités

- **Page de connexion (/login)** : Permet aux utilisateurs (employeurs et managers) de se connecter au système.
- **Dashboard Employeur (/employer/dashboard)** : Vue d'ensemble des leads, classée par statut et par manager.
- **Gestion des Managers (/employer/managers)** : Interface permettant à l'employeur de gérer les comptes des managers.
- **Gestion des Leads (/employer/leads)** : Permet à l'employeur de créer, modifier, supprimer et assigner des leads à des managers.
- **Gestion des Leads pour les Managers (/manager/leads)** : Les managers peuvent voir et mettre à jour les leads qui leur sont attribués.

## Prérequis

- Node.js (version >= 14)
- npm (version >= 6)

## Installation

1. Clone le dépôt du frontend :
   ```bash
   git clone https://github.com/ton-username/crm-frontend.git
