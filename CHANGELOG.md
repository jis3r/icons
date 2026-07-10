# Changelog

All notable changes to @jis3r/icons are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning: [SemVer](https://semver.org/).

## [Unreleased]

### Fixed

- Parent-controlled `animate` could permanently stop animating after the pointer grazed the icon (internal hover timer clobbered the prop). Hover state is now internal and OR-ed with the prop.
- Corrected `aria-label` on 6 icons (worst: `arrow-up-z-a` announced itself as "arrow-down-z-a").
- 6 icons (`bold`, `bookmark`, `clipboard-list`, `file-sliders`, `sliders-vertical`, `sliders-horizontal`) defaulted to `size={28}`; all icons now default to the documented `size={24}`.
- `file-sliders` ignored the `size`/`color`/`strokeWidth` props entirely (hardcoded svg attributes); it now honors them.
- `binary`, `sliders-horizontal`, and `sliders-vertical` ignored the `animate` prop; it now triggers their animations.
- Hover timers are cleaned up on unmount.

### Added

- Per-icon subpath imports: `import Bell from '@jis3r/icons/icons/bell'`.
- `sideEffects: false` for reliable tree-shaking.

## [2.7.0] and earlier

Released before this changelog existed; see the git history and npm versions.
