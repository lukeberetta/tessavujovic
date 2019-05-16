window.onload = () => {

  let copy = "SPATIAL DESIGNS"

  var text = new Blotter.Text(copy, {
    family: "'Archivo Black', sans-serif",
    size: 60,
    fill: "rgba(214, 178, 0, 1)",
    paddingLeft: 40,
    paddingRight: 40
  });

  var material = new Blotter.LiquidDistortMaterial();

  // Speed
  material.uniforms.uSpeed.value = 0.2;
  // Volatility
  material.uniforms.uVolatility.value = 0.02;

  var blotter = new Blotter(material, {
    texts: text
  });

  var elem = document.getElementById("warp");
  var scope = blotter.forText(text);

  scope.appendTo(elem);
}
