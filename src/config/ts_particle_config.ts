import {MoveDirection, OutMode} from "@tsparticles/engine";

export const ts_particle_config = () => ({
    background: {
        color: {
            value: "#f5f2fa" // Couleur de fond des particules
        }
    },
    fullScreen: {
        enable: true,
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 70,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#353131",
        },
        links: {
            color: "#c2c2c2",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 2.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 200,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 2, max: 5 },
        },
    },
    detectRetina: true,
})