const socket = new WebSocket('ws://localhost:3000');
document.getElementById('trackMe').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
      
          const data = { name, lat, lng };
          socket.send(JSON.stringify(data));
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: true, // Ensures the highest accuracy possible
          timeout: 10000,           // Wait for up to 10 seconds to get a position
          maximumAge: 0             // Don't use cached positions
        }
      );
      
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  