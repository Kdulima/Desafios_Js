//Para comer com um pouco mais de variedade, você lê sobre The Balanced Burger, uma série de recomendações sobre a ordem e as quantidades dos vários ingredientes que compõem um hamburger.

//Segundo o artigo, um hamburger perfeitamente equilibrado:

//- tem pão em cima e em baixo;
//- tem pelo menos 2 vegetais;
//- usa exatamente 1 molho;
//- não contém mais de 2 proteínas;
//- tem queijo imediatamente antes de qualquer proteínas;

//Aqui esta uma lista de ingredientes possiveis:

//Vegetais=[tomato, oniom, letuce, eggplant, mushroom, belipepper];
//Molhos=[mayonnaise, ketchup, mustard, barbecue, chipotle, hot sauce];
//Proteína=[beef, chicken, pork, lentils, chickpeas];
//Queijo=[cheffar, gouda, parmesan, mozzarella];
//Pão=[potato bread, sesame bread];

//Queremos saber o quão equilibrada é uma lista de ingredientes, então você criará uma função balancedBurgerScore que recebe uma lista de ingredientes e retorna um número de 0 a 5, onde 0 é a pontuação mais baixa possível.
//O parâmetro ingredientList contém os ingredientes de baixo para cima(enquanto você empilha os ingredientes para criar seu hamburger).

//Se a ingredientList for uma lista vazia, lance um erro com a mensagem "É necessária uma lista de ingredientes".

//Quaisquer ingredientes não reconhecidos devem ser ignorados.

const ingredientsOnTheList = (list, ingredientType) => list.some((ingredient)=> ingredientType.includes(ingredient));

function balancedBurgerScore(ingredientList) {
  if(!ingredientList) throw new Error('É necessária uma lista de ingredientes');
};

try {
  let score = 0;

  const vegetais = ['tomato', 'oniom', 'letuce', 'eggplant', 'mushroom', 'belipepper'];
  const molhos = ['mayonnaise', 'ketchup', 'mustard', 'barbecue', 'chipotle', 'hot sauce'];
  const proteína = ['beef', 'chicken', 'pork', 'lentils', 'chickpeas'];
  const queijo = ['cheffar', 'gouda', 'parmesan', 'mozzarella'];
  const pão = ['potato bread', 'sesame bread'];

  const firstIngredient = ingredientList[0];
  const lastIngredient = ingredientList[ingredientList.length - 1];

  if(!bread.includes(firstIngredient) || !bread.includes(lastIngredient)) {
    return score;
  }

  score += 1

  if(ingredientsOnTheList(ingredientList, vegetais)) score += 1;
  if(ingredientsOnTheList(ingredientList, molhos)) score += 1;
  if(ingredientsOnTheList(ingredientList, proteína)) score += 1;
  if(ingredientsOnTheList(ingredientList, queijo)) score += 1;

  if(score > 5) score = 5;
  return score;  
} catch (e) {
  return e
}

console.log(balancedBurgerScore());