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
  90: `Eu achei que ia te perder naquele dia.

Não porque você disse que ia embora.
Mas porque eu me vi sendo exatamente o tipo de pessoa
que estraga o que é bom.

A gente brigou.
E não foi feio.
Foi pior.
Foi frio.

Eu falei coisas tentando me defender.
Você ficou quieta tentando não piorar.
E, no fundo, eu sabia:
eu tava mais preocupado em estar certo
do que em cuidar da gente.

Quando eu fiquei sozinho depois,
veio aquela sensação que eu odeio:
a de que eu faço tudo errado.
De que uma hora você vai cansar.
De que talvez eu não seja suficiente pra sustentar algo bonito.

Eu quase deixei o orgulho ganhar.
Quase deixei o silêncio virar distância.

Mas você sentou pra conversar.

E quando você começou a falar,
eu vi que você não tava ali pra me atacar.
Você tava ali pra salvar o que era nosso.

E isso quebrou alguma coisa em mim.

Eu senti medo.
Medo real.
Medo de perder você por imaturidade.
Medo de repetir erros.
Medo de ser o problema.

E pela primeira vez,
eu falei sem tentar parecer forte.

Eu admiti que eu fico inseguro.
Que às vezes eu me defendo antes de entender.
Que eu tenho medo de não ser suficiente
e acabo agindo como se não precisasse de ninguém.

Eu achei que você ia se afastar quando eu mostrasse isso.

Você não se afastou.

Você segurou minha mão.

E ali eu entendi:
conexão não é quando a gente não briga.
É quando a gente se vê no pior momento
e ainda decide ficar.

Naquele dia,
eu não senti que a gente quase acabou.

Eu senti que você viu quem eu realmente sou.
E, mesmo assim,
escolheu continuar.

E eu escolhi também.`,
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

/* ===== 61–90 (Ato 2 — Conexão) ===== */

`Eu gosto do jeito que você me puxa pro presente
sem fazer esforço.

Você fala uma coisa simples,
e de repente o dia fica mais leve.

Acho que amor é isso também:
alguém que te devolve pra vida
sem te cobrar espetáculo.`,

`Eu tenho vontade de te contar
o que eu penso quando ninguém vê.

Não pra te impressionar.
Pra te deixar entrar.

Porque no fundo,
a parte mais íntima de mim
é a que eu escondo com calma.`,

`Eu não quero te amar
como quem segura.

Quero te amar
como quem acolhe.

Sem medo de perder,
sem necessidade de controlar.

Só presença.
E confiança crescendo devagar.`,

`Às vezes eu fico quieto
porque eu tô aprendendo.

Aprendendo a não transformar tudo em defesa.
A não responder com orgulho.
A não estragar o que é bom por insegurança.

E você…
você é o motivo desse aprendizado.`,

`Eu gosto do seu nome na minha tela.
Gosto da sua risada do outro lado.
Gosto da sensação de “tá tudo bem”
só porque você existe.

Tem gente que vira barulho.
Você vira paz.`,

`Tem coisa que eu não sei explicar
sem parecer exagero.

Mas eu sinto.
E eu guardo.

E, aos poucos,
eu vou deixando você tocar nisso
sem pressa.

Porque eu quero que você veja
o que eu sou de verdade.`,

`Eu te amo de um jeito que não corre.
De um jeito que observa.
De um jeito que cuida.

E talvez seja isso que eu mais gosto:
a gente não precisa provar nada.

A gente só precisa continuar.`,

`Eu já tive medo de falar
e parecer fraco.

Mas com você,
ser honesto não me diminui.

Me aproxima.

E eu tô entendendo que proximidade
é um tipo de coragem.`,

`Se eu pudesse escolher uma cena pra repetir,
não seria viagem,
não seria festa,
não seria foto bonita.

Seria um momento comum,
qualquer,
em que você encosta em mim
e o mundo fica pequeno.`,

`Eu não quero ser perfeito.
Quero ser confiável.

Quero ser o cara
que não some quando pesa.
Que não machuca pra se proteger.
Que não usa silêncio como arma.

Eu quero te amar com maturidade.
Mesmo aprendendo.`,

`Você já percebeu
como a gente se entende sem falar tudo?

Tem um “entre nós”
que explica o que as palavras não alcançam.

E eu gosto disso.
Porque é real.`,

`Eu tô te amando
no detalhe.

No jeito que você fica séria.
No jeito que você se distrai.
No jeito que você volta pro assunto
como quem quer ficar.

Eu tenho vontade de te conhecer
por dentro.`,

`Às vezes eu me pego pensando:
“não estraga”.

E não é sobre você.
É sobre mim.

Sobre eu não deixar meus medos
mandarem no que eu faço.

Eu tô aprendendo a escolher você
sem sabotagem.`,

`Eu não preciso te prometer o mundo.
Eu preciso te dar constância.

Uma presença que não depende do humor.
Um cuidado que não some no cansaço.
Uma escolha que não se desfaz no primeiro conflito.

Eu quero ser simples assim:
eu fico.`,

`Eu tenho um lado meu
que só aparece quando eu confio.

E eu tô confiando em você.

Aos poucos, eu vou tirando a armadura.
E você nem pede.

Você só fica.
E isso muda tudo.`,

`Se eu te olhar por muito tempo,
eu começo a esquecer do resto.

Não porque o mundo some,
mas porque você vira prioridade
de um jeito quieto.

E prioridade quieta
é uma das coisas mais sinceras que existem.`,

`Eu gosto quando a gente conversa
sem medo de parecer demais.

Quando a gente fala do que incomoda
sem virar briga.
Quando a gente se escuta
sem precisar vencer.

Isso, pra mim,
é amor adulto.`,

`Tem dias que eu não tenho frase bonita.
Tenho só vontade de te ter perto.

E eu queria que você soubesse:
isso também é amor.

Não o amor que aparece.
O amor que sustenta.`,

`Eu tô aprendendo a te amar
sem pressa de resolver tudo.

Tem coisa que amadurece
no tempo certo.

E eu não quero apressar o que é bom.
Eu quero cuidar.
E esperar junto.`,

`Eu tenho saudade
mesmo quando a gente se viu ontem.

E eu acho isso engraçado,
porque não é falta.

É vontade.
É casa chamando.

É você vivendo em mim
com naturalidade.`,

`Eu gosto do seu silêncio
quando ele não é distância.

Quando ele é só descanso.
Quando ele é “tô aqui” sem barulho.

A gente tá ficando bom nisso:
estar junto sem se apertar.`,

`Eu queria que você se sentisse segura
do mesmo jeito que você me acalma.

Segura no meu olhar.
Segura no meu cuidado.
Segura na minha escolha.

Porque eu não tô brincando de amar.
Eu tô construindo.`,

`Se eu pudesse te dar uma coisa hoje,
não seria presente.
Seria espaço.

Espaço pra você respirar.
Pra você ser você.
Pra você não precisar se defender.

Eu quero ser descanso,
não peso.`,

`Tem um jeito seu
de me deixar menos duro.

Como se eu lembrasse
que eu não preciso lutar o tempo todo.

E eu acho que isso é intimidade:
alguém que te amolece
sem te quebrar.`,

`Eu ainda tenho inseguranças.
Eu só não quero que elas virem comando.

Eu quero que elas virem conversa.
Virem cuidado.
Virem maturidade.

E se eu falhar,
eu volto.
Eu aprendo.
Eu fico.`,

`Eu te amo
quando você tá bem.

E eu te amo
quando você tá cansada.

E eu te amo
quando o dia não ajuda.

Porque amor de verdade
não escolhe cenário.
Escolhe pessoa.`,

`Eu gosto de imaginar
a gente ficando velho
sem perder a delicadeza.

Com o mesmo jeito de olhar.
Com a mesma paz de voltar.
Com a mesma certeza discreta:
é você.

Eu não quero um amor urgente.
Eu quero um amor inteiro.`,

`Se eu te escrevo,
não é pra te prender.

É pra te lembrar
que existe um lugar em mim
onde você sempre cabe.

E, quando você quiser,
pode entrar sem bater.`,

`Às vezes eu sinto vontade
de pedir desculpa por dentro.

Pelo que eu ainda não sei fazer direito.
Pelo que eu ainda não sei dizer com calma.
Pelo que eu ainda tô aprendendo.

Mas eu prefiro te mostrar
em vez de prometer:

eu tô aqui.`,

`A gente chegou num ponto bonito.

Não é mais sobre convencer.
É sobre confiar.

Eu não quero te amar com medo.
Quero te amar com presença.

E se existe uma coisa que eu sei hoje,
é essa:

você não é só parte da minha vida.
Você é a parte que dá sentido.`
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
