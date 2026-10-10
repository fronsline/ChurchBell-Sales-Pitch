import { salesSlides } from './sales';
import { madrasPilotSlides } from './madras-pilot';

// Pick a deck with ?deck=<key>. The sales pitch stays the default at the bare URL.
const decks = {
  sales: { slides: salesSlides, title: 'ChurchBell' },
  // fitToScreen: scale slides up to fill a projector / TV (see useStageScale).
  'madras-pilot': { slides: madrasPilotSlides, title: 'ChurchBell · Madras Diocese Pilot', fitToScreen: true },
};

export function pickDeck() {
  const key = new URLSearchParams(window.location.search).get('deck');
  const deck = decks[key] || decks.sales;
  document.title = deck.title;
  return deck;
}
