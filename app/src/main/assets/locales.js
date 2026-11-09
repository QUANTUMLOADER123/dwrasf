/* Fully offline UI translations. Unlisted device languages fall back to English. */
(()=>{
const keys=`brand eyebrow title lead heroNote play how best bottom collected countdown streak tutorial hint footer sound controls up left down right rulesEyebrow rulesTitle rule1 rule2 rule3 rule4 gotIt watch pauseEyebrow pauseTitle pauseText resume leave endNew endQuiet endCrash endQuietTitle endCrashTitle endQuietDesc endCrashDesc scoreLabel recordLabel again exit wall seconds appTitle`.split(' ');
const rows={
en:`QUIET BUSINESS / 01
AN ARCADE ABOUT MEMORY
AFTER YOU
The room remembers every step you take.<br>One day, it starts following you.
EVERYTHING YOU DO STAYS BEHIND
Step into the room
How?
PERSONAL BEST
ONE THUMB · OFFLINE · BETTER WITH SOUND
COLLECTED
THE ROOM GOES QUIET IN
STREAK
TAKE A STEP. LOOK BACK.
Swipe one tile at a time. <b>Don't meet your echo.</b>
A LITTLE GAME FOR BIG THOUGHTS
Sound
Controls
Step up
Step left
Step down
Step right
A QUICK GUIDE
The room<br>remembers.
<b>Swipe</b> or tap an arrow: one move, one tile. Walls stop you.
Collect sparks. Each one gives you a little more time and boosts your next streak.
After five steps, your echo follows. <b>Don't step into it.</b> It remembers your path.
Dark circles are furniture. Last the minute and carry off as much light as you can.
Got it. Enter ↗
I'll look around first
TAKE A BREATH
The room<br>can wait.
You have %score% sparks. Your echo has paused too.
Keep going ↗
Leave quietly
NEW RECORD ✨
THE ROOM WENT QUIET
TWO OF YOU NOW
SILENCE
YOU MET YOUR ECHO
Room went quiet. Look how much light you managed to carry out.
Your echo got here first. The room remembers everything.
YOUR LIGHT
RECORD
Back into the room
Leave quietly
A WALL. THE ROOM REMEMBERS.
s
After You` .split('\n'),
ru:`ТИХОЕ ДЕЛО / 01
АРКАДА ПРО ПАМЯТЬ
ПОСЛЕ ТЕБЯ
Комната запоминает каждый твой шаг.<br>И однажды начинает идти следом.
ВСЁ, ЧТО ТЫ ДЕЛАЕШЬ, ОСТАЁТСЯ
Зайти в комнату
Как?
ЛИЧНЫЙ РЕКОРД
ОДИН ПАЛЕЦ · БЕЗ ИНТЕРНЕТА · СО ЗВУКОМ ЕЩЁ ЛУЧШЕ
СОБРАНО
КОМНАТА ЗАТИХНЕТ ЧЕРЕЗ
СЕРИЯ
СДЕЛАЙ ШАГ. ОГЛЯНИСЬ.
Свайпни, чтобы пройти на клетку. <b>Не встречай своё эхо.</b>
МАЛЕНЬКАЯ ИГРА ДЛЯ БОЛЬШИХ МЫСЛЕЙ
Звук
Управление
Шаг вверх
Шаг влево
Шаг вниз
Шаг вправо
КОРОТКАЯ ИНСТРУКЦИЯ
Комната<br>помнит.
<b>Свайпай</b> или жми стрелки — один жест, один шаг. Стены просто останавливают.
Собирай огоньки. Каждый даёт немного времени и множитель к следующему.
Через пять шагов за тобой выходит эхо. <b>Не наступи на него.</b> Оно помнит твой путь.
Тёмные кружки — мебель. Переживи минуту и унеси побольше света.
Понятно. Войти ↗
Я пока посмотрю
ПЕРЕВЕДИ ДЫХАНИЕ
Комната<br>подождёт.
Сейчас у тебя %score% огоньков. Эхо тоже замерло.
Продолжить ↗
Выйти тихо
НОВЫЙ РЕКОРД ✨
КОМНАТА ЗАТИХЛА
ВАС СТАЛО ДВОЕ
ТИШИНА
ВСТРЕТИЛИСЬ
Комната стихла. Но вот сколько света ты успел унести.
Твоё эхо прошло этот путь раньше тебя. Комната всё запомнила.
ТВОЙ СВЕТ
РЕКОРД
Снова в комнату
Выйти тихо
СТЕНА. КОМНАТА ПОМНИТ.
с
После тебя` .split('\n'),
es:`NEGOCIO TRANQUILO / 01
ARCADE DE RECUERDOS
DESPUÉS DE TI
La habitación recuerda cada paso.<br>Un día, empieza a seguirte.
TODO LO QUE HACES SE QUEDA
Entrar en la habitación
¿Cómo?
RÉCORD PERSONAL
UN DEDO · SIN INTERNET · MEJOR CON SONIDO
RECOGIDOS
LA HABITACIÓN SE APAGA EN
RACHA
DA UN PASO. MIRA ATRÁS.
Desliza para moverte una casilla. <b>No te encuentres con tu eco.</b>
UN JUEGO PEQUEÑO PARA GRANDES IDEAS
Sonido
Controles
Paso arriba
Paso a la izquierda
Paso abajo
Paso a la derecha
GUÍA RÁPIDA
La habitación<br>recuerda.
<b>Desliza</b> o toca una flecha: un gesto, un paso. Las paredes te detienen.
Recoge luces. Cada una añade tiempo y aumenta tu siguiente racha.
Tras cinco pasos, aparece tu eco. <b>No choques con él.</b> Recuerda tu ruta.
Los círculos oscuros son muebles. Aguanta un minuto y llévate toda la luz posible.
Entendido. Entrar ↗
Primero voy a mirar
TÓMATE UN RESPIRO
La habitación<br>puede esperar.
Tienes %score% luces. Tu eco también se ha detenido.
Seguir ↗
Salir en silencio
NUEVO RÉCORD ✨
LA HABITACIÓN SE APAGÓ
AHORA SOIS DOS
SILENCIO
OS ENCONTRASTEIS
La habitación se ha apagado. Mira toda la luz que has conseguido llevarte.
Tu eco llegó antes. La habitación lo recuerda todo.
TU LUZ
RÉCORD
Volver a la habitación
Salir en silencio
UNA PARED. LA HABITACIÓN RECUERDA.
s
Después de ti` .split('\n'),
fr:`AFFAIRE TRANQUILLE / 01
ARCADE DE LA MÉMOIRE
APRÈS TOI
La pièce se souvient de chacun de tes pas.<br>Un jour, elle se met à te suivre.
TOUT CE QUE TU FAIS RESTE
Entrer dans la pièce
Comment ?
RECORD PERSONNEL
UN DOIGT · HORS LIGNE · ENCORE MIEUX AVEC LE SON
COLLECTÉS
LA PIÈCE S'ÉTEINT DANS
SÉRIE
FAIS UN PAS. REGARDE DERRIÈRE.
Glisse pour avancer d'une case. <b>Ne rencontre pas ton écho.</b>
UN PETIT JEU POUR DE GRANDES IDÉES
Son
Commandes
Pas vers le haut
Pas à gauche
Pas vers le bas
Pas à droite
GUIDE RAPIDE
La pièce<br>se souvient.
<b>Glisse</b> ou touche une flèche : un geste, un pas. Les murs t'arrêtent.
Ramasse des lumières. Chacune ajoute du temps et augmente ta prochaine série.
Après cinq pas, ton écho te suit. <b>Ne le touche pas.</b> Il se souvient du chemin.
Les cercles sombres sont des meubles. Tiens une minute et emporte un maximum de lumière.
Compris. Entrer ↗
Je regarde d'abord
REPRENDS TON SOUFFLE
La pièce<br>peut attendre.
Tu as %score% lumières. Ton écho s'est arrêté aussi.
Continuer ↗
Sortir en silence
NOUVEAU RECORD ✨
LA PIÈCE S'EST ÉTEINTE
VOUS ÊTES DEUX
SILENCE
VOUS VOUS ÊTES CROISÉS
La pièce s'est éteinte. Regarde toute la lumière que tu as emportée.
Ton écho est arrivé avant toi. La pièce se souvient de tout.
TA LUMIÈRE
RECORD
Retourner dans la pièce
Sortir en silence
UN MUR. LA PIÈCE SE SOUVIENT.
s
Après toi` .split('\n'),
de:`STILLE SACHE / 01
ARCADE ÜBER ERINNERUNGEN
NACH DIR
Der Raum merkt sich jeden deiner Schritte.<br>Eines Tages folgt er dir.
ALLES, WAS DU TUST, BLEIBT
Den Raum betreten
Wie?
PERSÖNLICHER REKORD
EIN FINGER · OFFLINE · MIT TON NOCH BESSER
GESAMMELT
DER RAUM WIRD STILL IN
SERIE
MACH EINEN SCHRITT. SIEH ZURÜCK.
Wische für einen Schritt. <b>Triff nicht auf dein Echo.</b>
EIN KLEINES SPIEL FÜR GROSSE GEDANKEN
Ton
Steuerung
Schritt nach oben
Schritt nach links
Schritt nach unten
Schritt nach rechts
KURZANLEITUNG
Der Raum<br>erinnert sich.
<b>Wische</b> oder tippe einen Pfeil: eine Bewegung, ein Feld. Wände halten dich auf.
Sammle Licht. Jedes gibt dir etwas Zeit und erhöht deine nächste Serie.
Nach fünf Schritten folgt dir dein Echo. <b>Berühre es nicht.</b> Es kennt deinen Weg.
Dunkle Kreise sind Möbel. Halte eine Minute durch und nimm so viel Licht wie möglich mit.
Verstanden. Los ↗
Ich schaue erst mal
HOL TIEF LUFT
Der Raum<br>kann warten.
Du hast %score% Lichter. Dein Echo pausiert auch.
Weiter ↗
Leise verlassen
NEUER REKORD ✨
DER RAUM WURDE STILL
JETZT SEID IHR ZU ZWEIT
STILLE
IHR SEID EUCH BEGEGNET
Der Raum ist still. Sieh, wie viel Licht du mitgenommen hast.
Dein Echo war zuerst da. Der Raum merkt sich alles.
DEIN LICHT
REKORD
Zurück in den Raum
Leise verlassen
EINE WAND. DER RAUM MERKT ES SICH.
s
Nach dir` .split('\n'),
pt:`NEGÓCIO TRANQUILO / 01
ARCADE SOBRE MEMÓRIAS
DEPOIS DE TI
O quarto lembra cada passo teu.<br>Um dia, começa a seguir-te.
TUDO O QUE FAZES FICA
Entrar no quarto
Como?
RECORDE PESSOAL
UM DEDO · OFFLINE · MELHOR COM SOM
RECOLHIDOS
O QUARTO FICA EM SILÊNCIO EM
SEQUÊNCIA
DÁ UM PASSO. OLHA PARA TRÁS.
Desliza para andar uma casa. <b>Não encontres o teu eco.</b>
UM JOGO PEQUENO PARA GRANDES IDEIAS
Som
Controlos
Passo para cima
Passo para a esquerda
Passo para baixo
Passo para a direita
GUIA RÁPIDO
O quarto<br>lembra-se.
<b>Desliza</b> ou toca numa seta: um gesto, um passo. As paredes param-te.
Recolhe luzes. Cada uma dá mais tempo e aumenta a próxima sequência.
Após cinco passos, o teu eco segue-te. <b>Não colidas com ele.</b> Ele lembra o caminho.
Os círculos escuros são móveis. Aguenta um minuto e leva o máximo de luz.
Percebi. Entrar ↗
Vou espreitar primeiro
RESPIRA FUNDO
O quarto<br>pode esperar.
Tens %score% luzes. O teu eco também parou.
Continuar ↗
Sair em silêncio
NOVO RECORDE ✨
O QUARTO FICOU EM SILÊNCIO
AGORA SÃO DOIS
SILÊNCIO
VOCÊS SE ENCONTRARAM
O quarto ficou em silêncio. Olha quanta luz conseguiste levar.
O teu eco chegou primeiro. O quarto lembra-se de tudo.
A TUA LUZ
RECORDE
Voltar ao quarto
Sair em silêncio
UMA PAREDE. O QUARTO LEMBRA-SE.
s
Depois de ti` .split('\n'),
it:`AFFARE TRANQUILLO / 01
ARCADE DI RICORDI
DOPO DI TE
La stanza ricorda ogni tuo passo.<br>Un giorno, inizia a seguirti.
TUTTO QUELLO CHE FAI RESTA
Entra nella stanza
Come?
RECORD PERSONALE
UN DITO · OFFLINE · MEGLIO CON L'AUDIO
RACCOLTI
LA STANZA SI FA SILENZIOSA TRA
SERIE
FAI UN PASSO. GUARDATI INDIETRO.
Scorri per muoverti di una casella. <b>Non incontrare la tua eco.</b>
UN PICCOLO GIOCO PER GRANDI PENSIERI
Audio
Comandi
Passo in alto
Passo a sinistra
Passo in basso
Passo a destra
GUIDA RAPIDA
La stanza<br>ricorda.
<b>Scorri</b> o tocca una freccia: un gesto, un passo. I muri ti fermano.
Raccogli luci. Ognuna aggiunge tempo e aumenta la prossima serie.
Dopo cinque passi, la tua eco ti segue. <b>Non incontrarla.</b> Ricorda il percorso.
I cerchi scuri sono mobili. Resisti un minuto e porta via più luce possibile.
Capito. Entra ↗
Prima guardo
FAI UN RESPIRO
La stanza<br>può aspettare.
Hai %score% luci. Anche la tua eco si è fermata.
Continua ↗
Esci in silenzio
NUOVO RECORD ✨
LA STANZA SI È SPENTA
ORA SIETE IN DUE
SILENZIO
VI SIETE INCONTRATI
La stanza è silenziosa. Guarda quanta luce sei riuscito a portare via.
La tua eco è arrivata prima. La stanza ricorda tutto.
LA TUA LUCE
RECORD
Torna nella stanza
Esci in silenzio
UN MURO. LA STANZA RICORDA.
s
Dopo di te` .split('\n'),
ja:`静かなできごと / 01
記憶のアーケード
あなたのあと
部屋はあなたの足跡を覚えている。<br>いつか、あなたを追いかけ始める。
あなたのしたことは、すべて残る
部屋に入る
遊び方
自己ベスト
指一本 · オフライン · 音ありがおすすめ
集めた光
部屋が静まるまで
連続数
一歩進んで、振り返って。
スワイプで一マス進む。<b>自分の残像にぶつからないで。</b>
大きな考えのための小さなゲーム
サウンド
操作
上へ
左へ
下へ
右へ
かんたんガイド
部屋は<br>覚えている。
<b>スワイプ</b>か矢印をタップ。一回で一歩。壁は通れない。
光を集めよう。一つ拾うごとに時間と次の連続ボーナスが増える。
5歩進むと残像が追ってくる。<b>ぶつからないで。</b>残像は道を覚えている。
暗い丸は家具。1分間生き残り、光をできるだけ持ち帰ろう。
わかった。入る ↗
まずは見てみる
ひと休み
部屋は<br>待ってくれる。
光を%score%個集めたよ。残像も止まっている。
続ける ↗
静かに出る
新記録 ✨
部屋が静まった
二人になった
静寂
出会ってしまった
部屋が静まった。持ち帰った光を見てみよう。
残像が先に着いた。部屋はすべて覚えている。
あなたの光
記録
部屋に戻る
静かに出る
壁だ。部屋は覚えている。
秒
あなたのあと` .split('\n'),
ko:`조용한 일 / 01
기억을 걷는 아케이드
네가 떠난 뒤
방은 네 걸음을 기억해.<br>어느 날, 방이 너를 따라오기 시작해.
네가 한 모든 일은 남아
방에 들어가기
어떻게?
개인 최고 기록
한 손가락 · 오프라인 · 소리와 함께 더 좋아요
모은 빛
방이 조용해지기까지
연속 기록
한 걸음 내딛고, 뒤돌아봐.
스와이프해서 한 칸 이동해. <b>네 메아리와 마주치지 마.</b>
큰 생각을 위한 작은 게임
소리
조작
위로
왼쪽으로
아래로
오른쪽으로
간단 안내
방은<br>기억해.
<b>스와이프</b>하거나 화살표를 눌러 한 칸씩 이동해. 벽은 막혀 있어.
빛을 모아. 하나씩 모을 때마다 시간이 늘고 다음 연속 보너스가 커져.
다섯 걸음 뒤 메아리가 따라와. <b>부딪히지 마.</b> 네 길을 기억해.
어두운 원은 가구야. 1분 동안 버티며 빛을 최대한 가져가.
알겠어. 들어가기 ↗
먼저 둘러볼게
잠깐 숨을 골라
방은<br>기다려 줄게.
빛을 %score%개 모았어. 메아리도 멈췄어.
계속하기 ↗
조용히 나가기
신기록 ✨
방이 조용해졌어
이제 둘이야
고요
서로 마주쳤어
방이 조용해졌어. 얼마나 많은 빛을 가져왔는지 봐.
메아리가 먼저 도착했어. 방은 전부 기억해.
네 빛
기록
방으로 돌아가기
조용히 나가기
벽이야. 방은 기억해.
초
네가 떠난 뒤` .split('\n'),
zh:`安静的小事 / 01
关于记忆的街机游戏
在你之后
房间记得你的每一步。<br>总有一天，它会开始跟着你。
你做过的一切都会留下
走进房间
怎么玩？
个人最佳
单指 · 离线 · 打开声音更好玩
已收集
房间安静倒计时
连击
迈出一步，回头看看。
滑动即可移动一格。<b>别和自己的回声相遇。</b>
一个关于大想法的小游戏
声音
操作
向上
向左
向下
向右
快速说明
房间<br>记得。
<b>滑动</b>或点击箭头，一次移动一格。墙会挡住你。
收集光点。每个光点都会增加时间，并提高下一次连击。
走五步后，回声会跟上你。<b>别撞上它。</b>它记得你的路线。
暗色圆点是家具。坚持一分钟，尽可能带走更多光。
知道了，进入 ↗
我先看看
歇一口气
房间<br>可以等等。
你收集了 %score% 个光点。回声也停下了。
继续 ↗
安静离开
新纪录 ✨
房间安静了
现在有两个你
寂静
你们相遇了
房间安静了。看看你带走了多少光。
你的回声先到了。房间什么都记得。
你的光
纪录
回到房间
安静离开
撞墙了。房间会记得。
秒
在你之后` .split('\n'),
ar:`أمر هادئ / 01
لعبة أركيد عن الذاكرة
بعدك
تتذكر الغرفة كل خطوة تخطوها.<br>وفي يوم ما، تبدأ بملاحقتك.
كل ما تفعله يبقى
ادخل الغرفة
كيف؟
أفضل نتيجة
إصبع واحد · بلا إنترنت · الصوت أجمل
ما جُمع
تسكن الغرفة خلال
سلسلة
خطوة واحدة. ألقِ نظرة خلفك.
اسحب للتحرك خانة واحدة. <b>لا تلتقِ بصداك.</b>
لعبة صغيرة لأفكار كبيرة
الصوت
التحكم
خطوة للأعلى
خطوة لليسار
خطوة للأسفل
خطوة لليمين
دليل سريع
الغرفة<br>تتذكر.
<b>اسحب</b> أو اضغط سهماً: حركة واحدة، خانة واحدة. الجدران توقفك.
اجمع الأضواء. كل ضوء يضيف وقتاً ويزيد سلسلتك التالية.
بعد خمس خطوات، يتبعك صداك. <b>لا تصطدم به.</b> إنه يتذكر طريقك.
الدوائر الداكنة أثاث. اصمد دقيقة وخذ أكبر قدر من الضوء.
فهمت. ادخل ↗
سألقي نظرة أولاً
التقط أنفاسك
الغرفة<br>يمكنها الانتظار.
لديك %score% أضواء. توقف صداك أيضاً.
تابع ↗
اخرج بهدوء
رقم قياسي جديد ✨
هدأت الغرفة
أصبحتم اثنين
سكون
التقيتما
هدأت الغرفة. انظر كم من الضوء استطعت أخذه.
سبقك صداك. الغرفة تتذكر كل شيء.
ضوؤك
الرقم القياسي
عد إلى الغرفة
اخرج بهدوء
جدار. الغرفة تتذكر.
ث
بعدك` .split('\n'),
hi:`शांत सी बात / 01
यादों वाला आर्केड
तुम्हारे बाद
कमरा तुम्हारे हर कदम को याद रखता है।<br>एक दिन, वह तुम्हारे पीछे चलने लगता है।
तुम जो करते हो, वह रह जाता है
कमरे में जाओ
कैसे?
सबसे अच्छा स्कोर
एक उंगली · ऑफ़लाइन · आवाज़ के साथ और मज़ेदार
इकट्ठा किया
कमरा शांत होगा
लगातार
एक कदम चलो। पीछे देखो।
एक खाने चलने के लिए स्वाइप करो। <b>अपनी गूँज से मत मिलो।</b>
बड़े विचारों के लिए छोटा खेल
आवाज़
नियंत्रण
ऊपर चलें
बाएँ चलें
नीचे चलें
दाएँ चलें
छोटी-सी गाइड
कमरा<br>याद रखता है।
<b>स्वाइप</b> करो या तीर दबाओ: एक बार में एक कदम। दीवारें रोकती हैं।
रोशनी इकट्ठा करो। हर रोशनी समय बढ़ाती है और अगली श्रृंखला को बेहतर करती है।
पाँच कदम बाद तुम्हारी गूँज पीछे आएगी। <b>उससे मत टकराओ।</b> उसे रास्ता याद है।
गहरे गोले फर्नीचर हैं। एक मिनट टिके रहो और जितनी रोशनी हो सके ले जाओ।
समझ गया। अंदर जाएँ ↗
पहले देखता हूँ
थोड़ा दम लो
कमरा<br>इंतज़ार कर सकता है।
तुम्हारे पास %score% रोशनियाँ हैं। तुम्हारी गूँज भी रुक गई।
जारी रखें ↗
चुपचाप बाहर
नया रिकॉर्ड ✨
कमरा शांत हो गया
अब तुम दो हो
शांति
तुम मिल गए
कमरा शांत हो गया। देखो, तुम कितनी रोशनी ले जा पाए।
तुम्हारी गूँज पहले पहुँच गई। कमरा सब याद रखता है।
तुम्हारी रोशनी
रिकॉर्ड
कमरे में लौटें
चुपचाप बाहर
दीवार है। कमरा याद रखता है।
सेकंड
तुम्हारे बाद` .split('\n'),
id:`URUSAN TENANG / 01
ARCADE TENTANG INGATAN
SETELAHMU
Ruangan mengingat setiap langkahmu.<br>Suatu hari, ia mulai mengikutimu.
SEMUA YANG KAU LAKUKAN TERTINGGAL
Masuk ke ruangan
Bagaimana?
REKOR PRIBADI
SATU JARI · OFFLINE · LEBIH SERU DENGAN SUARA
TERKUMPUL
RUANGAN HENING DALAM
RANGKAIAN
MELANGKAHLAH. TENGOK KE BELAKANG.
Geser untuk pindah satu petak. <b>Jangan bertemu gema dirimu.</b>
GAME KECIL UNTUK PIKIRAN BESAR
Suara
Kontrol
Langkah ke atas
Langkah ke kiri
Langkah ke bawah
Langkah ke kanan
PANDUAN SINGKAT
Ruangan<br>mengingat.
<b>Geser</b> atau ketuk panah: satu gerakan, satu langkah. Tembok menahanmu.
Kumpulkan cahaya. Setiap cahaya menambah waktu dan meningkatkan rangkaian berikutnya.
Setelah lima langkah, gemamu menyusul. <b>Jangan bertabrakan.</b> Ia mengingat jalanmu.
Lingkaran gelap adalah perabot. Bertahanlah semenit dan bawa sebanyak mungkin cahaya.
Mengerti. Masuk ↗
Lihat-lihat dulu
TARIK NAPAS
Ruangan<br>bisa menunggu.
Kamu punya %score% cahaya. Gemamu ikut berhenti.
Lanjut ↗
Keluar diam-diam
REKOR BARU ✨
RUANGAN MENJADI HENING
KALIAN JADI BERDUA
HENING
KALIAN BERTEMU
Ruangan hening. Lihat berapa banyak cahaya yang berhasil kamu bawa.
Gemamu tiba lebih dulu. Ruangan mengingat semuanya.
CAHAYAMU
REKOR
Kembali ke ruangan
Keluar diam-diam
TEMBOK. RUANGAN MENGINGAT.
dtk
Setelahmu` .split('\n'),
tr:`SESSİZ BİR İŞ / 01
HAFIZA ARKADI
SENDEN SONRA
Oda attığın her adımı hatırlar.<br>Bir gün seni takip etmeye başlar.
YAPTIĞIN HER ŞEY GERİDE KALIR
Odaya gir
Nasıl?
EN İYİ REKOR
TEK PARMAK · ÇEVRİMDIŞI · SESLE DAHA GÜZEL
TOPLANAN
ODANIN SESSİZLEŞMESİNE
SERİ
BİR ADIM AT. ARKANA BAK.
Bir kare ilerlemek için kaydır. <b>Yankınla karşılaşma.</b>
BÜYÜK FİKİRLER İÇİN KÜÇÜK BİR OYUN
Ses
Kontroller
Yukarı adım
Sola adım
Aşağı adım
Sağa adım
KISA REHBER
Oda<br>hatırlar.
<b>Kaydır</b> ya da oka dokun: bir hareket, bir kare. Duvarlar seni durdurur.
Işıkları topla. Her biri süre ekler ve sonraki serini artırır.
Beş adımdan sonra yankın seni izler. <b>Ona çarpma.</b> Yolunu hatırlar.
Koyu daireler eşya. Bir dakika dayan ve olabildiğince çok ışık götür.
Anladım. Gir ↗
Önce bakacağım
BİR NEFES AL
Oda<br>bekleyebilir.
%score% ışığın var. Yankın da durdu.
Devam et ↗
Sessizce çık
YENİ REKOR ✨
ODA SUSTU
ARTIK İKİ KİŞİSİNİZ
SESSİZLİK
KARŞILAŞTINIZ
Oda sustu. Yanında ne kadar ışık götürdüğüne bak.
Yankın önce geldi. Oda her şeyi hatırlar.
IŞIĞIN
REKOR
Odaya dön
Sessizce çık
DUVAR. ODA HATIRLAR.
sn
Senden sonra` .split('\n'),
uk:`ТИХА СПРАВА / 01
АРКАДА ПРО ПАМ’ЯТЬ
ПІСЛЯ ТЕБЕ
Кімната пам’ятає кожен твій крок.<br>Одного дня вона починає йти за тобою.
УСЕ, ЩО ТИ РОБИШ, ЗАЛИШАЄТЬСЯ
Зайти до кімнати
Як?
ОСОБИСТИЙ РЕКОРД
ОДИН ПАЛЕЦЬ · ОФЛАЙН · ЗІ ЗВУКОМ ЩЕ КРАЩЕ
ЗІБРАНО
КІМНАТА ЗАТИХНЕ ЗА
СЕРІЯ
ЗРОБИ КРОК. ОЗИРНИСЯ.
Свайпай, щоб пройти на клітинку. <b>Не зустрінься зі своїм луною.</b>
МАЛЕНЬКА ГРА ДЛЯ ВЕЛИКИХ ДУМОК
Звук
Керування
Крок угору
Крок ліворуч
Крок униз
Крок праворуч
КОРОТКА ІНСТРУКЦІЯ
Кімната<br>пам’ятає.
<b>Свайпай</b> або натискай стрілку: один рух — один крок. Стіни зупиняють.
Збирай вогники. Кожен додає трохи часу й множник до наступної серії.
Через п’ять кроків за тобою йде відлуння. <b>Не зіткнися з ним.</b> Воно пам’ятає шлях.
Темні кола — меблі. Переживи хвилину й забери якомога більше світла.
Зрозуміло. Увійти ↗
Я спершу подивлюся
ПЕРЕВЕДИ ПОДИХ
Кімната<br>почекає.
У тебе %score% вогників. Відлуння теж зупинилося.
Продовжити ↗
Вийти тихо
НОВИЙ РЕКОРД ✨
КІМНАТА ЗАТИХЛА
ВАС СТАЛО ДВОЄ
ТИША
ВИ ЗУСТРІЛИСЯ
Кімната стихла. Ось скільки світла ти встиг забрати.
Твоє відлуння прийшло раніше. Кімната все пам’ятає.
ТВОЄ СВІТЛО
РЕКОРД
Назад до кімнати
Вийти тихо
СТІНА. КІМНАТА ПАМ’ЯТАЄ.
с
Після тебе` .split('\n'),
pl:`CICHY INTERES / 01
ARCADE O PAMIĘCI
PO TOBIE
Pokój pamięta każdy twój krok.<br>Pewnego dnia zaczyna za tobą chodzić.
WSZYSTKO, CO ROBISZ, ZOSTAJE
Wejdź do pokoju
Jak?
TWÓJ REKORD
JEDEN PALEC · OFFLINE · LEPIEJ Z DŹWIĘKIEM
ZEBRANE
POKÓJ ZAMILKNIE ZA
SERIA
ZRÓB KROK. OBEJRZYJ SIĘ.
Przesuń palcem, aby przejść o pole. <b>Nie spotkaj swojego echa.</b>
MAŁA GRA O WIELKICH MYŚLACH
Dźwięk
Sterowanie
Krok w górę
Krok w lewo
Krok w dół
Krok w prawo
KRÓTKA INSTRUKCJA
Pokój<br>pamięta.
<b>Przesuń palcem</b> lub naciśnij strzałkę: jeden ruch, jedno pole. Ściany cię zatrzymają.
Zbieraj światełka. Każde dodaje czas i zwiększa następną serię.
Po pięciu krokach ruszy za tobą echo. <b>Nie wpadaj na nie.</b> Pamięta twoją drogę.
Ciemne kółka to meble. Przetrwaj minutę i zabierz jak najwięcej światła.
Jasne. Wchodzę ↗
Najpierw się rozejrzę
ZŁAP ODDECH
Pokój<br>może poczekać.
Masz %score% światełek. Echo też się zatrzymało.
Graj dalej ↗
Wyjdź po cichu
NOWY REKORD ✨
POKÓJ UCICHŁ
JEST WAS DWOJE
CISZA
SPOTKALIŚCIE SIĘ
Pokój ucichł. Zobacz, ile światła udało ci się zabrać.
Twoje echo dotarło pierwsze. Pokój wszystko pamięta.
TWOJE ŚWIATŁO
REKORD
Wróć do pokoju
Wyjdź po cichu
ŚCIANA. POKÓJ PAMIĘTA.
s
Po tobie` .split('\n'),
vi:`VIỆC NHẸ NHÀNG / 01
ARCADE VỀ KÝ ỨC
SAU BẠN
Căn phòng nhớ từng bước chân của bạn.<br>Một ngày nào đó, nó bắt đầu đi theo bạn.
MỌI ĐIỀU BẠN LÀM ĐỀU CÒN LẠI
Vào phòng
Thế nào?
KỶ LỤC CÁ NHÂN
MỘT NGÓN TAY · NGOẠI TUYẾN · CÓ ÂM THANH THÌ HAY HƠN
ĐÃ THU THẬP
PHÒNG SẼ LẶNG TRONG
CHUỖI
BƯỚC MỘT BƯỚC. NGOẢNH LẠI.
Vuốt để đi một ô. <b>Đừng gặp tiếng vọng của chính mình.</b>
TRÒ CHƠI NHỎ CHO NHỮNG Ý TƯỞNG LỚN
Âm thanh
Điều khiển
Bước lên
Bước trái
Bước xuống
Bước phải
HƯỚNG DẪN NHANH
Căn phòng<br>ghi nhớ.
<b>Vuốt</b> hoặc nhấn mũi tên: một lần, một bước. Tường sẽ chặn bạn.
Thu thập ánh sáng. Mỗi đốm cộng thêm thời gian và tăng chuỗi tiếp theo.
Sau năm bước, tiếng vọng sẽ theo sau. <b>Đừng va vào nó.</b> Nó nhớ đường đi của bạn.
Vòng tròn tối là đồ đạc. Sống sót một phút và mang theo thật nhiều ánh sáng.
Đã hiểu. Vào thôi ↗
Để tôi xem trước
NGHỈ MỘT CHÚT
Căn phòng<br>có thể chờ.
Bạn có %score% đốm sáng. Tiếng vọng cũng đã dừng lại.
Tiếp tục ↗
Lặng lẽ rời đi
KỶ LỤC MỚI ✨
CĂN PHÒNG ĐÃ LẶNG
GIỜ CÓ HAI BẠN
YÊN LẶNG
HAI BẠN ĐÃ GẶP NHAU
Căn phòng đã lặng. Hãy xem bạn mang được bao nhiêu ánh sáng.
Tiếng vọng đến trước bạn. Căn phòng nhớ mọi thứ.
ÁNH SÁNG CỦA BẠN
KỶ LỤC
Quay lại phòng
Lặng lẽ rời đi
BỨC TƯỜNG. CĂN PHÒNG GHI NHỚ.
giây
Sau bạn` .split('\n'),
th:`เรื่องเงียบ ๆ / 01
เกมอาร์เคดแห่งความทรงจำ
หลังจากเธอ
ห้องนี้จดจำทุกย่างก้าวของเธอ<br>วันหนึ่ง มันจะเริ่มเดินตามเธอ
ทุกสิ่งที่เธอทำจะยังคงอยู่
เข้าห้อง
เล่นอย่างไร?
สถิติสูงสุด
นิ้วเดียว · ออฟไลน์ · เปิดเสียงยิ่งดี
ที่เก็บได้
ห้องจะเงียบในอีก
ต่อเนื่อง
ก้าวหนึ่ง แล้วหันกลับไปดู
ปัดเพื่อเดินหนึ่งช่อง <b>อย่าเจอเสียงสะท้อนของตัวเอง</b>
เกมเล็ก ๆ สำหรับความคิดที่ยิ่งใหญ่
เสียง
การควบคุม
ก้าวขึ้น
ก้าวซ้าย
ก้าวลง
ก้าวขวา
วิธีเล่นแบบย่อ
ห้องนี้<br>จดจำได้
<b>ปัด</b> หรือแตะลูกศร: หนึ่งครั้ง หนึ่งก้าว กำแพงจะขวางเธอ
เก็บแสง ทุกดวงเพิ่มเวลาและเพิ่มชุดต่อเนื่องครั้งถัดไป
เดินห้าก้าวแล้วเสียงสะท้อนจะตามมา <b>อย่าชนมัน</b> มันจำเส้นทางได้
วงกลมมืดคือเฟอร์นิเจอร์ อยู่ให้ครบหนึ่งนาทีและนำแสงกลับไปให้มากที่สุด
เข้าใจแล้ว เข้าไป ↗
ขอดูก่อน
พักหายใจสักครู่
ห้องนี้<br>รอได้
เธอมีแสง %score% ดวง เสียงสะท้อนก็หยุดแล้ว
เล่นต่อ ↗
ออกไปเงียบ ๆ
สถิติใหม่ ✨
ห้องเงียบลงแล้ว
ตอนนี้มีเธอสองคน
เงียบสงบ
เธอสองคนพบกัน
ห้องเงียบลงแล้ว ดูสิว่าเธอนำแสงกลับไปได้เท่าไร
เสียงสะท้อนมาถึงก่อน ห้องนี้จำทุกอย่างได้
แสงของเธอ
สถิติ
กลับเข้าห้อง
ออกไปเงียบ ๆ
กำแพง ห้องนี้จำได้
วิ
หลังจากเธอ` .split('\n')
};
rows.nl=`STILLE ZAAK / 01
ARCADE OVER HERINNERINGEN
NA JOU
De kamer onthoudt elke stap.<br>Op een dag begint ze je te volgen.
ALLES WAT JE DOET BLIJFT ACHTER
De kamer in
Hoe?
PERSOONLIJK RECORD
ÉÉN VINGER · OFFLINE · LEUKER MET GELUID
VERZAMELD
DE KAMER WORDT STIL OVER
REEKS
ZET EEN STAP. KIJK OM.
Veeg om één vakje te lopen. <b>Ontmoet je echo niet.</b>
EEN KLEIN SPEL VOOR GROTE GEDACHTEN
Geluid
Bediening
Stap omhoog
Stap naar links
Stap omlaag
Stap naar rechts
KORTE UITLEG
De kamer<br>onthoudt.
<b>Veeg</b> of tik op een pijl: één beweging, één stap. Muren houden je tegen.
Verzamel lichtjes. Elk lichtje geeft tijd en verhoogt je volgende reeks.
Na vijf stappen volgt je echo. <b>Raak hem niet.</b> Hij kent je route.
Donkere rondjes zijn meubels. Houd het een minuut vol en neem zoveel mogelijk licht mee.
Begrepen. Naar binnen ↗
Ik kijk eerst even
HAAL ADEM
De kamer<br>kan wachten.
Je hebt %score% lichtjes. Je echo staat ook stil.
Verder ↗
Stil vertrekken
NIEUW RECORD ✨
DE KAMER WERD STIL
JULLIE ZIJN NU MET TWEE
STILTE
JULLIE ZIJN ELKAAR TEGENgekomen
De kamer is stil. Kijk hoeveel licht je hebt meegenomen.
Je echo was er eerder. De kamer onthoudt alles.
JOUW LICHT
RECORD
Terug naar de kamer
Stil vertrekken
EEN MUUR. DE KAMER ONTHOUDT.
s
Na jou`.split('\n');
rows.sv=`TYST AFFÄR / 01
ARKAD OM MINNEN
EFTER DIG
Rummet minns varje steg du tar.<br>En dag börjar det följa efter dig.
ALLT DU GÖR FINNS KVAR
Gå in i rummet
Hur då?
PERSONLIGT REKORD
ETT FINGER · OFFLINE · BÄTTRE MED LJUD
INSAMLAT
RUMMET BLIR TYST OM
SERIE
TA ETT STEG. SE DIG OM.
Svep för att gå en ruta. <b>Möt inte ditt eko.</b>
ETT LITET SPEL FÖR STORA TANKAR
Ljud
Kontroller
Steg upp
Steg åt vänster
Steg ner
Steg åt höger
SNABBGUIDE
Rummet<br>minns.
<b>Svep</b> eller tryck på en pil: ett drag, ett steg. Väggar stoppar dig.
Samla ljus. Varje ljus ger mer tid och ökar nästa serie.
Efter fem steg följer ditt eko efter. <b>Gå inte in i det.</b> Det minns vägen.
Mörka cirklar är möbler. Överlev en minut och ta med så mycket ljus du kan.
Jag förstår. Gå in ↗
Jag tittar först
ANDAS UT
Rummet<br>kan vänta.
Du har %score% ljus. Ditt eko har också stannat.
Fortsätt ↗
Gå tyst
NYTT REKORD ✨
RUMMET BLEV TYST
NU ÄR NI TVÅ
TYSTNAD
NI MÖTTES
Rummet blev tyst. Se hur mycket ljus du lyckades ta med.
Ditt eko kom fram först. Rummet minns allt.
DITT LJUS
REKORD
Tillbaka till rummet
Gå tyst
EN VÄGG. RUMMET MINNS.
s
Efter dig`.split('\n');
rows.da=`STILLE SAG / 01
ARKADE OM HUKOMMELSE
EFTER DIG
Rummet husker hvert skridt.<br>En dag begynder det at følge efter dig.
ALT, DU GØR, BLIVER
Gå ind i rummet
Hvordan?
PERSONLIG REKORD
ÉN FINGER · OFFLINE · BEDRE MED LYD
INDSAMLET
RUMMET BLIVER STILLE OM
SERIE
TAG ET SKRIDT. SE DIG TILBAGE.
Stryg for at gå ét felt. <b>Mød ikke dit ekko.</b>
ET LILLE SPIL TIL STORE TANKER
Lyd
Betjening
Skridt op
Skridt til venstre
Skridt ned
Skridt til højre
KORT GUIDE
Rummet<br>husker.
<b>Stryg</b> eller tryk på en pil: ét træk, ét skridt. Væggene stopper dig.
Saml lys. Hvert lys giver mere tid og øger din næste serie.
Efter fem skridt følger dit ekko dig. <b>Gå ikke ind i det.</b> Det husker din rute.
Mørke cirkler er møbler. Overlev et minut, og tag så meget lys med som muligt.
Forstået. Gå ind ↗
Jeg kigger først
TRÆK VEJRET
Rummet<br>kan vente.
Du har %score% lys. Dit ekko er også stoppet.
Fortsæt ↗
Gå stille
NY REKORD ✨
RUMMET BLEV STILLE
NU ER I TO
STILHED
I MØDTES
Rummet blev stille. Se, hvor meget lys du nåede at tage med.
Dit ekko kom først. Rummet husker alt.
DIT LYS
REKORD
Tilbage til rummet
Gå stille
EN VÆG. RUMMET HUSKER.
s
Efter dig`.split('\n');
rows.no=`STILLE SAK / 01
ARKADE OM MINNER
ETTER DEG
Rommet husker hvert steg du tar.<br>En dag begynner det å følge etter deg.
ALT DU GJØR BLIR IGJEN
Gå inn i rommet
Hvordan?
PERSONLIG REKORD
ÉN FINGER · OFFLINE · BEDRE MED LYD
SAMLET
ROMMET BLIR STILLE OM
SERIE
TA ET STEG. SE DEG TILBAKE.
Sveip for å gå én rute. <b>Ikke møt ekkoet ditt.</b>
ET LITE SPILL FOR STORE TANKER
Lyd
Kontroller
Steg opp
Steg til venstre
Steg ned
Steg til høyre
KORT GUIDE
Rommet<br>husker.
<b>Sveip</b> eller trykk på en pil: én bevegelse, ett steg. Vegger stopper deg.
Samle lys. Hvert lys gir mer tid og øker neste serie.
Etter fem steg følger ekkoet ditt etter. <b>Ikke gå inn i det.</b> Det husker veien.
Mørke sirkler er møbler. Overlev ett minutt og ta med så mye lys du kan.
Skjønner. Gå inn ↗
Jeg ser meg rundt først
PUST UT
Rommet<br>kan vente.
Du har %score% lys. Ekkoet ditt har også stoppet.
Fortsett ↗
Gå stille ut
NY REKORD ✨
ROMMET BLE STILLE
NÅ ER DERE TO
STILLHET
DERE MØTTES
Rommet ble stille. Se hvor mye lys du klarte å ta med.
Ekkoet ditt kom først. Rommet husker alt.
LYSET DITT
REKORD
Tilbake til rommet
Gå stille ut
EN VEGG. ROMMET HUSKER.
s
Etter deg`.split('\n');
rows.fi=`HILJAINEN HOMMA / 01
MUISTIPELI
SINUN JÄLKEESI
Huone muistaa jokaisen askeleesi.<br>Eräänä päivänä se alkaa seurata sinua.
KAIKKI TEKEMÄSI JÄÄ TÄNNE
Astu huoneeseen
Miten?
OMA ENNÄTYS
YHDELLÄ SORMELLA · OFFLINE · PAREMPI ÄÄNILLÄ
KERÄTTY
HUONE HILJENEE AJASSA
PUTKI
OTA ASKEL. KATSO TAAKSESI.
Pyyhkäise liikkuaksesi ruudun. <b>Älä kohtaa kaikua.</b>
PIENI PELI SUURILLE AJATUKSILLE
Ääni
Ohjaus
Askel ylös
Askel vasemmalle
Askel alas
Askel oikealle
PIKAOPAS
Huone<br>muistaa.
<b>Pyyhkäise</b> tai napauta nuolta: yksi liike, yksi askel. Seinät pysäyttävät.
Kerää valoa. Jokainen valo lisää aikaa ja kasvattaa seuraavaa putkea.
Viiden askeleen jälkeen kaikusi seuraa. <b>Älä törmää siihen.</b> Se muistaa reittisi.
Tummat ympyrät ovat huonekaluja. Selviydy minuutti ja kanna mahdollisimman paljon valoa.
Selvä. Sisään ↗
Katselen ensin
HENGÄHDÄ
Huone<br>voi odottaa.
Sinulla on %score% valoa. kaikukin pysähtyi.
Jatka ↗
Poistu hiljaa
UUSI ENNÄTYS ✨
HUONE HILJENI
TEITÄ ON NYT KAKSI
HILJAISUUS
KOHTASIT KAIKUSI
Huone hiljeni. Katso, kuinka paljon valoa sait mukaasi.
Kaikusi ehti ensin. Huone muistaa kaiken.
SINUN VALOSI
ENNÄTYS
Takaisin huoneeseen
Poistu hiljaa
SEINÄ. HUONE MUISTAA.
s
Sinun jälkeesi`.split('\n');
rows.ro=`TREABĂ LINIȘTITĂ / 01
ARCADĂ DESPRE AMINTIRI
DUPĂ TINE
Camera își amintește fiecare pas.<br>Într-o zi, începe să te urmeze.
TOT CE FACI RĂMÂNE
Intră în cameră
Cum?
RECORD PERSONAL
UN DEGET · OFFLINE · MAI BINE CU SUNET
COLECTATE
CAMERA AMUȚEȘTE ÎN
SERIE
FĂ UN PAS. UITĂ-TE ÎNAPOI.
Glisează pentru a merge un pătrat. <b>Nu-ți întâlni ecoul.</b>
UN JOC MIC PENTRU IDEI MARI
Sunet
Comenzi
Pas în sus
Pas la stânga
Pas în jos
Pas la dreapta
GHID RAPID
Camera<br>își amintește.
<b>Glisează</b> sau atinge o săgeată: o mișcare, un pas. Pereții te opresc.
Adună lumini. Fiecare adaugă timp și mărește seria următoare.
După cinci pași, ecoul te urmează. <b>Nu te lovi de el.</b> Îți știe drumul.
Cercurile întunecate sunt mobilă. Rezistă un minut și ia cât mai multă lumină.
Am înțeles. Intră ↗
Mă uit mai întâi
TRAGE AER ÎN PIEPT
Camera<br>poate aștepta.
Ai %score% lumini. Și ecoul s-a oprit.
Continuă ↗
Ieși în liniște
RECORD NOU ✨
CAMERA A AMUȚIT
ACUM SUNTEȚI DOI
LINIȘTE
V-AȚI ÎNTÂLNIT
Camera a amuțit. Uite câtă lumină ai reușit să iei.
Ecoul tău a ajuns primul. Camera ține minte tot.
LUMINA TA
RECORD
Înapoi în cameră
Ieși în liniște
UN PERETE. CAMERA ȚINE MINTE.
s
După tine`.split('\n');
rows.cs=`TICHÁ ZÁLEŽITOST / 01
ARKÁDA O VZPOMÍNKÁCH
PO TOBĚ
Pokoj si pamatuje každý tvůj krok.<br>Jednou tě začne následovat.
VŠECHNO, CO UDĚLÁŠ, ZŮSTÁVÁ
Vejít do pokoje
Jak?
OSOBNÍ REKORD
JEDEN PRST · OFFLINE · SE ZVUKEM JE TO LEPŠÍ
SEBRÁNO
POKOJ ZTICHNE ZA
SÉRIE
UDĚLEJ KROK. OHLÉDNI SE.
Přejeď prstem a posuň se o políčko. <b>Nechytni své echo.</b>
MALÁ HRA PRO VELKÉ MYŠLENKY
Zvuk
Ovládání
Krok nahoru
Krok doleva
Krok dolů
Krok doprava
RYCHLÝ NÁVOD
Pokoj<br>si pamatuje.
<b>Přejeď prstem</b> nebo klepni na šipku: jeden pohyb, jeden krok. Zdi tě zastaví.
Sbírej světýlka. Každé přidá čas a zvýší další sérii.
Po pěti krocích tě následuje echo. <b>Nevkroč do něj.</b> Pamatuje si cestu.
Tmavé kruhy jsou nábytek. Vydrž minutu a odnes co nejvíc světla.
Jasně. Vstoupit ↗
Nejdřív se rozhlédnu
NABER DECH
Pokoj<br>může počkat.
Máš %score% světýlek. I tvoje echo se zastavilo.
Pokračovat ↗
Tiše odejít
NOVÝ REKORD ✨
POKOJ ZTICHNUL
TEĎ JSTE DVA
TICHO
POTKALI JSTE SE
Pokoj ztichnul. Podívej, kolik světla sis odnesl.
Tvoje echo dorazilo první. Pokoj si všechno pamatuje.
TVOJE SVĚTLO
REKORD
Zpět do pokoje
Tiše odejít
ZEĎ. POKOJ SI PAMATUJE.
s
Po tobě`.split('\n');
rows.hu=`CSENDES ÜGY / 01
ARCADE AZ EMLÉKEKRŐL
UTÁNAD
A szoba minden lépésedre emlékszik.<br>Egy nap követni kezd.
MINDEN, AMIT TESZEL, ITT MARAD
Lépj a szobába
Hogyan?
SZEMÉLYES REKORD
EGY UJJ · OFFLINE · HANGGAL MÉG JOBB
ÖSSZEGYŰJTVE
A SZOBA ENNYI IDŐ MÚLVA ELCSENDESÜL
SOROZAT
LÉPJ EGYET. NÉZZ HÁTRA.
Húzd az ujjad egy mezőnyi lépéshez. <b>Ne találkozz a visszhangoddal.</b>
KIS JÁTÉK NAGY GONDOLATOKHOZ
Hang
Irányítás
Lépés felfelé
Lépés balra
Lépés lefelé
Lépés jobbra
RÖVID ÚTMUTATÓ
A szoba<br>emlékszik.
<b>Húzd az ujjad</b> vagy koppints egy nyílra: egy mozdulat, egy lépés. A falak megállítanak.
Gyűjts fényeket. Mindegyik időt ad és növeli a következő sorozatot.
Öt lépés után követ a visszhangod. <b>Ne ütközz bele.</b> Emlékszik az utadra.
A sötét körök bútorok. Élj túl egy percet, és vigyél el minél több fényt.
Értem. Belépek ↗
Előbb körülnézek
VEGYÉL LEVEGŐT
A szoba<br>várhat.
%score% fényed van. A visszhangod is megállt.
Folytatás ↗
Csendes kilépés
ÚJ REKORD ✨
ELCSENDESEDETT A SZOBA
MOST MÁR KETTEN VAGYTOK
CSEND
TALÁLKOZTATOK
A szoba elcsendesedett. Nézd, mennyi fényt vittél magaddal.
A visszhangod ért oda előbb. A szoba mindenre emlékszik.
A FÉNYED
REKORD
Vissza a szobába
Csendes kilépés
FAL. A SZOBA EMLÉKSZIK.
mp
Utánad`.split('\n');
rows.bg=`ТИХО ДЕЛО / 01
АРКАДА ЗА СПОМЕНИ
СЛЕД ТЕБ
Стаята помни всяка твоя стъпка.<br>Един ден започва да те следва.
ВСИЧКО, КОЕТО ПРАВИШ, ОСТАВА
Влез в стаята
Как?
ЛИЧЕН РЕКОРД
ЕДИН ПРЪСТ · ОФЛАЙН · ПО-ДОБРЕ СЪС ЗВУК
СЪБРАНО
СТАЯТА ЩЕ ЗАТИХНЕ СЛЕД
СЕРИЯ
НАПРАВИ КРАЧКА. ОГЛЕДАЙ СЕ.
Плъзни, за да минеш едно поле. <b>Не срещай ехото си.</b>
МАЛКА ИГРА ЗА ГОЛЕМИ МИСЛИ
Звук
Управление
Стъпка нагоре
Стъпка наляво
Стъпка надолу
Стъпка надясно
КРАТКО РЪКОВОДСТВО
Стаята<br>помни.
<b>Плъзни</b> или натисни стрелка: едно движение, една стъпка. Стените те спират.
Събирай светлинки. Всяка добавя време и увеличава следващата серия.
След пет стъпки ехото те следва. <b>Не се блъскай в него.</b> Помни пътя ти.
Тъмните кръгове са мебели. Издържи минута и вземи колкото може повече светлина.
Разбрах. Влизам ↗
Първо ще разгледам
ПОЕМИ ДЪХ
Стаята<br>може да почака.
Имаш %score% светлинки. Ехото също спря.
Продължи ↗
Излез тихо
НОВ РЕКОРД ✨
СТАЯТА ЗАТИХНА
ВЕЧЕ СТЕ ДВАМА
ТИШИНА
СРЕЩНАХТЕ СЕ
Стаята затихна. Виж колко светлина успя да отнесеш.
Ехото ти стигна първо. Стаята помни всичко.
ТВОЯТА СВЕТЛИНА
РЕКОРД
Обратно в стаята
Излез тихо
СТЕНА. СТАЯТА ПОМНИ.
сек
След теб`.split('\n');
rows.el=`ΗΣΥΧΗ ΥΠΟΘΕΣΗ / 01
ARCADE ΜΝΗΜΗΣ
ΜΕΤΑ ΑΠΟ ΣΕΝΑ
Το δωμάτιο θυμάται κάθε σου βήμα.<br>Μια μέρα αρχίζει να σε ακολουθεί.
Ο,ΤΙ ΚΑΝΕΙΣ ΜΕΝΕΙ
Μπες στο δωμάτιο
Πώς;
ΠΡΟΣΩΠΙΚΟ ΡΕΚΟΡ
ΕΝΑ ΔΑΧΤΥΛΟ · ΧΩΡΙΣ ΣΥΝΔΕΣΗ · ΚΑΛΥΤΕΡΑ ΜΕ ΗΧΟ
ΣΥΛΛΕΧΘΗΚΑΝ
ΤΟ ΔΩΜΑΤΙΟ ΘΑ ΣΙΩΠΗΣΕΙ ΣΕ
ΣΕΙΡΑ
ΚΑΝΕ ΕΝΑ ΒΗΜΑ. ΚΟΙΤΑ ΠΙΣΩ.
Σύρε για να μετακινηθείς ένα κελί. <b>Μην συναντήσεις την ηχώ σου.</b>
ΕΝΑ ΜΙΚΡΟ ΠΑΙΧΝΙΔΙ ΓΙΑ ΜΕΓΑΛΕΣ ΣΚΕΨΕΙΣ
Ήχος
Χειρισμός
Βήμα πάνω
Βήμα αριστερά
Βήμα κάτω
Βήμα δεξιά
ΣΥΝΤΟΜΟΣ ΟΔΗΓΟΣ
Το δωμάτιο<br>θυμάται.
<b>Σύρε</b> ή πάτησε ένα βέλος: μία κίνηση, ένα βήμα. Οι τοίχοι σε σταματούν.
Μάζεψε φως. Κάθε φως προσθέτει χρόνο και αυξάνει την επόμενη σειρά σου.
Μετά από πέντε βήματα, η ηχώ σε ακολουθεί. <b>Μην πέσεις πάνω της.</b> Θυμάται τη διαδρομή.
Οι σκοτεινοί κύκλοι είναι έπιπλα. Άντεξε ένα λεπτό και πάρε όσο περισσότερο φως μπορείς.
Εντάξει. Μπαίνω ↗
Θα κοιτάξω πρώτα
ΠΑΡΕ ΜΙΑ ΑΝΑΣΑ
Το δωμάτιο<br>μπορεί να περιμένει.
Έχεις %score% φώτα. Η ηχώ σου σταμάτησε επίσης.
Συνέχεια ↗
Φύγε ήσυχα
ΝΕΟ ΡΕΚΟΡ ✨
ΤΟ ΔΩΜΑΤΙΟ ΣΙΩΠΗΣΕ
ΤΩΡΑ ΕΙΣΤΕ ΔΥΟ
ΣΙΩΠΗ
ΣΥΝΑΝΤΗΘΗΚΑΤΕ
Το δωμάτιο σιώπησε. Δες πόσο φως κατάφερες να πάρεις.
Η ηχώ σου έφτασε πρώτη. Το δωμάτιο θυμάται τα πάντα.
ΤΟ ΦΩΣ ΣΟΥ
ΡΕΚΟΡ
Πίσω στο δωμάτιο
Φύγε ήσυχα
ΤΟΙΧΟΣ. ΤΟ ΔΩΜΑΤΙΟ ΘΥΜΑΤΑΙ.
δ
Μετά από σένα`.split('\n');
rows.he=`עניין שקט / 01
משחק ארקייד על זיכרון
אחריך
החדר זוכר כל צעד שלך.<br>יום אחד הוא מתחיל ללכת בעקבותיך.
כל מה שעשית נשאר
להיכנס לחדר
איך?
שיא אישי
אצבע אחת · לא מקוון · כיף יותר עם צליל
נאספו
החדר ישתתק בעוד
רצף
קח צעד. הסתכל לאחור.
החלק כדי לזוז משבצת אחת. <b>אל תפגוש את ההד שלך.</b>
משחק קטן לרעיונות גדולים
צליל
בקרות
צעד למעלה
צעד שמאלה
צעד למטה
צעד ימינה
מדריך קצר
החדר<br>זוכר.
<b>החלק</b> או הקש על חץ: תנועה אחת, צעד אחד. הקירות עוצרים אותך.
אסוף אורות. כל אור מוסיף זמן ומשפר את הרצף הבא.
אחרי חמישה צעדים ההד שלך עוקב אחריך. <b>אל תתנגש בו.</b> הוא זוכר את הדרך.
העיגולים הכהים הם רהיטים. שרוד דקה וקח איתך כמה שיותר אור.
הבנתי. להיכנס ↗
קודם אסתכל
קח נשימה
החדר<br>יכול לחכות.
יש לך %score% אורות. גם ההד שלך עצר.
להמשיך ↗
לצאת בשקט
שיא חדש ✨
החדר השתתק
עכשיו אתם שניים
שקט
נפגשתם
החדר השתתק. תראה כמה אור הצלחת לקחת.
ההד שלך הגיע ראשון. החדר זוכר הכול.
האור שלך
שיא
חזרה לחדר
לצאת בשקט
קיר. החדר זוכר.
שנ׳
אחריך`.split('\n');
rows.fa=`کار آرام / ۰۱
بازی آرکید دربارهٔ خاطره
بعد از تو
اتاق تک‌تک قدم‌هایت را به یاد می‌سپارد.<br>روزی شروع به دنبال کردنت می‌کند.
هر کاری می‌کنی باقی می‌ماند
وارد اتاق شو
چطور؟
بهترین رکورد
با یک انگشت · آفلاین · با صدا بهتر است
جمع‌شده
اتاق تا این زمان ساکت می‌شود
زنجیره
یک قدم بردار. پشت سرت را نگاه کن.
برای رفتن یک خانه بکش. <b>با پژواک خودت روبه‌رو نشو.</b>
یک بازی کوچک برای فکرهای بزرگ
صدا
راهنما
یک قدم بالا
یک قدم چپ
یک قدم پایین
یک قدم راست
راهنمای کوتاه
اتاق<br>به یاد می‌سپارد.
<b>بکش</b> یا روی پیکان بزن: یک حرکت، یک خانه. دیوارها جلویت را می‌گیرند.
نورها را جمع کن. هرکدام زمان بیشتری می‌دهد و زنجیرهٔ بعدی را افزایش می‌دهد.
پس از پنج قدم پژواکت دنبالت می‌آید. <b>به آن برخورد نکن.</b> مسیرت را به یاد دارد.
دایره‌های تیره وسایل‌اند. یک دقیقه دوام بیاور و تا می‌توانی نور با خود ببر.
فهمیدم. وارد شو ↗
اول نگاهی می‌اندازم
نفسی تازه کن
اتاق<br>می‌تواند صبر کند.
%score% نور داری. پژواکت هم ایستاده است.
ادامه ↗
آرام بیرون برو
رکورد تازه ✨
اتاق ساکت شد
حالا دوتایید
سکوت
همدیگر را دیدید
اتاق ساکت شد. ببین چقدر نور توانستی با خود ببری.
پژواکت زودتر رسید. اتاق همه‌چیز را به یاد دارد.
نور تو
رکورد
بازگشت به اتاق
آرام بیرون برو
دیوار است. اتاق به یاد می‌سپارد.
ثانیه
بعد از تو`.split('\n');
rows.bn=`নীরব ব্যাপার / ০১
স্মৃতির আর্কেড
তোমার পরে
ঘর তোমার প্রতিটি পদক্ষেপ মনে রাখে।<br>একদিন, ঘর তোমার পিছু নিতে শুরু করে।
তোমার সব কাজ থেকে যায়
ঘরে প্রবেশ করো
কীভাবে?
ব্যক্তিগত সেরা
এক আঙুল · অফলাইন · শব্দসহ আরও ভালো
সংগৃহীত
ঘর নীরব হবে
ধারা
এক পা বাড়াও। পেছনে তাকাও।
এক ঘর এগোতে সোয়াইপ করো। <b>নিজের প্রতিধ্বনির মুখোমুখি হয়ো না।</b>
বড় ভাবনার জন্য ছোট্ট খেলা
শব্দ
নিয়ন্ত্রণ
ওপরে যাও
বামে যাও
নিচে যাও
ডানে যাও
সংক্ষিপ্ত নির্দেশিকা
ঘর<br>মনে রাখে।
<b>সোয়াইপ</b> করো বা তীরে ট্যাপ করো: একবারে এক পা। দেয়াল তোমাকে থামায়।
আলো কুড়িয়ে নাও। প্রতিটি আলো সময় বাড়ায় ও পরের ধারার গুণ বাড়ায়।
পাঁচ পা পর তোমার প্রতিধ্বনি পিছু নেবে। <b>তাতে ধাক্কা খেয়ো না।</b> সে তোমার পথ মনে রাখে।
অন্ধকার বৃত্তগুলো আসবাব। এক মিনিট টিকে থেকে যতটা সম্ভব আলো নিয়ে যাও।
বুঝেছি। প্রবেশ করি ↗
আগে একটু দেখি
একটু দম নাও
ঘর<br>অপেক্ষা করতে পারে।
তোমার কাছে %score%টি আলো আছে। প্রতিধ্বনিও থেমেছে।
চালিয়ে যাও ↗
চুপচাপ বের হও
নতুন রেকর্ড ✨
ঘর নীরব হলো
এখন তোমরা দুজন
নীরবতা
তোমাদের দেখা হয়েছে
ঘর নীরব হলো। দেখো, কত আলো নিয়ে যেতে পেরেছ।
তোমার প্রতিধ্বনি আগে পৌঁছেছে। ঘর সব মনে রাখে।
তোমার আলো
রেকর্ড
ঘরে ফিরে যাও
চুপচাপ বের হও
দেয়াল। ঘর মনে রাখে।
সে.
তোমার পরে`.split('\n');
rows.ms=`URUSAN SENYAP / 01
ARCADE TENTANG INGATAN
SELEPASMU
Bilik mengingati setiap langkahmu.<br>Suatu hari nanti, ia mula mengekori kamu.
SEMUA YANG KAMU LAKUKAN KEKAL
Masuk ke bilik
Bagaimana?
REKOD PERIBADI
SATU JARI · LUAR TALIAN · LEBIH SERONOK DENGAN BUNYI
DIKUMPULKAN
BILIK AKAN SENYAP DALAM
SIRI
LANGKAH SEKALI. TENGOK KE BELAKANG.
Leret untuk bergerak satu petak. <b>Jangan bertemu gema sendiri.</b>
PERMAINAN KECIL UNTUK FIKIRAN BESAR
Bunyi
Kawalan
Langkah ke atas
Langkah ke kiri
Langkah ke bawah
Langkah ke kanan
PANDUAN RINGKAS
Bilik<br>mengingati.
<b>Leret</b> atau ketik anak panah: satu gerakan, satu langkah. Dinding menghalangmu.
Kutip cahaya. Setiap satu menambah masa dan meningkatkan siri seterusnya.
Selepas lima langkah, gema mengekori kamu. <b>Jangan melanggarnya.</b> Ia ingat laluanmu.
Bulatan gelap ialah perabot. Bertahan seminit dan bawa sebanyak mungkin cahaya.
Faham. Masuk ↗
Saya lihat dahulu
TARIK NAFAS
Bilik<br>boleh menunggu.
Kamu ada %score% cahaya. Gema juga berhenti.
Teruskan ↗
Keluar senyap-senyap
REKOD BAHARU ✨
BILIK MENJADI SENYAP
KINI ADA DUA DIRI
SENYAP
KAMU BERTEMU
Bilik menjadi senyap. Lihat berapa banyak cahaya yang berjaya dibawa.
Gema kamu tiba dahulu. Bilik mengingati semuanya.
CAHAYAMU
REKOD
Kembali ke bilik
Keluar senyap-senyap
DINDING. BILIK MENGINGATI.
s
Selepasmu`.split('\n');
rows.fil=`TAHIMIK NA BAGAY / 01
ARCADE TUNGKOL SA ALAALA
PAGKARAAN MO
Naaalala ng silid ang bawat hakbang mo.<br>Isang araw, susundan ka nito.
NANANATILI ANG LAHAT NG GINAGAWA MO
Pumasok sa silid
Paano?
PINAKAMATAAS NA ISKOR
ISANG DALIRI · OFFLINE · MAS MASAYA MAY TUNOG
NAKOLEKTA
TATAHIM ANG SILID SA LOOB NG
SUNOD-SUNOD
HUMAKBANG. LINGON SA LIKOD.
Mag-swipe para umusad ng isang kahon. <b>Huwag salubungin ang alingawngaw mo.</b>
MALIIT NA LARO PARA SA MALALAKING IDEYA
Tunog
Mga kontrol
Hakbang pataas
Hakbang pakaliwa
Hakbang pababa
Hakbang pakanan
MAIKLING GABAY
Naaalala<br>ng silid.
<b>Mag-swipe</b> o pindutin ang palaso: isang galaw, isang hakbang. Pipigil sa iyo ang mga pader.
Mangolekta ng liwanag. Bawat isa ay dagdag-oras at pampalakas ng susunod na sunod-sunod.
Pagkaraan ng limang hakbang, susunod ang alingawngaw mo. <b>Huwag itong banggain.</b> Alam nito ang dinaanan mo.
Muwebles ang maiitim na bilog. Mabuhay nang isang minuto at mag-uwi ng maraming liwanag.
Nakuha ko. Pasok ↗
Tingin muna ako
HUMINGA MUNA
Maaaring<br>maghintay ang silid.
May %score% kang liwanag. Huminto rin ang alingawngaw mo.
Magpatuloy ↗
Umalis nang tahimik
BAGONG REKORD ✨
TUMAHIMIK ANG SILID
DALAWA NA KAYO
TAHIMIK
NAGKITA KAYO
Tumahimik ang silid. Tingnan kung gaano karaming liwanag ang naiuwi mo.
Nauna ang alingawngaw mo. Naaalala ng silid ang lahat.
LIWANAG MO
REKORD
Balik sa silid
Umalis nang tahimik
PADER. NAAALALA NG SILID.
s
Pagkaraan mo`.split('\n');
rows.sw=`JAMBO TULIVU / 01
MCHEZO WA KUMBUKUMBU
BAADA YAKO
Chumba kinakumbuka kila hatua yako.<br>Siku moja, kinaanza kukufuata.
KILA UNACHOFANYA HUBAKI
Ingia chumbani
Vipi?
REKODI BINAFSI
KIDOLE KIMOJA · BILA MTANDAO · SAUTI NI BORA
ZILIZOKUSANYWA
CHUMBA KITANYAMAZA BAADA YA
MLOLONGO
PIGA HATUA. GEUKA UANGALIE.
Telezesha ili kusonga mraba mmoja. <b>Usikutane na mwangwi wako.</b>
MCHEZO MDOGO WA MAWAZO MAKUBWA
Sauti
Vidhibiti
Hatua juu
Hatua kushoto
Hatua chini
Hatua kulia
MWONGOZO MFUPI
Chumba<br>kinakumbuka.
<b>Telezesha</b> au gusa mshale: hatua moja, nafasi moja. Kuta zitakuzuia.
Kusanya mwanga. Kila mwanga huongeza muda na kukuza mlolongo unaofuata.
Baada ya hatua tano, mwangwi wako utakufuata. <b>Usigongane nao.</b> Unakumbuka njia yako.
Duara za giza ni fanicha. Dumu dakika moja na uchukue mwanga mwingi uwezavyo.
Nimeelewa. Ingia ↗
Nitaangalia kwanza
VUTA PUMZI
Chumba<br>kinaweza kusubiri.
Una taa %score%. Mwangwi wako pia umesimama.
Endelea ↗
Ondoka kimya kimya
REKODI MPYA ✨
CHUMBA KIMENYAMAZA
SASA MNAKUWA WAWILI
UKIMYA
MMEKUTANA
Chumba kimenyamaza. Tazama mwanga wote ulioweza kubeba.
Mwangwi wako umefika kwanza. Chumba kinakumbuka kila kitu.
MWANGA WAKO
REKODI
Rudi chumbani
Ondoka kimya kimya
UKUTA. CHUMBA KINAKUMBUKA.
s
Baada yako`.split('\n');
const locales={};
for(const [code,line] of Object.entries(rows)){
 if(line.length!==keys.length) throw new Error(`${code}: expected ${keys.length} strings, got ${line.length}`);
 locales[code]=Object.fromEntries(keys.map((k,i)=>[k,line[i]]));
}
window.GAME_LOCALES=locales;
window.GAME_LOCALE_NAMES={en:'English',ru:'Русский',es:'Español',fr:'Français',de:'Deutsch',pt:'Português',it:'Italiano',ja:'日本語',ko:'한국어',zh:'中文',ar:'العربية',hi:'हिन्दी',id:'Bahasa Indonesia',tr:'Türkçe',uk:'Українська',pl:'Polski',vi:'Tiếng Việt',th:'ไทย',nl:'Nederlands',sv:'Svenska',da:'Dansk',no:'Norsk',fi:'Suomi',ro:'Română',cs:'Čeština',hu:'Magyar',bg:'Български',el:'Ελληνικά',he:'עברית',fa:'فارسی',bn:'বাংলা',ms:'Bahasa Melayu',fil:'Filipino',sw:'Kiswahili'};
})();
