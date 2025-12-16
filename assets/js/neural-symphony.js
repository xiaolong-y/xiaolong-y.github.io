/**
 * Neural Connection Symphony
 * An artistic neural visualization inspired by Neuropit #13
 *
 * Features:
 * - Procedural neuron generation with realistic dendritic branching
 * - Bezier curves for organic connections
 * - Particle system for synaptic signals with object pooling
 * - Flow field for ambient organic motion
 * - Bloom/glow effects using canvas compositing
 * - Trail rendering for signal paths
 * - Mouse proximity activation and click cascade
 * - Touch support for mobile
 * - Spatial partitioning for performance
 *
 * @author Claude AI
 * @version 2.0.0
 */

(function() {
  'use strict';

  // ============================================================
  // CONFIGURATION
  // ============================================================
  const CONFIG = {
    // Neuron settings
    neuronCount: { min: 8, max: 15 },
    neuronRadius: { min: 6, max: 12 },

    // Dendrite settings
    dendriteDepth: 4,
    dendriteBranching: 0.35,
    dendriteLength: { min: 30, max: 80 },
    dendriteAngleSpread: Math.PI / 4,

    // Connection settings
    connectionDistance: 180,
    connectionCurvature: 0.3,

    // Particle settings
    particlePoolSize: 200,
    signalSpeed: { min: 0.008, max: 0.015 },
    signalTrailLength: 12,

    // Flow field settings
    flowFieldResolution: 30,
    flowFieldSpeed: 0.0003,
    flowFieldStrength: 0.15,

    // Visual settings
    glowIntensity: 0.6,
    pulseSpeed: 0.002,
    trailFade: 0.85,

    // Interaction settings
    mouseInfluenceRadius: 120,
    clickCascadeDelay: 50,
    touchSensitivity: 1.2,

    // Performance settings
    spatialGridSize: 100,
    throttleInterval: 16,

    // Ambient/Idle settings (from Design Spec)
    spontaneousFireInterval: { min: 4000, max: 6000 }, // ms
    spontaneousFireIntensity: 0.3,
    spontaneousCascadeDepth: 2,
    waveSpeed: 5, // pixels per second
    waveAmplitude: 0.03, // opacity increase
    waveLength: 300, // pixels

    // Particle burst settings (from Design Spec)
    burstParticleCount: { min: 12, max: 20 },
    burstVelocity: { min: 30, max: 80 },
    burstFriction: 0.95,
    burstLifetime: { min: 400, max: 800 },

    // Supernova settings (click effect)
    supernovaMultiplier: 3,
    supernovaCooldown: 2000, // ms

    // Colors (Flexoki palette)
    colors: {
      background: 'rgba(255, 252, 240, 0)',
      neuronCore: '#BC5215',
      neuronGlow: 'rgba(188, 82, 21, 0.4)',
      dendrite: '#575653',
      dendriteActive: '#AF3029',
      connection: 'rgba(87, 86, 83, 0.15)',
      connectionActive: 'rgba(175, 48, 41, 0.6)',
      signal: '#D14D41',
      signalGlow: 'rgba(209, 77, 65, 0.8)',
      trail: 'rgba(209, 77, 65, 0.3)',
      // Dark mode variants
      dark: {
        background: 'rgba(28, 27, 24, 0)',
        neuronCore: '#DA702C',
        neuronGlow: 'rgba(218, 112, 44, 0.5)',
        dendrite: '#878580',
        dendriteActive: '#D14D41',
        connection: 'rgba(135, 133, 128, 0.2)',
        connectionActive: 'rgba(209, 77, 65, 0.7)',
        signal: '#FE8B5D',
        signalGlow: 'rgba(254, 139, 93, 0.9)',
        trail: 'rgba(254, 139, 93, 0.4)'
      }
    }
  };

  // ============================================================
  // UTILITIES
  // ============================================================
  const Utils = {
    random: (min, max) => min + Math.random() * (max - min),
    randomInt: (min, max) => Math.floor(Utils.random(min, max + 1)),
    lerp: (a, b, t) => a + (b - a) * t,
    clamp: (val, min, max) => Math.min(Math.max(val, min), max),
    distance: (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2),
    angle: (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1),

    // Perlin noise implementation (simplified)
    _noiseGrad: [],
    _noisePermutation: [],

    initNoise() {
      for (let i = 0; i < 256; i++) {
        this._noiseGrad[i] = [
          Math.cos(i * Math.PI * 2 / 256),
          Math.sin(i * Math.PI * 2 / 256)
        ];
        this._noisePermutation[i] = i;
      }
      // Shuffle
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._noisePermutation[i], this._noisePermutation[j]] =
        [this._noisePermutation[j], this._noisePermutation[i]];
      }
      this._noisePermutation = [...this._noisePermutation, ...this._noisePermutation];
    },

    noise(x, y) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const xf = x - Math.floor(x);
      const yf = y - Math.floor(y);

      const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
      const dot = (g, x, y) => g[0] * x + g[1] * y;

      const aa = this._noisePermutation[this._noisePermutation[X] + Y];
      const ab = this._noisePermutation[this._noisePermutation[X] + Y + 1];
      const ba = this._noisePermutation[this._noisePermutation[X + 1] + Y];
      const bb = this._noisePermutation[this._noisePermutation[X + 1] + Y + 1];

      const u = fade(xf);
      const v = fade(yf);

      const x1 = this.lerp(
        dot(this._noiseGrad[aa % 256], xf, yf),
        dot(this._noiseGrad[ba % 256], xf - 1, yf),
        u
      );
      const x2 = this.lerp(
        dot(this._noiseGrad[ab % 256], xf, yf - 1),
        dot(this._noiseGrad[bb % 256], xf - 1, yf - 1),
        u
      );

      return this.lerp(x1, x2, v);
    },

    // Bezier curve utilities
    quadraticBezier(t, p0, p1, p2) {
      const mt = 1 - t;
      return {
        x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
        y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
      };
    },

    cubicBezier(t, p0, p1, p2, p3) {
      const mt = 1 - t;
      const mt2 = mt * mt;
      const t2 = t * t;
      return {
        x: mt2 * mt * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t2 * t * p3.x,
        y: mt2 * mt * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t2 * t * p3.y
      };
    },

    // Golden ratio for spiral patterns
    goldenAngle: Math.PI * (3 - Math.sqrt(5)),
    phi: (1 + Math.sqrt(5)) / 2,

    // Custom easing functions (from Design Spec)
    easeOrganicOut(t) {
      return 1 - Math.pow(1 - t, 3) + Math.sin(t * Math.PI) * 0.1;
    },

    easeNeuralPulse(t) {
      return 0.5 + Math.sin(t * Math.PI * 2) * 0.5 * (1 - t);
    },

    easeSynapticBurst(t) {
      return t < 0.2
        ? t * 5  // Fast attack
        : 1 - Math.pow((t - 0.2) / 0.8, 0.5); // Slow decay
    }
  };

  // ============================================================
  // OBJECT POOL
  // ============================================================
  class ObjectPool {
    constructor(factory, initialSize = 100) {
      this.factory = factory;
      this.pool = [];
      this.active = new Set();

      for (let i = 0; i < initialSize; i++) {
        this.pool.push(factory());
      }
    }

    acquire() {
      let obj = this.pool.pop();
      if (!obj) {
        obj = this.factory();
      }
      this.active.add(obj);
      return obj;
    }

    release(obj) {
      if (this.active.delete(obj)) {
        obj.reset?.();
        this.pool.push(obj);
      }
    }

    releaseAll() {
      this.active.forEach(obj => {
        obj.reset?.();
        this.pool.push(obj);
      });
      this.active.clear();
    }

    forEach(callback) {
      this.active.forEach(callback);
    }

    get size() {
      return this.active.size;
    }
  }

  // ============================================================
  // SPATIAL GRID (for efficient proximity queries)
  // ============================================================
  class SpatialGrid {
    constructor(cellSize, width, height) {
      this.cellSize = cellSize;
      this.cols = Math.ceil(width / cellSize);
      this.rows = Math.ceil(height / cellSize);
      this.cells = new Map();
    }

    clear() {
      this.cells.clear();
    }

    _getCellKey(x, y) {
      const col = Math.floor(x / this.cellSize);
      const row = Math.floor(y / this.cellSize);
      return `${col},${row}`;
    }

    insert(entity, x, y) {
      const key = this._getCellKey(x, y);
      if (!this.cells.has(key)) {
        this.cells.set(key, new Set());
      }
      this.cells.get(key).add(entity);
    }

    queryRadius(x, y, radius) {
      const results = [];
      const cellRadius = Math.ceil(radius / this.cellSize);
      const centerCol = Math.floor(x / this.cellSize);
      const centerRow = Math.floor(y / this.cellSize);

      for (let col = centerCol - cellRadius; col <= centerCol + cellRadius; col++) {
        for (let row = centerRow - cellRadius; row <= centerRow + cellRadius; row++) {
          const key = `${col},${row}`;
          if (this.cells.has(key)) {
            this.cells.get(key).forEach(entity => results.push(entity));
          }
        }
      }

      return results;
    }
  }

  // ============================================================
  // DENDRITE
  // ============================================================
  class Dendrite {
    constructor(startX, startY, angle, length, depth, scale = 1, parent = null) {
      this.startX = startX;
      this.startY = startY;
      this.angle = angle;
      this.length = length;
      this.depth = depth;
      this.scale = scale;
      this.parent = parent;

      // Calculate end point with slight curve
      const curve = Utils.random(-0.2, 0.2);
      this.endX = startX + Math.cos(angle + curve) * length;
      this.endY = startY + Math.sin(angle + curve) * length;

      // Control point for bezier curve
      const midLength = length * 0.5;
      const perpAngle = angle + Math.PI / 2;
      const curveAmount = Utils.random(-length * 0.15, length * 0.15);
      this.controlX = startX + Math.cos(angle) * midLength + Math.cos(perpAngle) * curveAmount;
      this.controlY = startY + Math.sin(angle) * midLength + Math.sin(perpAngle) * curveAmount;

      // Visual properties - scale thickness
      this.thickness = Utils.lerp(2.5, 0.5, depth / CONFIG.dendriteDepth) * scale;
      this.activation = 0;
      this.pulsePhase = Utils.random(0, Math.PI * 2);

      // Child dendrites
      this.children = [];
    }

    generateChildren() {
      if (this.depth >= CONFIG.dendriteDepth) return;

      const numChildren = Math.random() < CONFIG.dendriteBranching ? 2 : 1;
      const minLength = 10 * this.scale; // Scale minimum length too

      for (let i = 0; i < numChildren; i++) {
        const angleOffset = Utils.random(-CONFIG.dendriteAngleSpread, CONFIG.dendriteAngleSpread);
        const childAngle = this.angle + angleOffset;
        const childLength = this.length * Utils.random(0.6, 0.8);

        if (childLength > minLength) {
          const child = new Dendrite(
            this.endX,
            this.endY,
            childAngle,
            childLength,
            this.depth + 1,
            this.scale,
            this
          );
          child.generateChildren();
          this.children.push(child);
        }
      }
    }

    getPointAt(t) {
      return Utils.quadraticBezier(
        t,
        { x: this.startX, y: this.startY },
        { x: this.controlX, y: this.controlY },
        { x: this.endX, y: this.endY }
      );
    }

    update(time) {
      // Pulse animation
      const pulse = Math.sin(time * CONFIG.pulseSpeed * 1000 + this.pulsePhase);
      this.currentThickness = this.thickness * (1 + pulse * 0.1);

      // Decay activation
      if (this.activation > 0) {
        this.activation *= 0.95;
        if (this.activation < 0.01) this.activation = 0;
      }

      // Update children
      this.children.forEach(child => child.update(time));
    }

    activate(intensity = 1) {
      this.activation = Math.min(1, this.activation + intensity);
      // Cascade to children with delay effect (visual only)
      this.children.forEach(child => {
        setTimeout(() => child.activate(intensity * 0.8), 30);
      });
    }

    draw(ctx, colors, time) {
      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);
      ctx.quadraticCurveTo(this.controlX, this.controlY, this.endX, this.endY);

      // Base color with activation blend
      const baseColor = this.activation > 0.1 ? colors.dendriteActive : colors.dendrite;
      ctx.strokeStyle = baseColor;
      ctx.lineWidth = this.currentThickness;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Glow effect when activated
      if (this.activation > 0.2) {
        ctx.save();
        ctx.globalAlpha = this.activation * 0.5;
        ctx.strokeStyle = colors.signalGlow;
        ctx.lineWidth = this.currentThickness + 2;
        ctx.filter = `blur(${2 + this.activation * 2}px)`;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.quadraticCurveTo(this.controlX, this.controlY, this.endX, this.endY);
        ctx.stroke();
        ctx.restore();
      }

      // Draw children
      this.children.forEach(child => child.draw(ctx, colors, time));
    }

    getAllEndpoints() {
      const endpoints = [{ x: this.endX, y: this.endY, dendrite: this }];
      this.children.forEach(child => {
        endpoints.push(...child.getAllEndpoints());
      });
      return endpoints;
    }
  }

  // ============================================================
  // NEURON
  // ============================================================
  class Neuron {
    constructor(x, y, id, scale = 1) {
      this.x = x;
      this.y = y;
      this.id = id;
      this.scale = scale;
      this.radius = Utils.random(CONFIG.neuronRadius.min, CONFIG.neuronRadius.max) * scale;

      // Generate dendrites in golden angle pattern
      this.dendrites = [];
      const numDendrites = Math.max(2, Math.round(Utils.randomInt(4, 7) * scale));

      for (let i = 0; i < numDendrites; i++) {
        const angle = i * Utils.goldenAngle + Utils.random(-0.3, 0.3);
        const baseLength = Utils.random(CONFIG.dendriteLength.min, CONFIG.dendriteLength.max);
        const length = baseLength * scale;

        const dendrite = new Dendrite(x, y, angle, length, 0, scale);
        dendrite.generateChildren();
        this.dendrites.push(dendrite);
      }

      // State
      this.activation = 0;
      this.pulsePhase = Utils.random(0, Math.PI * 2);
      this.breathPhase = Utils.random(0, Math.PI * 2);
      this.connections = [];
      this.lastFireTime = 0;

      // Depth (for parallax effect)
      this.depth = Utils.random(0.8, 1.2);

      // Wave boost (from Design Spec - wave pattern effect)
      this.waveBoost = 0;

      // Depolarization flash properties (biological accuracy improvement)
      this.flashAlpha = 0;
      this.flashPhase = 0;
      this.flashStartTime = 0;

      // Refractory state (biological accuracy improvement)
      this.refractoryUntil = 0;
    }

    update(time) {
      // Breathing animation
      const breathe = Math.sin(time * 0.001 + this.breathPhase);
      this.currentRadius = this.radius * (1 + breathe * 0.05);

      // Pulse animation with wave boost
      const pulse = Math.sin(time * CONFIG.pulseSpeed * 2000 + this.pulsePhase);
      this.glowIntensity = 0.3 + pulse * 0.1 + this.waveBoost;

      // Decay activation
      if (this.activation > 0) {
        this.activation *= 0.97;
        if (this.activation < 0.01) this.activation = 0;
      }

      // Update depolarization flash (80ms duration)
      if (this.flashAlpha > 0) {
        const flashDuration = 80; // ms
        const elapsed = time - this.flashStartTime;
        this.flashPhase = Math.min(1, elapsed / flashDuration);
        // Sharp spike decay - fast attack, quick decay
        this.flashAlpha = Math.max(0, 1 - this.flashPhase);
      }

      // Update dendrites
      this.dendrites.forEach(d => d.update(time));
    }

    activate(intensity = 1, time = 0) {
      this.activation = Math.min(1, this.activation + intensity);
      this.lastFireTime = time;

      // Trigger depolarization flash (biological accuracy - sharp voltage spike)
      this.flashAlpha = intensity;
      this.flashPhase = 0;
      this.flashStartTime = time;

      // Set refractory period (150ms - neuron appears 'spent')
      this.refractoryUntil = time + 150;

      // Activate dendrites
      this.dendrites.forEach(d => d.activate(intensity));
    }

    draw(ctx, colors, time) {
      // Draw dendrites first (behind soma)
      this.dendrites.forEach(d => d.draw(ctx, colors, time));

      // Check if in refractory state (biological accuracy - 'spent' appearance)
      const isRefractory = time < this.refractoryUntil;
      const refractoryProgress = isRefractory
        ? 1 - (this.refractoryUntil - time) / 150
        : 1;

      // Draw soma glow
      const glowRadius = this.currentRadius * (2 + this.activation);
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, glowRadius
      );

      // Dim the glow when refractory
      const refractoryDim = isRefractory ? 0.6 : 1;
      const glowAlpha = (this.glowIntensity + this.activation * 0.5) * CONFIG.glowIntensity * refractoryDim;
      gradient.addColorStop(0, colors.neuronGlow.replace(/[\d.]+\)$/, `${glowAlpha})`));
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw soma core
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = colors.neuronCore;
      // Apply refractory dimming
      if (isRefractory) {
        ctx.globalAlpha = 0.6 + refractoryProgress * 0.4;
      }
      ctx.fill();

      // Refractory blue tinge overlay (biological accuracy - sodium channel recovery)
      if (isRefractory) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 150, 200, ${0.3 * (1 - refractoryProgress)})`;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Inner highlight
      const highlightGradient = ctx.createRadialGradient(
        this.x - this.currentRadius * 0.3,
        this.y - this.currentRadius * 0.3,
        0,
        this.x, this.y, this.currentRadius
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Draw depolarization flash (biological accuracy - action potential spike)
      if (this.flashAlpha > 0) {
        // White-hot expanding flash that fades rapidly
        const flashRadius = this.currentRadius * (1 + this.flashPhase * 2.5);
        const flashOpacity = this.flashAlpha * (1 - this.flashPhase);

        // Outer glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, flashRadius * 1.5, 0, Math.PI * 2);
        const flashGradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, flashRadius * 1.5
        );
        flashGradient.addColorStop(0, `rgba(255, 252, 240, ${flashOpacity * 0.8})`);
        flashGradient.addColorStop(0.5, `rgba(255, 252, 240, ${flashOpacity * 0.4})`);
        flashGradient.addColorStop(1, 'rgba(255, 252, 240, 0)');
        ctx.fillStyle = flashGradient;
        ctx.fill();

        // Inner white-hot core
        ctx.beginPath();
        ctx.arc(this.x, this.y, flashRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 252, 240, ${flashOpacity})`;
        ctx.fill();
        ctx.restore();
      }
    }

    getAllDendriteEndpoints() {
      const endpoints = [];
      this.dendrites.forEach(d => {
        endpoints.push(...d.getAllEndpoints());
      });
      return endpoints;
    }

    containsPoint(x, y) {
      return Utils.distance(this.x, this.y, x, y) < this.radius * 2;
    }
  }

  // ============================================================
  // SIGNAL (Particle)
  // ============================================================
  class Signal {
    constructor() {
      this.reset();
    }

    reset() {
      this.active = false;
      this.progress = 0;
      this.speed = 0;
      this.source = null;
      this.target = null;
      this.path = null;
      this.trail = [];
      this.size = 3;
      this.intensity = 1;
      this.parent = null;
      this.hasArrived = false;
      this.arrivalTime = 0;
    }

    init(source, target, connection, parent = null) {
      this.active = true;
      this.progress = 0;
      this.speed = Utils.random(CONFIG.signalSpeed.min, CONFIG.signalSpeed.max);
      this.source = source;
      this.target = target;
      this.path = connection;
      this.trail = [];
      this.size = Utils.random(2, 4);
      this.intensity = 1;
      this.parent = parent;
      this.hasArrived = false;
      this.arrivalTime = 0;
      return this;
    }

    update(deltaTime, currentTime) {
      if (!this.active) return false;

      // Handle calcium bloom delay before target activation
      if (this.hasArrived) {
        const timeSinceArrival = currentTime - this.arrivalTime;
        // 30ms synaptic delay before target activation
        if (timeSinceArrival >= 30) {
          this.target.activate(0.8, currentTime);
          this.active = false;
          return false;
        }
        return true;
      }

      this.progress += this.speed * deltaTime;

      // Get current position on bezier path
      const pos = this.path.getPointAt(Math.min(this.progress, 1));

      // Add to trail
      this.trail.unshift({ x: pos.x, y: pos.y, alpha: 1 });

      // Fade and trim trail
      while (this.trail.length > CONFIG.signalTrailLength) {
        this.trail.pop();
      }
      this.trail.forEach((point, i) => {
        point.alpha = 1 - (i / CONFIG.signalTrailLength);
      });

      // Check if reached target - spawn calcium bloom (biological accuracy)
      if (this.progress >= 1) {
        this.hasArrived = true;
        this.arrivalTime = currentTime;

        // Spawn calcium bloom at arrival point (synaptic calcium cascade)
        if (this.parent) {
          this.parent.spawnCalciumBloom(this.target.x, this.target.y);
        }
        return true;
      }

      return true;
    }

    draw(ctx, colors) {
      if (!this.active || this.trail.length === 0) return;

      // Draw trail
      if (this.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(this.trail[0].x, this.trail[0].y);

        for (let i = 1; i < this.trail.length; i++) {
          ctx.lineTo(this.trail[i].x, this.trail[i].y);
        }

        const gradient = ctx.createLinearGradient(
          this.trail[0].x, this.trail[0].y,
          this.trail[this.trail.length - 1].x, this.trail[this.trail.length - 1].y
        );
        gradient.addColorStop(0, colors.signal);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size * 0.7;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Draw signal head with glow
      const head = this.trail[0];

      // Glow
      ctx.save();
      ctx.beginPath();
      ctx.arc(head.x, head.y, this.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = colors.signalGlow;
      ctx.filter = 'blur(4px)';
      ctx.fill();
      ctx.restore();

      // Core
      ctx.beginPath();
      ctx.arc(head.x, head.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = colors.signal;
      ctx.fill();

      // Bright center
      ctx.beginPath();
      ctx.arc(head.x, head.y, this.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
    }
  }

  // ============================================================
  // CONNECTION
  // ============================================================
  class Connection {
    constructor(sourceNeuron, targetNeuron, scale = 1) {
      this.source = sourceNeuron;
      this.target = targetNeuron;
      this.scale = scale;

      // Calculate bezier control points
      const midX = (sourceNeuron.x + targetNeuron.x) / 2;
      const midY = (sourceNeuron.y + targetNeuron.y) / 2;

      // Perpendicular offset for curve
      const dx = targetNeuron.x - sourceNeuron.x;
      const dy = targetNeuron.y - sourceNeuron.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const perpX = -dy / dist;
      const perpY = dx / dist;

      const curveOffset = dist * CONFIG.connectionCurvature * (Math.random() > 0.5 ? 1 : -1);

      this.controlX = midX + perpX * curveOffset;
      this.controlY = midY + perpY * curveOffset;

      // State
      this.activation = 0;
      this.pulsePhase = Utils.random(0, Math.PI * 2);
    }

    getPointAt(t) {
      return Utils.quadraticBezier(
        t,
        { x: this.source.x, y: this.source.y },
        { x: this.controlX, y: this.controlY },
        { x: this.target.x, y: this.target.y }
      );
    }

    update(time) {
      // Subtle pulse
      const pulse = Math.sin(time * 0.0005 + this.pulsePhase);
      this.currentAlpha = 0.15 + pulse * 0.05;

      // Decay activation
      if (this.activation > 0) {
        this.activation *= 0.96;
        if (this.activation < 0.01) this.activation = 0;
      }
    }

    activate() {
      this.activation = 1;
    }

    draw(ctx, colors) {
      ctx.beginPath();
      ctx.moveTo(this.source.x, this.source.y);
      ctx.quadraticCurveTo(this.controlX, this.controlY, this.target.x, this.target.y);

      // Blend between base and active color
      const alpha = this.currentAlpha + this.activation * 0.5;
      const baseColor = this.activation > 0.1 ? colors.connectionActive : colors.connection;

      ctx.strokeStyle = baseColor;
      ctx.lineWidth = 1 + this.activation;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Glow when active
      if (this.activation > 0.2) {
        ctx.save();
        ctx.globalAlpha = this.activation * 0.3;
        ctx.strokeStyle = colors.signalGlow;
        ctx.lineWidth = 3;
        ctx.filter = 'blur(3px)';
        ctx.beginPath();
        ctx.moveTo(this.source.x, this.source.y);
        ctx.quadraticCurveTo(this.controlX, this.controlY, this.target.x, this.target.y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }

  // ============================================================
  // FLOW FIELD
  // ============================================================
  class FlowField {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.resolution = CONFIG.flowFieldResolution;
      this.cols = Math.ceil(width / this.resolution);
      this.rows = Math.ceil(height / this.resolution);
      this.field = [];
      this.time = 0;

      this.init();
    }

    init() {
      this.field = new Array(this.cols * this.rows);
      this.update(0);
    }

    update(time) {
      this.time = time * CONFIG.flowFieldSpeed;

      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          const noiseVal = Utils.noise(x * 0.1 + this.time, y * 0.1 + this.time);
          const angle = noiseVal * Math.PI * 4;
          this.field[y * this.cols + x] = angle;
        }
      }
    }

    getForce(x, y) {
      const col = Math.floor(Utils.clamp(x / this.resolution, 0, this.cols - 1));
      const row = Math.floor(Utils.clamp(y / this.resolution, 0, this.rows - 1));
      const angle = this.field[row * this.cols + col] || 0;

      return {
        x: Math.cos(angle) * CONFIG.flowFieldStrength,
        y: Math.sin(angle) * CONFIG.flowFieldStrength
      };
    }

    // Debug visualization
    draw(ctx) {
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
      ctx.lineWidth = 1;

      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
          const angle = this.field[y * this.cols + x];
          const px = x * this.resolution + this.resolution / 2;
          const py = y * this.resolution + this.resolution / 2;
          const len = this.resolution * 0.4;

          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px + Math.cos(angle) * len, py + Math.sin(angle) * len);
          ctx.stroke();
        }
      }
    }
  }

  // ============================================================
  // AMBIENT PARTICLES
  // ============================================================
  class AmbientParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.size = 1;
      this.alpha = 0;
      this.life = 0;
      this.maxLife = 0;
    }

    init(x, y) {
      this.x = x;
      this.y = y;
      this.vx = Utils.random(-0.2, 0.2);
      this.vy = Utils.random(-0.2, 0.2);
      this.size = Utils.random(1, 2.5);
      this.alpha = Utils.random(0.1, 0.3);
      this.life = 0;
      this.maxLife = Utils.random(2000, 5000);
      return this;
    }

    update(deltaTime, flowField) {
      this.life += deltaTime;

      if (this.life >= this.maxLife) {
        return false;
      }

      // Flow field influence
      const force = flowField.getForce(this.x, this.y);
      this.vx += force.x;
      this.vy += force.y;

      // Apply velocity with damping
      this.x += this.vx * deltaTime * 0.01;
      this.y += this.vy * deltaTime * 0.01;
      this.vx *= 0.99;
      this.vy *= 0.99;

      // Fade based on life
      const lifeRatio = this.life / this.maxLife;
      this.currentAlpha = this.alpha * Math.sin(lifeRatio * Math.PI);

      return true;
    }

    draw(ctx, colors) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = colors.dendrite.replace(')', `, ${this.currentAlpha})`).replace('rgb', 'rgba');
      ctx.fill();
    }
  }

  // ============================================================
  // BURST PARTICLE (Neuron Activation Effect - from Design Spec)
  // ============================================================
  class BurstParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.size = 2;
      this.life = 0;
      this.maxLife = 0;
      this.colorPhase = 0;
      this.isCalciumBloom = false;
    }

    init(x, y, angle) {
      this.x = x;
      this.y = y;
      const speed = Utils.random(CONFIG.burstVelocity.min, CONFIG.burstVelocity.max);
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.size = Utils.random(2, 6);
      this.life = 0;
      this.maxLife = Utils.random(CONFIG.burstLifetime.min, CONFIG.burstLifetime.max);
      this.colorPhase = 0;
      return this;
    }

    update(deltaTime) {
      this.life += deltaTime;

      if (this.life >= this.maxLife) {
        return false;
      }

      // Apply friction
      this.vx *= CONFIG.burstFriction;
      this.vy *= CONFIG.burstFriction;

      // Update position
      this.x += this.vx * deltaTime * 0.001;
      this.y += this.vy * deltaTime * 0.001;

      // Update color phase for color sequence animation
      this.colorPhase = this.life / this.maxLife;

      return true;
    }

    draw(ctx, colors, isDark) {
      const lifeRatio = this.life / this.maxLife;
      const alpha = Utils.easeSynapticBurst(1 - lifeRatio);

      let color;

      // Calcium bloom particles: always cyan (biological accuracy - Ca2+ influx)
      if (this.isCalciumBloom) {
        color = isDark ? '#3AA99F' : '#24837B'; // Cyan for calcium

        // Draw glow
        if (alpha > 0.2) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = alpha * 0.4;
          ctx.filter = 'blur(3px)';
          ctx.fill();
          ctx.restore();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (1 - lifeRatio * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        return;
      }

      // Regular burst: Color sequence: White -> Magenta -> Purple -> Cyan -> Fade
      // From Design Spec color sequence
      if (this.colorPhase < 0.1) {
        color = '#FFFCF0'; // White
      } else if (this.colorPhase < 0.25) {
        color = isDark ? '#CE5D97' : '#A02F6F'; // Magenta
      } else if (this.colorPhase < 0.5) {
        color = isDark ? '#8B7EC8' : '#5E409D'; // Purple
      } else if (this.colorPhase < 0.75) {
        color = isDark ? '#3AA99F' : '#24837B'; // Cyan
      } else {
        color = colors.signal; // Signal color, fading
      }

      // Draw glow
      if (alpha > 0.3) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.3;
        ctx.filter = 'blur(4px)';
        ctx.fill();
        ctx.restore();
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // ============================================================
  // NEURAL SYMPHONY (Main Controller)
  // ============================================================
  class NeuralSymphony {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) {
        console.error('Neural Symphony: Canvas not found');
        return;
      }

      this.ctx = this.canvas.getContext('2d');
      this.width = 0;
      this.height = 0;
      this.dpr = window.devicePixelRatio || 1;

      // Initialize utilities
      Utils.initNoise();

      // Core entities
      this.neurons = [];
      this.connections = [];
      this.flowField = null;
      this.spatialGrid = null;

      // Object pools
      this.signalPool = new ObjectPool(() => new Signal(), CONFIG.particlePoolSize);
      this.ambientPool = new ObjectPool(() => new AmbientParticle(), 100);
      this.burstPool = new ObjectPool(() => new BurstParticle(), 100);

      // State
      this.time = 0;
      this.lastTime = 0;
      this.mouseX = -1000;
      this.mouseY = -1000;
      this.isMouseDown = false;
      this.lastMouseNeuron = null;
      this.isDarkMode = this.detectDarkMode();

      // Spontaneous firing state (from Design Spec)
      this.lastSpontaneousFire = 0;
      this.nextSpontaneousInterval = Utils.random(
        CONFIG.spontaneousFireInterval.min,
        CONFIG.spontaneousFireInterval.max
      );
      this.recentlyFiredNeurons = new Set();

      // Supernova state
      this.lastSupernovaTime = 0;

      // Wave pattern state
      this.wavePosition = 0;

      // Accessibility: prefers-reduced-motion
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Throttled handlers
      this.throttledMouseMove = this.throttle(this.handleMouseMove.bind(this), CONFIG.throttleInterval);

      // Initialize
      this.init();
    }

    detectDarkMode() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    getColors() {
      return this.isDarkMode ? CONFIG.colors.dark : CONFIG.colors;
    }

    init() {
      this.resize();
      this.createNeurons();
      this.createConnections();

      // Event listeners
      window.addEventListener('resize', this.debounce(this.resize.bind(this), 200));

      // Mouse events
      this.canvas.addEventListener('mousemove', this.throttledMouseMove);
      this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
      this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
      this.canvas.addEventListener('mouseleave', this.handleMouseLeave.bind(this));

      // Touch events
      this.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
      this.canvas.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
      this.canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });

      // Dark mode observer
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.isDarkMode = e.matches;
      });

      // Reduced motion observer (accessibility)
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        this.prefersReducedMotion = e.matches;
      });

      // Start animation
      this.lastTime = performance.now();
      requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
      const container = this.canvas.parentElement;
      this.width = container.clientWidth;
      // Keep aspect ratio roughly square for small sizes, wider for large
      const aspectRatio = this.width < 200 ? 1.0 : (this.width < 300 ? 0.9 : 0.85);
      this.height = Math.min(400, Math.max(this.width * aspectRatio, 120));

      // Calculate scale factor (reference: 350x350 = full scale)
      const refArea = 350 * 350;
      const currentArea = this.width * this.height;
      this.scaleFactor = Math.sqrt(currentArea / refArea);
      this.scaleFactor = Math.max(0.3, Math.min(1.0, this.scaleFactor)); // Clamp 0.3-1.0

      // Set canvas size with DPR
      this.canvas.width = this.width * this.dpr;
      this.canvas.height = this.height * this.dpr;
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;
      // Use setTransform to avoid scale accumulation on resize
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      // Recreate flow field and spatial grid
      this.flowField = new FlowField(this.width, this.height);
      this.spatialGrid = new SpatialGrid(CONFIG.spatialGridSize * this.scaleFactor, this.width, this.height);

      // Regenerate neurons if size changed significantly
      if (this.neurons.length > 0) {
        this.createNeurons();
        this.createConnections();
      }
    }

    createNeurons() {
      this.neurons = [];

      // Scale neuron count and spacing based on canvas size
      const scale = this.scaleFactor || 1;
      const baseCount = Utils.randomInt(CONFIG.neuronCount.min, CONFIG.neuronCount.max);
      const count = Math.max(3, Math.round(baseCount * scale));
      const padding = Math.max(15, 80 * scale);
      const minDistance = Math.max(30, 100 * scale);

      // Use Poisson disk-like distribution
      for (let i = 0; i < count; i++) {
        let attempts = 0;
        let placed = false;

        while (!placed && attempts < 50) {
          const x = Utils.random(padding, this.width - padding);
          const y = Utils.random(padding, this.height - padding);

          // Check distance from existing neurons
          let tooClose = false;
          for (const neuron of this.neurons) {
            if (Utils.distance(x, y, neuron.x, neuron.y) < minDistance) {
              tooClose = true;
              break;
            }
          }

          if (!tooClose) {
            this.neurons.push(new Neuron(x, y, i, scale));
            placed = true;
          }

          attempts++;
        }
      }

      // Update spatial grid
      this.updateSpatialGrid();
    }

    createConnections() {
      this.connections = [];

      // Scale connection distance
      const scale = this.scaleFactor || 1;
      const maxDist = CONFIG.connectionDistance * scale;

      // Connect neurons within range
      for (let i = 0; i < this.neurons.length; i++) {
        for (let j = i + 1; j < this.neurons.length; j++) {
          const n1 = this.neurons[i];
          const n2 = this.neurons[j];
          const dist = Utils.distance(n1.x, n1.y, n2.x, n2.y);

          if (dist < maxDist) {
            const connection = new Connection(n1, n2, scale);
            this.connections.push(connection);
            n1.connections.push({ connection, target: n2 });
            n2.connections.push({ connection, target: n1 });
          }
        }
      }
    }

    updateSpatialGrid() {
      this.spatialGrid.clear();
      this.neurons.forEach(neuron => {
        this.spatialGrid.insert(neuron, neuron.x, neuron.y);
      });
    }

    fireSignal(source, target, connection) {
      const signal = this.signalPool.acquire();
      signal.init(source, target, connection, this);
      connection.activate();
    }

    cascadeFire(neuron, visited = new Set(), isSupernova = false) {
      if (visited.has(neuron.id)) return;
      visited.add(neuron.id);

      const intensity = isSupernova ? 1 : CONFIG.spontaneousFireIntensity;
      neuron.activate(intensity, this.time);

      // Spawn burst particles on activation (with directional dendrite burst)
      const burstCount = isSupernova
        ? CONFIG.burstParticleCount.max * CONFIG.supernovaMultiplier
        : Utils.randomInt(CONFIG.burstParticleCount.min, CONFIG.burstParticleCount.max);

      this.spawnBurst(neuron.x, neuron.y, burstCount, neuron);

      // Mark as recently fired
      this.recentlyFiredNeurons.add(neuron.id);
      setTimeout(() => this.recentlyFiredNeurons.delete(neuron.id), 10000);

      // Fire to connected neurons
      const maxDepth = isSupernova ? Infinity : CONFIG.spontaneousCascadeDepth;
      neuron.connections.forEach((conn, index) => {
        if (!visited.has(conn.target.id) && visited.size <= maxDepth) {
          setTimeout(() => {
            this.fireSignal(neuron, conn.target, conn.connection);
          }, index * CONFIG.clickCascadeDelay);
        }
      });
    }

    // Spawn particle burst at position (from Design Spec)
    // Enhanced with directional dendrite burst (biological accuracy - back-propagating action potentials)
    spawnBurst(x, y, count, neuron = null) {
      // Get dendrite angles if neuron is provided
      const dendriteAngles = neuron ? neuron.dendrites.map(d => d.angle) : [];

      for (let i = 0; i < count; i++) {
        const particle = this.burstPool.acquire();
        let angle;

        // 70% of particles follow dendrite directions (back-propagating action potentials)
        // 30% radial for ambient effect
        if (Math.random() < 0.7 && dendriteAngles.length > 0) {
          // Pick a dendrite direction with some spread
          const baseAngle = dendriteAngles[Math.floor(Math.random() * dendriteAngles.length)];
          angle = baseAngle + Utils.random(-0.4, 0.4);
        } else {
          // Radial distribution for ambient particles
          angle = (i / count) * Math.PI * 2 + Utils.random(-0.2, 0.2);
        }

        particle.init(x, y, angle);
      }
    }

    // Spawn calcium bloom at signal arrival point (biological accuracy - synaptic calcium cascade)
    spawnCalciumBloom(x, y) {
      // Spawn 3-5 tiny cyan particles that rapidly expand and fade
      const count = Utils.randomInt(3, 5);

      for (let i = 0; i < count; i++) {
        const particle = this.burstPool.acquire();
        const angle = (i / count) * Math.PI * 2 + Utils.random(-0.3, 0.3);

        // Initialize with calcium bloom properties (smaller, cyan-tinted)
        particle.x = x;
        particle.y = y;
        const speed = Utils.random(20, 40); // Slower than regular burst
        particle.vx = Math.cos(angle) * speed;
        particle.vy = Math.sin(angle) * speed;
        particle.size = Utils.random(1.5, 3); // Smaller particles
        particle.life = 0;
        particle.maxLife = Utils.random(100, 150); // Shorter duration
        particle.colorPhase = 0;
        particle.isCalciumBloom = true; // Flag for special rendering
      }
    }

    // Spontaneous firing during idle (from Design Spec)
    updateSpontaneousFiring(currentTime) {
      const timeSinceLastFire = currentTime - this.lastSpontaneousFire;

      if (timeSinceLastFire >= this.nextSpontaneousInterval) {
        // Find neurons that haven't fired recently
        const eligibleNeurons = this.neurons.filter(
          n => !this.recentlyFiredNeurons.has(n.id)
        );

        if (eligibleNeurons.length > 0) {
          // Pick a random eligible neuron
          const neuron = eligibleNeurons[Utils.randomInt(0, eligibleNeurons.length - 1)];

          // Fire with reduced intensity
          this.cascadeFire(neuron, new Set(), false);
        }

        // Schedule next spontaneous fire
        this.lastSpontaneousFire = currentTime;
        this.nextSpontaneousInterval = Utils.random(
          CONFIG.spontaneousFireInterval.min,
          CONFIG.spontaneousFireInterval.max
        );
      }
    }

    // Wave pattern effect (from Design Spec)
    updateWave(deltaTime) {
      this.wavePosition += CONFIG.waveSpeed * deltaTime * 0.001;
      if (this.wavePosition > this.width + CONFIG.waveLength) {
        this.wavePosition = -CONFIG.waveLength;
      }

      // Apply wave brightness boost to neurons in the wave
      this.neurons.forEach(neuron => {
        const distToWave = Math.abs(neuron.x - this.wavePosition);
        if (distToWave < CONFIG.waveLength / 2) {
          const waveIntensity = 1 - (distToWave / (CONFIG.waveLength / 2));
          neuron.waveBoost = waveIntensity * CONFIG.waveAmplitude;
        } else {
          neuron.waveBoost = 0;
        }
      });
    }

    spawnAmbientParticle() {
      if (this.ambientPool.size < 50 && Math.random() < 0.02) {
        const particle = this.ambientPool.acquire();
        particle.init(
          Utils.random(0, this.width),
          Utils.random(0, this.height)
        );
      }
    }

    // Event Handlers
    handleMouseMove(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      // Scale interaction radius
      const scale = this.scaleFactor || 1;
      const influenceRadius = CONFIG.mouseInfluenceRadius * scale;
      const closeProximity = 40 * scale;

      // Check proximity to neurons
      const nearbyNeurons = this.spatialGrid.queryRadius(
        this.mouseX, this.mouseY, influenceRadius
      );

      nearbyNeurons.forEach(neuron => {
        const dist = Utils.distance(this.mouseX, this.mouseY, neuron.x, neuron.y);
        if (dist < influenceRadius) {
          const intensity = 1 - (dist / influenceRadius);
          neuron.activate(intensity * 0.3, this.time);

          // Fire signals on close proximity (but not the same neuron twice in a row)
          if (dist < closeProximity && neuron !== this.lastMouseNeuron && neuron.connections.length > 0) {
            const randomConn = neuron.connections[Utils.randomInt(0, neuron.connections.length - 1)];
            this.fireSignal(neuron, randomConn.target, randomConn.connection);
            this.lastMouseNeuron = neuron;
          }
        }
      });
    }

    handleMouseDown(e) {
      this.isMouseDown = true;
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if supernova is available
      const canSupernova = this.time - this.lastSupernovaTime >= CONFIG.supernovaCooldown;

      // Find clicked neuron
      for (const neuron of this.neurons) {
        if (neuron.containsPoint(x, y)) {
          if (canSupernova) {
            this.lastSupernovaTime = this.time;
            this.cascadeFire(neuron, new Set(), true); // Supernova mode
          } else {
            this.cascadeFire(neuron, new Set(), false);
          }
          break;
        }
      }
    }

    handleMouseUp() {
      this.isMouseDown = false;
    }

    handleMouseLeave() {
      this.mouseX = -1000;
      this.mouseY = -1000;
      this.isMouseDown = false;
      this.lastMouseNeuron = null;
    }

    handleTouchStart(e) {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Check if supernova is available
        const canSupernova = this.time - this.lastSupernovaTime >= CONFIG.supernovaCooldown;

        for (const neuron of this.neurons) {
          if (Utils.distance(x, y, neuron.x, neuron.y) < neuron.radius * CONFIG.touchSensitivity * 3) {
            if (canSupernova) {
              this.lastSupernovaTime = this.time;
              this.cascadeFire(neuron, new Set(), true); // Supernova mode
            } else {
              this.cascadeFire(neuron, new Set(), false);
            }
            break;
          }
        }
      }
    }

    handleTouchMove(e) {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = touch.clientX - rect.left;
        this.mouseY = touch.clientY - rect.top;

        // Trigger proximity effects
        this.handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
      }
    }

    handleTouchEnd() {
      this.mouseX = -1000;
      this.mouseY = -1000;
    }

    // Utility methods
    throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }

    debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    // Main animation loop
    animate(currentTime) {
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;
      this.time = currentTime;

      const colors = this.getColors();

      // Clear canvas
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Accessibility: If user prefers reduced motion, draw static state only
      if (this.prefersReducedMotion) {
        // Draw static connections
        this.connections.forEach(conn => conn.draw(this.ctx, colors));

        // Draw static neurons (no animation updates)
        this.neurons.forEach(neuron => {
          neuron.draw(this.ctx, colors, currentTime);
        });

        // Still request next frame for potential preference change
        requestAnimationFrame(this.animate.bind(this));
        return;
      }

      // Update flow field
      this.flowField.update(currentTime);

      // Update spontaneous firing (idle activity from Design Spec)
      this.updateSpontaneousFiring(currentTime);

      // Update wave pattern (from Design Spec)
      this.updateWave(deltaTime);

      // Spawn ambient particles
      this.spawnAmbientParticle();

      // Update and draw ambient particles
      const deadAmbient = [];
      this.ambientPool.forEach(particle => {
        if (!particle.update(deltaTime, this.flowField)) {
          deadAmbient.push(particle);
        }
      });
      deadAmbient.forEach(p => this.ambientPool.release(p));

      this.ambientPool.forEach(particle => particle.draw(this.ctx, colors));

      // Update connections
      this.connections.forEach(conn => {
        conn.update(currentTime);
      });

      // Draw connections (behind neurons)
      this.connections.forEach(conn => conn.draw(this.ctx, colors));

      // Update and draw neurons
      this.neurons.forEach(neuron => {
        neuron.update(currentTime);
        neuron.draw(this.ctx, colors, currentTime);
      });

      // Update and draw signals (pass currentTime for calcium bloom timing)
      const deadSignals = [];
      this.signalPool.forEach(signal => {
        if (!signal.update(deltaTime, currentTime)) {
          deadSignals.push(signal);
        }
      });
      deadSignals.forEach(s => this.signalPool.release(s));

      this.signalPool.forEach(signal => signal.draw(this.ctx, colors));

      // Update and draw burst particles (from Design Spec)
      const deadBurst = [];
      this.burstPool.forEach(particle => {
        if (!particle.update(deltaTime)) {
          deadBurst.push(particle);
        }
      });
      deadBurst.forEach(p => this.burstPool.release(p));

      this.burstPool.forEach(particle => particle.draw(this.ctx, colors, this.isDarkMode));

      // Continue animation
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  // ============================================================
  // INITIALIZATION
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('neuron-canvas')) {
      window.neuralSymphony = new NeuralSymphony('neuron-canvas');
    }
  });

  // Export for external use
  if (typeof window !== 'undefined') {
    window.NeuralSymphony = NeuralSymphony;
  }
})();
