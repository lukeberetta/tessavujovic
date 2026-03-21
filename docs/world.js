const ITEMS = {
  guitar: {
    icon: '🎸',
    title: 'Guitar',
    text: 'I play guitar — badly and happily. Mostly fingerpicked folk and whatever song is stuck in my head that week.',
  },
  map: {
    icon: '🗺',
    title: 'Map',
    text: "I've lived and worked across three continents. Cape Town is home, but I'm usually somewhere between here and there.",
  },
  stove: {
    icon: '🍳',
    title: 'Stove',
    text: 'I make a mean stuffed pepper. Ask me for the recipe.',
  },
  book: {
    icon: '📖',
    title: 'Book',
    text: 'Currently reading: [placeholder]. Usually something between design theory and a novel I definitely should have read by now.',
  },
  artwork: {
    icon: '🖼',
    title: 'Artwork',
    text: 'I take photos everywhere I go. This one is from [placeholder] — a place that stayed with me.',
  },
  laptop: {
    icon: '💻',
    title: 'Laptop',
    text: 'Lead Product Designer at KoboToolbox. I design tools that help humanitarian organisations collect data in the hardest-to-reach places.',
  },
  sewing: {
    icon: '🧵',
    title: 'Sewing Machine',
    text: 'I sew. Badly. But enthusiastically. Currently attempting [placeholder].',
  },
};

const character  = document.getElementById('character');
const floorPlan  = document.getElementById('floorPlan');
const infoCard   = document.getElementById('infoCard');
const infoIcon   = document.getElementById('infoIcon');
const infoTitle  = document.getElementById('infoTitle');
const infoText   = document.getElementById('infoText');
const infoClose  = document.getElementById('infoClose');

let moveTimer = null;

function moveCharacterTo(itemEl, key) {
  const planRect = floorPlan.getBoundingClientRect();
  const itemRect = itemEl.getBoundingClientRect();

  // Item center relative to floor plan
  const cx = itemRect.left - planRect.left + itemRect.width  / 2;
  const cy = itemRect.top  - planRect.top  + itemRect.height / 2;

  // Character dimensions
  const charW = 38;
  const charH = 52;

  // Land the character with its center near the item
  const targetLeft = Math.max(0, Math.min(cx - charW / 2, planRect.width  - charW));
  const targetTop  = Math.max(0, Math.min(cy - charH / 2, planRect.height - charH));

  character.style.left = targetLeft + 'px';
  character.style.top  = targetTop  + 'px';

  // Dismiss any open card, then show after transition
  hideCard();
  clearTimeout(moveTimer);
  moveTimer = setTimeout(() => showCard(key), 580);
}

function showCard(key) {
  const data = ITEMS[key];
  if (!data) return;
  infoIcon.textContent  = data.icon;
  infoTitle.textContent = data.title;
  infoText.textContent  = data.text;
  infoCard.classList.add('is-visible');
}

function hideCard() {
  infoCard.classList.remove('is-visible');
}

// Wire up item clicks
document.querySelectorAll('.item').forEach(function (item) {
  item.addEventListener('click', function () {
    moveCharacterTo(item, item.dataset.key);
  });
});

// Close button
infoClose.addEventListener('click', hideCard);

// Click outside items/card closes the card
document.addEventListener('click', function (e) {
  if (!e.target.closest('.item') && !e.target.closest('.info-card')) {
    hideCard();
  }
});
