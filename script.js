function openInvitation() {
  // Play background music
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.play().catch(error => {
    console.log('Autoplay prevented:', error);
    // Show a message to user that they need to interact to play music
    alert('Please click the button again to play background music');
  });

  // Sembunyikan intro dengan animasi fade out
  document.getElementById('intro').style.opacity = '0';
  document.getElementById('intro').style.pointerEvents = 'none';

  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
  }, 1000); // setelah fade-out selesai
  
  // Menampilkan main-page dan section-two
  document.getElementById('mainPage').classList.add('show');

  // Menampilkan section-two setelah intro selesai (dengan delay)
  setTimeout(() => {
    document.querySelector('.section-two').style.display = 'flex';
    document.querySelector('.section-two').classList.add('show');
  }, 1000);

  // Transisi main-page
  setTimeout(() => {
    document.getElementById('mainPage').style.opacity = '1';
    document.getElementById('mainPage').style.pointerEvents = 'auto';
  }, 1000);

  // Aktifkan scroll detection untuk mempelai setelah undangan dibuka
  initScrollReveal();
}

// Tampilkan ornamen hanya saat section-two terlihat
document.addEventListener('DOMContentLoaded', function () {
  const sectionTwo = document.querySelector('.section-two');
  const ornamentLeft = document.querySelector('.screen-ornament.left');
  const ornamentRight = document.querySelector('.screen-ornament.right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ornamentLeft.style.display = 'block';
        ornamentRight.style.display = 'block';
      } else {
        ornamentLeft.style.display = 'none';
        ornamentRight.style.display = 'none';
      }
    });
  }, {
    threshold: 0.2
  });

  if (sectionTwo) {
    observer.observe(sectionTwo);
  }
});

// Tampilkan ornamen section-four hanya saat section tersebut terlihat
document.addEventListener('DOMContentLoaded', function () {
  const sectionFour = document.querySelector('.section-four');
  const ornamentBottomRight = document.querySelector('.section-four .ornament-corner.bottom-right');
  const ornamentBottomLeft = document.querySelector('.section-four .ornament-corner.bottom-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionFour.classList.add('show');
        setTimeout(() => {
          ornamentBottomRight.classList.add('show');
          ornamentBottomLeft.classList.add('show');
        }, 500); // Delay ornament appearance slightly after section
      } else {
        sectionFour.classList.remove('show');
        ornamentBottomRight.classList.remove('show');
        ornamentBottomLeft.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionFour) {
    observer.observe(sectionFour);
  }
});

// Fungsi untuk menampilkan bagian mempelai saat scroll
function initScrollReveal() {
  const sections = document.querySelectorAll('.section-three');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => observer.observe(section));
}

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date('2025-05-02T16:00:00');
  const now = new Date();
  
  const diff = weddingDate - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);

// Handle section-five visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionFive = document.querySelector('.section-five');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionFive.classList.add('show');
      } else {
        sectionFive.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionFive) {
    observer.observe(sectionFive);
  }
});

// Handle section-six visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionSix = document.querySelector('.section-six');
  const ornamentBottomRight = document.querySelector('.section-six .ornament-corner.bottom-right');
  const ornamentBottomLeft = document.querySelector('.section-six .ornament-corner.bottom-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionSix.classList.add('show');
        setTimeout(() => {
          ornamentBottomRight.classList.add('show');
          ornamentBottomLeft.classList.add('show');
        }, 500);
      } else {
        sectionSix.classList.remove('show');
        ornamentBottomRight.classList.remove('show');
        ornamentBottomLeft.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionSix) {
    observer.observe(sectionSix);
  }
});

// Handle section-seven visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionSeven = document.querySelector('.section-seven');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionSeven.classList.add('show');
      } else {
        sectionSeven.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionSeven) {
    observer.observe(sectionSeven);
  }
});

// Handle section-eight visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionEight = document.querySelector('.section-eight');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionEight.classList.add('show');
      } else {
        sectionEight.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionEight) {
    observer.observe(sectionEight);
  }
});

// Handle section-nine visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionNine = document.querySelector('.section-nine');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionNine.classList.add('show');
      } else {
        sectionNine.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionNine) {
    observer.observe(sectionNine);
  }
});

// Handle section-ten visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionTen = document.querySelector('.section-ten');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionTen.classList.add('show');
      } else {
        sectionTen.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionTen) {
    observer.observe(sectionTen);
  }
});

// Handle section-eleven visibility
document.addEventListener('DOMContentLoaded', function () {
  const sectionEleven = document.querySelector('.section-eleven');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionEleven.classList.add('show');
      } else {
        sectionEleven.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  });

  if (sectionEleven) {
    observer.observe(sectionEleven);
  }
});

function copyAccountNumber(button) {
  const accountNumber = button.parentElement.getAttribute('data-account');
  
  // Copy to clipboard
  navigator.clipboard.writeText(accountNumber).then(() => {
    // Change button text and style
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    // Reset button after 2 seconds
    setTimeout(() => {
      button.textContent = 'Copy';
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// RSVP Form Functions
function openRSVPForm() {
  document.getElementById('rsvpPopup').style.display = 'block';
}

function closeRSVPForm() {
  document.getElementById('rsvpPopup').style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
  if (event.target == document.getElementById('rsvpPopup')) {
    closeRSVPForm();
  }
}

async function submitRSVP(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    group: document.getElementById('group').value,
    whatsapp: document.getElementById('whatsapp').value,
    attendance: document.getElementById('attendance').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch('save_rsvp.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      document.getElementById('rsvpForm').reset();
      closeRSVPForm();
      loadGuestMessages();
      alert('Terima kasih atas konfirmasi kehadiran Anda!');
    } else {
      throw new Error('Failed to submit RSVP');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
  }
}

async function loadGuestMessages() {
  try {
    const response = await fetch('/api/rsvp');
    const messages = await response.json();
    
    const guestMessagesContainer = document.getElementById('guestMessages');
    guestMessagesContainer.innerHTML = '';
    
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.className = 'guest-message';
      messageElement.innerHTML = `
        <div class="name">${message.name}</div>
        <div class="group">${message.group}</div>
        <div class="attendance ${message.attendance.toLowerCase().includes('hadir') ? 'hadir' : 'tidak-hadir'}">
          ${message.attendance}
        </div>
        <div class="message">${message.message}</div>
      `;
      guestMessagesContainer.appendChild(messageElement);
    });
  } catch (error) {
    console.error('Error loading messages:', error);
  }
}

// Load guest messages when page loads
document.addEventListener('DOMContentLoaded', loadGuestMessages);

