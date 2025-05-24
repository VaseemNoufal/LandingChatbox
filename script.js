// Smooth scroll for anchor links (header/footer nav)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
    observer.observe(section);
});

// Add hover effect to feature cards
document.querySelectorAll('.glass-effect').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Simulate chat widget interaction (Hero preview only)
const chatMessages = [
    "👋 Hi! How can I help you today?",
    "I'd like to know more about your pricing.",
    "Great question! ChatVase is currently free during our beta period. You get access to all features including AI-powered responses, real-time messaging, and custom themes.",
    "That sounds amazing! How do I get started?",
    "It's super easy! Just click the 'Get Started Free' button above, and you'll get your unique script tag to add to your website. The whole process takes less than 5 minutes!"
];

let currentMessageIndex = 0;
const chatContainer = document.querySelector('.space-y-4');
const chatInterval = 3000; // 3 seconds between messages

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `bg-${isUser ? 'gray-800/50' : 'primary/10'} rounded-lg p-3 max-w-[80%] ${isUser ? 'ml-auto' : ''}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function simulateChat() {
    if (currentMessageIndex < chatMessages.length) {
        const isUser = currentMessageIndex % 2 === 1;
        addMessage(chatMessages[currentMessageIndex], isUser);
        currentMessageIndex++;
        if (currentMessageIndex < chatMessages.length) {
            setTimeout(simulateChat, chatInterval);
        }
    }
}

// Start chat simulation when the page loads
window.addEventListener('load', () => {
    setTimeout(simulateChat, 1000);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
    }
`;
document.head.appendChild(style); 