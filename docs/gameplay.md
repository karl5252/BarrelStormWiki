# Gameplay Loop & Endless Wasteland

## Intended loop

1. **Deploy.** The Motherplant delivers the player's tank onto the surface through subterranean industrial machinery.
2. **Roam.** The player drives through an effectively endless world assembled from generated chunks.
3. **Fight.** Hostile tanks of varying sizes and capabilities intercept the player.
4. **Face a major encounter.** A colossal subterranean unit erupts onto the battlefield, changing the scale and tempo of the fight.
5. **Recover a CORE.** Destroying the giant unit rewards the player with a precious CORE.
6. **Continue or return.** The end-of-run and extraction structure remains an open design decision, not established functionality.

## Procedural world: confirmed intent

- The surface world is **chunk-generated** and intended to feel effectively endless.
- Wasteland roaming replaces discrete attacks on populated urban areas.
- The landscape should create room for tank maneuvering and frequent combat.

## Procedural world: implementation topics to settle

These are **proposals**, not decisions:

- Deterministic chunk seeds for debugging and QA.
- Streaming and despawning chunks outside the active region, with clear persistence rules.
- Reserving enough safe space for deployment, enemy spawning and giant emergence events.
- Recognizable terrain silhouettes and sparse hazards to support high-speed play.
- Encounter pacing that escalates without turning every chunk into clutter.

## Candidate encounter rhythm

A possible rhythm is: brief travel → smaller patrol engagement → room to maneuver → escalating armored threats → warning signs in the earth → giant CORE carrier encounter. This is a **design suggestion**, not an agreed timer or spawn algorithm.

## Open mechanical questions

- Does the player need to physically pick up a dropped CORE?
- Can CORES be lost on death?
- How are deployment, extraction and garage upgrades connected?
- How are chunks regenerated when the player revisits an area?
- How do touch controls and desktop controls preserve comparable maneuverability?
