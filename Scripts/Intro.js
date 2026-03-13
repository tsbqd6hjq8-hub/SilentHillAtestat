document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.PHimage');
  const Lefttext = document.querySelectorAll('.LeftDescpText')
  const Righttext = document.querySelectorAll('.RightDescpText')
  const SHtitle = document.querySelectorAll('.SHtitle')

  const SH2RE_display = document.querySelectorAll('.SilentHill2RE-display')
  const SHF_display = document.querySelectorAll('.SilentHillF-display')
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Delay appearance by 300ms
        setTimeout(() => {
          entry.target.classList.add('visible');
        });
        observer.unobserve(entry.target); // stop observing after trigger
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -650px 0px', // trigger a bit later
    threshold: 0
  });

  boxes.forEach(box => observer.observe(box));
  Lefttext.forEach(Lefttext => observer.observe(Lefttext));
  Righttext.forEach(Righttext => observer.observe(Righttext));
  SHtitle.forEach(SHtitle => observer.observe(SHtitle));

  SH2RE_display.forEach(SH2RE_display => observer.observe(SH2RE_display));
  SHF_display.forEach(SHF_display => observer.observe(SHF_display));
 
});
