  const fileInput = document.getElementById('vinyls.json');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      console.log(json);
    };
    reader.readAsText(file);
  });
