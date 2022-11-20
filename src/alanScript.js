intent ( 'Give me the news on $(item* (.*)) Category', (p) => {
    p.item.value=p.item.value.toLowerCase()
    if(p.item.value === 'health' || p.item.value === 'sports' || p.item.value === 'general' || p.item.value === 'business' || p.item.value === 'entertainment' || p.item.value === 'science' || p.item.value === 'technology' || p.item.value === 'technology') {
        p.play({ command: 'Category', data: p.item.value });
        p.play(`Fetching News on ${p.item.value} category` );
    }
    else if(p.item.value === 'not applicable'){
         p.play({ command: 'Category', data: ' ' });
        p.play(`Fetching News on ${p.item.value} category` );   
    }        
    else{
        p.play(`Cannot get news for ${p.item.value} category. Please choose the listed Category`);
    }
}) 

intent ( 'Give me the news of $(source* (.*))', (p) => {
    var flag = true
    switch(p.source.value.toLowerCase())
            {
                case 'united arab emirates':p.play({ command: 'Country', data: 'ae' });
                    break;
                case 'argentina':p.play({ command: 'Country', data: 'ar' });
                    break;
                case 'austria':p.play({ command: 'Country', data: 'at'});
                    break;
                case 'australia':p.play({ command: 'Country', data: 'au'});
                    break;
                case 'belgium':p.play({ command: 'Country', data: 'be'});
                    break;
                case 'bulgaria':p.play({ command: 'Country', data: 'bg'});
                    break;
                case 'brazil':p.play({ command: 'Country', data: 'br'});
                    break;
                case 'canada':p.play({ command: 'Country', data: 'ca'});
                    break;
                case 'switzerland':p.play({ command: 'Country', data: 'ch'});
                    break;
                case 'china':p.play({ command: 'Country', data: 'cn'});
                    break;
                case 'colombia':p.play({ command: 'Country', data: 'co'});
                    break;
                case 'cuba':p.play({ command: 'Country', data: 'cu'});
                    break;
                case 'czech republic':p.play({ command: 'Country', data: 'cz'});
                    break;
                case 'germany':p.play({ command: 'Country', data: 'de'});
                    break;
                case 'egypt':p.play({ command: 'Country', data: 'eg'});
                    break;
                case 'france':p.play({ command: 'Country', data: 'fr'});
                    break;
                case 'united kingdom':p.play({ command: 'Country', data: 'gb'});
                    break;
                case 'greece':p.play({ command: 'Country', data: 'gr'});
                    break;
                case 'hong kong':p.play({ command: 'Country', data: 'hk'});
                    break;
                case 'hungary':p.play({ command: 'Country', data: 'hu'});
                    break;
                case 'indonesia':p.play({ command: 'Country', data: 'id'});
                    break;
                case 'ireland':p.play({ command: 'Country', data: 'ie'});
                    break;
                case 'israel':p.play({ command: 'Country', data: 'il'});
                    break;
                case 'india':p.play({ command: 'Country', data: 'in'});
                    break;
                case 'italy':p.play({ command: 'Country', data: 'it'});
                    break;
                case 'japan':p.play({ command: 'Country', data: 'jp'});
                    break;
                case 'korea republic':p.play({ command: 'Country', data: 'kr'});
                    break;
                case 'lithuania':p.play({ command: 'Country', data: 'lt'});
                    break;
                case 'latvia':p.play({ command: 'Country', data: 'lv'});
                    break;
                case 'morocco':p.play({ command: 'Country', data: 'ma'});
                    break;
                case 'mexico':p.play({ command: 'Country', data: 'mx'});
                    break;
                case 'malaysia':p.play({ command: 'Country', data: 'my'});
                    break;
                case 'nigeria':p.play({ command: 'Country', data: 'ng'});
                    break;
                case 'netherlands':p.play({ command: 'Country', data: 'nl'});
                    break;
                case 'norway':p.play({ command: 'Country', data: 'no'});
                    break;
                case 'new zealand':p.play({ command: 'Country', data: 'nz'});
                    break;
                case 'philippines':p.play({ command: 'Country', data: 'ph'});
                    break;
                case 'poland':p.play({ command: 'Country', data: 'pl'});
                    break;
                case 'portugal':p.play({ command: 'Country', data: 'pt'});
                    break;
                case 'romania':p.play({ command: 'Country', data: 'ro'});
                    break;
                case 'russian federation':p.play({ command: 'Country', data: 'rs'});
                    break;
                case 'saudi arabia':p.play({ command: 'Country', data: 'sa'});
                    break;
                case 'sweden':p.play({ command: 'Country', data: 'se'});
                    break;
                case 'singapore':p.play({ command: 'Country', data: 'sg'});
                    break;
                case 'slovenia':p.play({ command: 'Country', data: 'si'});
                    break;
                case 'slovakia':p.play({ command: 'Country', data: 'sk'});
                    break;
                case 'thailand':p.play({ command: 'Country', data: 'th'});
                    break;
                case 'turkey':p.play({ command: 'Country', data: 'tr'});
                    break;
                case 'taiwan':p.play({ command: 'Country', data: 'tw'});
                    break;
                case 'ukraine':p.play({ command: 'Country', data: 'ua'});
                    break;
                case 'united states':p.play({ command: 'Country', data: 'us'});
                    break;
                case 'venezuela':p.play({ command: 'Country', data: 've'});
                    break;
                case 'south africa':p.play({ command: 'Country', data: 'za'});
                    break;
                case 'not applicable':p.play({ command: 'Country', data: ' ' });
                    break;    
                default: p.play(`Cannot get news for ${p.source.value} Country. Please choose the listed Country.`);
                        flag = false
            }
        if(flag == true)
        p.play(`Fetching News on ${p.source.value} Country` ); 
}) 

intent ( 'Give me the news in $(l* (.*)) Language', (p) => {
  var flag = true
    switch(p.l.value.toLowerCase())
            {
                case 'arabic':p.play({ command: 'Language', data: 'ar' });
                    break;
                case 'german':p.play({ command: 'Language', data: 'de' });
                    break;
                case 'english':p.play({ command: 'Language', data: 'en' });
                    break;
                case 'spanish':p.play({ command: 'Language', data: 'es' });
                    break;
                case 'french':p.play({ command: 'Language', data: 'fr' });
                    break;
                case 'hebrew':p.play({ command: 'Language', data: 'he' });
                    break;
                case 'italian':p.play({ command: 'Language', data: 'it' });
                    break;
                case 'dutch':p.play({ command: 'Language', data: 'nl' });
                    break;
                case 'norwegian':p.play({ command: 'Language', data: 'no' });
                    break;
                case 'portuguese':p.play({ command: 'Language', data: 'pt' });
                    break;
                case 'russian':p.play({ command: 'Language', data: 'ru' });
                    break;
                case 'swedish':p.play({ command: 'Language', data: 'sv' });
                    break;
                case 'chinese':p.play({ command: 'Language', data: 'zh' });
                    break;
                case 'not applicable':p.play({ command: 'Language', data: ' ' });
                    break;    
                default: p.play(`Cannot get news in ${p.l.value} language. Please choose the listed Language.`);
                        flag = false
            }
    if(flag == true)
        p.play(`Fetching News in ${p.l.value} Language` );
})    

const SOURCES = ['abc news', 'abc news au', 'aftenposten', 'al jazeera english', 'ansa', 'argaam', 'ars technica', 'ary news', 'associated press','australian financial review', 'axios', 'bbc news', 'bbc sport', 'bild', 
                 'blasting news br', 'bleacher report', 'bloomberg', 'breitbart news', 'business insider', 'business insider uk', 'buzzfeed', 'cbc news', 'cbs news', 'cnn', 'cnn es', 'crypto coins news', 'der tagesspiegel',
                 'die zeit', 'el mundo', 'engadget', 'entertainment weekly', 'espn', 'espn cric info', 'financial post', 'focus', 'football italia', 'fortune', 'four four two', 'fox news', 'fox sports', 'globo', 'google news',
                 'google news ar', 'google news au', 'google news br', 'google news ca', 'google news fr', 'google news in', 'google news is', 'google news it', 'google news ru', 'google news sa', 'google news uk', 
                 'goteborgs posten', 'gruenderszene', 'hacker news', 'handelsblatt', 'ign', 'il sole 24 ore', 'independent', 'infobae', 'info money', 'la gaceta', 'la nacion', 'la repubblica', 'le monde', 'lenta', 'lequipe', 
                 'les echos', 'liberation', 'marca', 'mashable', 'medical news today', 'msnbc', 'mtv news', 'mtv news uk', 'national geographic', 'national review', 'nbc news', 'news24', 'new scientist', 'news com au',
                 'newsweek', 'new york magazine', 'next big future', 'nfl news', 'nhl news', 'nrk', 'politico','polygon', 'rbc', 'recode', 'reddit r all', 'reuters', 'rt', 'rte', 'rtl nieuws', 'sabq', 'spiegel online',
                 'svenska dagbladet', 't3n', 'talksport', 'techcrunch', 'techcrunch cn', 'techradar', 'the american conservative', 'the globe and mail', 'the hill', 'the hindu', 'the huffington post', 'the irish times',
                 'the jerusalem post', 'the lad bible', 'the next web', 'the sport bible', 'the times of india', 'the verge', 'the wall street journal', 'the washington post', 'time', 'usa today', 'vice news', 'wired',
                 'wired de', 'wirtschafts woche', 'xinhua net', 'ynet'];

intent ( 'Give me the news by $(s* (.*))', (p) => {
    switch(p.s.value.toLowerCase()){
        case 'google news argentina':p.play({ command: 'Source', data: 'google-news-ar' });
                                     p.play(`Fetching News by ${p.s.value} Source` );
                                     break;
        case 'google news australia':p.play({ command: 'Source', data: 'google-news-au' });
                                     p.play(`Fetching News by ${p.s.value} Source` );
                                     break;
        case 'google news brasil':p.play({ command: 'Source', data: 'google-news-br' });
                                  p.play(`Fetching News by ${p.s.value} Source` );
                                  break;
        case 'google news canada':p.s.label=p.s.value
                                  p.s.value=
                                  p.play({ command: 'Source', data: 'google-news-ca' });
                                  p.play(`Fetching News by ${p.s.value} Source` );
                                  break;
        case 'google news france':p.play({ command: 'Source', data: 'google-news-fr' });
                                  p.play(`Fetching News by ${p.s.value} Source` );
                                  break;
        case 'google news india':p.play({ command: 'Source', data: 'google-news-in' });
                                 p.play(`Fetching News by ${p.s.value} Source` );
                                 break;
        case 'google news israel':p.play({ command: 'Source', data: 'google-news-is' });
                                  p.play(`Fetching News by ${p.s.value} Source` );
                                  break;
        case 'google news italy':p.play({ command: 'Source', data: 'google-news-it' });
                                 p.play(`Fetching News by ${p.s.value} Source` );
                                 break;
        case 'google news russia':p.play({ command: 'Source', data: 'google-news-ru' });
                                  p.play(`Fetching News by ${p.s.value} Source` );
                                  break;
        case 'google news saudi arabia':p.play({ command: 'Source', data: 'google-news-sa' });
                                        p.play(`Fetching News by ${p.s.value} Source` );
                                        break;
       case 'google news uk':p.play({ command: 'Source', data: 'google-news-uk' });
                             p.play(`Fetching News by ${p.s.value} Source` );
                             break;
       default: const flag = SOURCES.includes(p.s.value.toLowerCase())
                if(flag){
                    p.s.label=p.s.value
                    p.s.value=p.s.value.toLowerCase().replace(/ /g,"-")
                    p.play({ command: 'Source', data: p.s.value });
                    p.play(`Fetching News by ${p.s.label} Source` );  
                    }
                else{
                    p.play(`Cannot get news in ${p.s.value} Source. Please choose the listed Sources.` );    
                }     
    }
})    

intent ( 'what\'s up with $(term* (.*))', (p) => {
     p.play({ command: 'Term', data: p.term.value });
     p.play(`Fetching News by Term: ${p.term.value}` );  
})  

intent(`What does this app do?`, `How does this work?`, `What can I do here?`, `How should I use this?`,
    reply(`This is a news project, and It can provide the most recent headlines in mainstream media` +
        ` Just ask me anything about the news, and I will try to answer it`));

intent('What else you can do ',
    reply('I have small features for small talk, I can translates in German, English and other languages, I can give you time date and weather information.'));
       

intent(
    '(How|)  (can i use|to use) (it|) (this|) (application|app|news application|news app)',
    reply('Use dropdown menu or by using the mic.'),
);

intent(
    'what to say (to call by Category|for Catgory)','How to call (by|) Category',
    reply('To call by Category name Say Give me the news on Health Category.'),    
);

intent(
    'what to say (to call by Country|for Country)','How to call (by|) Country',
    reply('To call by Country name Say Give me the news of India.'),    
);

intent(
    'what to say (to call by Language|for Language)','How to call (by|) Language',
    reply('To call by Language name Say Give me the news in English Language.'),    
);

intent(
    'what to say (to call by Source|for Source)','How to call (by|) Source',
    reply('To call by Source name Say Give me the news by Google News India.'),    
);

intent(
    'what to say (to call by Term|for Term)','How to call (by|) Term',
    reply('To call by Term name Say What\'s up with Bitcoin.'),    
);


