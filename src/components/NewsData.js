import React, { useEffect, useState } from 'react';
import { getNews } from '../Service/getNews';
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function NewsData() {
    const [newsData, setNewsData] = useState([]);
    const alanKey = `24d12801e54c6576d7c17d381d0cf2be2e956eca572e1d8b807a3e2338fdd0dc/stage`; 

    const [selectOption, setSelectOption] = useState('');
    const [selectOptionLanguage, setSelectLanguage] = useState('');
    const [selectOptionCountry, setSelectCountry] = useState('');
    const [selectOptionSource, setSelectSource] = useState('');
    const [textSpeechTerm, setTextTerm] = useState('');
    
    
    const [sourceFlag,setSourceFlag] = useState('');
    const [termFlag,setTermFlag] = useState('');

    const getAllNews = async () => {
        let data = await getNews(selectOption,selectOptionCountry,selectOptionLanguage,selectOptionSource, textSpeechTerm, sourceFlag, termFlag);
        setNewsData(data.data.articles)
    }
    
    const selectCategory = (event) =>{
        setSelectOption(event.target.value)
        setSourceFlag('False')
        setTermFlag('False')
    }

    const selectLanguage = (event) =>{
        setSelectLanguage(event.target.value)
        setSourceFlag('False')
        setTermFlag('False')
    }

    const selectCountry = (event) =>{
        setSelectCountry(event.target.value)
        setSourceFlag('False')
        setTermFlag('False')
    }

    const selectSource = (event) =>{
        setSelectSource(event.target.value)
        setSourceFlag('True')
        setTermFlag('False')
    }
    
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
               if(commandData.command === 'Language')
               { setSelectLanguage(commandData.data); setSourceFlag('False'); setTermFlag('False')}
               if(commandData.command === 'Country')
               { setSelectCountry(commandData.data); setSourceFlag('False'); setTermFlag('False')}
               if(commandData.command === 'Category')  
               { setSelectOption(commandData.data); setSourceFlag('False'); setTermFlag('False')}
               if(commandData.command === 'Source')  
               { setSelectSource(commandData.data); setSourceFlag('True'); setTermFlag('False')}
               if(commandData.command === 'Term')
               { setTextTerm(commandData.data); setSourceFlag('False'); setTermFlag('True')}
            }
        });
      }, []);

    useEffect(() =>{
        getAllNews()
    }, [selectOption,selectOptionCountry,selectOptionLanguage,selectOptionSource,textSpeechTerm])
    //console.log(newsData?.data?.articles)
   return (
        <div className='main'>
            <h1>Voice News</h1>
            <div className='select-group'>
                <div className='select'>
                    <label for="country">Choose by Country:</label>&nbsp;&nbsp;

                    <select  
                    className='select-box' 
                    name="country" 
                    id="country"
                    onChange={selectCountry}
                    value={selectOptionCountry}
                    >
                    <option value="ae">United Arab Emirates</option>
                    <option value="ar">Argentina</option>
                    <option value="at">Austria</option>
                    <option value="au">Australia</option>
                    <option value="be">Belgium</option>
                    <option value="bg">Bulgaria</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="ch">Switzerland</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="cu">Cuba</option>
                    <option value="cz">Czech Republic</option>
                    <option value="de">Germany</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="gb">United Kingdom</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungary</option>
                    <option value="id">Indonesia</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="in">India</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="kr">Korea, Republic</option>
                    <option value="lt">Lithuania</option>
                    <option value="lv">Latvia</option>
                    <option value="ma">Morocco</option>
                    <option value="mx">Mexico</option>
                    <option value="my">Malaysia</option>
                    <option value="ng">Nigeria</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="nz">New Zealand</option>
                    <option value="ph">Philippines</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="rs">Russian Federation</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="se">Sweden</option>
                    <option value="sg">Singapore</option>
                    <option value="si">Slovenia</option>
                    <option value="sk">Slovakia (Slovak Republic)</option>
                    <option value="th">Thailand</option>
                    <option value="tr">Turkey</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="us">United States</option>
                    <option value="ve">Venezuela</option>
                    <option value="za">South Africa</option>
                    <option value=" ">Not Applicable</option>
                    </select><br/>
                    <label>Try saying:<say className='say'>&nbsp; Give me the news of India</say></label>
                </div>
                <div className='select'>
                    <label for="language">Choose by Language:</label>&nbsp;&nbsp;

                    <select  
                    className='select-box' 
                    name="language" 
                    id="language"
                    onChange={selectLanguage}
                    value={selectOptionLanguage}
                    >
                    <option value="ar">Arabic</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="zh">Chinese</option> 
                    <option value=" ">Not Applicable</option>
                    </select><br/>
                    <label>Try saying:<say className='say'>&nbsp; Give me the news in English Language</say></label>
                </div>
                <div className='select'>
                    <label for="category">Choose by Category:</label>&nbsp;&nbsp;

                    <select  
                    className='select-box' 
                    name="category" 
                    id="category"
                    onChange={selectCategory}
                    value={selectOption}
                    >
                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                    <option value=" ">Not Applicable</option>
                    </select><br/>
                    <label>Try saying:<say className='say'>&nbsp; Give me the news on Science Category</say></label>
                </div>
            </div>
            <div className='hr'></div>
            <div className='select-group'>
                <div className='select'>
                    <label for="source">Choose by Source:</label>&nbsp;&nbsp;

                    <select  
                    className='select-box' 
                    name="source" 
                    id="source"
                    onChange={selectSource}
                    value={selectOptionSource}
                    >
                    <option selected disabled></option>    
                    <option value="abc-news">ABC News</option>
                    <option value="abc-news-au">ABC News AU</option>
                    <option value="aftenposten">Aftenposten</option>
                    <option value="al-jazeera-english">Al Jazeera English</option>
                    <option value="ansa">Ansa</option>
                    <option value="argaam">Argaam</option>
                    <option value="ars-technica">Ars Technica</option>
                    <option value="ary-news">Ary News</option>
                    <option value="associated-press">Associated Press</option>
                    <option value="australian-financial-review">Australian Financial Review</option>
                    <option value="axios">Axios</option>
                    <option value="bbc-news">BBC News</option>
                    <option value="bbc-sport">BBC Sport</option>
                    <option value="bild">Bild</option>
                    <option value="blasting-news-br">Blasting News BR</option>
                    <option value="bleacher-report">Bleacher Report</option>
                    <option value="bloomberg">Bloomberg</option>
                    <option value="breitbart-news">Breitbart News</option>
                    <option value="business-insider">Business Insider</option>
                    <option value="business-insider-uk">Business Insider UK</option>
                    <option value="buzzfeed">Buzzfeed</option>
                    <option value="cbc-news">CBC News</option>
                    <option value="cbs-news">CBS News</option>
                    <option value="cnn">CNN</option>
                    <option value="cnn-es">CNN ES</option>
                    <option value="crypto-coins-news">Crypto Coins News</option>
                    <option value="der-tagesspiegel">Der Tagesspiegel</option>
                    <option value="die-zeit">Die Zeit</option>
                    <option value="el-mundo">El Mundo</option>
                    <option value="engadget">Engadget</option>
                    <option value="entertainment-weekly">Entertainment Weekly</option>
                    <option value="espn">ESPN</option>
                    <option value="espn-cric-info">ESPN Cric Info</option>
                    <option value="financial-post">Financial Post</option>
                    <option value="focus">Focus</option>
                    <option value="football-italia">Football Italia</option>
                    <option value="fortune">Fortune</option>
                    <option value="four-four-two">Four Four Two</option>
                    <option value="fox-news">Fox News</option>
                    <option value="fox-sports">Fox Sports</option>
                    <option value="globo">Globo</option>
                    <option value="google-news">Google News</option>
                    <option value="google-news-ar">Google News Argentina</option>
                    <option value="google-news-au">Google News Australia</option>
                    <option value="google-news-br">Google News Brasil</option>
                    <option value="google-news-ca">Google News Canada</option>
                    <option value="google-news-fr">Google News France</option>
                    <option value="google-news-in">Google News India</option>
                    <option value="google-news-is">Google News Israel</option>
                    <option value="google-news-it">Google News Italy</option>
                    <option value="google-news-ru">Google News Russia</option>
                    <option value="google-news-sa">Google News Saudi Arabia</option>
                    <option value="google-news-uk">Google News UK</option>
                    <option value="goteborgs-posten">Goteborgs-Posten</option>
                    <option value="gruenderszene">Gruenderszene</option>
                    <option value="hacker-news">Hacker News</option>
                    <option value="handelsblatt">Handelsblatt</option>
                    <option value="ign">IGN</option>
                    <option value="il-sole-24-ore">Il Sole 24 Ore</option>
                    <option value="independent">Independent</option>
                    <option value="infobae">Infobae</option>
                    <option value="info-money">Info Money</option>
                    <option value="la-gaceta">La Gaceta</option>
                    <option value="la-nacion">La Nacion</option>
                    <option value="la-repubblica">La Repubblica</option>
                    <option value="le-monde">Le Monde</option>
                    <option value="lenta">Lenta</option>
                    <option value="lequipe">Lequipe</option>
                    <option value="les-echos">Les Echos</option>
                    <option value="liberation">Libération</option>
                    <option value="marca">Marca</option>
                    <option value="mashable">Mashable</option>
                    <option value="medical-news-today">Medical News Today</option>
                    <option value="msnbc">MSNBC</option>
                    <option value="mtv-news">MTV News</option>
                    <option value="mtv-news-uk">MTV News UK</option>
                    <option value="national-geographic">National Geographic</option>
                    <option value="national-review">National Review</option>
                    <option value="nbc-news">NBC News</option>
                    <option value="news24">News24</option>
                    <option value="new-scientist">New Scientist</option>
                    <option value="news-com-au">News com au</option>
                    <option value="newsweek">Newsweek</option>
                    <option value="new-york-magazine">New York Magazine</option>
                    <option value="next-big-future">Next Big Future</option>
                    <option value="nfl-news">NFL News</option>
                    <option value="nhl-news">NHL News</option>
                    <option value="nrk">NRK</option>
                    <option value="politico">Politico</option>
                    <option value="polygon">Polygon</option>
                    <option value="rbc">RBC</option>
                    <option value="recode">Recode</option>
                    <option value="reddit-r-all">Reddit r all</option>
                    <option value="reuters">Reuters</option>
                    <option value="rt">RT</option>
                    <option value="rte">RTE</option>
                    <option value="rtl-nieuws">RTL Nieuws</option>
                    <option value="sabq">SABQ</option>
                    <option value="spiegel-online">Spiegel Online</option>
                    <option value="svenska-dagbladet">Svenska Dagbladet</option>
                    <option value="t3n">T3n</option>
                    <option value="talksport">TalkSport</option>
                    <option value="techcrunch">TechCrunch</option>
                    <option value="techcrunch-cn">TechCrunch CN</option>
                    <option value="techradar">TechRadar</option>
                    <option value="the-american-conservative">The American Conservative</option>
                    <option value="the-globe-and-mail">The Globe And Mail</option>
                    <option value="the-hill">The Hill</option>
                    <option value="the-hindu">The Hindu</option>
                    <option value="the-huffington-post">The Huffington Post</option>
                    <option value="the-irish-times">The Irish Times</option>
                    <option value="the-jerusalem-post">The Jerusalem Post</option>
                    <option value="the-lad-bible">The Lad Bible</option>
                    <option value="the-next-web">The Next Web</option>
                    <option value="the-sport-bible">The Sport Bible</option>
                    <option value="the-times-of-india">The Times of India</option>
                    <option value="the-verge">The Verge</option>
                    <option value="the-wall-street-journal">The Wall Street Journal</option>
                    <option value="the-washington-post">The Washington Post</option>
                    <option value="time">Time</option>
                    <option value="usa-today">USA Today</option>
                    <option value="vice-news">Vice News</option>
                    <option value="wired">Wired</option>
                    <option value="wired-de">Wired de</option>
                    <option value="wirtschafts-woche">Wirtschafts Woche</option>
                    <option value="xinhua-net">Xinhua Net</option>
                    <option value="ynet">Ynet</option>
                    </select><br/>
                    <label>Try saying:<say className='say'>&nbsp; Give me the news by Google News India</say></label>
                </div>
                <div className='selectvl'>
                <div class="vl"></div>
                </div>
                <div className='select'>
                <label for="source">News by Term:</label>&nbsp;&nbsp;
                <input type='text'className='text-box' value={textSpeechTerm} readOnly></input><br/>
                <label>Try saying:<say className='say'>&nbsp; What's up with Bitcoin</say></label>
                </div>
            </div>    
            <div className='grid-main'>
            {newsData.map((news) => {  
                return (
                    <div className='grid-child'>
                        <img
                        className='news-image'
                        src={news?.urlToImage} 
                        alt='Image not available'
                        />
                        <p className='news-title'>{news?.title}</p>
                        <p className='news-content'>{news?.content}</p>
                        <div className='space-between'>
                        <p className='news-author'>Author: {news?.author ? news?.author : 'Author name not available '}</p>
                        <p className='news-date'>Date: {moment(news?.publishedAt).format('LL')}</p>
                        </div>
                        <a href={news?.url} target="_blank">Read More..</a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
