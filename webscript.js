// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "un ensemble de fichiers hébergés sur un serveur  et accessible via internet",
					answer: "SITE",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 1
				},
				{
					clue: "le contenu principal du document HTML",
					answer: "body",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "methode qui affiche une boite de dialogue",
					answer: "alerte",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "une réaction à une action émise par l'utilisateur,en JavaScript il est représenté par un nom et une fonction",
					answer: "evenement",
					position: 4,
					orientation: "across",	
					startx: 2,
					starty: 11
				},
				{
					clue: "un langage de programmation libre utilisé pour produire des pages Web dynamiques",
					answer: "php",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 9
				},
				{
					clue: "mot qui permet la liaison entre un fichier html et un fichier css",
					answer: "link",
					position: 6,
					orientation: "across",
					startx: 9,
					starty: 9
				},
				{
					clue: "code utilisé pour mettre en forme une page web",
					answer: "css",
					position: 7,
					orientation: "across",
					startx: 8,
					starty: 6
				},
				{
					clue: "permet à un informaticien de programmer un logiciel ",
					answer: "code",
					position: 8,
					orientation: "across",
					startx: 10,
					starty: 7
				},
				
				{
					clue: "Langage utilisé pour la création de pages web,",
					answer: "html",
					position: 9,
					orientation: "across",
					startx: 12,
					starty: 4
				},
				
				{
					clue: "contient des informations de mise en forme pour un document ou une partie d'un document",
					answer: "style",
					position: 1,
					orientation: "down",
					startx: 4,
					starty: 1
				},

				{
					clue: "une section d'un document qui contient des contrôles interactifs permettant à un utilisateur de fournir des informations.",
					answer: "formulaire",
					position: 10,
					orientation: "down",
					startx: 2,
					starty: 2
				},
				{
					clue: "un protocole de communication entre un client et un serveur pour le World Wide Web",
					answer: "http",
					position: 11,
					orientation: "down",
					startx: 5,
					starty: 6
				},
			
		
					{
					clue: "ajoute de l'interactivité à votre site web",
					answer: "JavaScript",
					position: 12,
					orientation: "down",
					startx: 10,
					starty: 2
				},	
				{
					clue: "élément HTML qui fournit des informations générales sur le document",
					answer: "head",
					position: 9,
					orientation: "down",
					startx: 12,
					starty: 4
				},
				{
					clue: "un élément de base du système de codage HTML utilisé",
					answer: "balise",
					position: 13,
					orientation: "down",
					startx: 15,
					starty: 2
				},
			
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)