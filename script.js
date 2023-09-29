particlesJS('particles-js', {
    particles: {
        number: {
            value: 100
        },
        size: {
            value: 3
        },
        move: {
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    }
});
