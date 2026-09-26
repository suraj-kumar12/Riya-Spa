// Centralized image library for Lotus Spa application
// All local spa photography assets with SEO-friendly descriptive names are organized here.

import lotusSpaSanctuary from '../assets/images/lotus-spa-sanctuary-viman-nagar-pune.webp';
import luxuryTreatmentSuite from '../assets/images/luxury-spa-private-treatment-suite.webp';
import organicEssentialOils from '../assets/images/organic-essential-oils-botanical-spa.webp';
import tranquilWelcomeLounge from '../assets/images/lotus-spa-tranquil-welcome-lounge.webp';
import couplesSanctuarySuite from '../assets/images/couples-spa-harmony-sanctuary-suite.webp';
import swedishMassageTherapy from '../assets/images/swedish-massage-restorative-therapy.webp';
import traditionalBalineseMassage from '../assets/images/traditional-balinese-massage-therapy.webp';
import volcanicHotStoneMassage from '../assets/images/volcanic-hot-stone-massage-therapy.webp';
import botanicalBodyScrub from '../assets/images/botanical-body-scrub-hydro-treatment.webp';
import serenityRelaxationSpa from '../assets/images/serenity-relaxation-spa-post-treatment.webp';
import hydrotherapySoakingTub from '../assets/images/hydrotherapy-soaking-tub-suite.webp';
import organicFacialRadiance from '../assets/images/organic-facial-radiance-skincare-treatment.webp';

export const LOGO_IMAGE = "/lotus-spa-logo.webp";

export const LOCAL_IMAGES = {
  lotusSpaSanctuary,
  luxuryTreatmentSuite,
  organicEssentialOils,
  tranquilWelcomeLounge,
  couplesSanctuarySuite,
  swedishMassageTherapy,
  traditionalBalineseMassage,
  volcanicHotStoneMassage,
  botanicalBodyScrub,
  serenityRelaxationSpa,
  hydrotherapySoakingTub,
  organicFacialRadiance
};

export const HERO_IMAGES = {
  main: lotusSpaSanctuary
};

export const ABOUT_IMAGES = {
  treatmentSuite: luxuryTreatmentSuite,
  essentialOils: organicEssentialOils,
  welcomeLounge: tranquilWelcomeLounge,
  couplesSanctuary: couplesSanctuarySuite
};

export const GALLERY_IMAGES = {
  reception: tranquilWelcomeLounge,
  treatmentRoom: luxuryTreatmentSuite,
  couplesSuite: couplesSanctuarySuite,
  hotStone: volcanicHotStoneMassage,
  essentialOils: organicEssentialOils,
  massage: swedishMassageTherapy,
  postTreatment: serenityRelaxationSpa,
  waterBasin: botanicalBodyScrub,
  soakingTub: hydrotherapySoakingTub,
  facial: organicFacialRadiance
};

export const SERVICE_IMAGES = {
  swedish: swedishMassageTherapy,
  deepTissue: luxuryTreatmentSuite,
  aromatherapy: organicEssentialOils,
  balinese: traditionalBalineseMassage,
  hotStone: volcanicHotStoneMassage,
  couples: couplesSanctuarySuite,
  bodyScrub: botanicalBodyScrub,
  relaxation: serenityRelaxationSpa
};

export const PACKAGE_IMAGES = {
  signature: lotusSpaSanctuary,
  couple: couplesSanctuarySuite,
  recovery: volcanicHotStoneMassage,
  express: serenityRelaxationSpa
};

const IMAGES = {
  logo: LOGO_IMAGE,
  local: LOCAL_IMAGES,
  hero: HERO_IMAGES,
  about: ABOUT_IMAGES,
  gallery: GALLERY_IMAGES,
  services: SERVICE_IMAGES,
  packages: PACKAGE_IMAGES
};

export default IMAGES;
