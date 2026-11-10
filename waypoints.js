const waypoints = [
  {
    "name": "Whangarei Entrance",
    "latitude": -35.87105015305343,
    "longitude": 174.5255007354857,
    "pixel_x": 187.35,
    "pixel_y": 187.93,
    "x_percent": 9.38616,
    "y_percent": 9.1765
  },
  {
    "name": "Hen & Chicks East",
    "latitude": -35.90463923586672,
    "longitude": 174.8374272592027,
    "pixel_x": 593.76,
    "pixel_y": 204.9,
    "x_percent": 29.74749,
    "y_percent": 10.00488
  },
  {
    "name": "Hen & Chicks West",
    "latitude": -35.92894143411395,
    "longitude": 174.6392792683875,
    "pixel_x": 339.21,
    "pixel_y": 266.17,
    "x_percent": 16.99441,
    "y_percent": 12.99642
  },
  {
    "name": "Bream Tail East",
    "latitude": -36.0422908776066,
    "longitude": 174.6052355484551,
    "pixel_x": 304.16,
    "pixel_y": 453.18,
    "x_percent": 15.23832,
    "y_percent": 22.12776
  },
  {
    "name": "Little Barrier North passage",
    "latitude": -36.14875838023135,
    "longitude": 175.0896294002665,
    "pixel_x": 958.09,
    "pixel_y": 573.3,
    "x_percent": 48.00063,
    "y_percent": 27.99298
  },
  {
    "name": "Port Fitzroy entrance",
    "latitude": -36.18403232424193,
    "longitude": 175.2846784247026,
    "pixel_x": 1223.14,
    "pixel_y": 610.86,
    "x_percent": 61.27942,
    "y_percent": 29.82728
  },
  {
    "name": "Little Barrier West passage",
    "latitude": -36.19541082286998,
    "longitude": 175.0235814597295,
    "pixel_x": 877.63,
    "pixel_y": 659.48,
    "x_percent": 43.96967,
    "y_percent": 32.20121
  },
  {
    "name": "Little Barrier East passage",
    "latitude": -36.2039019624148,
    "longitude": 175.1328070767347,
    "pixel_x": 1024.79,
    "pixel_y": 661.32,
    "x_percent": 51.34216,
    "y_percent": 32.29081
  },
  {
    "name": "Gt Barrier West",
    "latitude": -36.23296330194657,
    "longitude": 175.2659806993569,
    "pixel_x": 1207.62,
    "pixel_y": 695.67,
    "x_percent": 60.50177,
    "y_percent": 33.96841
  },
  {
    "name": "Whangaparapara Entrance",
    "latitude": -36.26341223245415,
    "longitude": 175.3890384656386,
    "pixel_x": 1378.0,
    "pixel_y": 733.78,
    "x_percent": 69.03808,
    "y_percent": 35.82899
  },
  {
    "name": "Little Barrier South passage",
    "latitude": -36.24960394303771,
    "longitude": 175.0774724929319,
    "pixel_x": 958.16,
    "pixel_y": 745.47,
    "x_percent": 48.0039,
    "y_percent": 36.40008
  },
  {
    "name": "Blind bay Entrance",
    "latitude": -36.27402412458314,
    "longitude": 175.4243146975838,
    "pixel_x": 1427.19,
    "pixel_y": 748.06,
    "x_percent": 71.50226,
    "y_percent": 36.52615
  },
  {
    "name": "Goat East",
    "latitude": -36.27460578268352,
    "longitude": 174.8330699520006,
    "pixel_x": 632.66,
    "pixel_y": 817.85,
    "x_percent": 31.69641,
    "y_percent": 39.93404
  },
  {
    "name": "Tryphena Entrance",
    "latitude": -36.3260137988843,
    "longitude": 175.4597288270208,
    "pixel_x": 1486.27,
    "pixel_y": 833.85,
    "x_percent": 74.46256,
    "y_percent": 40.71555
  },
  {
    "name": "Coleville channel West",
    "latitude": -36.4117746212269,
    "longitude": 175.2730210187593,
    "pixel_x": 1251.71,
    "pixel_y": 1006.7,
    "x_percent": 62.71114,
    "y_percent": 49.1551
  },
  {
    "name": "North Channel",
    "latitude": -36.38644326197492,
    "longitude": 174.8380786728381,
    "pixel_x": 653.9,
    "pixel_y": 1014.09,
    "x_percent": 32.76035,
    "y_percent": 49.51593
  },
  {
    "name": "Coleville Channel East",
    "latitude": -36.44454285389509,
    "longitude": 175.5466338684872,
    "pixel_x": 1631.32,
    "pixel_y": 1033.54,
    "x_percent": 81.72956,
    "y_percent": 50.46594
  },
  {
    "name": "Sandspit Entrance",
    "latitude": -36.40286966201067,
    "longitude": 174.7472361125511,
    "pixel_x": 531.47,
    "pixel_y": 1054.81,
    "x_percent": 26.62698,
    "y_percent": 51.50457
  },
  {
    "name": "Bon accord entrance",
    "latitude": -36.42255043705197,
    "longitude": 174.8071190320684,
    "pixel_x": 616.07,
    "pixel_y": 1082.49,
    "x_percent": 30.86524,
    "y_percent": 52.85602
  },
  {
    "name": "Kawau East passage",
    "latitude": -36.42950997063944,
    "longitude": 174.901616858776,
    "pixel_x": 746.72,
    "pixel_y": 1083.52,
    "x_percent": 37.41103,
    "y_percent": 52.90612
  },
  {
    "name": "Mullet Passage",
    "latitude": -36.43265032770239,
    "longitude": 174.7873069968565,
    "pixel_x": 590.03,
    "pixel_y": 1103.2,
    "x_percent": 29.56079,
    "y_percent": 53.86719
  },
  {
    "name": "Bee Hive",
    "latitude": -36.46198934921825,
    "longitude": 174.8285421034043,
    "pixel_x": 650.82,
    "pixel_y": 1151.23,
    "x_percent": 32.6062,
    "y_percent": 56.21238
  },
  {
    "name": "Mahurangi entrance",
    "latitude": -36.50950443891357,
    "longitude": 174.7359383059346,
    "pixel_x": 528.41,
    "pixel_y": 1250.22,
    "x_percent": 26.47329,
    "y_percent": 61.04591
  },
  {
    "name": "Coleville Entrance",
    "latitude": -36.61935128428238,
    "longitude": 175.4219584603998,
    "pixel_x": 1501.71,
    "pixel_y": 1369.05,
    "x_percent": 75.23607,
    "y_percent": 66.84819
  },
  {
    "name": "Tiri East",
    "latitude": -36.59800021629008,
    "longitude": 174.9169763325604,
    "pixel_x": 792.93,
    "pixel_y": 1391.33,
    "x_percent": 39.72612,
    "y_percent": 67.9362
  },
  {
    "name": "Tiri Channel",
    "latitude": -36.59790698358896,
    "longitude": 174.8583897273108,
    "pixel_x": 711.02,
    "pixel_y": 1399.21,
    "x_percent": 35.62205,
    "y_percent": 68.32079
  },
  {
    "name": "Shakespear Entrance",
    "latitude": -36.62815506035916,
    "longitude": 174.8175335407787,
    "pixel_x": 657.91,
    "pixel_y": 1460.94,
    "x_percent": 32.96138,
    "y_percent": 71.33493
  },
  {
    "name": "Weiti Entrance",
    "latitude": -36.6529675183159,
    "longitude": 174.7461416615743,
    "pixel_x": 560.27,
    "pixel_y": 1517.53,
    "x_percent": 28.06978,
    "y_percent": 74.09816
  },
  {
    "name": "Long Bay",
    "latitude": -36.67672294256961,
    "longitude": 174.7644312819036,
    "pixel_x": 589.19,
    "pixel_y": 1560.76,
    "x_percent": 29.51874,
    "y_percent": 76.20904
  },
  {
    "name": "Noises passage",
    "latitude": -36.69920360505218,
    "longitude": 174.98358010237,
    "pixel_x": 902.91,
    "pixel_y": 1575.12,
    "x_percent": 45.23578,
    "y_percent": 76.9104
  },
  {
    "name": "Gannet North",
    "latitude": -36.71460141673923,
    "longitude": 175.1677116527353,
    "pixel_x": 1166.02,
    "pixel_y": 1581.21,
    "x_percent": 58.41764,
    "y_percent": 77.2075
  },
  {
    "name": "Rakino Nor'East",
    "latitude": -36.70676846784318,
    "longitude": 174.9588422522417,
    "pixel_x": 868.8,
    "pixel_y": 1593.14,
    "x_percent": 43.52688,
    "y_percent": 77.78982
  },
  {
    "name": "Gannet South",
    "latitude": -36.73084136598092,
    "longitude": 175.1714884458898,
    "pixel_x": 1174.57,
    "pixel_y": 1612.09,
    "x_percent": 58.84615,
    "y_percent": 78.71544
  },
  {
    "name": "Noises South",
    "latitude": -36.7317743594669,
    "longitude": 175.0116422656653,
    "pixel_x": 947.9,
    "pixel_y": 1634.73,
    "x_percent": 47.48976,
    "y_percent": 79.82087
  },
  {
    "name": "Billy goat point",
    "latitude": -36.72651791070101,
    "longitude": 174.9150741366899,
    "pixel_x": 841.95,
    "pixel_y": 1646.23,
    "x_percent": 42.18194,
    "y_percent": 80.38212
  },
  {
    "name": "Murrays",
    "latitude": -36.73096146737693,
    "longitude": 174.7776090684025,
    "pixel_x": 615.19,
    "pixel_y": 1663.8,
    "x_percent": 30.82106,
    "y_percent": 81.24009
  },
  {
    "name": "Spray",
    "latitude": -36.75737332402208,
    "longitude": 175.1413216694244,
    "pixel_x": 1137.05,
    "pixel_y": 1667.41,
    "x_percent": 56.96621,
    "y_percent": 81.41646
  },
  {
    "name": "Waiheke East",
    "latitude": -36.76214023310841,
    "longitude": 175.2121122051641,
    "pixel_x": 1238.64,
    "pixel_y": 1667.88,
    "x_percent": 62.0562,
    "y_percent": 81.43948
  },
  {
    "name": "Mullet Bay entrance",
    "latitude": -36.75057911182923,
    "longitude": 174.9356764900532,
    "pixel_x": 843.02,
    "pixel_y": 1681.12,
    "x_percent": 42.23524,
    "y_percent": 82.08609
  },
  {
    "name": "Motutapu Camp",
    "latitude": -36.74971650481083,
    "longitude": 174.9075247324066,
    "pixel_x": 803.0,
    "pixel_y": 1683.34,
    "x_percent": 40.23046,
    "y_percent": 82.19427
  },
  {
    "name": "Onetangi Entrance",
    "latitude": -36.76326135621536,
    "longitude": 175.0808837719181,
    "pixel_x": 1052.19,
    "pixel_y": 1686.8,
    "x_percent": 52.71485,
    "y_percent": 82.36314
  },
  {
    "name": "Rangitoto North",
    "latitude": -36.75464230685476,
    "longitude": 174.848745548429,
    "pixel_x": 720.12,
    "pixel_y": 1700.81,
    "x_percent": 36.07795,
    "y_percent": 83.04744
  },
  {
    "name": "Owhanake Entrance",
    "latitude": -36.76808820705291,
    "longitude": 174.9888162158283,
    "pixel_x": 921.99,
    "pixel_y": 1708.24,
    "x_percent": 46.19164,
    "y_percent": 83.4101
  },
  {
    "name": "Palm beach entrance",
    "latitude": -36.772782603357,
    "longitude": 175.0408644174432,
    "pixel_x": 997.02,
    "pixel_y": 1710.88,
    "x_percent": 49.95067,
    "y_percent": 83.53891
  },
  {
    "name": "Man O' War entrance",
    "latitude": -36.78893966704244,
    "longitude": 175.1653178959987,
    "pixel_x": 1218.19,
    "pixel_y": 1711.57,
    "x_percent": 61.03159,
    "y_percent": 83.57282
  },
  {
    "name": "Coromandel Entrance",
    "latitude": -36.80154590284936,
    "longitude": 175.4243976821954,
    "pixel_x": 1548.94,
    "pixel_y": 1718.14,
    "x_percent": 77.60203,
    "y_percent": 83.89369
  },
  {
    "name": "Home Bay entrance",
    "latitude": -36.77279014998134,
    "longitude": 174.9351035455681,
    "pixel_x": 845.98,
    "pixel_y": 1725.0,
    "x_percent": 42.384,
    "y_percent": 84.22852
  },
  {
    "name": "Pakatoa Channel north",
    "latitude": -36.78553481130424,
    "longitude": 175.1935231528892,
    "pixel_x": 1177.53,
    "pixel_y": 1726.35,
    "x_percent": 58.9946,
    "y_percent": 84.29467
  },
  {
    "name": "Rangitoto Chanel North",
    "latitude": -36.77844563847727,
    "longitude": 174.8089051514734,
    "pixel_x": 666.45,
    "pixel_y": 1753.16,
    "x_percent": 33.38924,
    "y_percent": 85.60349
  },
  {
    "name": "Browns North",
    "latitude": -36.82058441552608,
    "longitude": 174.8918728651678,
    "pixel_x": 838.88,
    "pixel_y": 1772.97,
    "x_percent": 42.028,
    "y_percent": 86.57079
  },
  {
    "name": "Te Kouma entrance",
    "latitude": -36.82975022232817,
    "longitude": 175.4223399629878,
    "pixel_x": 1553.03,
    "pixel_y": 1773.7,
    "x_percent": 77.80711,
    "y_percent": 86.60652
  },
  {
    "name": "Islington Entrance",
    "latitude": -36.79878321034359,
    "longitude": 174.9031548164693,
    "pixel_x": 805.26,
    "pixel_y": 1780.09,
    "x_percent": 40.34354,
    "y_percent": 86.91825
  },
  {
    "name": "Huruhi Entrance",
    "latitude": -36.80891690573725,
    "longitude": 175.0087829813711,
    "pixel_x": 957.35,
    "pixel_y": 1786.35,
    "x_percent": 47.96339,
    "y_percent": 87.22408
  },
  {
    "name": "Ruthes Passage west",
    "latitude": -36.82316726488048,
    "longitude": 175.1823217452558,
    "pixel_x": 1208.82,
    "pixel_y": 1791.95,
    "x_percent": 60.56189,
    "y_percent": 87.49775
  },
  {
    "name": "Ruths passage east",
    "latitude": -36.8251946815094,
    "longitude": 175.2070442820246,
    "pixel_x": 1244.4,
    "pixel_y": 1792.48,
    "x_percent": 62.34484,
    "y_percent": 87.52332
  },
  {
    "name": "Sergeant Channel",
    "latitude": -36.81185205948869,
    "longitude": 174.9653277239232,
    "pixel_x": 895.91,
    "pixel_y": 1797.94,
    "x_percent": 44.88522,
    "y_percent": 87.79001
  },
  {
    "name": "Park Point",
    "latitude": -36.81670109413662,
    "longitude": 174.9844136862053,
    "pixel_x": 924.03,
    "pixel_y": 1804.79,
    "x_percent": 46.29408,
    "y_percent": 88.12456
  },
  {
    "name": "Rocky Bay Entrance",
    "latitude": -36.82402420143314,
    "longitude": 175.0527540211851,
    "pixel_x": 1023.34,
    "pixel_y": 1810.29,
    "x_percent": 51.26968,
    "y_percent": 88.39286
  },
  {
    "name": "Rangitoto channel South",
    "latitude": -36.81301238199975,
    "longitude": 174.8257353909165,
    "pixel_x": 695.69,
    "pixel_y": 1818.99,
    "x_percent": 34.85399,
    "y_percent": 88.81766
  },
  {
    "name": "Motuhie channel",
    "latitude": -36.79674244167832,
    "longitude": 174.9272874202625,
    "pixel_x": 791.89,
    "pixel_y": 1825.0,
    "x_percent": 39.67405,
    "y_percent": 89.11133
  },
  {
    "name": "Motuhie South",
    "latitude": -36.82682348135386,
    "longitude": 174.9423856428671,
    "pixel_x": 865.28,
    "pixel_y": 1830.77,
    "x_percent": 43.35047,
    "y_percent": 89.39297
  },
  {
    "name": "Henderson Creek entrance",
    "latitude": -36.8153221275638,
    "longitude": 174.6719698146671,
    "pixel_x": 474.97,
    "pixel_y": 1844.87,
    "x_percent": 23.79616,
    "y_percent": 90.08161
  },
  {
    "name": "Browns West",
    "latitude": -36.82986894782299,
    "longitude": 174.8790669170101,
    "pixel_x": 775.0,
    "pixel_y": 1845.41,
    "x_percent": 38.82766,
    "y_percent": 90.1077
  },
  {
    "name": "Awaawaroa Entrance",
    "latitude": -36.84646037130397,
    "longitude": 175.1021437270692,
    "pixel_x": 1098.22,
    "pixel_y": 1848.67,
    "x_percent": 55.02091,
    "y_percent": 90.26693
  },
  {
    "name": "North Head",
    "latitude": -36.82964387604206,
    "longitude": 174.8168680698858,
    "pixel_x": 685.26,
    "pixel_y": 1853.47,
    "x_percent": 34.33152,
    "y_percent": 90.50153
  },
  {
    "name": "Bean Rock North",
    "latitude": -36.83009938716152,
    "longitude": 174.8306230686884,
    "pixel_x": 704.69,
    "pixel_y": 1855.78,
    "x_percent": 35.30498,
    "y_percent": 90.61432
  },
  {
    "name": "Waiheke channel South",
    "latitude": -36.8563030898636,
    "longitude": 175.1441207239552,
    "pixel_x": 1161.77,
    "pixel_y": 1858.92,
    "x_percent": 58.20487,
    "y_percent": 90.76773
  },
  {
    "name": "Kauri Point",
    "latitude": -36.82614383787671,
    "longitude": 174.6960824820375,
    "pixel_x": 551.26,
    "pixel_y": 1858.98,
    "x_percent": 27.61831,
    "y_percent": 90.77073
  },
  {
    "name": "Harbour Bridge",
    "latitude": -36.83001833784004,
    "longitude": 174.7471611404375,
    "pixel_x": 510.83,
    "pixel_y": 1863.14,
    "x_percent": 25.59245,
    "y_percent": 90.97377
  },
  {
    "name": "Sugar Factory",
    "latitude": -36.82589825229647,
    "longitude": 174.7242721566736,
    "pixel_x": 585.06,
    "pixel_y": 1864.29,
    "x_percent": 29.3117,
    "y_percent": 91.0299
  },
  {
    "name": "Musik Point Channel (Sticks)",
    "latitude": -36.84234532432396,
    "longitude": 174.8990209061534,
    "pixel_x": 805.64,
    "pixel_y": 1867.74,
    "x_percent": 40.36267,
    "y_percent": 91.19805
  },
  {
    "name": "Navy",
    "latitude": -36.83498339008621,
    "longitude": 174.7821836346395,
    "pixel_x": 636.15,
    "pixel_y": 1868.94,
    "x_percent": 31.8711,
    "y_percent": 91.25689
  },
  {
    "name": "Tamiki Entrance",
    "latitude": -36.85127610511955,
    "longitude": 174.8884181177817,
    "pixel_x": 791.84,
    "pixel_y": 1886.97,
    "x_percent": 39.67113,
    "y_percent": 92.13721
  },
  {
    "name": "Graingers",
    "latitude": -36.87017470330117,
    "longitude": 174.9016607415303,
    "pixel_x": 813.56,
    "pixel_y": 1924.45,
    "x_percent": 40.7597,
    "y_percent": 93.96751
  }
];
