# Tiles Setup

This guide covers how to set up and configure tiles and tilesets for use in BarrelStorm.

## Table of Contents

- [Understanding Tilesets](#understanding-tilesets)
- [Tile Specifications](#tile-specifications)
- [Creating Tilesets](#creating-tilesets)
- [Organizing Tiles](#organizing-tiles)
- [Tile Properties](#tile-properties)
- [Animated Tiles](#animated-tiles)
- [Collision Tiles](#collision-tiles)
- [Terrain Setup](#terrain-setup)
- [Best Practices](#best-practices)

## Understanding Tilesets

A tileset is a collection of tiles (small images) arranged in a grid that can be used to build game maps. Each tile represents a reusable graphic element.

### Tileset Components

- **Tile**: A single graphic unit (e.g., 32x32 pixels)
- **Tileset Image**: A larger image containing multiple tiles
- **Tile ID**: Unique identifier for each tile in the set
- **Spacing**: Gap between tiles in the tileset image
- **Margin**: Border around the entire tileset

## Tile Specifications

### Recommended Tile Sizes for BarrelStorm

```
Standard Tile: 32x32 pixels
Small Details: 16x16 pixels
Large Objects: 64x64 pixels or multiples of 32
```

### Image Format

- **PNG**: Recommended (supports transparency)
- **Color Mode**: RGBA (8-bit per channel)
- **Transparency**: Use alpha channel for transparency
- **Resolution**: 72 DPI (standard for games)

### Tileset Image Structure

```
Example 32x32 tileset with 0 spacing and 0 margin:
[Tile 0][Tile 1][Tile 2][Tile 3]
[Tile 4][Tile 5][Tile 6][Tile 7]
[Tile 8][Tile 9][Tile10][Tile11]

Image Size: 128x96 pixels (4 columns × 3 rows)
Total Tiles: 12
```

## Creating Tilesets

### Tools for Creating Tilesets

**Graphic Editors:**
- **Aseprite**: Pixel art focused (recommended)
- **GIMP**: Free and powerful
- **Photoshop**: Professional option
- **Krita**: Free digital painting

**Tileset Generators:**
- **Pyxel Edit**: Dedicated tileset creator
- **Tile Studio**: Free tileset tool

### Creating a Basic Tileset

1. **Choose your canvas size**
   ```
   For a 8x8 tile grid with 32x32 tiles:
   Canvas: 256x256 pixels
   ```

2. **Set up a grid**
   - Enable grid in your editor
   - Set grid size to match tile size (32x32)
   - Enable snap to grid

3. **Design your tiles**
   - Start with basic tiles (ground, walls)
   - Add variation tiles
   - Create corner and edge pieces
   - Add decorative elements

4. **Export the tileset**
   - Save as PNG
   - No compression artifacts
   - Preserve transparency

### Tileset Template

Here's a recommended organization for a terrain tileset:

```
Row 1: Ground variations
  [Grass 1][Grass 2][Grass 3][Dirt 1]

Row 2: Walls/Edges
  [Top Left][Top][Top Right][Side Right]

Row 3: Corners and transitions
  [Corner TL][Inner TL][Corner TR][Inner TR]

Row 4: Special tiles
  [Water][Lava][Ice][Stone]
```

## Organizing Tiles

### Tileset Categories

Organize your tilesets by theme or function:

**Terrain Tilesets:**
- `terrain_grass.png` - Grass tiles
- `terrain_dirt.png` - Dirt/ground tiles
- `terrain_stone.png` - Stone/rock tiles
- `terrain_water.png` - Water tiles

**Structure Tilesets:**
- `buildings_exterior.png` - Building exteriors
- `buildings_interior.png` - Interior elements
- `walls_stone.png` - Wall tiles
- `floors_wood.png` - Floor tiles

**Decoration Tilesets:**
- `decorations_nature.png` - Trees, plants, flowers
- `decorations_props.png` - Props and objects
- `decorations_effects.png` - Visual effects

### Directory Structure

```
assets/
└── tilesets/
    ├── terrain/
    │   ├── grass.png
    │   ├── dirt.png
    │   └── stone.png
    ├── buildings/
    │   ├── houses.png
    │   └── castles.png
    └── decorations/
        ├── nature.png
        └── props.png
```

## Tile Properties

### Setting Tile Properties in TILED

1. Select a tile in the tileset panel
2. Open the Properties panel
3. Add custom properties

### Common Tile Properties

**Collision**
```
Type: bool
Name: collision
Value: true/false
Description: Whether this tile blocks movement
```

**Damage**
```
Type: int
Name: damage
Value: 10
Description: Damage dealt when touched
```

**Type**
```
Type: string
Name: terrain_type
Value: grass/water/lava/etc
Description: Type of terrain for game logic
```

**Audio**
```
Type: string
Name: sound
Value: grass_step/water_splash/etc
Description: Sound to play when stepped on
```

### Property Examples

**Grass Tile**
```
collision: false
terrain_type: grass
sound: grass_step
walkable: true
```

**Water Tile**
```
collision: true
terrain_type: water
sound: water_splash
swim_required: true
```

**Lava Tile**
```
collision: false
terrain_type: lava
damage: 20
sound: lava_burn
harmful: true
```

## Animated Tiles

Animated tiles create dynamic elements in your maps.

### Creating Animated Tiles in TILED

1. Select a tile that will be the first frame
2. Right-click and choose **Tile Animation Editor**
3. Add frames by clicking other tiles
4. Set frame duration (in milliseconds)

### Animation Setup Example

**Water Animation (4 frames)**
```
Frame 1: water_tile_01 - Duration: 200ms
Frame 2: water_tile_02 - Duration: 200ms
Frame 3: water_tile_03 - Duration: 200ms
Frame 4: water_tile_04 - Duration: 200ms
```

### Animation Best Practices

- Keep animations smooth (typically 100-300ms per frame)
- Use 4-8 frames for fluid animations
- Loop animations seamlessly
- Group animation frames together in tileset

### Common Animated Elements

- Water and lava flow
- Torches and fires
- Waterfalls
- Magical effects
- Blinking lights
- Moving clouds

## Collision Tiles

### Setting Up Collision

**Method 1: Tile Properties**
1. Select tiles that should block movement
2. Add property: `collision = true`
3. Game engine reads this property

**Method 2: Dedicated Collision Layer**
1. Create separate tileset for collision tiles
2. Use clearly visible colors (red, magenta)
3. Create collision layer in map
4. Make layer invisible in game

### Collision Tileset Example

Create `collision_tiles.png` with:
- Red tiles for solid walls
- Yellow tiles for platforms
- Blue tiles for water boundaries
- Green tiles for slopes

### Collision Types

```
Full Block: Player cannot enter at all
Platform: Player can jump through from below
Slope: Player walks up/down gradually
One-Way: Player can pass in one direction
```

## Terrain Setup

Terrain defines how tiles connect and transition smoothly.

### Terrain Types in TILED

1. Select your tileset
2. Go to **Tileset > New Terrain**
3. Name the terrain (e.g., "Grass", "Stone")
4. Assign tiles to terrain corners

### Creating Terrain

**For a grass terrain:**
1. Create terrain named "Grass"
2. Assign corner tiles:
   - Top-left corner
   - Top-right corner
   - Bottom-left corner
   - Bottom-right corner
3. Assign edge and full tiles

### Using Terrain Brush

1. Select the Terrain Brush tool (T)
2. Choose a terrain from the terrain palette
3. Paint on the map
4. TILED automatically picks correct tiles

### Terrain Benefits

- Automatic tile selection
- Smooth transitions between different terrains
- Faster map creation
- Consistent look

## Best Practices

### Design Guidelines

**Consistency**
- Use consistent tile size across entire project
- Maintain consistent art style
- Keep color palettes cohesive
- Use same lighting direction

**Readability**
- Make walkable areas clear
- Distinguish platforms from background
- Ensure good contrast
- Avoid visual clutter

**Modularity**
- Design tiles to work in multiple configurations
- Create corner and edge pieces
- Make tiles tileable (seamless repetition)
- Reuse tiles when possible

### Technical Guidelines

**File Management**
- Use descriptive filenames
- Keep consistent naming convention
- Organize in logical folders
- Document tile indices

**Optimization**
- Don't make tilesets too large (max 2048x2048)
- Combine related tiles into single tileset
- Remove unused tiles
- Use appropriate image compression

**Version Control**
- Commit tileset source files (.psd, .ase)
- Track exported PNG files
- Document changes in commit messages
- Keep backup copies

### Workflow Tips

1. **Start with placeholders**: Use simple colored squares to plan layout
2. **Iterate**: Create rough version, test, then refine
3. **Test in-game**: See how tiles look in actual gameplay
4. **Get feedback**: Show tiles to team members
5. **Document**: Keep notes on tile purposes and properties

## Common Pitfalls

### Issues to Avoid

**Visual Issues:**
- Seams between tiles (edges don't align)
- Inconsistent perspective
- Clashing art styles
- Poor contrast

**Technical Issues:**
- Wrong tile size
- Incorrect spacing/margin
- Missing transparency
- Corrupted images

**Organization Issues:**
- Unnamed tiles
- Mixed art styles in one tileset
- No documentation
- Missing source files

## Example Workflows

### Creating a Grass Terrain Tileset

1. Create 256x256 canvas
2. Set up 32x32 grid
3. Draw base grass tile
4. Create variations (3-4 different grass tiles)
5. Add edge tiles (grass meets dirt)
6. Add corner pieces
7. Add decorative elements (flowers, rocks)
8. Export as PNG
9. Import to TILED
10. Set up terrain in TILED
11. Add properties to special tiles

### Adding a New Tileset to Project

1. Place PNG in `assets/tilesets/` directory
2. Open TILED
3. Create new tileset: **Map > New Tileset**
4. Configure tile size and spacing
5. Set up terrain (if applicable)
6. Add tile properties
7. Set up animations
8. Test in a map
9. Document in wiki

## Resources and Tools

### Free Tileset Resources

- [OpenGameArt.org](https://opengameart.org/)
- [itch.io Game Assets](https://itch.io/game-assets)
- [Kenney Assets](https://kenney.nl/assets)

### Tutorials

- [Pixel Art Basics](https://www.piskelapp.com/)
- [Tile Tutorial](https://www.youtube.com/results?search_query=pixel+art+tileset+tutorial)

### Tools

- [Aseprite](https://www.aseprite.org/) - Pixel art editor
- [TILED](https://www.mapeditor.org/) - Map editor
- [Pyxel Edit](https://pyxeledit.com/) - Tileset creator

## Next Steps

- [Build maps with TILED](tiled-guide.md)
- [Map Development Overview](README.md)
- [Getting Started](../getting-started.md)

## Troubleshooting

### Tiles Not Showing Correctly

**Problem**: Tiles appear cut off or misaligned
**Solution**: Check spacing and margin settings match tileset image

**Problem**: Transparency not working
**Solution**: Ensure PNG has alpha channel, check game engine settings

**Problem**: Animations not playing
**Solution**: Verify frame durations, check engine supports animated tiles

### Performance Issues

**Problem**: Large tilesets slow down TILED
**Solution**: Split into multiple smaller tilesets

**Problem**: Too many tile variants
**Solution**: Consolidate similar tiles, use tile properties for variations
