const Municipality = (name, normalizedName) => ({
    name: name,
    normalizedName: normalizedName
});

const finnishMunicipalityNames = [
    "Alajärvi",
    "Alavieska",
    "Alavus",
    "Asikkala",
    "Askola",
    "Aura",
    "Akaa",
    "Brändö",
    "Eckerö",
    "Enonkoski",
    "Enontekiö",
    "Espoo",
    "Eura",
    "Eurajoki",
    "Evijärvi",
    "Finström",
    "Forssa",
    "Föglö",
    "Geta",
    "Haapajärvi",
    "Haapavesi",
    "Hailuoto",
    "Halsua",
    "Hamina",
    "Hammarland",
    "Hankasalmi",
    "Hanko",
    "Harjavalta",
    "Hartola",
    "Hattula",
    "Hausjärvi",
    "Heinävesi",
    "Helsinki",
    "Vantaa",
    "Hirvensalmi",
    "Hollola",
    "Honkajoki",
    "Huittinen",
    "Humppila",
    "Hyrynsalmi",
    "Hyvinkää",
    "Hämeenkyrö",
    "Hämeenlinna",
    "Heinola",
    "Ii",
    "Iisalmi",
    "Iitti",
    "Ikaalinen",
    "Ilmajoki",
    "Ilomantsi",
    "Inari",
    "Inkoo",
    "Isojoki",
    "Isokyrö",
    "Imatra",
    "Janakkala",
    "Joensuu",
    "Jokioinen",
    "Jomala",
    "Joroinen",
    "Joutsa",
    "Juuka",
    "Juupajoki",
    "Juva",
    "Jyväskylä",
    "Jämijärvi",
    "Jämsä",
    "Järvenpää",
    "Kaarina",
    "Kaavi",
    "Kajaani",
    "Kalajoki",
    "Kangasala",
    "Kangasniemi",
    "Kankaanpää",
    "Kannonkoski",
    "Kannus",
    "Karijoki",
    "Karkkila",
    "Karstula",
    "Karvia",
    "Kaskinen",
    "Kauhajoki",
    "Kauhava",
    "Kauniainen",
    "Kaustinen",
    "Keitele",
    "Kemi",
    "Keminmaa",
    "Kempele",
    "Kerava",
    "Keuruu",
    "Kihniö",
    "Kinnula",
    "Kirkkonummi",
    "Kitee",
    "Kittilä",
    "Kiuruvesi",
    "Kivijärvi",
    "Kokemäki",
    "Kokkola",
    "Kolari",
    "Konnevesi",
    "Kontiolahti",
    "Korsnäs",
    "Koski Tl",
    "Kotka",
    "Kouvola",
    "Kristiinankaupunki",
    "Kruunupyy",
    "Kuhmo",
    "Kuhmoinen",
    "Kumlinge",
    "Kuopio",
    "Kuortane",
    "Kurikka",
    "Kustavi",
    "Kuusamo",
    "Outokumpu",
    "Kyyjärvi",
    "Kärkölä",
    "Kärsämäki",
    "Kökar",
    "Kemijärvi",
    "Kemiönsaari",
    "Lahti",
    "Laihia",
    "Laitila",
    "Lapinlahti",
    "Lappajärvi",
    "Lappeenranta",
    "Lapinjärvi",
    "Lapua",
    "Laukaa",
    "Lemi",
    "Lemland",
    "Lempäälä",
    "Leppävirta",
    "Lestijärvi",
    "Lieksa",
    "Lieto",
    "Liminka",
    "Liperi",
    "Loimaa",
    "Loppi",
    "Loviisa",
    "Luhanka",
    "Lumijoki",
    "Lumparland",
    "Luoto",
    "Luumäki",
    "Lohja",
    "Parainen",
    "Maalahti",
    "Maarianhamina",
    "Marttila",
    "Masku",
    "Merijärvi",
    "Merikarvia",
    "Miehikkälä",
    "Mikkeli",
    "Muhos",
    "Multia",
    "Muonio",
    "Mustasaari",
    "Muurame",
    "Mynämäki",
    "Myrskylä",
    "Mäntsälä",
    "Mäntyharju",
    "Mänttä-Vilppula",
    "Naantali",
    "Nakkila",
    "Nivala",
    "Nokia",
    "Nousiainen",
    "Nurmes",
    "Nurmijärvi",
    "Närpiö",
    "Orimattila",
    "Oripää",
    "Orivesi",
    "Oulainen",
    "Oulu",
    "Padasjoki",
    "Paimio",
    "Paltamo",
    "Parikkala",
    "Parkano",
    "Pelkosenniemi",
    "Perho",
    "Pertunmaa",
    "Petäjävesi",
    "Pieksämäki",
    "Pielavesi",
    "Pietarsaari",
    "Pedersören kunta",
    "Pihtipudas",
    "Pirkkala",
    "Polvijärvi",
    "Pomarkku",
    "Pori",
    "Pornainen",
    "Posio",
    "Pudasjärvi",
    "Pukkila",
    "Punkalaidun",
    "Puolanka",
    "Puumala",
    "Pyhtää",
    "Pyhäjoki",
    "Pyhäjärvi",
    "Pyhäntä",
    "Pyhäranta",
    "Pälkäne",
    "Pöytyä",
    "Porvoo",
    "Raahe",
    "Raisio",
    "Rantasalmi",
    "Ranua",
    "Rauma",
    "Rautalampi",
    "Rautavaara",
    "Rautjärvi",
    "Reisjärvi",
    "Riihimäki",
    "Ristijärvi",
    "Rovaniemi",
    "Ruokolahti",
    "Ruovesi",
    "Rusko",
    "Rääkkylä",
    "Raasepori",
    "Saarijärvi",
    "Salla",
    "Salo",
    "Saltvik",
    "Sauvo",
    "Savitaipale",
    "Savonlinna",
    "Savukoski",
    "Seinäjoki",
    "Sievi",
    "Siikainen",
    "Siikajoki",
    "Siilinjärvi",
    "Simo",
    "Sipoo",
    "Siuntio",
    "Sodankylä",
    "Soini",
    "Somero",
    "Sonkajärvi",
    "Sotkamo",
    "Sottunga",
    "Sulkava",
    "Sund",
    "Suomussalmi",
    "Suonenjoki",
    "Sysmä",
    "Säkylä",
    "Vaala",
    "Sastamala",
    "Siikalatva",
    "Taipalsaari",
    "Taivalkoski",
    "Taivassalo",
    "Tammela",
    "Tampere",
    "Tervo",
    "Tervola",
    "Teuva",
    "Tohmajärvi",
    "Toholampi",
    "Toivakka",
    "Tornio",
    "Turku",
    "Pello",
    "Tuusniemi",
    "Tuusula",
    "Tyrnävä",
    "Ulvila",
    "Urjala",
    "Utajärvi",
    "Utsjoki",
    "Uurainen",
    "Uusikaarlepyy",
    "Uusikaupunki",
    "Vaasa",
    "Valkeakoski",
    "Valtimo",
    "Varkaus",
    "Vehmaa",
    "Vesanto",
    "Vesilahti",
    "Veteli",
    "Vieremä",
    "Vihti",
    "Viitasaari",
    "Vimpeli",
    "Virolahti",
    "Virrat",
    "Vårdö",
    "Vöyri",
    "Ylitornio",
    "Ylivieska",
    "Ylöjärvi",
    "Ypäjä",
    "Ähtäri",
    "Äänekoski"
];

const normalizeMunicipalityName = (municipalityName = "") =>
    municipalityName.replace("å", "a").replace("ä","a").replace("ö","o").trim().toLowerCase();

const finnishMunicipalities = finnishMunicipalityNames.reduce((result, name) => {
    const normalizedName = normalizeMunicipalityName(name);

    result[normalizedName] = Municipality(name, normalizedName);

    return result;
}, {});

const findMunicipality = (municipalityName) => {
    const normalizedName = normalizeMunicipalityName(municipalityName);
    const municipality = finnishMunicipalities[normalizedName];

    if (municipality) {
        return Municipality(municipality.name, municipality.normalizedName);
    }
    else {
        return Municipality("", "");
    }
};

const allMunicipalities = () => {
    return finnishMunicipalityNames;
};

module.exports = {
    Municipality: Municipality,
    findMunicipality: findMunicipality,
    allMunicipalities: allMunicipalities
};
