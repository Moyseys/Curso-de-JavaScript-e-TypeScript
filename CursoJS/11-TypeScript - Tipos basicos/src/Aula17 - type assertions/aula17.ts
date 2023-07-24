//Body pode ser nulo
//Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// - non null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//Não recomendado
const body4 = document.querySelector('body') as unknown as number;
