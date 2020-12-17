'use strict';

document.addEventListener(
  'DOMContentLoaded',
  async function () {
    const resp = await fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    );
    const tweets = await resp.json();
    console.log('Le tableau de tweet', tweets);

    // ### Projet Touitter ###

    // [0] observer la structure de donnée des tweets dans la console de votre navigateur

    // [1] créer et ajouter un <button> "bouton" qui quand on clique dessus affiche 'click' dans la console.
    // Ne pas oublier de donner un textContent au bouton
    let button = document.createElement('button');
      button.textContent = "LE BOUTTON"
    document.body.append(button);

    /** 
    button.addEventListener("click",function(){
      console.log('button:',"click")
    })
*/
  
    // [2] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet
    function createLi(tweet){
      let tweetLi = document.createElement("LI");
      let textLi = document.createTextNode(tweet["full_text"]);
      tweetLi.appendChild(textLi);
      return tweetLi;
    }
    // [3] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [2]
    function createOl(twts){
      let tweetOl = document.createElement("ol")
      twts.forEach(function(tweet){
        const result = createLi(tweet);
        tweetOl.append(result);
      })
      return tweetOl;
    }
    const ol = createOl(tweets);
    document.body.append(ol)

    // [4] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'
     
    function checkFr(nb){
        tweets.forEach(function(tweet){
           nb++
           let lang = tweet["lang"]
           if (lang == "fr"){

             //console.log(nb,tweet)
             //console.log(nb,true)
           }
            
        })
      }
 

    // [5] modifier "bouton", et utiliser checkFr au clic du bouton pour afficher dans la console la liste des tweets français
    button.addEventListener("click",function(){
      checkFr(0)
    })
    // [6] modifier "bouton" pour que quand on clique dessus,
    //  - crée un nouveau <ol> avec seulement les tweets français
    //  - remplace le <ol> existant avec le nouvel <ol>, en utilisant .replaceWith()
    button.addEventListener("click",function(){
      let olFr = document.createElement("ol")
      tweets.forEach(function(tweet){
        let lang = tweet["lang"];
        if (lang == "fr") {
          const result = createLi(tweet);
          olFr.append(result);
        }      
      })
      ol.replaceWith(olFr) 
      const olF = olFr
      return olFr;    
  })
    // [7] créer une variable booléenne isFr, et l'initialiser à false
    
    let isFr = false
    let aff = false

  
  // [9] modifier "bouton" pour pouvoir réafficher tous les tweets quand on reclique dessus
    //  Il faut utiliser isFr.
    
      button.addEventListener('click',function(){
          aff = !aff
         
          if(aff == false){
            olFr.replaceWith(ol)
          }
      })

      

    //  [8] inverser la valeur du booléen au clic sur "bouton"
    // [10] changer l'intitulé de "bouton" de filtre en fonction de isFr
    button.addEventListener('click',function(){
      isFr = !isFr
      console.log(isFr)
      if (isFr === true){
        button.textContent = "TRISTAN AIME COD"
      }

      if (isFr === false){
        button.textContent = "FABRICE LE TITA"
      }
  
    })
    /* [11] créer une fonction, qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [3], [6], [9] */

    /* [12] créer une fonction qui crée et renvoie le bouton de filtre.
      Cette fonction doit contenir toute la logique liée au filtre.
      Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
    */

    // ### BONUS: LOCALSTORAGE ###
    // [1] Rajouter un bouton "fav" à chaque li

    /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

    // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
  },
  { once: true },
);
