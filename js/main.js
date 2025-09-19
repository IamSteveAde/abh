/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	
	/*------------------
		Review
	--------------------*/
	var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");


    review_text.on('changed.owl.carousel', function(event) {
		review_meta.trigger('next.owl.carousel');
	});

	review_meta.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
	});


	review_text.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
		animateOut: 'fadeOutDown',
    	animateIn: 'fadeInDown',
	});



	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });


})(jQuery);

// Reveal cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".impact-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});
// Scroll-reveal animation for roadmap
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});
// Reveal partner cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".partner-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});
// Reveal contact cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".contact-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});
// Reveal solution cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const solutionCards = document.querySelectorAll(".solution-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  solutionCards.forEach((card) => observer.observe(card));
});

// Header & tagline reveal + typewriter for tagline
const header = document.querySelector('.showcase-title');
const tagline = document.querySelector('.showcase-tagline');
const text = tagline.dataset.text;

let taglineIndex = 0;

function typeWriter() {
  if (taglineIndex < text.length) {
    tagline.textContent += text.charAt(taglineIndex);
    taglineIndex++;
    setTimeout(typeWriter, 50);
  }
}

function revealHeader() {
  const trigger = window.innerHeight / 1.1;
  if (header.getBoundingClientRect().top < trigger) {
    header.classList.add('visible');
    tagline.classList.add('visible');
    typeWriter();
  }
}

window.addEventListener('scroll', revealHeader);
window.addEventListener('load', revealHeader);
// Animate cards on scroll
const cards = document.querySelectorAll('.showcase-card');

function revealCards() {
  const triggerBottom = window.innerHeight / 1.1;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);
// Tabs interaction
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const tabImages = document.querySelectorAll('.tab-image');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    // Update tabs
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update panels
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === target);
    });

    // Update images
    tabImages.forEach(img => {
      img.classList.toggle('active', img.id === `img-${target}`);
    });
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('.about-abc-title, .tab-panel, .tab-image');

function revealOnScroll() {
  const triggerBottom = window.innerHeight / 1.1;

  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// IntersectionObserver for fade-in
const slides = document.querySelectorAll('.solution-slide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      typeWriter(entry.target.querySelector('.solution-desc'));
    }
  });
}, { threshold: 0.5 });

slides.forEach(slide => observer.observe(slide));

// Typewriter effect
function typeWriter(element) {
  if(element.getAttribute('data-typed')) return; // prevent retyping
  const text = element.getAttribute('data-text');
  element.setAttribute('data-typed', true);
  element.textContent = '';
  element.style.opacity = 1;
  let i = 0;
  const speed = 20; // ms per character
  function type() {
    if(i < text.length){
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
const impactCards = document.querySelectorAll('.impact-item');

function revealImpact() {
  const trigger = window.innerHeight * 0.85;
  impactCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      setTimeout(() => card.classList.add('in-view'), index * 150);
    }
  });
}

window.addEventListener('scroll', revealImpact);
revealImpact();
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".roadmap-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});
document.addEventListener("DOMContentLoaded", () => {
  const partnerCards = document.querySelectorAll(".partner-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("show"), idx * 200);
      }
    });
  }, { threshold: 0.25 });

  partnerCards.forEach(card => observer.observe(card));
});
window.addEventListener('scroll', () => {
  const section = document.querySelector('#contact');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    section.classList.add('animate');
  }
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    // Toggle active class
    item.classList.toggle('active');

    // Close others if needed
    faqItems.forEach(other => {
      if(other !== item) other.classList.remove('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.conv-subtitle, .conv-title, .conv-desc');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.3 // triggers when 30% visible
  });

  elements.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {

  // ===== Split text into words and characters (preserve <span>, <br>) =====
  function fragmentFromNode(node) {
    const frag = document.createDocumentFragment();

    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        // Split by words but keep the whitespace
        const words = child.textContent.split(/(\s+)/);
        words.forEach(token => {
          if (/^\s+$/.test(token)) {
            frag.appendChild(document.createTextNode(token)); // plain space
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            for (const ch of token) {
              const charSpan = document.createElement('span');
              charSpan.className = 'char';
              charSpan.textContent = ch;
              wordSpan.appendChild(charSpan);
            }
            frag.appendChild(wordSpan);
          }
        });

      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName === 'BR') {
          frag.appendChild(document.createElement('br'));
        } else {
          // Clone inline elements (like <span style="color">)
          const clone = child.cloneNode(false);
          clone.appendChild(fragmentFromNode(child));
          frag.appendChild(clone);
        }
      }
    });

    return frag;
  }

  // ===== Prepare & observe all headings =====
  document.querySelectorAll('.succession-title').forEach(title => {
    const frag = fragmentFromNode(title);
    title.innerHTML = '';
    title.appendChild(frag);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const chars = entry.target.querySelectorAll('.char');

        if (entry.isIntersecting) {
          // Reset & add stagger delay
          chars.forEach((ch, i) => {
            ch.classList.remove('animate');
            ch.style.animationDelay = `${i * 0.03}s`;
          });

          // Force reflow to restart animation
          void entry.target.offsetWidth;

          chars.forEach(ch => ch.classList.add('animate'));

        } else {
          // Remove class so it can replay
          chars.forEach(ch => {
            ch.classList.remove('animate');
            ch.style.animationDelay = '';
          });
        }
      });
    }, { threshold: 0.2 });

    observer.observe(title);
  });

});
/* ===== Small JS helper: ensure layout recalcs on orientation change and initial load ===== */
(function () {
  function recalcPanels() {
    // trigger resize handler already in your script (re-applies flex-basis & active panel)
    window.dispatchEvent(new Event('resize'));
  }

  // On orientation change (mobile rotate), wait briefly then recalc
  window.addEventListener('orientationchange', () => {
    setTimeout(recalcPanels, 250);
  });

  // Also run once on load after a short delay (ensures CSS media queries applied)
  window.addEventListener('load', () => setTimeout(recalcPanels, 120));
})();
(function () {
  document.addEventListener('DOMContentLoaded', () => {

    // small throttle helper
    function throttle(fn, wait = 150) {
      let last = 0, t = null;
      return function (...args) {
        const now = Date.now();
        if (last && now < last + wait) {
          clearTimeout(t);
          t = setTimeout(() => { last = Date.now(); fn.apply(this, args); }, wait - (now - last));
        } else {
          last = now;
          fn.apply(this, args);
        }
      };
    }

    // Use a unique local name so we don't collide with existing globals
    const impactCards = Array.from(document.querySelectorAll('.nova-card'));
    if (!impactCards.length) {
      console.warn('[impact-anim] no .nova-card elements found.');
      return;
    }

    const options = { threshold: 0.25 };

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible'); // remove to allow replay on re-enter
        }
      });
    }

    // IntersectionObserver path (preferred)
    if ('IntersectionObserver' in window) {
      const impactObserver = new IntersectionObserver(handleIntersect, options);
      impactCards.forEach(c => impactObserver.observe(c));
      // Optional debug handle (non-conflicting)
      window.__impactAnim = { observer: impactObserver };
    } else {
      // Fallback for older browsers: viewport check with throttled scroll
      function checkInView() {
        const h = window.innerHeight || document.documentElement.clientHeight;
        impactCards.forEach(el => {
          const r = el.getBoundingClientRect();
          const inView = (r.top < h * 0.85) && (r.bottom > h * 0.15);
          el.classList.toggle('is-visible', !!inView);
        });
      }
      checkInView();
      window.addEventListener('scroll', throttle(checkInView, 120), { passive: true });
      window.addEventListener('resize', throttle(checkInView, 200));
      window.__impactAnim = { fallback: true };
    }

    // If new .nova-card nodes are added dynamically, observe them too
    if ('MutationObserver' in window) {
      const mo = new MutationObserver(muts => {
        let added = [];
        muts.forEach(m => {
          m.addedNodes && m.addedNodes.forEach(n => {
            if (n.nodeType === 1 && n.matches && n.matches('.nova-card')) added.push(n);
            // also check subtree for inserted cards
            if (n.querySelectorAll) added.push(...Array.from(n.querySelectorAll('.nova-card')));
          });
        });
        if (added.length) {
          // ensure unique entries
          const newOnes = added.filter(a => !impactCards.includes(a));
          newOnes.forEach(n => {
            impactCards.push(n);
            if (window.__impactAnim && window.__impactAnim.observer) {
              window.__impactAnim.observer.observe(n);
            } else {
              // if fallback path, run a visibility check immediately
              n.classList.toggle('is-visible', (n.getBoundingClientRect().top < (window.innerHeight * 0.85)));
            }
          });
        }
      });
      mo.observe(document.body, { childList: true, subtree: true });
      window.__impactAnim.mo = mo;
    }

  }); // DOMContentLoaded
})();
/* ---------- Safe, self-contained reveal script for .stellar-node ----------
   - uses IntersectionObserver when available
   - falls back to a rAF-based scroll check if not
   - automatically calculates a subtle per-node stagger (doesn't collide with
     other observer variables)
*/
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const NODE_SEL = '.stellar-node';
    const nodes = Array.from(document.querySelectorAll(NODE_SEL));
    if (!nodes.length) return;

    // set data-order attributes for predictable fallback staggering
    nodes.forEach((n, i) => n.setAttribute('data-order', String(i)));

    // small helper: compute a small delay based on position in viewport
    function computeDelay(rect, vh) {
      // normalized 0..1 (top..bottom)
      const top = Math.max(0, Math.min(rect.top, vh));
      const normalized = 1 - Math.min(1, top / vh);
      // produce a delay 0s..0.22s biased by vertical position
      return (1 - normalized) * 0.22;
    }

    function revealElement(el, delay) {
      if (typeof delay === 'number') el.style.setProperty('--stagger', `${delay}s`);
      el.classList.add('revealed');
    }
    function hideElement(el, delay) {
      if (typeof delay === 'number') el.style.setProperty('--stagger', `${delay}s`);
      el.classList.remove('revealed');
    }

    const THRESH = 0.18;
    const ROOT_MARGIN = '0px 0px -8% 0px';

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;
          const d = computeDelay(rect, vh);
          if (entry.isIntersecting) {
            revealElement(el, d);
          } else {
            // remove to allow replay when re-entering view
            hideElement(el, d);
          }
        });
      }, { threshold: THRESH, rootMargin: ROOT_MARGIN });

      nodes.forEach(n => io.observe(n));

      // expose for debug but avoid collisions
      window.__stellarNodeObserver = io;
      return;
    }

    // Fallback: rAF-based visibility check (safe, no global observer)
    let ticking = false;
    function check() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      nodes.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < vh * (1 - THRESH) && rect.bottom > vh * THRESH;
        const d = computeDelay(rect, vh);
        el.style.setProperty('--stagger', `${d}s`);
        el.classList.toggle('revealed', !!inView);
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // initial check
    onScroll();
  });
})();
/* ====== Scroll reveal for the cards (self-contained) ====== */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.stellar-card');
  if (!cards.length) return;

  function revealCards() {
    const vh = window.innerHeight;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < vh * 0.85) {
        card.classList.add('reveal');
      } else {
        card.classList.remove('reveal');
      }
    });
  }

  window.addEventListener('scroll', revealCards, { passive: true });
  window.addEventListener('resize', revealCards);
  revealCards(); // initial check
});
/* ====== Scroll reveal for image & form ====== */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.orbit-image-wrapper, .orbit-form-container');

  function revealOnScroll() {
    const vh = window.innerHeight;
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < vh * 0.85){
        el.classList.add('reveal');
      } else {
        el.classList.remove('reveal');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('resize', revealOnScroll);
  revealOnScroll();
});
