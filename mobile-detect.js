// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.4 2019-09-21*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function(define, undefined) {
  define(function() {
    "use strict";

    var impl = {};

    impl.mobileDetectRules = {
      phones: {
        iPhone: "\\biPhone\\b|\\biPod\\b",
        Nexus:
          "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        Samsung:
          "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        LG:
          "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        Sony:
          "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        OnePlus: "ONEPLUS"
      },
      tablets: {
        iPad: "iPad|iPad.*Mobile",
        NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
        GoogleTablet: "Android.*Pixel C",
        SamsungTablet:
          "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        AsusTablet:
          "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        LenovoTablet:
          "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        HuaweiTablet:
          "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b"
      },
      oss: {
        AndroidOS: "Android",
        BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
        PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        WindowsMobileOS:
          "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        WindowsPhoneOS:
          "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        iPadOS: "CPU OS 13",
        MeeGoOS: "MeeGo",
        MaemoOS: "Maemo",
        JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
        webOS: "webOS|hpwOS",
        badaOS: "\\bBada\\b",
        BREWOS: "BREW"
      },
      uas: {
        Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
        Dolfin: "\\bDolfin\\b",
        Opera:
          "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
        Skyfire: "Skyfire",
        Edge: "Mobile Safari/[.0-9]* Edge",
        IE: "IEMobile|MSIEMobile",
        Firefox:
          "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        Bolt: "bolt",
        TeaShark: "teashark",
        Blazer: "Blazer",
        Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        WeChat: "\\bMicroMessenger\\b",
        UCBrowser: "UC.*Browser|UCWEB",
        baiduboxapp: "baiduboxapp",
        baidubrowser: "baidubrowser",
        DiigoBrowser: "DiigoBrowser",
        Mercury: "\\bMercury\\b",
        ObigoBrowser: "Obigo",
        NetFront: "NF-Browser",
        GenericBrowser:
          "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
      },
      props: {
        Mobile: "Mobile/[VER]",
        Build: "Build/[VER]",
        Version: "Version/[VER]",
        VendorID: "VendorID/[VER]",
        iPad: "iPad.*CPU[a-z ]+[VER]",
        iPhone: "iPhone.*CPU[a-z ]+[VER]",
        iPod: "iPod.*CPU[a-z ]+[VER]",
        Kindle: "Kindle/[VER]",
        Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
        Coast: ["Coast/[VER]"],
        Dolfin: "Dolfin/[VER]",
        Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
        Fennec: "Fennec/[VER]",
        Edge: "Edge/[VER]",
        IE: [
          "IEMobile/[VER];",
          "IEMobile [VER]",
          "MSIE [VER];",
          "Trident/[0-9.]+;.*rv:[VER]"
        ],
        NetFront: "NetFront/[VER]",
        NokiaBrowser: "NokiaBrowser/[VER]",
        Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
        "Opera Mini": "Opera Mini/[VER]",
        "Opera Mobi": "Version/[VER]",
        UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
        MQQBrowser: "MQQBrowser/[VER]",
        MicroMessenger: "MicroMessenger/[VER]",
        baiduboxapp: "baiduboxapp/[VER]",
        baidubrowser: "baidubrowser/[VER]",
        SamsungBrowser: "SamsungBrowser/[VER]",
        Iron: "Iron/[VER]",
        Safari: ["Version/[VER]", "Safari/[VER]"],
        Skyfire: "Skyfire/[VER]",
        Tizen: "Tizen/[VER]",
        Webkit: "webkit[ /][VER]",
        PaleMoon: "PaleMoon/[VER]",
        Gecko: "Gecko/[VER]",
        Trident: "Trident/[VER]",
        Presto: "Presto/[VER]",
        Goanna: "Goanna/[VER]",
        iOS: " \\bi?OS\\b [VER][ ;]{1}",
        Android: "Android [VER]",
        BlackBerry: [
          "BlackBerry[\\w]+/[VER]",
          "BlackBerry.*Version/[VER]",
          "Version/[VER]"
        ],
        BREW: "BREW [VER]",
        Java: "Java/[VER]",
        "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE/[VER]",
        "Windows NT": "Windows NT [VER]",
        Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
        webOS: ["webOS/[VER]", "hpwOS/[VER];"]
      },
      utils: {
        Bot:
          "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        MobileBot:
          "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
        DesktopMode: "WPDesktop",
        TV: "SonyDTV|HbbTV",
        WebKit: "(webkit)[ /]([\\w.]+)",
        Console:
          "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        Watch: "SM-V700"
      }
    };

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
      fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
      isArray;

    impl.FALLBACK_PHONE = "UnknownPhone";
    impl.FALLBACK_TABLET = "UnknownTablet";
    impl.FALLBACK_MOBILE = "UnknownMobile";

    isArray =
      "isArray" in Array
        ? Array.isArray
        : function(value) {
            return Object.prototype.toString.call(value) === "[object Array]";
          };

    function equalIC(a, b) {
      return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
      var valueLC,
        i,
        len = array.length;
      if (!len || !value) {
        return false;
      }
      valueLC = value.toLowerCase();
      for (i = 0; i < len; ++i) {
        if (valueLC === array[i].toLowerCase()) {
          return true;
        }
      }
      return false;
    }

    function convertPropsToRegExp(object) {
      for (var key in object) {
        if (hasOwnProp.call(object, key)) {
          object[key] = new RegExp(object[key], "i");
        }
      }
    }

    function prepareUserAgent(userAgent) {
      return (userAgent || "").substr(0, 500); // mitigate vulnerable to ReDoS
    }

    (function init() {
      var key,
        values,
        value,
        i,
        len,
        verPos,
        mobileDetectRules = impl.mobileDetectRules;
      for (key in mobileDetectRules.props) {
        if (hasOwnProp.call(mobileDetectRules.props, key)) {
          values = mobileDetectRules.props[key];
          if (!isArray(values)) {
            values = [values];
          }
          len = values.length;
          for (i = 0; i < len; ++i) {
            value = values[i];
            verPos = value.indexOf("[VER]");
            if (verPos >= 0) {
              value =
                value.substring(0, verPos) +
                "([\\w._\\+]+)" +
                value.substring(verPos + 5);
            }
            values[i] = new RegExp(value, "i");
          }
          mobileDetectRules.props[key] = values;
        }
      }
      convertPropsToRegExp(mobileDetectRules.oss);
      convertPropsToRegExp(mobileDetectRules.phones);
      convertPropsToRegExp(mobileDetectRules.tablets);
      convertPropsToRegExp(mobileDetectRules.uas);
      convertPropsToRegExp(mobileDetectRules.utils);

      // copy some patterns to oss0 which are tested first (see issue#15)
      mobileDetectRules.oss0 = {
        WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
        WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
      };
    })();

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            return key;
          }
        }
      }
      return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
      var result = [];
      for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
          if (rules[key].test(userAgent)) {
            result.push(key);
          }
        }
      }
      return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function(propertyName, userAgent) {
      var props = impl.mobileDetectRules.props,
        patterns,
        i,
        len,
        match;
      if (hasOwnProp.call(props, propertyName)) {
        patterns = props[propertyName];
        len = patterns.length;
        for (i = 0; i < len; ++i) {
          match = patterns[i].exec(userAgent);
          if (match !== null) {
            return match[1];
          }
        }
      }
      return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function(propertyName, userAgent) {
      var version = impl.getVersionStr(propertyName, userAgent);
      return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function(version) {
      var numbers;

      numbers = version.split(/[a-z._ \/\-]/i);
      if (numbers.length === 1) {
        version = numbers[0];
      }
      if (numbers.length > 1) {
        version = numbers[0] + ".";
        numbers.shift();
        version += numbers.join("");
      }
      return Number(version);
    };

    impl.isMobileFallback = function(userAgent) {
      return (
        impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
        impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4))
      );
    };

    impl.isTabletFallback = function(userAgent) {
      return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function(cache, userAgent, maxPhoneWidth) {
      if (cache.mobile !== undefined) {
        return;
      }
      var phone, tablet, phoneSized;

      // first check for stronger tablet rules, then phone (see issue#5)
      tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
      if (tablet) {
        cache.mobile = cache.tablet = tablet;
        cache.phone = null;
        return; // unambiguously identified as tablet
      }

      phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
      if (phone) {
        cache.mobile = cache.phone = phone;
        cache.tablet = null;
        return; // unambiguously identified as phone
      }

      // our rules haven't found a match -> try more general fallback rules
      if (impl.isMobileFallback(userAgent)) {
        phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
        if (phoneSized === undefined) {
          cache.mobile = impl.FALLBACK_MOBILE;
          cache.tablet = cache.phone = null;
        } else if (phoneSized) {
          cache.mobile = cache.phone = impl.FALLBACK_PHONE;
          cache.tablet = null;
        } else {
          cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
          cache.phone = null;
        }
      } else if (impl.isTabletFallback(userAgent)) {
        cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
        cache.phone = null;
      } else {
        // not mobile at all!
        cache.mobile = cache.tablet = cache.phone = null;
      }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function(t) {
      // impl note:
      // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
      // When changes are made in Mobile_Detect.php, copy this method and replace:
      //     $this-> / t.
      //     self::MOBILE_GRADE_(.) / '$1'
      //     , self::VERSION_TYPE_FLOAT / (nothing)
      //     isIOS() / os('iOS')
      //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
      var $isMobile = t.mobile() !== null;

      if (
        // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
        (t.os("iOS") && t.version("iPad") >= 4.3) ||
        (t.os("iOS") && t.version("iPhone") >= 3.1) ||
        (t.os("iOS") && t.version("iPod") >= 3.1) ||
        // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
        // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
        // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
        // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
        (t.version("Android") > 2.1 && t.is("Webkit")) ||
        // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
        t.version("Windows Phone OS") >= 7.0 ||
        // Blackberry 7 - Tested on BlackBerry Torch 9810
        // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
        (t.is("BlackBerry") && t.version("BlackBerry") >= 6.0) ||
        // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
        t.match("Playbook.*Tablet") ||
        // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
        (t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi")) ||
        // Palm WebOS 3.0  - Tested on HP TouchPad
        t.match("hp.*TouchPad") ||
        // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
        (t.is("Firefox") && t.version("Firefox") >= 12) ||
        // Chrome for Android - Tested on Android 4.0, 4.1 device
        (t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4.0) ||
        // Skyfire 4.1 - Tested on Android 2.3 device
        (t.is("Skyfire") &&
          t.version("Skyfire") >= 4.1 &&
          t.is("AndroidOS") &&
          t.version("Android") >= 2.3) ||
        // Opera Mobile 11.5-12: Tested on Android 2.3
        (t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS")) ||
        // Meego 1.2 - Tested on Nokia 950 and N9
        t.is("MeeGoOS") ||
        // Tizen (pre-release) - Tested on early hardware
        t.is("Tizen") ||
        // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
        // @todo: more tests here!
        (t.is("Dolfin") && t.version("Bada") >= 2.0) ||
        // UC Browser - Tested on Android 2.3 device
        ((t.is("UC Browser") || t.is("Dolfin")) &&
          t.version("Android") >= 2.3) ||
        // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
        t.match("Kindle Fire") ||
        (t.is("Kindle") && t.version("Kindle") >= 3.0) ||
        // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
        (t.is("AndroidOS") && t.is("NookTablet")) ||
        // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
        (t.version("Chrome") >= 11 && !$isMobile) ||
        // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
        (t.version("Safari") >= 5.0 && !$isMobile) ||
        // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
        (t.version("Firefox") >= 4.0 && !$isMobile) ||
        // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
        (t.version("MSIE") >= 7.0 && !$isMobile) ||
        // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
        // @reference: http://my.opera.com/community/openweb/idopera/
        (t.version("Opera") >= 10 && !$isMobile)
      ) {
        return "A";
      }

      if (
        (t.os("iOS") && t.version("iPad") < 4.3) ||
        (t.os("iOS") && t.version("iPhone") < 3.1) ||
        (t.os("iOS") && t.version("iPod") < 3.1) ||
        // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
        (t.is("Blackberry") &&
          t.version("BlackBerry") >= 5 &&
          t.version("BlackBerry") < 6) ||
        //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
        (t.version("Opera Mini") >= 5.0 &&
          t.version("Opera Mini") <= 6.5 &&
          (t.version("Android") >= 2.3 || t.is("iOS"))) ||
        // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
        t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
        // @todo: report this (tested on Nokia N71)
        (t.version("Opera Mobi") >= 11 && t.is("SymbianOS"))
      ) {
        return "B";
      }

      if (
        // Blackberry 4.x - Tested on the Curve 8330
        t.version("BlackBerry") < 5.0 ||
        // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
        t.match("MSIEMobile|Windows CE.*Mobile") ||
        t.version("Windows Mobile") <= 5.2
      ) {
        return "C";
      }

      //All older smartphone platforms and featurephones - Any device that doesn't support media queries
      //will receive the basic, C grade experience.
      return "C";
    };

    impl.detectOS = function(ua) {
      return (
        impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
        impl.findMatch(impl.mobileDetectRules.oss, ua)
      );
    };

    impl.getDeviceSmallerSide = function() {
      return window.screen.width < window.screen.height
        ? window.screen.width
        : window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
      this.ua = prepareUserAgent(userAgent);
      this._cache = {};
      //600dp is typical 7" tablet minimum width
      this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
      constructor: MobileDetect,

      /**
       * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
       * <br>
       * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
       * <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
       * @function MobileDetect#mobile
       */
      mobile: function() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },

      /**
       * Returns the detected phone type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
       * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
       * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the phone family or producer, e.g. "iPhone"
       * @function MobileDetect#phone
       */
      phone: function() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },

      /**
       * Returns the detected tablet type/family string or <tt>null</tt>.
       * <br>
       * The returned tablet (family or producer) is one of following keys:<br>
       * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
       * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
       * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
       * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
       * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
       * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
       * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
       * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
       * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
       * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
       * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
       * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
       * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
       * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
       * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
       * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
       * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
       * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
       * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
       * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
       * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
       * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
       * GenericTablet</tt><br>
       * <br>
       * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
       * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
       * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
       * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
       * <br>
       * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
       * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
       * will return <code>UnknownMobile</code>.<br>
       * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
       * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
       * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
       * <br>
       * In most cases you will use the return value just as a boolean.
       *
       * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
       * @function MobileDetect#tablet
       */
      tablet: function() {
        impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },

      /**
       * Returns the (first) detected user-agent string or <tt>null</tt>.
       * <br>
       * The returned user-agent is one of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {String} the key for the detected user-agent or <tt>null</tt>
       * @function MobileDetect#userAgent
       */
      userAgent: function() {
        if (this._cache.userAgent === undefined) {
          this._cache.userAgent = impl.findMatch(
            impl.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgent;
      },

      /**
       * Returns all detected user-agent strings.
       * <br>
       * The array is empty or contains one or more of following keys:<br>
       * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
       * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
       * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
       * <br>
       * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
       * cases where a mobile device pretends to be more than one particular browser. You can get the
       * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
       * providing one of the defined keys as first argument to {@link MobileDetect#is}.
       *
       * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
       * @function MobileDetect#userAgents
       */
      userAgents: function() {
        if (this._cache.userAgents === undefined) {
          this._cache.userAgents = impl.findMatches(
            impl.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgents;
      },

      /**
       * Returns the detected operating system string or <tt>null</tt>.
       * <br>
       * The operating system is one of following keys:<br>
       * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
       * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
       *
       * @returns {String} the key for the detected operating system.
       * @function MobileDetect#os
       */
      os: function() {
        if (this._cache.os === undefined) {
          this._cache.os = impl.detectOS(this.ua);
        }
        return this._cache.os;
      },

      /**
       * Get the version (as Number) of the given property in the User-Agent.
       * <br>
       * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
       * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
       * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
       *
       * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
       *          Be careful when comparing this value with '==' operator!
       * @function MobileDetect#version
       */
      version: function(key) {
        return impl.getVersion(key, this.ua);
      },

      /**
       * Get the version (as String) of the given property in the User-Agent.
       * <br>
       *
       * @param {String} key a key defining a thing which has a version.<br>
       *        You can use one of following keys:<br>
       * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
       * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
       * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
       * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
       * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
       * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
       *
       * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
       *
       * @function MobileDetect#versionStr
       */
      versionStr: function(key) {
        return impl.getVersionStr(key, this.ua);
      },

      /**
       * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
       *
       * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
       *        tablet family.<br>
       *        For a complete list of possible values, see {@link MobileDetect#userAgent},
       *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
       *        Additionally you have following keys:<br>
       * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
       *
       * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
       *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
       * @function MobileDetect#is
       */
      is: function(key) {
        return (
          containsIC(this.userAgents(), key) ||
          equalIC(key, this.os()) ||
          equalIC(key, this.phone()) ||
          equalIC(key, this.tablet()) ||
          containsIC(
            impl.findMatches(impl.mobileDetectRules.utils, this.ua),
            key
          )
        );
      },

      /**
       * Do a quick test against navigator::userAgent.
       *
       * @param {String|RegExp} pattern the pattern, either as String or RegExp
       *                        (a string will be converted to a case-insensitive RegExp).
       * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
       * @function MobileDetect#match
       */
      match: function(pattern) {
        if (!(pattern instanceof RegExp)) {
          pattern = new RegExp(pattern, "i");
        }
        return pattern.test(this.ua);
      },

      /**
       * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
       * <br>
       * Obviously this method makes sense in browser environments only (not for Node.js)!
       * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
       *        The argument is optional and if not present or falsy, the value of the constructor is taken.
       * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
       *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
       *          Will always return <code>undefined</code> server-side.
       */
      isPhoneSized: function(maxPhoneWidth) {
        return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
      },

      /**
       * Returns the mobile grade ('A', 'B', 'C').
       *
       * @returns {String} one of the mobile grades ('A', 'B', 'C').
       * @function MobileDetect#mobileGrade
       */
      mobileGrade: function() {
        if (this._cache.grade === undefined) {
          this._cache.grade = impl.mobileGrade(this);
        }
        return this._cache.grade;
      }
    };

    // environment-dependent
    if (typeof window !== "undefined" && window.screen) {
      MobileDetect.isPhoneSized = function(maxPhoneWidth) {
        return maxPhoneWidth < 0
          ? undefined
          : impl.getDeviceSmallerSide() <= maxPhoneWidth;
      };
    } else {
      MobileDetect.isPhoneSized = function() {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;

    MobileDetect.version = "1.4.4 2019-09-21";

    return MobileDetect;
  }); // end of call of define()
})(
  (function(undefined) {
    if (typeof module !== "undefined" && module.exports) {
      return function(factory) {
        module.exports = factory();
      };
    } else if (typeof define === "function" && define.amd) {
      return define;
    } else if (typeof window !== "undefined") {
      return function(factory) {
        window.MobileDetect = factory();
      };
    } else {
      // please file a bug if you get this error!
      throw new Error("unknown environment");
    }
  })()
);
