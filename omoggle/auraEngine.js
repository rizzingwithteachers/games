/**
 * CarsonGames - Advanced Aura & Rizz Calculation Engine (2026 Edition)
 * Modular system for client-side evaluation.
 */

export const AuraEngine = {
  // Master configuration settings
  config: {
    maxAura: 1000,
    baseAura: 500,
    fluxVolatility: 15
  },

  /**
   * Generates a fully detailed, simulated facial metric tracking report.
   * Perfect for displaying real-time lookmaxxing stats without a camera active.
   */
  generateLiveMetrics: function() {
    // 1. Mewing Continuity Math (Range: 70 - 100)
    const mewingScore = Math.floor(Math.random() * 30) + 70;
    
    // 2. Motion Stability / Stoicism Index (Range: 65 - 100)
    const stabilityScore = Math.floor(Math.random() * 35) + 65;
    
    // 3. Eye Frame Dynamics Matrix
    const eyeFrames = ["Hunter Eyes", "Neutral Frame", "Uncanny Stare"];
    const eyeRoll = Math.random();
    let eyeFrameTier = eyeFrames[1];
    let eyeMultiplier = 1.0;

    if (eyeRoll > 0.75) {
      eyeFrameTier = eyeFrames[0]; // Hunter Eyes
      eyeMultiplier = 1.25;
    } else if (eyeRoll < 0.15) {
      eyeFrameTier = eyeFrames[2]; // Uncanny Stare
      eyeMultiplier = 0.80;
    }

    // 4. Chin Architecture Matrix
    const chinTiers = ["Elite Quad Split", "Prominent Strong Jaw", "Slight Recession"];
    const chinRoll = Math.random();
    let chinTier = chinTiers[1];
    let chinBonus = 0;

    if (chinRoll > 0.80) {
      chinTier = chinTiers[0]; // Elite Quad Split
      chinBonus = 150;
    } else if (chinRoll < 0.20) {
      chinTier = chinTiers[2]; // Slight Recession
      chinBonus = -100;
    }

    return {
      mewing: mewingScore,
      stability: stabilityScore,
      eyeFrame: eyeFrameTier,
      eyeMultiplier: eyeMultiplier,
      chinType: chinTier,
      chinBonus: chinBonus
    };
  },

  /**
   * Main mathematical compiler. Takes the raw metrics and converts them
   * into a unified Aura output capped precisely between 10 and 1000.
   */
  calculateAuraScore: function(metrics) {
    // Structural algorithmic weight distribution
    const weightedMewing = metrics.mewing * 3.5;       // Max ~350 points
    const weightedStability = metrics.stability * 2.5;  // Max ~250 points
    
    // Compile base matrix
    let intermediateScore = weightedMewing + weightedStability + metrics.chinBonus;
    
    // Apply eye multiplier transformation
    let finalCalculatedScore = Math.round(intermediateScore * metrics.eyeMultiplier);

    // Hard boundary safety clamp to keep score within 10 - 1000 limits
    return Math.max(10, Math.min(this.config.maxAura, finalCalculatedScore));
  },

  /**
   * Calculates a random drift value for the tug-of-war match interval loop.
   * Keeps the centerline physics scale balanced perfectly.
   */
  calculateMatchFlux: function(currentScore) {
    const flux = Math.floor(Math.random() * (this.config.fluxVolatility * 2 + 1)) - this.config.fluxVolatility;
    return Math.max(10, Math.min(90, currentScore + flux));
  }
};
