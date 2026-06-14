# La Grange aux Cookies - Project Brief for Claude Code

## Projet

Site vitrine pour **La Grange aux Cookies**, une activité de pâtisserie sèche artisanale itinérante basée à **Genlis, Côte-d'Or (21110)**.  
Fondatrice : **Coline**. Vente sur les marchés locaux de Bourgogne.  
Statut légal : micro-entreprise (en cours de création).

---

## Identité visuelle

### Palette de couleurs

```
Fond principal   #F1EADA  (crème chaude)
Fond secondaire  #F7F1E2  (crème légèrement plus sombre)
Fond kraft       #E8DDC2  (papier kraft)
Vert sauge       #97A37E  (couleur principale de la marque - tirée du logo)
Vert foncé       #5C6648  (boutons, accents forts)
Vert très foncé  #3E4733  (footer)
Ardoise          #3A4032  (bandeau annonces)
Marron principal #4E3B28  (texte corps)
Marron moyen     #6E5C44  (texte secondaire)
Marron clair     #8A7355  (texte tertiaire, labels)
Terre caramel    #B59E78  (bordures, séparateurs)
Bordure douce    #D9CDB4  (bordures légères)
Rouge terracotta #A14E36  (accents, prix, CTA secondaire)
Blanc cassé      #FBF7EC  (cartes, inputs)
Texte sur vert   #F7F2E4  (texte clair sur fond vert)
```

### Typographie

- **Young Serif** (Google Fonts) - titres, prix, noms de produits
- **Lora** (Google Fonts) - corps de texte, labels, boutons
- Fallback : `Georgia, serif`

### Ton visuel

Farmhouse américain / rustique champêtre adapté au marché français :

- Grain papier subtil en overlay fixe
- Bordures pointillées style couture (`border: 1px dashed`)
- Cartes légèrement inclinées (`transform: rotate(-1.5deg)`) avec effet "punaise"
- Tampon circulaire sur le hero
- Badge ruban pour les catégories (`clip-path: polygon(...)`)

### Logo

- Fichier : `assets/logo.png`
- Style : badge ovale western, corde tout autour, grange dessinée à la main, épis de blé
- Palette logo : vert sauge + marron + crème
- Toujours utiliser avec `mix-blend-mode: multiply` sur fond crème

---

## Contenu - Produits

| Produit                 | Catégorie  | Prix   | Ingrédients clés                                                   |
| ----------------------- | ---------- | ------ | ------------------------------------------------------------------ |
| Cookie chocolat         | cookies    | 2,50 € | Chocolat noir grand cru, beurre AOP Charentes-Poitou, fleur de sel |
| Cookie noisette-caramel | cookies    | 2,50 € | Noisettes torréfiées, caramel beurre salé                          |
| Muffin vanille-myrtille | moelleux   | 3,00 € | Vanille de Madagascar, myrtilles entières                          |
| Muffin chocolat         | moelleux   | 3,00 € | Double chocolat, pépites fondantes                                 |
| Financier amande        | financiers | 2,50 € | Amandes brutes, beurre noisette AOP                                |
| Financier pistache      | financiers | 3,00 € | Pistaches de Sicile, beurre noisette                               |
| Brownie                 | gourmands  | 4,00 € | Chocolat intense, noix de pécan                                    |
| Brookie                 | gourmands  | 5,00 € | Brownie fondant + cookie croquant (**produit signature**)          |

> ⚠️ **Allergènes obligatoires** : gluten, œufs, lait, fruits à coque, arachides (traces possibles).  
> Mentions légales : les 14 allergènes réglementaires doivent apparaître **en gras** dans les listes d'ingrédients.

---

## Contenu - Marchés

| Marché                      | Fréquence            | Lieu                     | Statut        |
| --------------------------- | -------------------- | ------------------------ | ------------- |
| Marché de Genlis            | Samedi matin         | Cour du château - Genlis | À confirmer   |
| Marché nocturne             | 13 juillet & 29 août | Chevigny-Saint-Sauveur   | En discussion |
| Marché d'Auxonne            | Vendredi matin       | Centre-ville - Auxonne   | À confirmer   |
| Marché de Gevrey-Chambertin | Samedi matin         | Gevrey-Chambertin        | À confirmer   |
| Fête de la Truffe           | 17 octobre 2026      | Is-sur-Tille             | À confirmer   |
| Foire aux plantes           | 24–25 octobre 2026   | Brazey-en-Plaine         | À confirmer   |

---

## Architecture du site

### Pages / Sections (one-page scroll)

1. **Bandeau ardoise défilant** - annonces marchés, nouveautés
2. **Nav sticky** - logo + liens + CTA "Commander"
3. **Hero** - logo centré + tampon "Fournée 2026 / Côte-d'Or" + CTA
4. **Bandeau valeurs** - Fait maison ✦ Ingrédients locaux ✦ Beurre AOP ✦ Œufs fermiers
5. **Nos produits** - grille filtrée par catégorie (cookies / moelleux / financiers / gourmands)
6. **Notre histoire** - photo Coline + texte
7. **Les mots du marché** - témoignages clients (cartes inclinées)
8. **Nos marchés** - carte stylisée Côte-d'Or + liste des marchés
9. **FAQ** - accordéon (5 questions : conservation, allergènes, commandes groupées, livraison, prix)
10. **Newsletter** - capture email "La lettre de la grange"
11. **Contact** - infos + formulaire (nom, email, message)
12. **Footer** - nav + allergènes + mentions légales

### Comportements interactifs

- Filtre produits par catégorie (sans rechargement)
- FAQ accordéon
- Animations au scroll (IntersectionObserver, `opacity 0 → 1 + translateY`)
- Formulaire contact : validation HTML5 + confirmation après envoi
- Newsletter : confirmation après envoi
- Bandeau : animation CSS `marquee` infinie

---

## Contacts & Réseaux

- Email : `contact@lagrangeauxcookies.fr` _(à créer)_
- Instagram : `@lagrangeauxcookies` _(à créer)_
- Domaine suggéré : `lagrangeauxcookies.fr` _(à vérifier sur OVH)_

---

## Réglementation importante

- **Pas de CAP requis** pour la pâtisserie sèche (décret n°98-246) - valable pour cookies, financiers, brownies, brookies
- **Muffins** : rester sans glaçage ni garniture fraîche pour rester en pâtisserie sèche
- **Déclaration DDPP** (CERFA 13984) obligatoire avant le premier marché
- **Plan de Maîtrise Sanitaire (PMS)** à rédiger
- **Formation HACCP** recommandée
- **Carte ambulant** + inscription **CMA 21** obligatoires
- **14 allergènes** à afficher sur les étiquettes ET à l'oral sur le stand

---

## Assets disponibles

```
assets/
  logo.png          Logo principal (fond transparent recommandé)

À fournir plus tard :
  photos produits   (cookies, muffins, financiers, brownie, brookie)
  photo coline      (en pleine fournée, pour la section histoire)
  photo stand       (marché)
```

---

## Budget prévisionnel (référence)

| Poste                             | Montant      |
| --------------------------------- | ------------ |
| Matériel stand                    | 359 €        |
| Emballages & étiquettes           | 170 €        |
| Matières premières (démarrage)    | 300 €        |
| Assurance RC Pro                  | 200 €        |
| Formation HACCP                   | 150 €        |
| Inscription CMA 21                | 130 €        |
| Carte ambulant                    | 30 €         |
| Communication (Instagram, flyers) | 45 €         |
| Réserve imprévus                  | 200 €        |
| **Total estimé**                  | **~1 584 €** |

---

## Notes de développement

- Le design de référence est dans `Site La Grange aux Cookies v2.dc.html` (prototype complet)
- La carte produits A4 imprimable est dans `Carte Produits (Stand).dc.html`
- Les étiquettes produits (planche A4, 8 étiquettes) sont dans `Étiquettes Produits.dc.html`
- Toutes les photos sont des placeholders à remplacer
- Les témoignages sont fictifs - à remplacer après les premiers marchés
- Le formulaire de contact est côté client uniquement - brancher un service type Formspree ou Netlify Forms
- Idem pour la newsletter - brancher Mailchimp, Brevo ou équivalent
