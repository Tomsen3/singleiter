      var DEFAULT_SONGS = [
        {
          id: 1,
          titel: "Namaohm",
          capo: "II",
          akkorde: "Am G Am7/6 G Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Namahom",
        },
        {
          id: 2,
          titel: "the river is flowing",
          capo: "",
          akkorde: "Am G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "the river is flowing\nflowing and growing\nthe river is flowing\nback to the sea\nMother earth carry me,\nyour child I will always be\nmother earth carry me,",
        },
        {
          id: 3,
          titel: "so wie ein Baum",
          capo: "V",
          akkorde: "G C G Em A D C G D/F# Em G C D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "So wie ein Baum\neinzeln und frei\nso wie ein Wald\nbrüderlich sei\nHoch in den Himmel\nfrei zur Sonne hin\ntief in der Erde",
        },
        {
          id: 4,
          titel: "when I sing",
          capo: "",
          akkorde: "G C Am D G Em A Am D Dm G Cmaj7 Cm F G Em A Am D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "When I sing I feel alive in me\nwhen I sing I feel alive in you\nwhen I sing\nI feel alive in all my senses",
        },
        {
          id: 5,
          titel: "wo immer im Streit",
          capo: "III",
          akkorde: "Dmaj7 Gmaj7 Em A",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Wo immer im Streit\nbleibe bereit,\nlerne verzeihen\nWärme allein\nläßt den Samen der Hoffnung",
        },
        {
          id: 6,
          titel: "Epo i tai tai",
          capo: "",
          akkorde: "D G D D Bm A D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Epo i tai tai é\noh epo i tai tai é\nepo i tai tai\nepo i tuki tki",
        },
        {
          id: 7,
          titel: "Shalom Alechem",
          capo: "",
          akkorde: "C Am C Am Dm C Dm G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Shalom alechem\nShalom alechem\nShalom alechem\nShalom alechem\nShalom Shalom",
        },
        {
          id: 8,
          titel: "Alle macht die Sonne warm",
          capo: "",
          akkorde: "Em Am C B7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Alle macht die Sonne warm\nlasst uns tanzen Reich und Arm\nkomm lass uns singen\nob Groß oder Klein",
        },
        {
          id: 9,
          titel: "Be still my soul",
          capo: "",
          akkorde: "G Em Bm C D Em C D G G/F# Em D D7 G D7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Be still my soul be still\nbe still my soul be still\nand rest in the arms\nof the Lord of love",
        },
        {
          id: 10,
          titel: "evening rise",
          capo: "",
          akkorde: "Am E G Am F G Am E E G Am F G Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Evening rise Spirit come\nSun goes down\nwhen the day is done\nMother earth awakens me",
        },
        {
          id: 11,
          titel: "fest verwurzelt in der Erde",
          capo: "",
          akkorde: "Am D F G Am Kanon",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Fest verwurzelt in der Erde\noffen für die Schätze des Himmels   2X\nWie ein Baum im Gleichgewicht",
        },
        {
          id: 12,
          titel: "Heida",
          capo: "III",
          akkorde: "Em B7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "",
        },
        {
          id: 13,
          titel: "Eo wahi pana la",
          capo: "V",
          akkorde: "Am Em Am :I C G Am Em :I",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Eo Wahi Pana La\nEo Wahi Pana La\nEo Eo Eo Eo\nEo Eo Eo Eo",
        },
        {
          id: 14,
          titel: "Home is where my heart is",
          capo: "II",
          akkorde: "C G Am G C F Dm7 G:I",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "been travelling a day\nbeen travelling a year\nbeen travelling a lifetime\nto find my way home\nhome is where my heart is  3X",
        },
        {
          id: 15,
          titel: "breathe in the pain",
          capo: "",
          akkorde:
            "I: A Em7 A Em7 A F#m G Em A Em :I G D A F#m G D Bm7 Esus4 E7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I: Breathe in the pain\nBreathe on out the love\nLet my heart be a place\nWhere this world is changed forever :I\nThere is a way my spirit can pray\nFor the peace of everyone\nWith every breath I take\nmy heart is learning to make",
        },
        {
          id: 16,
          titel: "I am with you",
          capo: "5",
          akkorde: "G C G D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I am with you,\nthat I might heal\nYou are with me,\nthat you might heal\nWe are together,\nthat we might heal\nWe are healing,\nthat we might love",
        },
        {
          id: 17,
          titel: "Ide were were",
          capo: "",
          akkorde: "Am G Fmaj7 Am G Fmaj7 I Dm7 G Cmaj7 Am G E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ide were were nita Ochun\nIde were were\nIde were were nita Ochun\nIde were were nita ya\nOcha kiniba nita Ochun\nCheke cheke cheke",
        },
        {
          id: 18,
          titel: "la mar estaba srena",
          capo: "",
          akkorde: "Am Dm E Am E Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "La Mar estaba serena\nSerena estaba la mare\nLa Mar estaba serena\nSerena estaba la mare",
        },
        {
          id: 19,
          titel: "Reconciliation",
          capo: "",
          akkorde: "D G D G D G D A Em7 A Em7 A Em7 D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Reconcilia, Reconcilia\nReconciliation\nI am here today\nYou are here today\nWe are here today\nFor celebration",
        },
        {
          id: 20,
          titel: "Stille",
          capo: "II",
          akkorde: "C G F C Am Dm G C G F C Am Dm G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Stille komm hernieder bring mein Herz zur Ruh\nDeine Schwingen decken alle meine Wünsche zu\nNur der Ei-ne allein\nSoll der Wunsch",
        },
        {
          id: 21,
          titel: "Hold me hold me",
          capo: "",
          akkorde: "Am A Dm Am G C E7 Am A Dm Am G Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Hold me, hold me,\nnever let me go\nLike the leaves at the end of the branches\nAnd when I die let me fly, let me fly\nThrough the air",
        },
        {
          id: 22,
          titel: "round and round we dance",
          capo: "",
          akkorde: "Am Dm E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "round and round we dance\nwe hold each others hands\nweave our lives in a circle\nour love is strong",
        },
        {
          id: 23,
          titel: "Aven Roma",
          capo: "3",
          akkorde: "Am Dm E Am Dm E Am Am Dm E Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "",
        },
        {
          id: 24,
          titel: "Feel the blessing",
          capo: "3",
          akkorde:
            "G C D G D/F# Em C D G G C B7 Em7 I C D Bm Em C D Em C D Bm Em7 C D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Feel the blessing\nas it pours through you\nFeel the blessing nothing more to do\nFeel the blessing at the core of you\nI: Nothing that you need\nNothing that you need",
        },
        {
          id: 25,
          titel: "I give you space",
          capo: "",
          akkorde: "C F C Am Dm G C G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I give you space\nTo be who you are\nI shower you with love",
        },
        {
          id: 26,
          titel: "I step into the flow",
          capo: "",
          akkorde: "Dm F C Dm I Dm C Dm C Dm C Dm",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I: I step into the flow and then I let it go :I\n3X\nI open my mind my heart and my soul\nI surrender I surrender\nI open my mind my heart and my soul",
        },
        {
          id: 27,
          titel: "Ja Dan Duia",
          capo: "",
          akkorde: "G F",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ja Dan Duia\nJa Dan Duia\nJa Dan Daa Dan Daa Dan Deija",
        },
        {
          id: 28,
          titel: "Ja ich fühle Sinn",
          capo: "II",
          akkorde: "G D/F# Em Em7 C Am D I Em Em7 C Am D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ja ich fühle Sinn,\ngeb das Klagen hin\nUnd was vorher schwer,\nwandelt sich ins Mehr\nLiebe soll allein,\nZiel und Weg mir sein\nWunden werden dann",
        },
        {
          id: 29,
          titel: "Lei la la la lei",
          capo: "III",
          akkorde: "Am G C F C A7 Dm Am E7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "",
        },
        {
          id: 30,
          titel: "Lebe stark, lebe weit",
          capo: "",
          akkorde: "Cm G Cm Fm G Cm",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Lebe stark, lebe weit,\nlebe wild und lebe befreit 2X\nSturm und Wasser\nFeuer und Stein\nLaden Dich ein,",
        },
        {
          id: 31,
          titel: "Mother mother ocean heart",
          capo: "",
          akkorde:
            "3X Am Em Fmaj7 I C G Em Fmaj7 I Am Em7 Fmaj7 G Am Am Em F G Am",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Like a wave in the ocean\nLike a stream to the sea\nI am in you you are in me\nWe´ve been together forever it seems\nNow we awaken from all our dreams\nMother mother ocean heart\nshine your love on all the world",
        },
        {
          id: 32,
          titel: "I like the flowers",
          capo: "",
          akkorde: "D Bm G A7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I like the flowers\nI like the dafodiles\nI like the mountains\nI like the rolling hills\nI like the fireside\nwhen the light is low\nDum di da di dum di da di",
        },
        {
          id: 33,
          titel: "Sunrise",
          capo: "",
          akkorde: "D G D D G D A7 D G D G A7 D A7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Sunrise over the mountain\nspreading your light\nover the land\nSunrise another new morning\nwe celebrate\nwe are the new men",
        },
        {
          id: 34,
          titel: "the universe is singing a song",
          capo: "",
          akkorde: "D G A D Bm Em A D G A I: D G A7 :I G A7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "II:  the universe is singing a song\nthe universe is dancing along\nthe universe is singing\non a day like this  :II\nIt´s a high time to dance  3X",
        },
        {
          id: 35,
          titel: "I´m gonna rise up singing",
          capo: "",
          akkorde: "E E B7 A7 E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "every time I stumble and I fall\nI´m gonna rise up singing",
        },
        {
          id: 36,
          titel: "let it go",
          capo: "",
          akkorde: "C G F C F C G F",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "let it go let it out\nlet it all unravel\nlet it free and it can be",
        },
        {
          id: 37,
          titel: "Gut wieder hier zu sein",
          capo: "",
          akkorde: "D G D A G D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Nun Freunde lasst es, uns einmal sagen,\ngut wieder hier zu sein, gut uns zu seh`n.\nMit unsren Wünschen, mit unsren Fragen,\nfühl´n wir uns nicht allein,",
        },
        {
          id: 38,
          titel: "beweg dein Herz zum Hirn",
          capo: "",
          akkorde: "C G D Em C G D Am G D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Beweg Dein Herz zum Hirn\nschick beide auf die Reise\ntanz tanz tanz\naber dreh Dich nicht",
        },
        {
          id: 39,
          titel: "Andachtsjodler",
          capo: "",
          akkorde: "G D D7 G C D7 G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Tio tio rü dü\nTio tio rü dü\nTio tio rü dü",
        },
        {
          id: 40,
          titel: "Ungala",
          capo: "",
          akkorde: "F oder G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "",
        },
        {
          id: 41,
          titel: "Fliessen Fliessen",
          capo: "II",
          akkorde: "G D/F# Em Em /D C C/B Am D Em Em /D C C/B Am D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Fließen Fließen,\nFrieden schließen\nund den Wandel stets begrüßen\nWill ins Neue mich ergießen",
        },
        {
          id: 42,
          titel: "One bright morning",
          capo: "II",
          akkorde: "C C C F C",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I:One bright morning\nwhen my work is over\nwanna fly away home:I\nI:fly away like an eagle",
        },
        {
          id: 43,
          titel: "I´m calling you",
          capo: "II",
          akkorde: "4X C G:I Dm7 C/E G F C G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I: I´m calling you :I\nI: come back to me :I",
        },
        {
          id: 44,
          titel: "Om Sri Lakshmi",
          capo: "IV",
          akkorde: "G D Em C D :I Em D G C :I Am C G D :I",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I sing like the birds, I grow like the trees\nI choose to live in love, I am joy I am ease\nI: Om Sri Lakshmi Mahadevi Namaha :I\nI choose no more fear, I choose no more shame\nI choose to live in  love, I am light I am grace",
        },
        {
          id: 45,
          titel: "breathe and feel",
          capo: "",
          akkorde: "C Dm G C",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I:Breathe and feel you are alive:I",
        },
        {
          id: 46,
          titel: "Lache in die Welt hinein",
          capo: "",
          akkorde: "Am E E Am Am Dm",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Lache in die Welt hinein\nund sie lacht zurück,\nlache in die Welt hinein\nund spür das Glück!\nLache in die Welt hinein\nund du wirst sehn:\nDinge, die unmöglich waren",
        },
        {
          id: 47,
          titel: "E malama",
          capo: "",
          akkorde: "E C#m A E B7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "E malama ika heiau\nE malama ika heiau\nE malama pono ika heiau  E\nEarth and sky, sea and stone",
        },
        {
          id: 48,
          titel: "Ma te Aroha",
          capo: "",
          akkorde: "G C D7 G Em C D7 G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ma te aroha,\nMa te aroha",
        },
        {
          id: 49,
          titel: "ein Stück Himmel",
          capo: "III",
          akkorde: "G C9 G C9 Em Bm C9 D I G C9 G C9 G C9 D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I:Ein Stück Himmel überm Land\nmit der Sonne durchgebrannt\nein Stück Himmel für die Seele\nmeine Träume an der Hand :I\nI:Ja so will ich leben\nso will ich leben",
        },
        {
          id: 50,
          titel: "reise sanft",
          capo: "",
          akkorde: "G D D7 G C G Am D B7 Em C D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "reise sanft, reise leise, reise still.\nReise stark, reise laut und reise wild.\nReise weiter in das Zentrum Deines Seins,",
        },
        {
          id: 51,
          titel: "Meine Stimme wachse",
          capo: "",
          akkorde: "Bm E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Meine Stimme wachse.\ntöne mit Herz und Mut.\nDeine Stimme wachse.\ntöne mit Herz und Mut.\nUnsre Stimme wachse.",
        },
        {
          id: 52,
          titel: "wir sind verbunden",
          capo: "",
          akkorde: "Bm E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Meine Stimme wachse.\ntöne mit Herz und Mut.\nDeine Stimme wachse.\ntöne mit Herz und Mut.\nUnsre Stimme wachse.",
        },
        {
          id: 53,
          titel: "kommse rein",
          capo: "",
          akkorde: "Dm G7add9 Dm A7 Dm G7 A7#5 Dm",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Kommense rein\nkönnen se rausgucken\nKommense rein\nkönnen se rausgucken\nKommense rein\nkönnen se rausgucken",
        },
        {
          id: 54,
          titel: "ein kleines Lied",
          capo: "II",
          akkorde: "C G Am D G:I Em Am F G Em Am F G :I",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "ein kleines Lied, ein klitzekleines Lied\nein kleines Lied jeden Tag  2X\nändert Dein Leben\nund es bleibt nichts wie es war\nändert Dein Leben",
        },
        {
          id: 55,
          titel: "der Atem des Frühlings",
          capo: "III",
          akkorde: "G9 Am7 C9 D9 G:I: Am7 G/D Am7 G/D :I",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Im Wind kommt und geht\nder Atem des Frühlings.\nWachsen der Seele Flügel dann\nFängt auch mein eigner Frühling an.\nIm Wind kommt und geht\nder Atem des Frühlings.\nWachsen der Seele Flügel dann\nFängt auch mein eigner Frühling an.",
        },
        {
          id: 56,
          titel: "ich atme tief",
          capo: "II",
          akkorde: "G Am7 Bm7 Cmaj7 Am7 Bm7 C G Am7 Bm7 Cmaj7 G Am7 Csus4 G C",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ich atme tief tief tief\natme das Leben in mich hinein\nIch atme tief tief tief\nLeben fließt in mich hinein\nI:ein und aus, ein und aus, ein und aus:I\nIch atme tief tief tief\natme das Leben in mich hinein\nIch atme tief tief tief\nLeben fließt in mich hinein",
        },
        {
          id: 57,
          titel: "lass die Sonne",
          capo: "II",
          akkorde: "G D/F# Em C9 I D Em D Em",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Lass die Sonne\nLass die Sonne in Dein Herz\nDie Sonne in Dein Herz\nvertrau Dich ihr an\nweil sie Dich wärmen kann\nstell Dich in ihr Licht\ndenn sie vergißt Dich nicht\nDenn sie liebt uns alle gleich\nsie liebt uns alle gleich",
        },
        {
          id: 58,
          titel: "Nur Mut",
          capo: "II",
          akkorde: "Dm A7 A7 Dm A7 Gm Dm I Gm Dm Gm Dm Gm Dm A7 Dm",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I:Nur Mut Singen tut gut\nNur Mut singen Singen macht Freude\nNur Mut Singen tut gut\nund bewegst Du Dich dazu ist es noch einmal so schön:I\nStimulieren, erden und zentrieren\nKopf verlieren, dudl dudl dong\nfokussieren, spielen neu kreieren\nAlles das findest Du in einem Body-Song\nI:Nur Mut Singen tut gut\nNur Mut singen Singen macht Freude\nNur Mut Singen tut gut\nund bewegst Du Dich dazu ist es noch einmal so schön:I\nStimulieren, erden und zentrieren\nKopf verlieren, dudl dudl dong\nfokussieren, spielen neu kreieren",
        },
        {
          id: 59,
          titel: "Spirit oft he Wind",
          capo: "",
          akkorde: "Em D Em D Em D C D Em D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Spirit of the Wind carry me home\nSpirit of the Wind carry me\nSpirit of the Wind carry me home to my soul",
        },
        {
          id: 60,
          titel: "Ich nehme mir die Zeit",
          capo: "",
          akkorde: "D Am G D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ich nehme mir die Zeit und bin einfach da\ngenieß die Langsamkeit und ich sage ja\nin diesem Augenblick\nbin ich Eins mit dem Leben\nmit jedem neuen Schritt\nkommt es mir entgegen",
        },
        {
          id: 61,
          titel: "Ich lass mich in Ruhe",
          capo: "",
          akkorde: "D G D I D G D I D G D G I G D G D G D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Ich lass mich in Ruhe,\nlass mich einfach sein\nleg mich auf die Erde\nund bin nicht allein\nLass mich von ihr tragen,\nlege meine Fragen\nganz in sie hinein, ganz in sie hinein,\nganz in sie hinein\nIch lass mich in Ruhe,\nlass mich einfach sein\nleg mich auf die Erde\nund bin nicht allein\nLass mich von ihr tragen,\nlege meine Fragen\nganz in sie hinein, ganz in sie hinein,",
        },
        {
          id: 62,
          titel: "Mach das Jetzt zum roten Faden",
          capo: "",
          akkorde: "4x Gmaj7 Dmaj7 I Em F#m G F#m Bm G A D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Mach das Jetzt zum roten Faden\nder zu Dir nach Hause führt\nund Deine ungelösten Fragen\nzu einem Lied das Dich berührt\nDeine Sehsucht ist Dein Wecker\nund Dein Stolpern wird zum Tanz\nI:Hast Du wieder keinen Plan\nfang nochmal von vorne an:I\nMach das Jetzt zum roten Faden\nder zu Dir nach Hause führt\nund Deine ungelösten Fragen\nzu einem Lied das Dich berührt\nDeine Sehsucht ist Dein Wecker\nund Dein Stolpern wird zum Tanz\nI:Hast Du wieder keinen Plan",
        },
        {
          id: 63,
          titel: "Du machst nichts falsch",
          capo: "",
          akkorde: "C Am F G C Am F G C I C G Am F G C Am F G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Du machst nichts falsch in Deinem Leben\nso wie es ist, so ist es eben\nnimm Dein Herz in beide Hände\nDu wirst sehen es spricht Bände\nDinge kommen, Dinge gehen\nwer soll das nochmal versteh´n\nhab die Kontrolle längst verloren,\ndoch Vertrauen wird geboren\nI:Der Rhythmus gibt mir Halt, die Stimmen wärmen mich,",
        },
        {
          id: 64,
          titel: "Ich bin schön wenn ich singe",
          capo: "",
          akkorde: "Em Am D7 G B7 I Am Bm C B7",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "I:Ich bin schön wenn ich singe\nja dann lacht mein Gesicht\nund mein  Herz fängt an zu glüh´n :I\nIch fühle mich frei\ndie Gedanken kreisen nicht",
        },
        {
          id: 65,
          titel: "Nach und Nach",
          capo: "",
          akkorde: "Am C G E Am C G I F G C Am Dm G E",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Nach und nach kommen alle Dinge zur Ruhe\nNach und nach ergibt es einen Sinn\nNach und nach, dann und wann\nheute, morgen, irgendwann\nfindet alles seinen Platz\nNach und nach kommen alle Dinge zur Ruhe\nNach und nach ergibt es einen Sinn\nNach und nach, dann und wann\nheute, morgen, irgendwann",
        },
        {
          id: 66,
          titel: "In mir klopft es",
          capo: "",
          akkorde: "5/4 Em C G B7 Em C B7 Em I Em Am D G C Am B7 Em",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "In meinem Herzen wohnen\nviele Träume viele Lieder\nunermüdlich klopft es\nund ich lausche was es will\nIn meinem Herzen wohnen\nviele Träume viele Lieder\nmanchmal ist es fröhlich,\nmanchmal traurig, manchmal still\nlei lei lei lei la\nIn meinem Herzen wohnen\nviele Träume viele Lieder\nunermüdlich klopft es\nund ich lausche was es will\nIn meinem Herzen wohnen\nviele Träume viele Lieder\nmanchmal ist es fröhlich,\nmanchmal traurig, manchmal still",
        },
        {
          id: 67,
          titel: "Salaleo",
          capo: "",
          akkorde: "D G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Salaleo Salale´hidra\nSalaleo Salale´hidra\nSalale´Mama deo Salale´hidra\nSalale´Mama deo Salale´hidra\nSalaleo Salale´hidra\nSalaleo Salale´hidra\nSalale´Mama deo Salale´hidra",
        },
        {
          id: 68,
          titel: "es darf sein",
          capo: "",
          akkorde: "D A G D G A D",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Es darf sein, das was ist\nund was ist das darf sein\nund selbst wenn´s nicht sein darf\ndarf auch das sein\nEs darf sein, das was ist\nund was ist das darf sein\nund selbst wenn´s nicht sein darf\ndarf auch das sein",
        },
        {
          id: 69,
          titel: "Sonne liebe Sonne",
          capo: "",
          akkorde: "C Am F G C Am D7 G I Gm C F Dm D7 G",
          stimmung: "verbindend",
          zielgruppe: "alle",
          schwierigkeit: "einfach",
          text: "Sonne liebe Sonne\nDu strahlst mich fröhlich an\nund ich strahl zu Dir zurück\nweil ich nicht anders kann\npure Lebensfreude, die uns gefällt\nwir strahlen um die Wette\nerhellen diese Welt\nSonne liebe Sonne\nDu strahlst mich fröhlich an\nund ich strahl zu Dir zurück\nweil ich nicht anders kann n\npure Lebensfreude, die uns gefällt\nwir strahlen um die Wette",
        },
      ];
      // ============================================================
      // HANDBUCH DATA
      // ============================================================
      var HANDBUCH_DATA = [
        {
          titel: "\uD83D\uDE10 Umgang mit Widerstand",
          inhalt:
            'Widerstand ist oft kein Nein zur Musik \u2013 sondern ein Nein zu Druck oder Unsicherheit.\n\nWas hilft:\n- Einladung statt Aufforderung formulieren\n- Beobachtende Haltung: "Hoeren reicht auch voellig."\n- Bei koerperlichem Widerstand: Rhythmus anbieten',
          formulierungen: [
            "\u201eSie muessen gar nichts \u2013 schauen Sie einfach zu, das ist auch schoen.\u201c",
            "\u201eVielleicht kommt's ja noch \u2013 kein Druck.\u201c",
            "\u201eDarf ich mal Ihre Hand nehmen und den Rhythmus zeigen?\u201c",
          ],
        },
        {
          titel: "\uD83D\uDE34 Umgang mit Müdigkeit",
          inhalt:
            "Müdigkeit ist ein Signal \u2013 sie zu übergehen kostet Vertrauen.\n\nWas hilft:\n- Tempo reduzieren, Stille zulassen\n- Ruhiges, bekanntes Lied einwerfen\n- Atempause explizit anbieten",
          formulierungen: [
            "\u201eMerke ich, dass die Energie gerade nicht so da ist \u2013 dann machen wir's etwas ruhiger.\u201c",
            "\u201eEin Lied noch, dann darf auch die Stimme Pause machen.\u201c",
            "\u201eWir atmen jetzt alle kurz gemeinsam durch.\u201c",
          ],
        },
        {
          titel: "\uD83C\uDF0A Umgang mit Unruhe",
          inhalt:
            "Unruhe braucht zuerst Struktur, dann Beruhigung \u2013 nicht sofort Leise.\n\nWas hilft:\n- Rhythmisches Element einwerfen (Klatschen, Stampfen)\n- Klare, ruhige Stimme \u2013 nicht lauter werden\n- Koerperliche Orientierung anbieten",
          formulierungen: [
            "\u201eAlle mal kurz auf die Füße schauen \u2013 spürt ihr den Boden?\u201c",
            "\u201eIch klatsch einmal \u2013 und ihr macht mit, wenn ihr mögt.\u201c",
            "\u201eWir fangen alle zusammen an \u2013 bereit?\u201c",
          ],
        },
        {
          titel: "\uD83C\uDFB5 Übergänge gestalten",
          inhalt:
            "Der Übergang zwischen Liedern ist entscheidend für den Fluss der Stunde.\n\nPrinzip: Verbinden, nicht springen.",
          formulierungen: [
            "\u201eDas hat gut geklungen \u2013 und das naechste Lied passt da wunderbar dazu.\u201c",
            "\u201eJetzt wechseln wir die Stimmung ein bisschen...\u201c",
            "\u201eKurze Pause \u2013 dann starten wir mit etwas Neuem.\u201c",
          ],
        },
        {
          titel: "\uD83D\uDE80 Einstiegssaetze",
          inhalt:
            "Die ersten 60 Sekunden entscheiden über die Gruppenstimmung.",
          formulierungen: [
            "\u201eSchoen, dass Sie alle da sind \u2013 fangen wir einfach an.\u201c",
            "\u201eKeine Angst vor falschen Toenen \u2013 die gibt es hier nicht.\u201c",
            "\u201eWir singen heute einfach zusammen \u2013 das zaehlt, nicht die Stimme.\u201c",
          ],
        },
      ];

          // ============================================================
      // SUPABASE
      // ============================================================
      var SUPABASE_URL = "https://cnlgpviurgpxcrjtfxqi.supabase.co";
      var SUPABASE_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubGdwdml1cmdweGNyanRmeHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjExMjQsImV4cCI6MjA4ODMzNzEyNH0.FQ842Ete0xJ1MgCM0aBejDVkBL15-OaCGuN_0Cu80Og";
      var sb = null;

      function initSupabase() {
        try {
          sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        } catch (e) {
          sb = null;
        }
      }

      function getScrollEl() {
        // Findet das tatsaechlich scrollende Element
        var els = [document.documentElement, document.body, document.getElementById('view-repertoire')];
        for (var i = 0; i < els.length; i++) {
          if (els[i] && els[i].scrollTop > 0) return els[i];
        }
        return document.documentElement;
      }

      function getScrollPos() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }

      function setScrollPos(pos) {
        window.scrollTo(0, pos);
        document.documentElement.scrollTop = pos;
        document.body.scrollTop = pos;
        var vr = document.getElementById('view-repertoire');
        if (vr) vr.scrollTop = pos;
      }

      function appSongToDb(song) {
        var parts = (song.tonart || "").split("-");
        return {
          id: song.supabase_id || undefined,
          titel: song.titel || "",
          komponist: song.komponist || "",
          tonart_grundton: parts[0] || "",
          tonart_modus: parts[1] || "",
          capo: song.capo || "",
          akkorde: song.akkorde || "",
          text: song.text || "",
          notizen: song.notizen || "",
          noten_abc: song.noten_abc || "",
          sprache: song.sprache || "",
          land: song.land || "",
          kategorie: song.kategorie || "",
          stimmung: song.stimmung || "",
        };
      }

      function dbSongToApp(row) {
        var tonart = row.tonart_grundton
          ? row.tonart_grundton +
            (row.tonart_modus ? "-" + row.tonart_modus : "")
          : "";
        return {
          id: row._local_id || Date.now() + Math.floor(Math.random() * 10000),
          supabase_id: row.id,
          titel: row.titel || "",
          komponist: row.komponist || "",
          tonart: tonart,
          capo: row.capo || "",
          akkorde: row.akkorde || "",
          text: row.text || "",
          notizen: row.notizen || "",
          noten_abc: row.noten_abc || "",
          sprache: row.sprache || "",
          land: row.land || "",
          kategorie: row.kategorie || "",
          stimmung: row.stimmung || "",
        };
      }

      async function ladeVonSupabase() {
        if (!sb) return null;
        try {
          var res = await sb
            .from("lieder")
            .select("*")
            .order("titel", { ascending: true });
          if (res.error) return null;
          return res.data;
        } catch (e) {
          return null;
        }
      }

      async function speichereInSupabase(song) {
        if (!sb) return null;
        try {
          var dbSong = appSongToDb(song);
          if (song.supabase_id) {
            dbSong.id = song.supabase_id;
            var res = await sb.from("lieder").upsert(dbSong).select();
            return res.error ? null : res.data[0];
          } else {
            delete dbSong.id;
            var res = await sb.from("lieder").insert(dbSong).select();
            return res.error ? null : res.data[0];
          }
        } catch (e) {
          return null;
        }
      }

      function canSyncSongsNow() {
        return !!sb && navigator.onLine !== false;
      }

      function normalizeSongSyncState(song) {
        if (!song) return song;
        if (!song.sync_status) {
          song.sync_status = song.supabase_id ? "synced" : "pending";
        }
        if (!song.sync_updated_at) song.sync_updated_at = new Date().toISOString();
        if (!song.sync_error) song.sync_error = "";
        return song;
      }

      function songHasPendingSync(song) {
        var status = (song && song.sync_status) || "";
        return status === "local" || status === "pending" || status === "syncing" || status === "error";
      }

      function markSongSyncStatus(song, status, message) {
        if (!song) return;
        song.sync_status = status;
        song.sync_error = message || "";
        song.sync_updated_at = new Date().toISOString();
      }

      function getSongSyncLabel(song) {
        normalizeSongSyncState(song);
        if (song.sync_status === "synced") return "Synchronisiert";
        if (song.sync_status === "syncing") return "Sync läuft";
        if (song.sync_status === "error") return "Fehler beim Sync";
        if (song.sync_status === "local") return "Gespeichert lokal";
        return "Sync ausstehend";
      }

      function getSongSyncClass(song) {
        normalizeSongSyncState(song);
        if (song.sync_status === "synced") return "ok";
        if (song.sync_status === "syncing") return "busy";
        if (song.sync_status === "error") return "error";
        return "warn";
      }

      function renderSongSyncBadge(song) {
        var label = getSongSyncLabel(song);
        var title = song.sync_error ? label + ": " + song.sync_error : label;
        return (
          '<span class="sync-badge ' +
          getSongSyncClass(song) +
          '" title="' +
          escHtml(title) +
          '">' +
          escHtml(label) +
          "</span>"
        );
      }

      function syncPendingSongs() {
        if (!canSyncSongsNow()) return Promise.resolve();
        var pending = state.songs.filter(function (song) {
          normalizeSongSyncState(song);
          return song.sync_status === "pending" || song.sync_status === "local" || song.sync_status === "error";
        });
        if (!pending.length) return Promise.resolve();
        return pending.reduce(function (chain, song) {
          return chain.then(function () {
            markSongSyncStatus(song, "syncing", "");
            saveToStorage();
            renderSongListIfVisible();
            return speichereInSupabase(song).then(function (row) {
              if (row) {
                song.supabase_id = row.id;
                markSongSyncStatus(song, "synced", "");
              } else {
                markSongSyncStatus(song, "error", "Supabase konnte das Lied nicht speichern.");
              }
              saveToStorage();
              renderSongListIfVisible();
              if (state.currentSong && state.currentSong.id === song.id) renderDetail();
            });
          });
        }, Promise.resolve());
      }

      function renderSongListIfVisible() {
        var listView = document.getElementById("song-list-view");
        if (!listView || listView.style.display === "none") return;
        var search = document.getElementById("search-input");
        var hasSearch = search && search.value;
        var hasFilter = [
          "filter-sprache",
          "filter-land",
          "filter-kategorie",
          "filter-stimmung",
          "filter-favoriten",
          "filter-mit-noten",
          "filter-ohne-sprache",
          "filter-ohne-kategorie",
        ].some(function (id) {
          var el = document.getElementById(id);
          return el && (el.checked || el.value);
        });
        if (hasSearch || hasFilter) filterSongs();
        else renderSongList();
      }

      async function loescheInSupabase(supabaseId) {
        if (!sb || !supabaseId) return;
        try {
          await sb.from("lieder").delete().eq("id", supabaseId);
        } catch (e) {}
      }
      async function speichereListenInSupabase() {
        if (!sb) return;
        try {
          await sb.from("einstellungen").upsert({
            id: "singleiter_listen",
            wert: state.listen,
            aktualisiert_am: new Date().toISOString()
          });
        } catch (e) {}
      }

      async function ladeListenVonSupabase() {
        if (!sb) return;
        try {
          var res = await sb
            .from("einstellungen")
            .select("wert")
            .eq("id", "singleiter_listen")
            .single();
          if (res.error || !res.data) return;
          var geladen = res.data.wert;
          if (geladen.sprachen && geladen.sprachen.length > 0)
            mergeListenwerte("sprachen", geladen.sprachen);
          if (geladen.laender && geladen.laender.length > 0)
            mergeListenwerte("laender", geladen.laender);
          if (geladen.kategorien && geladen.kategorien.length > 0)
            mergeListenwerte("kategorien", geladen.kategorien);
          normalisiereListenUndSongMetadaten();
          saveToStorage();
          speichereListenInSupabase();
          if (document.getElementById("listenverwaltung")) renderEinstellungen();
          befuelleFilterDropdowns();
          befuelleFormularDropdowns();
        } catch (e) {}
      }

      // ============================================================
      // STATE
      // ============================================================
      var state = {
        songs: [],
        favoriten: [],
        spickListe: [],
        setlists: [],
        currentSong: null,
        spickIndex: 0,
        spickFontScale: 1,
        _spickSingle: null,
        listen: {
          sprachen: [
            "Deutsch",
            "Englisch",
            "Franzoesisch",
            "Spanisch",
            "Italienisch",
            "Latein",
            "Sonstiges",
          ],
          laender: [
            "Deutschland",
            "Oesterreich",
            "Schweiz",
            "USA",
            "Irland",
            "Suedafrika",
            "Indien",
            "Sonstiges",
          ],
          kategorien: [
            "Kanon",
            "Volkslied",
            "Spiritual",
            "Mantra",
            "Eigenes",
            "Warmup",
            "Abschluss",
            "Sonstiges",
          ],
        },
      };
      var editSetlistId = null;
      var liedSuchModus = "";
      var pendingImportData = null;
      var SONG_DRAFT_KEY = "singleiter_song_form_draft_v1";
      var songDraftTimer = null;
      var pendingSongDraft = null;
      var setlistDragContext = null;
      var dialogStack = [];

      // ============================================================
      // INIT & STORAGE
      // ============================================================
       function init() {
        initSupabase();
        loadFromStorage();
        renderSongList();
        renderSetlists();
        renderFavoriten();
        ladeHandbuchVonSupabase();
        syncVonSupabase().then(function () {
          syncPendingSongs();
        });
        ladeListenVonSupabase();
        setupSongFormAutosave();
        setupDialogKeyboardHandling();
        updateOfflineStatus();
        window.addEventListener("online", function () {
          updateOfflineStatus();
          syncPendingSongs();
        });
        window.addEventListener("offline", updateOfflineStatus);
      }
      function zuRoemisch(val) {
        if (!val) return "";
        var s = String(val).trim().toUpperCase();
        var roemisch = [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
          "XII",
        ];
        if (roemisch.indexOf(s) !== -1) return s;
        var n = parseInt(s);
        if (!isNaN(n) && n >= 1 && n <= 12) return roemisch[n - 1];
        return s;
      }
      function syncVonSupabase() {
        return ladeVonSupabase().then(function (rows) {
          if (!rows) return; // offline oder Fehler â€“ localStorage bleibt
          if (rows.length === 0) {
            // Supabase leer: App-Lieder hochladen (einmalige Migration)
            return migriereLiederNachSupabase();
          }
          // Supabase hat Daten: lokale IDs bewahren, supabase_id zuordnen
          var neueSongs = rows.map(function (row) {
            var vorhandener = state.songs.find(function (s) {
              return s.supabase_id === row.id;
            });
            var appSong = dbSongToApp(row);
            if (vorhandener) {
              if (songHasPendingSync(vorhandener)) {
                return vorhandener;
              }
              appSong.id = vorhandener.id;
             // Supabase-Daten haben beim Sync Vorrang (sind die kanonische Quelle)
              // Lokale Werte werden nur verwendet, wenn Supabase keinen Wert hat
              appSong.capo = appSong.capo || vorhandener.capo;
              appSong.akkorde = appSong.akkorde || vorhandener.akkorde;
              appSong.text = appSong.text || vorhandener.text;
              appSong.notizen = appSong.notizen || vorhandener.notizen;
              appSong.noten_abc = appSong.noten_abc || vorhandener.noten_abc;
              appSong.sprache = appSong.sprache || vorhandener.sprache;
              appSong.land = appSong.land || vorhandener.land;
              appSong.kategorie = appSong.kategorie || vorhandener.kategorie;
              appSong.stimmung = appSong.stimmung || vorhandener.stimmung;
              appSong.sync_status = "synced";
              appSong.sync_error = "";
              appSong.sync_updated_at = vorhandener.sync_updated_at || new Date().toISOString();
          } else {
              appSong.id = Date.now() + Math.floor(Math.random() * 10000);
              appSong.sync_status = "synced";
              appSong.sync_error = "";
              appSong.sync_updated_at = new Date().toISOString();
            }
            return appSong;
          });
          state.songs.forEach(function (localSong) {
            var inRemote = localSong.supabase_id && rows.some(function (row) {
              return row.id === localSong.supabase_id;
            });
            if (!inRemote) neueSongs.push(normalizeSongSyncState(localSong));
          });
          state.songs = neueSongs;
          // Capo normalisieren nach Sync
          state.songs.forEach(function (s) {
            s.capo = zuRoemisch(s.capo);
          });
          normalisiereListenUndSongMetadaten();
          // spickListe und setlists IDs anpassen
          var idMap = {};
          rows.forEach(function (row) {
            var appSong = neueSongs.find(function (s) {
              return s.supabase_id === row.id;
            });
            if (appSong) idMap[row.id] = appSong.id;
          });
          // alte localStorage-IDs auf neue App-IDs mappen
          var alteSongs =
            JSON.parse(localStorage.getItem("singleiter_data_v2") || "{}")
              .songs || [];
          alteSongs.forEach(function (alt) {
            if (alt.supabase_id && idMap[alt.supabase_id]) {
              idMap[alt.id] = idMap[alt.supabase_id];
            }
          });
          state.spickListe = state.spickListe.map(function (id) {
            return idMap[id] || id;
          });
          state.setlists.forEach(function (sl) {
            sl.songs = sl.songs.map(function (id) {
              return idMap[id] || id;
            });
          });
          // listen NICHT Ã¼berschreiben â€“ werden separat via ladeListenVonSupabase geladen
          var aktListen = state.listen;
          saveToStorage();
          state.listen = aktListen;
          // renderSongList nur wenn wir nicht gerade in der Detailansicht sind
          var detailOffen = document.getElementById("song-detail-view") &&
                            document.getElementById("song-detail-view").classList.contains("open");
          if (!detailOffen) {
            renderSongList();
          }
          showToast(neueSongs.length + " Lieder geladen");
        });
      }

      async function migriereLiederNachSupabase() {
        var total = 0;
        for (var i = 0; i < state.songs.length; i++) {
          var song = state.songs[i];
          if (song.supabase_id) continue;
          var row = await speichereInSupabase(song);
          if (row) {
            song.supabase_id = row.id;
            markSongSyncStatus(song, "synced", "");
            total++;
          } else {
            markSongSyncStatus(song, canSyncSongsNow() ? "error" : "pending", "Migration nicht synchronisiert.");
          }
        }
        saveToStorage();
        showToast(total + " Lieder nach Supabase migriert");
      }

      function loadFromStorage() {
        var saved = localStorage.getItem("singleiter_data_v2");
        var spickFont = parseFloat(
          localStorage.getItem("singleiter_spick_font_scale") || "1",
        );
        if (!isNaN(spickFont)) {
          state.spickFontScale = Math.max(0.8, Math.min(1.6, spickFont));
        }
        if (saved) {
          try {
            var parsed = JSON.parse(saved);
            state.songs =
              parsed.songs || JSON.parse(JSON.stringify(DEFAULT_SONGS));
            state.favoriten = parsed.favoriten || [];
            state.spickListe = parsed.spickListe || parsed.setlist || [];
            state.setlists = parsed.setlists || [];
            if (parsed.listen) {
              state.listen.sprachen =
                parsed.listen.sprachen || state.listen.sprachen;
              state.listen.laender =
                parsed.listen.laender || state.listen.laender;
              state.listen.kategorien =
                parsed.listen.kategorien || state.listen.kategorien;
            }
          } catch (e) {
            state.songs = JSON.parse(JSON.stringify(DEFAULT_SONGS));
          }
        } else {
          state.songs = JSON.parse(JSON.stringify(DEFAULT_SONGS));
        }
        // Capo-Werte normalisieren: arabisch -> roemisch
        state.songs.forEach(function (s) {
          s.capo = zuRoemisch(s.capo);
          normalizeSongSyncState(s);
          if (s.sync_status === "syncing") s.sync_status = "pending";
        });
        normalisiereListenUndSongMetadaten();
        normalizeSetlists();
      }

      function normalizeSetlists() {
        state.setlists = (state.setlists || []).map(function (sl) {
          sl.songs = Array.isArray(sl.songs) ? sl.songs : [];
          sl.durations = sl.durations || {};
          sl.used_at = sl.used_at || "";
          sl.created_at = sl.created_at || "";
          return sl;
        });
      }

      function saveToStorage() {
        localStorage.setItem(
          "singleiter_data_v2",
          JSON.stringify({
            songs: state.songs,
            favoriten: state.favoriten,
            spickListe: state.spickListe,
            setlists: state.setlists,
            listen: state.listen,
          }),
        );
      }

      function setupDialogKeyboardHandling() {
        document.addEventListener("keydown", function (event) {
          if (!dialogStack.length) return;
          var top = dialogStack[dialogStack.length - 1];
          if (!top || !top.el) return;
          if (event.key === "Escape") {
            event.preventDefault();
            if (top.closeFn && typeof window[top.closeFn] === "function") {
              window[top.closeFn]();
            } else {
              closeDialog(top.id);
            }
            return;
          }
          if (event.key === "Tab") trapDialogFocus(event, top.el);
        });
      }

      function getFocusableInDialog(el) {
        return Array.prototype.slice
          .call(
            el.querySelectorAll(
              'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
          .filter(function (node) {
            return !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
          });
      }

      function trapDialogFocus(event, el) {
        var focusables = getFocusableInDialog(el);
        if (!focusables.length) {
          event.preventDefault();
          el.focus();
          return;
        }
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      function openDialog(id, mode, closeFn, initialFocusSelector) {
        var el = document.getElementById(id);
        if (!el) return;
        var opener = document.activeElement && document.activeElement !== document.body
          ? document.activeElement
          : null;
        dialogStack = dialogStack.filter(function (d) {
          return d.id !== id;
        });
        if (mode === "class") el.classList.add("open");
        else el.style.display = "block";
        el.setAttribute("aria-hidden", "false");
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        dialogStack.push({ id: id, el: el, mode: mode, closeFn: closeFn, opener: opener });
        setTimeout(function () {
          var initial = initialFocusSelector ? el.querySelector(initialFocusSelector) : null;
          var target = initial || getFocusableInDialog(el)[0] || el;
          if (target && target.focus) target.focus();
        }, 0);
      }

      function closeDialog(id) {
        var idx = -1;
        for (var i = dialogStack.length - 1; i >= 0; i--) {
          if (dialogStack[i].id === id) {
            idx = i;
            break;
          }
        }
        var item = idx >= 0 ? dialogStack.splice(idx, 1)[0] : null;
        var el = document.getElementById(id);
        if (el) {
          var classDialog = id === "spickzettel" || id === "notfall-modal" || id === "handbuch-modal";
          if ((item && item.mode === "class") || classDialog) el.classList.remove("open");
          else el.style.display = "none";
          el.setAttribute("aria-hidden", "true");
        }
        if (item && item.opener && document.contains(item.opener) && item.opener.focus) {
          setTimeout(function () {
            item.opener.focus();
          }, 0);
        }
      }
      

      // ============================================================
      // NAVIGATION
      // ============================================================
      function showView(name) {
        if (
          name !== "add" &&
          document.getElementById("view-add") &&
          document.getElementById("view-add").classList.contains("active") &&
          !darfSongFormularVerlassen()
        ) {
          return;
        }
        document.querySelectorAll(".view").forEach(function (v) {
          v.classList.remove("active");
        });
        document.querySelectorAll(".nav-tab").forEach(function (t) {
          t.classList.remove("active");
        });
        document.getElementById("view-" + name).classList.add("active");
        document.querySelectorAll(".nav-tab").forEach(function (t) {
          if (t.getAttribute("data-view") === name) t.classList.add("active");
        });
        if (name === "repertoire") {
          document.getElementById("song-list-view").style.display = "block";
          document.getElementById("song-detail-view").classList.remove("open");
        }
        if (name === "setlist") {
          renderSpickListe();
          renderSetlists();
        }
        if (name === "favoriten") renderFavoriten();
        if (name === "einstellungen") {
          renderEinstellungen();
          renderDatenqualitaet();
          updateOfflineStatus();
        }
      }

      // ============================================================
      // SONG LIST & FILTER
      // ============================================================
      function toggleFilterPanel() {
        var panel = document.getElementById("filter-panel");
        var open = panel.style.display !== "none";
        panel.style.display = open ? "none" : "block";
        var btn = document.getElementById("filter-toggle-btn");
        btn.textContent = open
          ? "\u2699\uFE0F Filter"
          : "\u2715 Filter";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        if (!open) befuelleFilterDropdowns();
      }

      function befuelleFilterDropdowns() {
        ["sprache", "land", "kategorie"].forEach(function (feld) {
          var key =
            feld === "sprache"
              ? "sprachen"
              : feld === "land"
                ? "laender"
                : "kategorien";
          var sel = document.getElementById("filter-" + feld);
          var cur = sel.value;
          sel.innerHTML =
            '<option value="">Alle</option>' +
            optionenFuerListenfeld(key)
              .map(function (v) {
                return (
                  '<option value="' +
                  escHtml(v) +
                  '"' +
                  (listenwerteGleich(v, cur) ? " selected" : "") +
                  ">" +
                  escHtml(v) +
                  "</option>"
                );
              })
              .join("");
        });
      }

      function resetFilter() {
        document.getElementById("search-input").value = "";
        [
          "filter-sprache",
          "filter-land",
          "filter-kategorie",
          "filter-stimmung",
        ].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.value = "";
        });
        [
          "filter-favoriten",
          "filter-mit-noten",
          "filter-ohne-sprache",
          "filter-ohne-kategorie",
        ].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.checked = false;
        });
        filterSongs();
      }

      function filterSongs() {
        var q = (
          document.getElementById("search-input").value || ""
        ).toLowerCase();
        var sprache =
          (document.getElementById("filter-sprache") || {}).value || "";
        var land = (document.getElementById("filter-land") || {}).value || "";
        var kategorie =
          (document.getElementById("filter-kategorie") || {}).value || "";
        var stimmung =
          (document.getElementById("filter-stimmung") || {}).value || "";
        var nurFavoriten =
          !!(document.getElementById("filter-favoriten") || {}).checked;
        var mitNoten =
          !!(document.getElementById("filter-mit-noten") || {}).checked;
        var ohneSprache =
          !!(document.getElementById("filter-ohne-sprache") || {}).checked;
        var ohneKategorie =
          !!(document.getElementById("filter-ohne-kategorie") || {}).checked;

        var filtered = state.songs.filter(function (s) {
          if (q) {
            var inTitle = s.titel.toLowerCase().includes(q);
            var inText = (s.text || "").toLowerCase().includes(q);
            var inAkk = (s.akkorde || "").toLowerCase().includes(q);
            var inKomp = (s.komponist || "").toLowerCase().includes(q);
            var inNotiz = (s.notizen || "").toLowerCase().includes(q);
            if (!inTitle && !inText && !inAkk && !inKomp && !inNotiz)
              return false;
          }
          if (sprache && !listenwerteGleich(s.sprache, sprache)) return false;
          if (land && !listenwerteGleich(s.land, land)) return false;
          if (kategorie && !listenwerteGleich(s.kategorie, kategorie)) return false;
          if (stimmung && s.stimmung !== stimmung) return false;
          if (nurFavoriten && !state.favoriten.includes(s.id)) return false;
          if (mitNoten && !normalisiereListenwert(s.noten_abc)) return false;
          if (ohneSprache && normalisiereListenwert(s.sprache)) return false;
          if (ohneKategorie && normalisiereListenwert(s.kategorie)) return false;
          return true;
        });

        // alphabetisch sortieren
        filtered = filtered.slice().sort(function (a, b) {
          return a.titel.localeCompare(b.titel, "de");
        });

        var countEl = document.getElementById("filter-count");
        if (countEl) {
          var active =
            (q ? 1 : 0) +
            (sprache ? 1 : 0) +
            (land ? 1 : 0) +
            (kategorie ? 1 : 0) +
            (stimmung ? 1 : 0) +
            (nurFavoriten ? 1 : 0) +
            (mitNoten ? 1 : 0) +
            (ohneSprache ? 1 : 0) +
            (ohneKategorie ? 1 : 0);
          countEl.textContent =
            filtered.length +
            " von " +
            state.songs.length +
            " Liedern" +
            (active ? " (" + active + " Filter aktiv)" : "");
        }
        renderSongList(filtered);
      }

      function renderSongList(songs) {
        if (songs === undefined) {
          songs = state.songs.slice().sort(function (a, b) {
            return a.titel.localeCompare(b.titel, "de");
          });
        }
        var container = document.getElementById("song-list");
        if (songs.length === 0) {
          container.innerHTML =
            '<div class="empty-state"><div class="icon">&#127925;</div><p>Keine Lieder gefunden</p></div>';
          return;
        }
        container.innerHTML = songs
          .map(function (song) {
            var isFav = state.favoriten.includes(song.id);
            var capoBadge = song.capo
              ? '<span class="tag tag-capo">Capo ' +
                escHtml(song.capo) +
                "</span>"
              : "";
            var tags = "";
            if (song.sprache)
              tags +=
                '<span class="tag tag-akkorde">' +
                escHtml(song.sprache) +
                "</span>";
            if (song.kategorie)
              tags +=
                '<span class="tag tag-akkorde">' +
                escHtml(song.kategorie) +
                "</span>";
            tags += renderSongSyncBadge(song);
            var title = escHtml(song.titel);
            return (
              '<div class="song-card">' +
              '<button class="song-card-main" aria-label="Lied öffnen: ' +
              title +
              '" onclick="openSong(' +
              song.id +
              ')" onkeydown="songCardKey(event, ' +
              song.id +
              ')">' +
              '<div class="song-card-left">' +
              '<div class="song-title">' +
              title +
              "</div>" +
              '<div class="song-meta">' +
              capoBadge +
              tags +
              "</div>" +
              "</div>" +
              "</button>" +
              '<div class="song-card-actions">' +
              '<button class="card-btn ' +
              (isFav ? "active" : "") +
              '" onclick="event.stopPropagation(); toggleFavorit(' +
              song.id +
              ')" title="Favorit" aria-label="Favorit umschalten: ' +
              title +
              '">&#11088;</button>' +
              '<button class="card-btn" onclick="event.stopPropagation(); addToSpickListe(' +
              song.id +
              ')" title="Zum Spickzettel" aria-label="Zum Spickzettel hinzufügen: ' +
              title +
              '">&#127908;</button>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function escHtml(str) {
        if (!str) return "";
        return repariereTextAnzeige(String(str))
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }

      function repariereTextAnzeige(str) {
        return String(str || "")
          .replace(/Ã„/g, "Ä")
          .replace(/Ã–/g, "Ö")
          .replace(/Ãœ/g, "Ü")
          .replace(/Ã¤/g, "ä")
          .replace(/Ã¶/g, "ö")
          .replace(/Ã¼/g, "ü")
          .replace(/ÃŸ/g, "ß")
          .replace(/Ã©/g, "é")
          .replace(/Â´/g, "´")
          .replace(/Â/g, "")
          .replace(/â€“/g, "–")
          .replace(/â€”/g, "—")
          .replace(/â€ž/g, "„")
          .replace(/â€œ/g, "“")
          .replace(/â€/g, "”")
          .replace(/â€˜/g, "‘")
          .replace(/â€™/g, "’")
          .replace(/ðŸ†•/g, "Update");
      }

      function songCardKey(event, id) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openSong(id);
        }
      }

      // ============================================================
      // LISTENVERWALTUNG (Sprachen, Laender, Kategorien)
      // ============================================================
      var LISTEN_LABELS = {
        sprachen: "Sprachen",
        laender: "L\u00e4nder/Herkunft",
        kategorien: "Kategorien",
      };
      var LISTEN_FELDER = {
        sprachen: "sprache",
        laender: "land",
        kategorien: "kategorie",
      };
      var LISTEN_KANONISCH = {
        franzoesisch: "Französisch",
        französisch: "Französisch",
        oesterreich: "Österreich",
        österreich: "Österreich",
        suedafrika: "Südafrika",
        südafrika: "Südafrika",
        warmup: "Aufwärmen",
      };

      function normalisiereListenwert(val) {
        return String(val || "").trim().replace(/\s+/g, " ");
      }

      function listenwertSchluessel(val) {
        return normalisiereListenwert(val)
          .toLowerCase()
          .replace(/ä/g, "ae")
          .replace(/ö/g, "oe")
          .replace(/ü/g, "ue")
          .replace(/ß/g, "ss");
      }

      function kanonischerListenwert(val) {
        val = normalisiereListenwert(val);
        if (!val) return "";
        return LISTEN_KANONISCH[listenwertSchluessel(val)] || val;
      }

      function listenwerteGleich(a, b) {
        return listenwertSchluessel(a) === listenwertSchluessel(b);
      }

      function mergeListenwerte(key, werte) {
        if (!Array.isArray(state.listen[key])) state.listen[key] = [];
        werte.forEach(function (wert) {
          wert = kanonischerListenwert(wert);
          if (
            wert &&
            !state.listen[key].some(function (v) { return listenwerteGleich(v, wert); })
          ) {
            state.listen[key].push(wert);
          }
        });
        state.listen[key].sort(function (a, b) {
          return a.localeCompare(b, "de");
        });
      }

      function stelleListenwertSicher(key, wert) {
        wert = kanonischerListenwert(wert);
        if (!wert) return false;
        var vorher = state.listen[key] ? state.listen[key].length : 0;
        mergeListenwerte(key, [wert]);
        return state.listen[key].length !== vorher;
      }

      function normalisiereListenUndSongMetadaten() {
        Object.keys(LISTEN_LABELS).forEach(function (key) {
          var werte = [];
          (state.listen[key] || []).forEach(function (wert) {
            werte.push(kanonischerListenwert(wert));
          });
          state.listen[key] = [];
          mergeListenwerte(key, werte);
        });
        (state.songs || []).forEach(function (song) {
          Object.keys(LISTEN_FELDER).forEach(function (key) {
            var feld = LISTEN_FELDER[key];
            song[feld] = kanonischerListenwert(song[feld]);
            if (song[feld]) mergeListenwerte(key, [song[feld]]);
          });
        });
      }

      function optionenFuerListenfeld(key) {
        var werte = (state.listen[key] || []).slice();
        var feld = LISTEN_FELDER[key];
        (state.songs || []).forEach(function (song) {
          if (song && song[feld]) werte.push(song[feld]);
        });
        var result = [];
        werte.forEach(function (wert) {
          wert = kanonischerListenwert(wert);
          if (
            wert &&
            !result.some(function (v) { return listenwerteGleich(v, wert); })
          ) {
            result.push(wert);
          }
        });
        return result.sort(function (a, b) { return a.localeCompare(b, "de"); });
      }

      function renderEinstellungen() {
        var container = document.getElementById("listenverwaltung");
        if (!container) return;
        normalisiereListenUndSongMetadaten();
        container.innerHTML = Object.keys(LISTEN_LABELS)
          .map(function (key) {
            var werte = optionenFuerListenfeld(key);
            return (
              '<details class="settings-list">' +
              '<summary><span>' +
              escHtml(LISTEN_LABELS[key]) +
              '</span><span class="settings-list-count">' +
              werte.length +
              "</span></summary>" +
              '<div class="settings-list-values">' +
              werte
                .map(function (val) {
                  return (
                    '<span class="settings-value">' +
                    escHtml(val) +
                    "<button onclick=\"loescheListenwert('" +
                    key +
                    "','" +
                    val.replace(/'/g, "\\'") +
                    '\')" aria-label="Listenwert entfernen: ' +
                    escHtml(val) +
                    '">&#10005;</button>' +
                    "</span>"
                  );
                })
                .join("") +
              "</div>" +
              '<div class="settings-list-add">' +
              '<input class="form-input" id="neuer-' +
              key +
              '" type="text" placeholder="Neuer Wert...">' +
              '<button class="action-btn" onclick="addListenwert(\'' +
              key +
              "')\">+ Hinzufügen</button>" +
              "</div>" +
              "</details>"
            );
          })
          .join("");
      }

      function addListenwert(key) {
        var inp = document.getElementById("neuer-" + key);
        var val = kanonischerListenwert(inp.value);
        if (!val) return;
        if (optionenFuerListenfeld(key).some(function (v) { return listenwerteGleich(v, val); })) {
          showToast("Bereits vorhanden");
          return;
        }
        mergeListenwerte(key, [val]);
        saveToStorage();
        speichereListenInSupabase();
        inp.value = "";
        renderEinstellungen();
        befuelleFormularDropdowns();
        showToast(val + " hinzugef\u00fcgt");
      }

      function loescheListenwert(key, val) {
        var inUse = state.songs.some(function (s) {
          return (
            s[
              key === "sprachen"
                ? "sprache"
                : key === "laender"
                  ? "land"
                  : "kategorie"
            ] === val
          );
        });
        if (
          inUse &&
          !confirm(
            '"' + val + '" wird von Liedern verwendet. Trotzdem l\u00f6schen?',
          )
        )
          return;
        val = kanonischerListenwert(val);
        state.listen[key] = state.listen[key].filter(function (v) {
          return !listenwerteGleich(v, val);
        });
        saveToStorage();
        speichereListenInSupabase();
        renderEinstellungen();
        renderDatenqualitaet();
      }

      function cleanupSongActions(song) {
        return (
          '<div class="cleanup-actions">' +
          '<button class="action-btn" onclick="openSongAusAufraeumen(' +
          song.id +
          ')">Öffnen</button>' +
          '<button class="action-btn" onclick="editSongAusAufraeumen(' +
          song.id +
          ')">Bearbeiten</button>' +
          "</div>"
        );
      }

      function renderCleanupSection(title, items, renderItem) {
        var countClass = items.length ? " warn" : "";
        var html =
          '<details class="cleanup-section" ' +
          (items.length ? "open" : "") +
          ">" +
          '<summary class="cleanup-header"><span>' +
          escHtml(title) +
          '</span><span class="cleanup-count' +
          countClass +
          '">' +
          items.length +
          "</span></summary>";
        if (items.length) {
          html +=
            '<div class="cleanup-items">' +
            items.map(renderItem).join("") +
            "</div>";
        }
        return html + "</details>";
      }

      function renderDatenqualitaet() {
        var container = document.getElementById("datenqualitaet");
        if (!container) return;
        var songs = state.songs || [];
        var ohneSprache = songs.filter(function (s) { return !normalisiereListenwert(s.sprache); });
        var ohneKategorie = songs.filter(function (s) { return !normalisiereListenwert(s.kategorie); });
        var ohneText = songs.filter(function (s) { return !normalisiereListenwert(s.text); });
        var ohneNoten = songs.filter(function (s) { return !normalisiereListenwert(s.noten_abc); });
        var titelMap = {};
        songs.forEach(function (song) {
          var key = normalisiereListenwert(song.titel).toLowerCase();
          if (!key) return;
          if (!titelMap[key]) titelMap[key] = [];
          titelMap[key].push(song);
        });
        var doppelteTitel = [];
        Object.keys(titelMap).forEach(function (key) {
          if (titelMap[key].length > 1) doppelteTitel.push(titelMap[key]);
        });
        var verwendete = {
          sprachen: {},
          laender: {},
          kategorien: {},
        };
        songs.forEach(function (song) {
          if (song.sprache) verwendete.sprachen[song.sprache] = true;
          if (song.land) verwendete.laender[song.land] = true;
          if (song.kategorie) verwendete.kategorien[song.kategorie] = true;
        });
        var ungenutzt = [];
        Object.keys(LISTEN_LABELS).forEach(function (key) {
          (state.listen[key] || []).forEach(function (wert) {
            if (!verwendete[key][wert]) {
              ungenutzt.push(LISTEN_LABELS[key] + ": " + wert);
            }
          });
        });
        var songIds = {};
        songs.forEach(function (song) { songIds[song.id] = true; });
        var setlistFehler = [];
        (state.setlists || []).forEach(function (sl) {
          var fehlend = (sl.songs || []).filter(function (id) { return !songIds[id]; });
          if (fehlend.length) {
            setlistFehler.push({ setlist: sl, fehlend: fehlend.length });
          }
        });
        var songItem = function (song) {
          return (
            '<div class="cleanup-item"><span class="cleanup-title">' +
            escHtml(song.titel || "(ohne Titel)") +
            "</span>" +
            cleanupSongActions(song) +
            "</div>"
          );
        };
        container.innerHTML =
          '<div class="cleanup-list">' +
          renderCleanupSection("Lieder ohne Sprache", ohneSprache, songItem) +
          renderCleanupSection("Lieder ohne Kategorie", ohneKategorie, songItem) +
          renderCleanupSection("Lieder ohne Text", ohneText, songItem) +
          renderCleanupSection("Lieder ohne Noten", ohneNoten, songItem) +
          renderCleanupSection("Doppelte Titel", doppelteTitel, function (gruppe) {
            return (
              '<div class="cleanup-item"><span class="cleanup-title">' +
              escHtml(gruppe[0].titel || "(ohne Titel)") +
              " (" +
              gruppe.length +
              "x)</span></div>"
            );
          }) +
          renderCleanupSection("Nicht verwendete Listenwerte", ungenutzt, function (wert) {
            return '<div class="cleanup-item"><span class="cleanup-title">' + escHtml(wert) + "</span></div>";
          }) +
          renderCleanupSection("Setlists mit fehlenden Liedern", setlistFehler, function (item) {
            return (
              '<div class="cleanup-item"><span class="cleanup-title">' +
              escHtml(item.setlist.name) +
              ": " +
              item.fehlend +
              " fehlend</span></div>"
            );
          }) +
          "</div>";
      }

      function openSongAusAufraeumen(id) {
        showView("repertoire");
        openSong(id);
      }

      function editSongAusAufraeumen(id) {
        showView("repertoire");
        editSong(id);
      }

      function neuerListenwert(key) {
        var label = LISTEN_LABELS[key] || key;
        var val = prompt("Neuer Wert für " + label + ":");
        if (!val || !val.trim()) return;
        val = kanonischerListenwert(val);
        if (optionenFuerListenfeld(key).some(function (v) { return listenwerteGleich(v, val); })) {
          showToast("Bereits vorhanden");
          return;
        }
        mergeListenwerte(key, [val]);
        saveToStorage();
        speichereListenInSupabase();
        befuelleFormularDropdowns();
        // Neuen Wert direkt auswaehlen
        var feldMap = {
          sprachen: "add-sprache",
          laender: "add-land",
          kategorien: "add-kategorie",
        };
        var sel = document.getElementById(feldMap[key]);
        if (sel) sel.value = val;
        showToast(val + " hinzugef\u00fcgt");
      }

      function befuelleFormularDropdowns() {
        var felder = {
          sprachen: "add-sprache",
          laender: "add-land",
          kategorien: "add-kategorie",
        };
        Object.keys(felder).forEach(function (key) {
          var sel = document.getElementById(felder[key]);
          if (!sel) return;
          var cur = sel.value;
          sel.innerHTML =
            '<option value="">-- keine --</option>' +
            optionenFuerListenfeld(key)
              .map(function (v) {
                return (
                  '<option value="' +
                  escHtml(v) +
                  '"' +
                  (v === cur ? " selected" : "") +
                  ">" +
                  escHtml(v) +
                  "</option>"
                );
              })
              .join("");
          if (cur) sel.value = cur;
        });
      }

      // ============================================================
      // TRANSPOSITIONS-ENGINE
      // ============================================================
      var NOTEN_KREUZ = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
      ];
      var NOTEN_B = [
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
      ];
      var ENHARMONIC = {
        Db: "C#",
        "D#": "Eb",
        "E#": "F",
        Fb: "E",
        Gb: "F#",
        Ab: "G#",
        "A#": "Bb",
        "B#": "C",
        Cb: "B",
      };
      var B_TONARTEN = [
        "F",
        "Bb",
        "Eb",
        "Ab",
        "Db",
        "Gb",
        "Dm",
        "Gm",
        "Cm",
        "Fm",
        "Bbm",
        "Ebm",
        "Abm",
      ];

      function istBTonart(tonart) {
        return B_TONARTEN.some(function (b) {
          return (tonart || "").indexOf(b) === 0;
        });
      }
      function noteIndex(note) {
        var n = ENHARMONIC[note] || note;
        var idx = NOTEN_KREUZ.indexOf(n);
        if (idx === -1) idx = NOTEN_B.indexOf(n);
        return idx;
      }
      function transponiereAkkord(akkord, ht, useB) {
        if (!akkord) return akkord;
        var slashIdx = -1;
        for (var i = akkord.length - 1; i >= 1; i--) {
          if (akkord[i - 1] === "/") {
            slashIdx = i - 1;
            break;
          }
        }
        var hauptteil = slashIdx === -1 ? akkord : akkord.slice(0, slashIdx);
        var bassteil = slashIdx === -1 ? "" : akkord.slice(slashIdx + 1);
        var rm = hauptteil.match(/^([A-G][#b]?)(.*)$/);
        if (!rm) return akkord;
        var rootIdx = noteIndex(rm[1]);
        if (rootIdx === -1) return akkord;
        var newRoot = useB
          ? NOTEN_B[(rootIdx + ht + 120) % 12]
          : NOTEN_KREUZ[(rootIdx + ht + 120) % 12];
        var newBass = "";
        if (bassteil) {
          var bm = bassteil.match(/^([A-G][#b]?)(.*)$/);
          if (bm) {
            var bi = noteIndex(bm[1]);
            newBass =
              bi !== -1
                ? "/" +
                  (useB
                    ? NOTEN_B[(bi + ht + 120) % 12]
                    : NOTEN_KREUZ[(bi + ht + 120) % 12]) +
                  (bm[2] || "")
                : "/" + bassteil;
          }
        }
        return newRoot + (rm[2] || "") + newBass;
      }
      function transponiereAkkordString(str, ht, zieltonart) {
        if (!str || !ht) return str;
        var useB = istBTonart(zieltonart || "");
        return str
          .split(" ")
          .map(function (tok) {
            return !tok || /^[0-9IXx:!]+$/.test(tok)
              ? tok
              : transponiereAkkord(tok, ht, useB);
          })
          .join(" ");
      }
      function transponiereTonart(tonart, ht) {
        if (!tonart || !ht) return tonart;
        var m = tonart.match(/^([A-G][#b]?)(-(?:Dur|Moll))?$/i);
        if (!m) return tonart;
        var idx = noteIndex(m[1]);
        if (idx === -1) return tonart;
        var newIdx = (idx + ht + 120) % 12;
        var suffix = m[2] || "";
        var useB =
          suffix.toLowerCase().indexOf("moll") !== -1
            ? istBTonart(NOTEN_B[newIdx])
            : false;
        return (useB ? NOTEN_B[newIdx] : NOTEN_KREUZ[newIdx]) + suffix;
      }
      // Halbtonschritte zwischen zwei Noten berechnen
      function halbtoneZwischen(von, nach) {
        var a = noteIndex(von);
        var b = noteIndex(nach);
        if (a === -1 || b === -1) return 0;
        return (b - a + 12) % 12;
      }

      // Session-Transpositions-State (nicht gespeichert, nur fuer aktuelle Session)
      var transpState = {
        capoSession: 0, // Modus 1: Capo-Versatz (Halbtone)
        transpSession: 0, // Modus 2: Echte Transposition (Halbtone)
        spickCapoSession: 0,
        spickTranspSession: 0,
      };

      // ============================================================
      // SONG DETAIL
      // ============================================================
      function openSong(id, _skipScrollSave) {
        state.currentSong = state.songs.find(function (s) {
          return s.id === id;
        });
        transpState.capoSession = 0;
        transpState.transpSession = 0;
        if (!_skipScrollSave) {
          state._songListScrollTop = getScrollPos();
        }
        document.getElementById("song-list-view").style.display = "none";
        var detail = document.getElementById("song-detail-view");
        detail.classList.add("open");
        renderDetail();
      }

      function renderDetail() {
        var song = state.currentSong;
        if (!song) return;
        var isFav = state.favoriten.includes(song.id);
        var roemischZuArab = {
          I: 1,
          II: 2,
          III: 3,
          IV: 4,
          V: 5,
          VI: 6,
          VII: 7,
          VIII: 8,
          IX: 9,
          X: 10,
          XI: 11,
          XII: 12,
        };
        var capoNum =
          roemischZuArab[
            String(song.capo || "")
              .trim()
              .toUpperCase()
          ] ||
          parseInt(song.capo) ||
          0;

        // Klingender Capo-Versatz: gespeicherter Capo + Session-Capo
        var gesamtCapo = capoNum + transpState.capoSession;

        // Klingende Tonart aus gespeicherter Tonart + Transposition + Capo
        var griffTonart = song.tonart
          ? transponiereTonart(
              song.tonart.split("-")[0] +
                (song.tonart.split("-")[1]
                  ? "-" + song.tonart.split("-")[1]
                  : ""),
              transpState.transpSession,
            )
          : "";
        var klingendTonart = griffTonart
          ? transponiereTonart(
              griffTonart.split("-")[0] +
                (griffTonart.split("-")[1]
                  ? "-" + griffTonart.split("-")[1]
                  : ""),
              gesamtCapo,
            )
          : "";

        // Griffakkorde: ggf. transponiert (Modus 2)
        var griffAkkorde =
          transpState.transpSession !== 0
            ? transponiereAkkordString(
                song.akkorde,
                transpState.transpSession,
                griffTonart,
              )
            : song.akkorde || "";

        // Klingende Akkorde (Modus 1: Capo-Klingend)
        var klingendAkkorde =
          gesamtCapo !== 0
            ? transponiereAkkordString(griffAkkorde, gesamtCapo, klingendTonart)
            : "";

        // Tonart-Badge
        var tonartBadge = "";
        if (song.tonart) {
          tonartBadge =
            '<span style="font-size:0.78rem; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:6px; font-weight:600;">' +
            escHtml(song.tonart) +
            "</span>";
        }

        // Capo-Anzeige
        var capoAnzeige = "";
        if (capoNum > 0) {
          capoAnzeige =
            '<span class="capo-badge">\uD83C\uDFB8 Capo ' +
            capoNum +
            ". Bund</span>";
        }

        // Transpositions-Panel
        var griffTranspLabel =
          griffTonart ||
          (transpState.transpSession !== 0
            ? "+" + transpState.transpSession + " HT"
            : "Original");
        var klingendLabel =
          klingendTonart || (gesamtCapo !== 0 ? "Capo+" + gesamtCapo : "");

        var panelHTML =
          '<div class="transpose-panel">' +
          '<div class="transpose-panel-title">\uD83C\uDFB5 Tonart &amp; Transposition</div>' +
          // Zeile 1: Echte Transposition
          '<div class="transpose-row">' +
          '<span class="transpose-label">Transpon.:</span>' +
          '<button class="transpose-btn" onclick="changeTransp(-1)">&#8722;</button>' +
          '<span class="transpose-val" id="tp-val">' +
          (transpState.transpSession > 0 ? "+" : "") +
          transpState.transpSession +
          "</span>" +
          '<button class="transpose-btn" onclick="changeTransp(1)">+</button>' +
          (griffTonart
            ? '<span class="transpose-result">' +
              escHtml(griffTonart) +
              "</span>"
            : "") +
          (transpState.transpSession !== 0
            ? '<button class="transpose-reset" onclick="changeTransp(-transpState.transpSession)">zur\u00fcck</button>'
            : "") +
          "</div>" +
          // Zeile 2: Session-Capo
          '<div class=\"transpose-row\">' +
          '<span class=\"transpose-label\">Capo:</span>' +
          '<button class=\"transpose-btn\" onclick=\"changeCapoSession(-1)\">&#8722;</button>' +
          '<span class=\"transpose-val\" id=\"cp-val\">' +
          gesamtCapo +
          "</span>" +
          '<button class=\"transpose-btn\" onclick=\"changeCapoSession(1)\">+</button>' +
          (gesamtCapo > 0
            ? '<span class=\"capo-badge\">Bund ' + gesamtCapo + "</span>"
            : "") +
          (transpState.capoSession !== 0
            ? '<button class=\"transpose-reset\" onclick=\"changeCapoSession(-transpState.capoSession)\">zurück</button>'
            : "") +
          '<button class=\"transpose-reset\" style=\"color:var(--accent2); margin-left:4px;\" onclick=\"capoSpeichern()\">&#128190; speichern</button>' +
          "</div>" +
          // Klingende Info
          (klingendAkkorde || klingendTonart
            ? '<hr class="transpose-divider">' +
              '<div class="transpose-row" style="flex-wrap:wrap; gap:6px;">' +
              '<span style="font-size:0.78rem; color:var(--text2);">Klingend' +
              (klingendTonart ? " (" + escHtml(klingendTonart) + ")" : "") +
              ":</span>" +
              '<span class="klingend-info">' +
              escHtml(klingendAkkorde || griffAkkorde) +
              "</span>" +
              "</div>"
            : "") +
          "</div>";

        // Griffakkorde Block
        var akkordSection = "";
        if (griffAkkorde) {
          akkordSection =
            '<div class="akkorde-block">' +
            "<h4>Griffakkorde" +
            (transpState.transpSession !== 0 ? " (transponiert)" : "") +
            "</h4>" +
            '<div class="akkorde-text">' +
            escHtml(griffAkkorde) +
            "</div>" +
            "</div>";
        }

        document.getElementById("song-detail-view").innerHTML =
          '<div class="detail-header">' +
          '<button class="back-btn" onclick="closeDetail()" aria-label="Zurück zur Liedliste">\u2190</button>' +
          "<div>" +
          '<div class="detail-title">' +
          escHtml(song.titel) +
          "</div>" +
          '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:4px;">' +
          tonartBadge +
          capoAnzeige +
          renderSongSyncBadge(song) +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="detail-actions">' +
          '<button class="action-btn ' +
          (isFav ? "primary" : "") +
          '" onclick="toggleFavorit(' +
          song.id +
          '); renderDetail()" aria-label="Favorit umschalten: ' +
          escHtml(song.titel) +
          '">' +
          (isFav ? "&#11088; Favorit" : "&#9734; Favorit") +
          "</button>" +
          '<button class="action-btn" onclick="addToSpickListe(' +
          song.id +
          ')" aria-label="Zum Spickzettel hinzufügen: ' +
          escHtml(song.titel) +
          '">&#127908; Spickzettel</button>' +
          '<button class="action-btn" onclick="editSong(' +
          song.id +
          ')" aria-label="Lied bearbeiten: ' +
          escHtml(song.titel) +
          '">&#9998; Bearbeiten</button>' +
          '<button class="action-btn primary" onclick="startSpickzettelSingle(' +
          song.id +
          ')" aria-label="Spickzettel mit diesem Lied starten: ' +
          escHtml(song.titel) +
          '">&#9654; Starten</button>' +
          "</div>" +
          panelHTML +
          '<div class="song-text">' +
          escHtml(song.text || "(kein Text hinterlegt)") +
          "</div>" +
          akkordSection +
          (song.noten_abc
            ? '<div class="noten-section">' +
              '<div class="noten-toggle" onclick="toggleNotenAnzeige()">' +
              '<span class="noten-toggle-title">&#9834; Noten</span>' +
              '<span id="noten-toggle-label" class="noten-toggle-label">einblenden</span>' +
              '</div>' +
              '<div id="noten-abc-box" class="noten-box">' +
              '<div class="noten-controls">' +
              '<label for="noten-scale-slider">Größe:</label>' +
              '<input type="range" id="noten-scale-slider" min="60" max="130" value="90" step="5" oninput="notenScaleAendern(this.value)">' +
              '<span id="noten-scale-label">90%</span>' +
              '</div>' +
              '<div class="noten-scroll"><div id="noten-abc-render"></div></div>' +
              '<div class="noten-code-toggle-wrap">' +
              '<span onclick="toggleAbcCode()" class="noten-code-toggle">ABC-Code anzeigen</span>' +
              '</div>' +
              '<pre id="noten-abc-code" class="noten-code">' +
              escHtml(song.noten_abc) +
              '</pre>' +
              '</div>' +
              '</div>'
            : "") +
          (song.notizen
            ? '<div style="margin-top:12px; padding:12px; background:var(--surface2); border-radius:8px; font-size:0.85rem; color:var(--text2)">&#128161; ' +
              escHtml(song.notizen) +
              "</div>"
            : "");
      }

      function changeTransp(delta) {
        transpState.transpSession = Math.max(
          -11,
          Math.min(11, transpState.transpSession + delta),
        );
        renderDetail();
      }
      function changeCapoSession(delta) {
        var song = state.currentSong;
        var roemischZuArab2 = {
          I: 1,
          II: 2,
          III: 3,
          IV: 4,
          V: 5,
          VI: 6,
          VII: 7,
          VIII: 8,
          IX: 9,
          X: 10,
          XI: 11,
          XII: 12,
        };
        var capoBase =
          roemischZuArab2[
            String((song && song.capo) || "")
              .trim()
              .toUpperCase()
          ] ||
          parseInt(song ? song.capo : 0) ||
          0;
        var newSession = transpState.capoSession + delta;
        if (capoBase + newSession < 0) return;
        transpState.capoSession = newSession;
        renderDetail();
      }

      function capoSpeichern() {
        var song = state.currentSong;
        if (!song) return;
        var roemischZuArab2 = {
          I: 1,
          II: 2,
          III: 3,
          IV: 4,
          V: 5,
          VI: 6,
          VII: 7,
          VIII: 8,
          IX: 9,
          X: 10,
          XI: 11,
          XII: 12,
        };
        var capoBase =
          roemischZuArab2[
            String(song.capo || "")
              .trim()
              .toUpperCase()
          ] ||
          parseInt(song.capo) ||
          0;
        var neuerCapo = capoBase + transpState.capoSession;
        song.capo = zuRoemisch(String(neuerCapo));
        markSongSyncStatus(song, canSyncSongsNow() ? "syncing" : "local", "");
        state.songs = state.songs.map(function (s) {
          return s.id === song.id ? song : s;
        });
        saveToStorage();
        speichereInSupabase(song).then(function (row) {
          if (row) {
            song.supabase_id = row.id;
            markSongSyncStatus(song, "synced", "");
          } else {
            markSongSyncStatus(
              song,
              canSyncSongsNow() ? "error" : "pending",
              canSyncSongsNow() ? "Supabase konnte das Lied nicht speichern." : "",
            );
          }
          saveToStorage();
          renderDetail();
          renderSongList();
        });
        transpState.capoSession = 0;
        renderDetail();
        renderSongList();
        showToast("Capo " + (song.capo || "entfernt") + " gespeichert");
      }

      function closeDetail() {
        var pos = state._songListScrollTop || 0;
        document.getElementById("song-list-view").style.display = "block";
        document.getElementById("song-detail-view").classList.remove("open");
        // Scroll wiederholt setzen - schÃ¼tzt gegen spÃ¤te async renderSongList-Aufrufe
        var scrollVersuche = 0;
        function scrollZurueck() {
          setScrollPos(pos);
          scrollVersuche++;
          if (scrollVersuche < 8) {
            setTimeout(scrollZurueck, 80);
          }
        }
        scrollZurueck();
      }

      function renderNoten(scale) {
        var song = state.currentSong;
        if (!song || !song.noten_abc || !window.ABCJS) return;
        var container = document.getElementById("noten-abc-render");
        if (!container) return;
        setTimeout(function() {
          var scroll = container.closest ? container.closest(".noten-scroll") : null;
          var breite = (scroll && scroll.clientWidth) || container.offsetWidth || 320;
          container.innerHTML = "";
          ABCJS.renderAbc("noten-abc-render", song.noten_abc, {
            responsive: "resize",
            staffwidth: Math.max(260, Math.floor(breite - 8)),
            scale: scale || 0.9
          });
        }, 50);
      }

      function toggleNotenAnzeige() {
        var box = document.getElementById("noten-abc-box");
        var label = document.getElementById("noten-toggle-label");
        if (!box) return;
        var offen = !box.classList.contains("open");
        box.classList.toggle("open", offen);
        label.textContent = offen ? "ausblenden" : "einblenden";
        if (offen && window.ABCJS && !box.dataset.rendered) {
          var slider = document.getElementById("noten-scale-slider");
          var scale = parseFloat((slider || {}).value || 90) / 100;
          renderNoten(scale);
          box.dataset.rendered = "1";
        }
      }

      function notenScaleAendern(val) {
        var label = document.getElementById("noten-scale-label");
        if (label) label.textContent = val + "%";
        var box = document.getElementById("noten-abc-box");
        if (box) box.dataset.rendered = "1";
        renderNoten(parseFloat(val) / 100);
      }

      function toggleAbcCode() {
        var el = document.getElementById("noten-abc-code");
        if (!el) return;
        el.style.display = el.style.display === "none" ? "block" : "none";
      }

      // ============================================================
      // FAVORITEN
      // ============================================================
      function toggleFavorit(id) {
        if (state.favoriten.includes(id)) {
          state.favoriten = state.favoriten.filter(function (f) {
            return f !== id;
          });
          showToast("Aus Favoriten entfernt");
        } else {
          state.favoriten.push(id);
          showToast("Zu Favoriten hinzugef\u00fcgt \u2B50");
        }
        saveToStorage();
        renderSongList();
      }

      function renderFavoriten() {
        var container = document.getElementById("favoriten-list");
        var favs = state.songs.filter(function (s) {
          return state.favoriten.includes(s.id);
        });
        if (favs.length === 0) {
          container.innerHTML =
            '<div class="empty-state"><div class="icon">&#11088;</div><p>Noch keine Favoriten.<br>Markiere Lieder im Repertoire.</p></div>';
          return;
        }
        container.innerHTML = favs
          .map(function (song) {
            var capoBadge = song.capo
              ? ' <span class="tag tag-capo">Capo ' +
                escHtml(song.capo) +
                "</span>"
              : "";
            var title = escHtml(song.titel);
            return (
              '<div class="song-card">' +
              '<button class="song-card-main" aria-label="Lied öffnen: ' +
              title +
              '" onclick="openSongFromFavorit(' +
              song.id +
              ')" onkeydown="songCardKey(event, ' +
              song.id +
              ')">' +
              '<div class="song-card-left">' +
              '<div class="song-title">' +
              title +
              "</div>" +
              '<div class="song-meta">' +
              capoBadge +
              renderSongSyncBadge(song) +
              "</div>" +
              "</div>" +
              "</button>" +
              '<div class="song-card-actions">' +
              '<button class="card-btn active" onclick="event.stopPropagation(); toggleFavorit(' +
              song.id +
              '); renderFavoriten()" title="Entfernen" aria-label="Aus Favoriten entfernen: ' +
              title +
              '">&#11088;</button>' +
              '<button class="card-btn" onclick="event.stopPropagation(); addToSpickListe(' +
              song.id +
              ')" title="Zum Spickzettel" aria-label="Zum Spickzettel hinzufügen: ' +
              title +
              '">&#127908;</button>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function openSongFromFavorit(id) {
        showView("repertoire");
        setTimeout(function () {
          openSong(id);
        }, 50);
      }

      // ============================================================
      // SPICKLISTE (persistente spontane Programmliste)
      // ============================================================
      function showSetlistSubtab(tab) {
        document.getElementById("subtab-spick").style.display =
          tab === "spick" ? "block" : "none";
        document.getElementById("subtab-sets").style.display =
          tab === "sets" ? "block" : "none";
        document.getElementById("subtab-spick-btn").classList.toggle("active", tab === "spick");
        document.getElementById("subtab-sets-btn").classList.toggle("active", tab === "sets");
      }

      function getSongById(id) {
        return state.songs.find(function (s) {
          return s.id === id;
        });
      }

      function setlistSongIds(sl) {
        return ((sl && sl.songs) || []).filter(function (id) {
          return !!getSongById(id);
        });
      }

      function getSetlistDuration(sl) {
        var total = 0;
        (sl.songs || []).forEach(function (id) {
          var val = parseInt((sl.durations || {})[id], 10);
          if (!isNaN(val) && val > 0) total += val;
        });
        return total;
      }

      function formatDurationMinutes(total) {
        if (!total) return "";
        return "ca. " + total + " Min.";
      }

      function markSetlistUsed(sl) {
        if (!sl) return;
        sl.used_at = new Date().toISOString();
        saveToStorage();
      }

      function getLastUsedSetlists() {
        return state.setlists
          .filter(function (sl) {
            return !!sl.used_at;
          })
          .slice()
          .sort(function (a, b) {
            return new Date(b.used_at) - new Date(a.used_at);
          })
          .slice(0, 3);
      }

      function getTodayUsedSetlists() {
        var today = new Date().toISOString().slice(0, 10);
        return state.setlists.filter(function (sl) {
          return (sl.used_at || "").slice(0, 10) === today;
        });
      }

      function addToSpickListe(id) {
        if (state.spickListe.includes(id)) {
          showToast("Bereits im Spickzettel");
          return;
        }
        state.spickListe.push(id);
        saveToStorage();
        showToast("Zum Spickzettel hinzugef\u00fcgt \u2705");
        renderSpickListe();
      }

      function renderDraggableAttrs(listType, idx) {
        return (
          ' draggable="true" ondragstart="setlistDragStart(event, \'' +
          listType +
          "', " +
          idx +
          ')" ondragover="setlistDragOver(event)" ondrop="setlistDrop(event, \'' +
          listType +
          "', " +
          idx +
          ')" ondragend="setlistDragEnd(event)"'
        );
      }

      function setlistDragStart(event, listType, idx) {
        setlistDragContext = { listType: listType, idx: idx };
        event.currentTarget.classList.add("dragging");
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = "move";
          event.dataTransfer.setData("text/plain", listType + ":" + idx);
        }
      }

      function setlistDragOver(event) {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
        event.currentTarget.classList.add("drag-over");
      }

      function setlistDragEnd(event) {
        event.currentTarget.classList.remove("dragging", "drag-over");
      }

      function setlistDrop(event, listType, targetIdx) {
        event.preventDefault();
        event.currentTarget.classList.remove("drag-over");
        if (!setlistDragContext || setlistDragContext.listType !== listType) return;
        reorderSongIdList(listType, setlistDragContext.idx, targetIdx);
        setlistDragContext = null;
      }

      function reorderSongIdList(listType, fromIdx, toIdx) {
        if (fromIdx === toIdx) return;
        var list = null;
        var sl = null;
        if (listType === "spick") {
          list = state.spickListe;
        } else if (listType === "setlist-editor") {
          sl = state.setlists.find(function (s) {
            return s.id === editSetlistId;
          });
          list = sl ? sl.songs : null;
        }
        if (!list || fromIdx < 0 || toIdx < 0 || fromIdx >= list.length || toIdx >= list.length) return;
        var moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        saveToStorage();
        if (listType === "spick") renderSpickListe();
        else renderSetlistEditorItems();
      }

      function renderSpickListe() {
        var container = document.getElementById("spick-list-container");
        if (!container) return;
        var songs = state.spickListe
          .map(function (id) {
            return state.songs.find(function (s) {
              return s.id === id;
            });
          })
          .filter(Boolean);
        var subtitle = document.getElementById("spick-list-subtitle");
        if (subtitle)
          subtitle.textContent = songs.length
            ? songs.length +
              " Lied" +
              (songs.length > 1 ? "er" : "") +
              " \u2013 ca. " +
              songs.length * 4 +
              "\u201350 Min."
            : "Spontane Programmliste";
        if (songs.length === 0) {
          container.innerHTML =
            '<div class="empty-state"><div class="icon">&#127908;</div><p>Noch leer.<br>Lieder aus dem Repertoire hinzuf\u00fcgen.</p></div>';
          return;
        }
        container.innerHTML = songs
          .map(function (song, i) {
            var title = escHtml(song.titel);
            var capoSpan = song.capo
              ? ' <span class="setlist-capo">Capo ' +
                escHtml(song.capo) +
                "</span>"
              : "";
            return (
              '<div class="setlist-item draggable-item"' +
              renderDraggableAttrs("spick", i) +
              ">" +
              '<div class="setlist-num">' +
              (i + 1) +
              "</div>" +
              '<div class="setlist-name">' +
              title +
              capoSpan +
              "</div>" +
              '<div class="setlist-controls">' +
              '<button class="card-btn" onclick="moveSpickItem(' +
              i +
              ',-1)" aria-label="' +
              title +
              ' in der Spickliste nach oben verschieben" ' +
              (i === 0 ? "disabled" : "") +
              ">\u2191</button>" +
              '<button class="card-btn" onclick="moveSpickItem(' +
              i +
              ',1)" aria-label="' +
              title +
              ' in der Spickliste nach unten verschieben" ' +
              (i === songs.length - 1 ? "disabled" : "") +
              ">\u2193</button>" +
              '<button class="card-btn" onclick="removeFromSpickListe(' +
              song.id +
              ')" aria-label="' +
              title +
              ' aus der Spickliste entfernen">\u2715</button>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function moveSpickItem(idx, dir) {
        var ni = idx + dir;
        if (ni < 0 || ni >= state.spickListe.length) return;
        var tmp = state.spickListe[idx];
        state.spickListe[idx] = state.spickListe[ni];
        state.spickListe[ni] = tmp;
        saveToStorage();
        renderSpickListe();
      }

      function removeFromSpickListe(id) {
        state.spickListe = state.spickListe.filter(function (i) {
          return i !== id;
        });
        saveToStorage();
        renderSpickListe();
      }

      function clearSpickListe() {
        if (!state.spickListe.length) return;
        if (confirm("Spickzettel-Liste wirklich leeren?")) {
          state.spickListe = [];
          saveToStorage();
          renderSpickListe();
        }
      }

      function startSpickzettelFromListe() {
        if (!state.spickListe.length) {
          showToast("Spickzettel-Liste ist leer");
          return;
        }
        state._spickSingle = null;
        state._spickSourceSetlistId = null;
        state.spickIndex = 0;
        openDialog("spickzettel", "class", "closeSpickzettel", ".spick-close");
        renderSpickzettel();
      }

      function spickListeAlsSetlistSpeichern() {
        if (!state.spickListe.length) {
          showToast("Liste ist leer");
          return;
        }
        var name = prompt("Name der Setlist:");
        if (!name || !name.trim()) return;
        var sl = {
          id: Date.now(),
          name: name.trim(),
          songs: state.spickListe.slice(),
          durations: {},
          created_at: new Date().toISOString(),
          used_at: "",
        };
        state.setlists.push(sl);
        saveToStorage();
        showToast("Als Setlist gespeichert");
        showSetlistSubtab("sets");
        renderSetlists();
      }

      function spickListeAddMode() {
        liedSuchModus = "spick";
        document.getElementById("lied-such-input").value = "";
        renderLiedSuchOverlay();
        openDialog("lied-such-overlay", "display", "closeLiedSuchOverlay", "#lied-such-input");
      }

      // ============================================================
      // GESPEICHERTE SETLISTS
      // ============================================================
      function neueSetlist() {
        var name = document.getElementById("neue-setlist-name").value.trim();
        if (!name) {
          showToast("Bitte Namen eingeben");
          return;
        }
        var sl = {
          id: Date.now(),
          name: name,
          songs: [],
          durations: {},
          created_at: new Date().toISOString(),
          used_at: "",
        };
        state.setlists.push(sl);
        saveToStorage();
        document.getElementById("neue-setlist-name").value = "";
        renderSetlists();
        openSetlistEditor(sl.id);
      }

      function renderSetlists() {
        var container = document.getElementById("setlists-container");
        if (!container) return;
        var badge = document.getElementById("setlist-count-badge");
        if (badge) {
          if (state.setlists.length) {
            badge.textContent = state.setlists.length;
            badge.style.display = "inline";
          } else {
            badge.style.display = "none";
          }
        }
        if (!state.setlists.length) {
          container.innerHTML =
            '<div class="empty-state"><div class="icon">&#128203;</div><p>Noch keine Setlists.<br>Namen eingeben und Neu klicken.</p></div>';
          return;
        }
        var lastUsed = getLastUsedSetlists();
        var todayUsed = getTodayUsedSetlists();
        var summary =
          lastUsed.length || todayUsed.length
            ? '<div class="setlist-summary">' +
              (todayUsed.length
                ? '<span class="setlist-summary-pill">Heute verwendet: ' +
                  todayUsed.length +
                  "</span>"
                : "") +
              lastUsed
                .map(function (sl) {
                  return (
                    '<button class="setlist-recent-btn" onclick="startSetlistDirekt(' +
                    sl.id +
                    ')">' +
                    escHtml(sl.name) +
                    "</button>"
                  );
                })
                .join("") +
              "</div>"
            : "";
        container.innerHTML = state.setlists
          .map(function (sl) {
            var name = escHtml(sl.name);
            var total = getSetlistDuration(sl);
            var used = sl.used_at
              ? "Zuletzt: " + new Date(sl.used_at).toLocaleDateString("de-DE")
              : "Noch nicht verwendet";
            return (
              '<div class="setlist-item" role="button" tabindex="0" aria-label="Setlist bearbeiten: ' +
              name +
              '" style="cursor:pointer;" onclick="openSetlistEditor(' +
              sl.id +
              ')" onkeydown="if(event.key === \'Enter\' || event.key === \' \'){ event.preventDefault(); openSetlistEditor(' +
              sl.id +
              '); }">' +
              '<div style="flex:1;">' +
              '<div style="font-weight:600; font-size:0.95rem;">' +
              name +
              "</div>" +
              '<div style="font-size:0.78rem; color:var(--text3);">' +
              sl.songs.length +
              " Lieder" +
              (total ? " | " + formatDurationMinutes(total) : "") +
              " | " +
              escHtml(used) +
              "</div>" +
              "</div>" +
              '<div style="display:flex; gap:6px;">' +
              '<button class="card-btn" onclick="event.stopPropagation(); startSetlistDirekt(' +
              sl.id +
              ')" title="Setlist starten" aria-label="Setlist starten: ' +
              name +
              '">&#9654;</button>' +
              '<button class="card-btn" onclick="event.stopPropagation(); setlistInSpickzettelLadenDirekt(' +
              sl.id +
              ')" title="In Spickzettel laden" aria-label="Setlist in Spickzettel laden: ' +
              name +
              '">&#127908;</button>' +
              '<button class="card-btn" onclick="event.stopPropagation(); duplicateSetlist(' +
              sl.id +
              ')" title="Duplizieren" aria-label="Setlist duplizieren: ' +
              name +
              '">&#10697;</button>' +
              '<button class="card-btn" onclick="event.stopPropagation(); openSetlistEditor(' +
              sl.id +
              ')" title="Bearbeiten" aria-label="Setlist bearbeiten: ' +
              name +
              '">&#9998;</button>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        container.innerHTML = summary + container.innerHTML;
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function openSetlistEditor(id) {
        editSetlistId = id;
        var sl = state.setlists.find(function (s) {
          return s.id === id;
        });
        if (!sl) return;
        document.getElementById("setlist-editor-name").value = sl.name;
        updateSetlistEditorSummary();
        renderSetlistEditorItems();
        openDialog("setlist-editor", "display", "closeSetlistEditor", "#setlist-editor-name");
      }

      function duplicateSetlist(id) {
        var sl = state.setlists.find(function (s) {
          return s.id === id;
        });
        if (!sl) return;
        var copy = {
          id: Date.now(),
          name: sl.name + " Kopie",
          songs: sl.songs.slice(),
          durations: Object.assign({}, sl.durations || {}),
          created_at: new Date().toISOString(),
          used_at: "",
        };
        state.setlists.push(copy);
        saveToStorage();
        renderSetlists();
        showToast("Setlist dupliziert");
      }

      function updateSetlistEditorSummary() {
        var summary = document.getElementById("setlist-editor-summary");
        if (!summary) return;
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) {
          summary.textContent = "";
          return;
        }
        var total = getSetlistDuration(sl);
        summary.textContent =
          sl.songs.length +
          " Lieder" +
          (total ? " | " + formatDurationMinutes(total) : "");
      }

      function renderSetlistEditorItems() {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        var container = document.getElementById("setlist-editor-container");
        var songs = sl.songs
          .map(function (id) {
            return state.songs.find(function (s) {
              return s.id === id;
            });
          })
          .filter(Boolean);
        if (!songs.length) {
          container.innerHTML =
            '<div class="empty-state" style="padding:20px;"><p>Noch keine Lieder. Unten hinzuf\u00fcgen.</p></div>';
          return;
        }
        container.innerHTML = songs
          .map(function (song, i) {
            var title = escHtml(song.titel);
            var capoSpan = song.capo
              ? ' <span class="setlist-capo">Capo ' +
                escHtml(song.capo) +
                "</span>"
              : "";
            return (
              '<div class="setlist-item draggable-item"' +
              renderDraggableAttrs("setlist-editor", i) +
              ">" +
              '<div class="setlist-num">' +
              (i + 1) +
              "</div>" +
              '<div class="setlist-name">' +
              title +
              capoSpan +
              '<label class="setlist-duration"><span>Dauer</span><input type="number" min="0" max="99" inputmode="numeric" value="' +
              escHtml((sl.durations || {})[song.id] || "") +
              '" onchange="setSetlistSongDuration(' +
              song.id +
              ', this.value)" onclick="event.stopPropagation()"> Min.</label>' +
              "</div>" +
              '<div class="setlist-controls">' +
              '<button class="card-btn" onclick="moveSetlistEditorItem(' +
              i +
              ',-1)" aria-label="' +
              title +
              ' in der Setlist nach oben verschieben" ' +
              (i === 0 ? "disabled" : "") +
              ">\u2191</button>" +
              '<button class="card-btn" onclick="moveSetlistEditorItem(' +
              i +
              ',1)" aria-label="' +
              title +
              ' in der Setlist nach unten verschieben" ' +
              (i === songs.length - 1 ? "disabled" : "") +
              ">\u2193</button>" +
              '<button class="card-btn" onclick="removeSetlistEditorItem(' +
              song.id +
              ')" aria-label="' +
              title +
              ' aus der Setlist entfernen">\u2715</button>' +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function moveSetlistEditorItem(idx, dir) {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        var ni = idx + dir;
        if (ni < 0 || ni >= sl.songs.length) return;
        var tmp = sl.songs[idx];
        sl.songs[idx] = sl.songs[ni];
        sl.songs[ni] = tmp;
        saveToStorage();
        renderSetlistEditorItems();
        renderSetlists();
      }

      function setSetlistSongDuration(songId, value) {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        sl.durations = sl.durations || {};
        var minutes = parseInt(value, 10);
        if (isNaN(minutes) || minutes <= 0) delete sl.durations[songId];
        else sl.durations[songId] = Math.min(99, minutes);
        saveToStorage();
        updateSetlistEditorSummary();
        renderSetlists();
      }

      function removeSetlistEditorItem(id) {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        sl.songs = sl.songs.filter(function (i) {
          return i !== id;
        });
        if (sl.durations) delete sl.durations[id];
        saveToStorage();
        renderSetlistEditorItems();
        updateSetlistEditorSummary();
        renderSetlists();
      }

      function setlistEditorAddMode() {
        liedSuchModus = "setlist-editor";
        document.getElementById("lied-such-input").value = "";
        renderLiedSuchOverlay();
        openDialog("lied-such-overlay", "display", "closeLiedSuchOverlay", "#lied-such-input");
      }

      function saveSetlistEditor() {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        sl.name =
          document.getElementById("setlist-editor-name").value.trim() ||
          sl.name;
        saveToStorage();
        closeSetlistEditor();
        showToast("Setlist gespeichert \u2705");
      }

      function closeSetlistEditor() {
        closeDialog("setlist-editor");
        editSetlistId = null;
        renderSetlists();
      }

      function deleteSetlist() {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl) return;
        if (!confirm('"' + sl.name + '" l\u00f6schen?')) return;
        state.setlists = state.setlists.filter(function (s) {
          return s.id !== editSetlistId;
        });
        saveToStorage();
        closeSetlistEditor();
      }

      function setlistInSpickzettelLaden() {
        var sl = state.setlists.find(function (s) {
          return s.id === editSetlistId;
        });
        if (!sl || !sl.songs.length) {
          showToast("Setlist ist leer");
          return;
        }
        if (
          state.spickListe.length &&
          !confirm("Aktuellen Spickzettel ersetzen?")
        )
          return;
        state.spickListe = setlistSongIds(sl);
        markSetlistUsed(sl);
        saveToStorage();
        closeSetlistEditor();
        showView("setlist");
        showSetlistSubtab("spick");
        renderSpickListe();
        showToast("In Spickzettel geladen");
      }

      function setlistInSpickzettelLadenDirekt(id) {
        var sl = state.setlists.find(function (s) {
          return s.id === id;
        });
        if (!sl || !sl.songs.length) {
          showToast("Setlist ist leer");
          return;
        }
        if (
          state.spickListe.length &&
          !confirm("Aktuellen Spickzettel ersetzen?")
        )
          return;
        state.spickListe = setlistSongIds(sl);
        markSetlistUsed(sl);
        saveToStorage();
        showSetlistSubtab("spick");
        renderSpickListe();
        showToast(escHtml(sl.name) + " geladen");
      }

      function startSetlistDirekt(id) {
        var sl = state.setlists.find(function (s) {
          return s.id === id;
        });
        var ids = setlistSongIds(sl);
        if (!sl || !ids.length) {
          showToast("Setlist ist leer");
          return;
        }
        state._spickSingle = ids;
        state._spickSourceSetlistId = sl.id;
        state.spickIndex = 0;
        markSetlistUsed(sl);
        renderSetlists();
        openDialog("spickzettel", "class", "closeSpickzettel", ".spick-close");
        renderSpickzettel();
      }

      // ============================================================
      // LIED-SUCH-OVERLAY
      // ============================================================
      function renderLiedSuchOverlay() {
        var q = (
          document.getElementById("lied-such-input").value || ""
        ).toLowerCase();
        var songs = state.songs.slice().sort(function (a, b) {
          return a.titel.localeCompare(b.titel, "de");
        });
        if (q)
          songs = songs.filter(function (s) {
            return s.titel.toLowerCase().includes(q);
          });
        var currentIds =
          liedSuchModus === "spick"
            ? state.spickListe
            : editSetlistId
              ? (
                  state.setlists.find(function (s) {
                    return s.id === editSetlistId;
                  }) || { songs: [] }
                ).songs
              : [];
        document.getElementById("lied-such-liste").innerHTML = songs
          .map(function (song) {
            var inList = currentIds.includes(song.id);
            return (
              '<div class="song-card" style="' +
              (inList ? "opacity:0.5;" : "") +
              '" onclick="liedSuchAuswaehlen(' +
              song.id +
              ')">' +
              '<div class="song-card-left">' +
              '<div class="song-title">' +
              escHtml(song.titel) +
              "</div>" +
              (song.tonart
                ? '<div class="song-meta"><span class="tag tag-akkorde">' +
                  escHtml(song.tonart) +
                  "</span></div>"
                : "") +
              "</div>" +
              '<div style="color:' +
              (inList ? "var(--text3)" : "var(--accent)") +
              '; font-size:1.2rem; padding:4px;">' +
              (inList ? "\u2713" : "+") +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function liedSuchAuswaehlen(id) {
        if (liedSuchModus === "spick") {
          addToSpickListe(id);
          renderLiedSuchOverlay();
        } else if (liedSuchModus === "setlist-editor") {
          var sl = state.setlists.find(function (s) {
            return s.id === editSetlistId;
          });
          if (!sl) return;
          if (sl.songs.includes(id)) {
            showToast("Bereits in der Setlist");
            return;
          }
          sl.songs.push(id);
          saveToStorage();
          renderSetlistEditorItems();
          updateSetlistEditorSummary();
          renderLiedSuchOverlay();
          showToast("Hinzugef\u00fcgt");
        }
      }

      function closeLiedSuchOverlay() {
        closeDialog("lied-such-overlay");
      }

      // ============================================================
      // SPICKZETTEL
      // ============================================================
      function startSpickzettelSingle(id) {
        state._spickSingle = [id];
        state._spickSourceSetlistId = null;
        state.spickIndex = 0;
        openDialog("spickzettel", "class", "closeSpickzettel", ".spick-close");
        renderSpickzettel();
      }

      function spickzettelAddMode() {
        liedSuchModus = "spick";
        document.getElementById("lied-such-input").value = "";
        renderLiedSuchOverlay();
        openDialog("lied-such-overlay", "display", "closeLiedSuchOverlay", "#lied-such-input");
      }

      function renderSpickzettel() {
        var ids = state._spickSingle || state.spickListe;
        var song = state.songs.find(function (s) {
          return s.id === ids[state.spickIndex];
        });
        if (!song) return;
        document.getElementById("spick-title").textContent = song.titel;
        var counterText = state.spickIndex + 1 + " / " + ids.length;
        var sourceSetlist = state._spickSourceSetlistId
          ? state.setlists.find(function (sl) {
              return sl.id === state._spickSourceSetlistId;
            })
          : null;
        if (sourceSetlist) counterText += " | " + sourceSetlist.name;
        document.getElementById("spick-counter").textContent = counterText;
        updateSpickNavState(ids);
        applySpickFontScale();

        // Capo-Anzeige (gespeicherter Capo + Session)
        var capoNum = parseInt(song.capo) || 0;
        var gesamtCapo = capoNum + (transpState.spickCapoSession || 0);
        var capoEl = document.getElementById("spick-capo");
        if (gesamtCapo > 0) {
          capoEl.textContent = "\uD83C\uDFB8 Capo " + gesamtCapo + ". Bund";
          capoEl.style.display = "block";
        } else {
          capoEl.style.display = "none";
        }

        // Griffakkorde (ggf. transponiert via spickTranspSession)
        var ht = transpState.spickTranspSession || 0;
        var griffTonart = song.tonart
          ? transponiereTonart(song.tonart, ht)
          : "";
        var griffAkkorde =
          ht !== 0
            ? transponiereAkkordString(song.akkorde, ht, griffTonart)
            : song.akkorde || "";

        // Klingende Akkorde (wenn Capo gesetzt)
        var klingendAkkorde =
          gesamtCapo > 0
            ? transponiereAkkordString(griffAkkorde, gesamtCapo, "")
            : "";

        // Griffakkorde-Block
        var akkBlock = document.getElementById("spick-akkorde-block");
        var akkText = document.getElementById("spick-akkorde-text");
        if (griffAkkorde) {
          akkText.textContent = griffAkkorde;
          akkBlock.style.display = "block";
        } else {
          akkBlock.style.display = "none";
        }

        // Klingende Akkorde Info
        var transpInfo = document.getElementById("spick-transpose-info");
        var transpAkk = document.getElementById("spick-transpose-akkorde");
        if (klingendAkkorde && klingendAkkorde !== griffAkkorde) {
          transpAkk.textContent = "klingend: " + klingendAkkorde;
          transpInfo.classList.add("visible");
        } else if (ht !== 0) {
          transpAkk.textContent = griffTonart
            ? "Tonart: " + griffTonart
            : "transponiert: " + (ht > 0 ? "+" : "") + ht + " HT";
          transpInfo.classList.add("visible");
        } else {
          transpInfo.classList.remove("visible");
        }

        document.getElementById("spick-text").textContent =
          repariereTextAnzeige(song.text || "(kein Text)");

        // Noten-Toggle anzeigen wenn ABC vorhanden
        var spickNotenToggle = document.getElementById("spick-noten-toggle");
        var spickNotenBox = document.getElementById("spick-noten-box");
        var spickNotenRender = document.getElementById("spick-noten-render");
        if (song.noten_abc && spickNotenToggle) {
          spickNotenToggle.style.display = "block";
          // Noten-Box schlieÃŸen beim Liedwechsel
          if (spickNotenBox) {
            spickNotenBox.style.display = "none";
            if (spickNotenBox.dataset) spickNotenBox.dataset.rendered = "";
          }
          var btn = document.getElementById("spick-noten-btn");
          if (btn) {
            btn.textContent = "\u266a Noten einblenden";
            btn.setAttribute("aria-expanded", "false");
          }
        } else if (spickNotenToggle) {
          spickNotenToggle.style.display = "none";
          if (spickNotenBox) spickNotenBox.style.display = "none";
        }
      }

      function spickPrev() {
        if (state.spickIndex > 0) {
          state.spickIndex--;
          renderSpickzettel();
          scrollSpickToTop();
        }
      }

      function spickNext() {
        var ids = state._spickSingle || state.spickListe;
        if (state.spickIndex < ids.length - 1) {
          state.spickIndex++;
          renderSpickzettel();
          scrollSpickToTop();
        }
      }

      function scrollSpickToTop() {
        var el = document.getElementById("spickzettel");
        if (el) el.scrollTop = 0;
      }

      function updateSpickNavState(ids) {
        var prev = document.getElementById("spick-prev-btn");
        var next = document.getElementById("spick-next-btn");
        if (prev) prev.disabled = state.spickIndex <= 0;
        if (next) next.disabled = state.spickIndex >= ids.length - 1;
      }

      function applySpickFontScale() {
        var el = document.getElementById("spickzettel");
        var label = document.getElementById("spick-font-label");
        if (!el) return;
        el.style.setProperty("--spick-text-scale", state.spickFontScale);
        if (label) label.textContent = Math.round(state.spickFontScale * 100) + "%";
      }

      function changeSpickFontScale(delta) {
        state.spickFontScale = Math.max(
          0.8,
          Math.min(1.6, Math.round((state.spickFontScale + delta) * 10) / 10),
        );
        localStorage.setItem(
          "singleiter_spick_font_scale",
          String(state.spickFontScale),
        );
        applySpickFontScale();
      }

      function closeSpickzettel() {
        closeNotfall();
        closeDialog("spickzettel");
        state._spickSingle = null;
        state._spickSourceSetlistId = null;
      }

      function toggleSpickNoten() {
        var box = document.getElementById("spick-noten-box");
        var btn = document.getElementById("spick-noten-btn");
        if (!box) return;
        var offen = box.style.display === "none";
        box.style.display = offen ? "block" : "none";
        btn.textContent = offen ? "\u266a Noten ausblenden" : "\u266a Noten einblenden";
        btn.setAttribute("aria-expanded", offen ? "true" : "false");
        if (offen && window.ABCJS && !box.dataset.rendered) {
          var ids = state._spickSingle || state.spickListe;
          var song = state.songs.find(function(s) { return s.id === ids[state.spickIndex]; });
          if (song && song.noten_abc) {
            var slider = document.getElementById("spick-noten-slider");
            var scale = parseFloat((slider || {}).value || 100) / 100;
            spickRenderNoten(song, scale);
            box.dataset.rendered = "1";
          }
        }
      }

      function spickRenderNoten(song, scale) {
        if (!song || !song.noten_abc || !window.ABCJS) return;
        setTimeout(function() {
          var container = document.getElementById("spick-noten-render");
          if (!container) return;
          var breite = container.offsetWidth || 320;
          ABCJS.renderAbc("spick-noten-render", song.noten_abc, {
            staffwidth: Math.floor(breite * 0.95),
            scale: scale || 1
          });
        }, 50);
      }

      function spickNotenScaleAendern(val) {
        var label = document.getElementById("spick-noten-label");
        if (label) label.textContent = val + "%";
        var ids = state._spickSingle || state.spickListe;
        var song = state.songs.find(function(s) { return s.id === ids[state.spickIndex]; });
        var box = document.getElementById("spick-noten-box");
        if (box) box.dataset.rendered = "1";
        spickRenderNoten(song, parseFloat(val) / 100);
      }

      function toggleNotfall() {
        var modal = document.getElementById("notfall-modal");
        if (modal.classList.contains("open")) closeNotfall();
        else openDialog("notfall-modal", "class", "closeNotfall", ".notfall-tip");
      }

      function closeNotfall() {
        closeDialog("notfall-modal");
      }

      // ============================================================
      // HANDBUCH
      // ============================================================
      var handbuchDaten = []; // wird aus Supabase + HANDBUCH_DATA_DEFAULT befuellt
      var handbuchEditId = null; // null = neu, sonst supabase id

      var HANDBUCH_DATA_DEFAULT = [
        {
          titel: "&#128528; Umgang mit Widerstand",
          inhalt:
            "Widerstand ist oft kein Nein zur Musik \u2013 sondern ein Nein zu Druck oder Unsicherheit.\n\nWas hilft:\n- Einladung statt Aufforderung formulieren\n- Beobachtende Haltung anbieten\n- Bei koerperlichem Widerstand: Rhythmus statt Melodie",
          formulierungen: [
            "Sie muessen gar nichts \u2013 schauen Sie einfach zu, das ist auch schoen.",
            "Vielleicht kommt\u2019s ja noch \u2013 kein Druck.",
            "Darf ich mal Ihre Hand nehmen und den Rhythmus zeigen?",
            "Wer nicht singen mag, darf auch einfach nicken oder wippen.",
          ],
        },
        {
          titel: "&#128564; Umgang mit Müdigkeit",
          inhalt:
            "Müdigkeit ist ein Signal \u2013 sie zu übergehen kostet Vertrauen.\n\nWas hilft:\n- Tempo reduzieren, Stille zulassen\n- Ruhiges, bekanntes Lied einwerfen\n- Atempause explizit anbieten\n- Lautstärke reduzieren statt erhöhen",
          formulierungen: [
            "Merke ich, dass die Energie gerade nicht so da ist \u2013 dann machen wir\u2019s etwas ruhiger.",
            "Ein Lied noch, dann darf auch die Stimme Pause machen.",
            "Wir atmen jetzt alle kurz gemeinsam durch.",
            "Schliessen Sie gern die Augen \u2013 einfach hoeren reicht.",
          ],
        },
        {
          titel: "&#127754; Umgang mit Unruhe",
          inhalt:
            "Unruhe braucht zuerst Struktur, dann Beruhigung \u2013 nicht sofort Leise.\n\nWas hilft:\n- Rhythmisches Element einwerfen (Klatschen, Stampfen)\n- Klare, ruhige Stimme \u2013 nicht lauter werden\n- Koerperliche Orientierung anbieten\n- Kurze klare Ansage, dann direkt starten",
          formulierungen: [
            "Alle mal kurz auf die Füße schauen \u2013 spürt ihr den Boden?",
            "Ich klatsch einmal \u2013 und ihr macht mit, wenn ihr mögt.",
            "Wir fangen alle zusammen an \u2013 bereit?",
            "Kurze Pause \u2013 dann starten wir nochmal von vorne.",
            "Ich brauche kurz eure Aufmerksamkeit \u2013 danke.",
          ],
        },
        {
          titel: "&#127925; Übergänge gestalten",
          inhalt:
            "Der Übergang zwischen Liedern entscheidet über den Fluss der Stunde.\n\nPrinzip: Verbinden, nicht springen.\n\n- Kurze verbale Brücke bauen\n- Stimmung ankündigen wenn sie wechselt\n- Tempo des Endes ins nächste Lied überleiten",
          formulierungen: [
            "Das hat gut geklungen \u2013 und das naechste Lied passt da wunderbar dazu.",
            "Jetzt wechseln wir die Stimmung ein bisschen...",
            "Kurze Pause \u2013 dann starten wir mit etwas Neuem.",
            "Von diesem ruhigen Lied gehen wir direkt ins naechste \u2013 bleibt in der Stimmung.",
          ],
        },
        {
          titel: "&#128640; Einstiegssaetze",
          inhalt:
            "Die ersten 60 Sekunden entscheiden über die Gruppenstimmung.\n\n- Persönlich begrüßen\n- Niedrigschwellig einladen\n- Sofort loslegen \u2013 nicht zu viel erklären",
          formulierungen: [
            "Schoen, dass Sie alle da sind \u2013 fangen wir einfach an.",
            "Keine Angst vor falschen Toenen \u2013 die gibt es hier nicht.",
            "Wir singen heute einfach zusammen \u2013 das zaehlt, nicht die Stimme.",
            "Ich freue mich, dass ich wieder hier sein darf.",
            "Wir starten ganz sanft \u2013 einfach mitmachen wie es sich anfuehlt.",
          ],
        },
        {
          titel: "&#129302; Umgang mit Demenz",
          inhalt:
            "Das Langzeitgedächtnis für Musik bleibt oft erhalten, wenn vieles andere schon weg ist.\n\nWas hilft:\n- Lieder aus der Jugendzeit (1940\u201360)\n- Klare, einfache Melodien mit viel Wiederholung\n- Langsames Tempo, deutliche Aussprache\n- Körperliche Begleitung (Hände halten, wiegen)",
          formulierungen: [
            "Das kennen Sie sicher noch \u2013 fangen wir einfach an.",
            "Kein Druck \u2013 einfach hoeren ist auch wunderschoen.",
            "Darf ich Ihre Hand nehmen und mitwippen?",
            "Das haben Sie bestimmt schon oft gesungen.",
            "Wir singen das nochmal \u2013 einmal reicht nie.",
          ],
        },
        {
          titel: "&#128148; Umgang mit Trauer und Verlust",
          inhalt:
            "Trauer braucht Raum \u2013 nicht Aufhellungsversuche.\n\nWas hilft:\n- Ruhige, vertraute Lieder\n- Stille aushalten, nicht auffullen\n- Traenen sind willkommen \u2013 nicht kommentieren\n- Koerpernaehe anbieten (wenn passend)",
          formulierungen: [
            "Es darf auch still sein. Das ist auch Musik.",
            "Wenn Traenen kommen \u2013 die duerfen da sein.",
            "Wir singen heute für alle, die nicht mehr da sind.",
            "Schweigen ist manchmal das Ehrlichste.",
          ],
        },
        {
          titel: "&#128483; Schwierige Einzelpersonen",
          inhalt:
            "Manchmal stoert eine Person den Gruppenfluss \u2013 durch Reden, Rufen oder Ablehnung.\n\nWas hilft:\n- Direkt aber freundlich ansprechen\n- Nie vor der Gruppe blossstellen\n- Beduerfnis hinter dem Verhalten sehen\n- Im Zweifel: ignorieren und weitermachen",
          formulierungen: [
            "Ich komme gleich zu Ihnen \u2013 einen Moment noch.",
            "Das hoere ich \u2013 duerfen wir zuerst das Lied fertig singen?",
            "Moechten Sie lieber einfach zuhoeren?",
            "Ich freue mich über jeden, der da ist \u2013 egal wie.",
          ],
        },
        {
          titel: "&#128268; Technikpannen",
          inhalt:
            "Wenn Technik versagt \u2013 ruhig bleiben, die Gruppe spiegelt die eigene Haltung.\n\nWas hilft:\n- Sofort auf Akustik umsteigen\n- Humor einsetzen\n- Gruppe einbinden statt entschuldigen\n- Immer ein Notfallrepertoire a cappella bereithalten",
          formulierungen: [
            "Die Technik streikt \u2013 gut, dann singen wir eben echt.",
            "Das passiert den Besten \u2013 jetzt kommen wir ohne aus.",
            "A cappella klingt sowieso am schoensten.",
            "Kurze Pause \u2013 ich bin gleich wieder da.",
          ],
        },
        {
          titel: "&#128263; Wenn Stille kippt",
          inhalt:
            "Manche Stille ist fruchtbar \u2013 andere wird unbehaglich und laedt zu Unruhe ein.\n\nWas hilft:\n- Unterschied spueren: tragende vs. kippende Stille\n- Bei kippender Stille: sofort ruhig einsteigen\n- Summen als Bruecke\n- Blickkontakt halten waehrend der Stille",
          formulierungen: [
            "Ich lasse jetzt einen Moment Stille \u2013 einfach ankommen.",
            "Wir summen ganz leise zusammen \u2013 einfach mitmachen.",
            "Diese Stille gehoert dazu.",
            "Jetzt atmen wir alle kurz durch \u2013 und dann weiter.",
          ],
        },
      ];

      var CHECKLISTE_DEFAULT = [
        "Raum vorbereitet (Stühle, Licht, Temperatur)",
        "Liedzettel oder Spickzettel bereit",
        "Gitarre gestimmt / Technik gecheckt",
        "Notfallrepertoire im Kopf (3 Lieder a cappella)",
        "Eigene Stimmung gecheckt \u2013 wie bin ich gerade?",
        "Zeit gepuffert (kein Stress beim Anfang)",
        "Namen der Teilnehmenden bekannt (wenn möglich)",
        "Abschlusslied entschieden",
      ];
      var AUFBAU_DEFAULT = [
        {
          titel: "🎶 Ankommen & Aufwärmen (5–10 Min.)",
          text: "Begrüßung, persönliche Ansprache. Atemwahrnehmung, Summen auf „mmh“. Ein bekanntes, einfaches Lied ohne Text: Stimme wecken, nicht fordern.\n\nFormulierung: „Wir fangen ganz sanft an – einfach zuhören und mitmachen, wenn möglich.“",
        },
        {
          titel: "🎸 Hauptteil (20–30 Min.)",
          text: "2–4 Lieder, Kontraste setzen (ruhig/bewegt, bekannt/neu). Klatschen, Bewegung, Rhythmus einbauen. Auf Gruppenenergie achten – Plan flexibel halten.\n\nTipp: Bekanntes Lied als Anker, neues Lied einbetten.",
        },
        {
          titel: "🔔 Übergangslied (2–5 Min.)",
          text: "Tempo reduzieren, Energie sanft herunterregulieren. Ruhigere Melodie, weniger Stimme. Raum für das Ausklingen des Hauptteils.",
        },
        {
          titel: "✨ Abschluss (5–10 Min.)",
          text: "Ein klar bekanntes Abschlusslied. Kurzer Moment der Stille danach. Persönliche Verabschiedung – jeden anschauen.",
        },
        {
          titel: "🎤 Aufwärmen",
          text: "Summen auf „mmh“: Lippen locker, Resonanz spüren – 1 Minute reicht.\nKiefer lockern: „Wiwiwiwi“ oder Kaumimik.\nAtemanlasser: 4 Sek. ein, 4 halten, 8 aus.\nHalbton-Glissando: von tief nach hoch und zurück auf „ah“.",
        },
      ];

      function ladeHandbuchVonSupabase() {
        if (!sb) {
          handbuchDaten = HANDBUCH_DATA_DEFAULT.slice();
          renderHandbuch();
          return;
        }
        sb.from("singleiter_handbuch")
          .select("*")
          .order("sort_order")
          .then(function (res) {
            if (res.error || !res.data || res.data.length === 0) {
              handbuchDaten = HANDBUCH_DATA_DEFAULT.slice();
              // Defaults in Supabase speichern
              HANDBUCH_DATA_DEFAULT.forEach(function (d, i) {
                sb.from("singleiter_handbuch")
                  .insert({
                    sort_order: i,
                    titel: d.titel,
                    inhalt: d.inhalt,
                    formulierungen: d.formulierungen,
                    ist_standard: true,
                  })
                  .then(function () {});
              });
            } else {
              handbuchDaten = res.data.map(function (r) {
                return {
                  id: r.id,
                  titel: r.titel,
                  inhalt: r.inhalt,
                  formulierungen: Array.isArray(r.formulierungen)
                    ? r.formulierungen
                    : [],
                };
              });
            }
            renderHandbuch();
          });
      }

      function renderHandbuch() {
        var container = document.getElementById("handbuch-container");
        if (!container) return;
        if (handbuchDaten.length === 0) {
          container.innerHTML =
            '<p style="color:var(--text2);font-size:0.9rem">Wird geladen...</p>';
          return;
        }
        container.innerHTML = handbuchDaten
          .map(function (section, i) {
            return (
              '<div class="handbuch-section">' +
              '<button class="handbuch-toggle" aria-expanded="false" aria-controls="handbuch-' +
              i +
              '" onclick="toggleHandbuch(' +
              i +
              ', this)">' +
              section.titel +
              ' <span class="arrow">\u25BC</span>' +
              '<button class="handbuch-edit-btn" onclick="event.stopPropagation();handbuchBearbeiten(' +
              i +
              ')" title="Bearbeiten" aria-label="Praxiseintrag bearbeiten: ' +
              escHtml(section.titel) +
              '">&#9998;</button>' +
              "</button>" +
              '<div class="handbuch-content" id="handbuch-' +
              i +
              '">' +
              '<p style="margin-bottom:10px">' +
              escHtml(section.inhalt).replace(/\n/g, "<br>") +
              "</p>" +
              section.formulierungen
                .map(function (f) {
                  return (
                    '<div class="handbuch-formulierung">' +
                    escHtml(f) +
                    "</div>"
                  );
                })
                .join("") +
              "</div>" +
              "</div>"
            );
          })
          .join("");
        if (state._restoreScroll) {
          var pos = state._restoreScroll;
          state._restoreScroll = 0;
          setTimeout(function() {
            window.scrollTo(0, pos);
            document.documentElement.scrollTop = pos;
            document.body.scrollTop = pos;
          }, 0);
        }
      }

      function toggleHandbuch(i, btn) {
        var content = document.getElementById("handbuch-" + i);
        var open = content.classList.toggle("open");
        btn.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      }

      function handbuchTab(tab, btn) {
        document.getElementById("handbuch-situationen").style.display =
          tab === "situationen" ? "block" : "none";
        document.getElementById("handbuch-checkliste").style.display =
          tab === "checkliste" ? "block" : "none";
        document.getElementById("handbuch-aufbau").style.display =
          tab === "aufbau" ? "block" : "none";
        document.querySelectorAll(".handbuch-tab").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        if (tab === "checkliste") renderCheckliste();
        if (tab === "aufbau") renderAufbau();
      }

      // ---- MODAL ----
      function handbuchNeu() {
        handbuchEditId = null;
        document.getElementById("handbuch-modal-titel").textContent =
          "Neue Situation";
        document.getElementById("hb-titel").value = "";
        document.getElementById("hb-inhalt").value = "";
        document.getElementById("hb-formulierungen").value = "";
        document.getElementById("hb-del-btn").style.display = "none";
        openDialog("handbuch-modal", "class", "handbuchModalClose", "#hb-titel");
      }

      function handbuchBearbeiten(i) {
        var s = handbuchDaten[i];
        handbuchEditId = s.id || null;
        document.getElementById("handbuch-modal-titel").textContent =
          "Situation bearbeiten";
        document.getElementById("hb-titel").value = s.titel;
        document.getElementById("hb-inhalt").value = s.inhalt;
        document.getElementById("hb-formulierungen").value =
          s.formulierungen.join("\n");
        document.getElementById("hb-del-btn").style.display = handbuchEditId
          ? "block"
          : "none";
        openDialog("handbuch-modal", "class", "handbuchModalClose", "#hb-titel");
      }

      function handbuchModalClose() {
        closeDialog("handbuch-modal");
      }

      function handbuchSpeichern() {
        var titel = document.getElementById("hb-titel").value.trim();
        var inhalt = document.getElementById("hb-inhalt").value.trim();
        var formulierungen = document
          .getElementById("hb-formulierungen")
          .value.split("\n")
          .map(function (f) {
            return f.trim();
          })
          .filter(function (f) {
            return f.length > 0;
          });
        if (!titel) {
          alert("Bitte einen Titel eingeben.");
          return;
        }
        if (!sb) {
          alert("Keine Supabase-Verbindung.");
          return;
        }
        if (handbuchEditId) {
          sb.from("singleiter_handbuch")
            .update({
              titel: titel,
              inhalt: inhalt,
              formulierungen: formulierungen,
              updated_at: new Date().toISOString(),
            })
            .eq("id", handbuchEditId)
            .then(function () {
              handbuchModalClose();
              ladeHandbuchVonSupabase();
            });
        } else {
          sb.from("singleiter_handbuch")
            .insert({
              titel: titel,
              inhalt: inhalt,
              formulierungen: formulierungen,
              sort_order: handbuchDaten.length,
              ist_standard: false,
            })
            .then(function () {
              handbuchModalClose();
              ladeHandbuchVonSupabase();
            });
        }
      }

      function handbuchLoeschen() {
        if (!handbuchEditId) return;
        if (!confirm("Situation wirklich löschen?")) return;
        sb.from("singleiter_handbuch")
          .delete()
          .eq("id", handbuchEditId)
          .then(function () {
            handbuchModalClose();
            ladeHandbuchVonSupabase();
          });
      }

      // ---- CHECKLISTE ----
      function renderCheckliste() {
        var saved = JSON.parse(
          localStorage.getItem("singleiter_checkliste") || "{}",
        );
        var items = getChecklisteItems();
        var container = document.getElementById("checkliste-items");
        container.innerHTML = items.map(function (item, i) {
          var checked = saved[i] || false;
          return (
            '<div class="checkliste-item' +
            (checked ? " checked" : "") +
            '" id="cl-item-' +
            i +
            '">' +
            '<input type="checkbox" id="cl-' +
            i +
            '"' +
            (checked ? " checked" : "") +
            ' onchange="checklisteToggle(' +
            i +
            ')">' +
            '<label for="cl-' +
            i +
            '">' +
            escHtml(item) +
            "</label>" +
            '<button class="praxis-mini-btn" onclick="checklisteDelete(' +
            i +
            ')" aria-label="Checklistenpunkt löschen">&#10005;</button>' +
            "</div>"
          );
        }).join("");
      }

      function getChecklisteItems() {
        try {
          var items = JSON.parse(localStorage.getItem("singleiter_checkliste_items") || "null");
          return Array.isArray(items) && items.length ? items : CHECKLISTE_DEFAULT.slice();
        } catch (e) {
          return CHECKLISTE_DEFAULT.slice();
        }
      }

      function saveChecklisteItems(items) {
        localStorage.setItem("singleiter_checkliste_items", JSON.stringify(items));
      }

      function checklisteAdd() {
        var inp = document.getElementById("checkliste-neu");
        var val = normalisiereListenwert(inp && inp.value);
        if (!val) return;
        var items = getChecklisteItems();
        items.push(val);
        saveChecklisteItems(items);
        if (inp) inp.value = "";
        renderCheckliste();
      }

      function checklisteDelete(i) {
        var items = getChecklisteItems();
        items.splice(i, 1);
        saveChecklisteItems(items.length ? items : CHECKLISTE_DEFAULT.slice());
        localStorage.removeItem("singleiter_checkliste");
        renderCheckliste();
      }

      function checklisteToggle(i) {
        var saved = JSON.parse(
          localStorage.getItem("singleiter_checkliste") || "{}",
        );
        saved[i] = document.getElementById("cl-" + i).checked;
        localStorage.setItem("singleiter_checkliste", JSON.stringify(saved));
        var item = document.getElementById("cl-item-" + i);
        if (saved[i]) item.classList.add("checked");
        else item.classList.remove("checked");
      }

      function checklisteReset() {
        localStorage.removeItem("singleiter_checkliste");
        renderCheckliste();
      }

      function getAufbauItems() {
        try {
          var items = JSON.parse(localStorage.getItem("singleiter_aufbau_items") || "null");
          return Array.isArray(items) && items.length ? items : AUFBAU_DEFAULT.slice();
        } catch (e) {
          return AUFBAU_DEFAULT.slice();
        }
      }

      function saveAufbauItems(items) {
        localStorage.setItem("singleiter_aufbau_items", JSON.stringify(items));
      }

      function renderAufbau() {
        var container = document.getElementById("aufbau-items");
        if (!container) return;
        var legacy = document.querySelector(".legacy-aufbau");
        if (legacy) legacy.style.display = "none";
        container.innerHTML = getAufbauItems().map(function (item, i) {
          return (
            '<div class="stundenaufbau-phase praxis-editable-item">' +
            "<h4>" + escHtml(item.titel) + "</h4>" +
            "<p>" + escHtml(item.text).replace(/\n/g, "<br>") + "</p>" +
            '<div class="praxis-item-actions">' +
            '<button class="action-btn compact-btn" onclick="aufbauEdit(' + i + ')">Bearbeiten</button>' +
            '<button class="transpose-reset" onclick="aufbauDelete(' + i + ')">Löschen</button>' +
            "</div>" +
            "</div>"
          );
        }).join("");
      }

      function aufbauAdd() {
        var titelEl = document.getElementById("aufbau-neu-titel");
        var textEl = document.getElementById("aufbau-neu-text");
        var titel = normalisiereListenwert(titelEl && titelEl.value);
        var text = normalisiereListenwert(textEl && textEl.value);
        if (!titel || !text) {
          showToast("Bitte Titel und Text ausfüllen");
          return;
        }
        var items = getAufbauItems();
        items.push({ titel: titel, text: text });
        saveAufbauItems(items);
        titelEl.value = "";
        textEl.value = "";
        renderAufbau();
      }

      function aufbauEdit(i) {
        var items = getAufbauItems();
        var item = items[i];
        if (!item) return;
        var titel = prompt("Titel", item.titel);
        if (!titel || !titel.trim()) return;
        var text = prompt("Text", item.text);
        if (!text || !text.trim()) return;
        items[i] = { titel: titel.trim(), text: text.trim() };
        saveAufbauItems(items);
        renderAufbau();
      }

      function aufbauDelete(i) {
        var items = getAufbauItems();
        if (!confirm("Baustein wirklich löschen?")) return;
        items.splice(i, 1);
        saveAufbauItems(items.length ? items : AUFBAU_DEFAULT.slice());
        renderAufbau();
      }

      // ============================================================
      // LIED HINZUFUEGEN / BEARBEITEN / LOESCHEN
      // ============================================================
      var editSongId = null; // null = neues Lied, sonst ID des zu bearbeitenden Lieds
      var songFormSnapshot = null;

      function leseSongFormular() {
        var grundton = document.getElementById("add-grundton").value;
        var tonmodus = document.getElementById("add-tonmodus").value;
        return {
          titel: document.getElementById("add-titel").value.trim(),
          komponist: document.getElementById("add-komponist").value.trim(),
          tonart: grundton ? grundton + "-" + tonmodus : "",
          capo: zuRoemisch(document.getElementById("add-capo").value.trim()),
          akkorde: document.getElementById("add-akkorde").value.trim(),
          text: document.getElementById("add-text").value,
          notizen: document.getElementById("add-notizen").value,
          noten_abc: document.getElementById("add-noten-abc").value,
          sprache: document.getElementById("add-sprache").value,
          land: document.getElementById("add-land").value,
          kategorie: document.getElementById("add-kategorie").value,
          stimmung: document.getElementById("add-stimmung").value,
        };
      }

      function schreibeSongFormular(felder) {
        felder = felder || {};
        document.getElementById("add-titel").value = felder.titel || "";
        document.getElementById("add-komponist").value = felder.komponist || "";
        document.getElementById("add-capo").value = felder.capo || "";
        document.getElementById("add-akkorde").value = felder.akkorde || "";
        document.getElementById("add-text").value = felder.text || "";
        document.getElementById("add-notizen").value = felder.notizen || "";
        document.getElementById("add-noten-abc").value = felder.noten_abc || "";
        document.getElementById("add-stimmung").value = felder.stimmung || "";
        if (felder.tonart) {
          var parts = felder.tonart.split("-");
          document.getElementById("add-grundton").value = parts[0] || "";
          document.getElementById("add-tonmodus").value = parts[1] || "Dur";
        } else {
          document.getElementById("add-grundton").value = "";
          document.getElementById("add-tonmodus").value = "Dur";
        }
        document.getElementById("add-sprache").value = felder.sprache || "";
        document.getElementById("add-land").value = felder.land || "";
        document.getElementById("add-kategorie").value = felder.kategorie || "";
      }

      function merkeSongFormularStand() {
        songFormSnapshot = JSON.stringify(leseSongFormular());
      }

      function songFormularGeaendert() {
        return (
          songFormSnapshot !== null &&
          JSON.stringify(leseSongFormular()) !== songFormSnapshot
        );
      }

      function darfSongFormularVerlassen() {
        if (!document.getElementById("view-add").classList.contains("active")) return true;
        if (!songFormularGeaendert()) return true;
        return confirm("Änderungen verwerfen?");
      }

      function setSongSaveStatus(text, status) {
        var el = document.getElementById("add-save-status");
        if (!el) return;
        el.textContent = text || "";
        el.classList.remove("ok", "warn");
        if (status) el.classList.add(status);
      }

      function setTitleError(text) {
        var input = document.getElementById("add-titel");
        var error = document.getElementById("add-titel-error");
        if (!input || !error) return;
        error.textContent = text || "";
        input.classList.toggle("invalid", !!text);
        input.setAttribute("aria-invalid", text ? "true" : "false");
      }

      function setupSongFormAutosave() {
        [
          "add-titel",
          "add-komponist",
          "add-grundton",
          "add-tonmodus",
          "add-capo",
          "add-akkorde",
          "add-text",
          "add-notizen",
          "add-noten-abc",
          "add-sprache",
          "add-land",
          "add-kategorie",
          "add-stimmung",
        ].forEach(function (id) {
          var el = document.getElementById(id);
          if (!el) return;
          el.addEventListener("input", function () {
            if (id === "add-titel") setTitleError("");
            scheduleSongDraftSave();
          });
          el.addEventListener("change", scheduleSongDraftSave);
        });
      }

      function getCurrentSongDraftMeta() {
        return {
          editSongId: editSongId || null,
          mode: editSongId ? "edit" : "new",
        };
      }

      function isLongSongDraft(felder) {
        return ((felder && felder.text) || "").trim().length >= 80;
      }

      function scheduleSongDraftSave() {
        if (!document.getElementById("view-add").classList.contains("active")) return;
        clearTimeout(songDraftTimer);
        songDraftTimer = setTimeout(saveSongDraft, 700);
      }

      function saveSongDraft() {
        var felder = leseSongFormular();
        if (!isLongSongDraft(felder) || !songFormularGeaendert()) return;
        var meta = getCurrentSongDraftMeta();
        localStorage.setItem(
          SONG_DRAFT_KEY,
          JSON.stringify({
            savedAt: new Date().toISOString(),
            editSongId: meta.editSongId,
            mode: meta.mode,
            data: felder,
          }),
        );
        setSongSaveStatus("Entwurf lokal gespeichert", "");
      }

      function readSongDraft() {
        try {
          return JSON.parse(localStorage.getItem(SONG_DRAFT_KEY) || "null");
        } catch (e) {
          return null;
        }
      }

      function hideSongDraftOffer() {
        var box = document.getElementById("add-draft-offer");
        if (box) box.hidden = true;
      }

      function maybeOfferSongDraft() {
        hideSongDraftOffer();
        pendingSongDraft = null;
        var draft = readSongDraft();
        if (!draft || !draft.data || !isLongSongDraft(draft.data)) return;
        var meta = getCurrentSongDraftMeta();
        if (draft.mode !== meta.mode || (draft.editSongId || null) !== meta.editSongId) return;
        if (JSON.stringify(draft.data) === JSON.stringify(leseSongFormular())) return;
        pendingSongDraft = draft;
        var date = new Date(draft.savedAt);
        var time = isNaN(date.getTime())
          ? ""
          : " von " + date.toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" });
        var text = document.getElementById("add-draft-offer-text");
        if (text) text.textContent = "Gespeicherten Entwurf" + time + " wiederherstellen?";
        var box = document.getElementById("add-draft-offer");
        if (box) box.hidden = false;
      }

      function restoreSongDraft() {
        if (!pendingSongDraft || !pendingSongDraft.data) return;
        schreibeSongFormular(pendingSongDraft.data);
        setTitleError("");
        hideSongDraftOffer();
        setSongSaveStatus("Entwurf wiederhergestellt", "");
        scheduleSongDraftSave();
      }

      function discardSongDraft() {
        localStorage.removeItem(SONG_DRAFT_KEY);
        pendingSongDraft = null;
        hideSongDraftOffer();
        setSongSaveStatus("Entwurf verworfen", "warn");
      }

      function clearSongDraft() {
        localStorage.removeItem(SONG_DRAFT_KEY);
        pendingSongDraft = null;
        hideSongDraftOffer();
      }

      function showAddView() {
        if (
          document.getElementById("view-add").classList.contains("active") &&
          !darfSongFormularVerlassen()
        ) {
          return;
        }
        editSongId = null;
        document.getElementById("add-view-title").textContent =
          "Lied hinzuf\u00fcgen";
        document.getElementById("add-delete-btn").style.display = "none";
        befuelleFormularDropdowns();
        schreibeSongFormular({});
        setTitleError("");
        setSongSaveStatus("", "");
        showView("add");
        merkeSongFormularStand();
        maybeOfferSongDraft();
      }

      function editSong(id) {
        var song = state.songs.find(function (s) {
          return s.id === id;
        });
        if (!song) return;
        // Scroll-Position merken (falls noch nicht gesetzt)
        if (!state._songListScrollTop) {
          state._songListScrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
        }
        editSongId = id;
        document.getElementById("add-view-title").textContent =
          "Lied bearbeiten";
        document.getElementById("add-delete-btn").style.display = "inline-flex";
        var listenErgaenzt =
          stelleListenwertSicher("sprachen", song.sprache) ||
          stelleListenwertSicher("laender", song.land) ||
          stelleListenwertSicher("kategorien", song.kategorie);
        if (listenErgaenzt) {
          saveToStorage();
          speichereListenInSupabase();
        }
        befuelleFormularDropdowns();
        schreibeSongFormular(song);
        setTitleError("");
        setSongSaveStatus("", "");
        showView("add");
        merkeSongFormularStand();
        maybeOfferSongDraft();
      }

      function cancelEdit() {
        if (!darfSongFormularVerlassen()) return;
        var savedScroll = state._songListScrollTop || 0;
        songFormSnapshot = null;
        if (editSongId) {
          showView("repertoire");
          openSong(editSongId, true);
          state._songListScrollTop = savedScroll;
        } else {
          showView("repertoire");
          setTimeout(function() { setScrollPos(savedScroll); }, 0);
          setTimeout(function() { setScrollPos(savedScroll); }, 80);
          setTimeout(function() { setScrollPos(savedScroll); }, 250);
        }
        editSongId = null;
      }

      function zuRoemisch(val) {
        if (!val) return "";
        var s = String(val).trim().toUpperCase();
        var roemisch = [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
          "XII",
        ];
        // bereits roemisch?
        if (roemisch.indexOf(s) !== -1) return s;
        // arabisch?
        var n = parseInt(s);
        if (!isNaN(n) && n >= 1 && n <= 12) return roemisch[n - 1];
        return s; // unbekannt: unveraendert
      }

      function saveSong() {
        var felder = leseSongFormular();
        var titel = felder.titel;
        if (!titel) {
          setTitleError("Bitte Titel eingeben.");
          document.getElementById("add-titel").focus();
          showToast("Bitte Titel eingeben");
          return;
        }
        setTitleError("");
        stelleListenwertSicher("sprachen", felder.sprache);
        stelleListenwertSicher("laender", felder.land);
        stelleListenwertSicher("kategorien", felder.kategorie);
        if (editSongId) {
          state.songs = state.songs.map(function (s) {
            if (s.id !== editSongId) return s;
            var updated = Object.assign({}, s, felder);
            markSongSyncStatus(updated, canSyncSongsNow() ? "syncing" : "local", "");
            return updated;
          });
          saveToStorage();
          var updatedSong = state.songs.find(function (s) {
            return s.id === editSongId;
          });
          setSongSaveStatus("Lokal gespeichert, Sync läuft...", "");
          showToast("Lokal gespeichert, Sync läuft...");
          speichereInSupabase(updatedSong).then(function (row) {
            if (row && !updatedSong.supabase_id) {
              updatedSong.supabase_id = row.id;
              saveToStorage();
            }
            if (row) {
              markSongSyncStatus(updatedSong, "synced", "");
              saveToStorage();
              renderSongListIfVisible();
              if (state.currentSong && state.currentSong.id === updatedSong.id) renderDetail();
              setSongSaveStatus("Synchronisiert", "ok");
              showToast("Lied synchronisiert");
            } else {
              markSongSyncStatus(
                updatedSong,
                canSyncSongsNow() ? "error" : "pending",
                canSyncSongsNow() ? "Supabase konnte das Lied nicht speichern." : "",
              );
              saveToStorage();
              renderSongListIfVisible();
              if (state.currentSong && state.currentSong.id === updatedSong.id) renderDetail();
              setSongSaveStatus("Lokal gespeichert, Sync später", "warn");
              showToast("Lokal gespeichert, Sync später");
            }
          });
          var savedId = editSongId;
          var savedScroll = state._songListScrollTop || 0;
          merkeSongFormularStand();
          clearSongDraft();
          editSongId = null;
          state._restoreScroll = savedScroll;
          showView("repertoire");
          renderSongList();
          openSong(savedId, true);
          state._songListScrollTop = savedScroll;
        } else {
          var newSong = Object.assign(
            { id: Date.now(), stimmung: "verbindend" },
            felder,
          );
          markSongSyncStatus(newSong, canSyncSongsNow() ? "syncing" : "local", "");
          state.songs.push(newSong);
          saveToStorage();
          setSongSaveStatus("Lokal gespeichert, Sync läuft...", "");
          showToast("Lokal gespeichert, Sync läuft...");
          speichereInSupabase(newSong).then(function (row) {
            if (row) {
              newSong.supabase_id = row.id;
              markSongSyncStatus(newSong, "synced", "");
              saveToStorage();
              renderSongListIfVisible();
              setSongSaveStatus("Synchronisiert", "ok");
              showToast("Lied synchronisiert");
            } else {
              markSongSyncStatus(
                newSong,
                canSyncSongsNow() ? "error" : "pending",
                canSyncSongsNow() ? "Supabase konnte das Lied nicht speichern." : "",
              );
              saveToStorage();
              renderSongListIfVisible();
              setSongSaveStatus("Lokal gespeichert, Sync später", "warn");
              showToast("Lokal gespeichert, Sync später");
            }
          });
          clearSongDraft();
          befuelleFormularDropdowns();
          schreibeSongFormular({});
          merkeSongFormularStand();
          showView("repertoire");
          renderSongList();
        }
      }

      function deleteSongFromForm() {
        if (!editSongId) return;
        var song = state.songs.find(function (s) {
          return s.id === editSongId;
        });
        if (!song) return;
        if (
          !confirm(
            '"' +
              song.titel +
              '" wirklich l\u00f6schen?\nDas kann nicht r\u00fcckg\u00e4ngig gemacht werden.',
          )
        )
          return;
        var supId = song.supabase_id;
        state.songs = state.songs.filter(function (s) {
          return s.id !== editSongId;
        });
        state.favoriten = state.favoriten.filter(function (f) {
          return f !== editSongId;
        });
        state.spickListe = state.spickListe.filter(function (i) {
          return i !== editSongId;
        });
        state.setlists.forEach(function (sl) {
          sl.songs = sl.songs.filter(function (i) {
            return i !== editSongId;
          });
        });
        saveToStorage();
        loescheInSupabase(supId);
        editSongId = null;
        songFormSnapshot = null;
        clearSongDraft();
        showToast("Lied gel\u00f6scht");
        showView("repertoire");
        renderSongList();
      }

      // ============================================================
      // BACKUP
      // ============================================================
      function exportData() {
        var data = {
          version: 3,
          exportiert: new Date().toISOString(),
          songs: state.songs,
          favoriten: state.favoriten,
          spickListe: state.spickListe,
          setlists: state.setlists,
          listen: state.listen,
        };
        var blob = new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json",
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download =
          "singleiter-backup-" +
          new Date().toISOString().split("T")[0] +
          ".json";
        a.click();
        URL.revokeObjectURL(url);
        showToast("Backup heruntergeladen");
      }

      function importData(event) {
        var file = event.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (e) {
          try {
            var data = JSON.parse(e.target.result);
            if (!Array.isArray(data.songs)) {
              showToast("Ung\u00fcltige Backup-Datei");
              return;
            }
            pendingImportData = normalizeBackupData(data);
            renderImportPreview(pendingImportData);
          } catch (err) {
            showToast("Fehler beim Importieren");
          } finally {
            event.target.value = "";
          }
        };
        reader.readAsText(file);
      }

      function normalizeBackupData(data) {
        var listen = data.listen || {};
        return {
          version: data.version || "",
          exportiert: data.exportiert || "",
          songs: Array.isArray(data.songs) ? data.songs : [],
          favoriten: Array.isArray(data.favoriten) ? data.favoriten : [],
          spickListe: Array.isArray(data.spickListe) ? data.spickListe : [],
          setlists: Array.isArray(data.setlists) ? data.setlists : [],
          listen: {
            sprachen: Array.isArray(listen.sprachen) ? listen.sprachen : [],
            laender: Array.isArray(listen.laender) ? listen.laender : [],
            kategorien: Array.isArray(listen.kategorien) ? listen.kategorien : [],
          },
        };
      }

      function renderImportPreview(data) {
        var box = document.getElementById("import-preview");
        if (!box) return;
        var existingSongKeys = {};
        state.songs.forEach(function (song) {
          var key = songImportKey(song);
          if (key) existingSongKeys[key] = true;
        });
        var newSongCount = data.songs.filter(function (s) {
          var key = songImportKey(s);
          return !key || !existingSongKeys[key];
        }).length;
        var listenCount =
          data.listen.sprachen.length +
          data.listen.laender.length +
          data.listen.kategorien.length;
        box.style.display = "block";
        box.innerHTML =
          '<div class="import-preview-title">Backup erkannt</div>' +
          '<div class="import-summary">' +
          '<span>' + data.songs.length + " Lieder (" + newSongCount + " neu)</span>" +
          '<span>' + data.setlists.length + " Setlists</span>" +
          '<span>' + data.favoriten.length + " Favoriten</span>" +
          '<span>' + listenCount + " Listenwerte</span>" +
          "</div>" +
          '<div class="import-actions">' +
          '<button class="action-btn" onclick="applyImportMode(\'songs-only\')">Nur neue Lieder hinzuf&uuml;gen</button>' +
          '<button class="action-btn primary" onclick="applyImportMode(\'merge\')">Alles zusammenf&uuml;hren</button>' +
          '<button class="action-btn danger" onclick="applyImportMode(\'replace\')">Lokale Daten ersetzen</button>' +
          "</div>";
      }

      function songImportKey(song) {
        if (song && song.supabase_id) return "supabase:" + song.supabase_id;
        if (song && song.id !== undefined && song.id !== null) return "id:" + song.id;
        return "";
      }

      function cloneJson(obj) {
        return JSON.parse(JSON.stringify(obj));
      }

      function mergeUniqueNumberList(target, source, idMap) {
        source.forEach(function (oldId) {
          var newId = Object.prototype.hasOwnProperty.call(idMap, oldId)
            ? idMap[oldId]
            : oldId;
          if (target.indexOf(newId) === -1) target.push(newId);
        });
      }

      function mergeListenValues(importedListen) {
        Object.keys(LISTEN_LABELS).forEach(function (key) {
          mergeListenwerte(key, importedListen[key] || []);
        });
      }

      function importNewSongs(data) {
        var idMap = {};
        var existingKeys = {};
        state.songs.forEach(function (song) {
          var key = songImportKey(song);
          if (key) existingKeys[key] = song.id;
        });
        var added = 0;
        data.songs.forEach(function (song) {
          var key = songImportKey(song);
          if (key && Object.prototype.hasOwnProperty.call(existingKeys, key)) {
            idMap[song.id] = existingKeys[key];
            return;
          }
          var copy = cloneJson(song);
          if (!copy.id || state.songs.some(function (s) { return s.id === copy.id; })) {
            copy.id = Date.now() + Math.floor(Math.random() * 1000000);
          }
          if (song.id !== undefined) idMap[song.id] = copy.id;
          state.songs.push(copy);
          if (key) existingKeys[key] = copy.id;
          added++;
        });
        return { added: added, idMap: idMap };
      }

      function mergeSetlists(importedSetlists, idMap) {
        var added = 0;
        importedSetlists.forEach(function (sl) {
          var copy = cloneJson(sl);
          copy.songs = Array.isArray(copy.songs)
            ? copy.songs.map(function (id) {
                return Object.prototype.hasOwnProperty.call(idMap, id)
                  ? idMap[id]
                  : id;
              })
            : [];
          var exists = state.setlists.some(function (existing) {
            return (
              existing.name === copy.name &&
              JSON.stringify(existing.songs || []) === JSON.stringify(copy.songs || [])
            );
          });
          if (exists) return;
          if (!copy.id || state.setlists.some(function (existing) { return existing.id === copy.id; })) {
            copy.id = Date.now() + Math.floor(Math.random() * 1000000);
          }
          state.setlists.push(copy);
          added++;
        });
        return added;
      }

      function applyImportMode(mode) {
        if (!pendingImportData) {
          showToast("Bitte zuerst Backup-Datei ausw\u00e4hlen");
          return;
        }
        var result;
        if (mode === "replace") {
          if (!confirm("Lokale Daten wirklich durch dieses Backup ersetzen?")) return;
          state.songs = cloneJson(pendingImportData.songs);
          state.favoriten = cloneJson(pendingImportData.favoriten);
          state.spickListe = cloneJson(pendingImportData.spickListe);
          state.setlists = cloneJson(pendingImportData.setlists);
          state.listen = Object.assign({}, state.listen, cloneJson(pendingImportData.listen));
          result = { added: state.songs.length, setlists: state.setlists.length };
        } else {
          result = importNewSongs(pendingImportData);
          if (mode === "merge") {
            mergeUniqueNumberList(state.favoriten, pendingImportData.favoriten, result.idMap);
            mergeUniqueNumberList(state.spickListe, pendingImportData.spickListe, result.idMap);
            result.setlists = mergeSetlists(pendingImportData.setlists, result.idMap);
            mergeListenValues(pendingImportData.listen);
          }
        }
        saveToStorage();
        speichereListenInSupabase();
        renderSongList();
        renderSetlists();
        renderFavoriten();
        renderEinstellungen();
        var box = document.getElementById("import-preview");
        if (box) box.style.display = "none";
        pendingImportData = null;
        showToast(
          mode === "replace"
            ? "Lokale Daten ersetzt"
            : result.added + " neue Lieder importiert"
        );
      }

      function updateOfflineStatus() {
        var box = document.getElementById("offline-status");
        var text = document.getElementById("offline-status-text");
        if (!box || !text) return;
        var online = navigator.onLine !== false;
        box.classList.toggle("offline", !online);
        box.classList.toggle("online", online);
        text.textContent = online
          ? "Online: Sync und externe Bibliotheken können geladen werden."
          : "Offline verfügbar: lokale Daten bleiben nutzbar, Sync folgt später.";
      }

      // ============================================================
      // TOAST
      // ============================================================
      function showToast(msg) {
        var t = document.getElementById("toast");
        t.textContent = repariereTextAnzeige(msg);
        t.classList.add("show");
        setTimeout(function () {
          t.classList.remove("show");
        }, 2500);
      }

      // ============================================================
      // START
      // ============================================================
       document.getElementById("version-anzeige").textContent = APP_VERSION;
      function pruefeAufUpdate() {
        fetch(GITHUB_VERSION_URL + "?t=" + Date.now())
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
             if (data.version && data.version !== APP_VERSION) {
              var t = document.getElementById("toast");
              var changelogText = data.changelog ? '<br><em style="opacity:0.75;font-size:0.78rem;">' + data.changelog + '</em>' : '';
              t.innerHTML =
                "ðŸ†• Update " +
                data.version +
                " verfügbar" +
                changelogText +
                ' &nbsp;<button onclick="updateDurchfuehren()" style="background:var(--accent);color:white;border:none;padding:3px 10px;border-radius:6px;cursor:pointer;font-size:0.85rem;">Jetzt</button>';
              t.classList.add("show");
            }
          })
          .catch(function () {});
      }

      function updateDurchfuehren() {
        if (
          "serviceWorker" in navigator &&
          navigator.serviceWorker.controller
        ) {
          navigator.serviceWorker.controller.postMessage("skipWaiting");
        }
        caches
          .keys()
          .then(function (keys) {
            return Promise.all(
              keys.map(function (k) {
                return caches.delete(k);
              }),
            );
          })
          .then(function () {
            window.location.reload(true);
          });
      }

      init();
      setTimeout(pruefeAufUpdate, 3000);
