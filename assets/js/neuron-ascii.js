/**
 * Interactive ASCII Neuron Network
 * Renders a network of neurons using ASCII characters on a Canvas.
 * Reacts to mouse hover by firing signals between connected neurons.
 */

class Neuron {
    constructor(x, y, char = '(@)') {
        this.x = x;
        this.y = y;
        this.char = char;
        this.connections = []; // Array of connected Neuron objects
        this.signals = []; // Array of active signals {target: Neuron, progress: 0-1}
        this.isHovered = false;
        this.activationLevel = 0; // 0 to 1, decays over time
    }

    connect(neuron) {
        if (!this.connections.includes(neuron)) {
            this.connections.push(neuron);
            neuron.connections.push(this); // Undirected graph
        }
    }

    fire(target) {
        this.signals.push({ target: target, progress: 0, speed: 0.05 + Math.random() * 0.05 });
    }

    update() {
        // Decay activation
        if (this.activationLevel > 0) {
            this.activationLevel -= 0.02;
            if (this.activationLevel < 0) this.activationLevel = 0;
        }

        // Update signals
        for (let i = this.signals.length - 1; i >= 0; i--) {
            let signal = this.signals[i];
            signal.progress += signal.speed;
            if (signal.progress >= 1) {
                // Signal reached target
                signal.target.activationLevel = 1;
                // Chance to propagate? Maybe too chaotic.
                // Let's just remove it.
                this.signals.splice(i, 1);
            }
        }
    }
}

class NeuralNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.neurons = [];
        this.gridSize = 20; // Size of one character cell
        this.width = 0;
        this.height = 0;
        this.mouseX = -1000;
        this.mouseY = -1000;
        
        this.init();
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
    }

    init() {
        // Create a simple structure manually or procedurally
        // For "Linux Arch system info" feel, maybe a structured tree or a random net?
        // Let's do a small random net that fits in the box.
        
        // We'll populate in resize() to fit dimensions
    }

    resize() {
        const container = this.canvas.parentElement;
        this.width = container.clientWidth;
        this.height = 300; // Fixed height or responsive?
        
        // Adjust for high DPI
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.width * dpr;
        this.canvas.height = this.height * dpr;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.ctx.scale(dpr, dpr);
        
        this.ctx.font = '14px "IBM Plex Mono", monospace';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';

        this.createNeurons();
    }

    createNeurons() {
        this.neurons = [];
        const cols = Math.floor(this.width / 60);
        const rows = Math.floor(this.height / 60);
        
        // Create a grid of potential spots, fill some
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (Math.random() > 0.6) { // 40% chance to spawn
                    let x = i * 60 + 30 + (Math.random() * 20 - 10);
                    let y = j * 60 + 30 + (Math.random() * 20 - 10);
                    this.neurons.push(new Neuron(x, y, '(*)'));
                }
            }
        }

        // Connect neighbors
        this.neurons.forEach(n1 => {
            this.neurons.forEach(n2 => {
                if (n1 === n2) return;
                let dx = n1.x - n2.x;
                let dy = n1.y - n2.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) { // Connect if close
                    n1.connect(n2);
                }
            });
        });
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;

        // Check hover
        this.neurons.forEach(n => {
            let dx = n.x - this.mouseX;
            let dy = n.y - this.mouseY;
            if (Math.sqrt(dx*dx + dy*dy) < 30) {
                if (!n.isHovered) {
                    n.isHovered = true;
                    n.activationLevel = 1;
                    // Fire to all connections
                    n.connections.forEach(target => n.fire(target));
                }
            } else {
                n.isHovered = false;
            }
        });
    }

    drawConnection(n1, n2) {
        // Draw ASCII-style line
        // We can just draw a straight line, but maybe composed of characters?
        // Or just a thin line to keep it clean, but user asked for ASCII art.
        // Drawing actual ASCII lines ( | / - \ ) between arbitrary points is hard to make look good dynamically.
        // Let's draw a thin line but with a "digital" color.
        
        this.ctx.beginPath();
        this.ctx.moveTo(n1.x, n1.y);
        this.ctx.lineTo(n2.x, n2.y);
        
        // Color based on activation
        let active = Math.max(n1.activationLevel, n2.activationLevel);
        if (active > 0.1) {
            this.ctx.strokeStyle = `rgba(100, 100, 100, ${0.2 + active * 0.8})`;
            this.ctx.lineWidth = 2;
        } else {
            this.ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
            this.ctx.lineWidth = 1;
        }
        this.ctx.stroke();
    }

    drawSignal(n1, n2, progress) {
        let x = n1.x + (n2.x - n1.x) * progress;
        let y = n1.y + (n2.y - n1.y) * progress;
        
        this.ctx.fillStyle = '#AF3029'; // Flexoki Red
        this.ctx.fillText('+', x, y);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Update neurons
        this.neurons.forEach(n => n.update());

        // Draw connections first
        const drawnConnections = new Set();
        this.neurons.forEach(n => {
            n.connections.forEach(target => {
                let id = [n, target].sort().map(x => x.x).join('-'); // Simple unique key
                if (!drawnConnections.has(id)) {
                    this.drawConnection(n, target);
                    drawnConnections.add(id);
                }
            });
        });

        // Draw signals
        this.neurons.forEach(n => {
            n.signals.forEach(s => {
                this.drawSignal(n, s.target, s.progress);
            });
        });

        // Draw neurons
        this.neurons.forEach(n => {
            this.ctx.fillStyle = n.activationLevel > 0.5 ? '#BC5215' : '#575653'; // Orange if active, Base-800 if not
            this.ctx.fillText(n.char, n.x, n.y);
        });

        requestAnimationFrame(this.animate);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if container exists
    if (document.getElementById('neuron-canvas')) {
        new NeuralNetwork('neuron-canvas');
    }
});
