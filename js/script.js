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
      "Standort": "Leonhardstr.Musikuni (Reiterkaserne)",
      "Pate": "Fisima",
      "Standort Link": "https://goo.gl/maps/1xia6XwrAQx",
      "Um Baum oder Säule": "Nein",
      "gespendet von": "",
      "Coords": "47.075478,15.4586061"
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
