<template>
  <div>
    <h1>Hello User, Welcome on Home Page</h1>

    <!-- Map section from the given template -->
    <div class="map-container" :class="{ 'wide': isWide }">
      <button @click="getLocation()" class="button">Get My Location</button>
      <div ref="mapContainer" class="map"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import L from "leaflet";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      lat: 0,
      lng: 0,
      map: null,
      mapContainer: null,
      isWide: false,
    };
  },
  mounted() {
    this.map = L.map(this.$refs.mapContainer).setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(this.map);

    this.getLocation();
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.map.setView([this.lat, this.lng], 13);

          var customIcon = L.icon({
            iconUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7SaUF1tIu_w/company-logo_200_200/0/1629293256926?e=2147483647&v=beta&t=ASfdIQI7FRhJxSD4Aprzuut_vDhlXOC_bd9P5fu9_CI',
            iconSize: [40, 40], // Set the size of the icon
          });

          // Remove the `draggable: true` option to prevent the marker from being draggable
          const marker = L.marker([this.lat, this.lng], { icon: customIcon })
            .addTo(this.map)
            .bindPopup(this.getProfilePopupContent());

          marker.on("dragend", (event) => {
            const marker = event.target;
            const position = marker.getLatLng();
            this.lat = position.lat;
            this.lng = position.lng;
            marker.setPopupContent(this.getProfilePopupContent());
          });
        });
      }
    },
    getProfilePopupContent() {
      // Replace with your actual profile data
      const profileData = {
        name: "TEKAB",
        lastName: "DEV",
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
    },
  },
  mounted() {
    resetPageBreadcrumbs();
  },
});
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
  height: 600px;
  /* or any desired height */
  position: relative;
  /* Ensure proper sizing */
}

.map {
  width: 100%;
  height: 100%;
}

/* Set the width of the leaflet container to 100% */
.leaflet-container {
  width: 100% !important;
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
