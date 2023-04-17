---
'@ag.ds-next/react': minor
---

Replaced react spring animations with CSS animations/transitions. This change still keeps meaningful animations in the design system, but removes around 19.4kB from our minified bundle when compressed. Animations that can't be replaced with CSS (i.e. animating height) have been removed.

Accordion: Removed height animation and replaced chevron icon react spring animation with CSS animation

Call to action: Removed icon animation on hover as it is inconsistent with AgDS interactions. 

Loading: Replaced react spring animation with CSS animation 

Modal: Replaced react spring animation with CSS animation 

Progress indicator: Removed accordion height animation from mobile version

Side nav: Removed accordion height animation from mobile version

Skeleton: Replaced react spring animation with CSS animation

Switch: Replaced react spring animation with CSS animation
