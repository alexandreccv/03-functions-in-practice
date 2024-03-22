// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

const ligarDesligar = (status) => {
  let newStatus;
  if (status === 'ligado') {
    newStatus = 'desligado';
    console.log(`O motor está ${newStatus}`);
  } else {
    newStatus = 'ligado';
    console.log(`O motor está ${newStatus}`);
  }
  return newStatus;
};

// Testando a função

console.log(ligarDesligar('ligado'));

// 2 - Crie a função circleArea, que calcule a área de um círculo. 
const circleArea = (raio) => {
  if (typeof raio !== 'number') {
    return `O parâmetro radius deve ser um número`;
  }

  const pi = 3.14
  const area = pi * (raio * raio)
  return `Essa é a área do círculo: ${area}` 
}


// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.


// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
