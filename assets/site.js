/* Imanto — reveal on scroll (respeita prefers-reduced-motion) */
(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in");});
    return;
  }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
  },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal").forEach(function(el,i){
    el.style.transitionDelay=(Math.min(i,6)*55)+"ms";io.observe(el);
  });
})();
