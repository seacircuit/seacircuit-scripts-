/* ============================================================
   SEA CIRCUIT — footer.js (النسخة الإستراتيجية النقية المستقرة)
   ============================================================ */

/* ---------- 1) الخطوط + الفوتر + شعار ديما بالفوتر ---------- */
var link=document.createElement('link');link.rel='stylesheet';link.href='https://fonts.googleapis.com/css2?family=Cairo:wght=400;700&family=Orbitron:wght=400;700;900&display=swap';document.head.appendChild(link);
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

/* ---------- 2) إخفاء وإلغاء خلفيات التظليل الافتراضية لخيارات الدفع لمنع التشويه ---------- */
(function() {
  var style = document.createElement('style');
  style.innerHTML = '.ec-radiogroup__item .ec-radiogroup__info { background:transparent !important; border:none !important; padding:0 !important; box-shadow:none !important; }';
  document.head.appendChild(style);
})();

/* ---------- 3) حل تراكب نص التوجيه ---------- */
(function () {
  function hideFilledPlaceholders() {
    var fields = document.querySelectorAll(".ec-form .form-control__text, .ec-form input");
    fields.forEach(function (input) {
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
})();

/* ---------- 4) صندوق ديما العالمي العام بصفحة المنتج ---------- */
(function () {
  var DEEMA_LOGO_URL = "https://d2j6dbq0eux0bg.cloudfront.net/images/111279331/products/751178105/5876472265.png";

  function tryRun() {
    addDeemaProductBadge();
    addQuantityStepper();
  }
  tryRun();
  setInterval(tryRun, 1000);

  function addDeemaProductBadge() {
    var priceElements = document.querySelectorAll(".product-details__product-price, .details-product-purchase__price, .product-details__price");
    var targetPriceEl = null;
    
    for (var j = 0; j < priceElements.length; j++) {
      var el = priceElements[j];
      if (!el.closest('.ec-store__product-page--sticky-panel') && !el.closest('.ec-cart-fixed')) {
        targetPriceEl = el;
        break;
      }
    }
    
    if (!targetPriceEl) return;

    var priceText = targetPriceEl.textContent.replace(/[^\d.]/g, "");
    var price = parseFloat(priceText);
    if (!price || isNaN(price)) return;
    if (price < 7) return;

    var isAr = document.documentElement.lang === 'ar' || (document.querySelector('html') && document.querySelector('html').getAttribute('lang') === 'ar');

    var existing = document.getElementById("sc-deema-badge");
    if (existing && existing.dataset.price === String(price) && existing.dataset.lang === (isAr ? 'ar' : 'en')) return; 
    if (existing) existing.remove();

    var p2 = (price / 2).toFixed(3);
    var p3 = (price / 3).toFixed(3);
    var p4 = (price / 4).toFixed(3);

    var badge = document.createElement("div");
    badge.id = "sc-deema-badge";
    badge.dataset.price = String(price);
    badge.dataset.lang = isAr ? 'ar' : 'en';
    
    var currentDirection = isAr ? "rtl" : "ltr";
    
    badge.style.cssText =
      "margin:12px 0;padding:12px 15px;border:1px solid #00E5FF;border-radius:8px;" +
      "font-size:13.5px;line-height:1.6;display:flex;align-items:center;gap:12px;" +
      "background:#0a0a0a;color:#ffffff !important;box-shadow:0 4px 15px rgba(0, 229, 255, 0.1);" +
      "direction:" + currentDirection + "; text-align:" + (isAr ? "right" : "left") + "; flex-wrap:wrap;";

    if (isAr) {
      badge.innerHTML =
        '<img src="' + DEEMA_LOGO_URL + '" alt="deema" style="height:32px !important;width:auto !important;flex-shrink:0;" />' +
        '<span style="color:#ffffff !important; font-family:\'Cairo\', sans-serif !important; font-weight:700 !important;">قسّطها مع ديمة: 2 دفعات (' + p2 + ' د.ك) أو 3 دفعات (' + p3 + ' د.ك) أو 4 دفعات (' + p4 + ' د.ك)</span>';
    } else {
      badge.innerHTML =
        '<img src="' + DEEMA_LOGO_URL + '" alt="deema" style="height:32px !important;width:auto !important;flex-shrink:0;" />' +
        '<span style="color:#ffffff !important; font-family:\'Orbitron\', sans-serif !important; font-weight:700 !important; letter-spacing:0.3px;">Split it with Deema: 2 payments (' + p2 + ' KD), 3 payments (' + p3 + ' KD), or 4 payments (' + p4 + ' KD)</span>';
    }

    targetPriceEl.insertAdjacentElement("afterend", badge);
  }

  function addQuantityStepper() {
    if (window.innerWidth > 767) return;
    var qtyInput = document.querySelector('input[name="quantity"], .details-product-purchase__quantity input, .form-control__quantity');
    if (!qtyInput) return;
    if (qtyInput.dataset.scStepperAdded) return;
    qtyInput.dataset.scStepperAdded = "true";
    var wrapper = document.createElement("div");
    wrapper.style.cssText = "display:flex;align-items:center;gap:8px;";
    var minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.textContent = "−";
    minusBtn.style.cssText = "width:36px;height:36px;font-size:18px;border:1px solid #ccc;border-radius:6px;background:#fff;color:#000;";
    var plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.textContent = "+";
    plusBtn.style.cssText = minusBtn.style.cssText;
    qtyInput.style.cssText += "text-align:center;width:50px;color:#000;";
    qtyInput.parentNode.insertBefore(wrapper, qtyInput);
    wrapper.appendChild(minusBtn);
    wrapper.appendChild(qtyInput);
    wrapper.appendChild(plusBtn);
    function fireChange() {
      qtyInput.dispatchEvent(new Event("change", { bubbles: true }));
      qtyInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
    minusBtn.addEventListener("click", function () {
      var val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) qtyInput.value = val - 1;
      fireChange();
    });
    plusBtn.addEventListener("click", function () {
      var val = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = val + 1;
      fireChange();
    });
  }
})();

/* ---------- 5) القنبلة الموقوتة لنسف الشريط الأسود من الموبايل ---------- */
(function nukeStickyBar() {
  setInterval(function() {
    var stickyBars = document.querySelectorAll('.ec-cart-fixed, .ec-store__product-page--sticky-panel, .details-product-purchase__controls--mobile-sticky');
    stickyBars.forEach(function(bar) { 
      bar.remove();
    });
  }, 500);
})();
