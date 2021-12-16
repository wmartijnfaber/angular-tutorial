# Fix de checks
In dit tutorial dien je 3 duimpjes om te draaien. Onderstaand de stappen

#### Installeer git
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

#### Installeer node
https://nodejs.org/en/download/

####Check het project uit
git clone https://github.com/wmartijnfaber/angular-tutorial.git

#### Installeer packages
navigeer via de cli naar de project folder en draai npm i (npm install)

#### Creeer je eigen branch
git checkout -b jouwBranchNaam

#### Start de server
```
node node_modules\@angular\cli\bin\ng serve
```

## Doel van de opdracht
Zorg dat de 3 checks in app-result gehaald worden zonder daar code aan te passen (niet aan result/*ts komen). Creeer een eigen component: https://angular.io/cli/generate
Voeg daar interactieve knoppen/links toe om de checks te manipuleren. Denk aan <button (click)=mijnClickFunctie(). Of kijk de refresh functionaliteit af uit het result.component.html en result.component.ts

### Check 1
Bouw een event emitter. (https://stackoverflow.com/questions/36076700/what-is-the-proper-use-of-an-eventemitter)

### Check 2
Update de param via de check service. Injecteer de  checkservice in je component, bouw een methode in de service om te updaten.
(TIP! Gebruik de refresh functionaliteit om de tweede check te halen)

### Check 3
Dispatch een action om de state te updaten (https://www.ngxs.io/concepts/store).


### Creeer een pull request op github.
https://github.com/wmartijnfaber/angular-tutorial/pulls
