import { useEffect, useRef } from "react";

interface MockupGeneratorProps {
  width?: number;
  height?: number;
  type: "app-preview" | "feature-monitoring" | "feature-cost" | "feature-setup";
  className?: string;
}

export function MockupGenerator({ width = 300, height = 600, type, className = "" }: MockupGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    switch (type) {
      case "app-preview":
        drawAppPreview(ctx, width, height);
        break;
      case "feature-monitoring":
        drawFeatureMonitoring(ctx, width, height);
        break;
      case "feature-cost":
        drawFeatureCost(ctx, width, height);
        break;
      case "feature-setup":
        drawFeatureSetup(ctx, width, height);
        break;
    }
  }, [width, height, type]);

  return <canvas ref={canvasRef} className={className} />;
}

function drawAppPreview(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Draw phone frame with modern UI
  ctx.fillStyle = "#1a365d"; // Dark blue background
  ctx.fillRect(0, 0, width, height);
  
  // Draw status bar
  ctx.fillStyle = "#2d3748";
  ctx.fillRect(0, 0, width, 40);
  
  // Draw header with user info
  ctx.fillStyle = "#2b6cb0";
  ctx.fillRect(0, 40, width, 80);
  
  // Draw user name
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 16px Inter";
  ctx.fillText("John's Home", 20, 80);
  
  // Draw main content area
  ctx.fillStyle = "#f7fafc";
  ctx.fillRect(0, 120, width, height - 120);

  // Draw energy usage card
  drawCard(ctx, 20, 140, width - 40, 200, "Current Usage");
  
  // Draw circular progress
  const centerX = width / 2;
  const centerY = 240;
  const radius = 60;

  // Draw outer circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 10;
  ctx.stroke();

  // Draw progress
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, -Math.PI / 2, Math.PI);
  ctx.strokeStyle = "#3182ce";
  ctx.stroke();

  // Draw center text
  ctx.fillStyle = "#2d3748";
  ctx.font = "bold 24px Inter";
  ctx.textAlign = "center";
  ctx.fillText("245", centerX, centerY - 10);
  ctx.font = "14px Inter";
  ctx.fillText("kWh", centerX, centerY + 15);

  // Draw recent readings card
  drawCard(ctx, 20, 360, width - 40, 200, "Recent Readings");
  
  // Draw graph
  drawGraph(ctx, 40, 420, width - 80, 120);
}

function drawFeatureMonitoring(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f7fafc";
  ctx.fillRect(0, 0, width, height);

  // Draw header
  ctx.fillStyle = "#2b6cb0";
  ctx.fillRect(0, 0, width, 60);
  
  // Header text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px Inter";
  ctx.textAlign = "center";
  ctx.fillText("Real-time Monitoring", width / 2, 35);

  // Draw multiple meter readings
  const readings = [
    { label: "Living Room", value: "125 kWh" },
    { label: "Kitchen", value: "85 kWh" },
    { label: "Bedroom", value: "60 kWh" }
  ];

  readings.forEach((reading, index) => {
    const y = 100 + (index * 120);
    drawMeterCard(ctx, 20, y, width - 40, 100, reading);
  });
}

function drawFeatureCost(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f7fafc";
  ctx.fillRect(0, 0, width, height);

  // Draw header
  ctx.fillStyle = "#2b6cb0";
  ctx.fillRect(0, 0, width, 60);
  
  // Header text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px Inter";
  ctx.textAlign = "center";
  ctx.fillText("Cost Analysis", width / 2, 35);

  // Draw cost overview card
  drawCard(ctx, 20, 80, width - 40, 150, "Monthly Overview");
  
  // Draw cost amount
  ctx.fillStyle = "#2d3748";
  ctx.font = "bold 32px Inter";
  ctx.textAlign = "center";
  ctx.fillText("$124.50", width / 2, 160);
  
  // Draw comparison text
  ctx.font = "14px Inter";
  ctx.fillStyle = "#48bb78";
  ctx.fillText("-15% vs. last month", width / 2, 190);

  // Draw bar chart
  drawBarChart(ctx, 20, 250, width - 40, 200);
}

function drawFeatureSetup(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // Background
  ctx.fillStyle = "#f7fafc";
  ctx.fillRect(0, 0, width, height);

  // Draw header
  ctx.fillStyle = "#2b6cb0";
  ctx.fillRect(0, 0, width, 60);
  
  // Header text
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 18px Inter";
  ctx.textAlign = "center";
  ctx.fillText("Easy Setup", width / 2, 35);

  // Draw setup steps
  const steps = [
    { title: "Connect Device", desc: "Plug in your smart meter" },
    { title: "Scan QR Code", desc: "Link device to your account" },
    { title: "Start Monitoring", desc: "View real-time data" }
  ];

  steps.forEach((step, index) => {
    const y = 100 + (index * 140);
    drawSetupStep(ctx, 20, y, width - 40, 120, step, index + 1);
  });
}

// Helper functions
function drawCard(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, title: string) {
  // Draw card background
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  roundRect(ctx, x, y, width, height, 12);
  ctx.fill();
  ctx.shadowColor = "transparent";

  // Draw card title
  ctx.fillStyle = "#4a5568";
  ctx.font = "bold 16px Inter";
  ctx.textAlign = "left";
  ctx.fillText(title, x + 20, y + 30);
}

function drawMeterCard(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, reading: { label: string; value: string }) {
  drawCard(ctx, x, y, width, height, reading.label);
  
  // Draw reading value
  ctx.fillStyle = "#2d3748";
  ctx.font = "bold 24px Inter";
  ctx.fillText(reading.value, x + 20, y + 70);
  
  // Draw trend indicator
  ctx.fillStyle = "#48bb78";
  ctx.font = "14px Inter";
  ctx.fillText("↓ 5% vs. last week", x + width - 120, y + 70);
}

function drawGraph(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
  const points = [50, 60, 45, 70, 65, 80, 75];
  const step = width / (points.length - 1);
  
  ctx.beginPath();
  ctx.moveTo(x, y + height - (points[0] / 100 * height));
  
  points.forEach((point, i) => {
    if (i === 0) return;
    ctx.lineTo(x + (step * i), y + height - (point / 100 * height));
  });
  
  ctx.strokeStyle = "#3182ce";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawBarChart(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
  const data = [45, 65, 85, 55, 75, 60];
  const barWidth = (width - 40) / data.length;
  const maxValue = Math.max(...data);
  
  data.forEach((value, i) => {
    const barHeight = (value / maxValue) * (height - 40);
    const barX = x + 20 + (i * barWidth);
    const barY = y + height - barHeight;
    
    ctx.fillStyle = "#3182ce";
    ctx.fillRect(barX, barY, barWidth - 10, barHeight);
  });
}

function drawSetupStep(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, step: { title: string; desc: string }, number: number) {
  drawCard(ctx, x, y, width, height, "");
  
  // Draw step number
  ctx.fillStyle = "#3182ce";
  ctx.font = "bold 24px Inter";
  ctx.fillText(number.toString(), x + 20, y + 45);
  
  // Draw step title
  ctx.fillStyle = "#2d3748";
  ctx.font = "bold 16px Inter";
  ctx.fillText(step.title, x + 60, y + 35);
  
  // Draw step description
  ctx.fillStyle = "#718096";
  ctx.font = "14px Inter";
  ctx.fillText(step.desc, x + 60, y + 60);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}