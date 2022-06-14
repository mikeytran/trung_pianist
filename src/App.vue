<template>
  <Layout>
    <Navbar />
    <Home />
    <Bio v-bind="bio" />
  </Layout>
</template>

<script>
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    Bio,
  },
  data() {
    return {
      bio: {
        imageUrl: "img/bio-pic.dff6188c.jpg",
        text: 'Wietnamski pianista urodzony 30 września 1996 roku w Ha Noi od dziecka mieszkający w Polsce. Aktualnie kontynuuje studia podyplomowe u prof. Katarzyny Popowej-Zydroń w Akademii Muzycznej w Bydgoszczy.<br /><br />Do jego ostatnich osiągnięć należą: zwycięstwo w XVII Ogólnopolskim Festiwalu Pianistycznym „Chopinowskie Interpretacje Młodych” w Koninie-Żychlinie (2021), V nagroda na Ogólnopolskim Konkursie im. Fryderyka Chopina w Warszawie (2020), Grand Prix na Międzynarodowym Konkursie Muzyki Kameralnej w Wietnamie (2019) i III nagroda na Międzynarodowym Konkursie Pianistycznym Karlovac w Chorwacji (2019). W 2021 wziął udział w drugim etapie XVIII Międzynarodowym Konkursie Pianistycznym im. Fryderyka Chopina w Warszawie.<br /><br /> Koncertował w Europie: Niemczech, Francji, Rosji, Ukrainie, Węgrzech i w Polsce, oraz w Stanach Zjednoczonych, Tajlandii, Korei Południowej, Japonii i Wietnamie. W trakcie wystawy światowej "Expo 2020" w Dubaju dał cykl recitali w ramach koncertów NIFC w Polskim Pawilonie. Jako solista wystąpił z Vietnam National Symphony Orchestra, Hanoi Symphonic Orchestra, Orkiestrą Filharmonii Narodowej w Warszawie, # Orkiestrą Polskiego Radia czy Orkiestrą Filharmonii Lubelskiej, m.in. pod batutą takich dyrygentów jak: Le Phi Phi, Honna Tetsuji, Łukasz Borowicz czy Marek Pijarowski. Pianista wykonuje także muzykę kameralną współpracując m.in z Ulysses Quartet, Arod Quartet oraz Arso Quintet. W dotychczasowym dorobku ma występy m.in. na festiwalach im. Artura Rubinsteina w Łodzi (2019), Frost Chopin Piano Festival w Miami (2018, 2019), na koncertach chopinowskich w Żelazowej Woli, Muzeum Fryderyka Chopina czy w Łazienkach Królewskich. <br /><br /> Brał udział w licznych kursach mistrzowskich, prowadzonych między innymi przez: Tatianę Shebanovą, Dang Thai Sona, Kevina Kennera, Dmitri Alexeeva czy Andrzeja Jaśinski.',
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/globals.scss";
</style>
