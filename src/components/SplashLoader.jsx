import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import LightPillar from './LightPillar';

// Register CSSPlugin
gsap.registerPlugin(CSSPlugin);

const SplashLoader = ({ onAnimationComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const pillarWrapperRef = useRef(null);
  const barContainerRef = useRef(null);
  const progressRef = useRef(null);
  
  // Refs for the organic background glowing blobs
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const blob4Ref = useRef(null);
  
  const [isMounted, setIsMounted] = useState(true);

  const title = "LUCKY'S PORTFOLIO";

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const pillarWrapper = pillarWrapperRef.current;
    const barContainer = barContainerRef.current;
    const progressBar = progressRef.current;

    // Safety guard to ensure refs are fully mounted
    if (!container || !text || !pillarWrapper || !barContainer || !progressBar) {
      return;
    }

    const letters = text.querySelectorAll('.loading-char');

    // Create main timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out animation of splash screen
        gsap.to(container, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsMounted(false);
            if (onAnimationComplete) onAnimationComplete();
          },
        });
      },
    });

    // Set initial states for 3D flip-up letter stagger entrance & progress container expansion
    gsap.set(container, { opacity: 0 });
    gsap.set(letters, { 
      opacity: 0, 
      y: 35, 
      scale: 0.75,
      rotateX: -45,
      transformOrigin: "50% 50% -10px"
    });
    gsap.set(barContainer, { scaleX: 0, opacity: 0 });
    gsap.set(progressBar, { width: '0%' });

    // Sequence of animations
    tl.to(container, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
    .fromTo(pillarWrapper, 
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.15'
    )
    // 3D Flip, scale & elastic bounce for letters
    .to(letters, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 0.7,
      stagger: 0.03,
      ease: 'back.out(1.8)',
    }, '-=0.55')
    // Slide in and expand the loading bar container
    .to(barContainer, {
      scaleX: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.6')
    // Fill the loading bar concurrently
    .to(progressBar, {
      width: '100%',
      duration: 1.0,
      ease: 'power1.inOut',
    }, '-=0.4')
    // Hold briefly at completion
    .to({}, { duration: 0.2 })
    // Transition elements out before unmounting
    .to([text, pillarWrapper], {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in'
    });

    // Helper for organic random floating movements of background glow blobs
    const randomFloat = (element, delay = 0) => {
      if (!element) return;
      gsap.to(element, {
        x: () => gsap.utils.random(-80, 80),
        y: () => gsap.utils.random(-80, 80),
        scale: () => gsap.utils.random(0.85, 1.25),
        duration: () => gsap.utils.random(8, 14),
        ease: 'sine.inOut',
        delay: delay,
        onComplete: () => randomFloat(element)
      });
    };

    // Trigger floating animations for all blobs
    randomFloat(blob1Ref.current, 0);
    randomFloat(blob2Ref.current, 1.5);
    randomFloat(blob3Ref.current, 0.5);
    randomFloat(blob4Ref.current, 2.0);

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c', // Matches dark mode landing background exactly
        zIndex: 100000,
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Glowing Blobs - looping, organic fluid animation */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        {/* Blob 1: Mint/Teal (top-left) */}
        <div
          ref={blob1Ref}
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(184, 242, 230, 0.22) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Blob 2: Ice Blue (bottom-right) */}
        <div
          ref={blob2Ref}
          style={{
            position: 'absolute',
            top: '80%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(174, 217, 224, 0.28) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Blob 3: White Glow Accent (center-left) */}
        <div
          ref={blob3Ref}
          style={{
            position: 'absolute',
            top: '55%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Blob 4: Light Teal/Blue (center-right) */}
        <div
          ref={blob4Ref}
          style={{
            position: 'absolute',
            top: '40%',
            left: '85%',
            transform: 'translate(-50%, -50%)',
            width: '380px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(184, 242, 230, 0.16) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div
        ref={pillarWrapperRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <LightPillar
          topColor="#b8f2e6" // Matches landing page mint
          bottomColor="#aed9e0" // Matches landing page blue
          intensity={1.1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.4}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />

        {/* Branding & Progress Bar */}
        <div
          ref={textRef}
          style={{
            position: 'absolute',
            zIndex: 3,
            textAlign: 'center',
            fontFamily: '"Outfit", sans-serif',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
          }}
        >
          {/* Staggered Title Letters */}
          <h1
            style={{
              fontSize: 'clamp(1.1rem, 5.5vw, 3.5rem)',
              fontWeight: '900',
              letterSpacing: '0.15em',
              color: '#ffffff',
              textShadow: '0 0 30px rgba(184, 242, 230, 0.4), 0 0 10px rgba(174, 217, 224, 0.4)',
              margin: 0,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              display: 'flex',
              transformStyle: 'preserve-3d',
            }}
          >
            {title.split('').map((char, index) => (
              <span
                key={index}
                className="loading-char"
                style={{
                  display: 'inline-block',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* Progress Bar Container */}
          <div
            ref={barContainerRef}
            style={{
              width: '200px',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              marginTop: '28px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 0 15px rgba(184, 242, 230, 0.15)',
              transformOrigin: 'center center',
            }}
          >
            {/* Animated progress bar fill */}
            <div
              ref={progressRef}
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #aed9e0, #b8f2e6)', // Cohesive gradient
                borderRadius: '10px',
                boxShadow: '0 0 8px #b8f2e6',
                width: '0%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;
