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
          "text": "Formerly the Greater New Orleans Bridge..."
        },
        {
          "yaw": 0.04,
          "pitch": 0.37263,
          "title": "Canal Street",
          "text": "Canal Street is a major thoroughfare..."
        },
        {
          "yaw": 2.51795,
          "pitch": 0.12294,
          "title": "Algiers Point",
          "text": "Algiers was established in 1719..."
        },
        {
          "yaw": 0.85,
          "pitch": 0.15,
          "title": "French Quarter",
          "text": "The French Quarter is the oldest neighborhood..."
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
          "text":"The University of New Orleans is a public research university..."
        },
        {
          "yaw":2.02289,"pitch":0.1643,
          "title":"Lake Pontchartrain",
          "text":"Lake Pontchartrain is an estuary located in southeastern Louisiana..."
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
        {"yaw":0.0899,"pitch":0.6350,"title":"Loyola University","text":"Loyola University New Orleans..."},
        {"yaw":-0.4840,"pitch":0.2651,"title":"Tulane University","text":"Founded as the Medical College of Louisiana..."},
        {"yaw":-2.6977,"pitch":0.1828,"title":"Audubon Park","text":"At roughly 350 acres..."}
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
        {"yaw":0.0276,"pitch":0.3705,"title":"New Orleans Museum of Art","text":"Located in City Park..."},
        {"yaw":2.84,"pitch":0.38,"title":"New Orleans City Park","text":"At 1300 acres..."}
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
          "text":"Opened as the Louisiana Superdome in 1975..."
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
          "text":"Formerly the Greater New Orleans Bridge..."
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
