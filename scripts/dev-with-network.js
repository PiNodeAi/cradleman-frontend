#!/usr/bin/env node

const { execSync } = require('child_process');
const { spawn } = require('child_process');

// Try to get the local IP address
function getLocalIP() {
  try {
    // Try macOS method first
    const ip = execSync('ipconfig getifaddr en0', { encoding: 'utf8' }).trim();
    if (ip) return ip;
  } catch (e) {
    // Try en1 (Ethernet)
    try {
      const ip = execSync('ipconfig getifaddr en1', { encoding: 'utf8' }).trim();
      if (ip) return ip;
    } catch (e2) {
      // Fallback: try to parse ifconfig output
      try {
        const output = execSync('ifconfig | grep "inet " | grep -v 127.0.0.1 | head -1', { encoding: 'utf8' });
        const match = output.match(/inet (\d+\.\d+\.\d+\.\d+)/);
        if (match) return match[1];
      } catch (e3) {
        console.error('Could not determine local IP address');
        return null;
      }
    }
  }
  return null;
}

const localIP = getLocalIP();

if (localIP) {
  console.log('\n🌐 Your local network IP address:', localIP);
  console.log(`📱 Access from other devices: http://${localIP}:3000`);
  console.log(`💻 Local access: http://localhost:3000\n`);
  
  // Open browser after server starts (with a delay)
  setTimeout(() => {
    try {
      const url = `http://${localIP}:3000`;
      console.log(`\n🌐 Opening ${url} in your browser...\n`);
      execSync(`open "${url}"`, { stdio: 'ignore' });
    } catch (e) {
      // Ignore if open command fails
    }
  }, 3000);
} else {
  console.log('\n⚠️  Could not automatically detect your IP address.');
  console.log('   Please find it manually: System Settings → Network → Wi-Fi → Details → TCP/IP\n');
}

// Start Next.js dev server
console.log('🚀 Starting Next.js dev server...\n');

const nextProcess = spawn('npx', ['next', 'dev', '-H', '0.0.0.0', '-p', '3000'], {
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
  process.exit(0);
});

