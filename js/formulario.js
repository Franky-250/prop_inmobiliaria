document.getElementById("nombre").addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, '');
  });
  
  document.getElementById("celular").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  
  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const indicativo = document.getElementById("indicativo").value;
    const celular = document.getElementById("celular").value.trim();
  
    if (!nombre || !indicativo || !celular.match(/^[0-9]{6,12}$/)) {
      alert("Por favor completa correctamente todos los campos.");
      return;
    }
  
    const tuNumero = "573197379716";
    const numeroCompleto = `+${indicativo}${celular}`;
    const mensaje = `Hola, soy ${nombre} y tengo una propuesta de una casa o apartamento. Mi número es: ${numeroCompleto}`;
    const url = `https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`;
  
    window.open(url, "_blank");
  });
  
