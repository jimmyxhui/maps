  // Draw the pin
  const pinLocation = projection([133.7751, -25.2744]);
  const pinWidth = 15;
  const pinHeight = 25;

  // Create a linear gradient for the pin
  const gradient = context.createLinearGradient(
    pinLocation[0] - pinWidth / 2, pinLocation[1] - pinHeight / 2, 
    pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2
  );
  gradient.addColorStop(0, "#999"); // Darker at the top
  gradient.addColorStop(1, "#ddd"); // Lighter at the bottom

  // Draw the pin body with the gradient
  context.fillStyle = gradient;
  context.beginPath();
  context.moveTo(pinLocation[0] - pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] - pinHeight / 2);
  context.lineTo(pinLocation[0] - pinWidth / 2, pinLocation[1] - pinHeight / 2);
  context.closePath();
  context.fill();

  // Draw the pin head (slightly rounded)
  context.beginPath();
  context.ellipse(pinLocation[0], pinLocation[1] - pinHeight / 2, pinWidth / 2, pinWidth / 3, 0, 0, 2 * Math.PI);
  context.fillStyle = "#999";
  context.fill();

  // Add a shadow to the pin
  context.fillStyle = "rgba(0, 0, 0, 0.3)";
  context.beginPath();
  context.moveTo(pinLocation[0] - pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2, pinLocation[1] + pinHeight / 2);
  context.lineTo(pinLocation[0] + pinWidth / 2 + 5, pinLocation[1] - pinHeight / 2 + 5);
  context.lineTo(pinLocation[0] - pinWidth / 2 + 5, pinLocation[1] - pinHeight / 2 + 5);
  context.closePath();
  context.fill();









  // Draw the pin
  const pinLocation = projection([133.7751, -25.2744]);
  const pinRadius = 15;

  // Draw the pin circle
  context.fillStyle = "#999";
  context.beginPath();
  context.arc(pinLocation[0], pinLocation[1], pinRadius, 0, 2 * Math.PI);
  context.fill();

  // Draw the pin polygon
  context.fillStyle = "#999";
  context.beginPath();
  context.moveTo(pinLocation[0], pinLocation[1] - pinRadius); // Top point
  context.lineTo(pinLocation[0] - pinRadius / 2, pinLocation[1]); // Left point
  context.lineTo(pinLocation[0] + pinRadius / 2, pinLocation[1]); // Right point
  context.closePath();
  context.fill();

  // Add a shadow to the pin
  context.fillStyle = "rgba(0, 0, 0, 0.3)";
  context.beginPath();
  context.arc(pinLocation[0], pinLocation[1] + pinRadius / 2, pinRadius / 2, 0, 2 * Math.PI);
  context.fill();
