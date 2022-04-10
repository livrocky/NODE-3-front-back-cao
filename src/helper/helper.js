function lg(el) {
  console.log("arguments ===", arguments);
  const elObj = { el };
  const key = Object.keys(elObj);
  console.log(`${key[0]} ===`, el);
}

//LBJ NEAISKU IR IKI GALO TAIP IR NEPAVYKO//

//ISSITRAUKIAM VIENA POSTA IS MASYVO BY ID
function findById(arr, givenId) {
  const foundObj = arr.find((elObj) => elObj.id === givenId);
  return foundObj === undefined ? false : foundObj;
}

module.exports = {
  lg,
  findById,
};
