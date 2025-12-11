var APP_DATA = {
  "scenes": [

    {
      "id": "0-sunrise-over-nola---riverwalk-360",
      "name": "Sunrise over NOLA - Riverwalk 360",
      "levels": [
        {"tileSize":256,"size":256,"fallbackOnly":true},
        {"tileSize":512,"size":512},
        {"tileSize":512,"size":1024},
        {"tileSize":512,"size":2048},
        {"tileSize":512,"size":4096}
      ],
      "faceSize":3000,
      "initialViewParameters":{"yaw":-1.2195,"pitch":0.2684,"fov":1.2599},
      "linkHotspots":[],
      "infoHotspots":[

        {
          "yaw": -1.997901004256951,
          "pitch": 0.02876451237494848,
          "title": "Crescent City Connection",
          "text": "Formerly the Greater New Orleans Bridge, The Crescent City Connection is a pair of cantilever bridges that carry U.S. Highway 90 Business over the Mississippi River in New Orleans, Louisiana.  They are tied as the fifth-longest cantilever bridges in the world."
        },
        {
          "yaw": 0.04,
          "pitch": 0.37263,
          "title": "Canal Street",
          "text": "Canal Street is a major thoroughfare in New Orleans which began as a planned, but unbuilt canal (1807) intended to link the Mississippi River and Lake Pontchartrain. With the influx of Americans after the Louisiana Purchase, Canal Street became the separation line between Creole New Orleans (French Quarter) and the American Sector (Business District)  "
        },
        {
          "yaw": 2.51795,
          "pitch": 0.12294,
          "title": "Algiers Point",
          "text": "Established in 1719, Algiers is the second-oldest neighborhood in New Orleans. It is the only Orleans Parish community located on the West Bank of the Mississippi River."
        },
        {
          "yaw": 0.85,
          "pitch": 0.15,
          "title": "French Quarter",
          "text": "The French Quarter is the oldest neighborhood in New Orleans.  It is famous for its vibrant nightlife and colorful buildings with cast-iron balconies.  Crowd-pleasing Bourbon Street features jazz clubs, Cajun eateries, and raucous bars serving potent cocktails.  Street performers gather near Jackson Square to entertain crowds in front of St. Louis Cathedral."
        }
      ]
    },

    {
      "id": "1-sunset-at-uno-360",
      "name": "Sunset at UNO 360",
      "levels":[
        {"tileSize":256,"size":256,"fallbackOnly":true},
        {"tileSize":512,"size":512},
        {"tileSize":512,"size":1024},
        {"tileSize":512,"size":2048},
        {"tileSize":512,"size":4096}
      ],
      "faceSize":3000,
      "initialViewParameters":{"yaw":-0.0694,"pitch":0.3740,"fov":1.2599},
      "linkHotspots":[{"yaw":-0.01618,"pitch":-0.11448,"rotation":3.14159,"target":"0-sunrise-over-nola---riverwalk-360"}],
      "infoHotspots":[
        {
          "yaw":-0.6862,"pitch":0.2090,
          "title":"The University of New Orleans",
          "text":"The University of New Orleans is a public research university, and one of two doctoral research universities in the Greater New Orleans region.  UNO's 195-acre main campus is located on the shores of Lake Pontchartrain in Gentilly, New Orleans."
        },
        {
          "yaw":2.02289,"pitch":0.1643,
          "title":"Lake Pontchartrain",
          "text":"Lake Pontchartrain is an estuary located in southeastern Louisiana. It covers 630 square miles with an average depth of 12-14 feet. The estuary is crossed by Lake Pontchartrain Causeway, the longest continuous bridge over water in the world. Because of its narrow opening to the Gulf of Mexico, Lake Pontchartrain is not a lake, but an estuary, containing both fresh and saltwater. "
        }
      ]
    },

    {
      "id":"2-sunrise-over-loyola-nola",
      "name":"Sunrise over Loyola NOLA",
      "levels":[
        {"tileSize":256,"size":256,"fallbackOnly":true},
        {"tileSize":512,"size":512},
        {"tileSize":512,"size":1024},
        {"tileSize":512,"size":2048},
        {"tileSize":512,"size":4096}
      ],
      "faceSize":3000,
      "initialViewParameters":{"yaw":0.28319,"pitch":0.3460,"fov":1.2599},
      "linkHotspots":[{"yaw":0.8019,"pitch":-0.1341,"rotation":3.14159,"target":"0-sunrise-over-nola---riverwalk-360"}],
      "infoHotspots":[
        {"yaw":0.0899,"pitch":0.6350,"title":"Loyola University","text":"Established in 1904 as Loyola College, Loyola University New Orleans is a private Jesuit university. It was chartered as a university in 1912. "},
        {"yaw":-0.4840,"pitch":0.2651,"title":"Tulane University","text":"Founded as the Medical College of Louisiana in 1834 by a cohort of medical doctors, The Tulane University of Louisiana is a public university which operates the Tulane University School of Law and the Tulane University School of Medicine, the 12th oldest law school and 15th oldest medical school in the United States."},
        {"yaw":-2.6977,"pitch":0.1828,"title":"Audubon Park","text":"At roughly 350 acres, Audubon Park is approximately six miles west of New Orleans city center in the Uptown neighborhood.  It is bordered on one side by the Mississippi River, and on the other side by St. Charles Avenue, directly across from Loyola University and Tulane University."}
      ]
    },

    {
      "id":"3-city-park-new-orleans",
      "name":"City Park New Orleans",
      "levels":[
        {"tileSize":256,"size":256,"fallbackOnly":true},
        {"tileSize":512,"size":512},
        {"tileSize":512,"size":1024},
        {"tileSize":512,"size":2048},
        {"tileSize":512,"size":4096}
      ],
      "faceSize":3000,
      "initialViewParameters":{"yaw":-0.0134,"pitch":0.0890,"fov":1.2599},
      "linkHotspots":[{"yaw":0.4172,"pitch":-0.1154,"rotation":3.14159,"target":"0-sunrise-over-nola---riverwalk-360"}],
      "infoHotspots":[
        {"yaw":0.0276,"pitch":0.3705,"title":"New Orleans Museum of Art","text":"Located in City Park, New Orleans Museum of Art is the oldest fine arts museum in the city of New Orleans. The permanent collection at the museum features more than 40,000 objects spanning 5,000 years of art.  Other holdings include collections of glass, ceramics, Native American Art, Central American art from pre-Columbian and Spanish eras, and more."},
        {"yaw":2.84,"pitch":0.38,"title":"New Orleans City Park","text":"At 1300 acres, New Orleans City Park is approximately 50% bigger than Central Park in New York City.  It holds the world's largest collection of mature live oak trees, some older than 600 years in age.  The park was founded in 1854, making it the 48th oldest park in the United States."}
      ]
    },

    /* ---------------- SUPERDOME SCENE ---------------- */

    {
      "id": "4-superdome-360",
      "name": "Full Moon Over New Orleans Superdome",
      "levels":[
        {"tileSize":256,"size":256,"fallbackOnly":true},
        {"tileSize":512,"size":512},
        {"tileSize":512,"size":1024},
        {"tileSize":512,"size":2048},
        {"tileSize":512,"size":4096}
      ],
      "faceSize":3000,
      "initialViewParameters":{"yaw":0,"pitch":0,"fov":1.2599},
      "linkHotspots":[],
      "infoHotspots":[
        {
          "yaw":0.013,
          "pitch":0.136,
          "title":"Caesars Superdome",
          "text":"Opened as the Louisiana Superdome in 1975, its steel frame covers a 13-arcre expanse and 680 ft. diameter, making it the largest fixed domed structure in the world.  Home of the New Orleans Saints (NFL)."
        },
        {
          "yaw":0.792,
          "pitch":0.328,
          "title":"Smoothie King Center",
          "text":"Home of the New Orleans Pelicans (NBA)"
        },
        {
          "yaw":0.1842,
          "pitch":-0.15,
          "title":"Crescent City Connection",
          "text":"Formerly the Greater New Orleans Bridge (shown here in the distance with glowing red arches), The Crescent City Connection is a pair of cantilever bridges that carry U.S. Highway 90 Business over the Mississippi River in New Orleans, USA.  They are tied as the fifth-longest cantilever bridges in the world."
        }
      ]
    }

  ],

  "name":"New Orleans Cityscape",

  "settings":{
    "mouseViewMode":"drag",
    "autorotateEnabled":true,
    "fullscreenButton":false,
    "viewControlButtons":false
  }
};
