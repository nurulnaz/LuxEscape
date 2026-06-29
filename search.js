
const dataHotel = [
  
  { nama: "Aman Jaya Hotel", pautan: "aman.html", negeri: "Kedah", kemudahan: "Wi-Fi • TV • Hot Shower • Double/Twin/King Bed" },
  { nama: "Merilton Hotel", pautan: "meril.html", negeri: "Kedah", kemudahan: "Restaurant • Swimming Pool • Spa • Twin/Queen/King Bed" },
  { nama: "Urban Inn", pautan: "urban.html", negeri: "Kedah", kemudahan: "Wi-Fi • Satellite TV • Hot Shower • Single/Twin/King Bed" },
  { nama: "The Jerai Hotel Sungai Petani", pautan: "jerai.html", negeri: "Kedah", kemudahan: "Coffee House • Grand Ballroom • Wi-Fi • Twin/Queen/King Bed" },
  { nama: "Hotel Seri Malaysia Sungai Petani", pautan: "seri.html", negeri: "Kedah", kemudahan: "Cafe Rasa Sayang • Pool • Banquet Hall • Twin/Queen Bed" },
  
 
  { nama: "Le Embassy Hotel", pautan: "embassy.html", negeri: "Penang", kemudahan: "Café & Lounge • Wi-Fi • Heritage Tours • Twin/Queen/Triple Bed" },
  { nama: "WOW Hotel", pautan: "wow.html", negeri: "Penang", kemudahan: "Rooftop Lounge • Pool Table • Wi-Fi • Twin/Queen/King Bed" },
  { nama: "Hotel Neo+", pautan: "neoplus.html", negeri: "Penang", kemudahan: "Noodles Cafe • Rooftop Pool • Gym • Twin/Queen/King Bed" },
  { nama: "AiGoh Hotel", pautan: "ai.html", negeri: "Penang", kemudahan: "Wi-Fi • Satellite TV • Hot Shower • Twin/Double/King Bed" },
  { nama: "Loke Thye Kee Heritage Hotel", pautan: "loke.html", negeri: "Penang", kemudahan: "Garden Patio • Luxury Rain Shower • Wi-Fi • Plush King Bed" }
];


function liveSearch() {
  const input = document.getElementById('hotel-search').value.toLowerCase();
  const popup = document.getElementById('search-results-popup');
  
 
  if (input.trim() === '') {
    popup.style.display = 'none';
    popup.innerHTML = '';
    return;
  }
  
  
  const hasilTapis = dataHotel.filter(hotel => 
    hotel.nama.toLowerCase().includes(input) || 
    hotel.negeri.toLowerCase().includes(input) ||
    hotel.kemudahan.toLowerCase().includes(input)
  );
  

  if (hasilTapis.length > 0) {
    popup.style.display = 'block';
    popup.innerHTML = hasilTapis.map(hotel => `
      <div class="search-item" style="padding: 12px 15px; border-bottom: 1px solid rgba(197, 160, 89, 0.2); transition: background 0.2s;">
        <a href="${hotel.pautan}" style="text-decoration: none; display: block;">
          <strong style="color: #fff; font-size: 0.95em; display: block;">${hotel.nama}</strong>
          <span style="color: #c5a059; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin: 2px 0;">${hotel.negeri}</span>
          <span style="color: #cbd5e1; font-size: 0.8em; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${hotel.kemudahan}</span>
        </a>
      </div>
    `).join('');
    
  
    const items = popup.querySelectorAll('.search-item');
    items.forEach(item => {
      item.addEventListener('mouseenter', () => item.style.backgroundColor = 'rgba(197, 160, 89, 0.15)');
      item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');
    });
    
  } else {
   
    popup.style.display = 'block';
    popup.innerHTML = `
      <div style="padding: 15px; color: #64748b; font-size: 0.85em; text-align: center;">
        No Hotel Founded...
      </div>
    `;
  }
}


document.addEventListener('click', function(e) {
  const searchForm = document.getElementById('search-form');
  const popup = document.getElementById('search-results-popup');
  if (!searchForm.contains(e.target)) {
    popup.style.display = 'none';
  }
});