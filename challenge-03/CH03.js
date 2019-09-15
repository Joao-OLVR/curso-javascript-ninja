var objeto = {};

var pessoa = {nome: "Olivia", sobrenome: "Shepard", sexo: "feminino", idade: "32", altura: 180, peso: 75, andando: false, caminhouQuantosMetros: 0};

pessoa.fazerAniversario = function()
{
  return pessoa.idade++;
}

pessoa.andar = function(x)
{
  pessoa.caminhouQuantosMetros += x;
  pessoa.andando = true;
}

pessoa.parar = function()
{
  pessoa.andando = false;
}

pessoa.nomeCompleto = function()
{
  return "Olá ! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

pessoa.mostrarIdade = function()
{
  return "Olá, eu tenho " + pessoa.idade + " anos!";
}

pessoa.mostrarPeso = function()
{
  return "Eu peso " + pessoa.peso + "KG.";
}

pessoa.mostrarAltura = function()
{
  return "minha altura é " + pessoa.altura + "cm.";
}

pessoa.nomeCompleto();
pessoa.mostrarIdade();
pessoa.mostrarPeso();
pessoa.mostrarAltura();
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

pessoa.idade;

pessoa.andar(258);
pessoa.andar(547);
pessoa.andar(122);

pessoa.andando;

pessoa.parar();

pessoa.andado;

pessoa.caminhouQuantosMetros;

pessoa.apresentacao = function()
{

  if (pessoa.sexo === "feminino")
  {
    var genero = 'Olá, eu sou a ';
  }

  else
  {
    var genero = 'Olá, eu sou o ';
  }

  if (pessoa.idade === 1)
  {
    var idade = 'ano, ';
  }

  else
  {
    var idade = 'anos, ';
  }

  if (pessoa.caminhouQuantosMetros === 1)
  {
    var andou = 'metro!';
  }

  else
  {
    var andou = 'metros!';
  }

  return genero + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idade + pessoa.altura + 'cm, meu peso é ' + pessoa.peso + 'KG e, só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + andou;

}

pessoa.apresentacao();
