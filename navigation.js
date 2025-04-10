/**
 * Navigation helper functions
 * This file contains helper functions for navigation that will be used across all pages
 */

/**
 * Navigation utility functions
 */
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/Services/') || path.includes('/Expertise/') || path.includes('/Products/')) {
        return '../';
    }
    return './';
}

/**
 * Main navigation functions
 */
function handleHomeClick() {
    window.location.href = getBasePath() + 'index.html';
}

function handleWhyKutumbinfoClick() {
    window.location.href = getBasePath() + 'why_kutumbinfo.html';
}

function handleWorkWithUsClick() {
    window.location.href = getBasePath() + 'work_with_us.html';
}

/**
 * Services navigation functions
 */
function handleWebDevelopmentClick() {
    window.location.href = getBasePath() + 'Services/web_dev.html';
}

function handleMobileAppDevClick() {
    window.location.href = getBasePath() + 'Services/mob_app.html';
}

function handleCustomSoftDevClick() {
    window.location.href = getBasePath() + 'Services/custom_soft.html';
}

function handleUIUXDesignClick() {
    window.location.href = getBasePath() + 'Services/ui_ux_design.html';
}

function handleAPIdevClick() {
    window.location.href = getBasePath() + 'Services/api_dev.html';
}

function handleMaintainanceSupportClick() {
    window.location.href = getBasePath() + 'Services/maintain_support.html';
}

/**
 * Expertise navigation functions
 */
function goToAngular() {
    window.location.href = getBasePath() + 'Expertise/angular.html';
}

function goToReact() {
    window.location.href = getBasePath() + 'Expertise/react.html';
}

function goToVuejs() {
    window.location.href = getBasePath() + 'Expertise/vuejs.html';
}

function goToWordpress() {
    window.location.href = getBasePath() + 'Expertise/wordpress.html';
}

function goToFlutter() {
    window.location.href = getBasePath() + 'Expertise/flutter.html';
}

function goToJava() {
    window.location.href = getBasePath() + 'Expertise/java.html';
}

function goToNodejs() {
    window.location.href = getBasePath() + 'Expertise/nodejs.html';
}

function goToPhp() {
    window.location.href = getBasePath() + 'Expertise/php.html';
}

/**
 * Products navigation functions
 */
function goToNonFintech() {
    window.location.href = getBasePath() + 'Products/non-fintech.html';
}

function goToFintech() {
    window.location.href = getBasePath() + 'Products/fintech.html';
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Fix logo path based on current page
    const logo = document.getElementById('navbar-logo');
    if (logo) {
        logo.src = getBasePath() + 'images/logo kutumbinfo13.png';
    }
}); 