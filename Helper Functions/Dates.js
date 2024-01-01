const date1 = new Date();
// expected: 2023-11-03T05:40:07.495Z

const date2 = new Date().toISOString();
// expected: 2023-11-03T05:43:55.309Z

const date3 = new Date().toDateString();
// expected: Fri Nov 03 2023

const date4 = new Date().toLocaleString();
// expected: 03/11/2023, 07:44:33

const date5 = new Date().toLocaleDateString();
// expected: 03/11/2023

const date5_long = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});
// expected: 3 November 2023

const date6 = new Date().toLocaleTimeString();
// expected: 07:44:33

const date7 = new Date().toString();
// expected: Fri Nov 03 2023 07:44:33 GMT+0200 (Eastern European Standard Time)

const date8 = new Date().toUTCString();
// expected: Fri, 03 Nov 2023 05:44:33 GMT

const date9 = new Date().toLocaleString(undefined, { hour12: false });
// expected: Fri, 03/11/2023, 07:57:06

const date10 = new Date().toLocaleTimeString("en-US", { hour12: false });
// expected: 07:57:06

const date11 = Date.now();
// Returns the number of milliseconds elapsed since midnight, January 1, 1970
//expected: 1700630802049

const date12 = new Date().toLocaleDateString("en-GB");
// expected: 03/12/2023  dd/MM//yyy

let currentDate = new Date().getTime();
//expected: Sun Dec 03 2023   time in mils as number
console.log(new Date(currentDate).toDateString());

//Difference between two times in mils

function timeResolver(t1, t2) {
  const diff = (t2 - t1) / (1000 * 60);
  const minutes = diff % 3600;
  const hours = minutes / 60;
  const roundedHours = Math.floor(hours);
  const min = (hours - roundedHours) * 60;
  const roundedMinutes = Math.round(min);

  // console.log(rhours + " hours and " + rminutes + " minutes.");
  return roundedHours + " hours and " + roundedMinutes + " minutes.";
}

// LAST MONTH NAME
function getMonthName() {
  // не ми харесва , защото на 31-ви не подава следващия месец
  // const prevMonth = new Date();
  // prevMonth.setMonth(prevMonth.getMonth() - 1);
  // return new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
  //   prevMonth
  // );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const lastMont =
    new Date()
      .toLocaleDateString(undefined, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
      .split("/")
      .at(0) - 2;
  return monthNames.at(lastMont);
}

// LOCALS
// ar-SA: ٢٦‏/١‏/١٤٤٣ هـ في ٥:٥٦:٥٨ م
// bn-BD: ৩/৯/২০২১ ৫:৫৬:৫৮ PM
// bn-IN: ৩/৯/২০২১ ৫:৫৬:৫৮ PM
// cs-CZ: 3. 9. 2021 17:56:58
// da-DK: 3.9.2021 17.56.58
// de-AT: 3.9.2021, 17:56:58
// de-CH: 3.9.2021, 17:56:58
// de-DE: 3.9.2021, 17:56:58
// el-GR: 3/9/2021, 5:56:58 μ.μ.
// en-AU: 03/09/2021, 5:56:58 pm
// en-CA: 2021-09-03, 5:56:58 p.m.
// en-GB: 03/09/2021, 17:56:58
// en-IE: 3/9/2021, 17:56:58
// en-IN: 3/9/2021, 5:56:58 pm
// en-NZ: 3/09/2021, 5:56:58 pm
// en-US: 9/3/2021, 5:56:58 PM
// en-ZA: 2021/09/03, 17:56:58
// es-AR: 3/9/2021 17:56:58
// es-CL: 03-09-2021 17:56:58
// es-CO: 3/9/2021, 5:56:58 p. m.
// es-ES: 3/9/2021 17:56:58
// es-MX: 3/9/2021 17:56:58
// es-US: 3/9/2021 5:56:58 p. m.
// fi-FI: 3.9.2021 klo 17.56.58
// fr-BE: 03/09/2021, 17:56:58
// fr-CA: 2021-09-03, 17 h 56 min 58 s
// fr-CH: 03.09.2021, 17:56:58
// fr-FR: 03/09/2021, 17:56:58
// he-IL: 3.9.2021, 17:56:58
// hi-IN: 3/9/2021, 5:56:58 pm
// hu-HU: 2021. 09. 03. 17:56:58
// id-ID: 3/9/2021 17.56.58
// it-CH: 3/9/2021, 17:56:58
// it-IT: 3/9/2021, 17:56:58
// ja-JP: 2021/9/3 17:56:58
// ko-KR: 2021. 9. 3. 오후 5:56:58
// nl-BE: 3/9/2021 17:56:58
// nl-NL: 3-9-2021 17:56:58
// no-NO: 3.9.2021, 17:56:58
// pl-PL: 3.09.2021, 17:56:58
// pt-BR: 03/09/2021 17:56:58
// pt-PT: 03/09/2021, 17:56:58
// ro-RO: 03.09.2021, 17:56:58
// ru-RU: 03.09.2021, 17:56:58
// sk-SK: 3. 9. 2021, 17:56:58
// sv-SE: 2021-09-03 17:56:58
// ta-IN: 3/9/2021, பிற்பகல் 5:56:58
// ta-LK: 3/9/2021, 17:56:58
// th-TH: 3/9/2564 17:56:58
// tr-TR: 03.09.2021 17:56:58
// zh-CN: 2021/9/3 下午5:56:58
// zh-HK: 3/9/2021 下午5:56:58
// zh-TW: 2021/9/3 下午5:56:58

let countries = [
  "ar-SA",
  "bn-BD",
  "bn-IN",
  "cs-CZ",
  "da-DK",
  "de-AT",
  "de-CH",
  "de-DE",
  "el-GR",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-IN",
  "en-NZ",
  "en-US",
  "en-ZA",
  "es-AR",
  "es-CL",
  "es-CO",
  "es-ES",
  "es-MX",
  "es-US",
  "fi-FI",
  "fr-BE",
  "fr-CA",
  "fr-CH",
  "fr-FR",
  "he-IL",
  "hi-IN",
  "hu-HU",
  "id-ID",
  "it-CH",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "nl-BE",
  "nl-NL",
  "no-NO",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sv-SE",
  "ta-IN",
  "ta-LK",
  "th-TH",
  "tr-TR",
  "zh-CN",
  "zh-HK",
  "zh-TW",
];
