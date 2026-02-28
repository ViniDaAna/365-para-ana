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
  90: `Foi um dia que eu não queria perder — e quase perdi por orgulho.

Não foi uma “grande briga”.
Foi uma daquelas que machucam porque parecem pequenas,
mas pegam bem no lugar onde a gente é mais frágil.

Eu lembro do depois.
Do silêncio.
De eu tentando agir normal,
mas por dentro já imaginando você cansando de mim.

Eu fiquei com vergonha de admitir
que o meu medo não era sobre a discussão.
Era sobre eu me sentir trocável.

Eu me odeio um pouco quando eu viro esse cara:
o cara que se defende atacando,
o cara que faz ironia quando tá doendo,
o cara que prefere parecer forte do que ser honesto.

E aí a gente sentou.

Sem plateia.
Sem gritaria.
Sem “quem tá certo”.

Você falou do que sentiu.
E eu percebi o tamanho do estrago
que eu consigo fazer quando eu tô com medo.

Eu queria pedir desculpa e, ao mesmo tempo, queria justificar.
E eu tive que escolher.

Escolhi falar a verdade.

Falei que eu tenho medo de não ser suficiente.
Falei que eu tenho medo de você cansar.
Falei que eu tenho medo de eu estragar o que eu mais amo
só por não saber lidar com a minha cabeça.

Eu não lembro de você me “passando pano”.
Eu lembro de você me olhando sério…

e ficando.

Ficando do jeito certo:
me chamando pra perto,
mas sem aceitar o que machuca.

Foi aí que eu entendi o que é conexão de verdade:
não é só carinho.
É coragem.

Coragem de conversar sem arma.
De ouvir sem escudo.
De pedir desculpa sem performance.
De recomeçar sem fingir.

Naquele dia, eu não saí perfeito.
Mas eu saí mais honesto.

E eu decidi uma coisa:
eu não quero te amar do jeito que eu aprendi no medo.
Eu quero te amar do jeito que a gente constrói na conversa.`,
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
// SEUS POEMAS (1–90)
// ==============================

const poemas = [

/* 1–30 (Ato 1 — Escolha) */

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

/* 31–60 (Ato 2 — Conexão) */

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

/* 61–90 (Ato 2 — Conexão) — NOVOS */

`Eu tô aprendendo um carinho diferente.

Não é aquele carinho que aperta.
É o que encosta e fica.

O que olha e entende
sem precisar cobrar prova.

Eu gosto do jeito que você me deixa menos armado.`,

`Eu percebi que eu te amo
até nos intervalos.

No “tô chegando”.
No “chegou bem?”.
No “me manda quando chegar em casa”.

Amar você mora nessas pequenas confirmações.`,

`Tem hora que eu tenho vontade
de te contar tudo.

Até as partes feias.
Até os pensamentos que eu escondo
porque acho que vão te cansar.

E eu tô começando a confiar
que você não foge de mim.`,

`Eu queria te fazer leve.

Não como quem resolve tua vida.
Mas como quem não pesa.

Como quem soma paz.
Como quem não vira tempestade
quando o dia já tá difícil.`,

`Às vezes eu te observo
e penso: “é aqui”.

Não é euforia.
É encaixe.

É o peito assentando
como se encontrasse um lugar antigo.`,

`Eu tenho medo de errar
no jeito de falar.

Porque eu sei que palavra
marca.

E eu não quero te marcar com dor
só porque eu não soube respirar antes.`,

`Eu tô treinando um negócio simples:
te ouvir até o fim.

Sem interromper.
Sem explicar demais.
Sem tentar ganhar.

Só entender.

Parece pouco,
mas muda tudo.`,

`Eu gosto quando a gente ri
de coisa boba.

Porque ali não tem performance.
Não tem defesa.

É só a gente
sendo casa um pro outro
por alguns segundos.`,

`Eu comecei a achar bonito
quando você me chama pra realidade.

Quando eu tô viajando em medo,
você puxa a minha mão
e me lembra do agora.

Você me dá chão
sem me prender.`,

`Tem dias que eu não sou bom.
Eu sou só cansado.

E você ainda assim fica perto.

Não pra passar pano.
Pra me lembrar
que amar também é atravessar o comum.`,

`Eu não quero ser intenso.
Quero ser confiável.

Quero ser o cara
que você não precisa adivinhar.

O cara que não some no conflito.
O cara que senta e conversa.`,

`Eu tô tentando te amar
sem te apertar.

Sem transformar insegurança em cobrança.
Sem fazer você pagar
pelas coisas que eu inventei na cabeça.

Isso é maturidade.
E eu tô tentando de verdade.`,

`Eu tenho um lado meu
que se assusta com a felicidade.

Como se não fosse durar.
Como se eu tivesse que me preparar pro pior.

Mas quando você me abraça,
meu corpo acredita antes da minha mente.`,

`Eu acho que eu sempre quis
um amor que fosse prova.

E você tá me ensinando
que amor também é calma.

Que não precisa doer pra ser real.

Que paz também é paixão.`,

`Eu gosto de conversar com você
quando o mundo tá barulhento.

Porque você não aumenta o barulho.
Você organiza.

Você me deixa menos confuso.`,

`Eu tenho vergonha
das minhas inseguranças.

Porque parecem pequenas.
Porque parecem infantis.

Mas eu tô aprendendo
que esconder é pior.

Então eu vou tentando falar.`,

`Eu quero ser digno
do jeito que você confia.

Eu sei que confiança é coisa séria.
E eu não quero quebrar
por falta de cuidado.

Eu quero cuidar do que você me entrega.`,

`Eu não sei explicar direito,
mas tem um “nós”
que aparece quando a gente tá bem.

Não é só casal.
É parceria.

É eu olhando pro mundo
e sabendo que tenho alguém do meu lado.`,

`Tem vezes que eu me pego pensando:
“como é que eu cheguei aqui?”

E eu lembro:
a gente chegou.

No detalhe.
Na conversa.
No pedido de desculpa.
No recomeço pequeno.

A gente foi ficando.`,

`Eu queria te prometer
que eu nunca vou errar.

Mas seria mentira.

Então eu prefiro prometer isso:
eu vou voltar pra conversa.

Eu vou pedir desculpa.
Eu vou aprender.
Eu vou ficar.`,

`Eu tô aprendendo a diferenciar
medo de intuição.

O medo grita.
A intuição fala baixo.

E a minha intuição, quando é sobre você,
sempre diz a mesma coisa:

fica.`,

`Eu tenho uma parte minha
que ainda acha que vai ser trocada.

Que, se eu vacilar,
alguém melhor aparece e eu viro passado.

Eu odeio esse pensamento.
Mas ele existe.

E eu tô tentando não deixar ele mandar em mim.`,

`Hoje eu pensei
que te amar é também te respeitar
quando eu tô inseguro.

É não te punir
por você ser livre.

É não transformar amor em vigilância.

É confiar.`,

`Tem um jeito seu
de resolver as coisas
sem humilhar.

E isso me desmonta.

Porque eu cresci achando
que conflito era guerra.

E com você,
conflito vira conversa.`,

`Eu tenho medo de te magoar
quando eu tô mal.

Porque às vezes eu fico ríspido
pra não parecer frágil.

Mas a verdade é que eu só tô com medo.

E eu não quero que você carregue isso.`,

`Eu fico pensando
que talvez eu nunca aprendi
a pedir ajuda.

Eu sempre quis dar conta.

Mas amar você
tá me ensinando
que eu posso abaixar a guarda
sem perder valor.`,

`Tem dia que eu me sinto pequeno.
E eu começo a me defender antes de ser atacado.

Só que com você
não tem ataque.

Tem cuidado.

E eu tô aprendendo a aceitar cuidado
sem achar que é dívida.`,

`Eu não quero que a gente vire
duas pessoas se ferindo
pra ver quem aguenta mais.

Eu quero que a gente vire
duas pessoas conversando
pra ver quem cuida melhor.

Eu quero esse tipo de amor.`,

`Hoje eu pensei:
conexão é quando eu posso dizer
“eu tô com medo”
e você não me olha com desprezo.

Você me olha com verdade.

E eu fico.
E eu volto.
E eu aprendo.`,

`Eu não tenho orgulho
de como eu sou quando eu tô inseguro.

Eu viro espinho.
Eu viro defesa.
Eu viro alguém que eu nem gosto.

Mas eu quero te dizer:

eu tô tentando.

E quando a gente conversa,
eu volto a ser eu.

O eu que te ama direito.`,

/* Dia 90 (poema) */

`A gente já se entendeu por mensagem.
Já se entendeu por abraço.
Mas tem um tipo de entendimento
que só existe quando a gente senta e fala.

Eu lembro de uma conversa nossa
que começou difícil.

Eu fui com o peito fechado.
Você foi com o olhar sério.
E eu achei que ia dar errado.

Porque eu tava com medo.

Medo de eu não ser suficiente.
Medo de você cansar de mim.
Medo de eu ser só mais um
que você um dia vai superar.

E eu fiz o que eu sempre faço
quando eu tenho medo:
eu endureci.

Só que você não entrou na guerra.

Você puxou a verdade.

E eu, pela primeira vez em muito tempo,
não consegui fingir.

Eu falei que eu me sinto trocável.
Falei que eu me sinto pequeno.
Falei que eu tenho vergonha
do quanto eu preciso de confirmação às vezes.

E você ficou.

Não “passou pano”.
Ficou do jeito certo:
me chamando pra perto,
mas sem aceitar o que machuca.

Foi aí que eu entendi:

conexão é coragem.

Coragem de conversar sem arma.
Coragem de pedir desculpa sem teatro.
Coragem de recomeçar sem orgulho.

E eu te juro:
eu prefiro mil conversas difíceis
do que um silêncio que afasta.

Porque eu amo você.

E eu não quero te perder
por falta de maturidade.`

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

// ✅ FIX GARANTIDO: força o poema do dia 60 no índice certo (poemas[59])
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

// ==============================
// ATO 2 — Anotações (palavra sublinhada + pensamento oculto)
// 31–90: pelo menos 1 marca por dia
// ==============================
const ATO2_ANOTACOES = {
  31: [{ target: "detalhe", thought: "Eu te amo no pequeno. No que ninguém aplaude." }],
  32: [{ target: "silêncio", thought: "O teu silêncio comigo não é distância. É lugar." }],
  33: [{ target: "entre", thought: "O que eu sinto mora justamente no ‘entre’." }],
  34: [{ target: "cotidiano", thought: "Eu queria morar nos teus dias comuns." }],
  35: [{ target: "presença", thought: "Eu não quero ser urgência. Quero ser presença." }],
  36: [{ target: "calmo", thought: "Quando você existe perto, eu viro menos caos." }],
  37: [{ target: "aparece", thought: "Você aparece e eu perco o controle — e eu gosto." }],
  38: [{ target: "respirar", thought: "Eu respiro por nós antes de responder." }],
  39: [{ target: "casa", thought: "Eu gosto de você no formato ‘casa’." }],
  40: [{ target: "verdade", thought: "Eu percebi: não era fogo. Era verdade." }],
  41: [{ target: "honesto", thought: "Com você, honestidade não vira fraqueza." }],
  42: [{ target: "constância", thought: "Eu não sou perfeito. Eu sou constante." }],
  43: [{ target: "respiro", thought: "Quando você diz ‘fica’ sem dizer, eu respiro." }],
  44: [{ target: "fico", thought: "Eu sinto muito… e eu fico mesmo assim." }],
  45: [{ target: "confiar", thought: "Eu tô aprendendo a amar sem apertar." }],
  46: [{ target: "pensamento", thought: "Eu quero dividir o que eu escondo." }],
  47: [{ target: "volto", thought: "Se eu errar, eu volto. Eu prefiro voltar." }],
  48: [{ target: "humano", thought: "Você chama em mim um cara que eu gosto." }],
  49: [{ target: "assusta", thought: "Você importa num nível que me dá medo — e eu fico." }],
  50: [{ target: "presença", thought: "Eu não prometo mundo. Eu prometo estar." }],
  51: [{ target: "luz", thought: "Eu quero te viver como luz, não incêndio." }],
  52: [{ target: "acalma", thought: "Pensar em nós me acalma de verdade." }],
  53: [{ target: "simples", thought: "Com você eu não preciso provar nada." }],
  54: [{ target: "claro", thought: "Foi ficando claro. Sem alarde." }],
  55: [{ target: "assenta", thought: "Depois da certeza, o peito assenta." }],
  56: [{ target: "entra", thought: "Você entra e o mundo fica menos pesado." }],
  57: [{ target: "retorno", thought: "Você virou direção e retorno." }],
  58: [{ target: "raro", thought: "O comum com você é raro." }],
  59: [{ target: "continuidade", thought: "Eu não preciso de cena. Eu preciso de continuidade." }],
  60: [{ target: "inesquecível", thought: "Eu não lembro do filme… eu lembro de você." }],

  61: [{ target: "armado", thought: "Com você eu não preciso ficar pronto pra briga." }],
  62: [{ target: "confirmações", thought: "Eu te amo no ‘chegou bem?’." }],
  63: [{ target: "confiar", thought: "Eu tô testando: falar sem medo de ser demais." }],
  64: [{ target: "leve", thought: "Eu queria ser alívio, não peso." }],
  65: [{ target: "encaixe", thought: "Não é euforia. É encaixe." }],
  66: [{ target: "respirar", thought: "Eu não quero te ferir por falta de fôlego." }],
  67: [{ target: "ouvir", thought: "Eu tô tentando te ouvir até o fim." }],
  68: [{ target: "performance", thought: "Sem defesa, eu viro verdade." }],
  69: [{ target: "agora", thought: "Você me traz de volta pro agora." }],
  70: [{ target: "cansado", thought: "Hoje eu não brilho. Hoje eu só fico." }],
  71: [{ target: "confiável", thought: "Eu quero ser previsível no cuidado." }],
  72: [{ target: "cobrança", thought: "Eu não quero te amar apertando." }],
  73: [{ target: "mente", thought: "Meu corpo acredita antes da cabeça." }],
  74: [{ target: "calma", thought: "Paz também é paixão." }],
  75: [{ target: "organiza", thought: "Você organiza o meu barulho." }],
  76: [{ target: "esconder", thought: "Eu tô cansando de fingir que não sinto." }],
  77: [{ target: "confiança", thought: "Confiança é coisa séria. Eu não brinco com isso." }],
  78: [{ target: "parceria", thought: "Não é só amor. É nós." }],
  79: [{ target: "recomeço", thought: "A gente chega na conversa. Sempre." }],
  80: [{ target: "prometer", thought: "Eu prometo voltar — não ser perfeito." }],
  81: [{ target: "intuição", thought: "Minha intuição sempre diz: fica." }],
  82: [{ target: "trocada", thought: "Meu medo é antigo. Meu amor é maior." }],
  83: [{ target: "livre", thought: "Amar é não prender." }],
  84: [{ target: "guerra", thought: "Com você, briga vira conversa." }],
  85: [{ target: "ríspido", thought: "Às vezes eu viro duro porque tô frágil." }],
  86: [{ target: "ajuda", thought: "Eu tô aprendendo a não carregar tudo sozinho." }],
  87: [{ target: "dívida", thought: "Cuidado não é dívida. É amor." }],
  88: [{ target: "machucar", thought: "Eu quero ser solução, não ferida." }],
  89: [{ target: "coragem", thought: "Conexão é coragem — de ficar na conversa." }],
  90: [{ target: "maturidade", thought: "Eu prefiro conversa difícil do que silêncio que afasta." }],
};

function getAto2Anotacoes(dia){
  return ATO2_ANOTACOES[dia] || [];
}

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
