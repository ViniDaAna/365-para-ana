// ==============================
// Projeto 365 — Poemas / Memórias / Carta
// Dia 1 = poemas[0]
// ...
// Dia 365 = poemas[364]
// ==============================

// Prefácio (antes do início)
const PREFACIO = `Antes do primeiro dia, existe a intenção.
Não é pressa — é constância.

Um poema por dia.
Um jeito calmo de dizer:
“eu escolhi ficar.”`;

// Config de memórias/carta
const MEMORY_INTERVAL = 30;   // 30, 60, 90...
const FINAL_LETTER_DAY = 365; // mantido por compatibilidade

// (mantido por compatibilidade, mas não é usado no Dia 365 agora)
const CARTA_FINAL = `// CARTA FINAL — DIA 365 (não usado agora)
`;

// ===== DIA 365 =====
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

// Memórias desbloqueáveis — EDITAR AQUI
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
  90: `Em breve...`,
  120:`Em breve...`,
  150:`Em breve...`,
  180:`Em breve...`,
  210:`Em breve...`,
  240:`Em breve...`,
  270:`Em breve...`,
  300:`Em breve...`,
  330:`Em breve...`,
};

// ==============================
// SEUS POEMAS (1–89)
// ==============================

const poemas = [

/* ===== 1–30 (Ato 1 — Escolha) ===== */

`Te amei ontem.

Nos dias em que a gente ainda estava aprendendo a ser dois.
Nos primeiros ciúmes bobos.
Nas risadas que viraram memória.
Nas inseguranças que ensinaram maturidade.

Te amei quando eu errei.
Quando precisei crescer.
Quando entendi que amar você não é só sentir — é evoluir.

Te amo hoje.
Porque agora eu sei o que construímos.
Sei que não é impulso.
É decisão.

E te amarei para sempre.
Não como promessa vazia.
Mas como escolha diária.

Te amei ontem.
Te amo hoje.
E escolho te amar para sempre.`,

`Amar você não é impulso.

É hábito.
É intenção.
É permanência.

Eu não fico porque é fácil.
Eu fico porque é verdadeiro.

E se alguém perguntar o que mudou em mim nesses dois anos,
eu respondo sem medo:

Aprendi que amar é permanecer.
E eu permaneço.`,

`Tem um espaço em mim que antes era barulho.

Pressa.
Medo.
Insegurança.

Você não preencheu.
Você reorganizou.

Hoje eu penso antes de agir.
Eu cresço antes de repetir erro.
Eu mudo antes de perder.

Porque você merece alguém que evolui.
E eu quero ser esse alguém.`,

`Eu não lembro o dia exato em que comecei a te amar.

Mas lembro do momento em que percebi
que não queria mais imaginar futuro sem você.

Não foi cena de filme.
Foi natural.
Foi cotidiano.
Foi real.

Você deixou de ser paixão.
Virou base.`,

`Eu lembro do Rio.

Mas não da praia.
Eu lembro de você andando do meu lado.

O vento no seu cabelo.
O sol na sua pele.
E eu pensando que nenhuma paisagem superava você ali.

Eu não queria viajar o mundo.
Eu queria viajar com você.

Porque o lugar não importa.
Você importa.`,

`Eu ainda lembro da tensão antes do primeiro beijo.

Aquele segundo longo.
O quase.
O olhar segurando tudo.

Não foi perfeito.
Foi verdadeiro.

E quando aconteceu,
não foi só um beijo.

Foi o começo de nós.`,

`A gente já discutiu.
Já se irritou.
Já ficou em silêncio pesado.

Mas mesmo nos dias difíceis,
eu nunca quis ir embora.

Porque amor adulto não é ausência de conflito.
É decisão de permanecer.

E mesmo quando dói,
eu ainda escolho você.`,

`Entre todas as possibilidades que a vida me ofereceu,
entre todos os caminhos que eu poderia ter seguido,
eu fiquei.

E não foi por acaso.
Não foi por falta de opção.
Foi escolha.

Porque te amar não é só sentir o coração acelerar —
é decidir permanecer quando o mundo desacelera.

É olhar pra você nos dias comuns,
sem música de fundo,
sem cena cinematográfica,
e ainda assim pensar:
é aqui.

Eu poderia ter fugido das dúvidas,
me escondido nas minhas inseguranças,
feito do orgulho um escudo.
Mas eu fico.

Fico porque o teu riso me desmonta.
Fico porque teu abraço é o único lugar onde eu não preciso ser forte o tempo todo.
Fico porque, mesmo quando tenho medo,
eu prefiro atravessar esse medo com você do que viver seguro sem você.

Te amar é um verbo diário.
E hoje eu reafirmo:

Eu não estou aqui por impulso.
Eu estou aqui por decisão.

E eu te escolho.
De novo.`,

`Eu não fiquei por acaso.

Ficar exige decisão.
Exige consciência.
Exige olhar para alguém e entender que aquilo não é só emoção passageira.

Eu fiquei porque vi futuro.
Vi construção.
Vi algo que não se desmonta na primeira dificuldade.

Entre todas as possibilidades que poderiam ter sido,
eu escolhi a que tem você.

E escolhi sabendo que amor não é sorte.

É compromisso.`,

`Eu não quero um amor perfeito.
Quero um amor verdadeiro.

Daqueles que conversa quando dói.
Que escuta antes de reagir.
Que prefere resolver ao invés de vencer.

Eu não quero ganhar discussões.
Quero preservar o que a gente constrói.

E se isso exige maturidade,
então eu amadureço.

Porque você vale o esforço.`,

`Te amar me ensinou algo que ninguém tinha conseguido antes:
controle.

Nem toda insegurança precisa virar conflito.
Nem todo medo precisa virar acusação.
Nem todo silêncio precisa ser ameaça.

Às vezes, amar é respirar fundo.

E eu aprendi a respirar por nós.`,

`Você não me completou.
Você me acompanhou.

E isso é muito maior.

Porque não é sobre preencher vazio.
É sobre caminhar lado a lado.

Você inteira.
Eu inteiro.

E dois inteiros que decidiram somar.`,

`Tem dias que não são intensos.
Não têm declaração grandiosa.
Não têm cena cinematográfica.

Mas têm constância.

E eu descobri que constância é mais forte que euforia.

É no dia comum que o amor se prova.
E eu continuo aqui.`,

`A gente não construiu isso só com beijo.
Construiu com conversa difícil.
Com pedido de desculpa.
Com orgulho engolido.

Construiu aprendendo o limite do outro.
Respeitando o espaço.
Ajustando o tom.

Isso não é acaso.
Isso é escolha repetida.`,

`Eu não quero fugir quando ficar pesado.

Eu quero sentar do seu lado,
olhar nos seus olhos,
e resolver.

Porque fugir é fácil.
Difícil é permanecer.

E eu escolhi o difícil que constrói.`,

`Já tive medo de perder você.
Hoje tenho mais medo de não cuidar.

Porque amor não acaba de repente.
Ele se desgasta na negligência.

E eu não quero negligenciar o que é raro.

Eu quero cultivar.`,

`Você não é sorte.
Você é consequência da minha decisão.

Todos os dias eu poderia relaxar.
Poderia tratar como garantido.
Poderia diminuir o cuidado.

Mas eu não faço isso.

Porque o que é importante,
a gente protege.`,

`Amor não é humor.

Não depende do dia estar leve.
Não depende da cabeça estar tranquila.
Não depende do mundo colaborar.

Amor é compromisso.

E mesmo quando eu estou cansado,
eu continuo escolhendo você.`,

`Eu gosto de saber que a gente poderia ir embora,
mas decide ficar.

Isso não é dependência.
É consciência.

É maturidade.

É saber que o que temos
vale mais que qualquer impulso de fuga.`,

`Se um dia perguntarem por que eu fiquei,
eu não vou falar de intensidade.

Vou falar de paz.
De construção.
De respeito.

Porque o que a gente tem
não é barulho.

É base.`,

`Eu não quero competir com você.
Quero crescer com você.

Relacionamento não é disputa.
É parceria.

E parceria significa olhar para o mesmo lado.

Eu estou olhando para o mesmo futuro que você.`,

`Te amar me ensinou que firmeza pode ser gentil.

Que não preciso gritar para ser ouvido.
Que não preciso ferir para me defender.

Maturidade é escolher a calma
mesmo quando o ego quer guerra.

E eu escolho a calma.`,

`Eu poderia escolher facilidade.

Mas escolhi profundidade.

E profundidade exige presença,
atenção,
cuidado constante.

Eu não estou aqui por comodidade.

Eu estou aqui por convicção.`,

`Você não é um capítulo bonito.

Você é a história que eu quero continuar escrevendo.

Não por carência.
Não por medo de ficar sozinho.

Mas porque o que a gente constrói
faz sentido.`,

`Se amar fosse só sentir,
já teria acabado.

Mas amar é agir.
É cuidar.
É decidir.

E decisão não depende de emoção momentânea.

Depende de caráter.`,

`Eu não prometo perfeição.
Prometo evolução.

Prometo olhar para meus erros
sem tentar justificar.

Prometo crescer,
porque crescer por nós
é responsabilidade.`,

`Hoje eu não escrevo sobre intensidade.

Escrevo sobre constância.

Sobre olhar para tudo que já passamos
e perceber que continuamos aqui.

Não por falta de opção.

Mas por escolha consciente.`,

`E se um dia o mundo pesar,
se as dúvidas aparecerem,
se o medo tentar sussurrar fuga,

eu vou lembrar de tudo que construímos.

E vou escolher ficar.

Porque amar você
não é impulso.

É decisão renovada.`,

/* ===== 31–60 (Ato 2 — Conexão) ===== */

`Hoje eu não pensei em grandes promessas.
Pensei no detalhe.
No jeito que você fica quando esquece do mundo.

Eu comecei a te amar também por essas coisas pequenas.
Sem barulho.
Só presença.

E eu gosto de estar perto.`,

`Tem um tipo de paz que só existe
quando eu sei que você tá do outro lado.

Não é sobre falar o tempo todo.
É sobre o silêncio não assustar.

É só eu…
ficando.`,

`Eu tenho reparado no “entre”.
Entre uma frase e outra.
Entre uma risada e outra.

É ali que eu vejo você de verdade.
E é ali que eu vou ficando mais manso.`,

`Eu gosto do seu cotidiano.
Do jeito simples.
De como você existe sem tentar.

Sem perceber,
eu comecei a querer os dias comuns também.
Os dias nossos.`,

`Eu não quero te arrancar do mundo.
Eu só quero caber nele com você.

Na pressa.
Na volta pra casa.
No meio do nada.

Eu quero ser presença,
não urgência.`,

`Às vezes eu olho pra você
e dá vontade de agradecer
por coisas que você nem fez “pra mim”.

Só por ser você.
Por existir assim.

Você me deixa mais calmo
sem perceber.`,

`Eu treino na minha cabeça
como eu vou te olhar quando te ver.

Como se desse pra preparar o peito.
Como se eu tivesse controle.

Aí você aparece
e eu esqueço tudo.`,

`Amar você não é só sentir.
É escolher o cuidado antes da resposta.
É respirar antes do orgulho.

É decidir
não perder o que é importante
por pouca coisa.`,

`Eu gosto de você
do jeito que se gosta de casa.

Sem espetáculo.
Sem pressa.

Só vontade de voltar.`,

`Eu fui ficando…
e quando eu percebi,
já não era intensidade.

Era verdade.`,

`Eu não sou simples o tempo todo.
Tenho minhas inseguranças quietas.

Mas com você
eu sinto que posso ser honesto
sem virar fraqueza.`,

`Às vezes eu tenho medo
de não ser suficiente.

Mas amor não é perfeição.
É constância.

E eu tenho isso.`,

`Eu penso demais.
Crio cenários que não existem.

Mas quando você me olha
como quem diz “fica”,
eu respiro.`,

`Eu sinto muito.
Mais do que eu demonstro.

E ainda assim,
eu fico.`,

`Eu tô aprendendo
a não te amar com a mão fechada.

Amar é abrir espaço.
É confiar.

E eu quero fazer isso direito.`,

`O que eu tenho de mais íntimo
não é meu corpo.

É meu pensamento quando ninguém vê.
E eu quero dividir isso com você.`,

`Se eu errar o tom,
me chama de volta.

Eu volto.
Eu aprendo.

Eu não quero te amar pela metade.`,

`Tem uma versão minha
que aparece quando eu amo.

Mais atento.
Mais paciente.
Mais humano.

Eu gosto desse cara.
E é você que chama ele.`,

`Você importa
num nível que me assusta um pouco.

Mas eu prefiro esse susto
do que a vida sem você.`,

`Eu não quero prometer mundo.
Quero prometer presença.

Quando for fácil.
Quando for difícil.

Eu sei ficar.`,

`Não é sobre intensidade.
É sobre clareza.

Eu não quero te viver como incêndio.
Eu quero te viver como luz.`,

`Pensar no futuro com você
não me assusta.

Me acalma.`,

`Com você
eu não preciso performar.

Eu posso ser simples.

E isso muda alguém.`,

`Eu já confundi amor com pressa.
Com urgência.
Com falta.

Mas com você foi diferente.
Foi ficando claro.
Sem alarde.

Eu sei que é você.`,

`Depois da certeza,
o coração não acelera.

Ele assenta.`,

`Você melhora meus dias
sem tentar melhorá-los.

Você só entra.
E o mundo fica menos pesado.`,

`Eu penso em você
como quem pensa em caminho.
Em direção.
Em retorno.`,

`Com você,
o comum é bom.

E isso é raro.`,

`Eu não preciso de grandes cenas.
Eu preciso de continuidade.

E você…
é constância.`,

`Coisas grandes
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
inesquecível.`,

/* ===== 61–75 (Ato 2 — Clareza emocional) ===== */

`Hoje eu entendi que amar você
não é intensidade descontrolada.

É lucidez.

É saber exatamente o que eu sinto
e ainda assim escolher ficar.

Sem dúvida.
Sem fuga.`,

`Eu já confundi amor com medo de perder.
Com urgência.
Com necessidade.

Mas o que eu sinto por você
é tranquilo demais
pra ser desespero.

É escolha consciente.`,

`Você não me completa.

Você me expande.

Eu continuo inteiro sozinho.
Mas com você
eu sou maior.`,

`Eu gosto da forma como a gente conversa
sem precisar se defender.

Como se o mundo pudesse ser difícil,
mas aqui dentro
não fosse.`,

`Eu não quero te prender.

Quero que você fique
porque quer.

E toda vez que você fica,
eu sinto que o amor é ainda mais real.`,

`Hoje eu pensei:

se um dia tudo der errado,
eu ainda vou ser grato.

Porque viver você
já valeu a coragem.`,

`Você já percebeu
que a gente quase nunca grita?

Que quando algo dói
a gente tenta entender
antes de ferir?

Isso é raro.
Isso é cuidado.`,

`Eu não preciso que você seja perfeita.

Preciso que seja sincera.

E você é.
Mesmo quando é difícil.`,

`Eu te amo nos dias bons.
Mas gosto ainda mais
de como a gente atravessa os ruins.

Ali eu vejo
quem nós somos de verdade.`,

`Se amar é enxergar falhas
e ainda assim permanecer,

então eu te amo
com os olhos bem abertos.`,

`Você me ensina
que maturidade não é frieza.

É sentir tudo
sem deixar que o orgulho decida.`,

`Eu não tenho mais medo
de dizer que preciso de você.

Não como dependência.
Mas como parceria.`,

`Às vezes eu paro
e só observo você existindo.

E penso:
“Que sorte a minha
de dividir o mundo com ela.”`,

`O amor deixou de ser incêndio.

Virou lareira.

Não queima descontrolado.
Mas aquece constante.`,

`Se alguém me perguntar
o que mudou em mim,

eu vou responder:

aprendi a amar
sem me abandonar.

E isso
foi você quem me ensinou.`,

/* ===== 76–89 (Ato 2 — Estabilidade íntima) ===== */

`Eu gosto do jeito que a gente já se entende
antes mesmo das palavras se organizarem.

Quando você suspira diferente,
eu percebo.
Quando eu fico quieto demais,
você percebe.

Não é invasão.
É atenção construída.

É o tipo de proximidade
que nasce da convivência
e cresce da escolha diária.

Nem tudo precisa ser resolvido na hora.
Às vezes só precisa de presença.
De ficar.
De não ir embora quando fica difícil.

E a gente tem ficado.`,

`Tem dias que a gente não fala sobre amor.

Não tem declaração longa,
não tem intensidade dramática.

Tem rotina.

Tem você mandando mensagem perguntando se eu almocei.
Tem eu lembrando de algo que você comentou dias atrás.
Tem cuidado escondido nas pequenas coisas.

E eu descobri que talvez seja isso
o amor amadurecendo:

ele não precisa mais provar que existe.
Ele só existe.

Silencioso.
Constante.
Presente.`,

`Eu já não sinto aquela ansiedade
de ter que ser perfeito para você.

Nem de competir com o mundo.

Eu posso falhar.
Posso errar o tom.
Posso estar cansado.

E você ainda está aqui.

Essa liberdade
é uma das formas mais puras de intimidade.

Não preciso performar.
Posso ser.

E você escolhe ficar mesmo assim.`,

`O nosso amor não grita.

Ele respira.

Tem ritmo próprio.
Tem pausa.
Tem espaço.

Não é incêndio descontrolado.
É chama que sabe queimar sem destruir.

Eu gosto disso.
Gosto da calma que veio depois da intensidade.

Porque agora não é impulso.
É decisão.`,

`Você virou a pessoa
que eu procuro automaticamente
quando algo acontece.

Boa notícia? É você.
Dia ruim? É você.
Conquista pequena? É você.

Não por dependência.
Mas por pertencimento.

Dividir a vida com alguém
é um dos gestos mais íntimos que existem.

E eu divido com você
porque confio.`,

`A gente não deixa as coisas acumularem.

A gente conversa.
Às vezes com medo.
Às vezes com insegurança.

Mas conversa.

Isso mudou tudo.

Porque amor não é ausência de conflito.
É a coragem de atravessá-lo juntos.

E toda vez que a gente resolve algo
sem se machucar de propósito,
eu sinto que estamos construindo algo raro.`,

`Intimidade não é só toque.

É saber o que te irrita
e evitar.

É conhecer seus medos
e não usar contra você.

É guardar suas vulnerabilidades
como se fossem minhas.

Existe uma nudez
que não tem nada a ver com corpo.

E você já me viu
nesse nível.

E ficou.`,

`Se um dia o mundo ficar pesado demais,
eu sei exatamente onde descansar.

No seu abraço demorado.
No seu silêncio acolhedor.
Na sua forma simples de dizer
“vai ficar tudo bem”.

Talvez não fique.
Mas quando você diz,
eu acredito.

Porque estabilidade não é promessa de facilidade.
É promessa de companhia.`,

`Eu já não tenho medo
de imaginar você no meu futuro.

Não como fantasia distante.
Mas como possibilidade real.

Não porque eu controle o amanhã.
Mas porque eu confio no que estamos construindo hoje.

E se o futuro for consequência do presente,
então ele tem boas chances de ser bonito.`,

`Você não me salva do mundo.

Você me fortalece para enfrentá-lo.

Existe uma diferença enorme nisso.

Eu não me sinto menor ao seu lado.
Eu me sinto mais firme.

Como se amar você
tivesse me ensinado
a ficar de pé com mais segurança.`,

`O que a gente tem
não é mágico.

É intencional.

É construído em conversa difícil.
Em pedido de desculpa.
Em ajuste fino.

E isso é ainda mais bonito
do que qualquer história perfeita.

Porque o que é perfeito não dura.
Mas o que é construído
se sustenta.`,

`Eu amo o jeito que você me olha
quando acha que eu não estou vendo.

Tem cuidado ali.
Tem escolha ali.
Tem algo que vai além da paixão.

E toda vez que eu percebo esse olhar,
eu faço uma escolha silenciosa de volta:

continuar.`,

`Estabilidade não é monotonia.

É liberdade sem medo.

É poder sair com amigos
e ainda assim querer voltar para você.

É não vigiar.
É confiar.

É saber que o amor não está em risco
a cada ausência pequena.

Isso é maturidade.
Isso é paz.`,

`Hoje eu pensei que,
se tudo continuar exatamente assim,
já está bom.

Sem exageros.
Sem drama.
Sem necessidade de espetáculo.

Só dois adultos
escolhendo ficar
um ao lado do outro.

E talvez essa seja
a forma mais bonita de amar.`
];

// ==============================
// Completa 365 (placeholders)
// ==============================
(function preencherAte365(){
  for(let i = poemas.length; i < 365; i++){
    poemas[i] =
`Dia ${i + 1}

(Em branco por enquanto)

Se você está vendo isso, é porque esse poema ainda não foi escrito no poemas.js.`;
  }
})();

// ==============================
// ✅ PATCH anti-dor-de-cabeça:
// se por qualquer motivo o placeholder apareceu cedo,
// eu garanto os dias 88 e 89 com o texto real.
// ==============================
(function patchDiasCriticos(){
  function isPlaceholder(text){
    return String(text || "").includes("(Em branco por enquanto)");
  }

  // Dia 88 = index 87
  if(isPlaceholder(poemas[87])){
    poemas[87] =
`Estabilidade não é monotonia.

É liberdade sem medo.

É poder sair com amigos
e ainda assim querer voltar para você.

É não vigiar.
É confiar.

É saber que o amor não está em risco
a cada ausência pequena.

Isso é maturidade.
Isso é paz.`;
  }

  // Dia 89 = index 88
  if(isPlaceholder(poemas[88])){
    poemas[88] =
`Hoje eu pensei que,
se tudo continuar exatamente assim,
já está bom.

Sem exageros.
Sem drama.
Sem necessidade de espetáculo.

Só dois adultos
escolhendo ficar
um ao lado do outro.

E talvez essa seja
a forma mais bonita de amar.`;
  }
})();

// ==============================
// Funções usadas pelo index.html
// ==============================

function isMemoryDay(dia){
  return dia > 0 && dia % MEMORY_INTERVAL === 0 && dia !== FINAL_LETTER_DAY;
}

function isFinalLetterDay(dia){
  return dia === FINAL_LETTER_DAY;
}

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
