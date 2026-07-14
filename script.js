(function () {
    "use strict";

    // ---------- Print / Save as PDF ----------
    var printBtn = document.getElementById("printBtn");
    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }

    // ---------- Reset ----------
    var resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            if (!confirm("Reset the entire application form? All entered data will be lost.")) return;
            var inputs = document.querySelectorAll(".sheet input[type='text'], .sheet select");
            inputs.forEach(function (el) {
                if (el.hasAttribute("readonly")) return;
                if (el.tagName === "SELECT") { el.selectedIndex = 0; return; }
                el.value = "";
            });
            document.querySelectorAll(".sheet input[type='checkbox']").forEach(function (c) {
                c.checked = false;
            });
        });
    }

    // ---------- Auto-generate application number (stays stable per session) ----------
    var appNoEl = document.getElementById("appNo");
    if (appNoEl && !sessionStorage.getItem("jiobp_appno")) {
        var n = Math.floor(200 + Math.random() * 799);
        var generated = "RBML/2026/UP/00" + n;
        sessionStorage.setItem("jiobp_appno", generated);
        appNoEl.textContent = generated;
    } else if (appNoEl) {
        appNoEl.textContent = sessionStorage.getItem("jiobp_appno");
    }

    // ---------- Aadhaar auto-formatting (XXXX  XXXX  XXXX) ----------
    var aadhaarInputs = document.querySelectorAll("input.mono");
    aadhaarInputs.forEach(function (inp) {
        if (!/^\s*\d{4}\s+\d{4}\s+\d{4}\s*$/.test(inp.value)) return;
        inp.addEventListener("input", function () {
            var digits = inp.value.replace(/\D/g, "").slice(0, 12);
            var out = digits.replace(/(\d{4})(?=\d)/g, "$1  ");
            inp.value = out;
        });
    });

    // ---------- Uppercase certain text fields on blur ----------
    var upperFields = document.querySelectorAll(".sheet input[type='text']");
    upperFields.forEach(function (el) {
        el.addEventListener("blur", function () {
            var v = el.value.trim();
            if (!v) return;
            // Skip emails and mobile numbers, keep addresses/names uppercase for that "official" look
            if (/@/.test(v)) return;
            if (/^\+?\d[\d\s\-()]{6,}$/.test(v)) return;
            // Skip Aadhaar / PAN monospaced fields (already handled)
            if (el.classList.contains("mono")) return;
            el.value = v.toUpperCase();
        });
    });
})();
