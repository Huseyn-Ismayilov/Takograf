// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();

// 	if (scroll >= 250) {
// 		$(".site_header").addClass("scroll_down");
// 	} else {
// 		$(".site_header").removeClass("scroll_down");
// 	}
// });

//
function cycleImages() {
  var $active = $("#cycler .active");
  var $next =
    $active.next().length > 0 ? $active.next() : $("#cycler div:first");

  $active.removeClass("active").addClass("exit");
  $next.addClass("active");

  setTimeout(function () {
    $active.removeClass("exit");
    $active.css("z-index", 1);
    $next.css("z-index", 3);
  }, 1000); // transition süresiyle eşleşmeli
}
$(document).ready(function () {
  setInterval("cycleImages()", 2000);
});

//

function cycleImages1() {
  var $active1 = $("#cycler1 .active");
  var $next1 =
    $active1.next().length > 0 ? $active1.next() : $("#cycler1 div:first");
  $next1.css("z-index", 2);
  $active1.fadeOut(700, function () {
    $active1.css("z-index", 1).removeClass("active");
    $next1.css("z-index", 3).addClass("active");
  });
}

$(document).ready(function () {
  setInterval("cycleImages1()", 2000);
});
//

// function cycleImages2() {
//   var $active0 = $("#cycler2 .active");
//   var $next0 = $active0.next().length > 0 ? $active0.next() : $("#cycler2 div:first");

//   $active0.removeClass("active").addClass("exit");
//   $next0.addClass("active");

//   setTimeout(function () {
//     $active0.removeClass("exit");
//     $active0.css("z-index", 1);
//     $next0.css("z-index", 3);
//   }, 1000); // transition süresiyle eşleşmeli
// }
// $(document).ready(function () {
//   setInterval("cycleImages2()", 2000);
// });
$(document).ready(function () {
  const total = 3;
  const labels = ["label-ferry", "label-train", "label-out"];
  let current = 0;

  setInterval(function () {
    const $currentImg = $("#cycler2 .type" + (current + 1));
    const $currentLabel = $(".label." + labels[current]);

    current = (current + 1) % total;

    const $nextImg = $("#cycler2 .type" + (current + 1));
    const $nextLabel = $(".label." + labels[current]);

    // 1. transition kapalı, next'i aşağıya yerleştir
    $nextImg[0].style.transition = "none";
    $nextImg[0].style.transform = "translateY(100%)";

    // 2. iki frame bekle — tarayıcı kesin uygulasın
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // 3. transition'ı aç
        $nextImg[0].style.transition = "";
        $nextImg[0].style.transform = "";

        // 4. animasyonları başlat
        $currentImg[0].style.transform = "translateY(-100%)";
        $currentLabel.removeClass("active");

        $nextImg.addClass("active");
        $nextLabel.addClass("active");

        // 5. temizlik
        setTimeout(function () {
          $currentImg.removeClass("active");
          $currentImg[0].style.transform = "";
        }, 650);
      });
    });
  }, 1500);
});
//

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".site_header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $(".site_header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $(".site_header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

//

$(".site_header .toggle, .mobile_menu .close_btn").click(function () {
  $(".mobile_menu").toggleClass("opened");
  $(".nav_menu").toggleClass("opened");
  $(".site_header .toggle").toggleClass("opened");
});

$(".mobile_menu .menu .dropdown .nav_link").click(function (e) {
  $(this).next().toggleClass("opened");
  return false;
});
$(".mobile_menu .menu .back_btn").click(function (e) {
  $(this).parent().removeClass("opened");
});

// end

// end
$(document).click(function (event) {
  if (
    !$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length
  ) {
    $("body").find(".mobile_menu .inner").parent().removeClass("opened");
    $(".site_header .toggle").removeClass("opened");
  }
});

$(document).ready(function () {
  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.1,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * 0.1 + "px, 0)",
        });
      }
    });
  });
});

$(".accardion_list .accardion_item .head").click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass("opened");
});

$(".product_features .feature_items .item .plus_btn").click(function () {
  $(this).parent().toggleClass("opened");
  $(this).toggleClass("opened");
});

// if ($(window).width() < 991) {
//   $(".site_header .try_free_btn").html("Uygulamayı indirin");
//   $(".download_app .content > p").html(
//     "Otomatik takograf pilotu. <br> Faaliyetlerinize dair tüm detaylar artık elinizin altında. Sadece size özel kusursuz bir takograf <br> uzmanı.",
//   );
// }

// Start

const planets = [
  { id: "p1", r: 0.39, angle: 0, orbit: "inner" },
  { id: "p2", r: 0.39, angle: 70, orbit: "inner" },
  { id: "p3", r: 0.39, angle: 160, orbit: "inner" },
  { id: "p4", r: 0.7, angle: 0, orbit: "outer" },
  { id: "p5", r: 0.7, angle: 90, orbit: "outer" },
  { id: "p6", r: 0.7, angle: 200, orbit: "outer" },
  { id: "p7", r: 0.7, angle: 270, orbit: "outer" },
];

const els = planets.map((p) => ({ ...p, el: $("#" + p.id) }));

let speedInner = 0.1;
let speedOuter = 0.29;
// let speedInner = 0.0;
// let speedOuter = 0.0;
let last = null;

function step(ts) {
  if (!last) last = ts;
  const dt = (ts - last) / 1000;
  last = ts;

  const stageW = $(".stage").width();
  const cx = stageW / 2;
  const cy = stageW / 2;
  const planetSize = stageW * 0.13;

  $.each(els, function (i, p) {
    const spd = p.orbit === "inner" ? speedInner : speedOuter;
    p.angle += spd * 50 * dt;
    const rad = (p.angle * Math.PI) / 180;
    const r = stageW * p.r;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    p.el.css({
      left: x - planetSize / 2 + "px",
      top: y - planetSize / 2 + "px",
    });
  });

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
// End

// Start

function initSlider(trackSelector) {
  const track = document.querySelector(trackSelector);
  if (!track) return;

  let pos = 0;
  const speed = trackSelector.includes("track-1")
    ? 0.5
    : trackSelector.includes("track-3")
      ? 1.6
      : 0.3;

  function getHalfWidth() {
    return track.scrollWidth / 2;
  }

  function tick() {
    pos += speed;
    if (pos >= getHalfWidth()) {
      pos = 0;
    }
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

initSlider(".track-1");
initSlider(".track-2");
initSlider(".track-3");

// Translate site
const translations = {
  tr: {
    title: "Bu sayfa Türkçe",
    desc: "Türkçe olarak görüntülüyorsunuz.",
    translate: "Çevir",
    keep: "Türkçe kalsın",
  },
  en: {
    title: "This page is in Turkish",
    desc: "Would you like to translate it to <strong>English</strong>?",
    translate: "Translate",
    keep: "Keep Turkish",
  },
  fr: {
    title: "Cette page est en turc",
    desc: "Voulez-vous la traduire en <strong>français</strong> ?",
    translate: "Traduire",
    keep: "Garder en turc",
  },
  de: {
    title: "Diese Seite ist auf Türkisch",
    desc: "Möchten Sie sie auf <strong>Deutsch</strong> übersetzen?",
    translate: "Übersetzen",
    keep: "Türkisch behalten",
  },
  es: {
    title: "Esta página está en turco",
    desc: "¿Desea traducirla al <strong>español</strong>?",
    translate: "Traducir",
    keep: "Mantener turco",
  },
  ar: {
    title: "هذه الصفحة باللغة التركية",
    desc: "هل تريد ترجمتها إلى <strong>العربية</strong>؟",
    translate: "ترجمة",
    keep: "الإبقاء بالتركية",
  },
  ru: {
    title: "Эта страница на турецком",
    desc: "Хотите перевести на <strong>русский</strong>?",
    translate: "Перевести",
    keep: "Оставить турецкий",
  },
};

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "tr",
      autoDisplay: false,
    },
    "google_translate_element",
  );
}

function closeBanner() {
  $("#translate-banner").hide();
}

function doTranslate() {
  var lang = navigator.language.split("-")[0];
  var targetLang = lang !== "tr" ? lang : "en";

  var $btn = $(".tb-btn-primary");
  var originalText = $btn.text();
  $btn
    .prop("disabled", true)
    .html('<span class="tb-spinner"></span> ' + originalText);

  // Cookie set et ve sayfayı yenile — Google bunu okuyup çevirir
  document.cookie = "googtrans=/tr/" + targetLang + "; path=/";
  document.cookie =
    "googtrans=/tr/" + targetLang + "; path=/; domain=." + location.hostname;

  setTimeout(function () {
    location.reload();
  }, 800); // spinner'ın görünmesi için kısa bekle
}
$(document).ready(function () {
  var lang = navigator.language.split("-")[0];

  if (lang === "tr") {
    $("#translate-banner").hide();
    return;
  }

  var t = translations[lang] || translations["en"];

  $(".tb-header span").text(t.title);
  $(".tb-desc").html(t.desc);
  $(".tb-btn-primary").text(t.translate);
  $(".tb-btn-secondary").text(t.keep);
});
function closeBanner() {
  $("#translate-banner").hide();
  $("#translate-toggle-btn").show(); // sağ üstte buton çıksın
}
function openBanner() {
  $("#translate-banner").show();
  $("#translate-toggle-btn").hide();
}

// Text animation
$(function () {
  function isMobile() {
    return window.innerWidth <= 991;
  }

  /* ── metni kelimelere ayır ── */
  function initWr() {
    if (!isMobile()) return;

    $(".wr").each(function () {
      var $el = $(this);
      if ($el.data("wr-done")) return;
      $el.data("wr-done", true);

      var cs = getComputedStyle(this);
      var from = cs.getPropertyValue("--from").trim();
      var to = cs.getPropertyValue("--to").trim();
      var isGradient = $el.hasClass("gradient");

      var parts = $el.text().trim().split(/(\s+)/);
      var html = "";

      parts.forEach(function (token) {
        if (/^\s+$/.test(token)) {
          html += token;
        } else {
          if (isGradient) {
            html += `<span class="w" style="color:${from}">${token}</span>`;
          } else {
            html += `<span class="w" style="color:${from}">${token}</span>`;
          }
        }
      });

      $el.html(html);
    });
  }

  /* ── scroll ── */
  function update() {
    var scrollY = window.scrollY;
    var wh = window.innerHeight;

    $(".wr_wrap").each(function () {
      var $wrap = $(this);

      var rect = this.getBoundingClientRect();
      var start = scrollY + rect.top - wh * 0.9;
      var end = scrollY + rect.bottom - wh * 0.4;

      var progress = Math.min(
        Math.max((scrollY - start) / (end - start), 0),
        1,
      );

      var wrs = $wrap.find(".wr");

      wrs.each(function (wrIndex) {
        var $wr = $(this);
        var cs = getComputedStyle(this);

        var from = cs.getPropertyValue("--from").trim();
        var to = cs.getPropertyValue("--to").trim();
        var isGradient = $wr.hasClass("gradient");
        var speed = parseFloat($wr.data("speed") || 300);

        var words = $wr.find(".w");

        var total = words.length;

        var localProgress = Math.min(
          Math.max(progress * wrs.length - wrIndex, 0),
          1,
        );

        var revealed = Math.round(localProgress * total);

        words.each(function (i) {
          if (!isGradient) {
            this.style.color = i < revealed ? to : from;
            return;
          }

          if (i < revealed) {
            this.style.background = `linear-gradient(315deg, ${from}, ${to})`;
            this.style.webkitBackgroundClip = "text";
            this.style.webkitTextFillColor = "transparent";
          } else {
            this.style.background = "";
            this.style.webkitBackgroundClip = "";
            this.style.webkitTextFillColor = "";
            this.style.color = from;
          }
        });
      });
    });
  }

  initWr();
  update();

  $(window).on("scroll resize", function () {
    initWr();
    update();
  });
});
