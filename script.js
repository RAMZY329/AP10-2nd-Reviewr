const questions = [
    { 
        question: "Alin sa mga sumusunod ang HINDI angkop sa globalisasyon?", 
        options: ["Ito ay ang pagkakaroon ng pagsasama sa lahat ng bansa.", 
                  "Ito ay isang pangmalawakang integrasyon ng iba’t ibang proseso.", 
                  "Ito ay malawak, mabilis, mura at malalim.", 
                  "Ito ay isang tumitinding pakikipag-ugnayan at pagdaloy ng kaalaman."], 
        answer: 0
    },
    {
        question: "2. Ang globalisasyon ay may kaakibat na suliraning panlipunan tulad ng banta ng terorismo. Ano ang nararapat mong gawin upang maiwasan ang suliraning ito?",
        options: [
            "a. Hindi pagsunod sa mga batas at polisiya ng isang bansa.",
            "b. Maging mapagmatyag sa lahat ng oras lalo na sa seguridad at kaayusan ng isang bansa.",
            "c. Hindi pagsunod ang mga paalala o advisories na ipinalalabas ng bansa.",
            "d. Hindi maingat sa pagbibigay impormasyon at balita sa social media."
        ],
        answer: 1
    },
    {
        question: "3. Alin sa mga sumusunod ang HINDI nagpapakita ng globalisasyong sosyo-kultural?",
        options: [
            "a. Ang pagkahumaling ng mga kabataan sa Korean Pop.",
            "b. Ang mga kasunduan ng mga bansa upang mapadali ang pagkakaroon ng palitan ng produkto at kultura.",
            "c. Ang mga kabataan ngayon ay gumagamit ng e-books sa pamamagitan ng tablet at smart phones.",
            "d. Ang paggamit ng Facebook, Twitter at Instagram sa pakikipagkomunikasyon."
        ],
        answer: 1
    },
    {
        question: "4. Bilang mag-aaral, alin ang higit na makakaimpluwensiya sa iyo ng globalisasyon?",
        options: [
            "a. Paggamit ng makabagong teknolohiya.",
            "b. Paglalaro ng mga makabagong online games.",
            "c. Pagtangkilik sa mga social networking sites.",
            "d. Pakikipagsapalaran sa ibang bansa."
        ],
        answer: 2
    },
    {
        question: "5. Alin sa mga pangyayari ang HINDI mo maituturing globalisasyon?",
        options: [
            "a. Pagbili mo ng mga branded na damit tulad ng Hanes at Calvin Klein.",
            "b. Inimbita mo ang iyong mga kaibigan na kumain sa Jollibee.",
            "c. Nagkaroon ng pagtatalakay ang iyong guro gamit ang Skype.",
            "d. Wala sa mga nabanggit."
        ],
        answer: 3
    },
    {
        question: "6. Ano ang pangyayaring tuluyang nakapagpabago sa buhay ng tao sa kasalukuyan?",
        options: [
            "a. Paggawa",
            "b. Globalisasyon",
            "c. Migrasyon",
            "d. Ekonomiya"
        ],
        answer: 1
    },
    {
        question: "7. Alin sa mga sumusunod na pahayag ang HINDI naglalarawan ng pagbabago sa sektor ng ekonomiya sa panahon ng globalisasyon?",
        options: [
            "a. Paglaki ng kita ng Business Process Outsourcing ng Pilipinas.",
            "b. Pagkakaroon ng kasunduang militar ng Pilipinas at China.",
            "c. Dumarami ang mga Pilipinong nangingibang bansa upang magtrabaho.",
            "d. Pagkakaroon ng mga malalaking kompanya, tulad ng Multinational Companies (MNCs) at Transnational Companies (TNCs)."
        ],
        answer: 1
    },
    {
        question: "8. Ang paglahok ng Pilipinas sa United Nations, Association of Southeast Asia Nations at United Nations ay nauuri sa anong dimensiyon ng globalisasyon?",
        options: [
            "a. Politikal",
            "b. Sosyo-Kultural",
            "c. Teknolohikal",
            "d. Ekonomiko"
        ],
        answer: 0
    },
    {
        question: "9. Paano nakapagpabago ang penomenong globalisasyon sa buhay ng isang indibidwal sa kasalukuyan?",
        options: [
            "a. Pawang mabubuting kaganapan ang naging epekto.",
            "b. Nakakatulong sa pagpapaunlad sa ekonomiya ng isang bansa.",
            "c. Nagbigay-daan ito mabilisang pagdaloy o paggalaw ng mga tao, bagay impormasyon at produkto sa iba't ibang dako ng daigdig.",
            "d. Nagbunga ito ng pag-alis at paglipat ng tao mula sa ibang lugar."
        ],
        answer: 2
    },
    {
        question: "10. Isa sa mga dahilan ng globalisasyon ay ang paghahangad ng isang maayos na buhay. Alin sa sumusunod na pahayag ang may kaugnayan dito?",
        options: [
            "a. Paglaganap ng mga makabagong kagamitan at teknolohiya.",
            "b. Pagdami ng bilang ng mga OFW na umalis ng bansa.",
            "c. Pagkakaroon ng mga pandaigdigang samahang pang-ekonomiko.",
            "d. Paglaganap ng Kristiyanismo sa buong mundo dahil sa globalisasyon."
        ],
        answer: 1// Add all questions here using the same format
    },
    {
        question: "11. Alin sa mga sumusunod na pahayag ang nagpapahiwatig sa pahayag na 'binago ng globalisasyon ang workplace ng mga manggagawang Pilipino'?",
        options: [
            "a. Pag-angat ang kalidad ng manggagawang Pilipino.",
            "b. Pagdagsa ng mga Business Process Outsourcing (BPO) sa bansa.",
            "c. Pagdagsa ng mga produktong dayuhan sa Pilipinas.",
            "d. Paghuhulog, pagbabayad at pagwiwithdraw gamit ang mga Automatic Teller Machine (ATM)."
        ],
        answer: 3
    },
    {
        question: "12. Ano ang higit na dahilan ng pagkakaroon ng job-mismatch?",
        options: [
            "a. Ang mga nalikhang trabaho ay nakatuon lamang sa sektor ng agrikultura at industriya.",
            "b. Karamihan sa mga trabaho ay hindi nababatay sa pangangailangan ng pandaigdigang ekonomiya.",
            "c. Ang mga nakahandang trabaho ay lubos na nangangailangan ng mataas na antas na teknikal.",
            "d. Napilitang magtrabaho kahit na hindi angkop sa kasanayan dahil sa walang ibang mapasukang trabaho."
        ],
        answer: 1
    },
    {
        question: "13. Isa sa mga tugon na ginawa ng pamahalaan upang maitaguyod ang isang desenteng paggawa ay ang pagpapatupad ng apat na haligi para sa isang disente at marangal na paggawa. Alin sa mga sumusunod na pahayag ang tumutukoy sa Employment Pillar?",
        options: [
            "a. Naglalayong palakasin at siguruhin ang paglikha ng mga batas para sa paggawa at matapat na pagpapatupad ng mga karapatan ng mga manggagawa.",
            "b. Naglalayong hikayatin ang mga kompanya, pamahalaan at mga sangkot sa paggawa na lumikha ng mga mekanismo para sa proteksyon ng manggagawa, katanggap-tanggap na pasahod at oportunidad.",
            "c. Naglalayong palakasin at laging bukas na pagpupulong sa pagitan ng pamahalaan, mga manggagawa at kompanya sa pamamagitan ng paglikha ng mga collective bargaining unit.",
            "d. Naglalayong tiyakin ang paggawa ng mga sustenableng trabaho, malaya at pantay na oportunidad sa paggawa at maayos na workplace para sa mga manggagawa."
        ],
        answer: 3
    },
    {
        question: "14. Isa sa mga hamon ng globalisasyon sa bansa ay ang pagbabago sa workplace ng mga manggagawa. Binago rin nito ang sistema ng pagkuha sa mga manggagawa. Alin sa sumusunod na pahayag ang nagpapatunay ng pagbabagong ito?",
        options: [
            "a. Naging malaya ang pagpasok ng mga dayuhang kompanya sa bansa dahil sa mababang pagpapasweldo at pagngonguntrata lamang sa mga lokal na manggagawa.",
            "b. Tumaas ang kalidad ng mga lokal na produkto sa pandaigdigang pamilihan kaya’t kinailangang mag-angkat ng mga eksperto sa ibang bansa para sanayin ang mga lokal na manggagawa.",
            "c. Humirap ang kalagayan ng mga dayuhang kompanya sa pagpasok sa bansa kaya’t kinailangang pababain ang sweldo ng mga lokal na manggagawa.",
            "d. Humigpit ang pagproseso sa pagpasok ng mga dayuhang kompanya, produkto at serbisyo sa bansa kaya’t kinailangan ng mga world-class workers."
        ],
        answer: 3
    },
    {
        question: "15. Nakabubuti ba ang magkaroon ng subcontracting na sistema ng paggawa?",
        options: [
            "a. Hindi, dahil naaapektuhan nito ang seguridad sa paggawa.",
            "b. Hindi, dahil bababa ang kalidad ng serbisyo ng mga manggagawa.",
            "c. Oo, kasi nagbibigay ito ng oportunidad sa trabaho.",
            "d. Oo, dahil maganda ang iskemang ito sa paggawa."
        ],
        answer: 0
    },
    {
        question: "16. Mahalagang maproteksyunan ang kalagayan ng mga manggagawang Pilipino laban sa mababang pasahod at di-makatarungang pagtanggal sa kanila sa trabaho dulot ng kawalan ng seguridad sa paggawa. Paano ito maisasakatuparan ng mga manggagawang Pilipino?",
        options: [
            "a. Pagsasagawa ng picket at rally laban sa kompanya at kapitalista.",
            "b. Pag-boycott sa mga produktong dayuhan at pangangampanya sa mga mamamayan ng pagkondena sa mga ito.",
            "c. Pagsabotahe, paninira at panununog sa mga planta o kagamitan ng kompanya.",
            "d. Pakikipag-usap ng mga samahan ng mga manggagawa sa mga kapitalista o may-ari ng kompanya sa pamamagitan ng tapat at makabuluhang Collective Bargaining Agreement (CBA)."
        ],
        answer: 3
    },
    {
        question: "17. Alin sa mga ito ang HINDI kabilang sa ika-21 na siglong kakayahan na dapat taglayin ng ating mga manggagawa?",
        options: [
            "a. Core Career and Lifestyle Skills.",
            "b. Media at Technology Skills.",
            "c. Learning and Innovation Skills.",
            "d. Communication Skills."
        ],
        answer: 0
    },
    {
        question: "18. Paano umiiral ang konsepto ng unemployment?",
        options: [
            "a. Ang mga manggagawa ay walang mapasukang trabaho kahit sila ay may sapat na kakayahan at may mataas na pinag-aralan.",
            "b. Ipina-iiral ang pagtatrabaho nang mas mababa kaysa sa kakayahan.",
            "c. Nagkakaroon ng mataas na unemployment dahil hindi natutugunan ang institusyon ng edukasyon at magandang pagpapatakbo sa ekonomiya.",
            "d. Pag-iral ng depresyon at iba pang suliraning panlipunan."
        ],
        answer: 0
    },
    {
        question: "19. Alin sa sumusunod na pahayag ang mabuting epekto ng pagdami ng outsourcing companies sa ating bansa?",
        options: [
            "a. Nagiging bihasa ang mga Pilipino sa pagsasalita ng Ingles.",
            "b. Lumaki ang kita ng mga BPO’s.",
            "c. Dumami ang bilang ng mga call center agents.",
            "d. Nakapagtugon ng trabaho sa mga mamamayang Pilipino."
        ],
        answer: 3
    },
    {
        question: "20. Alin sa sumusunod na pahayag ang nagsasaad tungkol sa Labor-only Contracting?",
        options: [
            "a. Ang patuloy na paglaki ng Job-skills mismatch sa bansa ay maituturing na krisis batay sa ulat ng DOLE.",
            "b. Walang sapat na puhunan ang subcontractor upang gawin ang trabaho o serbisyo at ang pinasok niyang manggagawa ay may direktang kinalaman sa mga gawain ng kompanya.",
            "c. Mataas ang demand para sa globally standard na paggawa upang tugunan ang hamon ng globalisasyon.",
            "d. Hindi pinapayagan sa batas ang job-contracting dahil naaapektuhan nito ang seguridad ng mga manggagawa sa trabaho."
        ],
        answer: 1
    },
    {
        question: "21. Patungo sa Pilipinas ang isang dalubhasang doktor na Swedish upang ibahagi ang kanyang natuklasang gamot. Alin sa sumusunod na sitwasyon ang naglalarawan nito?",
        options: [
            "a. Emigration",
            "b. Immigration",
            "c. Irrelevant migration",
            "d. Net migration"
        ],
        answer: 0
    },
    {
        question: "22. Uuwi mula Kuwait si More dahil sa kasalukuyang pandemya. Alin sa sumusunod na sitwasyon ang tinutukoy dito?",
        options: [
            "a. Emigration",
            "b. Immigration",
            "c. Irrelevant migration",
            "d. Net migration"
        ],
        answer: 1
    },
    {
        question: "23. Ang pamilya ni Mark ay lumikas dahil ng sigalot sa kanilang lugar. Alin sa sumusunod na dahilan ng migrasyon ang ipinapakita nito?",
        options: [
            "a. Migrasyon dahilan sa paghahanapbuhay",
            "b. Migrasyon dulot ng pag-aaral",
            "c. Migrasyon dulot ng pandemya",
            "d. Migrasyon dahilan sa kaguluhan"
        ],
        answer: 3
    },
    {
        question: "24. Si Rica ay isang doktor na may kontrata sa America hanggang taong 2017 lamang. Lampas ang kanyang pananatili sa nasabing bansa. Ngunit, sa kabila nito, nanatili pa rin siya sa bansa at nagtatrabaho. Alin sa sumusunod na kalagayan ang ipinapakita nito?",
        options: [
            "a. Temporary migrant",
            "b. Refugee migrant",
            "c. Permanent migrant",
            "d. Irregular migrant"
        ],
        answer: 3
    },
    {
        question: "25. Kung ikaw ay pagbibigyan ng pagkakataon na makapagbigay ng mungkahi, alin sa sumusunod na hakbang ang iyong maimumungkahi sa pamahalaan bilang tugon sa isyu ng migrasyon?",
        options: [
            "a. Palakasin ang programa at polisiya para sa kagalingan ng mga manggagawang Pilipino.",
            "b. Pataasan ang sahod ng mga manggagawang Pilipino.",
            "c. Iangat ang kalidad ng edukasyon lalo na sa mga pamantasan at pag-aaral na teknikal.",
            "d. Lahat ng nabanggit ay tama."
        ],
        answer: 3
    },
    {
        question: "26. Ang transnational crimes ay isa sa hindi mabuting epekto ng migrasyon. Ang sumusunod na mga sitwasyon ang itinuturing na transnational crime MALIBAN sa isa.",
        options: [
            "a. Pangangalakal legal o illegal ng mga tao lalo na ang kabataan at kababaihan.",
            "b. Paglalagak ng salapi sa mga bangko sa ibang mga bansa upang maitago ang illegal na pinagmulan ng salaping ito.",
            "c. Pamimirata ng isang sasakyang pandagat at sapilitang isinasailalim sa karahasan ang kanyang mga pasahero o crew.",
            "d. Talamak na pick-pocketing ng mga kawatan sa bangketa."
        ],
        answer: 3
    },
    {
        question: "27. Alin sa sumusunod ang magandang epekto ng migrasyon?",
        options: [
            "a. Nagkakawatak-watak ang pamilya sa pangingibang-bansa ng ilan sa OFW.",
            "b. Lubhang mapanira sa isang bansa hamon ng mga transnational crimes.",
            "c. May mga anak ng OFWs ang napapariwara at hindi nakakapagtapos ng pag-aaral.",
            "d. Ang remittance ng mga OFWs ay nakatutulong upang maiangat ang estadong pang-ekonomiya ng isang bansa."
        ],
        answer: 3
    },
    {
        question: "28. Marami sa mga Pilipino ang nahihikayat na mangibang-bansa. Ang mga sumusunod ay itinuturing na mga naging dahilan ng migrasyon MALIBAN sa isa.",
        options: [
            "a. Migrasyon dulot ng panghihikayat ng kapamilya na matagal nang naninirahan sa ibang bansa",
            "b. Migrasyon dahil sa pagkabugnot",
            "c. Migrasyon dahil sa oportunidad pang-ekonomiya",
            "d. Migrasyon dulot ng banta sa kalusugan o kaguluhan"
        ],
        answer: 1
    },
    {
        question: "29. Alin sa sumusunod ang katangian ng irregular migrants?",
        options: [
            "a. Sila ay mga mamamayan na nagtungo sa ibang bansa na may sapat na papeles ng paglipat ng panahanan.",
            "b. Sila ay mga mamamayang pinili nang manirahan sa pinaglipatan na lugar o bansa.",
            "c. Sila ay mga mamamayan na pansamantalang naninirahan sa isang rehiyon o bansa.",
            "d. Sila ay mga tao na hindi dokumentado at walang permit para magtrabaho at sinasabing overstaying sa bansang pinuntahan."
        ],
        answer: 3
    },
    {
        question: "30. Sa datos ng ILO o International Labour Organization taong 2013, aling bansa ang tinatayang may pinakamataas na mga Filipino migrants?",
        options: [
            "a. Australia",
            "b. Canada",
            "c. United Arab Emirates",
            "d. United States"
        ],
        answer: 3
    },
    {
        question: "31. Sang-ayon ka ba na kinakailangang ng ating bansa na tumugon sa mga hamon ng globalisasyon?",
        options: [
            "a. Oo, upang matugunan nito ang pangangailangan ng kanyang mamamayan bilang walang bansang nakatutugon sa lahat nitong pangangailangan.",
            "b. Oo, upang hindi mapag-iwanan ang ating bansa sa daloy ng gawaing pang-ekonomiko.",
            "c. Hindi, sapagkat pwede naman tayong mamuhay nang hindi na kailangan ang tulong ng ibang bansa.",
            "d. Hindi, sapagkat ang globalisasyon ay nagbubukas lamang sa atin ng mas maraming suliranin."
        ],
        answer: 0
    },
    {
        question: "32. Nakakabuti ba ang pamamaraan ng pamahalaan na magpatupad ng pantay o patas na kalakalan (free trade) sa isyu ng globalisasyon?",
        options: [
            "a. Oo, dahil binibigyang pagkakataon din dito ang mga dayuhang mangangalakal na walang pakundangang magtakda ng presyo.",
            "b. Oo, dahil nagbibigay-daan ito sa tamang presyohan sa pamamagitan ng malayang negosasyon sa pagitan ng bumibili at nagbibili.",
            "c. Hindi, dahil hindi nagiging balanse ang presyohan sa merkado kapag may mga dayuhang mangangalakal.",
            "d. Hindi, dahil ito nagbibigay ng sapat na pagkakataon sa mga lokal na mamumuhunan."
        ],
        answer: 1
    },
    {
        question: "33. Sang-ayon ka ba sa ginagawang pagtulong ng mga mayayamang bansa sa 'Bottom Billion'? Bakit?",
        options: [
            "a. Oo, sapagkat natutulungan nitong umaangat ang kalagayang pang-ekonomiko ng bansa kung may angkop na programa sila dito.",
            "b. Oo, sapagkat nakatutugon ito sa mga pangangailangan ng mga mamamayan nito.",
            "c. Hindi, dahil hindi naman pangmatagalan ang ibinibigay ng mga bansa sa Unang Daigdig.",
            "d. Hindi, dahil ang mga programa nila ay hindi naman tumatalima ang mga programa ng nasa Ikatlong Daigdig."
        ],
        answer: 0
    },
    {
        question: "34. Hanggang ngayon, patuloy pa rin ang pagbibigay ng mga donasyon ng bansang China sa ilan sa mga bansa sa Ikatlong Daigdig tulad ng Pilipinas. Anong sitwasyon ang ipinapakita nito?",
        options: [
            "a. Economic shutdown",
            "b. Pagtulong sa 'Bottom Billion'",
            "c. Guarded globalization",
            "d. Fair trade"
        ],
        answer: 3
    },
    {
        question: "35. Alin sa mga sumusunod ang HINDI nagpapakita ng fair trade?",
        options: [
            "a. Nagbibigay ng subsidiya o karagdagang tulong ang pamahalaang Pilipinas sa mga negosyante.",
            "b. Bukas sa negosasyon ang Pilipinas sa pagtatakda ng presyo sa pagitan ng mga bumibili at nagbibili.",
            "c. Pinangangalagaan ng Europe ang panlipunan, pang-ekonomiko at pampolitikal na kalagayan ng maliliit na namumuhunan.",
            "d. Pinapanatili ng bansang Amerika ang tamang presyo ng mga produkto at serbisyo."
        ],
        answer: 0
    },
    {
        question: "36. Pag-akay ng pamahalaan sa mga negosyanteng lubos na naapektuhan sa krisis.",
        options: [
            "a. Fair Trade",
            "b. Economic Freedom",
            "c. Guarded globalization",
            "d. Pagtulong sa Bottom Line"
        ],
        answer: 0
    },
    {
        question: "37. Pagpapataw ng angkop na presyo sa pagitan ng mamimili at nagbibili.",
        options: [
            "a. Fair Trade",
            "b. Economic Freedom",
            "c. Guarded globalization",
            "d. Pagtulong sa Bottom Line"
        ],
        answer: 0
    },
    {
        question: "38. Panghihimasok ng pamahalaan sa kalakalang panlabas.",
        options: [
            "a. Fair Trade",
            "b. Economic Freedom",
            "c. Guarded globalization",
            "d. Pagtulong sa Bottom Line"
        ],
        answer: 2
    },
    {
        question: "39. Pamamahagi ng tulong pinansiyal sa mga magsasaka.",
        options: [
            "a. Fair Trade",
            "b. Economic Freedom",
            "c. Guarded globalization",
            "d. Pagtulong sa Bottom Line"
        ],
        answer: 2
    },
    {
        question: "40. Pamamahagi ng tulong pinansiyal sa mga negosyante.",
        options: [
            "a. Fair Trade",
            "b. Economic Freedom",
            "c. Guarded globalization",
            "d. Pagtulong sa Bottom Line"
        ],
        answer: 2
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const scoreEl = document.getElementById('score');

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    } else {
        score--;
    }
    scoreEl.textContent = score;

    // Move to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Quiz finished
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question on page load
window.onload = loadQuestion;