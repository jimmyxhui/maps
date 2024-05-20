
// Draw the map
australia.then(data => {
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.fillStyle = "lightgray";
  context.beginPath();
  path(data.features[0]);
  context.fill();
  context.stroke();

  // Draw the 3D pin
  const pinLocation = projection([133.7751, -25.2744]);
  const pinWidth = 15;
  const pinHeight = 25;

  // Pin body
  context.fillStyle = "#999";
  context.beginPath();
  context.moveTo(pinLocation[0] - pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] - pinHeight / 2);
  context.lineTo(pinLocation[0] - pinWidth / 2, pinLocation[1] - pinHeight / 2);
  context.closePath();
  context.fill();

  // Pin head
  context.fillStyle = "#999";
  context.beginPath();
  context.arc(pinLocation[0], pinLocation[1] - pinHeight / 2, pinWidth / 2, 0, Math.PI);
  context.fill();

  // Pin shadow
  context.fillStyle = "rgba(0, 0, 0, 0.2)";
  context.beginPath();
  context.moveTo(pinLocation[0] - pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] - pinHeight / 2 + 5);
  context.lineTo(pinLocation[0] - pinWidth / 2, pinLocation[1] - pinHeight / 2 + 5);
  context.closePath();
  context.fill();

  // Pin highlight
  context.fillStyle = "rgba(255, 255, 255, 0.3)";
  context.beginPath();
  context.moveTo(pinLocation[0] - pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] - pinHeight / 2 - 5);
  context.lineTo(pinLocation[0] - pinWidth / 2, pinLocation[1] - pinHeight / 2 - 5);
  context.closePath();
  context.fill();
});
