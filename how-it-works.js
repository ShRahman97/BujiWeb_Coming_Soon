// Scroll-triggered step animations
document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step-item');
  const stepsContainer = document.querySelector('.steps-container');
  
  if (!steps.length || !stepsContainer) return;

  let currentStep = 0;
  let isTransitioning = false;

  // Initialize - show first step
  steps[0].classList.add('active');

  function handleScroll() {
    if (isTransitioning) return;
    
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    
    // Find which step is closest to the viewport center
    let closestStep = 0;
    let closestDistance = Infinity;
    
    steps.forEach((step, index) => {
      const stepRect = step.getBoundingClientRect();
      const stepCenter = stepRect.top + (stepRect.height / 2);
      const distance = Math.abs(stepCenter - viewportCenter);
      
      // Only consider steps that are at least partially visible
      if (stepRect.bottom > 0 && stepRect.top < viewportHeight) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = index;
        }
      }
    });

    // If we found a different step, transition to it
    if (closestStep !== currentStep) {
      isTransitioning = true;
      
      // Fade out current step
      steps[currentStep].classList.remove('active');
      steps[currentStep].classList.add('fade-out');
      
      // Update current step
      currentStep = closestStep;
      
      // Fade in new step after a short delay
      setTimeout(() => {
        steps.forEach(step => {
          step.classList.remove('fade-out');
        });
        steps[currentStep].classList.add('active');
        isTransitioning = false;
      }, 400);
    }
  }

  // Throttled scroll handler using requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Also handle on initial load
  handleScroll();
});

