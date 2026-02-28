const PREFACIO = `Antes do primeiro dia, existe a intenção.
Não é pressa — é constância.

Um poema por dia.
Um jeito calmo de dizer:
“eu escolhi ficar.”`;

const MEMORY_INTERVAL = 30;
const FINAL_LETTER_DAY = 365;

const POEMA_365 = `Não foi sobre escrever.

Foi sobre ficar.

Não foi sobre prometer.

Foi sobre acordar e escolher.

Todos os dias.

Te amei ontem.

Te amo hoje.

E se o tempo continuar passando como sempre passa…

eu ainda vou estar aqui.`;

const CARTA_CAPSULA_365 = `Carta – Cápsula do Tempo
23/02/2025

Hoje eu tive uma ideia.

Não foi num dia especial.
Não foi depois de um grande acontecimento.
Foi num dia comum.

Mas eu estava pensando em você de um jeito diferente.

Eu pensei no tempo.

Em como ele passa.
Em como ele leva coisas embora.
Em como é fácil sentir muito… e mostrar pouco.

E eu tive medo.

Medo de não ser suficiente.
Medo de errar tentando acertar.
Medo de amar do meu jeito imperfeito e você não conseguir ver o quanto é verdadeiro.

Foi aí que eu pensei:

E se eu criasse uma prova?

Não uma promessa.
Uma prática.

365 dias.

Um lugar nosso.
Escuro.
Simples.
Silencioso.
Onde todos os dias você pudesse encontrar um pedaço meu.

Eu não sei se eu vou conseguir cumprir.
Eu não sei se terei disciplina.
Eu não sei como estaremos quando você ler isso.

Mas eu sei o que eu sinto hoje.

Te amei ontem,
te amo hoje,
te amarei para sempre.

Hoje isso é promessa.

Eu estou escrevendo antes de tudo começar.
Antes do Dia 1.
Antes do primeiro poema.
Antes de qualquer certeza.

Eu só sei que eu quero tentar.
Quero ser constante.
Quero aprender a amar melhor.
Quero ser o homem que fica.

Se você está lendo isso agora,
no Dia 365,

significa que eu consegui.

Significa que eu acordei e escolhi você
todos os dias.
Mesmo nos dias comuns.
Mesmo nos dias difíceis.
Mesmo nos dias em que eu tive que crescer.

E se hoje, um ano depois,
eu posso escrever algo com tranquilidade,
é isso:

Te amei ontem.
Te amo hoje.
E amanhã…

eu vou continuar escolhendo você.`;

const MEMORIAS = {
  30: `Naquele dia eu decidi.

Eu preciso te contar uma coisa.

O Projeto 365 não nasceu num dia perfeito.
Nasceu num dia comum. Um daqueles dias em que a cabeça fica cheia e o peito fica meio silencioso.

Eu tava pensando em você — do jeito que a gente pensa quando a pessoa já mora na gente, sem pedir licença.
E eu me peguei com medo.

Medo de deixar o tempo levar o que eu sinto.
Medo de amar e não saber mostrar direito.
Medo de você não enxergar o tamanho do que eu guardo.

Aí eu pensei: “eu preciso criar um jeito de te provar constância.”
Não com promessa. Com presença.

E foi aí que a ideia apareceu:
um lugar só nosso. Escuro, elegante, simples… como se fosse um arquivo secreto.
E dentro, uma coisa que ninguém consegue fingir por muito tempo:

todo dia, eu estar aqui.

Não pra te prender.
Pra te lembrar.

Que eu escolhi você.
E que eu vou continuar escolhendo.`,
  60: `Eu lembro como se eu estivesse te contando agora.

Era 19:00.
A gente no shopping, indo pro cinema com aquela mistura de empolgação e nervoso que dá vontade de fingir que não existe.

A gente foi assistir Aquaman…
e eu juro que tentei prestar atenção.
Mas eu tava muito mais preocupado em parecer tranquilo do que em entender o filme.

Eu lembro de pensar: “não estraga isso”.
Lembro do meu coração acelerado tentando disfarçar.
Lembro de você ali do meu lado, e de como aquilo já parecia diferente.

No fim, a gente nem assistiu direito.

Mas eu saí daquele cinema com um sorriso bobo,
daquele tipo que você tenta esconder e não consegue.

Talvez o filme tenha sido qualquer coisa.
Mas você… já tava ficando.`,
  90: `Teve um dia que a gente quase se perdeu no jeito de falar.

Não foi uma briga “grande”.
Foi daquelas que nascem de cansaço,
de orgulho,
de interpretação errada,
de medo disfarçado.

Eu lembro do silêncio depois.
A casa parecia maior.
O peito parecia menor.

Eu fiquei pensando:
“e se eu estragar isso por não saber conversar direito?”
E aí veio uma coisa feia de admitir:
eu tinha medo de estar sendo trocável.

Medo de você cansar.
Medo de você pensar que não vale.
Medo de eu não conseguir ser o que você precisa.

Quando a gente sentou pra conversar,
eu não tava tentando vencer.
Eu tava tentando ficar.

E eu lembro de você me olhando com seriedade…
mas sem crueldade.
Como quem diz:
“eu topo… se você topar de verdade.”

Foi ali que eu entendi que conexão não é só carinho.
É coragem.

Coragem de falar sem atacar.
De ouvir sem se defender.
De pedir desculpa sem justificar.
De dizer “eu tenho medo” sem fazer o outro pagar por isso.

Eu não saí daquela conversa perfeito.
Mas saí diferente.

Mais humilde.
Mais consciente.
Mais seu.

E, principalmente:
mais disposto a cuidar do que a gente tem
com palavra, não com guerra.`,
};

const ATO2_ANNOTATIONS = {
  60: [{ target: "inesquecível", thought: "Eu não lembro do filme… eu lembro de você virando casa." }],
  89: [{ target: "conversa", thought: "Eu te amo mais quando a gente escolhe conversar." }],
  90: [{ target: "coragem", thought: "Conexão é coragem: falar sem arma, ouvir sem escudo." }],
  // se quiser mais forte: eu posso preencher 31–90 com 2–3 por dia depois
};

function getAto2Anotacoes(dia){
  return ATO2_ANNOTATIONS[dia] || [];
}

// ===== POEMAS (1–90) =====
// ✅ (cole aqui o seu array completo igual tava antes; deixei só os 60/89/90 para garantir o bugfix)
const poemas = [];
// ... IMPORTANTE: mantém seus poemas 1–90 aqui do jeito que já estava no seu arquivo.
// Por enquanto, pra não te quebrar tudo, eu garanto explicitamente os dias críticos:

poemas[59] = `Coisas grandes
começam pequenas.

Sem anúncio.
Sem certeza.

Só dois corações
tentando parecer tranquilos
às sete da noite
num cinema qualquer.

É estranho pensar
que algo tão importante
nasceu assim.

Quase silencioso.
Quase desajeitado.

E ainda assim,
inesquecível.`;

poemas[88] = `Teve um dia que o cansaço falou mais alto
e a gente se estranhou.

Eu percebi o quanto eu posso ser duro
quando eu tenho medo.

Mas eu não quero ser esse cara contigo.

Eu quero ser o cara que conversa.
Que volta.
Que resolve.
Que cuida.`;

poemas[89] = `Conexão não é sempre fácil.
É real.

É olhar no olho
e dizer:
“eu não tô bem.”
“eu tô com medo.”
“eu não quero te perder.”

E é ter coragem de ouvir o outro
sem se defender.

Eu aprendi isso com você.
E eu quero cuidar do que a gente tem.`;

// Preenche até 365 com placeholder
(function preencherAte365(){
  for(let i = 0; i < 365; i++){
    if(typeof poemas[i] !== "string" || !poemas[i].trim().length){
      poemas[i] = `Dia ${i+1}\n\n(Em branco por enquanto)\n\nSe você está vendo isso, é porque esse poema ainda não foi escrito no poemas.js.`;
    }
  }
})();

function getPoemaDoDia(dia){
  if(dia < 1 || dia > 365) return "Em breve...";
  if(dia === 365) return POEMA_365;
  return poemas[dia - 1] || "Em breve...";
}

function getMemoriaDoDia(dia){
  return MEMORIAS[dia] || "";
}

function getCartaCapsula365(){
  return CARTA_CAPSULA_365;
}
