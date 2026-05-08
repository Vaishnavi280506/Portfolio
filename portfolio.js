function handlePageShow(event) {
    // If page is loaded from cache (back/forward or refresh)
    if (event.persisted) {
        window.location.reload();
    } else {
        startLandingFlow();
    }
}

function startLandingFlow() {

    // reset fade if any
    document.body.classList.remove("fade-out");

    // restart animations manually
    const containers = document.querySelectorAll(".container");

    containers.forEach(el => {
        el.style.animation = "none";
        el.offsetHeight; // force reflow
        el.style.animation = "";
    });

    // ⏱ FLOW TIMING

    // 0–5s → animation
    // 5–10s → stay
    // 10–15s → fade out

    setTimeout(() => {

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000); // fade duration

    }, 10000); // animation + stay
}