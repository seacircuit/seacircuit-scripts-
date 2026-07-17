/* ============================================================
   SEA CIRCUIT — footer.js (النسخة الإستراتيجية النهائية والأدق للشعارات)
   ============================================================ */

/* ---------- 1) الخطوط + الفوتر + شعار ديما بالفوتر ---------- */
/* ============================================================
   استضافة الخطوط ذاتيًا عبر GitHub Pages بدل Google Fonts
   يستبدل السطر القديم (var link=document.createElement('link')...)
   ============================================================ */
(function () {
  var fontStyle = document.createElement('style');
  fontStyle.innerHTML = `
    @font-face {
      font-family: 'Cairo';
      src: url('https://seacircuit.github.io/seacircuit-scripts-/Cairo-Regular.ttf') format('truetype');
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: 'Cairo';
      src: url('https://seacircuit.github.io/seacircuit-scripts-/Cairo-Bold.ttf') format('truetype');
      font-weight: 700;
      font-display: swap;
    }
    @font-face {
      font-family: 'Orbitron';
      src: url('https://seacircuit.github.io/seacircuit-scripts-/Orbitron-Regular.ttf') format('truetype');
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: 'Orbitron';
      src: url('https://seacircuit.github.io/seacircuit-scripts-/Orbitron-Black.ttf') format('truetype');
      font-weight: 700 900;
      font-display: swap;
    }
  `;
  document.head.appendChild(fontStyle);
})();
(function(){
  function i(){
    if(document.getElementById('sc-v135'))return;
    var s=document.createElement('style');
    s.innerHTML='html,body{overflow-x:hidden!important;width:100%}.ec-footer,.footer-new,.footer-copyright,.legal-pages-links,.ec-footer__row,div[class*="footer-"],#tile-footer-MNure7{display:none!important;visibility:hidden!important;height:0!important}#sc-v135{background:#050a10!important;color:#fff!important;padding:50px 0 0!important;border-top:3px solid #00e5ff!important;font-family:Orbitron,Cairo,sans-serif!important;direction:ltr!important;width:100%!important;display:block!important;box-sizing:border-box!important;text-align:center!important;clear:both!important;position:relative}.sc-w{max-width:1200px!important;margin:0 auto!important;padding:0 20px}.sc-t{font-size:24px;font-weight:900;letter-spacing:3px;text-shadow:0 0 12px rgba(0,229,255,.5);margin-bottom:8px;display:block}.sc-d{font-size:13px;color:#00e5ff;margin-bottom:25px;display:block}.sc-p{margin:25px 0;display:flex!important;justify-content:center!important;gap:20px;flex-wrap:wrap;align-items:center}.sc-p img{height:35px;filter:drop-shadow(0 0 5px rgba(0,229,255,.3))}.sc-g{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:50px!important;margin-bottom:30px!important;width:100%!important}.sc-col{flex:1!important;min-width:200px!important;max-width:300px!important;text-align:center!important}.sc-g h4{color:#555;font-size:11px;text-transform:uppercase;margin-bottom:15px;letter-spacing:1px}.sc-u{list-style:none!important;padding:0!important;margin:0!important}.sc-u li{margin-bottom:12px!important}.sc-u a{color:#888;text-decoration:none;font-size:13px;transition:.3s;display:inline-block!important}.sc-u a:hover{color:#fff;text-shadow:0 0 8px #00e5ff}.sc-b{background:#000!important;width:100%!important;padding:25px 20px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;border-top:1px solid rgba(255,255,255,.05);font-size:11px;color:#444;font-family:Orbitron,sans-serif!important;gap:12px}.sc-l{display:flex!important;justify-content:center!important;gap:20px!important;width:100%!important}#sc-v135 .b-en{display:block}#sc-v135 .b-ar{display:none}:lang(ar) #sc-v135{direction:rtl!important}:lang(ar) #sc-v135 .b-en{display:none}:lang(ar) #sc-v135 .b-ar{display:block}@media(max-width:768px){.sc-g{flex-direction:column!important;gap:35px!important}.sc-col{width:100%!important;max-width:100%!important}}';
    document.head.appendChild(s);
    window.switchScLang=function(l){var p=window.location.pathname;var n=p.replace(/^\/ar\//,'/').replace(/^\/ar$/,'/');if(l==='ar'){window.location.href='/ar'+n}else{window.location.href=n}};
    
    var h='<div id="sc-v135"><div class="sc-w"><div class="b-en"><span class="sc-t">SEA CIRCUIT CO.</span><div class="sc-d">Retail & Maintenance of Electrical and Electronics Tools</div></div><div class="b-ar"><span class="sc-t">شركة سي سيركت</span><div class="sc-d">للبيع بالتجزئة للأدوات الكهربائية والإلكترونية وصيانتها</div></div><div class="sc-p"><img src="https://d2j6dbq0eux0bg.cloudfront.net/images/111279331/products/751178105/5876472265.png"><img src="https://infiniteapps-988453674.imgix.net/badges/knet_color.svg"><img src="https://infiniteapps-988453674.imgix.net/badges/visa_1_color.svg"><img src="https://infiniteapps-988453674.imgix.net/badges/mastercard_color.svg"><img src="https://infiniteapps-988453674.imgix.net/badges/sslsecurecolor_color.svg"></div><div class="sc-g"><div class="sc-col"><div class="b-en"><h4>Experience</h4><ul class="sc-u"><li><a href="/products/pages/about">Our Story</a></li><li><a href="/products/pages/shipping-payment">Delivery</a></li><li><a href="/products/pages/returns">Returns</a></li></ul></div><div class="b-ar"><h4>استكشف التجربة</h4><ul class="sc-u"><li><a href="/ar/products/pages/about">قصة سي سيركت</a></li><li><a href="/ar/products/pages/shipping-payment">الشحن والتسليم</a></li><li><a href="/ar/products/pages/returns">سياسة الاستبدال</a></li></ul></div></div><div class="sc-col"><div class="b-en"><h4>Legal Center</h4><ul class="sc-u"><li><a href="/products/pages/privacy-policy">Privacy Center</a></li><li><a href="/products/pages/terms">Service Terms</a></li><li><a href="mailto:abuse@ecwid.com" style="opacity:0.6">Report Abuse</a></li></ul></div><div class="b-ar"><h4>السياسات</h4><ul class="sc-u"><li><a href="/ar/products/pages/privacy-policy">سياسة الخصوصية</a></li><li><a href="/ar/products/pages/terms">شروط الخدمة</a></li><li><a href="mailto:abuse@ecwid.com" style="opacity:0.6">الإبلاغ عن إساءة</a></li></ul></div></div></div></div><div class="sc-b"><div>&copy; 2026 SEA CIRCUIT | AL-DUBAIYA HQ</div><div class="sc-l"><a onclick="switchScLang(\'en\')">EN</a> | <a onclick="switchScLang(\'ar\')" style="font-family:Cairo!important">العربية</a></div></div></div>';
    
    var f=document.createElement('div');f.id='sc-v135-c';f.innerHTML=h;document.body.appendChild(f)
  }
  i();setInterval(function(){if(!document.getElementById('sc-v135-c'))i()},3000)
})();

/* ---------- 2) شعارات الدفع لحساب Hesabe (محاذاة يمينية، حجم متناسق، بدون تكرار) ---------- */
(function() {
  function injectHesabeLogos() {
    var items = document.querySelectorAll(".ec-radiogroup__item");
    items.forEach(function(item) {
      var text = item.textContent || "";
      if (text.indexOf("Hesabe") === -1 && text.indexOf("حسابي") === -1) return;

      var titleContainer = item.querySelector(".ec-radiogroup__title");
      if (!titleContainer) return;

      // لو شعاراتنا موجودة أصلاً، لا تكرر أي شي
      if (titleContainer.querySelector(".sc-hesabe-container")) return;

      // إزالة جذرية لأي صور افتراضية موجودة داخل الحاوية (مهما كان اسم صنفها) قبل الإضافة
      titleContainer.querySelectorAll("img").forEach(function(img) { img.remove(); });
      titleContainer.querySelectorAll("div[class*='images']").forEach(function(div) { div.remove(); });

      // الحاوية: النص بأوله، الشعارات بآخره (يمين تلقائيًا بغض النظر عن اللغة)
      titleContainer.style.cssText = "display:flex !important; align-items:center !important; justify-content:space-between !important; width:100% !important;";

      var labelText = titleContainer.querySelector(".ec-radiogroup__label-title, span");
      if (labelText) { labelText.style.flexShrink = "0"; labelText.style.margin = "0 !important"; }

      var logoWrapper = document.createElement("span");
      logoWrapper.className = "sc-hesabe-container";
      logoWrapper.style.cssText = "display:inline-flex !important; align-items:center !important; gap:6px !important;";

      var icons = [
        "https://infiniteapps-988453674.imgix.net/badges/knet_color.svg",
        "https://infiniteapps-988453674.imgix.net/badges/visa_1_color.svg",
        "https://infiniteapps-988453674.imgix.net/badges/mastercard_color.svg",
        "https://infiniteapps-988453674.imgix.net/badges/applepay_color.svg",
        "https://infiniteapps-988453674.imgix.net/badges/googlepay_color.svg"
      ];

      var iconHeight = window.innerWidth <= 768 ? "18px" : "24px";
      icons.forEach(function(src) {
        var img = document.createElement("img");
        img.src = src;
        img.style.cssText = "height:" + iconHeight + " !important; width:auto !important; object-fit:contain !important; display:block !important;";
        logoWrapper.appendChild(img);
      });

      titleContainer.appendChild(logoWrapper);
    });
  }
  setInterval(injectHesabeLogos, 400);
})();

/* ---------- 3) الحل الجذري لمنع تكرار وتراكب التاريخ بالتوصيل ---------- */
(function () {
  function hideFilledPlaceholders() {
    var fields = document.querySelectorAll(".ec-form .form-control__text, .ec-form input, .ec-form select");
    fields.forEach(function (input) {
      if (
        input.type === 'date' || 
        input.hasAttribute('datepicker') ||
        input.className.toLowerCase().indexOf('date') !== -1 || 
        input.className.toLowerCase().indexOf('picker') !== -1 ||
        input.closest('.ec-date-picker') ||
        input.closest('[class*="date"]') ||
        input.closest('[class*="picker"]')
      ) {
         return; 
      }
      var wrapper = input.closest(".form-control, .ec-form__row");
      if (!wrapper) return;
      var placeholder = wrapper.querySelector(".form-control__placeholder, .form-control__placeholder-inner");
      if (!placeholder) return;
      placeholder.style.display = (input.value && input.value.trim() !== "") ? "none" : "block";
    });
  }
  function onEcwidReady2(cb) {
    if (window.Ecwid && window.Ecwid.OnAPILoaded) { Ecwid.OnAPILoaded.add(cb); }
    else { setTimeout(function () { onEcwidReady2(cb); }, 300); }
  }
  onEcwidReady2(function () {
    Ecwid.OnPageLoaded.add(function () {
      setTimeout(hideFilledPlaceholders, 400);
      document.addEventListener("input", hideFilledPlaceholders, true);
      document.addEventListener("change", hideFilledPlaceholders, true);
    });
  });
  setInterval(hideFilledPlaceholders, 600);
})();

/* ---------- 4) صندوق ديما العالمي العام بصفحة المنتج ---------- */
(function () {
  var DEEMA_LOGO_URL = "https://d2j6dbq0eux0bg.cloudfront.net/images/111279331/products/751178105/5876472265.png";
  function tryRun() { addDeemaProductBadge(); addQuantityStepper(); }
  tryRun(); setInterval(tryRun, 1000);
  function addDeemaProductBadge() {
    var priceElements = document.querySelectorAll(".product-details__product-price, .details-product-purchase__price, .product-details__price");
    var targetPriceEl = null;
    for (var j = 0; j < priceElements.length; j++) {
      var el = priceElements[j];
      if (!el.closest('.ec-store__product-page--sticky-panel') && !el.closest('.ec-cart-fixed')) { targetPriceEl = el; break; }
    }
    if (!targetPriceEl) return;
    var priceText = targetPriceEl.textContent.replace(/[^\d.]/g, "");
    var price = parseFloat(priceText);
    if (!price || isNaN(price)) return; if (price < 7) return;
    var isAr = document.documentElement.lang === 'ar' || (document.querySelector('html') && document.querySelector('html').getAttribute('lang') === 'ar');
    var existing = document.getElementById("sc-deema-badge");
    if (existing && existing.dataset.price === String(price) && existing.dataset.lang === (isAr ? 'ar' : 'en')) return; 
    if (existing) existing.remove();
    var p2 = (price / 2).toFixed(3); var p3 = (price / 3).toFixed(3); var p4 = (price / 4).toFixed(3);
    var badge = document.createElement("div");
    badge.id = "sc-deema-badge"; badge.dataset.price = String(price); badge.dataset.lang = isAr ? 'ar' : 'en';
    var currentDirection = isAr ? "rtl" : "ltr";
    badge.style.cssText = "margin:12px 0;padding:12px 15px;border:1px solid #00E5FF;border-radius:8px;font-size:13.5px;line-height:1.6;display:flex;align-items:center;gap:12px;background:#0a0a0a;color:#ffffff !important;box-shadow:0 4px 15px rgba(0, 229, 255, 0.1);direction:" + currentDirection + "; text-align:" + (isAr ? "right" : "left") + "; flex-wrap:wrap;";
    if (isAr) {
      badge.innerHTML = '<img src="' + DEEMA_LOGO_URL + '" alt="deema" style="height:32px !important;width:auto !important;flex-shrink:0;" /><span style="color:#ffffff !important; font-family:\'Cairo\', sans-serif !important; font-weight:700 !important;">قسّطها مع ديما: 2 دفعات (' + p2 + ' د.ك) أو 3 دفعات (' + p3 + ' د.ك) أو 4 دفعات (' + p4 + ' د.ك)</span>';
    } else {
      badge.innerHTML = '<img src="' + DEEMA_LOGO_URL + '" alt="deema" style="height:32px !important;width:auto !important;flex-shrink:0;" /><span style="color:#ffffff !important; font-family:\'Orbitron\', sans-serif !important; font-weight:700 !important; letter-spacing:0.3px;">Split it with Deema: 2 payments (' + p2 + ' KD), 3 payments (' + p3 + ' KD), or 4 payments (' + p4 + ' KD)</span>';
    }
    targetPriceEl.insertAdjacentElement("afterend", badge);
  }
  function addQuantityStepper() {
    if (window.innerWidth > 767) return;
    var qtyInput = document.querySelector('input[name="quantity"], .details-product-purchase__quantity input, .form-control__quantity');
    if (!qtyInput) return;
    if (qtyInput.dataset.scStepperAdded === "true") return; // ✅ تصحيح: كانت = بدل === (تعيين بدل مقارنة، يمنع الميزة من العمل نهائيًا)
    qtyInput.dataset.scStepperAdded = "true";
    var wrapper = document.createElement("div"); wrapper.style.cssText = "display:flex;align-items:center;gap:8px;";
    var minusBtn = document.createElement("button"); minusBtn.type = "button"; minusBtn.textContent = "−"; minusBtn.style.cssText = "width:36px;height:36px;font-size:18px;border:1px solid #ccc;border-radius:6px;background:#fff;color:#000;";
    var plusBtn = document.createElement("button"); plusBtn.type = "button"; plusBtn.textContent = "+"; plusBtn.style.cssText = minusBtn.style.cssText;
    qtyInput.style.cssText += "text-align:center;width:50px;color:#000;"; qtyInput.parentNode.insertBefore(wrapper, qtyInput); wrapper.appendChild(minusBtn); wrapper.appendChild(qtyInput); wrapper.appendChild(plusBtn);
    function fireChange() { qtyInput.dispatchEvent(new Event("change", { bubbles: true })); qtyInput.dispatchEvent(new Event("input", { bubbles: true })); }
    minusBtn.addEventListener("click", function () { var val = parseInt(qtyInput.value, 10) || 1; if (val > 1) qtyInput.value = val - 1; fireChange(); });
    plusBtn.addEventListener("click", function () { var val = parseInt(qtyInput.value, 10) || 1; qtyInput.value = val + 1; fireChange(); });
  }
})();

/* ---------- 5) القنبلة الموقوتة لنسف الشريط الأسود من الموبايل ---------- */
(function nukeStickyBar() { setInterval(function() { var stickyBars = document.querySelectorAll('.ec-cart-fixed, .ec-store__product-page--sticky-panel, .details-product-purchase__controls--mobile-sticky'); stickyBars.forEach(function(bar) { bar.remove(); }); }, 500); })();

/* ---------- 6) ترجمة نص "استلام من الفرع" (Local Pickup Instructions) ---------- */
(function () {
  function translatePickupInstructions() {
    document.querySelectorAll("p").forEach(function (p) {
      var t = p.textContent.trim();
      if (t === "Pickup location") {
        p.innerHTML = "<b>موقع الاستلام</b>";
      } else if (t === "Business hours") {
        p.innerHTML = "<b>ساعات العمل</b>";
      } else if (/AM|PM/.test(t) && /Mon|Fri|Wed|Sun|Sat|Thu/.test(t)) {
        p.textContent = "الأحد - الأربعاء 11ص-7م، الخميس والجمعة 10ص-10م، السبت 10ص-7م";
      }
    });
  }
  setInterval(translatePickupInstructions, 800);
})();
