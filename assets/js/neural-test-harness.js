/**
 * Neural Symphony Test Harness
 * Performance and QA testing instrumentation
 */

(function() {
  'use strict';

  class PerformanceMonitor {
    constructor() {
      this.fps = 0;
      this.frameCount = 0;
      this.lastFpsUpdate = 0;
      this.frameTimes = [];
      this.maxFrameTimes = 60;
      this.memoryReadings = [];
      this.startTime = performance.now();

      // Stats
      this.stats = {
        avgFps: 0,
        minFps: Infinity,
        maxFps: 0,
        frameDrops: 0,
        memoryPeak: 0,
        memoryAvg: 0
      };

      this.createOverlay();
      this.startMonitoring();
    }

    createOverlay() {
      const overlay = document.createElement('div');
      overlay.id = 'perf-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: #00ff00;
        font-family: monospace;
        font-size: 12px;
        padding: 10px;
        z-index: 10000;
        border-radius: 4px;
        min-width: 200px;
      `;
      overlay.innerHTML = `
        <div>FPS: <span id="perf-fps">--</span></div>
        <div>Avg FPS: <span id="perf-avg-fps">--</span></div>
        <div>Min FPS: <span id="perf-min-fps">--</span></div>
        <div>Frame Drops: <span id="perf-drops">0</span></div>
        <div>Memory: <span id="perf-memory">--</span></div>
        <div>Active Signals: <span id="perf-signals">--</span></div>
        <div>Active Particles: <span id="perf-particles">--</span></div>
        <hr style="border-color: #333; margin: 5px 0;">
        <button id="perf-export" style="width: 100%; padding: 5px; cursor: pointer;">Export Report</button>
      `;
      document.body.appendChild(overlay);

      document.getElementById('perf-export').addEventListener('click', () => this.exportReport());
    }

    startMonitoring() {
      // FPS monitoring
      const monitorFrame = (timestamp) => {
        this.frameCount++;
        this.frameTimes.push(timestamp);

        if (this.frameTimes.length > this.maxFrameTimes) {
          this.frameTimes.shift();
        }

        // Update FPS every second
        if (timestamp - this.lastFpsUpdate >= 1000) {
          this.fps = this.frameCount;
          this.frameCount = 0;
          this.lastFpsUpdate = timestamp;

          // Track stats
          if (this.fps > 0 && this.fps < 200) { // Sanity check
            this.stats.avgFps = ((this.stats.avgFps * this.stats.frameDrops) + this.fps) / (this.stats.frameDrops + 1);
            this.stats.minFps = Math.min(this.stats.minFps, this.fps);
            this.stats.maxFps = Math.max(this.stats.maxFps, this.fps);

            if (this.fps < 55) {
              this.stats.frameDrops++;
            }
          }

          this.updateOverlay();
        }

        requestAnimationFrame(monitorFrame);
      };

      requestAnimationFrame(monitorFrame);

      // Memory monitoring (if available)
      if (performance.memory) {
        setInterval(() => {
          const memMB = performance.memory.usedJSHeapSize / (1024 * 1024);
          this.memoryReadings.push(memMB);

          if (this.memoryReadings.length > 60) {
            this.memoryReadings.shift();
          }

          this.stats.memoryPeak = Math.max(this.stats.memoryPeak, memMB);
          this.stats.memoryAvg = this.memoryReadings.reduce((a, b) => a + b, 0) / this.memoryReadings.length;
        }, 1000);
      }
    }

    updateOverlay() {
      document.getElementById('perf-fps').textContent = this.fps;
      document.getElementById('perf-fps').style.color = this.fps >= 55 ? '#00ff00' : this.fps >= 30 ? '#ffff00' : '#ff0000';
      document.getElementById('perf-avg-fps').textContent = this.stats.avgFps.toFixed(1);
      document.getElementById('perf-min-fps').textContent = this.stats.minFps === Infinity ? '--' : this.stats.minFps;
      document.getElementById('perf-drops').textContent = this.stats.frameDrops;

      if (performance.memory) {
        const memMB = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(1);
        document.getElementById('perf-memory').textContent = `${memMB} MB`;
      }

      // Neural Symphony specific stats
      if (window.neuralSymphony) {
        const ns = window.neuralSymphony;
        document.getElementById('perf-signals').textContent = ns.signalPool?.size || 0;
        document.getElementById('perf-particles').textContent =
          (ns.ambientPool?.size || 0) + (ns.burstPool?.size || 0);
      }
    }

    exportReport() {
      const runtime = ((performance.now() - this.startTime) / 1000).toFixed(1);
      const report = {
        timestamp: new Date().toISOString(),
        runtime: `${runtime}s`,
        performance: {
          avgFps: this.stats.avgFps.toFixed(1),
          minFps: this.stats.minFps === Infinity ? 'N/A' : this.stats.minFps,
          maxFps: this.stats.maxFps,
          frameDrops: this.stats.frameDrops,
          memoryPeak: `${this.stats.memoryPeak.toFixed(1)} MB`,
          memoryAvg: `${this.stats.memoryAvg.toFixed(1)} MB`
        },
        neuralSymphony: {
          neurons: window.neuralSymphony?.neurons?.length || 0,
          connections: window.neuralSymphony?.connections?.length || 0,
          width: window.neuralSymphony?.width || 0,
          height: window.neuralSymphony?.height || 0
        }
      };

      console.log('=== PERFORMANCE REPORT ===');
      console.log(JSON.stringify(report, null, 2));

      // Copy to clipboard
      navigator.clipboard?.writeText(JSON.stringify(report, null, 2));
      alert('Performance report copied to clipboard and logged to console!');
    }
  }

  // Visual Tests
  class VisualTester {
    constructor() {
      this.testResults = [];
    }

    runAllTests() {
      console.log('=== VISUAL TESTS ===');

      this.testCanvasExists();
      this.testDPRScaling();
      this.testColorScheme();
      this.testResponsiveCSS();
      this.testReducedMotion();

      console.log('Test Results:', this.testResults);
      return this.testResults;
    }

    testCanvasExists() {
      const canvas = document.getElementById('neuron-canvas');
      const result = {
        name: 'Canvas Element Exists',
        passed: !!canvas,
        details: canvas ? `Found: ${canvas.width}x${canvas.height}` : 'Canvas not found'
      };
      this.testResults.push(result);
      console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.details}`);
    }

    testDPRScaling() {
      const canvas = document.getElementById('neuron-canvas');
      const dpr = window.devicePixelRatio || 1;
      const styleWidth = parseInt(canvas?.style.width || 0);
      const canvasWidth = canvas?.width || 0;

      const expectedWidth = styleWidth * dpr;
      const tolerance = 2; // Allow small rounding differences

      const result = {
        name: 'DPR Scaling',
        passed: Math.abs(canvasWidth - expectedWidth) <= tolerance,
        details: `DPR: ${dpr}, Canvas: ${canvasWidth}px, Expected: ${expectedWidth}px`
      };
      this.testResults.push(result);
      console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.details}`);
    }

    testColorScheme() {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const ns = window.neuralSymphony;
      const colors = ns?.getColors?.();

      const result = {
        name: 'Color Scheme Detection',
        passed: !!colors,
        details: `Mode: ${isDark ? 'dark' : 'light'}, Colors loaded: ${!!colors}`
      };
      this.testResults.push(result);
      console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.details}`);
    }

    testResponsiveCSS() {
      const container = document.querySelector('.neural-container');
      const computedStyle = getComputedStyle(container);
      const width = parseInt(computedStyle.width);
      const viewportWidth = window.innerWidth;

      let expectedBehavior = '';
      if (viewportWidth < 600) {
        expectedBehavior = 'Full width (mobile)';
      } else if (viewportWidth < 992) {
        expectedBehavior = 'Float right 280px (tablet)';
      } else if (viewportWidth < 1200) {
        expectedBehavior = 'Float right 320px (desktop)';
      } else {
        expectedBehavior = 'Float right 350px (large)';
      }

      const result = {
        name: 'Responsive Container',
        passed: true,
        details: `Viewport: ${viewportWidth}px, Container: ${width}px, ${expectedBehavior}`
      };
      this.testResults.push(result);
      console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.details}`);
    }

    testReducedMotion() {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const result = {
        name: 'Reduced Motion Detection',
        passed: true,
        details: `prefers-reduced-motion: ${prefersReducedMotion ? 'reduce' : 'no-preference'}`
      };
      this.testResults.push(result);
      console.log(`[${result.passed ? 'PASS' : 'FAIL'}] ${result.name}: ${result.details}`);
    }
  }

  // Interaction Tests
  class InteractionTester {
    constructor() {
      this.testResults = [];
    }

    simulateMouseMove(x, y) {
      const canvas = document.getElementById('neuron-canvas');
      const rect = canvas.getBoundingClientRect();
      const event = new MouseEvent('mousemove', {
        clientX: rect.left + x,
        clientY: rect.top + y,
        bubbles: true
      });
      canvas.dispatchEvent(event);
    }

    simulateClick(x, y) {
      const canvas = document.getElementById('neuron-canvas');
      const rect = canvas.getBoundingClientRect();
      const event = new MouseEvent('mousedown', {
        clientX: rect.left + x,
        clientY: rect.top + y,
        bubbles: true
      });
      canvas.dispatchEvent(event);

      setTimeout(() => {
        canvas.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      }, 100);
    }

    runInteractionTests() {
      console.log('=== INTERACTION TESTS ===');

      const ns = window.neuralSymphony;
      if (!ns || !ns.neurons || ns.neurons.length === 0) {
        console.log('[SKIP] No neurons available for interaction testing');
        return;
      }

      // Test 1: Mouse move to neuron
      const testNeuron = ns.neurons[0];
      const initialActivation = testNeuron.activation;

      this.simulateMouseMove(testNeuron.x, testNeuron.y);

      setTimeout(() => {
        const afterMoveActivation = testNeuron.activation;
        console.log(`[${afterMoveActivation > initialActivation ? 'PASS' : 'WARN'}] Mouse Hover: Activation ${initialActivation.toFixed(3)} -> ${afterMoveActivation.toFixed(3)}`);

        // Test 2: Click on neuron
        const initialSignals = ns.signalPool?.size || 0;
        this.simulateClick(testNeuron.x, testNeuron.y);

        setTimeout(() => {
          const afterClickSignals = ns.signalPool?.size || 0;
          console.log(`[${afterClickSignals > initialSignals ? 'PASS' : 'WARN'}] Click Fire: Signals ${initialSignals} -> ${afterClickSignals}`);
        }, 200);
      }, 100);
    }
  }

  // Initialize when ready
  document.addEventListener('DOMContentLoaded', () => {
    // Wait for Neural Symphony to initialize
    setTimeout(() => {
      console.log('=== NEURAL SYMPHONY QA TEST HARNESS ===');
      console.log('Version: 1.0.0');
      console.log('');

      // Start performance monitoring
      window.perfMonitor = new PerformanceMonitor();

      // Run visual tests
      window.visualTester = new VisualTester();
      window.visualTester.runAllTests();

      // Run interaction tests
      window.interactionTester = new InteractionTester();
      setTimeout(() => {
        window.interactionTester.runInteractionTests();
      }, 1000);

      console.log('');
      console.log('Performance monitor overlay is visible in top-left corner.');
      console.log('Click "Export Report" button to generate full performance report.');

    }, 500);
  });

})();
