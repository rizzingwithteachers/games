/**
 * CarsonGames - Advanced Aura, Rizz, & Tuffness Evaluation Engine (2026 Edition)
 * Modular system for dynamic client-side evaluation.
 */

export const AuraEngine = {
  // Expanded master configuration settings
  config: {
    maxAura: 2500,       // Higher cap for legendary status tiers
    baseAura: 500,
    fluxVolatility: 20,  // Controlled variation for the match loop
    rizzTiers: ["W Rizz", "Unspoken Rizz", "Neutral Chat", "L Rizz"],
    tuffTiers: ["Certified Tuff", "Solid Frame", "Slightly Goofy", "Crash Out"]
  },

  /**
   * Generates a detailed tracking report.
   * To prevent numbers from looking entirely random, pass the 'previousMetrics' 
   * object back into this function to calculate smooth, realistic transitions.
   */
  generateLiveMetrics: function(previousMetrics = null) {
    // Helper function to smooth out values based on the last tick
    const smoothValue = (prev, min, max, variance) => {
      if (!prev) return Math.floor(Math.random() * (max - min + 1)) + min;
      const change = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
      return Math.max(min, Math.min(max, prev + change));
    };

    const prevMewing = previousMetrics ? previousMetrics.mewing : null;
    const prevStability = previousMetrics ? previousMetrics.stability : null;
    const prevRizz = previousMetrics ? previousMetrics.rizzQuotient : null;

    // 1. Mewing Continuity Math (Range: 75 - 100)
    const mewingScore = smoothValue(prevMewing, 75, 100, 4);
    
    // 2. Motion Stability / Stoicism Index (Range: 70 - 100)
    const stabilityScore = smoothValue(prevStability, 70, 100, 3);

    // 3. Rizz Quotient / Charisma Matrix (Range: 50 - 100)
    const rizzQuotient = smoothValue(prevRizz, 50, 100, 6);
    
    // 4. Eye Frame Dynamics Matrix
    const eyeFrames = ["Hunter Eyes", "Sigma Stare", "Neutral Frame", "Uncanny Stare"];
    const eyeRoll = Math.random();
    let eyeFrameTier = eyeFrames[2];
    let eyeMultiplier = 1.0;

    if (eyeRoll > 0.85) {
      eyeFrameTier = eyeFrames[0]; // Hunter Eyes
      eyeMultiplier = 1.45;
    } else if (eyeRoll > 0.65) {
      eyeFrameTier = eyeFrames[1]; // Sigma Stare
      eyeMultiplier = 1.20;
    } else if (eyeRoll < 0.12) {
      eyeFrameTier = eyeFrames[3]; // Uncanny Stare
      eyeMultiplier = 0.75;
    }

    // 5. Chin Architecture Matrix
    const chinTiers = ["Elite Quad Split", "Prominent Strong Jaw", "Slight Recession", "No Jawline"];
    const chinRoll = Math.random();
    let chinTier = chinTiers[1];
    let chinBonus = 0;

    if (chinRoll > 0.88) {
      chinTier = chinTiers[0]; // Elite Quad Split
      chinBonus = 250;
    } else if (chinRoll < 0.15 && chinRoll > 0.04) {
      chinTier = chinTiers[2]; // Slight Recession
      chinBonus = -100;
    } else if (chinRoll <= 0.04) {
      chinTier = chinTiers[3]; // No Jawline
      chinBonus = -300;
    }

    // 6. Tuffness Modifier (Calculated organically from Stability and Frame values)
    let tuffBonus = 0;
    if (stabilityScore > 90 && eyeMultiplier >= 1.2) {
      tuffBonus = 200; // Big boost for maintaining stoic frames
    } else if (stabilityScore < 76) {
      tuffBonus = -120; // Hit to confidence
    }

    return {
      mewing: mewingScore,
      stability: stabilityScore,
      rizzQuotient: rizzQuotient,
      eyeFrame: eyeFrameTier,
      eyeMultiplier: eyeMultiplier,
      chinType: chinTier,
      chinBonus: chinBonus,
      tuffBonus: tuffBonus
    };
  },

  /**
   * Main mathematical compiler. Takes the raw metrics, applies weights,
   * scales it into a unified Aura output, and returns custom text badges.
   */
  calculateAuraScore: function(metrics) {
    // Algorithmic weight breakdown
    const weightedMewing = metrics.mewing * 4.0;       // Max ~400 points
    const weightedStability = metrics.stability * 3.0;  // Max ~300 points
    const weightedRizz = metrics.rizzQuotient * 5.0;    // Max ~500 points
    
    // Compile base matrices
    let intermediateScore = weightedMewing + weightedStability + weightedRizz + metrics.chinBonus + metrics.tuffBonus;
    
    // Apply eye multiplier transformations
    let finalCalculatedScore = Math.round(intermediateScore * metrics.eyeMultiplier);

    // Hard boundary safety clamp
    const finalAura = Math.max(10, Math.min(this.config.maxAura, finalCalculatedScore));

    // Dynamic Label Evaluation for Rizz
    let rizzStatus = this.config.rizzTiers[2];
    if (metrics.rizzQuotient > 88) rizzStatus = this.config.rizzTiers[0];
    else if (metrics.rizzQuotient > 72) rizzStatus = this.config.rizzTiers[1];
    else if (metrics.rizzQuotient < 58) rizzStatus = this.config.rizzTiers[3];

    // Dynamic Label Evaluation for Tuffness
    let tuffStatus = this.config.tuffTiers[1];
    if (metrics.tuffBonus > 0) tuffStatus = this.config.tuffTiers[0];
    else if (metrics.stability < 76 && metrics.mewing < 80) tuffStatus = this.config.tuffTiers[3];
    else if (metrics.stability < 82) tuffStatus = this.config.tuffTiers[2];

    return {
      auraScore: finalAura,
      rizzLabel: rizzStatus,
      tuffLabel: tuffStatus,
      breakdown: `Aura: ${finalAura} | [${tuffStatus}] [${rizzStatus}]`
    };
  },

  /**
   * Handles smooth interval drift physics for live tug-of-war matching lines.
   */
  calculateMatchFlux: function(currentScore) {
    const flux = Math.floor(Math.random() * (this.config.fluxVolatility * 2 + 1)) - this.config.fluxVolatility;
    return Math.max(100, Math.min(this.config.maxAura, currentScore + flux));
  }
};
