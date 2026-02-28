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
com palavra, não com guerra.`
  ,
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
// ATO 2 — “PENSAMENTOS OCULTOS”
// Cada entrada: { target: "palavra", thought: "pensamento" }
// A palavra precisa existir no poema do dia (case-sensitive).
// ==============================
const ATO2_ANNOTATIONS = {
  61: [
    { target: "calma", thought: "Eu fico tranquilo porque é você — e isso muda tudo em mim." },
    { target: "perto", thought: "Eu queria te encostar sem pedir licença — mas eu respeito teu tempo." }
  ],
  62: [
    { target: "silêncio", thought: "O silêncio contigo não é vazio. É segurança." }
  ],
  63: [
    { target: "entre", thought: "É ali que eu te conheço de verdade: no que você não anuncia." }
  ],
  64: [
    { target: "comum", thought: "O cotidiano contigo me dá vontade de futuro." }
  ],
  65: [
    { target: "caber", thought: "Eu não quero te sufocar. Eu quero ser espaço bom." }
  ],
  66: [
    { target: "grato", thought: "Eu agradeço coisas pequenas porque eu sei o quanto elas viram ‘nós’." }
  ],
  67: [
    { target: "peito", thought: "Eu ensaio firmeza, mas com você eu tremo bonito." }
  ],
  68: [
    { target: "orgulho", thought: "Meu impulso é me defender. Mas eu tô aprendendo a te proteger." }
  ],
  69: [
    { target: "casa", thought: "Casa é onde eu não preciso provar nada." }
  ],
  70: [
    { target: "verdade", thought: "Eu não queria admitir isso tão cedo… mas eu já senti." }
  ],
  71: [
    { target: "honesto", thought: "Eu tenho medo de ser pouco, mas contigo eu tento ser inteiro." }
  ],
  72: [
    { target: "suficiente", thought: "Minha insegurança é antiga. Você não merece pagar por ela." }
  ],
  73: [
    { target: "cenários", thought: "Eu crio tragédias na cabeça pra não ser pego de surpresa." }
  ],
  74: [
    { target: "ficar", thought: "Eu quero aprender a confiar sem apertar." }
  ],
  75: [
    { target: "pensamento", thought: "Eu te deixo entrar onde ninguém entra. Isso é amor." }
  ],
  76: [
    { target: "volto", thought: "Se eu errar o tom… eu volto. Eu não te largo no meio." }
  ],
  77: [
    { target: "inteiro", thought: "Eu não quero te amar com pedaços. Quero te amar por escolha." }
  ],
  78: [
    { target: "medo", thought: "Eu tenho medo de perder e viro duro. Eu tô aprendendo a não virar." }
  ],
  79: [
    { target: "presença", thought: "Eu não sei prometer mundo. Mas eu sei estar." }
  ],
  80: [
    { target: "luz", thought: "Eu não quero te queimar. Eu quero te iluminar e te aquecer." }
  ],
  81: [
    { target: "acalma", thought: "O futuro contigo não me aperta. Ele me encaixa." }
  ],
  82: [
    { target: "simples", thought: "Eu gosto quando eu não preciso ser ‘bom’. Só real." }
  ],
  83: [
    { target: "claro", thought: "Foi ficando claro porque você não confunde meu coração." }
  ],
  84: [
    { target: "assenta", thought: "Depois da certeza, meu coração não corre. Ele pousa." }
  ],
  85: [
    { target: "entra", thought: "Você entra e arruma o quarto dentro de mim sem falar nada." }
  ],
  86: [
    { target: "caminho", thought: "Eu penso em você como direção: eu sempre volto." }
  ],
  87: [
    { target: "raro", thought: "O comum virar bom é raridade. E eu sei disso." }
  ],
  88: [
    { target: "continuidade", thought: "Eu não quero pico. Eu quero linha reta junto." }
  ],
  89: [
    { target: "cansaço", thought: "Eu fico duro quando tô cansado. Mas eu não quero te ferir com isso." },
    { target: "conversa", thought: "Eu te amo mais quando a gente se escolhe no diálogo." }
  ],
  90: [
    { target: "coragem", thought: "Conexão é coragem: falar sem arma, ouvir sem escudo." },
    { target: "cuidar", thought: "Eu aprendi que amar também é saber conversar." }
  ]
};

function getAto2Anotacoes(dia){
  return ATO2_ANNOTATIONS[dia] || [];
}

// ==============================
// SEUS POEMAS (1–90)
// ==============================

const poemas = [

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

/* ===== 61–90 (Ato 2 — Conexão: aprofundando) ===== */

`Eu gosto quando você fala baixo
e mesmo assim me atravessa.

Porque eu percebo:
não é volume.
É intenção.

E a tua intenção comigo
sempre teve uma calma
que me desarma.

Eu fico perto
sem precisar provar nada.`,

`Tem dias que a gente não tem assunto.
E ainda assim dá certo.

Eu encosto do teu lado
e o silêncio vira lugar.
Vira pausa boa.

Eu sempre achei que amor precisava de prova.
Mas o teu silêncio
me prova presença.`,

`Eu comecei a entender o “entre”.

Entre eu e você
tem um espaço que não é distância.
É cuidado.

É a gente tentando acertar o tom.
É a gente se escolhendo
sem barulho.`,

`O comum contigo
não me dá tédio.
Me dá paz.

Me dá vontade de repetir.
De fazer de novo.
De construir sem pressa.

Porque o comum contigo
parece futuro.`,

`Eu não quero te puxar.
Eu não quero te prender.

Eu só quero caber
no teu mundo
sem virar peso.

Eu quero ser presença leve.
Do tipo que soma
até quando não diz nada.`,

`Hoje eu me peguei grato.
Grato por você existir assim.

Sem teatro.
Sem performance.

Você entra e muda o clima.
E eu fico pensando
como eu demorei tanto
pra entender isso.`,

`Eu ensaio força.
Eu ensaio tranquilidade.

Mas quando você chega,
o peito entrega.

Eu fico com vontade de te contar tudo.
E ao mesmo tempo
com medo de te assustar com a profundidade.

Aí eu respiro.
E fico.`,

`Eu tô aprendendo a escolher o cuidado
antes do impulso.

Porque meu orgulho
tem uma voz alta.
E eu não quero que ele mande na nossa história.

Eu prefiro te proteger
do que ter razão.`,

`Você tem um jeito de ser casa.

Não pelo lugar.
Pelo sentimento.

Pelo jeito que meu corpo descansa
quando você tá perto.

E eu acho isso lindo.
Porque eu nem sabia que eu precisava.`,

`Eu não falei pra ninguém.
Mas eu senti uma verdade quieta.

Eu não queria “ver no que dá”.
Eu queria dar certo.

E quando eu penso em dar certo,
eu penso em você.`,

`Com você eu consigo ser honesto
sem virar fraco.

Eu digo “tô mal”
e não sinto que vou ser diminuído.

Você segura sem esmagar.
E isso é raro.`,

`Às vezes eu tenho medo de não ser suficiente.
E esse medo tenta me endurecer.

Mas eu tô aprendendo:
amor não é estar sempre pronto.
É estar disposto.

E eu tô disposto por nós.`,

`Eu crio cenários.
Eu crio finais.

Pra tentar me proteger.
Pra não doer de surpresa.

Só que aí você me olha
e eu percebo:
eu tô lutando contra coisas que nem existem.

E isso cansa.`,

`Eu tô aprendendo a ficar
sem apertar.

A confiar sem vigiar.
A amar sem controle.

É difícil.
Mas é o tipo de difícil
que constrói.`,

`Você virou meu pensamento.
Não aquele pensamento invasivo.
Aquele pensamento bom.

Que aparece no meio do dia e diz:
“lembra do que importa.”

E você… importa.`,

`Se eu errar o tom,
me chama de volta.

Eu volto.
Porque eu não quero te amar com orgulho.
Eu quero te amar com maturidade.

Eu ainda tô aprendendo, mas eu volto.`,

`Eu quero te amar inteiro.
Sem partes escondidas.
Sem meia verdade.

Não pra te jogar peso.
Mas pra não te amar pela superfície.

Eu quero profundidade com respeito.`,

`Tem um medo em mim
que eu escondo com ironia.

Medo de perder.
Medo de ser pouco.
Medo de ser trocável.

E eu não quero que esse medo
vire arma.

Eu quero que ele vire conversa.`,

`Eu não sei prometer o mundo.
Mas eu sei prometer presença.

Eu sei te ouvir.
Eu sei sentar do teu lado
e tentar de novo.

Eu sei ficar quando dá vontade de fugir.`,

`Eu não quero ser incêndio.
Eu não quero ser explosão.

Eu quero ser luz.
Daquelas que não gritam.
Só ficam.

E ficam aquecendo o que importa.`,

`Pensar no futuro contigo
não me aperta.
Me acalma.

Porque você não parece ameaça.
Você parece caminho bom.

E eu gosto de caminhar com você.`,

`Com você eu sou simples.

E não é “pouco”.
É raro.

Porque ser simples é descansar.
E eu descanso quando você tá perto.`,

`Foi ficando claro.
Não por um evento grande.

Mas por repetição.
Por detalhe.
Por presença.

Você não me confunde.
Você me esclarece.`,

`Depois da certeza,
eu não corro.

Eu assento.
Eu organizo a casa dentro de mim.
Eu fico mais homem.

E eu acho que isso é amor.`,

`Você entra.
E o dia muda.

Sem você tentar mudar.
Sem você fazer nada especial.

Você só entra.
E eu percebo o quanto eu tava pesado
antes disso.`,

`Eu penso em você como caminho.
Como retorno.
Como direção.

É estranho dizer isso,
mas é verdadeiro:

mesmo quando eu tô perdido,
eu sei onde é você.`,

`O comum virar bom
é raro.

E comigo virou.

Porque você tem um jeito de transformar rotina
em abraço.

E eu quero mais disso.`,

`Eu não quero ápice.
Eu não quero show.

Eu quero continuidade.
E a tua presença
tem uma firmeza mansa.

Eu confio nisso.`,

`Teve um dia que o cansaço falou mais alto.
E a gente se estranhou.

Eu percebi o quanto eu posso ser duro
quando eu tenho medo.

Mas eu não quero ser esse cara contigo.

Eu quero ser o cara que conversa.
Que volta.
Que resolve.
Que cuida.`,

`Conexão não é sempre fácil.
É real.

É olhar no olho
e dizer:
“eu não tô bem.”
“eu tô com medo.”
“eu não quero te perder.”

E é ter coragem de ouvir o outro
sem se defender.

Eu aprendi isso com você.
E eu quero cuidar do que a gente tem.`

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
