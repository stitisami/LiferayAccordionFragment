# Fragment Liferay : Accordion dynamique avec tabs

## Description

Ce fragment Liferay permet de créer un **accordion dynamique** avec plusieurs onglets (tabs) et du contenu **éditable en mode connecté (admin)**.

Il inclut :

- Gestion dynamique du nombre d’onglets via le champ `numberOfTabs`.
- Possibilité de persister l’onglet sélectionné lors du rechargement de la page (`persistSelectedTab`).
- Mode édition des titres activable (`editTitleMode`) pour modifier les titres directement en mode connecté (admin).
- Zone de contenu dynamique avec `<lfr-drop-zone>` pour ajouter du contenu facilement dans chaque onglet.

---

## Configuration

| Propriété | Type | Default | Description |
|-----------|------|---------|-------------|
| `numberOfTabs` | int | 4 | Nombre d’onglets affichés. Ajustable selon les besoins. |
| `persistSelectedTab` | checkbox | true | Si activé, l’onglet sélectionné reste actif lors du rechargement de la page ou navigation. |
| `editTitleMode` | checkbox | false | Si activé, permet à l’admin de modifier les titres des onglets en mode connecté. |

---

## Utilisation

1. Ajouter le fragment à votre page Liferay.  
2. Configurer le nombre d’onglets et les options selon vos besoins.  
3. En **mode connecté (admin)** :  
   - Activer `editTitleMode` pour modifier les titres directement sur la page.  
   - Ajouter ou modifier le contenu de chaque onglet via `<lfr-drop-zone>`.  
4. Les utilisateurs finaux verront l’accordion fonctionnel avec l’onglet actif persistant si `persistSelectedTab` est activé.  

---

## Fonctionnalités clés

- Accordion avec ajout ou suppression dynamique d’onglets.  
- Contenu éditable **en mode connecté (admin)**.  
- Suivi de l’onglet actif grâce à la persistance.  
- Intégration facile avec d’autres fragments Liferay.
