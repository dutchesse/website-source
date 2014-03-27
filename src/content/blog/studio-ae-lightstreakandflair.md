---
title: "Flair and Glair"
posted: 2014-03-19
---

#Studio "Place"#
##March 19, 2014##

###After Effects, Flair & Glair###
Video [Elegant Light Streaks ][1]

- Create new composition (little movie button in Project window(PW))
- In Time Line Window (TLW) > Rclick > New > Solid > re-name to "BG" (back ground)
- in Effects and Presets Window (EPW) type Ramp > click and drag it onto BG, Black to white gradient shows in Composition Window (CW)
- in PW change settings > Radial Ramp > Ramp Scatter 300 > make darker
- In TLW > Rclick > New > Null Object (creates square in CW, controls our light streaks) > click "y", take point out of left top corner and drag it down to middle of the square
- In TLW > Rclick > New > Solid > re-name to "particle" 
- In TLW Select particle > Go up to Effects > Simulation > CC Particle Systems II > 
- in PW click on Producer > RadiusX of 0.3 > RadiusY of 0.2 > 
- in PW click on Physics > Direction Normalized > Velocity 0 > Gravity 0.3 > Direction 0 > Extra 0.1
- in PW click on Particle > max opacity 11 > change Birth and Death colors to your liking
- in PW under Producer > Position > alt + click on timer > in TLW click Null object > hit "P" to bring up it's position > select pick whip connect to Null position (puts the particles with the Null object, move time slider to make particles visible, now if I drag the null object, the particles follow).
- in TW alt/click on Position timer of the Null Object > re-name to "wiggle(1,600)" > hit play > the higher the #, the bigger the motion :)
- in EPW, type in "glow" to make it glow
- in TL, select particle > ctrl or command D x2 > In PW under Position I can change position of each light object or under Physics > Gravity  as well to create interesting effects. PLAYTIME

*Parenting up the Flair*  
- In TLW > Rclick > New > Solid > rename "Flair" > Effect > Generate > Lens Flair  
- pair it up with the Null object as above and move flair object below particle objects so they all become visible at the same time.
- Composition > Add to render Que > Render Settings > Quality best, resolution to full, make sure frame rate matched all the videos in the composition.  
- Go to Output module > format > Quicktime > format options > quality between 80 and 100 (lower is smaller file) > Animation (or photo jpg, optimise for streaming)
Quicktime is compatible with youtube and is a smaller file
leave 


