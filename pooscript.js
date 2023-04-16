// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	
			 	{
					clue: " concept consistant à fournir une interface unique à des entités pouvant avoir différents types",
					answer: "polymorphisme",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "  une notation conventionnelle destinée à formuler des algorithmes et produire des programmes informatiques qui les appliquent",
					answer: "langage",
					position: 2,
					orientation: "across",
					startx: 7,
					starty: 3
				},
				{
					clue: "ce qui est connu et qui sert de point de départ à un raisonnement ayant pour objet la détermination d'une solution à un problème  ",
					answer: "donnee",
					position: 3,
					orientation: "across",
					startx: 15,
					starty: 3
				},
				{
					clue: "langage utilisé en data science",
					answer: "python",
					position: 4,
					orientation: "across",	
					startx: 16,
					starty: 5
				},
				{
					clue: "membre donné d'une classe",
					answer: "attribut",
					position: 5,
					orientation: "across",
					startx: 5,
					starty: 8
				},
				{
					clue: "langage de programmation créé par Jales Gosling et Patrick Naughton",
					answer: "java",
					position: 6,
					orientation: "across",
					startx: 6,
					starty: 10
				},
				{
					clue: "methode appelée à la fin du programme principal",
					answer: "destructeur",
					position: 7,
					orientation: "across",
					startx: 8,
					starty: 12
				},
				{
					clue: "comportement d'un objet",
					answer: "methode",
					position: 8,
					orientation: "across",
					startx: 12,
					starty: 10
				},
				
				{
					clue: "un langage de programmation dynamique ,orienté objet et libre  ",
					answer: "ruby",
					position: 10,
					orientation: "down",
					startx: 4,
					starty: 2
				},
				
				{
					clue: "generalisation de la notion de type defini par l'utilisateur",
					answer: "classe",
					position: 12,
					orientation: "down",
					startx: 11,
					starty: 1
				},

				{
					clue: "instance d'une classe",
					answer: "objet",
					position: 13,
					orientation: "down",
					startx: 2,
					starty: 5
				},
				{
					clue: "relation de type est un ",
					answer: "heritage",
					position: 14,
					orientation: "down",
					startx: 9,
					starty: 5
				},
			
		
					{
					clue: "methode appelée lors de l'instanciation d'un objet",
					answer: "constructeur",
					position: 16,
					orientation: "down",
					startx: 18,
					starty: 1
				},	
				{
					clue: "paradigme de programmation informatique qui simplifie la maintenance et assouplit le code",
					answer: "poo",
					position: 17,
					orientation: "down",
					startx: 16,
					starty: 8
				},
				
			
				
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)