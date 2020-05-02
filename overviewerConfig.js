var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Shitty Hogwarts Overworld",
        "Shitty Hogwarts Nether - nether"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1588389155",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Shitty Hogwarts",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "normalrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Shitty Hogwarts Overworld",
            "last_rendertime": 1588389024,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                167,
                80,
                144
            ],
            "minZoom": 0,
            "spawn": [
                167,
                80,
                144
            ],
            "north_direction": 0
        },
        {
            "name": "Shitty Hogwarts Nether",
            "zoomLevels": 5,
            "defaultZoom": 1,
            "maxZoom": 5,
            "path": "netherrender",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Shitty Hogwarts Nether - nether",
            "last_rendertime": 1588389023,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
