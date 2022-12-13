<script setup>
import { ref, computed, reactive, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

import L, { latLng } from "leaflet"
import "leaflet/dist/leaflet.css";

const props = defineProps({
    lat: Number,
    lng: Number,
    zoom: Number,
});

const router = useRouter();

// Latitude, Longitude, Zoom value
const lat = ref(parseFloat(props.lat ?? 37.400977));
const lng = ref(parseFloat(props.lng ?? 127.104239));
const zoom = ref(parseFloat(props.zoom ?? 17));

const mapInfo = reactive({ lat, lng, zoom })
const center = reactive({ lat, lng })
// const center = computed({
//     get: () => latLng([mapInfo.lat, mapInfo.lng]),
//     set: (value) => {
//         mapInfo.lat = value.lat;
//         mapInfo.lng = value.lng;
//     }
// });

const mapOptions = ref({
    zoomSnap: 0.5,
    wheelDebounceTime: 0,
});

watch(mapInfo, (value) => {
    router.replace({ query: value });
});

// LTileLayer url
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

onMounted(() => {
    const map = L.map("mapContainer", { center: center, zoom: mapInfo.zoom });

    L.tileLayer(url).addTo(map);
})




</script>

<template>
    <div id="mapContainer"></div>
</template>

<style scoped>
#mapContainer {
    width: 100%;
    height: 100%;
}
</style>