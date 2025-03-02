particlesJS('particles-js', {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        "value": "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 5,
        random: true
      },
      line_linked: {
        enable: true, // Disable lines between particles for explosion effect
      },
      move: {
        enable: true,
        speed: 2, // High speed for explosion effect
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out", // Move particles out of view after explosion
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Particles move away on hover
        },
        onclick: {
          enable: true,
          mode: "push" // Add more particles on click
        }
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 1,
            
          }
        },
        bubble: {
          distance: 400,
          size: 10,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4 // Add more particles on click
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  