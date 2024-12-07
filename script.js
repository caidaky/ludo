// Fonction pour ajouter un pion dans une cellule
function addPawnToCell(cellId, imagePath) {
  const cell = document.getElementById(cellId);
  const pawn = document.createElement('img');
  pawn.src = imagePath;
  pawn.classList.add('pawn');
  cell.appendChild(pawn);
}

// Ajout des pions dans certaines cellules
addPawnToCell('cell1', 'gi.gif'); // Un pion noir dans la cellule 1
addPawnToCell('cell2', 'gif.gif'); // Un pion blanc dans la cellule 2
addPawnToCell('cell3', 'gif.gif'); // Un pion noir dans la cellule 3
addPawnToCell('cell4', 'gif.gif'); // Un pion blanc dans la cellule 4