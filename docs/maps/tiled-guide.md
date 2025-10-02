# Building Maps with TILED

This guide covers how to create maps for BarrelStorm using the TILED map editor.

## Table of Contents

- [Installing TILED](#installing-tiled)
- [Creating a New Map](#creating-a-new-map)
- [Working with Layers](#working-with-layers)
- [Using Tilesets](#using-tilesets)
- [Adding Objects](#adding-objects)
- [Map Properties](#map-properties)
- [Exporting Maps](#exporting-maps)
- [Best Practices](#best-practices)

## Installing TILED

### Windows
1. Download TILED from [mapeditor.org](https://www.mapeditor.org/)
2. Run the installer
3. Follow the installation wizard

### macOS
```bash
brew install tiled
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install tiled

# Fedora
sudo dnf install tiled
```

## Creating a New Map

1. Open TILED
2. Go to **File > New > New Map**
3. Configure map settings:
   - **Orientation**: Orthogonal (recommended for BarrelStorm)
   - **Tile Layer Format**: CSV or Base64 (depending on game engine requirements)
   - **Tile Size**: Set according to your tileset (e.g., 16x16, 32x32)
   - **Map Size**: Define width and height in tiles

### Recommended Settings for BarrelStorm

```
Orientation: Orthogonal
Tile Width: 32px
Tile Height: 32px
Map Width: 50 tiles
Map Height: 30 tiles
Tile Layer Format: CSV
```

## Working with Layers

Layers allow you to organize map elements. Common layer types:

### Tile Layers
- **Background**: Bottom-most layer (sky, background elements)
- **Ground**: Main walkable surface
- **Foreground**: Objects in front of the player
- **Collision**: Defines where players can't walk (usually invisible)

### Object Layers
- **Spawns**: Player and enemy spawn points
- **Items**: Collectible items placement
- **Triggers**: Areas that trigger events

### Creating a Layer
1. Click **Layer > New > Tile Layer** (or Object Layer)
2. Name the layer appropriately
3. Set layer properties (visibility, opacity, etc.)

## Using Tilesets

### Importing a Tileset

1. Go to **Map > New Tileset**
2. Choose **Based on Tileset Image**
3. Browse and select your tileset image
4. Configure:
   - **Name**: Give it a descriptive name
   - **Tile Width/Height**: Must match your map settings
   - **Spacing**: Space between tiles (usually 0)
   - **Margin**: Border around the tileset (usually 0)

### Drawing with Tiles

1. Select the **Stamp Brush** tool (B)
2. Click on tiles in the tileset panel
3. Paint on the map
4. Use **Bucket Fill** tool (F) for large areas
5. Use **Eraser** (E) to remove tiles

### Tileset Organization Tips

- Keep tilesets organized by theme (terrain, structures, decorations)
- Use consistent tile sizes across all tilesets
- Name tilesets clearly (e.g., "terrain_grass.png", "buildings_medieval.png")

## Adding Objects

Objects are used for non-tile elements like spawn points, triggers, and interactive items.

### Creating Objects

1. Select an **Object Layer**
2. Choose an object tool:
   - **Insert Rectangle** (R): Rectangular areas
   - **Insert Point** (I): Specific coordinates
   - **Insert Polygon** (P): Custom shapes
3. Draw the object on the map
4. Set object properties in the Properties panel

### Common Object Types

**Player Spawn**
```
Type: spawn
Name: player_start
Properties:
  - facing: right/left
```

**Enemy Spawn**
```
Type: enemy_spawn
Name: enemy_01
Properties:
  - enemy_type: goblin/orc/etc
  - patrol_path: path_id
```

**Item**
```
Type: item
Name: health_potion
Properties:
  - item_id: health_potion_001
  - quantity: 1
```

## Map Properties

Set global map properties for the game engine:

1. Select the map (click outside layers)
2. Open Properties panel
3. Add custom properties:

### Common Map Properties

```
name: level_01_forest
description: Forest entrance level
music: forest_theme
background_color: #87CEEB
gravity: 9.8
```

### Adding Custom Properties

1. Click **+** in Properties panel
2. Choose property type (string, int, float, bool, color, file)
3. Set name and value

## Exporting Maps

### For BarrelStorm

1. Go to **File > Export As**
2. Choose format:
   - **JSON**: Recommended for most game engines
   - **TMX**: Native TILED format (XML-based)
   - **Lua**: For Lua-based engines
3. Save in your project's maps directory

### Export Settings

```
Format: JSON
Embed tilesets: false (keep separate for reuse)
Detach templates: true
Minimize output: false (for debugging)
```

## Best Practices

### Organization

- **Name layers clearly**: Use descriptive names like "collision" not "layer_3"
- **Group related layers**: Use layer groups for organization
- **Lock layers**: Lock layers you're not editing to prevent accidents
- **Use consistent naming**: Follow a naming convention across all maps

### Performance

- **Optimize tile usage**: Don't use more layers than necessary
- **Limit map size**: Extremely large maps can impact performance
- **Use object layers wisely**: Too many objects can slow down the editor

### Workflow

- **Save frequently**: TILED can crash, so save often (Ctrl+S)
- **Use templates**: Create object templates for reusable elements
- **Version control**: Commit maps to version control regularly
- **Test in-game**: Regularly test your maps in the actual game

### Collision Setup

1. Create a dedicated "Collision" tile layer
2. Use visible tiles during editing (red/transparent tiles work well)
3. Mark the layer as invisible in properties
4. Alternatively, use an object layer with rectangles for precise collision

### Tileset Best Practices

- Keep tileset images organized in a specific folder
- Use relative paths when possible
- Document tile indices for special tiles (animated, interactive)
- Create a tileset reference document

## Troubleshooting

### Tiles Not Appearing
- Check that tileset is properly loaded
- Verify tile size matches map settings
- Ensure layer is visible and opacity > 0

### Export Issues
- Confirm export path is correct
- Check file permissions
- Verify export format matches game engine requirements

### Performance Issues
- Reduce map size
- Limit number of layers
- Optimize tileset images (use appropriate file formats and sizes)

## Advanced Topics

### Infinite Maps
TILED supports infinite maps that expand as you draw. Enable in map properties if needed.

### Automapping
Use TILED's automapping feature to automatically place tiles based on rules.

### Scripting
TILED supports JavaScript extensions for custom workflows.

## Additional Resources

- [Official TILED Documentation](https://doc.mapeditor.org/)
- [TILED Forums](https://discourse.mapeditor.org/)
- [Tiles Setup Guide](tiles-setup.md) - Learn about configuring tilesets

## Next Steps

Now that you know how to use TILED, check out:
- [Tiles Setup](tiles-setup.md) - Configure your tilesets properly
- [Map Development Overview](README.md) - Other map development topics
