

let pageViews = document.querySelector("#pageviews");
let price = document.querySelector("#price");
let range = document.querySelector("#range");
let toggle = document.querySelector("#toggle_status")

let pricing = [ {views: "10K pageviews", price: "8"},
                {views: "50K pageviews", price: "12"},
                {views: "100K pageviews", price: "16"},
                {views: "500K pageviews", price: "24"},
                {views: "1M pageviews", price: "35"} ]


let yearlyBilling = false;
let currentPrice = pricing[2].price;

range.max = pricing.length-1;
range.defaultValue = 2;

// range background colors
range.oninput = event => { 
    let val = event.target.value;
    let rangeProgress = 100/range.max*val;
    let views = pricing[val].views;
    currentPrice = pricing[val].price;

    range.style.background = `linear-gradient(to right, var(--soft-cyan) 0%, var(--soft-cyan) ${rangeProgress}%, hsl(224, 65%, 95%) ${rangeProgress}%, hsl(224, 65%, 95%) 100%)`;
    pageViews.textContent = `${views}`
    price.textContent = `$${applyDiscount(currentPrice).toFixed(2)}`
}

toggle.onchange = event => {
    yearlyBilling = event.target.checked;
    price.textContent = `$${applyDiscount(currentPrice).toFixed(2)}`
}

const applyDiscount = (originalPrice) => {
    let discount = yearlyBilling? .75 : 1.;
    return originalPrice * discount;
}

