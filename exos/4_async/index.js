'use strict';

// # 5_Asynchrone

/* Exercice 1: Random number
    - Vous avez accès à une fonction createRandomNumber() qui crée une Promesse d'avoir un nombre aléatoire en 0 et 100.
    - Utiliser cette fonction pour récupérer le nombre
    - Si ce nombre est plus grand que 50, afficher "Cool !"
    - Sinon, afficher "Pas cool..."
*/

createRandomNumber()
.then (function (valeurPromise) {
    console.log('Résult: ', valeurPromise);
    if (valeurPromise >= 50) {
        console.log('Cool !');
    }
    else {
        console.log('Pas cool !')
    }
});

/* Exercice 2: Temps d'attente
    - Vous avez accès à une fonction waitForNumber() qui crée une Promesse d'attendre un certain temps.
    - Si ce temps est trop long, la Promesse est rejetée, sinon elle est résolue avec le temps d'attente.
    - Utiliser cette fonction pour afficher le temps d'attente lorsque la Promesse est résolue.
    - Tant que la Promesse est rejetée, recommencez
    - Essayer de trouver quel est le temps d'attente maximal
*/

function exo2(){
    waitForNumber()
    .then(function (valeurPromise) {
        console.log('Résultat:', valeurPromise); 
        return true;
      })
      .catch(function (erreur) {
       
        console.error('Erreur:', erreur); 
       exo2();
        
      });
}

  exo2();





/* Exercice 3: Charger des tweets
    - Vous avez accès à une URL qui contient des tweets.
    - Charger et logguer les tweets en utilisant fetch()



*/
async function logTweet() {
const url =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';

    const maDonnee = await fetch(url); // ici, on attend un certain temps, et on récupère la donnée
    console.log(maDonnee)
    const leJson = await maDonnee.text();
    console.log('TWEET:', leJson)

  }
  
  logTweet();