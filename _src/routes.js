import page from 'page';
import mediumZoom from 'medium-zoom';
import animateFooter from './animateFooter';
import animateHeadlines from './animateHeadlines';
import { animateContentIn, animateContentOut } from './animateContent';
import runDemos from './canvasDemos';
import FitText from './fittext';

const fitText = new FitText();
const zoom = mediumZoom({ background: '#000000aa' });

function fitTextElements() {
  const elements = document.querySelectorAll('.fit__text');
  elements.forEach((element) => {
    const compress = element.getAttribute('compress') || 1.0;
    const minFontSize = element.getAttribute('minFontSize') || 16;
    const maxFontSize = element.getAttribute('maxFontSize') || 1024;
    fitText.fit(element, compress, minFontSize, maxFontSize);
  });
}

// Lazy load and animate in new content
page('*', (context) => {
  // Initial page load
  if (context.init) {
    zoom.attach('.image__thumb, .image__thumb--alt');
    fitTextElements();
    animateHeadlines();
    animateFooter();
    runDemos();
    return;
  }

  const request = new window.XMLHttpRequest();
  request.onloadend = (event) => {
    if (event.target.status === 404) {
      page('/404');
    }

    const parser = new window.DOMParser();
    const newDocument = parser.parseFromString(event.target.response, 'text/html');
    const newContent = newDocument.querySelector('.content');

    animateContentIn(newContent);
    fitTextElements();
    animateHeadlines();
    animateFooter();
    runDemos();
    zoom.attach('.image__thumb, .image__thumb--alt');
  };

  request.open('GET', `${context.path}`, true);
  request.send();
});

page.exit('*', (context, next) => {
  animateContentOut().then(() => {
    zoom.detach();
    if (window.demo && window.demo.stop) {
      window.demo.stop();
    }
  }).then(next);
});

page();
