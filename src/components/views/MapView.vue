<script setup>
import { latLng } from "leaflet";
import {
    LMap,
    LTileLayer,
    LMarker,
} from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import "leaflet/dist/leaflet.css";

// LMap
const zoom = ref(17);
const center = [37.400977, 127.1042391];

// LTileLayer
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let markerLatLng = [37.400977, 127.1042391];
let mapOptions = {
    zoomSnap: 0.5,
}

const centerUpdate = function (center) {
    console.log(center)
}

</script>

<template>
    <l-map :zoom="zoom" :center="center" :options="mapOptions" :zoomAnimation="true" :minZoom="7" :maxZoom="17"
        @update:center="centerUpdate" @update:zoom="centerUpdate">
        <l-tile-layer :url="url" :options="mapOptions"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>

</template>

<style scoped>

</style>