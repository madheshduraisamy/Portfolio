import React, { useEffect, useState, memo } from 'react';

// --- Memoized Icon Component (Generic) ---
const SkillIcon = memo(({ fontAwesomeClassname }) => {
  if (!fontAwesomeClassname) return null;
  
  return (
    <i 
      className={fontAwesomeClassname} 
      style={{
        fontSize: '24px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    ></i>
  );
});
SkillIcon.displayName = 'SkillIcon';

// --- Helper to generate skill config from array ---
const generateSkillConfigs = (skills = []) => {
  if (!Array.isArray(skills) || skills.length === 0) {
    // Default fallback
    return [
      { id: 'react', label: 'React', fontAwesomeClassname: 'fab fa-react', orbitRadius: 100, size: 45, speed: 1, phaseShift: 0, glowColor: 'cyan' },
      { id: 'javascript', label: 'JavaScript', fontAwesomeClassname: 'fab fa-js', orbitRadius: 100, size: 40, speed: 1, phaseShift: (2 * Math.PI) / 3, glowColor: 'cyan' },
      { id: 'nodejs', label: 'Node.js', fontAwesomeClassname: 'fab fa-node', orbitRadius: 100, size: 45, speed: 1, phaseShift: (4 * Math.PI) / 3, glowColor: 'cyan' },
      { id: 'aws', label: 'AWS', fontAwesomeClassname: 'fab fa-aws', orbitRadius: 180, size: 50, speed: -0.6, phaseShift: 0, glowColor: 'purple' },
      { id: 'database', label: 'Database', fontAwesomeClassname: 'fas fa-database', orbitRadius: 180, size: 40, speed: -0.6, phaseShift: (2 * Math.PI) / 3, glowColor: 'purple' },
      { id: 'git', label: 'Git', fontAwesomeClassname: 'fab fa-git', orbitRadius: 180, size: 40, speed: -0.6, phaseShift: (4 * Math.PI) / 3, glowColor: 'purple' },
    ];
  }

  const innerOrbitCount = Math.ceil(skills.length / 2);
  const outerOrbitCount = skills.length - innerOrbitCount;

  return skills.map((skill, index) => {
    let orbitRadius, speed, glowColor;
    let phaseShift;

    if (index < innerOrbitCount) {
      // Inner orbit
      orbitRadius = 100;
      speed = 1;
      glowColor = 'cyan';
      phaseShift = (index * 2 * Math.PI) / innerOrbitCount;
    } else {
      // Outer orbit
      orbitRadius = 180;
      speed = -0.6;
      glowColor = 'purple';
      phaseShift = ((index - innerOrbitCount) * 2 * Math.PI) / outerOrbitCount;
    }

    return {
      id: skill.skillName || `skill-${index}`,
      label: skill.skillName,
      fontAwesomeClassname: skill.fontAwesomeClassname,
      orbitRadius,
      size: 40,
      speed,
      phaseShift,
      glowColor,
    };
  });
};

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { orbitRadius, size, fontAwesomeClassname, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
        transition: 'all 0.3s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          padding: '8px',
          background: 'rgba(31, 41, 55, 0.9)',
          backdropFilter: 'blur(4px)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          transform: isHovered ? 'scale(1.25)' : 'scale(1)',
          boxShadow: isHovered
            ? `0 0 30px rgba(0, 200, 255, 0.4), 0 0 60px rgba(0, 200, 255, 0.2)`
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >
        <SkillIcon fontAwesomeClassname={fontAwesomeClassname} />
        {isHovered && (
          <div style={{
            position: 'absolute',
            bottom: '-32px',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '4px',
            paddingBottom: '4px',
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(4px)',
            borderRadius: '4px',
            fontSize: '12px',
            color: 'white',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.2)',
      border: 'rgba(147, 51, 234, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: '50%',
        pointerEvents: 'none',
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills({ skills = [] }) {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Generate skill configs from props
  const skillsConfig = generateSkillConfigs(skills);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Background pattern - Removed for transparency */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0 }}>
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div 
        style={{
          position: 'relative',
          width: '380px',
          height: '380px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(to bottom right, #374151, #111827)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          position: 'relative',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.3)',
            filter: 'blur(12px)',
            animation: 'pulse 2s ease-in-out infinite',
          }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(147, 51, 234, 0.2)',
            filter: 'blur(24px)',
            animation: 'pulse 2s ease-in-out infinite',
            animationDelay: '1s',
          }}></div>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </main>
  );
}
