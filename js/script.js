(function ($) {

  var data = [
    {
      "Anzahl Plakatständer": 1,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "Griesplatz Bushaltestelle",
      "Pate": "PeterTheOne",
      "Standort Link": "https://goo.gl/maps/ic5Jwk9HwhP2",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "Presidente",
      "Coords": "47.0668889,15.4310084"
    },
    {
      "Anzahl Plakatständer": 2,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "TU Technikerstraße, bei Trafik",
      "Pate": "Presidente",
      "Standort Link": "https://goo.gl/maps/cZmdrpWEQ7H2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.069182,15.4505728"
    },
    {
      "Anzahl Plakatständer": 3,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Radweg Glacis, Kreuzung Zinzendorfgasse",
      "Pate": "Katieschen",
      "Standort Link": "https://goo.gl/maps/HFbeVvAgi2v",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.075,15.4454806"
    },
    {
      "Anzahl Plakatständer": 4,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "KFU Uni Zinzendorfgasse 29, Sonnenfelsplatz",
      "Pate": "Presidente",
      "Standort Link": "https://goo.gl/maps/cK2pgySa1k72",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.076106,15.4495868"
    },
    {
      "Anzahl Plakatständer": 5,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "KFU Uni Resowi Geidorfgürtel Höhe Johann Fux Gasse",
      "Pate": "Presidente",
      "Standort Link": "https://goo.gl/maps/RamCJBgWpE12",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.078592,15.4509308"
    },
    {
      "Anzahl Plakatständer": 6,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "KFU Uni Mensa",
      "Pate": "Presidente",
      "Standort Link": "https://goo.gl/maps/ceN9o8ciYBy",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.076245,15.4500308"
    },
    {
      "Anzahl Plakatständer": 7,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "KFU Harrachgasse Ecke Halbärthgasse (Univ.Platz)",
      "Pate": "Katieschen/Presidente",
      "Standort Link": "https://goo.gl/maps/S6sxXbsowzD2",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.077592,15.4482458"
    },
    {
      "Anzahl Plakatständer": 8,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "Eisernes Tor",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/Rovkh6PPPwR2",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.0686441,15.4415459"
    },
    {
      "Anzahl Plakatständer": 9,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "Jakominiplatz, Rondeau",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/D7jfq2JrsXw",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.067354,15.4419128"
    },
    {
      "Anzahl Plakatständer": 10,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "Jakominiplatz, Steirerhof",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/bcu8eUDoAGP2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.067493,15.4431928"
    },
    {
      "Anzahl Plakatständer": 11,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "Jakominiplatz, Kapadokya",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/8bSFrDtSDJx",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.067209,15.4424998"
    },
    {
      "Anzahl Plakatständer": 12,
      "Team": "C",
      "Reihenfolge": 6,
      "Standort": "Kunsthaus/Südtirolerplatz",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/8hvQ88rHcBE2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.070971,15.4330848"
    },
    {
      "Anzahl Plakatständer": 13,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "FH (beim Baum) Eggenbergerstr. 53",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/y8BTifv6ws22",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.069971,15.4090828"
    },
    {
      "Anzahl Plakatständer": 14,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "FH (beim Baum) Eggenberger Alle 113",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/HDDhojjtiEm",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "Fisima",
      "Coords": "47.069999,15.4060008"
    },
    {
      "Anzahl Plakatständer": 15,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "FH Alte Post 152",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/BTzFKmomPhr",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.069059,15.4089258"
    },
    {
      "Anzahl Plakatständer": 16,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "AMS WEST (EggenbergerGürtel Ecke Niesenbergergasse)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/Q5tWo9evqBG2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.069471,15.4191788"
    },
    {
      "Anzahl Plakatständer": 17,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "AMS OST (Neutorgasse 46)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/TVqb7U3Zky22",
      "Um Baum oder Säule": "",
      "gespendet von": "",
      "Coords": "47.067601,15.4369518"
    },
    {
      "Anzahl Plakatständer": 18,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Moserhofgasse (Spar)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/Szum6cKdTjJ2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "Dr. phil Gerald Kainz",
      "Coords": "47.060072,15.4540338"
    },
    {
      "Anzahl Plakatständer": 19,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "Ungergasse 41, Botanic Matters (Growshop)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/gobuucGdhd52",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.067639,15.4214378"
    },
    {
      "Anzahl Plakatständer": 20,
      "Team": "C",
      "Reihenfolge": "Erledigt",
      "Standort": "Polizeistation Schmiedgasse 26",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/BKcSuzWJq9M2",
      "Um Baum oder Säule": "",
      "gespendet von": "",
      "Coords": "47.0685439,15.4388845"
    },
    {
      "Anzahl Plakatständer": 21,
      "Team": "B",
      "Reihenfolge": 6,
      "Standort": "Rosenhang 28 zw. Tennis Allround und Sportplatz, beim Radweg",
      "Pate": "Fisima",
      "Standort Link": "https://goo.gl/maps/wfQpto8dZhL2",
      "Um Baum oder Säule": "Nein (am Zaun fixiert)",
      "gespendet von": "",
      "Coords": "47.07704,15.4787968"
    },
    {
      "Anzahl Plakatständer": 22,
      "Team": "B",
      "Reihenfolge": 5,
      "Standort": "Stiftingtalstrasse 7, Haltestellenbereich",
      "Pate": "Fisima",
      "Standort Link": "https://goo.gl/maps/m67b2Hfyqa32",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.079742,15.4670328"
    },
    {
      "Anzahl Plakatständer": 23,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Wickenburggasse Ecke Jahngasse (Radweg)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/ZSdDX5vmTk32",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.079016,15.4385428"
    },
    {
      "Anzahl Plakatständer": 24,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Karmeliterplatz Paulustorgasse",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/LqFHvGqSx242",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.0738569,15.4395255"
    },
    {
      "Anzahl Plakatständer": 25,
      "Team": "C",
      "Reihenfolge": "",
      "Standort": "Schloßbergplatz 1 - Mursteg",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/Ez143Vh5ihT2",
      "Um Baum oder Säule": "",
      "gespendet von": "",
      "Coords": "47.0726449,15.4349185"
    },
    {
      "Anzahl Plakatständer": 26,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Leonhardstr.Musikuni",
      "Pate": "Fisima",
      "Standort Link": "https://goo.gl/maps/1xia6XwrAQx",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.075478,15.4586061"
    },
    {
      "Anzahl Plakatständer": 27,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Leonhardstr. Kunstuni",
      "Pate": "Fisima",
      "Standort Link": "https://goo.gl/maps/gewpivKS75N2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.072166,15.4497218"
    },
    {
      "Anzahl Plakatständer": 28,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Endstation Andritz",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/e38dp7oRA9y",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.1031399,15.4213865"
    },
    {
      "Anzahl Plakatständer": 29,
      "Team": "A",
      "Reihenfolge": "Erledigt",
      "Standort": "Endstation Wetzelsdorf",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/hdhs8Fk2LXz",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.0606729,15.3921245"
    },
    {
      "Anzahl Plakatständer": 30,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Endstation Liebenau/Murpark !!!!",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/5wEqgMxiZ1G2",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.0407349,15.4634525"
    },
    {
      "Anzahl Plakatständer": 31,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Endstation Puntigam",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/SZdqifDJojp",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.0303409,15.4280735"
    },
    {
      "Anzahl Plakatständer": 32,
      "Team": "C",
      "Reihenfolge": 8,
      "Standort": "Lendplatz",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/qXWoWeSCpSQ2",
      "Um Baum oder Säule": "",
      "gespendet von": "",
      "Coords": "47.075081,15.4302458"
    },
    {
      "Anzahl Plakatständer": 33,
      "Team": "A",
      "Reihenfolge": 9,
      "Standort": "LKH-West UKH Endhaltestelle",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/gEGnk8TrBeD2",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.07901,15.3961818"
    },
    {
      "Anzahl Plakatständer": 34,
      "Team": "A",
      "Reihenfolge": 8,
      "Standort": "Bim Haltestelle Schloss Eggenberg",
      "Pate": "Presidente",
      "Standort Link": "https://goo.gl/maps/txWozYSfjTp",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.074972,15.3964373"
    },
    {
      "Anzahl Plakatständer": 35,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Schulzentrum St. Peter, Innfeld",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/VgwAQegriLz",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.060265,15.4634878"
    },
    {
      "Anzahl Plakatständer": 36,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Innfeldgasse Ecke Petersgasse",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/QamhwcXAuHs",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.060034,15.4635358"
    },
    {
      "Anzahl Plakatständer": 37,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Liebiggasse Ecke Heinrichstrasse (Growshop)",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/nvy2FpgbQvF2",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.080326,15.4502738"
    },
    {
      "Anzahl Plakatständer": 38,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Hundewiese Rosenhain",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/actFmb2GjPk",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "Katieschen",
      "Coords": "47.083553,15.4515018"
    },
    {
      "Anzahl Plakatständer": 39,
      "Team": "A",
      "Reihenfolge": "",
      "Standort": "Radweg Ampel Meran/Morellenfeldgasse",
      "Pate": "Winston",
      "Standort Link": "https://goo.gl/maps/44tMqJLf8962",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.071729,15.4562848"
    },
    {
      "Anzahl Plakatständer": 40,
      "Team": "B",
      "Reihenfolge": "Erledigt",
      "Standort": "Hundewiese Hilmteich",
      "Pate": "",
      "Standort Link": "https://goo.gl/maps/ik8Qm9Y6Xz72",
      "Um Baum oder Säule": "Ja",
      "gespendet von": "",
      "Coords": "47.082223,15.4592518"
    }
  ];


  $(function () {
    var map = L.map('map').setView([47.0707140, 15.4395040], 12);

    L.tileLayer('https://maps{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.{format}', {
      maxZoom: 20,
      attribution: 'Datenquelle: <a href="www.basemap.at">basemap.at</a>',
      subdomains: ["", "1", "2", "3", "4"],
      format: 'jpeg',
      bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
    }).addTo(map);

    var $tableRowTemplate = $('#hiddenTemplates .tableRowTemplate');
    var $actionTemplate = $('#hiddenTemplates .actionTemplate');

    $.each(data, function (index, element){
      var coords = element['Coords'].split(',');

      var marker = L.marker([coords[0], coords[1]]).addTo(map);

      var $tableRow = $tableRowTemplate.clone().removeClass('tableRowTemplate');
      var $action = $actionTemplate.clone().removeClass('actionTemplate');


      var email = 'mailto:lv-steiermark@piratenpartei.at?subject=' +
        encodeURIComponent('[PlakateMap] Plakatständer # ' + element['Anzahl Plakatständer'] + ' in der ' +
          element['Standort'] + ' ist *kaputt/umgefallen/...*') + '&body=*Foto*';
      var tweet = 'https://twitter.com/home?status=' +
        encodeURIComponent('@PiratenGraz Der Plakatständer # ' + element['Anzahl Plakatständer'] + ' in der ' +
          element['Standort'] + ' ist *kaputt/umgefallen/...* #PlakateMap');
      $('.email', $action).attr('href', email);
      $('.twitter', $action).attr('href', tweet);


      marker.bindPopup('#' + element['Anzahl Plakatständer'] + ': ' + element['Standort'] + '<br />Melden: ' + $action.html());


      $('.number', $tableRow).text(element['Anzahl Plakatständer']);
      $('.place', $tableRow).text(element['Standort']);
      $('.action', $tableRow).html($action);
      $('#table tbody').append($tableRow);
    });
  });

})(jQuery);
