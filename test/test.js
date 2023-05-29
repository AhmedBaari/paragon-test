"use strict";
window.onload = function() {
    var ary = function(x) {
        return Array.prototype.slice.call(x);
    };
    var outcomesPhysical = [];
    var outcomesMental = [];
    var outcomesSocial = [];
    var outcomesLifestyle = [];
    var outcomesMaturity = [];
    var outcomesMoral = [];
    var outcomesLuck = [];
    var startScorePhysical = 0;
    var startScoreMental = 0;
    var startScoreSocial = 0;
    var startScoreLifestyle = 0;
    var startScoreMaturity = 0;
    var startScoreMoral = 0;
    var startScoreLuck = 0;
    for (var outcome of ary(document.getElementsByClassName('outcome-physical'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesPhysical.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-mental'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesMental.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-social'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesSocial.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-lifestyle'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesLifestyle.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-maturity'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesMaturity.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-moral'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesMoral.push([parseInt(results[1]), results[2]]);
    }
    for (var outcome of ary(document.getElementsByClassName('outcome-luck'))) {
        var results = outcome.textContent.match(/(\d+).+?: (.+)/);
        outcomesLuck.push([parseInt(results[1]), results[2]]);
    }
    function setResultColor(total, axis) {
        var newClass;
        var classToBeDeleted;
        if (total < 4) {
            newClass = "red-background";
            classToBeDeleted = "orange-background";
        } else if (total < 8) {
            newClass = "orange-background";
            classToBeDeleted = "yellow-background";
        } else if (total < 12) {
            newClass = "yellow-background";
            classToBeDeleted = "green-background";
        } else {
            newClass = "green-background";
        }
        switch (axis) {
        case "physical":
            document.getElementById("physical-result").classList.add(newClass);
            document.getElementById("physical-result").classList.remove(classToBeDeleted);
            break;
        case "mental":
            document.getElementById("mental-result").classList.add(newClass);
            document.getElementById("mental-result").classList.remove(classToBeDeleted);
            break;
        case "social":
            document.getElementById("social-result").classList.add(newClass);
            document.getElementById("social-result").classList.remove(classToBeDeleted);
            break;
        case "lifestyle":
            document.getElementById("lifestyle-result").classList.add(newClass);
            document.getElementById("lifestyle-result").classList.remove(classToBeDeleted);
            break;
        case "maturity":
            document.getElementById("maturity-result").classList.add(newClass);
            document.getElementById("maturity-result").classList.remove(classToBeDeleted);
            break;
        case "moral":
            document.getElementById("moral-result").classList.add(newClass);
            document.getElementById("moral-result").classList.remove(classToBeDeleted);
            break;
        case "luck":
            document.getElementById("luck-result").classList.add(newClass);
            document.getElementById("luck-result").classList.remove(classToBeDeleted);
            break;
        }
    }
    var update_score_physical = function() {
        var span = document.getElementById('your-total-physical');
        var total = startScorePhysical;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "physical") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-physical');
        for (outcome of outcomesPhysical) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "physical");
            }
        }
        createResults();
    };
    var update_score_mental = function() {
        var span = document.getElementById('your-total-mental');
        var total = startScoreMental;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "mental") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-mental');
        for (outcome of outcomesMental) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "mental");
            }
        }
        createResults();
    };
    var update_score_social = function() {
        var span = document.getElementById('your-total-social');
        var total = startScoreSocial;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "social") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-social');
        for (outcome of outcomesSocial) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "social");
            }
        }
        createResults();
    };
    var update_score_lifestyle = function() {
        var span = document.getElementById('your-total-lifestyle');
        var total = startScoreLifestyle;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "lifestyle") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-lifestyle');
        for (outcome of outcomesLifestyle) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "lifestyle");
            }
        }
        createResults();
    };
    var update_score_maturity = function() {
        var span = document.getElementById('your-total-maturity');
        var total = startScoreMaturity;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "maturity") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-maturity');
        for (outcome of outcomesMaturity) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "maturity");
            }
        }
        createResults();
    };
    var update_score_moral = function() {
        var span = document.getElementById('your-total-moral');
        var total = startScoreMoral;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "moral") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-moral');
        for (outcome of outcomesMoral) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "moral");
            }
        }
        createResults();
    };
    var update_score_luck = function() {
        var span = document.getElementById('your-total-luck');
        var total = startScoreLuck;
        for (var checkbox of ary(document.getElementsByTagName('input'))) {
            if (checkbox.checked && checkbox.name == "luck") {
                total += checkbox.point_value;
            }
        }
        span.textContent = total;
        span = document.getElementById('your-outcome-luck');
        for (outcome of outcomesLuck) {
            if (total >= outcome[0]) {
                span.textContent = outcome[1];
                setResultColor(total, "luck");
            }
        }
        createResults();
    };
    update_score_physical();
    update_score_mental();
    update_score_social();
    update_score_lifestyle();
    update_score_maturity();
    update_score_moral();
    update_score_luck();
    for (var td of ary(document.getElementsByClassName('physical'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "physical";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_physical);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of ary(document.getElementsByClassName('mental'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "mental";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_mental);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of ary(document.getElementsByClassName('social'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "social";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_social);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of ary(document.getElementsByClassName('lifestyle'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "lifestyle";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_lifestyle);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of ary(document.getElementsByClassName('maturity'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "maturity";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_maturity);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of ary(document.getElementsByClassName('moral'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "moral";
            checkbox.point_value = parseInt(td.nextSibling.textContent);
            checkbox.addEventListener('change', update_score_moral);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(checkbox);
            td.appendChild(text);
        }
    }
    for (var td of Array.from(document.getElementsByClassName('luck'))) {
        if (!/^\s*\d+\s*$/.test(td.textContent)) {
            var icon = document.createElement('i');
            icon.className = "fas fa-star";
            icon.setAttribute("aria-hidden", "true");
            icon.style.color = "gold";
            icon.point_value = parseInt(td.nextSibling.textContent);
            icon.addEventListener('click', update_score_luck);
            var text = document.createElement('span');
            text.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(icon);
            td.appendChild(text);
        }
    }
}