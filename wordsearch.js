//Week 5 Pair Programming by Carter Rostad https://github.com/C-rostad and Daniela Pachon

const transpose = function(matrix) {
  const result = [];
  if (!matrix) { //check if input is valid
    return result;
  }

  for (let col = 0; col < matrix[0].length; col++) { // first loop
    const newRow = [];

    for (let row = 0; row < matrix.length; row++) { // second loop
      newRow.push(matrix[row][col]);
    
    } //second loop end
    result.push(newRow);
  } //first loop end
  return result;
};


const wordSearch = (letters, word) => {
  if (!word || !letters || typeof word !== "string" || !Array.isArray(letters) || letters.length === 0) {
    return false;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
   
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }


  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
    
};

module.exports = wordSearch;