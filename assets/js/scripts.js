/**
 * ZENFLOW SPRING SYSTEM WEBSITE
 * Interactive JavaScript functionality
 * Professional Medical Device Presentation
 */

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeHeaderEffects();
    initializeCharts();
    initializeCalculator();
    
    console.log('Zenflow website initialized successfully');
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== HEADER EFFECTS =====
function initializeHeaderEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = 'none';
        }
    });
}

// ===== CHART INITIALIZATION =====
function initializeCharts() {
    // Delay chart creation to ensure DOM is ready
    setTimeout(() => {
        createEfficacyChart();
        createQALYChart();
    }, 500);
}

// ===== EFFICACY CHART =====
function createEfficacyChart() {
    const ctx = document.getElementById('efficacyChart');
    if (!ctx) {
        console.warn('Efficacy chart canvas not found');
        return;
    }
    
    try {
        new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: [
                    'IPSS Improvement', 
                    'Qmax Increase (mL/s)', 
                    'Sexual Function Preservation (%)', 
                    'Patient Satisfaction (%)'
                ],
                datasets: [
                    {
                        label: 'Zenflow Spring',
                        data: [15, 7, 100, 95],
                        backgroundColor: '#3b82f6',
                        borderColor: '#1d4ed8',
                        borderWidth: 2,
                        borderRadius: 6
                    },
                    {
                        label: 'UroLift',
                        data: [12, 5, 98, 87],
                        backgroundColor: '#10b981',
                        borderColor: '#059669',
                        borderWidth: 2,
                        borderRadius: 6
                    },
                    {
                        label: 'Rezūm',
                        data: [11, 6, 85, 82],
                        backgroundColor: '#f59e0b',
                        borderColor: '#d97706',
                        borderWidth: 2,
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Clinical Outcomes Comparison',
                        font: { size: 16, weight: '600' },
                        color: '#1e293b'
                    },
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#1e293b',
                            font: { size: 13, weight: '500' },
                            padding: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { 
                            color: '#64748b', 
                            font: { size: 11 }
                        },
                        grid: { color: '#f1f5f9' }
                    },
                    x: {
                        ticks: { 
                            color: '#64748b', 
                            font: { size: 11 }
                        },
                        grid: { color: '#f1f5f9' }
                    }
                }
            }
        });
        
        console.log('Efficacy chart created successfully');
    } catch (error) {
        console.error('Error creating efficacy chart:', error);
    }
}

// ===== QALY CHART =====
function createQALYChart() {
    const ctx = document.getElementById('qalyChart');
    if (!ctx) {
        console.warn('QALY chart canvas not found');
        return;
    }
    
    try {
        new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [
                    {
                        label: 'Zenflow Spring',
                        data: [0.85, 0.87, 0.88, 0.87, 0.86],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'UroLift',
                        data: [0.82, 0.80, 0.78, 0.75, 0.72],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'Medical Management',
                        data: [0.65, 0.63, 0.60, 0.58, 0.55],
                        borderColor: '#6b7280',
                        backgroundColor: 'rgba(107, 114, 128, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#6b7280',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Quality-Adjusted Life Years (QALYs) Over Time',
                        font: { size: 16, weight: '600' },
                        color: '#1e293b'
                    },
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#1e293b',
                            font: { size: 13, weight: '500' },
                            padding: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0.5,
                        max: 1.0,
                        title: {
                            display: true,
                            text: 'QALY Score',
                            color: '#64748b',
                            font: { size: 12, weight: '500' }
                        },
                        ticks: { 
                            color: '#64748b', 
                            font: { size: 11 }
                        },
                        grid: { color: '#f1f5f9' }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Years Post-Treatment',
                            color: '#64748b',
                            font: { size: 12, weight: '500' }
                        },
                        ticks: { 
                            color: '#64748b', 
                            font: { size: 11 }
                        },
                        grid: { color: '#f1f5f9' }
                    }
                }
            }
        });
        
        console.log('QALY chart created successfully');
    } catch (error) {
        console.error('Error creating QALY chart:', error);
    }
}

// ===== CALCULATOR INITIALIZATION =====
function initializeCalculator() {
    // Set up event listeners for auto-calculation
    const proceduresInput = document.getElementById('procedures');
    const treatmentSelect = document.getElementById('treatment');
    const ageInput = document.getElementById('age');

    if (proceduresInput && treatmentSelect && ageInput) {
        proceduresInput.addEventListener('input', calculateSavings);
        treatmentSelect.addEventListener('change', calculateSavings);
        ageInput.addEventListener('input', calculateSavings);

        // Initialize with default calculation
        setTimeout(calculateSavings, 1000);
        
        console.log('Calculator initialized successfully');
    } else {
        console.warn('Calculator inputs not found');
    }
}

// ===== COST DATA CONSTANTS =====
const COST_DATA = {
    procedureCosts: {
        zenflow: 4000,
        urolift: 5200,
        rezum: 4500,
        medical: 1200, // annual cost
        turp: 8500
    },
    retreatmentRates: {
        zenflow: 0.04,      // 4% over 5 years
        urolift: 0.136,     // 13.6% over 5 years
        rezum: 0.08,        // estimated 5-year rate
        medical: 0.4,       // 40% eventually need procedure
        turp: 0.15          // 15% over 5 years
    }
};

// ===== ECONOMIC CALCULATOR =====
function calculateSavings() {
    try {
        // Get input values
        const procedures = parseInt(document.getElementById('procedures').value) || 0;
        const treatment = document.getElementById('treatment').value;
        const age = parseInt(document.getElementById('age').value) || 68;

        // Validate inputs
        if (procedures <= 0) {
            displayResults('Please enter a valid number of procedures.');
            return;
        }

        // Calculate costs
        const calculations = performCostCalculations(procedures, treatment, age);
        
        // Display results
        displayCalculationResults(calculations);
        
    } catch (error) {
        console.error('Error in cost calculation:', error);
        displayResults('Error calculating savings. Please check your inputs.');
    }
}

function performCostCalculations(procedures, treatment, age) {
    const { procedureCosts, retreatmentRates } = COST_DATA;
    
    // Calculate 5-year Zenflow costs
    const zenflowCost = procedures * (procedureCosts.zenflow + 
        (procedureCosts.zenflow * retreatmentRates.zenflow));
    
    // Calculate comparator costs
    let comparatorCost;
    let comparatorName;
    
    switch(treatment) {
        case 'urolift':
            comparatorCost = procedures * (procedureCosts.urolift + 
                (procedureCosts.urolift * retreatmentRates.urolift));
            comparatorName = 'UroLift';
            break;
        case 'rezum':
            comparatorCost = procedures * (procedureCosts.rezum + 
                (procedureCosts.rezum * retreatmentRates.rezum));
            comparatorName = 'Rezūm';
            break;
        case 'medical':
            comparatorCost = procedures * (procedureCosts.medical * 5 + 
                (procedureCosts.zenflow * retreatmentRates.medical));
            comparatorName = 'Medical Management';
            break;
        case 'turp':
            comparatorCost = procedures * (procedureCosts.turp + 
                (procedureCosts.turp * retreatmentRates.turp));
            comparatorName = 'TURP';
            break;
        default:
            throw new Error('Invalid treatment selection');
    }

    // Calculate derived metrics
    const savings = comparatorCost - zenflowCost;
    const savingsPerPatient = savings / procedures;
    const qualityGain = procedures * 0.15; // QALY gain estimate
    const costPerQALY = (zenflowCost - (procedures * procedureCosts.medical * 5)) / qualityGain;

    return {
        procedures,
        comparatorName,
        zenflowCost,
        comparatorCost,
        savings,
        savingsPerPatient,
        qualityGain,
        costPerQALY
    };
}

function displayCalculationResults(calc) {
    const resultsHTML = `
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border: 1px solid #e5e7eb;">
            <h4 style="color: #1e293b; margin-bottom: 1rem; text-align: center; font-size: 1.125rem; font-weight: 600;">
                5-Year Economic Analysis
            </h4>
            <div style="display: grid; gap: 0.75rem; font-size: 0.95rem;">
                ${createResultRow('Total Cost Savings:', formatCurrency(calc.savings), '#3b82f6', true)}
                ${createResultRow('Savings per Patient:', formatCurrency(calc.savingsPerPatient), '#3b82f6', true)}
                ${createResultRow('Zenflow Total Cost:', formatCurrency(calc.zenflowCost), '#64748b')}
                ${createResultRow(`${calc.comparatorName} Total Cost:`, formatCurrency(calc.comparatorCost), '#64748b')}
                ${createResultRow('Quality-Adjusted Life Years Gained:', `${calc.qualityGain.toFixed(1)} QALYs`, '#10b981')}
                ${createResultRow('Cost per QALY:', formatCurrency(calc.costPerQALY), '#f59e0b')}
            </div>
        </div>
    `;
    
    displayResults(resultsHTML);
}

function createResultRow(label, value, color, isHighlight = false) {
    const fontSize = isHighlight ? '1.125em' : '1em';
    const fontWeight = isHighlight ? '700' : '500';
    
    return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #f1f5f9;">
            <strong style="color: #374151;">${label}</strong> 
            <span style="color: ${color}; font-size: ${fontSize}; font-weight: ${fontWeight};">${value}</span>
        </div>
    `;
}

function formatCurrency(amount) {
    if (isNaN(amount)) return '$0';
    return '$' + Math.round(amount).toLocaleString();
}

function displayResults(content) {
    const resultsElement = document.getElementById('results');
    if (resultsElement) {
        resultsElement.innerHTML = content;
    }
}

// ===== UTILITY FUNCTIONS =====

// Format numbers with commas
function formatNumber(num) {
    return num.toLocaleString();
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    // Graceful degradation for charts
    if (e.error.message.includes('Chart')) {
        console.warn('Chart.js error detected, charts may not display properly');
    }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function(e) {
    // Add keyboard navigation support
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('btn')) {
            e.target.click();
        }
    }
});

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Zenflow website loaded in ${Math.round(loadTime)}ms`);
    
    // Optional: Send performance data to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
            'custom_parameter': Math.round(loadTime)
        });
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateSavings,
        performCostCalculations,
        formatCurrency,
        COST_DATA
    };
}