function unlockLetter() {
    var password = document.getElementById('password').value;
    var letter = document.getElementById('letter');
  
    // Replace 'yourpassword' with the actual password you want to use
    if (password === 'Anurag@10') {
      letter.style.display = 'block';
      letter.innerHTML = "My Dearest Love,<br><br>I want you to know how much you mean to me. You are my everything, my reason for waking up with a smile every morning.<br><br>Every moment spent with you is like a precious gem, something I cherish deeply in my heart.<br><br>I love you more than words can express, and I promise to spend the rest of my days showing you just how much you mean to me.<br><br>Forever Yours,<br>[Anurag]";
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
  