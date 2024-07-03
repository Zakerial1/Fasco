import React from "react";
import { useState, useEffect } from 'react';
import Navigation from "../Navigation/Navigation";
import { useParams } from 'react-router-dom';
import { selectArr } from '../Slices/SlicePlashka';
import { createComments, commentName } from '../Slices/SliceCommt.js'
import styles from '../Store_plashka/srorePlashka.module.css';
import stylesHomepage from '../Homepage/homepage.module.css';
import CountdownTimer from '../home_page_timer/homepage_timer.jsx';
import { Link, useNavigate } from "react-router-dom";
import { additionItem } from '../Slices/SliceCorzina'
import { useSelector, useDispatch } from 'react-redux';
import { selectItemCorzina, size, colorSelect, deletItem, quantityPlus, quantityMinus } from "../Slices/SliceCorzina.js";
import { createComment, } from '../Slices/SliceCommt.js'
import Paeky from "../paeky_blinder/peaky_blinders";

import { selectarrUser, selectCurrentUser } from '../Slices/SliceRegistr';
function StorePlashka(props) {
    const targetDate = new Date('2024-09-31T23:59:59');
    let arr = useSelector(selectArr);
    let arrComments = useSelector(createComments);
    let Current = useSelector(selectCurrentUser)
    const [summ, setSumm] = useState(500);
    const [red, setRed] = useState(10);
    let a = (summ / red) / 10;
    const [date, setDate] = useState(new Date(3600 * 24 * 1000));
    const event = new Date();
    const [activeone, setActiveone] = useState(true);
    const [activetwo, setActivetwo] = useState(true);
    const [activetree, setActivetree] = useState(true);
    const [activeSizeOne, setActiveSizeOne] = useState(true);
    const [activeSizeTwo, setActiveSizeTwo] = useState(true);
    const [activeSizeThre, setActiveSizeThre] = useState(true);
    const [activeSizeVour, setActiveSizeVour] = useState(true);
    const [activeCorzina, setActiveCorzina] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [quantityStore, setQuantityStore] = useState(1);
    const [idPage, setIdPage] = useState({ name: '', cost: 0, img: '', date: "", reiting: 0, brands: '', id: 0, color: '', size: '', quantityArr: '' });
    const [corzina, setCorzina] = useState({ name: '', cost: 0, img: '', date: "", reiting: 0, brands: '', id: 0, color: '', size: '', quantityArr: '' });
    const [colorItem, setColorItem] = useState("");
    const [starColor, setStarColor] = useState(true);
    const [mouseX, setMouseX] = useState(0);
    let items = useSelector(selectItemCorzina);
    const dispatch = useDispatch();
    const [black, setBlack] = useState(true);
    const [gold, setGold] = useState();
    const [commentText, setCommentText] = useState();
    // const regexText = new RegExp('(?:без|бес|в|во|воз|вос|возо|вз|вс|вы|до|за|из|ис|изо|на|наи|недо|над|надо|не|низ|нис|низо|о|об|обо|обез|обес|от|ото|па|пра|по|под|подо|пере|пре|пред|предо|при|про|раз|рас|разо|с|со|су|через|черес|чрез|а|ана|анти|архи|гипер|гипо|де|дез|дис|ин|интер|инфра|квази|кило|контр|макро|микро|мега|мата|мульти|орто|пан|пара|пост|прото|ре|суб|супер|транс|ультра|зкстра|экс|(?<= ))[ъь]?(?:(?:[хx][уy][ейiяyи]|[pп][иёе][zзsсc][dд]|[eе][лl][dд]|[еёeiи][бb]|шлю|твар|хер|мраз|шалав|манд|сипов|секел|поц|дроч|залуп|минд?ж|пид[оа]|курв|сперм|г[ао]нд|менстр|кун[аи]|сра[тл]|сса[тл]|бзд|перд|дри(?:ст|щ)|говн|жоп|целк|трах|харит|минет|блев|малаф|вагин)о*)+(?:адь|ак|алей|ан|ян|анин|янин|анк|янк|ар|арь|ариц|арк|ач|ени|ани|еств|ств|есть|ость|ец|к|изм|изн|ик|ник|нин|ин|атин|ист|иц|ниц|их|л|лк|льн|льник|льщик|льщиц|н|ог|г|р|от|ет|тель|итель|ун|чик|щик|чиц|ыш|ал|ел|аст|ат|ев|ов|енн|онн|енск|инск|ив|ит|овит|лив|шн|оват|еват|тельн|уч|юч|яч|чат|чив|а|я|е|и|нича?|ну|ова|ева|ствова|ся|сь|о|ск|жды|учи|ючи|то|либо|нибудь|ание|ение|ба|ь|исса|эсса|ива|ествова|изова|ирова|изирова|ства|ка|яка|ича|б|об|ытьб|в|ав|ощав|овлив|елив|члив|овь|o|тв|овств|инств|тельств|ляв|аг|инг|ург|уг|ыг|д|ад|иад|арад|оид|ядь|ое|ые|аж|ёж|ёжь|оз|ки|очки|ушки|нюшки|унюшки|еньки|ошеньки|охоньки|ами|ками|ай|атай|ей|ачей|ий|овий|стви|ни|ани|овани|ени|e|арий|ери|орий|ти|т|ци|аци|изаци|ици|нци|енци|ачий|ичий|a|ой|кой|уй|тяй|чак|авк|овк|ловк|анек|енек|онек|ышек|ежк|евик|овник|еник|ейник|арник|атник|истик|овщик|айк|ейк|инк|онк|унк|ок|онок|чонок|ушок|ерк|урк|вск|евск|овск|еск|ческ|ическ|истичес|лезск|эзск|йск|ейск|ийск|имск|нск|анск|ианск|унск|тельск|етк|отк|ютк|ук|чук|ацк|ецк|чк|ачк|ечк|ичка|очк|шк|ашк|ёшк|ишка|ишко|ушк|ышк|ык|ульк|усеньк|ошеньк|оньк|охоньк|юк|як|няк|ль|ла|ло|аль|овал|ёл|ель|ил|ол|оль|ул|ыль|онизм|им|ом|м|ком|иком|ышком|няком|уном|ишом|ым|нь|уган|иан|овиан|лан|ман|ебн|обн|евн|ивн|овн|ень|ен|ён|мен|смен|яжн|знь|езн|овизн|озн|иозн|бин|овин|лин|елин|нин|жан|чан|овчан|ичан|инчан|тян|итян|чин|щин|овщин|льщин|йн|ейн|нн|анн|ованн|ированн|ённ|овенн|ственн|менн|ионн|ационн|он|арн|орн|сн|снь|отн|ятн|ичн|иничн|очн|ашн|ишн|ышн|альн|идальн|иальн|ональн|уальн|ельн|абельн|ибельн|ительн|ильн|ынь|иян|ко|очко|енько|ошенько|онько|охонько|но|овато|атарь|ер|p|онер|мейстер|up|ор|вор|тор|атор|итор|ур|тур|amyp|итур|ырь|яр|с|ис|анс|есс|ус|ариус|ть|am|иат|дцать|надцать|евт|итет|нит|инит|ант|ент|мент|амент|емент|оть|иот|имость|ность|нность|енность|тость|ут|у|y|ку|еньку|оньку|ому|ану|оту|х|ах|ках|ох|ух|ц|авец|овец|лец|омец|нец|енец|инец|овиц|лиц|овниц|ениц|атниц|униц|ичниц|очниц|ешниц|льниц|тельниц|льц|ч|ич|евич|ович|нич|ыч|ш|аш|иш|айш|ейш|ошь|ош|уш|оныш|ащ|ищ|ище|ища|бищ|овищ|лищ|ущ|еющ|ы|ажды|ою|ую|остью|мя|ая|ее|ше|ший|ши|вши|вш|ёх|до|по|ему|рас|(?=.))*(?:ь|о|е|а|ам|ами|ас|am|ax|ая|е|её|ек|ей|ем|еми|емя|ex|ею|ёт|ёте|ёх|ёшь|и|ие|ий|й|им|ими|ит|ите|их|ишь|ию|jу|м|ми|мя|о|ов|ого|ое|оё|ой|ом|ому|ою|cm|у|ум|умя|ут|ух|ую|шь|(?=[^\\w]))?', 'gmiu')
    const regexText = /\b(?:без|бес|в|во|воз|вос|возо|вз|вс|вы|до|за|из|ис|изо|на|наи|недо|над|надо|не|низ|нис|низо|о|об|обо|обез|обес|от|ото|па|пра|по|под|подо|пере|пре|пред|предо|при|про|раз|рас|разо|с|со|су|через|черес|чрез|а|ана|анти|архи|гипер|гипо|де|дез|дис|ин|интер|инфра|квази|кило|контр|макро|микро|мега|мата|мульти|орто|пан|пара|пост|прото|ре|суб|супер|транс|ультра|зкстра|экс|(?<= ))[ъь]?(?:(?:[хx][уy][ейiяyи]|[pп][иёе][zзsсc][dд]|[eе][лl][dд]|[еёeiи][бb]|шлю|твар|хер|мраз|шалав|манд|сипов|секел|поц|дроч|залуп|минд?ж|пид[оа]|курв|сперм|г[ао]нд|менстр|кун[аи]|сра[тл]|сса[тл]|бзд|перд|дри(?:ст|щ)|говн|жоп|целк|трах|харит|минет|блев|малаф|вагин)о*)+(?:адь|ак|алей|ан|ян|анин|янин|анк|янк|ар|арь|ариц|арк|ач|ени|ани|еств|ств|есть|ость|ец|к|изм|изн|ик|ник|нин|ин|атин|ист|иц|ниц|их|л|лк|льн|льник|льщик|льщиц|н|ог|г|р|от|ет|тель|итель|ун|чик|щик|чиц|ыш|ал|ел|аст|ат|ев|ов|енн|онн|енск|инск|ив|ит|овит|лив|шн|оват|еват|тельн|уч|юч|яч|чат|чив|а|я|е|и|нича?|ну|ова|ева|ствова|ся|сь|о|ск|жды|учи|ючи|то|либо|нибудь|ание|ение|ба|ь|исса|эсса|ива|ествова|изова|ирова|изирова|ства|ка|яка|ича|б|об|ытьб|в|ав|ощав|овлив|елив|члив|овь|o|тв|овств|инств|тельств|ляв|аг|инг|ург|уг|ыг|д|ад|иад|арад|оид|ядь|ое|ые|аж|ёж|ёжь|оз|ки|очки|ушки|нюшки|унюшки|еньки|ошеньки|охоньки|ами|ками|ай|атай|ей|ачей|ий|овий|стви|ни|ани|овани|ени|e|арий|ери|орий|ти|т|ци|ации|изации|ици|нци|енци|ачий|ичий|a|ой|кой|уй|тяй|чак|авк|овк|ловк|анек|енек|онек|ышек|ежк|евик|овник|еник|ейник|арник|атник|истик|овщик|айк|ейк|инк|онк|унк|ок|онок|чонок|ушок|ерк|урк|вск|евск|овск|еск|ческ|ическ|истичес|лезск|эзск|йск|ейск|ийск|имск|нск|анск|ианск|унск|тельск|етк|отк|ютк|ук|чук|ацк|ецк|чк|ачк|ечк|ичка|очк|шк|ашк|ёшк|ишка|ишко|ушк|ышк|ык|ульк|усеньк|ошеньк|оньк|охоньк|юк|як|няк|ль|ла|ло|аль|овал|ёл|ель|ил|ол|оль|ул|ыль|онизм|им|ом|м|ком|иком|ышком|няком|уном|ишом|ым|нь|уган|иан|овиан|лан|ман|ебн|обн|евн|ивн|овн|ень|ен|ён|мен|смен|яжн|знь|езн|овизн|озн|иозн|бин|овин|лин|елин|нин|жан|чан|овчан|ичан|инчан|тян|итян|чин|щин|овщин|льщин|йн|ейн|нн|анн|ованн|ированн|ённ|овенн|ственн|менн|ионн|ационн|он|арн|орн|сн|снь|отн|ятн|ичн|иничн|очн|ашн|ишн|ышн|альн|идальн|иальн|ональн|уальн|ельн|абельн|ибельн|ительн|ильн|ынь|иян|ко|очко|енько|ошенько|онько|охонько|но|овато|атарь|ер|p|онер|мейстер|up|ор|вор|тор|атор|итор|ур|тур|amyp|итур|ырь|яр|с|ис|анс|есс|ус|ариус|ть|am|иат|дцать|надцать|евт|итет|нит|инит|ант|ент|мент|амент|емент|оть|иот|имость|ность|нность|енность|тость|ут|у|y|ку|еньку|оньку|ому|ану|оту|х|ах|ках|ох|ух|ц|авец|овец|лец|омец|нец|енец|инец|овиц|лиц|овниц|ениц|атниц|униц|ичниц|очниц|ешниц|льниц|тельниц|льц|ч|ич|евич|ович|нич|ыч|ш|аш|иш|айш|ейш|ошь|ош|уш|оныш|ащ|ищ|ище|ища|бищ|овищ|лищ|ущ|еющ|ы|ажды|ою|ую|остью|мя|ая|ее|ше|ший|ши|вши|вш|ёх|до|по|ему|рас|(?=.))*(?:ь|о|е|а|ам|ами|ас|am|ax|ая|е|её|ек|ей|ем|еми|емя|ex|ею|ёт|ёте|ёх|ёшь|и|ие|ий|й|им|ими|ит|ите|их|ишь|ию|jу|м|ми|мя|о|ов|ого|ое|оё|ой|ом|ому|ою|cm|у|ум|умя|ут|ух|ую|шь|(?=[^\w]))?/gi;
    const regexText2 = /(?:без|бес|в|во|воз|вос|возо|вз|вс|вы|до|за|из|ис|изо|на|наи|недо|над|надо|не|низ|нис|низо|о|об|обо|обез|обес|от|ото|па|пра|по|под|подо|пере|пре|пред|предо|при|про|раз|рас|разо|с|со|су|через|черес|чрез|а|ана|анти|архи|гипер|гипо|де|дез|дис|ин|интер|инфра|квази|кило|контр|макро|микро|мега|мата|мульти|орто|пан|пара|пост|прото|ре|суб|супер|транс|ультра|зкстра|экс|(?<= ))[ъь]?(?:(?:[хx][уy][ейiяyи]|[pп][иёе][zзsсc][dд]|[eе][лl][dд]|[еёeiи][бb]|шлю|твар|хер|мраз|шалав|манд|сипов|секел|поц|дроч|залуп|минд?ж|пид[оа]|курв|сперм|г[ао]нд|менстр|кун[аи]|сра[тл]|сса[тл]|бзд|перд|дри(?:ст|щ)|говн|жоп|целк|трах|харит|минет|блев|малаф|вагин)о*)+(?:адь|ак|алей|ан|ян|анин|янин|анк|янк|ар|арь|ариц|арк|ач|ени|ани|еств|ств|есть|ость|ец|к|изм|изн|ик|ник|нин|ин|атин|ист|иц|ниц|их|л|лк|льн|льник|льщик|льщиц|н|ог|г|р|от|ет|тель|итель|ун|чик|щик|чиц|ыш|ал|ел|аст|ат|ев|ов|енн|онн|енск|инск|ив|ит|овит|лив|шн|оват|еват|тельн|уч|юч|яч|чат|чив|а|я|е|и|нича?|ну|ова|ева|ствова|ся|сь|о|ск|жды|учи|ючи|то|либо|нибудь|ание|ение|ба|ь|исса|эсса|ива|ествова|изова|ирова|изирова|ства|ка|яка|ича|б|об|ытьб|в|ав|ощав|овлив|елив|члив|овь|o|тв|овств|инств|тельств|ляв|аг|инг|ург|уг|ыг|д|ад|иад|арад|оид|ядь|ое|ые|аж|ёж|ёжь|оз|ки|очки|ушки|нюшки|унюшки|еньки|ошеньки|охоньки|ами|ками|ай|атай|ей|ачей|ий|овий|стви|ни|ани|овани|ени|e|арий|ери|орий|ти|т|ци|аци|изаци|ици|нци|енци|ачий|ичий|a|ой|кой|уй|тяй|чак|авк|овк|ловк|анек|енек|онек|ышек|ежк|евик|овник|еник|ейник|арник|атник|истик|овщик|айк|ейк|инк|онк|унк|ок|онок|чонок|ушок|ерк|урк|вск|евск|овск|еск|ческ|ическ|истичес|лезск|эзск|йск|ейск|ийск|имск|нск|анск|ианск|унск|тельск|етк|отк|ютк|ук|чук|ацк|ецк|чк|ачк|ечк|ичка|очк|шк|ашк|ёшк|ишка|ишко|ушк|ышк|ык|ульк|усеньк|ошеньк|оньк|охоньк|юк|як|няк|ль|ла|ло|аль|овал|ёл|ель|ил|ол|оль|ул|ыль|онизм|им|ом|м|ком|иком|ышком|няком|уном|ишом|ым|нь|уган|иан|овиан|лан|ман|ебн|обн|евн|ивн|овн|ень|ен|ён|мен|смен|яжн|знь|езн|овизн|озн|иозн|бин|овин|лин|елин|нин|жан|чан|овчан|ичан|инчан|тян|итян|чин|щин|овщин|льщин|йн|ейн|нн|анн|ованн|ированн|ённ|овенн|ственн|менн|ионн|ационн|он|арн|орн|сн|снь|отн|ятн|ичн|иничн|очн|ашн|ишн|ышн|альн|идальн|иальн|ональн|уальн|ельн|абельн|ибельн|ительн|ильн|ынь|иян|ко|очко|енько|ошенько|онько|охонько|но|овато|атарь|ер|p|онер|мейстер|up|ор|вор|тор|атор|итор|ур|тур|amyp|итур|ырь|яр|с|ис|анс|есс|ус|ариус|ть|am|иат|дцать|надцать|евт|итет|нит|инит|ант|ент|мент|амент|емент|оть|иот|имость|ность|нность|енность|тость|ут|у|y|ку|еньку|оньку|ому|ану|оту|х|ах|ках|ох|ух|ц|авец|овец|лец|омец|нец|енец|инец|овиц|лиц|овниц|ениц|атниц|униц|ичниц|очниц|ешниц|льниц|тельниц|льц|ч|ич|евич|ович|нич|ыч|ш|аш|иш|айш|ейш|ошь|ош|уш|оныш|ащ|ищ|ище|ища|бищ|овищ|лищ|ущ|еющ|ы|ажды|ою|ую|остью|мя|ая|ее|ше|ший|ши|вши|вш|ёх|до|по|ему|рас|(?=.))*(?:ь|о|е|а|ам|ами|ас|am|ax|ая|е|её|ек|ей|ем|еми|емя|ex|ею|ёт|ёте|ёх|ёшь|и|ие|ий|й|им|ими|ит|ите|их|ишь|ию|jу|м|ми|мя|о|ов|ого|ое|оё|ой|ом|ому|ою|cm|у|ум|умя|ут|ух|ую|шь|член|(?=[^\w]))?/gmiu;
    useEffect(() => {
        let temp = arr.filter((item) => {
            if (namePlashka == item.id) {
                return true;
            }
            return false;
        })
        setIdPage(temp[0]);
    }, []);
    let { namePlashka } = useParams()
    return (
        <div>
            <div className={styles.box_main}>
                <div className={styles.main}>
                    <div className={styles.box_imgCarousel}>
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                        <img className={styles.imgCarousel} src={`${idPage.img}`} />
                    </div>
                    <div>
                        <img className={styles.img_plashka} src={`${idPage.img}`} />
                    </div>
                    <div className={styles.infoPlashka}>
                        <p className="">Fasco</p>
                        <div className={styles.box_uniq}>
                            <h1>{idPage.name}</h1>
                            <button className={styles.uniq}>
                                <img src="https://i.imgur.com/plLWMJX.png" className={styles.uniq} />
                            </button>
                        </div>
                        <p>{idPage.reiting}</p>
                        <p>{idPage.cost}</p>
                        <p>просмотры</p>
                        <div>
                            Hurry up! Sale ends in:
                            <CountdownTimer targetDate={targetDate} />
                        </div>
                        <p>Only 9 item(s) left in stock!</p>
                        <div>

                            <div className={styles.grei} style={{ color: "white", height: '10px' }}><div className={`red`} style={{ width: `${a}%`, height: '10px' }}>.</div></div>
                        </div>
                        <div>
                            <h2>Size </h2>
                            <button className={`${styles.but_Size} ${activeSizeOne == true ? `${styles.but_Size_active}` : `${styles.but_Size_deactive}`}`}
                                onClick={() => {
                                    if (activeSizeOne) {
                                        setActiveSizeOne(false);
                                        setActiveSizeTwo(true);
                                        setActiveSizeThre(true);
                                        setActiveSizeVour(true);
                                        const idPageAcva = { ...idPage, size: 'M' };
                                        setIdPage(idPageAcva);
                                    }
                                    if (!activeSizeOne) {
                                        setActiveSizeOne(true);
                                        // idPage.color = [""]
                                    }
                                }}
                            >M</button>
                            <button className={`${styles.but_Size} ${activeSizeTwo == true ? "but_Size_active" : "but_Size_deactive"}`}
                                onClick={() => {
                                    if (activeSizeTwo) {
                                        setActiveSizeTwo(false);
                                        setActiveSizeOne(true);
                                        setActiveSizeThre(true);
                                        setActiveSizeVour(true);
                                        const idPageAcva = { ...idPage, size: 'L' };
                                        setIdPage(idPageAcva);
                                    }
                                    if (!activeSizeTwo) {
                                        setActiveSizeTwo(true);
                                        // idPage.color = [""]
                                    }
                                }}>L</button>
                            <button className={`${styles.but_Size} ${activeSizeThre == true ? "but_Size_active" : "but_Size_deactive"}`}
                                onClick={() => {
                                    if (activeSizeThre) {
                                        setActiveSizeThre(false);
                                        setActiveSizeOne(true);
                                        setActiveSizeTwo(true);
                                        setActiveSizeVour(true);
                                        const idPageAcva = { ...idPage, size: 'X' };
                                        setIdPage(idPageAcva);
                                    }
                                    if (!activeSizeThre) {
                                        setActiveSizeThre(true);
                                        // idPage.color = [""]
                                    }
                                }}>X</button>
                            <button className={`${styles.but_Size} ${activeSizeVour == true ? "but_Size_active" : "but_Size_deactive"}`}
                                onClick={() => {
                                    if (activeSizeVour) {
                                        setActiveSizeVour(false);
                                        setActiveSizeOne(true);
                                        setActiveSizeTwo(true);
                                        setActiveSizeThre(true);
                                        const idPageAcva = { ...idPage, size: 'XL' };
                                        setIdPage(idPageAcva);
                                    }
                                    if (!activeSizeVour) {
                                        setActiveSizeVour(true);
                                        // idPage.color = [""]
                                    }
                                }}>XL</button>
                        </div>
                        <div>
                            <h2>Color </h2>
                            <button className={`${styles.but_color} ${activeone == true ? `${styles.but_color_active}` : `${styles.but_color_deactive}`}`}
                                style={{ background: "rgb(50, 255, 200)", }}
                                onClick={() => {
                                    if (activeone) {
                                        setActiveone(false);
                                        setActivetwo(true);
                                        setActivetree(true);
                                        // dispatch(colorSelect("red"))
                                        //  idPage.color = "red";
                                        const idPageAcva = { ...idPage, color: 'Aqua' };
                                        setIdPage(idPageAcva);

                                    }
                                    if (!activeone) {
                                        setActiveone(true);
                                        // idPage.color = [""]
                                        const idPageAcva = { ...idPage, color: '' };
                                        setIdPage(idPageAcva);
                                    }
                                }}
                            >
                                ㅤ
                            </button>
                            <button className={`${styles.but_color} ${activetwo == true ? `${styles.but_color_active}` : `${styles.but_color_deactive}`}`}
                                style={{ background: "rgb(177, 87, 255)", }}
                                onClick={() => {
                                    if (activetwo) {
                                        setActivetwo(false);
                                        setActiveone(true);
                                        setActivetree(true);
                                        const idPageViolet = { ...idPage, color: 'Violet' };
                                        setIdPage(idPageViolet);
                                    }
                                    if (!activetwo) {
                                        setActivetwo(true);
                                        const idPageViolet = { ...idPage, color: '' };
                                        setIdPage(idPageViolet);
                                    }
                                }}>ㅤ</button>
                            <button className={`${styles.but_color} ${activetree == true ? `${styles.but_color_active}` : `${styles.but_color_deactive}`}`}
                                style={{ background: "rgb(255, 108, 108)", }}
                                onClick={() => {
                                    if (activetree) {
                                        setActivetree(false);
                                        setActivetwo(true);
                                        setActiveone(true);
                                        const idPageOrang = { ...idPage, color: 'Orange' };
                                        setIdPage(idPageOrang);
                                    }
                                    if (!activetree) {
                                        setActivetree(true);
                                        const idPageOrang = { ...idPage, color: '' };
                                        setIdPage(idPageOrang);
                                    }
                                }}>ㅤ</button>
                            <div>
                                <h2>Quantity</h2>
                                <div className={styles.box_quantity}>
                                    <div className={styles.quantity_item}>
                                        <button className={styles.butQuantity} onClick={(e) => {
                                            if (quantity > 0) {
                                                setQuantity(quantity - 1)
                                            }
                                        }}>
                                            -1
                                        </button>
                                        <p className={styles.p_quantity}>{quantity}</p>
                                        <button className={styles.butQuantity} onClick={(e) => {
                                            // const idPageOrang = { ...idPage, quantityArr: `${quantity}` };
                                            // setIdPage(idPageOrang);
                                            // dispatch(quantityPlus(+1))
                                            setQuantity(quantity + 1)

                                        }}>
                                            +1
                                        </button>
                                    </div>
                                    <div>
                                        <button className={styles.but_Add}
                                            onClick={() => {
                                                console.log(quantity);
                                                corzina.name = idPage.name;
                                                corzina.cost = idPage.cost;
                                                corzina.img = idPage.img;
                                                if (activeCorzina) {
                                                    setActiveCorzina(!activeCorzina)
                                                }
                                                console.log(items);

                                                const idPageOrang = { ...idPage, quantityArr: quantity };

                                                setIdPage(idPageOrang);
                                                console.log(idPageOrang);
                                                dispatch(size(idPageOrang));
                                                console.log(idPage.quantityArr)
                                            }}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeCorzina == true ? `${styles.box_corzina}` : `${styles.box_corzina_block}`}`}>
                        <div className={styles.box_corzina_hidden}>

                        </div>
                        <div className={`${activeCorzina == true ? `${styles.corzina_butNone}` : `${styles.corzina_butBlock}`}`}>
                            <div className={styles.head_corzina}>
                                <h2>Shopping Cart</h2>
                                <img className={styles.icon_close} src="https://i.imgur.com/LVQdNK0.png" onClick={() => {
                                    if (!activeCorzina) {
                                        setActiveCorzina(true)
                                    }
                                }} />
                            </div>
                            <p>Buy $122.35 more and get free shipping</p>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div>


                                            <div className={styles.box_corzina_item} key={index} >

                                                <div>
                                                    <img className={styles.img_corzina} src={`${item.img}`} />
                                                </div>
                                                <div>
                                                    <p className={styles.name_item}>{item.name}</p>
                                                    <p className={styles.cost_item}>{item.cost}$</p>
                                                    <p>
                                                        Color:  {item.color}
                                                    </p>
                                                    <p> Size:  {item.size}</p>
                                                    <div className={styles.but_corzina_item}>
                                                        <button className={styles.but_quantity}
                                                            onClick={() => {
                                                                // уменьшение кол-ва выбранной продукции
                                                                dispatch(quantityMinus({ index: index, quantityArr: 1 }))
                                                            }}
                                                        >
                                                            -
                                                        </button>
                                                        <p className={styles.but_quantity}>{item.quantityArr}</p>
                                                        <button className={styles.but_quantity}
                                                            onClick={() => {
                                                                // увеличение кол-ва выбранной продукции
                                                                dispatch(quantityPlus({ index: index, quantityArr: 1 }))
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <button className={styles.but_close}
                                                    onClick={(e) => {
                                                        dispatch(deletItem(index))

                                                    }}>
                                                    X
                                                </button>
                                            </div>
                                            <hr></hr>
                                        </div>
                                    )
                                })
                            }
                            <div>
                                <div className={styles.box_checkbox}>
                                    <input type={styles.checkbox} />
                                    <p>
                                        For $10.00 please wrap the product
                                    </p>
                                </div>
                                <hr></hr>
                                <div>
                                    <div>
                                        <div>
                                            <h3>
                                                Subtotal
                                            </h3>
                                            <h3>
                                                {idPage.quantityArr * idPage.cost}
                                            </h3>
                                        </div>
                                        <div>
                                            <Link to={`/Shop/${idPage.id}/ShoppingCard`}>
                                                <button className={`${styles.but_Sign} ${styles.but_checkbox}`}>
                                                    Checkout

                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <a>
                                                View Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.box_comment}>
                    <div>
                        <h2>Comment</h2>
                    </div>
                    <div >
                        {/* <div>
                            <img className={starColor == true ? `${styles.starIMG}` : `${styles.starIMGOff}`} src={mouseX < 10 ? `${'https://i.imgur.com/9Ms57fP.png'}` : `${'https://i.imgur.com/euxMQ9t.png'}`} onMouseOver={() => {
                                setStarColor(false);

                            }}
                                onMouseMove={(e) => {
                                    const container = e.target.getBoundingClientRect();
                                    const mouseX = e.clientX - container.left;
                                    setMouseX(mouseX)
                                    const mouseY = e.clientY - container.top;
                                    console.log(mouseX, mouseY)
                                }}
                                onMouseOut={() => {
                                    setStarColor(true);

                                }} onClick={() => {

                                }} />
                            <div className={mouseX <= 10 ? `${styles.starIMGHalfOn}` : `${styles.starIMGHalfOff}`}>
                                <img className={styles.starIMGHalfOff} src="https://i.imgur.com/euxMQ9t.png"

                                />
                                <img src="https://i.imgur.com/9Ms57fP.png" />
                            </div>
                        </div> */}
                        <div>

                            <div className={styles.starIMGDUp}
                                onMouseOver={() => {
                                    if (black) {
                                        setStarColor(false);

                                    }
                                }}
                                onMouseOut={() => {
                                    if (black) {
                                        setStarColor(false);

                                    }

                                }}
                                onMouseMove={(e) => {
                                    if (black) {
                                        const container = e.target.getBoundingClientRect();
                                        const mouseX = e.clientX - container.left;
                                        setMouseX(mouseX)
                                        const mouseY = e.clientY - container.top;
                                        console.log(mouseX, mouseY)
                                        setGold(mouseX);
                                    }
                                }}
                                onClick={() => {
                                    setBlack(false)

                                    // if (black == null) {

                                    // }
                                    console.log(black)
                                }}>

                                <img className={styles.starIMG} src="https://i.imgur.com/9Ms57fP.png" onClick={() => {

                                }} /><img className={styles.starIMG} src="https://i.imgur.com/9Ms57fP.png" onClick={() => {

                                }} /><img className={styles.starIMG} src="https://i.imgur.com/9Ms57fP.png" onClick={() => {

                                }} /><img className={styles.starIMG} src="https://i.imgur.com/9Ms57fP.png" onClick={() => {

                                }} /><img className={styles.starIMG} src="https://i.imgur.com/9Ms57fP.png" onClick={() => {

                                }} />
                            </div>

                            {/* //starColor == true ? `${width:0%}` : `${width:100%}` */}
                            <div className={styles.starIMGDownTwo}
                                style={{ width: `${starColor ? 0 : `${gold * 0.1}`}%` }}
                            // onMouseOver={() => {

                            // }}
                            // onMouseOut={() => {
                            //     if (black) {
                            //         setStarColor(true);

                            //     }

                            // }}
                            // onMouseMove={(e) => {
                            //     const container = e.target.getBoundingClientRect();
                            //     const mouseX = e.clientX - container.left;
                            //     setMouseX(mouseX)
                            //     const mouseY = e.clientY - container.top;
                            //     console.log(mouseX, mouseY)
                            // }}
                            >
                                <img className={styles.starIMG} src="https://i.imgur.com/euxMQ9t.png" />
                                <img className={styles.starIMG} src="https://i.imgur.com/euxMQ9t.png" />
                                <img className={styles.starIMG} src="https://i.imgur.com/euxMQ9t.png" />
                                <img className={styles.starIMG} src="https://i.imgur.com/euxMQ9t.png" />
                                <img className={styles.starIMG} src="https://i.imgur.com/euxMQ9t.png" />
                            </div>
                            <button onClick={() => {
                                setBlack(true);
                                console.log(black);
                            }}>
                                изменить
                            </button>
                        </div>
                    </div>
                    <div className={styles.Comments_box}>
                        <div className={styles.Comments}>
                            <p>Оставить отзыв</p>
                            <div >
                                {arrComments.map((item, index) => {
                                    return <fieldset className={styles.Comments_current} key={index}>
                                        <legend className={styles.NameCurrentUser}>
                                            {item.name}
                                        </legend>
                                        <div className={styles.textComment}>
                                            <p className={styles.p_textComment}>
                                                {item.text}
                                            </p>
                                            <p>
                                                {/* {item.date.getFullYear().toString()}ㅤㅤ
                                                {item.date.setMonth(item.date.getMonth()+1).toString()} ㅤㅤ
                                                {item.date.getHours().toString()}:
                                                {item.date.getMinutes().toString()} */}
                                                {item.date.toLocaleString('en-GB', { timeZone: 'UTC' }).replaceAll('/', '.')}
                                            </p>
                                        </div>
                                    </fieldset>
                                })

                                }


                            </div>
                        </div>

                        <div className={styles.Comment_box}>
                            <textarea name="" id="" cols="3" rows="3" onChange={(e) => {
                                
                                const newText = e.target.value.replaceAll(regexText2, '^_^'); // Получаем новый текст из события
                                console.log(newText)
                                setCommentText(newText);
                                // setCommentText(e.target.value)
                                // console.log("New text:", newText);
                                // console.log("Replaced text:", newText.replaceAll(regexText, '^_^'));
                                // console.log(newText)
                                // console.log(newText.replaceAll(regexText, '^_^'));
                                // console.log('ебать, член, заебало'.replaceAll(regexText2, '^_^'));

                            }}>
                            </textarea>
                        </div>
                        <div>
                            <button onClick={() => {
                                dispatch(commentName({ name: Current.email, text: commentText, date: (event.toLocaleString('en-GB', { timeZone: 'UTC' })) }))
                                console.log(arrComments)
                            }}>
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Paeky />

        </div >
    )
}
export default StorePlashka;