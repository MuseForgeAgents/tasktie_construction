// Performance optimizations
const useRAF = (callback) => {
let ticking = false;
return (…args) => {
if (!ticking) {
requestAnimationFrame(() => {
callback(…args);
ticking = false;
});
ticking = true;
}
};
};

// Typing animation for hero section
class TypeWriter {
constructor(element, texts, speed = 100) {
this.element = element;
this.texts = texts;
this.speed = speed;
this.textIndex = 0;
this.charIndex = 0;
this.isDeleting = false;
this.start();
}

```
start() {
    this.type();
}

type() {
    const currentText = this.texts[this.textIndex];
    
    if (this.isDeleting) {
        this.element.textContent = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
    } else {
        this.element.textContent = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? this.speed / 2 : this.speed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        typeSpeed = 500; // Pause before starting new text
    }

    setTimeout(() => this.type(), typeSpeed);
}
```

}

// Demo content for each showcase type
const demoContent = {
money: {
title: “💰 Side Hustle Generator”,
subtitle: “Turn your hobby into income”,
demo: {
input: “I love gardening and have a small backyard”,
steps: [
“🔍 Analyzing your gardening skills and market demand…”,
“💡 Generating business ideas…”,
“📝 Creating product listings…”,
“📸 Designing marketing materials…”,
“💰 Building monetization strategy…”
],
output: {
title: “Complete Etsy Business Package”,
items: [
“🌱 15 Digital Garden Planning Templates ($5-15 each)”,
“📚 ‘Beginner’s Garden Guide’ eBook ($19.99)”,
“🎥 Video course: ‘Garden to Table in 90 Days’ ($49)”,
“📱 Social media content calendar (30 posts)”,
“🏷️ Product descriptions & SEO keywords”,
“💵 Pricing strategy: $200-500/month potential”
]
}
}
},
wow: {
title: “✨ Family Movie Magic”,
subtitle: “Turn photos into cinematic videos”,
demo: {
input: “10 family vacation photos from our beach trip”,
steps: [
“🎬 Analyzing photo composition and story flow…”,
“🎵 Selecting perfect background music…”,
“✨ Adding cinematic transitions and effects…”,
“🎨 Color grading for professional look…”,
“🎞️ Rendering final video…”
],
output: {
title: “Professional Family Movie”,
items: [
“🎥 3-minute cinematic video with smooth transitions”,
“🎵 Licensed background music perfectly synced”,
“📱 Optimized for Instagram, Facebook, and YouTube”,
“✨ Professional color grading and effects”,
“💾 HD download ready for printing or sharing”,
“🎬 Behind-the-scenes: How it was made”
]
}
}
},
useful: {
title: “🎯 Party Planner Pro”,
subtitle: “Complete party in one click”,
demo: {
input: “10-year-old dinosaur birthday party for 12 kids”,
steps: [
“🎈 Planning age-appropriate activities…”,
“🎨 Designing custom invitations…”,
“🍰 Creating menu and shopping lists…”,
“🎁 Sourcing decorations and supplies…”,
“📋 Building timeline and checklist…”
],
output: {
title: “Complete Party Package”,
items: [
“🦕 Custom dinosaur invitations (printable & digital)”,
“🎮 5 dinosaur-themed games with instructions”,
“🍕 Kid-friendly menu + shopping list ($87 budget)”,
“🎨 DIY decoration guide with supply links”,
“⏰ Hour-by-hour party timeline”,
“🎁 Dinosaur party favor ideas under $3 each”
]
}
}
},
cool: {
title: “🧠 Personal Brand Builder”,
subtitle: “Consistent presence everywhere”,
demo: {
input: “I’m a fitness coach specializing in busy professionals”,
steps: [
“🎯 Defining your unique brand positioning…”,
“🎨 Creating visual brand elements…”,
“📝 Writing compelling copy and bios…”,
“📱 Designing social media templates…”,
“📅 Planning content calendar…”
],
output: {
title: “Complete Brand Identity”,
items: [
“👤 Professional headshots in 3 styles”,
“📝 Bio variations for all platforms (50-200 words)”,
“🎨 Brand color palette and logo concepts”,
“📱 30 social media post templates”,
“📅 90-day content calendar with captions”,
“💼 Email signature and business card design”
]
}
}
},
creative: {
title: “🎨 Art Studio”,
subtitle: “Bring any vision to life”,
demo: {
input: “Sunset over mountains, watercolor style, peaceful mood”,
steps: [
“🎨 Interpreting artistic style and mood…”,
“🏔️ Composing mountain landscape structure…”,
“🌅 Layering sunset colors and lighting…”,
“💧 Adding watercolor texture and flow…”,
“✨ Final touches and artistic refinement…”
],
output: {
title: “Custom Artwork Collection”,
items: [
“🖼️ High-resolution artwork (4K, print-ready)”,
“🎨 3 artistic variations (watercolor, oil, digital)”,
“📱 Social media versions with different crops”,
“🖨️ Print specifications for canvas, paper, metal”,
“🎬 Time-lapse video of creation process”,
“🎨 Color palette extraction for matching decor”
]
}
}
},
solver: {
title: “🔧 Home Helper”,
subtitle: “Solutions for everyday challenges”,
demo: {
input: “My garage is cluttered and I can’t find anything”,
steps: [
“📏 Analyzing space dimensions and layout…”,
“📦 Categorizing items and storage needs…”,
“🛠️ Designing optimal organization system…”,
“🛒 Sourcing storage solutions and tools…”,
“📋 Creating step-by-step action plan…”
],
output: {
title: “Complete Organization Solution”,
items: [
“📐 Custom garage layout with zones marked”,
“🛒 Shopping list: storage solutions ($156 total)”,
“📋 Step-by-step 4-hour organization plan”,
“🏷️ Labeling system with printable labels”,
“📱 Digital inventory app for tracking items”,
“🔄 Maintenance schedule to stay organized”
]
}
}
}
};

// Initialize typing animation
document.addEventListener(‘DOMContentLoaded’, () => {
const typingElement = document.getElementById(‘heroTyping’);
if (typingElement) {
const texts = [
“I want to start a food blog…”,
“Help me plan my daughter’s party…”,
“Turn my hobby into income…”,
“Create content for my business…”,
“Make my family photos special…”
];
new TypeWriter(typingElement, texts, 80);
}

```
// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
const scrollHandler = useRAF(() => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

window.addEventListener('scroll', scrollHandler);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for scroll animations
document.querySelectorAll('.showcase-card, .story, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
```

});

// Smooth scrolling function
function scrollToSection(sectionId) {
const element = document.getElementById(sectionId);
if (element) {
const offsetTop = element.offsetTop - 80; // Account for fixed navbar
window.scrollTo({
top: offsetTop,
behavior: ‘smooth’
});
}
}

// Demo modal functionality
function openDemo(type) {
const modal = document.getElementById(‘demoModal’);
const content = document.getElementById(‘demoContent’);
const demo = demoContent[type];

```
if (!demo) return;

content.innerHTML = `
    <div class="demo-header">
        <h2>${demo.title}</h2>
        <p class="demo-subtitle">${demo.subtitle}</p>
    </div>
    
    <div class="demo-section">
        <h3>What You Type:</h3>
        <div class="demo-input-box">
            "${demo.demo.input}"
        </div>
    </div>

    <div class="demo-section">
        <h3>What Happens (Live Demo):</h3>
        <div class="demo-steps" id="demoSteps">
            <!-- Steps will be animated here -->
        </div>
    </div>

    <div class="demo-section">
        <h3>What You Get:</h3>
        <div class="demo-results">
            <h4>${demo.demo.output.title}</h4>
            <ul class="demo-output-list">
                ${demo.demo.output.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    </div>

    <div class="demo-cta">
        <button class="demo-try-btn" onclick="closeDemo()">Try This Now - Free</button>
    </div>
`;

// Add demo-specific styles
if (!document.getElementById('demo-styles')) {
    const styles = document.createElement('style');
    styles.id = 'demo-styles';
    styles.textContent = `
        .demo-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
        }

        .demo-header h2 {
            margin-bottom: 10px;
            color: var(--primary-color);
        }

        .demo-subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .demo-section {
            margin: 30px 0;
        }

        .demo-section h3 {
            margin-bottom: 15px;
            color: var(--text-primary);
            font-size: 1.3rem;
        }

        .demo-input-box {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            padding: 20px;
            font-style: italic;
            font-size: 1.1rem;
            color: var(--text-secondary);
        }

        .demo-steps {
            background: #1f2937;
            border-radius: 10px;
            padding: 20px;
            color: #10b981;
            font-family: 'Courier New', monospace;
            min-height: 150px;
            position: relative;
        }

        .demo-step {
            margin: 10px 0;
            opacity: 0;
            transform: translateX(-20px);
            animation: stepAppear 0.5s ease forwards;
        }

        @keyframes stepAppear {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .demo-results {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            padding: 25px;
        }

        .demo-results h4 {
            margin-bottom: 20px;
            font-size: 1.4rem;
            text-align: center;
        }

        .demo-output-list {
            list-style: none;
            padding: 0;
        }

        .demo-output-list li {
            margin: 12px 0;
            padding: 10px 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            border-left: 4px solid #10b981;
        }

        .demo-cta {
            text-align: center;
            margin-top: 30px;
        }

        .demo-try-btn {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .demo-try-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }
    `;
    document.head.appendChild(styles);
}

modal.style.display = 'block';

// Animate the steps
setTimeout(() => {
    animateSteps(demo.demo.steps);
}, 500);
```

}

function animateSteps(steps) {
const stepsContainer = document.getElementById(‘demoSteps’);
let currentStep = 0;

```
function showNextStep() {
    if (currentStep < steps.length) {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'demo-step';
        stepDiv.textContent = `> ${steps[currentStep]}`;
        stepDiv.style.animationDelay = '0s';
        stepsContainer.appendChild(stepDiv);
        
        currentStep++;
        setTimeout(showNextStep, 800);
    } else {
        // Add completion message
        setTimeout(() => {
            const completeDiv = document.createElement('div');
            completeDiv.className = 'demo-step';
            completeDiv.textContent = '> ✅ Complete! Your content is ready.';
            completeDiv.style.color = '#10b981';
            completeDiv.style.fontWeight = 'bold';
            stepsContainer.appendChild(completeDiv);
        }, 500);
    }
}

showNextStep();
```

}

function closeDemo() {
const modal = document.getElementById(‘demoModal’);
modal.style.display = ‘none’;
}

// Close modal when clicking outside
window.onclick = function(event) {
const modal = document.getElementById(‘demoModal’);
if (event.target === modal) {
closeDemo();
}
};

// Add keyboard navigation
document.addEventListener(‘keydown’, (e) => {
if (e.key === ‘Escape’) {
closeDemo();
}
});

// Add click tracking for analytics (placeholder)
function trackEvent(eventName, properties = {}) {
// Placeholder for analytics tracking
console.log(‘Track event:’, eventName, properties);

```
// In a real implementation, you would send this to your analytics service
// Example: gtag('event', eventName, properties);
```

}

// Track showcase card clicks
document.addEventListener(‘click’, (e) => {
if (e.target.closest(’.showcase-card’)) {
const cardType = e.target.closest(’.showcase-card’).className.split(’ ’).find(c =>
[‘money’, ‘wow’, ‘useful’, ‘cool’, ‘creative’, ‘solver’].includes(c)
);
trackEvent(‘showcase_card_clicked’, { type: cardType });
}

```
if (e.target.closest('.cta-button, .hero-cta, .pricing-btn')) {
    trackEvent('cta_clicked', { 
        location: e.target.textContent.trim(),
        position: e.target.closest('section')?.className || 'unknown'
    });
}
```

});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
list.getEntries().forEach((entry) => {
if (entry.entryType === ‘navigation’) {
console.log(‘Page load time:’, entry.loadEventEnd - entry.loadEventStart);
}
});
});

try {
perfObserver.observe({ entryTypes: [‘navigation’] });
} catch (e) {
// PerformanceObserver not supported in all browsers
console.log(‘Performance monitoring not available’);
}

// Lazy loading for images (if you add them later)
if (‘IntersectionObserver’ in window) {
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const img = entry.target;
if (img.dataset.src) {
img.src = img.dataset.src;
img.classList.remove(‘lazy’);
imageObserver.unobserve(img);
}
}
});
});

```
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

}
