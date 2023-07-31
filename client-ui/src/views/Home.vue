<template>
  <div class="map-container">
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import L from "leaflet";
const lat = ref(0);
const lng = ref(0);
const map = ref();
const mapContainer = ref();

const state = reactive({
  isWide: false,
});

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map.value);

  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude;
      lng.value = position.coords.longitude;
      map.value.setView([lat.value, lng.value], 13);

      var greenIcon = L.icon({
        iconUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7SaUF1tIu_w/company-logo_200_200/0/1629293256926?e=2147483647&v=beta&t=ASfdIQI7FRhJxSD4Aprzuut_vDhlXOC_bd9P5fu9_CI',
        iconSize: [40, 40], // Set the size of the icon
      });

      // Remove the `draggable: true` option to prevent the marker from being draggable
      const marker = L.marker([lat.value, lng.value], { icon: greenIcon })
        .addTo(map.value)
        .bindPopup(getProfilePopupContent());

      marker.on("dragend", (event) => {
        const marker = event.target;
        const position = marker.getLatLng();
        lat.value = position.lat;
        lng.value = position.lng;
        marker.setPopupContent(getProfilePopupContent());
      });
    });
  }
}

function getProfilePopupContent() {
  // Replace with your actual profile data
  const profileData = {
    name: "TEKAB",
    lastName: "Smith",
    logo: "https://th.bing.com/th/id/OIP.t7sQCTBBQiqC0ETPx9iV7gAAAA?pid=ImgDet&rs=1",
    additionalData: "Your additional data here",
  };

  return `
    <div class="profile-popup">
      <img src="${profileData.logo}" class="profile-logo">
      <div class="profile-details">
        <h3>${profileData.name} ${profileData.lastName}</h3>
        <p>${profileData.additionalData}</p>
      </div>
    </div>
  `;
}
</script>


<style>
.button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}

/* Overriding any potential parent container styles */
.map-container {
  width: 100%;
  height:500px; /* or any desired height */
  position: relative; /* Ensure proper sizing */
  overflow: hidden;
  margin: 0; /* Remove any margins */
  padding: 0; /* Remove any padding */
  z-index: 0;
}

.map {
  width: 100%;
  height: 100%;
  margin: 0; /* Remove any margins */
  padding: 0; /* Remove any padding */
}

/* Set the width of the leaflet container to 100% */
.leaflet-container {
  width: 100% !important;
  margin: 0; /* Remove any margins */
  padding: 0; /* Remove any padding */
}

.custom-icon {
  background-color: #ff3366;
  border-radius: 50%;
  padding: 8px;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.custom-icon i {
  font-size: 20px;
}

/* Additional styles for the profile popup */
.profile-popup {
  display: flex;
}

.profile-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-details h3 {
  margin: 0;
}

.profile-details p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* Add a new class to control the width of the map */
.wide {
  /* You can adjust the desired width here */
  width: 500px;
}
</style>
