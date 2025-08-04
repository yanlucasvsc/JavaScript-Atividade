let idade = Number(prompt('Digite a sua idade'))

if (idade >=18) {   
    console.log('Você é maior de idade.');
} else {    
    console.log('Você é menor de idade.');
}

let acesso = '1234';

let senha = prompt('Digite uma senha:')

if (senha == acesso) {
    console.log('Acesso permitido.')
} else {
    console.log('Acesso negado.')
}

let numero = Number(prompt('Digite um número: '))

if (numero % 2 == 0) {  
    console.log(`O número ${numero} é par!`);
} else {    
    console.log(`O número ${numero} é impar.`); 
}

let numero1 = Number(prompt('Digite o primeiro número: '));

let numero2 = Number(prompt('Digite o segundo número: '));

if (numero1 > numero2) {    
    console.log(`O número ${numero1} é maior que o número ${numero2}!`);
} else if (numero2 > numero1) { 
    console.log(`O número ${numero2} é maior que o número ${numero1}!`);
} else { 
    console.log(`Os números ${numero1} e ${numero2} são iguais.`);
}

let nota1 = Number(prompt('Digite uma nota: '));

let nota2 = Number(prompt('Digite mais uma nota: '));

let media = (nota1 + nota2 /2);

if (media >= 7) {   
    console.log('O aluno está APROVADO!');
} else if (media >= 5 && media < 7) {
    console.log('O aluno está de RECUPERAÇÃO!');
    
} else if (media < 5) {
    console.log('O aluno está REPROVADO!');
    
} else {    
    console.log('Digite uma nota válida!');
    
}