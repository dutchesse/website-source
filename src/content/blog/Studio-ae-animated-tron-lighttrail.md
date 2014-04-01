---
title: "Tron Lines"
posted: 2014-03-19
---

#Studio "Place"#
##Animated Tron Lines##
Transcripts form video [Animated Tron Lines][1]

- Composition > new Composition > 960 x 480 > OK
- Layer > new > solid > white background >  rename "LINES" > OK
- Use pen tool to create lines, (click + shift created perfect angles) > Each line creates new Mask
- Stroke effect > In EPW, type in stroke, grab it and drop it on the Lines Layer
- In PW under paint style > select "reveal original image" > 
End > set to 0 > move time to 1 second > hit little timer next to "End" (drops a key frame)
- Move slider forward a bit > change "end" percentage to 100% >If time slider is moved, you now can see the animation

####Next step: 
- Duplicate the stroke (command D) > select mask 2 > under paint style set to "on original image"
- Duplicate the stroke (command D) > select mask 3 > under paint style set to "on original image"
- Adjust timing by moving the key frames


####Add Effects:####
- Effect > Generate > fill
- Effect > Stylize Glow
 -Make sure Tron lines are color you want > set Glow threshold to 30% 

####Little leading ball of light:####
- In Project window > Composition > New Composition > background Black > OK
- Layer > new > Solid > background Black > rename Flair
- Type in Lens > Lens Flare > Drop on "Flair" layer
-Set Lens Type 105 mm > drag/drop centre to create single point > set brightness 55% (to your liking) 
- Effect > Color Correction > Tint > change as you see fit > set tint to 60%
- Effects > Color Correction > Exposure > set exposure as bright as you like
- Composition > save frame as > > File > PNG (change in render que, click on Photoshop) > save as PNG > click Render (should now show up in PW)

####Creating Null object:####
- Layer > new > null object
- Select Line Layer > hit M (mask) > select Mask Path for Mask 1 > CMD/C (copy)
 -Select Null Layer > hit P (position) > select Position > CMD/V (paste) (Path  of the line has now been copied to Null position)
- Line up the Null start/stop position with the Lines > Repeat for all lines
- Hit fn/tilda key so TW fills up screen > select Mask 1 > hit "E" > brings up stroke effect for Mask 1
- See start/end key frame, hit back arrow on left of End to go to key frames point in timeline, drag Null Line 1 position key frame directly over the 1st end key frame , hit forward > next key frame do same > lines up now the null object lines up in both position and time
- Repeat for all lines, Nulls objects now move with end of lines
- Hit fn/tilda key again > rename Null objects to avoid confusion

####Light Flair####
- Drop light image in TLW > scale down 
- with layer selected Rclick > set Blending mode from normal to additive 
- Match position of light object to tip of line
- Take pick whip, parent it to the null object for line 1
- Light follows the line is now parented to the null object
- Repeat for each line

Rest of tut is talking about creating a mask to get rid of the fall off

####Flickering the light####
- Select light one, effect , color correction, exposure, alt click on stopwatch, expression box, wiggle expression > type in wiggle(2.1.6)
- copy/paste in light layer new solid, call it grid, effect generate grid, lower border to 2, set size from width & Height slider > set to 120 and 
pre-compose the grid > adjust color > Effect > Stylise > Glow > lower threshold to 25 increase > glow to 1.3 > radius 20 
- Lower opacity > hit "t" for opacity lower it to 60







[1]: http://youtu.be/8_QFzXDK588

