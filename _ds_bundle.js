/* @ds-bundle: {"format":4,"namespace":"FUCKBOYDesignSystem_007b99","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"WarningNotice","sourcePath":"components/feedback/WarningNotice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ChapterCard","sourcePath":"components/learning/ChapterCard.jsx"},{"name":"ChatBubble","sourcePath":"components/learning/ChatBubble.jsx"},{"name":"ChoiceOption","sourcePath":"components/learning/ChoiceOption.jsx"},{"name":"LockedPanel","sourcePath":"components/learning/LockedPanel.jsx"},{"name":"PillChoice","sourcePath":"components/learning/PillChoice.jsx"},{"name":"Redacted","sourcePath":"components/learning/Redacted.jsx"},{"name":"ScoreMeter","sourcePath":"components/learning/ScoreMeter.jsx"},{"name":"Stamp","sourcePath":"components/learning/Stamp.jsx"},{"name":"SwipeCard","sourcePath":"components/learning/SwipeCard.jsx"},{"name":"ProgressRail","sourcePath":"components/navigation/ProgressRail.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e2bbe2a7a11a","components/core/Button.jsx":"cd305263f1a5","components/core/Card.jsx":"13072fdf5436","components/core/Icon.jsx":"6c93ab88a0b7","components/core/IconButton.jsx":"a7d5259ce0ab","components/core/Rule.jsx":"c822fccc941a","components/core/Tag.jsx":"7618278547c5","components/feedback/Dialog.jsx":"12693b085b46","components/feedback/Toast.jsx":"7cc4cbe87ac4","components/feedback/Tooltip.jsx":"d2b83a92f5bf","components/feedback/WarningNotice.jsx":"76c4b4cbfb27","components/forms/Checkbox.jsx":"306b341d4910","components/forms/Input.jsx":"ebfceb11a3bf","components/forms/Radio.jsx":"b52970611868","components/forms/Select.jsx":"c47ed9223855","components/forms/Switch.jsx":"7aa168d60e0a","components/forms/Textarea.jsx":"b6943173a1b5","components/learning/ChapterCard.jsx":"6832858fd8a3","components/learning/ChatBubble.jsx":"d5f7c0a0787f","components/learning/ChoiceOption.jsx":"303f03f2d096","components/learning/LockedPanel.jsx":"0564ea704980","components/learning/PillChoice.jsx":"2a6fded48305","components/learning/Redacted.jsx":"3861851c9c2d","components/learning/ScoreMeter.jsx":"e6f01ae8f949","components/learning/Stamp.jsx":"15bbe8ab930f","components/learning/SwipeCard.jsx":"e8157921eee2","components/navigation/ProgressRail.jsx":"94d34157f3bf","components/navigation/Tabs.jsx":"f1e5e9d97f4a","ui_kits/elearning-mobile/MobileApp.jsx":"a75caaff4915","ui_kits/elearning-mobile/MobileScreens.jsx":"3e0f2dbbe53b","ui_kits/elearning-mobile/ios-frame.jsx":"24642b887be3","ui_kits/elearning/App.jsx":"63292afd64f6","ui_kits/elearning/ChapterIndex.jsx":"14e4556f585f","ui_kits/elearning/ChapterScreen.jsx":"34418b6f2978","ui_kits/elearning/CoverScreen.jsx":"ce0e07cedb8d","ui_kits/elearning/HeavenScreen.jsx":"4a603d392a69","ui_kits/elearning/MetaScreens.jsx":"690c61ace7ae","ui_kits/elearning/OverviewScreen.jsx":"28304899f3f6","ui_kits/elearning/Shell.jsx":"c24f12acd9ca","ui_kits/elearning/SpecialBlocks.jsx":"60e568abe75b","ui_kits/elearning/blocks.jsx":"91c4720bf176","ui_kits/elearning/content/chapters-a.js":"eadb68a16739","ui_kits/elearning/content/chapters-b.js":"ac933858a1bf","ui_kits/elearning/content/chapters-c.js":"0ab92558ff6d","ui_kits/elearning/content/chapters-d.js":"777460b1fb16","ui_kits/elearning/content/chapters-e.js":"6d1bd4fbe2a4","ui_kits/elearning/content/chapters-f.js":"d72bfa385d8c","ui_kits/elearning/content/competences.js":"0ac676887570","ui_kits/elearning/content/safety.js":"80eb6d73e4cd","ui_kits/elearning/data.js":"12109ff68afb","ui_kits/elearning/store.js":"47dd27c40051"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FUCKBOYDesignSystem_007b99 = window.FUCKBOYDesignSystem_007b99 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  ink: {
    background: 'var(--bg-surface)',
    color: 'var(--text-primary)',
    border: 'var(--rule-faint)'
  },
  raised: {
    background: 'var(--bg-surface-raised)',
    color: 'var(--text-primary)',
    border: 'var(--rule-subtle)'
  },
  sunken: {
    background: 'var(--bg-surface-sunken)',
    color: 'var(--text-secondary)',
    border: 'var(--rule-faint)'
  },
  paper: {
    background: 'var(--bg-paper)',
    color: 'var(--text-inverse)',
    border: 'rgba(11,11,12,.18)'
  },
  danger: {
    background: 'var(--bordeaux-900)',
    color: 'var(--paper-100)',
    border: 'var(--bordeaux-700)'
  }
};
const PADS = {
  none: 0,
  sm: 'var(--space-lg)',
  md: 'var(--space-2xl)',
  lg: 'var(--space-3xl)'
};
function Card({
  surface = 'ink',
  padding = 'md',
  interactive = false,
  selected = false,
  grain = false,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[surface] || SURFACES.ink;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      padding: PADS[padding] !== undefined ? PADS[padding] : PADS.md,
      background: s.background,
      color: s.color,
      border: '1px solid ' + (selected ? 'var(--volt-500)' : hover ? 'var(--rule-default)' : s.border),
      borderRadius: 'var(--radius-none)',
      boxShadow: surface === 'paper' ? 'var(--shadow-paper)' : hover ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(var(--travel-hover))' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), grain ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--texture-grain)',
      opacity: 'var(--opacity-grain)',
      mixBlendMode: 'overlay'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide 1.x outline set, copied into assets/icons/ and inlined here as path data.
   24x24 viewBox, 2px stroke, round caps/joins — do not restyle the stroke weight. */
const ICON_PATHS = {
  "arrow-left": '<path d="m12 19-7-7 7-7"></path> <path d="M19 12H5"></path>',
  "arrow-right": '<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path>',
  "arrow-up-right": '<path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path>',
  "ban": '<circle cx="12" cy="12" r="10"></circle> <path d="M4.929 4.929 19.07 19.071"></path>',
  "brain": '<path d="M12 18V5"></path> <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path> <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path> <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path> <path d="M18 18a4 4 0 0 0 2-7.464"></path> <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path> <path d="M6 18a4 4 0 0 1-2-7.464"></path> <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>',
  "check": '<path d="M20 6 9 17l-5-5"></path>',
  "check-check": '<path d="M18 6 7 17l-5-5"></path> <path d="m22 10-7.5 7.5L13 16"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
  "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
  "chevron-up": '<path d="m18 15-6-6-6 6"></path>',
  "circle-alert": '<circle cx="12" cy="12" r="10"></circle> <line x1="12" x2="12" y1="8" y2="12"></line> <line x1="12" x2="12.01" y1="16" y2="16"></line>',
  "circle-dot": '<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="1"></circle>',
  "clock": '<circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path>',
  "ellipsis": '<circle cx="12" cy="12" r="1"></circle> <circle cx="19" cy="12" r="1"></circle> <circle cx="5" cy="12" r="1"></circle>',
  "eye": '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path> <circle cx="12" cy="12" r="3"></circle>',
  "eye-off": '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path> <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path> <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path> <path d="m2 2 20 20"></path>',
  "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path>',
  "flag": '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>',
  "flame": '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>',
  "gauge": '<path d="m12 14 4-4"></path> <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>',
  "hand": '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path> <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path> <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path> <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>',
  "heart": '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>',
  "heart-crack": '<path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"></path> <path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"></path>',
  "info": '<circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  "lock-open": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
  "menu": '<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path>',
  "message-square": '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>',
  "pill": '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path> <path d="m8.5 8.5 7 7"></path>',
  "play": '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>',
  "quote": '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path> <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>',
  "scale": '<path d="M12 3v18"></path> <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path> <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path> <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path> <path d="M7 21h10"></path>',
  "search": '<path d="m21 21-4.34-4.34"></path> <circle cx="11" cy="11" r="8"></circle>',
  "send": '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> <path d="m9 12 2 2 4-4"></path>',
  "skull": '<path d="m12.5 17-.5-1-.5 1h1z"></path> <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path> <circle cx="15" cy="12" r="1"></circle> <circle cx="9" cy="12" r="1"></circle>',
  "split": '<path d="M16 3h5v5"></path> <path d="M8 3H3v5"></path> <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path> <path d="m15 9 6-6"></path>',
  "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>',
  "target": '<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle>',
  "thumbs-down": '<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path> <path d="M17 14V2"></path>',
  "timer": '<line x1="10" x2="14" y1="2" y2="2"></line> <line x1="12" x2="15" y1="14" y2="11"></line> <circle cx="12" cy="14" r="8"></circle>',
  "trending-down": '<path d="M16 17h6v-6"></path> <path d="m22 17-8.5-8.5-5 5L2 7"></path>',
  "trending-up": '<path d="M16 7h6v6"></path> <path d="m22 7-8.5 8.5-5-5L2 17"></path>',
  "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path> <path d="M12 9v4"></path> <path d="M12 17h.01"></path>',
  "trophy": '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"></path> <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"></path> <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"></path> <path d="M4 22h16"></path> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path> <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"></path>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle>',
  "x": '<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path>',
  "zap": '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>'
};
const ICON_NAMES = Object.keys(ICON_PATHS);
function Icon({
  name,
  size = 18,
  stroke = 2,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + d
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_PATHS, ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    color: 'var(--text-secondary)',
    border: 'var(--rule-default)',
    bg: 'transparent'
  },
  accent: {
    color: 'var(--volt-500)',
    border: 'rgba(198,247,14,.5)',
    bg: 'var(--bg-accent-soft)'
  },
  consent: {
    color: 'var(--wire-500)',
    border: 'rgba(19,229,255,.5)',
    bg: 'var(--bg-consent-soft)'
  },
  danger: {
    color: 'var(--bordeaux-400)',
    border: 'var(--bordeaux-600)',
    bg: 'var(--bg-danger-soft)'
  },
  caution: {
    color: 'var(--amber-500)',
    border: 'rgba(242,168,30,.5)',
    bg: 'rgba(242,168,30,.1)'
  },
  locked: {
    color: 'var(--signal-locked)',
    border: 'var(--rule-subtle)',
    bg: 'transparent'
  },
  solid: {
    color: 'var(--ink-900)',
    border: 'transparent',
    bg: 'var(--paper-100)'
  }
};
function Badge({
  tone = 'neutral',
  icon,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 8px 3px',
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: t.color,
      background: t.bg,
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '7px 14px',
    fontSize: '11px',
    minHeight: '32px',
    gap: '6px',
    icon: 14
  },
  md: {
    padding: '11px 20px',
    fontSize: '12px',
    minHeight: '40px',
    gap: '8px',
    icon: 16
  },
  lg: {
    padding: '15px 28px',
    fontSize: '14px',
    minHeight: '48px',
    gap: '10px',
    icon: 18
  }
};
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--action-primary-bg-hover)'
    },
    active: {
      background: 'var(--action-primary-bg-active)'
    }
  },
  secondary: {
    rest: {
      background: 'transparent',
      color: 'var(--action-secondary-fg)',
      boxShadow: 'inset 0 0 0 1px var(--rule-default)'
    },
    hover: {
      background: 'var(--action-secondary-bg-hover)',
      boxShadow: 'inset 0 0 0 1px var(--rule-strong)'
    },
    active: {
      background: 'rgba(245,242,235,.14)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--action-ghost-fg)',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--action-secondary-bg-hover)',
      color: 'var(--text-primary)'
    },
    active: {
      background: 'rgba(245,242,235,.12)'
    }
  },
  danger: {
    rest: {
      background: 'var(--action-danger-bg)',
      color: 'var(--paper-100)',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--action-danger-bg-hover)'
    },
    active: {
      background: 'var(--bordeaux-700)'
    }
  },
  accent: {
    rest: {
      background: 'var(--action-accent-bg)',
      color: 'var(--action-accent-fg)',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--action-accent-bg-hover)',
      boxShadow: 'var(--glow-volt)'
    },
    active: {
      background: 'var(--volt-600)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as;
  const composed = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    minHeight: s.minHeight,
    fontFamily: 'var(--font-condensed)',
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 0,
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-hover), transform var(--dur-instant) var(--ease-out)',
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.active : null),
    ...(disabled ? {
      background: 'var(--action-disabled-bg)',
      color: 'var(--action-disabled-fg)',
      boxShadow: 'none'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: composed,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      setPress(false);
      onMouseLeave && onMouseLeave(e);
    },
    onMouseDown: e => {
      setPress(true);
      onMouseDown && onMouseDown(e);
    },
    onMouseUp: e => {
      setPress(false);
      onMouseUp && onMouseUp(e);
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: 32,
    icon: 16
  },
  md: {
    box: 40,
    icon: 18
  },
  lg: {
    box: 48,
    icon: 22
  }
};
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const outlined = variant === 'outline';
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      padding: 0,
      background: hover && !disabled ? 'var(--action-secondary-bg-hover)' : 'transparent',
      color: active ? 'var(--text-accent)' : hover && !disabled ? 'var(--text-primary)' : 'var(--text-secondary)',
      border: 0,
      boxShadow: outlined ? 'inset 0 0 0 1px var(--rule-subtle)' : 'none',
      borderRadius: 'var(--radius-xs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  faint: 'var(--rule-faint)',
  subtle: 'var(--rule-subtle)',
  default: 'var(--rule-default)',
  strong: 'var(--rule-strong)',
  accent: 'var(--volt-500)',
  danger: 'var(--bordeaux-600)',
  consent: 'var(--wire-500)'
};
function Rule({
  tone = 'subtle',
  label,
  weight = 1,
  style,
  ...rest
}) {
  const color = TONES[tone] || TONES.subtle;
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", _extends({
      style: {
        border: 0,
        borderTop: weight + 'px solid ' + color,
        margin: 0,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color: tone === 'faint' || tone === 'subtle' ? 'var(--text-faint)' : color,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: weight + 'px solid ' + color
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '6px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: 1.2,
      color: selected ? 'var(--ink-900)' : hover && interactive ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: selected ? 'var(--paper-100)' : hover && interactive ? 'var(--action-secondary-bg-hover)' : 'transparent',
      border: '1px solid ' + (selected ? 'var(--paper-100)' : 'var(--rule-subtle)'),
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    "aria-label": "Entfernen",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'flex',
      padding: 0,
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  kicker,
  title,
  onClose,
  footer,
  width = 560,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-3xl)',
      background: 'var(--bg-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: width,
      position: 'relative',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-default)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1.08,
      letterSpacing: '-0.015em',
      color: 'var(--text-primary)',
      marginTop: kicker ? '10px' : 0
    }
  }, title) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Schliessen",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-xl)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    tone: "subtle",
    style: {
      margin: 'var(--space-2xl) 0 var(--space-xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, footer)) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    accent: 'var(--paper-100)',
    icon: 'circle-dot'
  },
  gain: {
    accent: 'var(--volt-500)',
    icon: 'trending-up'
  },
  loss: {
    accent: 'var(--bordeaux-400)',
    icon: 'trending-down'
  },
  unlock: {
    accent: 'var(--volt-500)',
    icon: 'lock-open'
  },
  consent: {
    accent: 'var(--wire-500)',
    icon: 'shield-check'
  }
};
function Toast({
  tone = 'neutral',
  title,
  detail,
  delta,
  icon,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      padding: '12px var(--space-lg)',
      minWidth: 260,
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--rule-subtle)',
      borderLeft: '2px solid ' + t.accent,
      boxShadow: 'var(--shadow-lift)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, title), detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.4,
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, detail) : null), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '17px',
      fontWeight: 700,
      color: t.accent,
      fontVariantNumeric: 'tabular-nums'
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      ...pos,
      padding: '7px 10px',
      maxWidth: 240,
      width: 'max-content',
      background: 'var(--ink-900)',
      border: '1px solid var(--rule-default)',
      boxShadow: 'var(--shadow-lift)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.4,
      color: 'var(--text-secondary)',
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/WarningNotice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  consent: {
    color: 'var(--wire-500)',
    border: 'rgba(19,229,255,.45)',
    bg: 'var(--bg-consent-soft)',
    icon: 'shield-check',
    label: 'Consent'
  },
  caution: {
    color: 'var(--amber-500)',
    border: 'rgba(242,168,30,.45)',
    bg: 'rgba(242,168,30,.09)',
    icon: 'triangle-alert',
    label: 'Achtung'
  },
  danger: {
    color: 'var(--bordeaux-400)',
    border: 'var(--bordeaux-700)',
    bg: 'var(--bg-danger-soft)',
    icon: 'ban',
    label: 'Red Flag'
  },
  moral: {
    color: 'var(--paper-300)',
    border: 'var(--rule-default)',
    bg: 'rgba(245,242,235,.04)',
    icon: 'scale',
    label: 'Moralisch unbequem'
  }
};
function WarningNotice({
  tone = 'consent',
  title,
  label,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.consent;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      padding: 'var(--space-xl)',
      background: t.bg,
      borderLeft: '2px solid ' + t.color,
      border: '1px solid ' + t.border,
      borderLeftWidth: '2px',
      borderLeftColor: t.color,
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      marginTop: '2px',
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: t.color
    }
  }, label || t.label), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      marginTop: '7px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: title ? '7px' : '9px'
    }
  }, children)));
}
Object.assign(__ds_scope, { WarningNotice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/WarningNotice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 'var(--tap-min)',
      paddingTop: '2px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: '1px',
      background: checked ? 'var(--volt-500)' : 'transparent',
      border: '1px solid ' + (checked ? 'var(--volt-500)' : hover ? 'var(--rule-strong)' : 'var(--rule-default)'),
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-hover)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--ink-900)",
    stroke: 3
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5,
      color: checked ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.45,
      color: 'var(--text-faint)',
      marginTop: '3px'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  id,
  mono = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 8), []);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      padding: '0 var(--space-lg)',
      minHeight: '46px',
      background: 'var(--bg-surface-sunken)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focus ? 'var(--shadow-inset-well)' : 'none',
      transition: 'var(--transition-hover)'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--text-faint)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      padding: '12px 0',
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.4,
      ...style
    }
  }, rest))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.45,
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked = false,
  disabled = false,
  name,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 'var(--tap-min)',
      paddingTop: '2px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: '1px',
      border: '1px solid ' + (checked ? 'var(--volt-500)' : hover ? 'var(--rule-strong)' : 'var(--rule-default)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--transition-hover)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--volt-500)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5,
      color: checked ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.45,
      color: 'var(--text-faint)',
      marginTop: '3px'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg-surface-sunken)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-hover)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      minWidth: 0,
      padding: '13px 44px 13px var(--space-lg)',
      background: 'transparent',
      border: 0,
      outline: 'none',
      cursor: 'pointer',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-100)'
    }
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-lg)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  description,
  checked = false,
  disabled = false,
  onChange,
  tone = 'accent',
  style,
  ...rest
}) {
  const on = tone === 'consent' ? 'var(--wire-500)' : 'var(--volt-500)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 'var(--tap-min)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5,
      color: 'var(--text-primary)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, description) : null), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      width: 44,
      height: 24,
      background: checked ? on : 'var(--ink-500)',
      border: '1px solid ' + (checked ? on : 'var(--rule-subtle)'),
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 22 : 2,
      width: 18,
      height: 18,
      background: checked ? 'var(--ink-900)' : 'var(--paper-300)',
      borderRadius: 'var(--radius-pill)',
      transition: 'left var(--dur-base) var(--ease-snap), background-color var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  counter,
  value,
  mono = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), counter ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '11px',
      color: 'var(--text-faint)'
    }
  }, String(value || '').length, "/", counter) : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: 'var(--space-lg)',
      resize: 'vertical',
      background: 'var(--bg-surface-sunken)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-xs)',
      boxShadow: focus ? 'var(--shadow-inset-well)' : 'none',
      color: 'var(--text-primary)',
      outline: 'none',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.6,
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.45,
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/learning/ChapterCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChapterCard({
  number,
  title,
  summary,
  duration,
  decisions,
  state = 'available',
  bonus = false,
  railLabel,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const locked = state === 'locked';
  const done = state === 'done';
  const lit = hover && !locked;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: locked ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 'var(--space-2xl)',
      alignItems: 'flex-start',
      width: '100%',
      textAlign: 'left',
      padding: 'var(--space-2xl)',
      background: bonus ? 'var(--bordeaux-900)' : 'var(--bg-surface)',
      border: '1px solid ' + (lit ? 'var(--rule-default)' : bonus ? 'var(--bordeaux-700)' : 'var(--rule-faint)'),
      boxShadow: lit ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      transform: lit ? 'translateY(var(--travel-hover))' : 'none',
      cursor: locked ? 'not-allowed' : 'pointer',
      opacity: locked ? 0.62 : 1,
      transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-data)',
      fontSize: '34px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: done ? 'var(--volt-500)' : locked ? 'var(--text-faint)' : 'var(--bordeaux-400)',
      fontVariantNumeric: 'tabular-nums',
      width: 48
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: locked ? 'var(--text-faint)' : 'var(--text-muted)'
    }
  }, bonus ? 'Vertiefung' : 'Kapitel', duration ? ' · ' + duration : '', decisions !== undefined ? ' · ' + decisions + ' Entscheidungen' : ''), locked ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "locked",
    icon: "lock"
  }, "Gesperrt") : null, done ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent",
    icon: "check"
  }, "Abgeschlossen") : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: '-0.015em',
      color: locked ? 'var(--text-muted)' : 'var(--text-primary)',
      marginTop: '10px'
    }
  }, title), summary ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-sm)',
      maxWidth: '56ch'
    }
  }, summary) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      alignSelf: 'center',
      display: 'flex',
      color: lit ? 'var(--text-primary)' : 'var(--text-faint)',
      transition: 'var(--transition-hover)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: locked ? 'lock' : 'chevron-right',
    size: 20
  })));
}
Object.assign(__ds_scope, { ChapterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ChapterCard.jsx", error: String((e && e.message) || e) }); }

// components/learning/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatBubble({
  from = 'her',
  children,
  time,
  status,
  typing = false,
  style,
  ...rest
}) {
  const mine = from === 'me';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      justifyContent: mine ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '76%',
      minWidth: typing ? 56 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 15px',
      background: mine ? 'var(--paper-100)' : 'var(--bg-surface-raised)',
      color: mine ? 'var(--ink-900)' : 'var(--text-primary)',
      border: mine ? 'none' : '1px solid var(--rule-subtle)',
      borderRadius: mine ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5
    }
  }, typing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      height: 10
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--text-muted)',
      opacity: 0.4 + i * 0.2
    }
  }))) : children), time || status ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '7px',
      alignItems: 'center',
      marginTop: '5px',
      justifyContent: mine ? 'flex-end' : 'flex-start',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, time, status === 'read' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-check",
    size: 11,
    color: "var(--wire-500)"
  }) : null, status === 'sent' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11
  }) : null) : null));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/learning/ChoiceOption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const OUTCOMES = {
  neutral: {
    color: 'var(--paper-300)',
    icon: 'circle-dot',
    label: 'Wahrscheinliche Wirkung'
  },
  good: {
    color: 'var(--volt-500)',
    icon: 'check-check',
    label: 'Wirkt souverän'
  },
  costly: {
    color: 'var(--amber-500)',
    icon: 'triangle-alert',
    label: 'Funktioniert — mit Kosten'
  },
  bad: {
    color: 'var(--bordeaux-400)',
    icon: 'ban',
    label: 'Erzeugt Druck'
  }
};
function ChoiceOption({
  letter,
  label,
  quote,
  outcome,
  feedback,
  selected = false,
  revealed = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const o = OUTCOMES[outcome] || OUTCOMES.neutral;
  const showOutcome = revealed && Boolean(feedback || outcome);
  const border = revealed && selected ? o.color : selected ? 'var(--volt-500)' : hover && !disabled ? 'var(--rule-default)' : 'var(--rule-faint)';
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: 'var(--space-xl)',
      background: selected ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-none)',
      cursor: disabled ? 'default' : 'pointer',
      opacity: revealed && !selected ? 0.55 : 1,
      transform: hover && !disabled && !revealed ? 'translateY(var(--travel-hover))' : 'none',
      boxShadow: selected ? 'var(--shadow-lift)' : 'var(--shadow-card)',
      transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-data)',
      fontSize: '13px',
      fontWeight: 700,
      color: selected ? 'var(--ink-900)' : 'var(--text-muted)',
      background: selected ? 'var(--paper-100)' : 'transparent',
      border: '1px solid ' + (selected ? 'var(--paper-100)' : 'var(--rule-subtle)')
    }
  }, letter), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: '8px'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.55,
      color: 'var(--text-primary)'
    }
  }, quote))), showOutcome ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      marginTop: 'var(--space-lg)',
      paddingTop: 'var(--space-lg)',
      borderTop: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: o.color,
      marginTop: '1px',
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: o.color
    }
  }, o.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: '5px'
    }
  }, feedback))) : null);
}
Object.assign(__ds_scope, { ChoiceOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ChoiceOption.jsx", error: String((e && e.message) || e) }); }

// components/learning/LockedPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LockedPanel({
  title,
  requirement,
  action,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--rule-subtle)',
      background: 'var(--bg-surface)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      filter: 'var(--blur-locked)',
      opacity: 0.5,
      padding: 'var(--space-2xl)',
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-md)',
      textAlign: 'center',
      padding: 'var(--space-2xl)',
      background: 'rgba(8,8,10,.66)',
      backgroundImage: 'var(--scanline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), requirement ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, requirement) : null, action));
}
Object.assign(__ds_scope, { LockedPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/LockedPanel.jsx", error: String((e && e.message) || e) }); }

// components/learning/PillChoice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillChoice({
  pill = 'red',
  title,
  description,
  cost,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const red = pill === 'red';
  const color = red ? 'var(--bordeaux-500)' : 'var(--wire-500)';
  const lit = hover || selected;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-md)',
      padding: 'var(--space-3xl) var(--space-2xl)',
      background: 'var(--bg-surface)',
      border: '1px solid ' + (selected ? color : lit ? 'var(--rule-default)' : 'var(--rule-faint)'),
      boxShadow: lit ? red ? 'var(--glow-bordeaux)' : 'var(--glow-wire)' : 'var(--shadow-card)',
      cursor: 'pointer',
      transform: lit ? 'translateY(var(--travel-hover))' : 'none',
      transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-pill)',
      background: color,
      color: red ? 'var(--paper-100)' : 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pill",
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color
    }
  }, red ? 'Rote Pille' : 'Blaue Pille'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, description), cost ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: 'var(--space-sm)',
      paddingTop: 'var(--space-md)',
      borderTop: '1px solid var(--rule-faint)',
      width: '100%'
    }
  }, "Preis: ", cost) : null);
}
Object.assign(__ds_scope, { PillChoice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/PillChoice.jsx", error: String((e && e.message) || e) }); }

// components/learning/Redacted.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Redacted({
  children,
  revealed,
  width,
  onReveal,
  tone = 'ink',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const shown = revealed !== undefined ? revealed : open;
  const reveal = () => {
    if (revealed === undefined) setOpen(true);
    if (onReveal) onReveal();
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "button",
    tabIndex: 0,
    onClick: shown ? undefined : reveal,
    onKeyDown: e => {
      if (!shown && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        reveal();
      }
    },
    title: shown ? undefined : 'Zensur aufheben',
    style: {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'baseline',
      minWidth: width,
      padding: '0 4px',
      color: shown ? 'inherit' : 'transparent',
      borderBottom: '1px solid ' + (tone === 'paper' ? 'var(--bordeaux-600)' : 'var(--bordeaux-500)'),
      cursor: shown ? 'default' : 'pointer',
      userSelect: shown ? 'auto' : 'none',
      transition: 'color var(--dur-fast) var(--ease-out) ' + (shown ? '340ms' : '0ms'),
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: shown ? '0%' : '100%',
      background: 'var(--bg-redact)',
      transition: 'width var(--dur-redact) var(--ease-in-out)'
    }
  }));
}
Object.assign(__ds_scope, { Redacted });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/Redacted.jsx", error: String((e && e.message) || e) }); }

// components/learning/ScoreMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  gain: 'var(--score-gain)',
  loss: 'var(--score-loss)',
  neutral: 'var(--paper-300)',
  consent: 'var(--signal-consent)',
  caution: 'var(--signal-caution)'
};
function ScoreMeter({
  label,
  value = 0,
  max = 100,
  tone = 'neutral',
  delta,
  icon,
  note,
  style,
  ...rest
}) {
  const color = TONES[tone] || TONES.neutral;
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      minWidth: 0
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      flex: 'none'
    }
  }, delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '12px',
      fontWeight: 700,
      color
    }
  }, delta) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '19px',
      fontWeight: 700,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--score-track)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: pct + '%',
      background: color,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-size)',
      lineHeight: 1.4,
      color: 'var(--text-faint)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { ScoreMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ScoreMeter.jsx", error: String((e && e.message) || e) }); }

// components/learning/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  classified: 'var(--bordeaux-400)',
  unlocked: 'var(--volt-500)',
  locked: 'var(--text-faint)',
  consent: 'var(--wire-500)',
  moral: 'var(--amber-500)',
  neutral: 'var(--paper-300)'
};
function Stamp({
  tone = 'classified',
  icon,
  rotate = 0,
  children,
  style,
  ...rest
}) {
  const color = TONES[tone] || TONES.classified;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color,
      border: '1px solid currentColor',
      transform: rotate ? 'rotate(' + rotate + 'deg)' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 11
  }) : null, children);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/learning/SwipeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SwipeCard({
  name,
  age,
  meta,
  verdict,
  tags = [],
  image,
  offset = 0,
  children,
  style,
  ...rest
}) {
  const tilt = offset * 1.6;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '3 / 4',
      background: image ? 'var(--ink-600) center/cover url(' + image + ')' : 'linear-gradient(160deg, var(--ink-500), var(--ink-700) 55%, var(--bordeaux-900))',
      border: '1px solid var(--rule-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lift)',
      transform: 'translateX(' + offset * 8 + 'px) rotate(' + tilt + 'deg)',
      transition: 'transform var(--dur-slow) var(--ease-snap)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-grain)',
      opacity: 'var(--opacity-grain)',
      mixBlendMode: 'overlay'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--protect-bottom)'
    }
  }), verdict ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      transform: 'rotate(-4deg)',
      padding: '6px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-nano-size)',
      fontWeight: 700,
      letterSpacing: 'var(--text-nano-ls)',
      textTransform: 'uppercase',
      color: verdict === 'nope' ? 'var(--bordeaux-400)' : 'var(--volt-500)',
      border: '1px solid currentColor'
    }
  }, verdict === 'nope' ? 'Kein Match' : 'Match') : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, name), age ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '18px',
      fontWeight: 700,
      color: 'var(--paper-300)'
    }
  }, age) : null), meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginTop: '7px',
      fontFamily: 'var(--font-condensed)',
      fontSize: 'var(--text-micro-size)',
      fontWeight: 600,
      letterSpacing: 'var(--text-micro-ls)',
      textTransform: 'uppercase',
      color: 'var(--paper-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "users",
    size: 12
  }), meta) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: 'var(--space-md)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(8,8,10,.5)',
      border: '1px solid rgba(245,242,235,.22)',
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      color: 'var(--paper-200)'
    }
  }, t))) : null, children));
}
Object.assign(__ds_scope, { SwipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/SwipeCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProgressRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRail({
  steps = [],
  current = 0,
  onSelect,
  orientation = 'horizontal',
  style,
  ...rest
}) {
  const horizontal = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      gap: horizontal ? 'var(--space-sm)' : 'var(--space-3xs)',
      alignItems: horizontal ? 'stretch' : 'stretch',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const state = s.locked ? 'locked' : i < current ? 'done' : i === current ? 'current' : 'todo';
    const color = state === 'done' ? 'var(--volt-500)' : state === 'current' ? 'var(--paper-100)' : state === 'locked' ? 'var(--ink-500)' : 'var(--ink-400)';
    return /*#__PURE__*/React.createElement("button", {
      key: s.label + i,
      onClick: () => !s.locked && onSelect && onSelect(i),
      title: s.label,
      style: {
        flex: horizontal ? 1 : 'none',
        display: 'flex',
        flexDirection: horizontal ? 'column' : 'row',
        alignItems: horizontal ? 'stretch' : 'center',
        gap: horizontal ? '8px' : 'var(--space-md)',
        padding: horizontal ? 0 : '9px 10px',
        background: 'transparent',
        border: 0,
        cursor: s.locked ? 'not-allowed' : 'pointer',
        textAlign: 'left',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: horizontal ? 3 : 'auto',
        width: horizontal ? 'auto' : 3,
        flex: horizontal ? 'none' : 'none',
        alignSelf: horizontal ? 'auto' : 'stretch',
        minHeight: horizontal ? 0 : 18,
        background: color,
        transition: 'background-color var(--dur-base) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        minWidth: 0
      }
    }, s.locked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "lock",
      size: 11,
      color: "var(--text-faint)"
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-condensed)',
        fontSize: 'var(--text-micro-size)',
        fontWeight: 600,
        letterSpacing: 'var(--text-micro-ls)',
        textTransform: 'uppercase',
        color: state === 'current' ? 'var(--text-primary)' : state === 'done' ? 'var(--text-secondary)' : 'var(--text-faint)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, s.label)));
  }));
}
Object.assign(__ds_scope, { ProgressRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProgressRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-2xl)',
      borderBottom: '1px solid var(--rule-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    const lit = active || hover === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      onMouseEnter: () => setHover(it.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: '0 0 12px',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        borderBottom: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'),
        marginBottom: '-1px',
        fontFamily: 'var(--font-condensed)',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: lit ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'var(--transition-hover)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15
    }) : null, it.label, it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: '11px',
        color: active ? 'var(--volt-500)' : 'var(--text-faint)'
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning-mobile/MobileApp.jsx
try { (() => {
const {
  Icon,
  IconButton
} = window.FUCKBOYDesignSystem_007b99;
const TABS = [{
  id: 'overview',
  label: 'Übersicht',
  icon: 'scale'
}, {
  id: 'chapters',
  label: 'Kapitel',
  icon: 'file-text'
}, {
  id: 'profile',
  label: 'Auswertung',
  icon: 'gauge'
}, {
  id: 'safety',
  label: 'Schutz',
  icon: 'shield-check'
}];
const TITLES = {
  overview: 'Übersicht',
  chapters: 'Kapitel',
  profile: 'Auswertung',
  safety: 'Schutz & Recht',
  settings: 'Einstellungen'
};
function TabBar({
  screen,
  go
}) {
  const active = screen.indexOf('ch:') === 0 ? 'chapters' : screen;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--rule-subtle)',
      background: 'var(--bg-void)',
      paddingBottom: '6px'
    }
  }, TABS.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => go(t.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        padding: '13px 4px 9px',
        minHeight: '60px',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        color: on ? 'var(--paper-100)' : t.id === 'safety' ? 'var(--wire-600)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-condensed)',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }
    }, t.label));
  }));
}
function TopBar({
  screen,
  go,
  chapters
}) {
  const inCh = screen.indexOf('ch:') === 0;
  const ch = inCh ? chapters.find(c => c.number === screen.slice(3)) : null;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      flex: 'none',
      height: '58px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px 0 ' + (inCh ? '4px' : '20px'),
      borderBottom: '1px solid var(--rule-faint)',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      minWidth: 0
    }
  }, inCh ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Zur\xFCck zu den Kapiteln",
    size: "sm",
    onClick: () => go('chapters')
  }) : null, inCh ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      flex: 'none'
    }
  }, "Kap. ", ch ? ch.number : '') : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, ch ? ch.rail : TITLES[screen])), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "Einstellungen",
    size: "sm",
    onClick: () => go('settings')
  }));
}
function useBare() {
  const [bare, setBare] = React.useState(() => window.innerWidth < 560);
  React.useEffect(() => {
    const on = () => setBare(window.innerWidth < 560);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bare;
}
function MobileApp() {
  const noFrame = useBare();
  const CH = window.FBChapters;
  const [store, setStore] = React.useState(() => window.FBStore.load());
  const [screen, setScreen] = React.useState('cover');
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    window.FBStore.save(store);
  }, [store]);
  const go = s => {
    setScreen(s);
    setStore(prev => {
      const next = Object.assign({}, prev, {
        lastScreen: s
      });
      if (s.indexOf('ch:') === 0) {
        const n = s.slice(3);
        next.chapters = Object.assign({}, prev.chapters, {
          [n]: Object.assign({}, prev.chapters[n], {
            started: true
          })
        });
      }
      return next;
    });
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const applyDeltas = deltas => {
    if (!deltas) return;
    setStore(prev => {
      const c = Object.assign({}, prev.competences);
      deltas.forEach(d => {
        const n = parseInt(String(d.delta).replace('−', '-'), 10);
        if (!isNaN(n) && c[d.id] !== undefined) c[d.id] = Math.max(0, Math.min(100, c[d.id] + n));
      });
      return Object.assign({}, prev, {
        competences: c
      });
    });
  };
  React.useEffect(() => {
    let changed = false;
    const next = Object.assign({}, store.chapters);
    CH.forEach(ch => {
      const rec = next[ch.number] || {};
      const complete = window.chapterComplete(ch, store);
      if (complete && rec.started && !rec.done) {
        next[ch.number] = Object.assign({}, rec, {
          done: true
        });
        changed = true;
      }
      if (!complete && rec.done) {
        next[ch.number] = Object.assign({}, rec, {
          done: false
        });
        changed = true;
      }
    });
    if (changed) setStore(s => Object.assign({}, s, {
      chapters: next
    }));
  }, [store.answers, store.quiz]);
  const bare = screen === 'cover' || screen === 'heaven';
  const ch = screen.indexOf('ch:') === 0 ? CH.find(c => c.number === screen.slice(3)) : null;
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-page)',
      paddingTop: noFrame ? 'env(safe-area-inset-top, 0px)' : '54px'
    }
  }, !bare ? /*#__PURE__*/React.createElement(TopBar, {
    screen: screen,
    go: go,
    chapters: CH
  }) : null, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto'
    }
  }, screen === 'cover' ? /*#__PURE__*/React.createElement(MCover, {
    go: go
  }) : null, screen === 'heaven' ? /*#__PURE__*/React.createElement(HeavenScreen, {
    go: go,
    compact: true
  }) : null, screen === 'overview' ? /*#__PURE__*/React.createElement(MOverview, {
    chapters: CH,
    store: store,
    go: go
  }) : null, screen === 'chapters' ? /*#__PURE__*/React.createElement(MChapters, {
    chapters: CH,
    store: store,
    go: go
  }) : null, screen === 'profile' ? /*#__PURE__*/React.createElement(MProfile, {
    chapters: CH,
    store: store,
    setStore: setStore,
    go: go
  }) : null, screen === 'safety' ? /*#__PURE__*/React.createElement(MSafety, null) : null, screen === 'settings' ? /*#__PURE__*/React.createElement(MSettings, {
    store: store,
    onReset: () => setStore(window.FBStore.reset())
  }) : null, ch ? /*#__PURE__*/React.createElement(MChapter, {
    ch: ch,
    store: store,
    setStore: setStore,
    go: go,
    onDeltas: applyDeltas
  }) : null), !bare ? /*#__PURE__*/React.createElement(TabBar, {
    screen: screen,
    go: go
  }) : null);
  if (noFrame) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-page)'
      }
    }, body);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    dark: true
  }, body));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MobileApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning-mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning-mobile/MobileScreens.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  Textarea,
  ChapterCard,
  ChoiceOption,
  PillChoice,
  ScoreMeter,
  ChatBubble,
  SwipeCard,
  WarningNotice,
  Toast
} = window.FUCKBOYDesignSystem_007b99;
const PAD = {
  padding: '0 22px'
};
function MKicker({
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: tone || 'var(--bordeaux-400)'
    }
  }, children);
}

/* ── Cover ── */
function MCover({
  go
}) {
  const [pill, setPill] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 32px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, null, "\xDCber 200 Frauen \xB7 Anonym"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--paper-100)',
      padding: '22px 16px 14px',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '36px',
      lineHeight: 0.88,
      letterSpacing: '-0.035em',
      color: 'var(--paper-100)'
    }
  }, "FICK-TRAINER"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule-strong)',
      marginTop: '14px',
      paddingTop: '9px',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "fick-trainer.de")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      marginTop: '22px'
    }
  }, "Ich bin nicht besonders gut aussehend. Ich habe trotzdem mit \xFCber 200 Frauen geschlafen, fast alle \xFCber Dating-Apps. Nicht wegen meinem Gesicht \u2014 wegen Psychologie: Erwartungssteuerung, Gespr\xE4chsf\xFChrung, Timing. Dieselben Mechanismen, die ich beruflich im Verkauf benutze."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.555,
      color: 'var(--text-muted)',
      marginTop: '14px',
      borderLeft: '2px solid var(--bordeaux-700)',
      paddingLeft: '14px'
    }
  }, "Ich schreibe anonym. Nicht aus Bescheidenheit \u2014 ich bin noch nicht fertig und benutze das hier weiter, w\xE4hrend du es liest. Und ja: Anonymit\xE4t erzeugt Autorit\xE4t, \u201Enoch nicht fertig\" erzeugt Dringlichkeit. Beides Techniken aus Kapitel 05. Sie funktionieren auch bei dir."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    title: "Eine Regel steht \xFCber allem."
  }, "Sobald sie z\xF6gert, ausweicht oder nicht weiter will, endet jeder Versuch. Sofort. Ein Nein ist keine Verhandlungsposition.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: '28px'
    }
  }, "Welche Pille nimmst du?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '12px',
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement(PillChoice, {
    pill: "red",
    title: "Zeig mir die verbotenen Techniken.",
    selected: pill === 'red',
    onClick: () => setPill('red'),
    description: "Profil, Algorithmus, Sprache, Timing. Alles, was auf Dating-Apps wirklich funktioniert.",
    style: {
      padding: '22px 16px'
    }
  }), /*#__PURE__*/React.createElement(PillChoice, {
    pill: "blue",
    title: "Ich suche eine Beziehung.",
    selected: pill === 'blue',
    onClick: () => setPill('blue'),
    description: "Du willst eine Partnerin, keine Methode. Dann ist hier nichts f\xFCr dich dabei.",
    style: {
      padding: '22px 16px'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    disabled: !pill,
    onClick: () => go(pill === 'blue' ? 'heaven' : 'overview'),
    style: {
      marginTop: '18px'
    }
  }, pill === 'blue' ? 'Bestätigen' : pill ? 'Kurs starten' : 'Wähle eine Pille'));
}

/* ── Übersicht ── */
function MOverview({
  chapters,
  store,
  go
}) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const next = chapters.find(c => window.chapterState(c, store) !== 'abgeschlossen') || chapters[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, null, "Kurs\xFCbersicht"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: '11px'
    }
  }, "Mehr Dates. Mehr Sex. Und die Rechnung dazu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.555,
      color: 'var(--text-secondary)',
      marginTop: '12px'
    }
  }, "Der Kurs sagt dir, was funktioniert \u2014 und in derselben Zeile, was es kostet. Beides geh\xF6rt zusammen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '14px',
      marginTop: '22px',
      paddingTop: '18px',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, [['12', 'Kapitel'], [String(done).padStart(2, '0'), 'Fertig'], ['08', 'Kompetenzen']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: 'var(--paper-100)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '7px'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    label: "Die eine Regel",
    title: "Ein Nein ist keine Verhandlungsposition."
  }, "Consent ist keine Technik, um doch noch ans Ziel zu kommen \u2014 es ist die Bedingung, unter der \xFCberhaupt etwas stattfindet."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    icon: "shield-check",
    style: {
      marginTop: '12px'
    },
    onClick: () => go('safety')
  }, "Schutz & Recht")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Was diesen Ratgeber unterscheidet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '12px',
      marginTop: '16px'
    }
  }, (window.FBData.gamechangers || []).map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.t,
    surface: "raised",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--volt-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: '12px'
    }
  }, g.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: '8px'
    }
  }, g.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Der Ablauf \xB7 acht Schritte"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: '14px'
    }
  }, "Kein Tippkatalog, sondern eine Kette. Jeder Schritt hat eine Aufgabe \u2014 und eine eigene Abbruchstelle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      marginTop: '16px',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, (window.FBData.flow || []).map(f => /*#__PURE__*/React.createElement("div", {
    key: f.n,
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '18px',
      fontWeight: 700,
      color: 'var(--bordeaux-400)'
    }
  }, f.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      fontWeight: 700,
      color: 'var(--paper-100)'
    }
  }, f.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, f.k)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: '7px'
    }
  }, f.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Kompetenzen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px',
      marginTop: '16px'
    }
  }, COMP.slice(0, 4).map(c => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: c.id,
    label: c.label,
    value: store.competences[c.id],
    icon: c.icon,
    tone: c.id === 'respekt' ? 'consent' : 'gain'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('ch:' + next.number)
  }, "Kapitel ", next.number, ": ", next.rail)));
}

/* ── Kapitelliste ── */
const STATE_MAP = {
  'abgeschlossen': 'done',
  'begonnen': 'available',
  'nicht begonnen': 'available'
};
function MChapters({
  chapters,
  store,
  go
}) {
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, null, "Kapitel\xFCbersicht"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: '11px'
    }
  }, "Vom ersten Match bis zum Heimweg."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: done ? 'accent' : 'neutral',
    icon: done ? 'check-check' : 'file-text'
  }, done, " von ", chapters.length, " abgeschlossen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '20px',
      display: 'grid',
      gap: '10px'
    }
  }, chapters.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.number
  }, c.image ? /*#__PURE__*/React.createElement("button", {
    onClick: () => go('ch:' + c.number),
    "aria-label": 'Kapitel ' + c.number,
    style: {
      display: 'block',
      width: '100%',
      padding: 0,
      cursor: 'pointer',
      overflow: 'hidden',
      aspectRatio: '16 / 7',
      background: 'var(--ink-800)',
      border: '1px solid var(--rule-faint)',
      borderBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../' + c.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : null, /*#__PURE__*/React.createElement(ChapterCard, {
    number: c.number,
    title: c.title,
    duration: c.duration,
    state: STATE_MAP[window.chapterState(c, store)],
    onClick: () => go('ch:' + c.number),
    style: {
      padding: '16px',
      gap: '14px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    icon: "shield-check",
    onClick: () => go('safety')
  }, "Schutz & Recht")));
}

/* ── Kapitel (kompakt) ── */
function MSection({
  s
}) {
  const wrap = {
    marginTop: '24px'
  };
  if (s.type === 'text') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--paper-100)'
    }
  }, s.h), s.p.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: '12px'
    }
  }, t)));
  if (s.type === 'principle') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "sm"
  }, /*#__PURE__*/React.createElement(MKicker, {
    tone: "var(--wire-500)"
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '25px',
      fontWeight: 700,
      lineHeight: 1.12,
      color: 'var(--paper-100)',
      marginTop: '10px'
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: '10px'
    }
  }, s.p)));
  if (s.type === 'note') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: s.tone,
    title: s.title
  }, s.text));
  if (s.type === 'compare' || s.type === 'split') {
    const pairs = s.type === 'compare' ? [['bad', s.bad], ['good', s.good]] : [['good', s.good], ['bad', s.bad]];
    return /*#__PURE__*/React.createElement("section", {
      style: wrap
    }, s.h ? /*#__PURE__*/React.createElement(Rule, {
      tone: "subtle",
      label: s.h,
      style: {
        marginBottom: '14px'
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '10px'
      }
    }, pairs.filter(x => x[1]).map(([k, v]) => {
      const good = k === 'good';
      return /*#__PURE__*/React.createElement(Card, {
        key: k,
        surface: "raised",
        padding: "sm"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: good ? 'check-check' : 'ban',
        size: 15
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-condensed)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.13em',
          textTransform: 'uppercase'
        }
      }, v.label || v.title)), v.text ? /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: '19px',
          lineHeight: 1.555,
          color: 'var(--text-primary)',
          marginTop: '9px'
        }
      }, v.text) : null, v.items ? /*#__PURE__*/React.createElement("ul", {
        style: {
          listStyle: 'none',
          margin: '10px 0 0',
          padding: 0,
          display: 'grid',
          gap: '7px'
        }
      }, v.items.map(t => /*#__PURE__*/React.createElement("li", {
        key: t,
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: '16px',
          lineHeight: 1.55,
          color: 'var(--text-secondary)'
        }
      }, t))) : null);
    })));
  }
  if (s.type === 'list') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: s.tone === 'danger' ? 'danger' : 'subtle',
    label: s.h,
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '10px'
    }
  }, s.items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '4px',
      color: s.tone === 'danger' ? 'var(--bordeaux-500)' : 'var(--volt-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.tone === 'danger' ? 'x' : 'check',
    size: 13,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.555,
      color: 'var(--text-secondary)'
    }
  }, t)))));
  if (s.type === 'definition') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "consent",
    label: s.h,
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.k,
    style: {
      padding: '11px 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--wire-500)'
    }
  }, it.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.555,
      color: 'var(--text-secondary)',
      marginTop: '5px'
    }
  }, it.v)))));
  if (s.type === 'phrases') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: s.tone === 'good' ? 'accent' : 'subtle',
    label: s.h,
    style: {
      marginBottom: '12px'
    }
  }), s.note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.555,
      color: 'var(--text-muted)',
      marginBottom: '14px'
    }
  }, s.note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, s.items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '12px 14px',
      background: 'var(--bg-surface)',
      borderLeft: '2px solid ' + (s.tone === 'good' ? 'var(--volt-600)' : 'var(--wire-600)'),
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.55,
      color: 'var(--text-primary)'
    }
  }, t))));
  return null;
}
function MChapter({
  ch,
  store,
  setStore,
  go,
  onDeltas
}) {
  const key = ch.number;
  const sc = ch.scenario;
  const scState = (store.answers[key] || {}).scenario || {};
  const setScenario = val => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], {
      scenario: val
    });
    return Object.assign({}, s, {
      answers: a
    });
  });
  const chosen = sc && sc.options.find(o => o.letter === scState.picked);
  const iaSaved = ch.interaction ? (store.answers[key] || {})[ch.interaction.type] : null;
  const putIa = val => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], {
      [ch.interaction.type]: val
    });
    return Object.assign({}, s, {
      answers: a
    });
  });
  const CH = window.FBChapters;
  const idx = CH.indexOf(ch);
  const next = idx < CH.length - 1 ? CH[idx + 1] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Kapitel ", ch.number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.13em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, ch.duration, ch.quiz ? ' · ' + ch.quiz.length + ' Fragen' : '')), ch.image ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      border: '1px solid var(--rule-subtle)',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../' + ch.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '44px',
      fontWeight: 700,
      lineHeight: 0.96,
      letterSpacing: '-0.025em',
      color: 'var(--paper-100)',
      marginTop: '14px'
    }
  }, ch.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      marginTop: '10px'
    }
  }, ch.subtitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      marginTop: '16px'
    }
  }, ch.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Was du mitnimmst",
    style: {
      marginBottom: '12px'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '8px'
    }
  }, ch.goals.map(g => /*#__PURE__*/React.createElement("li", {
    key: g,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '4px',
      color: 'var(--volt-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, g))))), ch.story ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--bordeaux-700)',
      paddingLeft: '14px',
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, null, "Pers\xF6nliche Notiz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      marginTop: '9px'
    }
  }, ch.story)) : null, (ch.sections || []).map((s, i) => /*#__PURE__*/React.createElement(MSection, {
    key: i,
    s: s
  })), sc ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Ernstfall",
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1.06,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, sc.title), /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "sm",
    style: {
      marginTop: '14px'
    }
  }, sc.brief.map((b, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '16px',
      lineHeight: 1.7,
      color: i === sc.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
      marginTop: i ? '9px' : 0
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px',
      marginTop: '14px'
    }
  }, sc.signals.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'flex-start',
      padding: '10px 12px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '1px',
      color: {
        consent: 'var(--wire-500)',
        caution: 'var(--amber-500)',
        danger: 'var(--bordeaux-400)'
      }[s.tone]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '19px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, s.text)))), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: scState.revealed ? 'Wirkung' : 'Was machst du?',
    style: {
      margin: '20px 0 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '10px'
    }
  }, sc.options.map(o => /*#__PURE__*/React.createElement(ChoiceOption, {
    key: o.letter,
    letter: o.letter,
    label: o.label,
    quote: o.quote,
    outcome: o.outcome,
    feedback: o.feedback,
    selected: scState.picked === o.letter,
    revealed: Boolean(scState.revealed),
    disabled: Boolean(scState.revealed),
    onClick: () => setScenario({
      picked: o.letter,
      revealed: false
    }),
    style: {
      padding: '16px'
    }
  }))), scState.revealed && chosen && chosen.deltas ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px',
      marginTop: '14px'
    }
  }, chosen.deltas.map(d => {
    const c = (window.FBCompetences.find(x => x.id === d.id) || {}).label || d.id;
    return /*#__PURE__*/React.createElement(Toast, {
      key: d.id,
      tone: String(d.delta).indexOf('−') === 0 ? 'loss' : 'gain',
      title: c,
      delta: d.delta
    });
  })) : null, !scState.revealed ? /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    disabled: !scState.picked,
    style: {
      marginTop: '16px'
    },
    onClick: () => {
      setScenario({
        picked: scState.picked,
        revealed: true
      });
      if (chosen) onDeltas(chosen.deltas);
    }
  }, scState.picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion') : null) : null, ch.interaction ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: ch.interaction.title,
    style: {
      marginBottom: '12px'
    }
  }), ch.interaction.prompt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.555,
      color: 'var(--text-muted)',
      marginBottom: '14px'
    }
  }, ch.interaction.prompt) : null, ch.interaction.type === 'traffic' ? /*#__PURE__*/React.createElement(TrafficBlock, {
    items: ch.interaction.items,
    saved: iaSaved,
    onAnswer: (i, v) => putIa(Object.assign({}, iaSaved, {
      [i]: v
    }))
  }) : null, ch.interaction.type === 'sort' ? /*#__PURE__*/React.createElement(SortBlock, {
    block: ch.interaction,
    saved: iaSaved,
    onAnswer: (i, v) => putIa(Object.assign({}, iaSaved, {
      [i]: v
    }))
  }) : null, ch.interaction.type === 'facts' ? /*#__PURE__*/React.createElement(FactsBlock, {
    items: ch.interaction.items,
    saved: iaSaved,
    onAnswer: (i, v) => putIa(Object.assign({}, iaSaved, {
      [i]: v
    }))
  }) : null, ch.interaction.type === 'improve' ? /*#__PURE__*/React.createElement(ImproveBlock, {
    rounds: ch.interaction.rounds,
    saved: iaSaved,
    onAnswer: (i, v) => putIa(Object.assign({}, iaSaved, {
      [i]: v
    }))
  }) : null, ch.interaction.type === 'checklist' ? /*#__PURE__*/React.createElement(ChecklistBlock, {
    items: ch.interaction.items,
    saved: iaSaved,
    onToggle: i => putIa(Object.assign({}, iaSaved, {
      [i]: !(iaSaved || {})[i]
    }))
  }) : null, ch.interaction.type === 'values' ? /*#__PURE__*/React.createElement(ValuesBlock, {
    items: ch.interaction.items,
    saved: iaSaved,
    onToggle: i => putIa(Object.assign({}, iaSaved, {
      [i]: !(iaSaved || {})[i]
    }))
  }) : null) : null, ch.challenge ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Real-Life-\xDCbung",
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, ch.challenge.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '17px',
      lineHeight: 1.65,
      color: 'var(--ink-700)',
      marginTop: '9px'
    }
  }, ch.challenge.text), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStore(s => Object.assign({}, s, {
      challenges: Object.assign({}, s.challenges, {
        [key]: !s.challenges[key]
      })
    })),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '14px',
      padding: '10px 14px',
      minHeight: '44px',
      cursor: 'pointer',
      width: '100%',
      justifyContent: 'center',
      background: store.challenges[key] ? 'var(--ink-800)' : 'transparent',
      color: store.challenges[key] ? 'var(--paper-100)' : 'var(--ink-700)',
      border: '1px solid var(--rule-ink-strong)',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: store.challenges[key] ? 'check-check' : 'circle-dot',
    size: 14
  }), store.challenges[key] ? 'Erledigt' : 'Vorgemerkt'))) : null, ch.reflection ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Reflexion",
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: ch.reflection.question,
    rows: 4,
    value: store.reflections[key] || '',
    placeholder: ch.reflection.placeholder,
    onChange: e => setStore(s => Object.assign({}, s, {
      reflections: Object.assign({}, s.reflections, {
        [key]: e.target.value
      })
    })),
    hint: "Bleibt lokal auf deinem Ger\xE4t."
  })) : null, ch.quiz ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Wissenstest",
    style: {
      marginBottom: '14px'
    }
  }), /*#__PURE__*/React.createElement(QuizBlock, {
    id: key,
    quiz: ch.quiz,
    saved: store.quiz[key] || {},
    onAnswer: (qi, oi) => setStore(s => Object.assign({}, s, {
      quiz: Object.assign({}, s.quiz, {
        [key]: Object.assign({}, s.quiz[key], {
          [qi]: oi
        })
      })
    }))
  })) : null, ch.summary ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "sm"
  }, /*#__PURE__*/React.createElement(MKicker, {
    tone: "var(--text-faint)"
  }, "Zusammenfassung"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '12px 0 0',
      padding: 0,
      display: 'grid',
      gap: '9px'
    }
  }, ch.summary.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '4px',
      color: 'var(--paper-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, t)))))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '26px'
    }
  }, next ? /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('ch:' + next.number)
  }, "Weiter: ", next.rail) : /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "gauge",
    onClick: () => go('profile')
  }, "Zur Auswertung"))));
}

/* ── Auswertung ── */
function MProfile({
  chapters,
  store,
  setStore,
  go
}) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MKicker, null, "Pers\xF6nliche Auswertung"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: '10px'
    }
  }, "Kompetenzprofil")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '38px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: 'var(--paper-100)'
    }
  }, done, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontSize: '20px'
    }
  }, "/12")))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '22px',
      display: 'grid',
      gap: '16px'
    }
  }, COMP.map(c => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: c.id,
    label: c.label,
    value: store.competences[c.id],
    icon: c.icon,
    tone: c.id === 'respekt' ? 'consent' : 'gain',
    note: c.desc
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "moral",
    title: "Gemessen wird dein Verhalten, nicht dein Erfolg."
  }, "Keine Zahl f\xFCr Matches oder Sexualkontakte. Eine respektvoll angenommene Absage z\xE4hlt genauso viel wie ein gelungenes Gespr\xE4ch.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    icon: "ellipsis",
    onClick: () => go('settings')
  }, "Einstellungen")));
}

/* ── Schutz & Recht ── */
function MSafety() {
  const S = window.FBSafety;
  const TONE = {
    consent: 'var(--wire-500)',
    caution: 'var(--amber-500)',
    danger: 'var(--bordeaux-400)',
    neutral: 'var(--paper-300)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    tone: "var(--wire-500)"
  }, "Immer erreichbar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: '11px'
    }
  }, "Schutz & Recht"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "caution",
    label: "Hinweis",
    title: "Keine Rechtsberatung."
  }, S.disclaimer)), S.groups.map(g => /*#__PURE__*/React.createElement("section", {
    key: g.id,
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '11px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      color: TONE[g.tone]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 600,
      color: 'var(--paper-100)'
    }
  }, g.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      marginTop: '14px',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.k,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: TONE[g.tone]
    }
  }, it.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: '6px'
    }
  }, it.v))))))));
}

/* ── Einstellungen ── */
function MSettings({
  store,
  onReset
}) {
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: '18px',
      paddingBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement(MKicker, {
    tone: "var(--text-faint)"
  }, "Einstellungen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      fontWeight: 700,
      lineHeight: 1.02,
      color: 'var(--paper-100)',
      marginTop: '10px'
    }
  }, "Fortschritt & Daten"), /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    padding: "sm",
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '17px',
      lineHeight: 1.75,
      color: 'var(--text-secondary)'
    }
  }, "Lokal gespeichert \xB7 Modell v", window.FBStore.VERSION, /*#__PURE__*/React.createElement("br", null), "Zuletzt: ", store.updatedAt ? new Date(store.updatedAt).toLocaleString('de-CH') : '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    title: "Was du hier eingibst, bleibt hier."
  }, "Nichts verl\xE4sst dieses Ger\xE4t. Gib trotzdem keine echten Namen oder Nachrichten anderer Personen ein.")), /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Zur\xFCcksetzen",
    style: {
      margin: '24px 0 14px'
    }
  }), confirm ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "danger",
    icon: "ban",
    onClick: () => {
      onReset();
      setConfirm(false);
    }
  }, "Ja, alles l\xF6schen"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "ghost",
    onClick: () => setConfirm(false)
  }, "Abbrechen")) : /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    icon: "ban",
    onClick: () => setConfirm(true)
  }, "Fortschritt zur\xFCcksetzen"));
}
Object.assign(window, {
  MCover,
  MOverview,
  MChapters,
  MChapter,
  MProfile,
  MSafety,
  MSettings,
  MSection,
  MKicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning-mobile/MobileScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning-mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning-mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/App.jsx
try { (() => {
const {
  Badge,
  Button,
  Icon,
  Rule
} = window.FUCKBOYDesignSystem_007b99;
const META = {
  overview: {
    crumb: 'Kursübersicht',
    title: 'Mehr Dates. Mehr Sex. Und die Rechnung dazu.'
  },
  index: {
    crumb: 'Kapitel',
    title: 'Alle zwölf Kapitel'
  },
  profile: {
    crumb: 'Auswertung',
    title: 'Dein Kompetenzprofil'
  },
  safety: {
    crumb: 'Schutz & Recht',
    title: 'Immer erreichbar'
  },
  settings: {
    crumb: 'Einstellungen',
    title: 'Fortschritt & Daten'
  }
};
function App() {
  const CH = window.FBChapters;
  const [store, setStore] = React.useState(() => window.FBStore.load());
  const [screen, setScreen] = React.useState(() => {
    const s = window.FBStore.load();
    return s.lastScreen && s.lastScreen !== 'cover' ? s.lastScreen : 'cover';
  });
  React.useEffect(() => {
    window.FBStore.save(store);
  }, [store]);
  const go = s => {
    setScreen(s);
    setStore(prev => {
      const next = Object.assign({}, prev, {
        lastScreen: s
      });
      if (s.indexOf('ch:') === 0) {
        const n = s.slice(3);
        next.chapters = Object.assign({}, prev.chapters, {
          [n]: Object.assign({
            started: true
          }, prev.chapters[n], {
            started: true
          })
        });
      }
      return next;
    });
    const m = document.getElementById('fb-main');
    if (m) m.scrollTop = 0;
  };

  /* Kompetenzwerte aus einer Entscheidung fortschreiben */
  const applyDeltas = deltas => {
    if (!deltas) return;
    setStore(prev => {
      const c = Object.assign({}, prev.competences);
      deltas.forEach(d => {
        const n = parseInt(String(d.delta).replace('−', '-'), 10);
        if (!isNaN(n) && c[d.id] !== undefined) c[d.id] = Math.max(0, Math.min(100, c[d.id] + n));
      });
      return Object.assign({}, prev, {
        competences: c
      });
    });
  };

  /* Kapitel gilt als abgeschlossen, sobald Pflichtteile erledigt sind */
  React.useEffect(() => {
    let changed = false;
    const next = Object.assign({}, store.chapters);
    CH.forEach(ch => {
      const rec = next[ch.number] || {};
      const complete = window.chapterComplete(ch, store);
      if (complete && rec.started && !rec.done) {
        next[ch.number] = Object.assign({}, rec, {
          done: true
        });
        changed = true;
      }
      if (!complete && rec.done) {
        next[ch.number] = Object.assign({}, rec, {
          done: false
        });
        changed = true;
      }
    });
    if (changed) setStore(s => Object.assign({}, s, {
      chapters: next
    }));
  }, [store.answers, store.quiz]);
  const doneCount = CH.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  if (screen === 'cover') return /*#__PURE__*/React.createElement(CoverScreen, {
    go: go
  });
  if (screen === 'heaven') return /*#__PURE__*/React.createElement(HeavenScreen, {
    go: go
  });
  const isCh = screen.indexOf('ch:') === 0;
  const ch = isCh ? CH.find(c => c.number === screen.slice(3)) : null;
  const m = ch ? {
    crumb: 'Kapitel ' + ch.number,
    title: ch.title
  } : META[screen] || {
    crumb: '',
    title: ''
  };
  const idx = ch ? CH.indexOf(ch) : -1;
  const prev = idx > 0 ? CH[idx - 1] : null;
  const next = idx >= 0 && idx < CH.length - 1 ? CH[idx + 1] : null;

  /* Kapitel mit eigener Spezialkomponente */
  let extra = null;
  if (ch && ch.special === 'playbook') extra = /*#__PURE__*/React.createElement(PlaybookExtra, {
    photos: window.FBData.photos,
    algorithm: window.FBData.algorithm
  });
  if (ch && ch.special === 'snippets') extra = /*#__PURE__*/React.createElement(SnippetExtra, {
    snippets: window.FBData.snippets
  });
  if (ch && ch.special === 'chatsim') extra = /*#__PURE__*/React.createElement(ChatSimExtra, {
    chat: window.FBData.chat
  });
  return /*#__PURE__*/React.createElement(Shell, {
    chapters: CH,
    screen: screen,
    go: go,
    store: store,
    done: doneCount,
    total: CH.length,
    crumb: m.crumb,
    title: m.title,
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "consent",
      icon: "shield-check"
    }, "Respekt ", store.competences.respekt)
  }, screen === 'overview' ? /*#__PURE__*/React.createElement(OverviewScreen, {
    chapters: CH,
    store: store,
    go: go
  }) : null, screen === 'index' ? /*#__PURE__*/React.createElement(ChapterIndex, {
    chapters: CH,
    store: store,
    go: go
  }) : null, screen === 'profile' ? /*#__PURE__*/React.createElement(CompetenceScreen, {
    store: store,
    setStore: setStore,
    chapters: CH,
    go: go
  }) : null, screen === 'safety' ? /*#__PURE__*/React.createElement(SafetyScreen, null) : null, screen === 'settings' ? /*#__PURE__*/React.createElement(SettingsScreen, {
    store: store,
    onReset: () => {
      const e = window.FBStore.reset();
      setStore(e);
    }
  }) : null, ch ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ChapterScreen, {
    ch: ch,
    store: store,
    setStore: setStore,
    go: go,
    onDeltas: applyDeltas,
    extra: extra
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-5xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)',
      maxWidth: 'var(--width-content)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: window.chapterState(ch, store) === 'abgeschlossen' ? 'var(--volt-500)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: window.chapterState(ch, store) === 'abgeschlossen' ? 'check-check' : 'circle-dot',
    size: 14
  }), window.chapterState(ch, store) === 'abgeschlossen' ? 'Kapitel abgeschlossen' : ch.scenario ? 'Ernstfall und Wissenstest fehlen noch' : 'Wissenstest fehlt noch'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, prev ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-left",
    onClick: () => go('ch:' + prev.number)
  }, prev.number) : null, next ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('ch:' + next.number)
  }, "Weiter: ", next.rail) : /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "gauge",
    onClick: () => go('profile')
  }, "Zur Auswertung")))) : null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ChapterIndex.jsx
try { (() => {
const {
  ChapterCard,
  Rule,
  Badge,
  Button,
  Icon,
  Card
} = window.FUCKBOYDesignSystem_007b99;
const STATE_MAP = {
  'abgeschlossen': 'done',
  'begonnen': 'available',
  'nicht begonnen': 'available'
};
function ChapterIndex({
  chapters,
  store,
  go
}) {
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const acts = [{
    k: 'Akt I · 01–03',
    t: 'Die Basis',
    s: 'Haltung, Consent, Auftreten. Alles, was vor der ersten Nachricht zählt.',
    from: 0,
    to: 3
  }, {
    k: 'Akt II · 04–07',
    t: 'Der Weg zum Treffen',
    s: 'Profil, Schreiben, Einladung, Date. Das Handwerk.',
    from: 3,
    to: 7
  }, {
    k: 'Akt III · 08–12',
    t: 'Nähe und Rechnung',
    s: 'Der grösste Fehler, Ablehnung, Nähe, Danach — und was übrig bleibt.',
    from: 7,
    to: 12
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Kapitel\xFCbersicht"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Vom ersten Match", /*#__PURE__*/React.createElement("br", null), "bis zum Heimweg.")), /*#__PURE__*/React.createElement(Badge, {
    tone: done ? 'accent' : 'neutral',
    icon: done ? 'check-check' : 'file-text'
  }, done, " von ", chapters.length, " abgeschlossen")), acts.map(a => /*#__PURE__*/React.createElement("section", {
    key: a.t,
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, a.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, a.t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      marginTop: 'var(--space-sm)',
      maxWidth: '60ch'
    }
  }, a.s), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)'
    }
  }, chapters.slice(a.from, a.to).map(c => /*#__PURE__*/React.createElement("div", {
    key: c.number,
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 0
    }
  }, c.image ? /*#__PURE__*/React.createElement("button", {
    onClick: () => go('ch:' + c.number),
    "aria-label": 'Kapitel ' + c.number,
    style: {
      flex: 'none',
      width: 150,
      padding: 0,
      cursor: 'pointer',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      border: '1px solid var(--rule-faint)',
      borderRight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../' + c.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : null, /*#__PURE__*/React.createElement(ChapterCard, {
    number: c.number,
    title: c.title,
    summary: c.subtitle,
    duration: c.duration,
    decisions: c.quiz ? c.quiz.length : undefined,
    state: STATE_MAP[window.chapterState(c, store)],
    onClick: () => go('ch:' + c.number),
    style: {
      flex: 1,
      minWidth: 0
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "consent",
    label: "Immer erreichbar",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    padding: "md",
    interactive: true,
    onClick: () => go('safety'),
    style: {
      maxWidth: 'var(--width-reader)',
      borderColor: 'rgba(19,229,255,.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      color: 'var(--wire-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 700,
      color: 'var(--paper-100)'
    }
  }, "Schutz & Recht"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: '5px'
    }
  }, "Consent, sexuelle Gesundheit, digitale Grenzen, Sicherheit. Kein Kapitel \u2014 jederzeit offen.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  }))))));
}
Object.assign(window, {
  ChapterIndex
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ChapterIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ChapterScreen.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  Textarea,
  WarningNotice,
  Toast,
  ChoiceOption,
  Stamp
} = window.FUCKBOYDesignSystem_007b99;

/* ── Abschnitts-Renderer ── */
function Section({
  s
}) {
  const wrap = {
    marginTop: 'var(--space-3xl)'
  };
  if (s.type === 'text') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--paper-100)'
    }
  }, s.h), s.p.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)',
      maxWidth: 'var(--measure-prose)'
    }
  }, t)));
  if (s.type === 'principle') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--wire-500)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-md)'
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-md)'
    }
  }, s.p)));
  if (s.type === 'note') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: s.tone,
    title: s.title
  }, s.text));
  if (s.type === 'compare') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, s.h ? /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: s.h,
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--space-lg)'
    }
  }, [['bad', s.bad], ['good', s.good]].filter(x => x[1]).map(([k, v]) => {
    const good = k === 'good';
    return /*#__PURE__*/React.createElement(Card, {
      key: k,
      surface: "raised",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: good ? 'check-check' : 'ban',
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-condensed)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase'
      }
    }, v.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 1.55,
        color: 'var(--text-primary)',
        marginTop: '10px'
      }
    }, v.text));
  })));
  if (s.type === 'split') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, s.h ? /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: s.h,
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--space-lg)'
    }
  }, [['good', s.good], ['bad', s.bad]].map(([k, v]) => {
    const good = k === 'good';
    return /*#__PURE__*/React.createElement(Card, {
      key: k,
      surface: "ink",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-condensed)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)'
      }
    }, v.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 'var(--space-md) 0 0',
        padding: 0,
        display: 'grid',
        gap: '9px'
      }
    }, v.items.map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flex: 'none',
        marginTop: '3px',
        color: good ? 'var(--volt-600)' : 'var(--bordeaux-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: good ? 'check' : 'x',
      size: 13,
      stroke: 2.5
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        lineHeight: 1.5,
        color: 'var(--text-secondary)'
      }
    }, t)))));
  })));
  if (s.type === 'list') {
    const color = s.tone === 'accent' ? 'var(--volt-600)' : s.tone === 'danger' ? 'var(--bordeaux-500)' : s.tone === 'consent' ? 'var(--wire-500)' : 'var(--text-faint)';
    return /*#__PURE__*/React.createElement("section", {
      style: wrap
    }, /*#__PURE__*/React.createElement(Rule, {
      tone: s.tone === 'danger' ? 'danger' : 'subtle',
      label: s.h,
      style: {
        marginBottom: 'var(--space-lg)'
      }
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: '11px',
        maxWidth: 'var(--measure-prose)'
      }
    }, s.items.map(t => /*#__PURE__*/React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flex: 'none',
        marginTop: '4px',
        color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.tone === 'danger' ? 'x' : 'check',
      size: 14,
      stroke: 2.5
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        lineHeight: 1.55,
        color: 'var(--text-secondary)'
      }
    }, t)))));
  }
  if (s.type === 'definition') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "consent",
    label: s.h,
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.k,
    style: {
      display: 'grid',
      gridTemplateColumns: '160px minmax(0,1fr)',
      gap: 'var(--space-lg)',
      padding: 'var(--space-md) 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--wire-500)'
    }
  }, it.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, it.v)))));
  if (s.type === 'phrases') return /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: s.tone === 'good' ? 'accent' : 'subtle',
    label: s.h,
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), s.note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-lg)',
      maxWidth: 'var(--measure-prose)'
    }
  }, s.note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, s.items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '13px 16px',
      background: 'var(--bg-surface)',
      borderLeft: '2px solid ' + (s.tone === 'good' ? 'var(--volt-600)' : 'var(--wire-600)'),
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--text-primary)'
    }
  }, t))));
  return null;
}

/* ── Interaktion ── */
function Interaction({
  ch,
  block,
  store,
  setStore
}) {
  if (!block) return null;
  const key = ch.number;
  const saved = (store.answers[key] || {})[block.type];
  const put = val => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], {
      [block.type]: val
    });
    return Object.assign({}, s, {
      answers: a
    });
  });
  const setIdx = (i, v) => put(Object.assign({}, saved, {
    [i]: v
  }));
  const toggleIdx = i => put(Object.assign({}, saved, {
    [i]: !(saved || {})[i]
  }));
  let body = null;
  if (block.type === 'traffic') body = /*#__PURE__*/React.createElement(TrafficBlock, {
    items: block.items,
    saved: saved,
    onAnswer: setIdx
  });
  if (block.type === 'sort') body = /*#__PURE__*/React.createElement(SortBlock, {
    block: block,
    saved: saved,
    onAnswer: setIdx
  });
  if (block.type === 'facts') body = /*#__PURE__*/React.createElement(FactsBlock, {
    items: block.items,
    saved: saved,
    onAnswer: setIdx
  });
  if (block.type === 'improve') body = /*#__PURE__*/React.createElement(ImproveBlock, {
    rounds: block.rounds,
    saved: saved,
    onAnswer: setIdx
  });
  if (block.type === 'checklist') body = /*#__PURE__*/React.createElement(ChecklistBlock, {
    items: block.items,
    saved: saved,
    onToggle: toggleIdx
  });
  if (block.type === 'values') body = /*#__PURE__*/React.createElement(ValuesBlock, {
    items: block.items,
    saved: saved,
    onToggle: toggleIdx
  });
  if (!body) return null;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: block.title,
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), block.prompt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-lg)',
      maxWidth: 'var(--measure-prose)'
    }
  }, block.prompt) : null, body);
}

/* ── Szenario ── */
const SIG = {
  consent: 'var(--wire-500)',
  caution: 'var(--amber-500)',
  danger: 'var(--bordeaux-400)'
};
const COMP = window.FBCompetences || [];
const compLabel = id => (COMP.find(c => c.id === id) || {}).label || id;
function ScenarioBlock({
  ch,
  sc,
  store,
  setStore,
  onDeltas
}) {
  const key = ch.number;
  const state = (store.answers[key] || {}).scenario;
  const picked = state && state.picked;
  const revealed = state && state.revealed;
  const chosen = sc.options.find(o => o.letter === picked);
  const set = val => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], {
      scenario: val
    });
    return Object.assign({}, s, {
      answers: a
    });
  });
  const commit = () => {
    set({
      picked,
      revealed: true
    });
    if (chosen) onDeltas(chosen.deltas);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Ernstfall",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, sc.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 'var(--space-3xl)',
      marginTop: 'var(--space-xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "md"
  }, sc.brief.map((b, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: i === sc.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
      marginTop: i ? '10px' : 0
    }
  }, b))), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: revealed ? 'Wirkung deiner Entscheidung' : 'Was machst du?',
    style: {
      margin: 'var(--space-2xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, sc.options.map(o => /*#__PURE__*/React.createElement(ChoiceOption, {
    key: o.letter,
    letter: o.letter,
    label: o.label,
    quote: o.quote,
    outcome: o.outcome,
    feedback: o.feedback,
    selected: picked === o.letter,
    revealed: Boolean(revealed),
    disabled: Boolean(revealed),
    onClick: () => set({
      picked: o.letter,
      revealed: false
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: revealed ? 'var(--amber-500)' : 'var(--text-faint)'
    }
  }, revealed ? 'Keine Option ist kostenlos' : 'Keine Antwort ist richtig oder falsch'), !revealed ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    disabled: !picked,
    onClick: commit
  }, picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion') : null)), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Signale",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, sc.signals.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      padding: '11px 12px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '1px',
      color: SIG[s.tone]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, s.text))))), revealed && chosen && chosen.deltas ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Kompetenzen",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, chosen.deltas.map(d => /*#__PURE__*/React.createElement(Toast, {
    key: d.id,
    tone: d.delta.indexOf('−') === 0 ? 'loss' : 'gain',
    title: compLabel(d.id),
    delta: d.delta
  })))) : null)));
}

/* ── Kapitelseite ── */
function ChapterScreen({
  ch,
  store,
  setStore,
  go,
  onDeltas,
  extra
}) {
  const key = ch.number;
  const setField = (bucket, val) => setStore(s => Object.assign({}, s, {
    [bucket]: Object.assign({}, s[bucket], {
      [key]: val
    })
  }));
  const quizSaved = store.quiz[key] || {};
  const reflection = store.reflections[key] || '';
  const personal = store.reflections[key + ':line'] || '';
  const challengeDone = Boolean(store.challenges[key]);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Kapitel ", ch.number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, ch.duration, ch.quiz ? ' · ' + ch.quiz.length + ' Fragen' : '', ch.scenario ? ' · 1 Ernstfall' : '')), ch.image ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-xl)',
      aspectRatio: '4 / 3',
      maxHeight: 300,
      overflow: 'hidden',
      border: '1px solid var(--rule-subtle)',
      background: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../' + ch.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '64px',
      fontWeight: 700,
      lineHeight: 0.92,
      letterSpacing: '-0.025em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-xl)',
      textWrap: 'balance'
    }
  }, ch.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '15px',
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      marginTop: 'var(--space-md)'
    }
  }, ch.subtitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      marginTop: 'var(--space-2xl)',
      maxWidth: '48ch'
    }
  }, ch.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Was du mitnimmst",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '8px'
    }
  }, ch.goals.map(g => /*#__PURE__*/React.createElement("li", {
    key: g,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '4px',
      color: 'var(--volt-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, g))))), ch.story ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--bordeaux-700)',
      paddingLeft: 'var(--space-lg)',
      marginTop: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      marginBottom: 'var(--space-sm)'
    }
  }, "Pers\xF6nliche Notiz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, ch.story)) : null, (ch.sections || []).map((s, i) => /*#__PURE__*/React.createElement(Section, {
    key: i,
    s: s
  }))), extra, ch.scenario ? /*#__PURE__*/React.createElement(ScenarioBlock, {
    ch: ch,
    sc: ch.scenario,
    store: store,
    setStore: setStore,
    onDeltas: onDeltas
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement(Interaction, {
    ch: ch,
    block: ch.interaction,
    store: store,
    setStore: setStore
  }), ch.challenge ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Real-Life-\xDCbung",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, ch.challenge.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      lineHeight: 1.65,
      color: 'var(--ink-700)',
      marginTop: '10px'
    }
  }, ch.challenge.text)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setField('challenges', !challengeDone),
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '9px 13px',
      cursor: 'pointer',
      background: challengeDone ? 'var(--ink-800)' : 'transparent',
      color: challengeDone ? 'var(--paper-100)' : 'var(--ink-700)',
      border: '1px solid var(--rule-ink-strong)',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: challengeDone ? 'check-check' : 'circle-dot',
    size: 14
  }), challengeDone ? 'Erledigt' : 'Vorgemerkt')))) : null, ch.reflection ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Reflexion",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: ch.reflection.question,
    rows: 4,
    value: reflection,
    placeholder: ch.reflection.placeholder,
    onChange: e => setField('reflections', e.target.value),
    hint: "Bleibt lokal auf deinem Ger\xE4t. Keine echten Namen oder Nachrichten anderer Personen eingeben."
  })) : null, ch.personalLine ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: ch.personalLine.question,
    rows: 2,
    value: personal,
    placeholder: ch.personalLine.placeholder,
    onChange: e => setStore(s => Object.assign({}, s, {
      reflections: Object.assign({}, s.reflections, {
        [key + ':line']: e.target.value
      })
    }))
  })) : null, ch.quiz ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Wissenstest",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(QuizBlock, {
    id: key,
    quiz: ch.quiz,
    saved: quizSaved,
    onAnswer: (qi, oi) => setStore(s => Object.assign({}, s, {
      quiz: Object.assign({}, s.quiz, {
        [key]: Object.assign({}, s.quiz[key], {
          [qi]: oi
        })
      })
    }))
  })) : null, ch.summary ? /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Zusammenfassung"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-md) 0 0',
      padding: 0,
      display: 'grid',
      gap: '9px'
    }
  }, ch.summary.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '4px',
      color: 'var(--paper-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 13,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, t)))), ch.transfer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)',
      paddingTop: 'var(--space-md)',
      borderTop: '1px solid var(--rule-faint)',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '2px',
      color: 'var(--volt-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--text-primary)'
    }
  }, ch.transfer)) : null)) : null));
}
Object.assign(window, {
  ChapterScreen,
  Section,
  ScenarioBlock,
  Interaction
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ChapterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/CoverScreen.jsx
try { (() => {
const {
  Button,
  Stamp,
  PillChoice,
  WarningNotice,
  Rule
} = window.FUCKBOYDesignSystem_007b99;
function CoverScreen({
  go
}) {
  const [pill, setPill] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      overflowY: 'auto',
      background: 'var(--bg-void)'
    },
    "data-grain": true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-6xl) var(--gutter-page-wide) var(--space-7xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-2xl)',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bordeaux-400)'
    }
  }, "\xDCber 200 Frauen \xB7 Psychologie statt Zufall \xB7 Anonym"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, "Ausgabe 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '3px solid var(--paper-100)',
      padding: 'var(--space-4xl) var(--space-4xl) var(--space-3xl)',
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '86px',
      lineHeight: 0.86,
      letterSpacing: '-0.035em',
      color: 'var(--paper-100)'
    }
  }, "FICK-TRAINER"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-strong)',
      marginTop: 'var(--space-xl)',
      paddingTop: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '15px',
      fontWeight: 600,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "fick-trainer.de \xB7 Der Ablauf ist immer gleich"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "12 Kapitel \xB7 ca. 210 Minuten \xB7 1 Regel \xFCber allem"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--space-6xl)',
      marginTop: 'var(--space-5xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      maxWidth: '46ch'
    }
  }, "Ich bin nicht besonders gut aussehend. Ich habe trotzdem mit \xFCber 200 Frauen geschlafen, fast alle \xFCber Dating-Apps. Nicht wegen meinem Gesicht \u2014 wegen Psychologie. Erwartungssteuerung, Gespr\xE4chsf\xFChrung, Timing, Verknappung. Dieselben Mechanismen, die ich beruflich im Verkauf einsetze, funktionieren beim Dating genauso. Das ist der unangenehme Teil."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      maxWidth: '52ch',
      marginTop: 'var(--space-lg)'
    }
  }, "Ich schreibe unter keinem Namen. Nicht aus Bescheidenheit \u2014 ich bin schlicht noch nicht fertig. Ich benutze das hier weiter, w\xE4hrend du es liest. Jemand, der aufgeh\xF6rt h\xE4tte, w\xFCrde das anders erz\xE4hlen, und ehrlicher w\xE4re es nicht."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--bordeaux-700)',
      paddingLeft: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Und ja \u2014 merkst du, was der Absatz oben gemacht hat? Anonymit\xE4t erzeugt Autorit\xE4t, und \u201Enoch nicht fertig\" erzeugt Dringlichkeit. Beides sind Techniken aus Kapitel 05. Sie funktionieren auch bei dir.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--rule-subtle)',
      paddingLeft: 'var(--space-lg)',
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Ich schreibe das auf, weil es funktioniert. Und weil ich weiss, was es kaputt macht. Beides steht hier drin, in derselben Reihenfolge, in der es dir passieren wird.")), /*#__PURE__*/React.createElement(Rule, {
    tone: "faint",
    style: {
      margin: 'var(--space-3xl) 0 var(--space-xl)'
    }
  }), /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    title: "Eine Regel steht \xFCber allem."
  }, "Sobald sie z\xF6gert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne Verhandlung, ohne zweiten Anlauf. Ein Nein ist keine H\xFCrde \u2014 es ist das Ende des Themas.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '38px',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)'
    }
  }, "Welche Pille nimmst du?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(PillChoice, {
    pill: "red",
    title: "Zeig mir die verbotenen Techniken.",
    selected: pill === 'red',
    onClick: () => setPill('red'),
    description: "Profil, Algorithmus, Sprache, Timing. Alles, was auf Dating-Apps wirklich funktioniert \u2014 auch das, was man normalerweise nicht laut sagt."
  }), /*#__PURE__*/React.createElement(PillChoice, {
    pill: "blue",
    title: "Ich suche eine Beziehung.",
    selected: pill === 'blue',
    onClick: () => setPill('blue'),
    description: "Du willst eine Partnerin, keine Methode. Dann ist hier nichts f\xFCr dich dabei \u2014 und das ist v\xF6llig in Ordnung."
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    disabled: !pill,
    onClick: () => go(pill === 'blue' ? 'heaven' : 'overview'),
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, pill === 'blue' ? 'Bestätigen' : pill ? 'Kurs starten' : 'Wähle eine Pille')))));
}
Object.assign(window, {
  CoverScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/CoverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/HeavenScreen.jsx
try { (() => {
const {
  Button
} = window.FUCKBOYDesignSystem_007b99;

/* Der blaue Ausgang. Wird gespielt wie ein echtes Ende — kein Weiterknopf,
   nur der Rückweg. Das Bild liefert der Host; hier steht bewusst ein Platzhalter. */
function HeavenScreen({
  go,
  compact = false,
  image
}) {
  const src = image || window.__resources && window.__resources.heavenImg || '../../assets/heaven.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      overflowY: 'auto',
      background: 'radial-gradient(120% 90% at 50% 0%, #fffdf6 0%, var(--paper-100) 42%, var(--paper-200) 78%, var(--paper-300) 100%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'repeating-conic-gradient(from 0deg at 50% -10%, rgba(255,255,255,.85) 0deg 3deg, rgba(255,255,255,0) 3deg 11deg)',
      opacity: 0.5,
      maskImage: 'radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: compact ? '32px 24px' : 'var(--space-5xl) var(--gutter-page-wide)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: compact ? '100%' : '560px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: compact ? '250px' : '320px',
      margin: '0 auto',
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      borderRadius: '999px 999px 8px 8px',
      boxShadow: '0 30px 80px -30px rgba(120,90,20,.5)',
      maskImage: 'linear-gradient(to bottom, #000 62%, rgba(0,0,0,.25) 88%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, #000 62%, rgba(0,0,0,.25) 88%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 22%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: compact ? '38px' : '64px',
      lineHeight: 0.94,
      letterSpacing: '-0.025em',
      color: 'var(--ink-900)',
      marginTop: compact ? '10px' : 'var(--space-lg)'
    }
  }, "Willkommen, Sohn."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: compact ? '11px' : '13px',
      fontWeight: 600,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginTop: compact ? '16px' : 'var(--space-xl)'
    }
  }, "Du hast die blaue Pille genommen"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: compact ? '15px' : '17px',
      lineHeight: 1.6,
      color: 'var(--ink-500)',
      marginTop: compact ? '14px' : 'var(--space-lg)',
      maxWidth: '44ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Du suchst eine Beziehung. Dann hat dieser Kurs dir nichts zu geben \u2014 er ist f\xFCr etwas anderes gebaut. Geh und such sie. Ehrlich, ohne Methode, ohne Timing."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    onClick: () => go('cover'),
    style: {
      marginTop: compact ? '22px' : 'var(--space-2xl)',
      color: 'var(--ink-400)'
    }
  }, "Doch die rote Pille nehmen"))));
}
Object.assign(window, {
  HeavenScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/HeavenScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/MetaScreens.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  Tabs,
  WarningNotice,
  ScoreMeter,
  Textarea
} = window.FUCKBOYDesignSystem_007b99;

/* ── Kompetenzprofil ── */
function CompetenceScreen({
  store,
  setStore,
  chapters,
  go
}) {
  const [tab, setTab] = React.useState('profil');
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => chapterState(c, store) === 'abgeschlossen').length;
  const challenges = chapters.filter(c => c.challenge);
  const kodex = (() => {
    const ch = chapters.find(c => c.interaction && c.interaction.type === 'values');
    if (!ch) return [];
    const picked = (store.answers[ch.number] || {}).values || {};
    return ch.interaction.items.filter((_, i) => picked[i]);
  })();
  const reflections = chapters.map(c => ({
    ch: c,
    text: store.reflections[c.number]
  })).filter(x => x.text && x.text.trim());
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Pers\xF6nliche Auswertung"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Dein Kompetenzprofil")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '56px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: 'var(--paper-100)'
    }
  }, done, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontSize: '28px'
    }
  }, "/", chapters.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '6px'
    }
  }, "Kapitel abgeschlossen"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 'var(--space-3xl)'
    },
    items: [{
      value: 'profil',
      label: 'Kompetenzen',
      icon: 'gauge'
    }, {
      value: 'kodex',
      label: 'Dein Kodex',
      icon: 'scale',
      count: kodex.length || undefined
    }, {
      value: 'transfer',
      label: 'Transferplan',
      icon: 'target'
    }, {
      value: 'notizen',
      label: 'Notizen',
      icon: 'file-text',
      count: reflections.length || undefined
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, tab === 'profil' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      columnGap: 'var(--space-4xl)',
      rowGap: 'var(--space-2xl)'
    }
  }, COMP.map(c => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: c.id,
    label: c.label,
    value: store.competences[c.id],
    icon: c.icon,
    tone: c.id === 'respekt' ? 'consent' : 'gain',
    note: c.desc
  }))), /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "moral",
    title: "Der Score misst dein Verhalten, nicht deine Erfolge.",
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, "Es gibt hier keine Zahl f\xFCr Dates, Matches oder Sexualkontakte \u2014 und das ist Absicht. Eine respektvoll angenommene Absage z\xE4hlt in diesem Profil genauso viel wie ein gelungenes Gespr\xE4ch. Wenn du eine Zahl suchst, an der du dich messen kannst, ist Respekt die einzige, bei der ein H\xF6chstwert wirklich etwas bedeutet.")) : null, tab === 'kodex' ? /*#__PURE__*/React.createElement("div", null, kodex.length ? /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    padding: "lg",
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-600)',
      borderBottom: '1px solid var(--rule-ink)',
      paddingBottom: 'var(--space-md)'
    }
  }, "Mein Dating-Kodex"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-lg) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, kodex.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      marginTop: '3px',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--ink-800)'
    }
  }, t))))) : /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    padding: "lg",
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "Dein Kodex entsteht in Kapitel 12. Dort w\xE4hlst du bis zu f\xFCnf S\xE4tze, die ab dann f\xFCr dich gelten \u2014 sie erscheinen anschliessend hier."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    style: {
      marginTop: 'var(--space-lg)'
    },
    onClick: () => go('ch:12')
  }, "Zu Kapitel 12"))) : null, tab === 'transfer' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      maxWidth: 'var(--width-reader)'
    }
  }, challenges.map(c => {
    const on = Boolean(store.challenges[c.number]);
    return /*#__PURE__*/React.createElement("div", {
      key: c.number,
      style: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'flex-start',
        padding: 'var(--space-lg)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--rule-faint)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setStore(s => Object.assign({}, s, {
        challenges: Object.assign({}, s.challenges, {
          [c.number]: !on
        })
      })),
      style: {
        flex: 'none',
        marginTop: '2px',
        width: 20,
        height: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--volt-500)' : 'transparent',
        border: '1px solid ' + (on ? 'var(--volt-500)' : 'var(--rule-default)')
      }
    }, on ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13,
      color: "var(--ink-900)",
      stroke: 3
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-condensed)',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, "Kapitel ", c.number), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '16px',
        fontWeight: 700,
        color: on ? 'var(--text-muted)' : 'var(--paper-100)',
        marginTop: '5px'
      }
    }, c.challenge.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        lineHeight: 1.55,
        color: 'var(--text-secondary)',
        marginTop: '5px'
      }
    }, c.challenge.text)));
  })) : null, tab === 'notizen' ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, reflections.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, reflections.map(({
    ch,
    text
  }) => /*#__PURE__*/React.createElement("div", {
    key: ch.number
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: 'Kapitel ' + ch.number + ' · ' + ch.rail,
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.5,
      color: 'var(--text-faint)',
      marginBottom: '8px'
    }
  }, ch.reflection.question), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      borderLeft: '2px solid var(--rule-subtle)',
      paddingLeft: 'var(--space-lg)'
    }
  }, text)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Noch keine Notizen. Jedes Kapitel endet mit einer Reflexionsfrage \u2014 was du dort schreibst, sammelt sich hier.")) : null));
}

/* ── Schutz & Recht ── */
const SAFE_TONE = {
  consent: 'var(--wire-500)',
  caution: 'var(--amber-500)',
  danger: 'var(--bordeaux-400)',
  neutral: 'var(--paper-300)'
};
function SafetyScreen() {
  const S = window.FBSafety;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--wire-500)'
    }
  }, "Immer erreichbar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Schutz & Recht"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2xl)',
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "caution",
    label: "Hinweis",
    title: "Keine Rechtsberatung."
  }, S.disclaimer)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4xl)',
      marginTop: 'var(--space-4xl)'
    }
  }, S.groups.map(g => /*#__PURE__*/React.createElement("section", {
    key: g.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flex: 'none',
      color: SAFE_TONE[g.tone]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--paper-100)'
    }
  }, g.title), g.configurable ? /*#__PURE__*/React.createElement(Badge, {
    tone: "caution",
    icon: "triangle-alert"
  }, "Vor Ver\xF6ffentlichung konfigurieren") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      marginTop: 'var(--space-lg)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.k,
    style: {
      display: 'grid',
      gridTemplateColumns: '220px minmax(0,1fr)',
      gap: 'var(--space-2xl)',
      padding: 'var(--space-lg) 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: SAFE_TONE[g.tone]
    }
  }, it.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, it.v))))))));
}

/* ── Einstellungen ── */
function SettingsScreen({
  store,
  onReset
}) {
  const [confirm, setConfirm] = React.useState(false);
  const when = store.updatedAt ? new Date(store.updatedAt).toLocaleString('de-CH') : '—';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Einstellungen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Fortschritt & Daten"), /*#__PURE__*/React.createElement(Card, {
    surface: "ink",
    padding: "md",
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, [['Speicherort', 'Lokal in diesem Browser (localStorage)'], ['Datenmodell', 'Version ' + (window.FBStore ? window.FBStore.VERSION : 1)], ['Letzter Fortschritt', when], ['Übertragung', 'Keine — nichts verlässt dieses Gerät']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      paddingBottom: 'var(--space-md)',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-secondary)',
      textAlign: 'right'
    }
  }, v))))), /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    title: "Was du hier eingibst, bleibt hier.",
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, "Reflexionen und eigene Formulierungen werden nur lokal gespeichert. Gib trotzdem keine echten Namen, Telefonnummern oder Nachrichten anderer Personen ein \u2014 auch nicht in Notizfeldern."), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Zur\xFCcksetzen",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, "L\xF6scht Kapitelstatus, Antworten, Reflexionen, Kompetenzwerte und den Transferplan. Das l\xE4sst sich nicht r\xFCckg\xE4ngig machen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, confirm ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "ban",
    onClick: () => {
      onReset();
      setConfirm(false);
    }
  }, "Ja, alles l\xF6schen"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setConfirm(false)
  }, "Abbrechen")) : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "ban",
    onClick: () => setConfirm(true)
  }, "Fortschritt zur\xFCcksetzen"))));
}

/* ── Kapitelzustand ── */
function chapterState(ch, store) {
  const rec = store.chapters[ch.number] || {};
  if (rec.done) return 'abgeschlossen';
  if (rec.started) return 'begonnen';
  return 'nicht begonnen';
}

/* Pflichtteile: Ernstfall bestätigt (falls vorhanden) + alle Quizfragen beantwortet. */
function chapterComplete(ch, store) {
  const a = store.answers[ch.number] || {};
  if (ch.scenario && !(a.scenario && a.scenario.revealed)) return false;
  if (ch.quiz) {
    const q = store.quiz[ch.number] || {};
    for (let i = 0; i < ch.quiz.length; i++) if (q[i] === undefined) return false;
  }
  return true;
}
Object.assign(window, {
  CompetenceScreen,
  SafetyScreen,
  SettingsScreen,
  chapterState,
  chapterComplete
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/MetaScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/OverviewScreen.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  ScoreMeter,
  WarningNotice
} = window.FUCKBOYDesignSystem_007b99;
function Stat({
  value,
  label,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: tone || 'var(--paper-100)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '9px'
    }
  }, label));
}
function OverviewScreen({
  chapters,
  store,
  go
}) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const started = chapters.find(c => window.chapterState(c, store) === 'begonnen') || chapters.find(c => window.chapterState(c, store) === 'nicht begonnen') || chapters[0];
  const minutes = chapters.reduce((n, c) => n + parseInt(c.duration, 10), 0);
  const quizzes = chapters.reduce((n, c) => n + (c.quiz ? c.quiz.length : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Kurs\xFCbersicht"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "12 Kapitel \xB7 ca. ", Math.round(minutes / 5) * 5, " Minuten")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '72px',
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.025em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-xl)',
      maxWidth: '24ch',
      textWrap: 'balance'
    }
  }, "Mehr Dates. Mehr Sex. Und die Rechnung dazu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-2xl)',
      maxWidth: '58ch'
    }
  }, "Das ist der Zweck: mehr Matches, mehr Dates, mehr Sex \xFCber Dating-Apps. Der Kurs sagt dir, was dabei wirklich funktioniert \u2014 und in derselben Zeile, was es kostet. Beides geh\xF6rt zusammen. Wer nur den ersten Teil liest, hat den Kurs nicht verstanden."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6xl)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Kapitel"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: String(done).padStart(2, '0'),
    label: "Abgeschlossen",
    tone: done ? 'var(--volt-500)' : undefined
  }), /*#__PURE__*/React.createElement(Stat, {
    value: quizzes,
    label: "Wissensfragen"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "08",
    label: "Kompetenzen"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "01",
    label: "Regel \xFCber allem",
    tone: "var(--wire-500)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    label: "Die eine Regel",
    title: "Ein Nein ist keine Verhandlungsposition."
  }, "Sobald sie z\xF6gert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne charmantes Nachfassen, ohne zweiten Anlauf sp\xE4ter am Abend. Consent ist in diesem Kurs keine Technik, um doch noch ans Ziel zu kommen \u2014 es ist die Bedingung, unter der \xFCberhaupt etwas stattfindet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "shield-check",
    onClick: () => go('safety')
  }, "Schutz & Recht \xF6ffnen"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "file-text",
    onClick: () => go('ch:02')
  }, "Kapitel 02 lesen"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Was diesen Ratgeber unterscheidet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, (window.FBData.gamechangers || []).map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.t,
    surface: "raised",
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--volt-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, g.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-sm)'
    }
  }, g.s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Der Ablauf \xB7 acht Schritte"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)',
      maxWidth: '62ch'
    }
  }, "Das ist der Kern. Kein Tippkatalog, sondern eine Kette: Jeder Schritt hat eine Aufgabe, f\xFChrt zum n\xE4chsten \u2014 und hat eine eigene Abbruchstelle. Wo sie nicht mitgeht, endet der Schritt. Nicht der Respekt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      marginTop: 'var(--space-xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, (window.FBData.flow || []).map(f => /*#__PURE__*/React.createElement("div", {
    key: f.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 200px minmax(0,1fr) 110px',
      gap: 'var(--space-lg)',
      alignItems: 'baseline',
      padding: 'var(--space-lg) 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '20px',
      fontWeight: 700,
      color: 'var(--bordeaux-400)'
    }
  }, f.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 700,
      color: 'var(--paper-100)'
    }
  }, f.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, f.s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      textAlign: 'right'
    }
  }, f.k))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Aufbau \xB7 drei Akte"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, [{
    k: 'Akt I · 01–03',
    t: 'Die Basis',
    s: 'Haltung, Consent, Auftreten. Warum Wirkung mehr bringt als Aussehen — und warum Consent die Bedingung ist, nicht die Bremse.'
  }, {
    k: 'Akt II · 04–07',
    t: 'Der Weg zum Treffen',
    s: 'Profil, Schreiben, Einladung, Date. Das Handwerk, mit dem aus einem Match ein realer Abend wird.'
  }, {
    k: 'Akt III · 08–12',
    t: 'Nähe und Rechnung',
    s: 'Erwartungsdruck, Ablehnung, körperliche Nähe, der Abgang — und was das Werkzeug mit dem macht, der es benutzt.'
  }].map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    surface: "ink",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, a.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-md)'
    }
  }, a.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-sm)'
    }
  }, a.s))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-6xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, "Gemessen wird dein Verhalten."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)'
    }
  }, "Acht Kompetenzen, keine Zahl f\xFCr Matches, Dates oder Sexualkontakte. Punkte gibt es f\xFCr gute Entscheidungen, nicht f\xFCr Ergebnisse \u2014 eine respektvoll angenommene Absage z\xE4hlt genauso viel wie ein gelungenes Gespr\xE4ch."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "chevron-right",
    style: {
      marginTop: 'var(--space-xl)'
    },
    onClick: () => go('profile')
  }, "Zur Auswertung")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, COMP.slice(0, 4).map(c => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: c.id,
    label: c.label,
    value: store.competences[c.id],
    icon: c.icon,
    tone: c.id === 'respekt' ? 'consent' : 'gain'
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)',
      paddingTop: 'var(--space-3xl)',
      borderTop: '1px solid var(--rule-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--paper-100)'
    }
  }, "Kapitel ", started.number, ": ", started.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, started.subtitle, " \xB7 ", started.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "file-text",
    onClick: () => go('index')
  }, "Alle Kapitel"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('ch:' + started.number)
  }, "Weiterlernen"))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/Shell.jsx
try { (() => {
const {
  Badge,
  IconButton,
  Rule,
  Icon
} = window.FUCKBOYDesignSystem_007b99;
const PLACES = [{
  id: 'overview',
  label: 'Übersicht',
  icon: 'scale'
}, {
  id: 'index',
  label: 'Kapitel',
  icon: 'file-text'
}, {
  id: 'profile',
  label: 'Auswertung',
  icon: 'gauge'
}, {
  id: 'safety',
  label: 'Schutz & Recht',
  icon: 'shield-check',
  tone: 'consent'
}];
function Wordmark({
  size = 21
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size,
      letterSpacing: '-0.035em',
      color: 'var(--paper-100)'
    }
  }, "FICK-TRAINER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '9px',
      fontWeight: 600,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '5px'
    }
  }, "fick-trainer.de"));
}
function StateDot({
  state
}) {
  if (state === 'abgeschlossen') return /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    color: "var(--volt-600)"
  });
  if (state === 'begonnen') return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--amber-500)',
      display: 'block'
    }
  });
  return null;
}
function Rail({
  chapters,
  screen,
  go,
  store,
  done,
  total
}) {
  const current = screen.indexOf('ch:') === 0 ? screen.slice(3) : null;
  const pct = total ? Math.round(done / total * 100) : 0;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--width-rail)',
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-void)',
      borderRight: '1px solid var(--rule-faint)',
      padding: 'var(--space-2xl)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement(Rule, {
    tone: "faint",
    style: {
      margin: 'var(--space-2xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, PLACES.map(n => {
    const active = screen === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => go(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: '11px 12px',
        background: active ? 'rgba(245,242,235,.06)' : 'transparent',
        border: 0,
        borderLeft: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'),
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-condensed)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active ? 'var(--text-primary)' : n.tone === 'consent' ? 'var(--wire-600)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 15
    }), n.label);
  })), /*#__PURE__*/React.createElement(Rule, {
    tone: "faint",
    label: done + ' von ' + total,
    style: {
      margin: 'var(--space-xl) 0 var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px'
    }
  }, chapters.map(c => {
    const st = window.chapterState(c, store);
    const here = current === c.number;
    return /*#__PURE__*/React.createElement("button", {
      key: c.number,
      onClick: () => go('ch:' + c.number),
      title: c.title,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '7px 12px',
        background: here ? 'rgba(245,242,235,.06)' : 'transparent',
        border: 0,
        borderLeft: '2px solid ' + (here ? 'var(--paper-100)' : st === 'abgeschlossen' ? 'var(--volt-600)' : st === 'begonnen' ? 'var(--amber-500)' : 'var(--ink-400)'),
        cursor: 'pointer',
        textAlign: 'left',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: '11px',
        fontWeight: 700,
        color: here ? 'var(--paper-100)' : 'var(--text-faint)',
        flex: 'none'
      }
    }, c.number), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: '13px',
        lineHeight: 1.3,
        color: here ? 'var(--text-primary)' : 'var(--text-muted)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.rail), /*#__PURE__*/React.createElement(StateDot, {
      state: st
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--score-track)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: 'var(--volt-600)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('settings'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      marginTop: 'var(--space-lg)',
      padding: 0,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: screen === 'settings' ? 'var(--text-primary)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ellipsis",
    size: 14
  }), "Einstellungen")));
}
function TopBar({
  screen,
  crumb,
  title,
  go,
  right
}) {
  const inChapter = screen.indexOf('ch:') === 0;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--height-topbar)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)',
      padding: '0 var(--gutter-page) 0 ' + (inChapter ? '12px' : 'var(--gutter-page)'),
      borderBottom: '1px solid var(--rule-faint)',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      minWidth: 0
    }
  }, inChapter ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Zur\xFCck zu den Kapiteln",
    size: "sm",
    onClick: () => go('index')
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      flex: 'none'
    }
  }, crumb), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      flex: 'none'
    }
  }, right));
}
function Shell({
  chapters,
  screen,
  go,
  store,
  done,
  total,
  crumb,
  title,
  right,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      minHeight: 0,
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement(Rail, {
    chapters: chapters,
    screen: screen,
    go: go,
    store: store,
    done: done,
    total: total
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    screen: screen,
    crumb: crumb,
    title: title,
    go: go,
    right: right
  }), /*#__PURE__*/React.createElement("main", {
    id: "fb-main",
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: 'var(--space-4xl) var(--gutter-page-wide) var(--space-7xl)'
    }
  }, children)));
}
Object.assign(window, {
  Shell,
  Wordmark,
  TopBar,
  Rail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/SpecialBlocks.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  Textarea,
  ChatBubble,
  SwipeCard,
  ChoiceOption,
  WarningNotice
} = window.FUCKBOYDesignSystem_007b99;
const VERDICT = {
  immer: {
    tone: 'accent',
    icon: 'check-check',
    label: 'Immer'
  },
  empfohlen: {
    tone: 'neutral',
    icon: 'check',
    label: 'Empfohlen'
  },
  bedingt: {
    tone: 'caution',
    icon: 'triangle-alert',
    label: 'Nur mit Kontext'
  },
  nie: {
    tone: 'danger',
    icon: 'ban',
    label: 'Nie'
  }
};

/* Kapitel 04 — Fotos & Ranking */
function PlaybookExtra({
  photos,
  algorithm
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5xl)',
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Fotos \xB7 nach Wirkung sortiert",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, photos.map(p => {
    const v = VERDICT[p.verdict] || VERDICT.empfohlen;
    return /*#__PURE__*/React.createElement("div", {
      key: p.rank,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px minmax(0,1fr)',
        gap: 'var(--space-lg)',
        padding: 'var(--space-xl) 0',
        borderBottom: '1px solid var(--rule-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: '20px',
        fontWeight: 700,
        color: 'var(--text-faint)'
      }
    }, p.rank), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-md)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: 1.3,
        color: 'var(--paper-100)'
      }
    }, p.title), /*#__PURE__*/React.createElement(Badge, {
      tone: v.tone,
      icon: v.icon
    }, v.label)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 1.6,
        color: 'var(--text-secondary)',
        marginTop: 'var(--space-sm)',
        maxWidth: '62ch'
      }
    }, p.text), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        lineHeight: 1.5,
        color: 'var(--text-faint)',
        marginTop: 'var(--space-sm)'
      }
    }, p.note)));
  })), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Ranking \xB7 Erfahrungswerte, keine belegten Mechanismen",
    style: {
      margin: 'var(--space-3xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 'var(--space-lg)'
    }
  }, algorithm.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    surface: "ink",
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--paper-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 700,
      lineHeight: 1.25,
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-sm)'
    }
  }, a.text)))), /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Boost-Protokoll \xB7 in dieser Reihenfolge",
    style: {
      margin: 'var(--space-3xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, [['01', 'Profil fertig bauen', 'Sechs Fotos, Text steht. Ein Boost auf ein halbes Profil ist verbranntes Geld.'], ['02', 'Sonntag, 20:00 Uhr', 'Höchste Aktivität der Woche. Freitagabend sind Menschen unterwegs, nicht in der App.'], ['03', 'Erreichbar bleiben', 'Die nächsten 30 Minuten. Wer während des Boosts matcht, antwortet sofort — oder nie.'], ['04', 'Erste Nachricht in unter 5 Minuten', 'Mit Baustein, aber personalisiert: ein Satz zu ihrem Profil, dann deine Frage.'], ['05', 'Nach 48 Stunden aufräumen', 'Tote Threads schliessen. Sie ziehen deine Antwortquote nach unten.']].map(([n, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 220px minmax(0,1fr)',
      gap: 'var(--space-lg)',
      alignItems: 'baseline',
      padding: 'var(--space-lg) 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--volt-600)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--paper-100)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, s)))));
}

/* Kapitel 05 — Textbaustein-Labor */
function SnippetExtra({
  snippets
}) {
  const [text, setText] = React.useState('');
  const [count, setCount] = React.useState(0);
  const expand = value => {
    const hit = snippets.find(s => value.endsWith(s.key));
    if (!hit) {
      setText(value);
      return;
    }
    setText(value.slice(0, -hit.key.length) + hit.text + ' ');
    setCount(c => c + 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5xl)',
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Textbaustein-Labor",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 'var(--space-3xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Textarea, {
    label: "Probier es aus \u2014 tippe eine Abk\xFCrzung",
    rows: 7,
    value: text,
    onChange: e => expand(e.target.value),
    hint: "Tippe ;vor \xB7 ;suc \xB7 ;dat \xB7 ;woh \xB7 ;wek \u2014 der Baustein ersetzt sich sofort."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      color: 'var(--text-faint)',
      marginTop: 'var(--space-md)'
    }
  }, count, " ", count === 1 ? 'Baustein' : 'Bausteine', " eingesetzt \xB7 ", text.trim().length, " Zeichen")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Bausteine",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, snippets.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    onClick: () => expand(text + s.key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      width: '100%',
      textAlign: 'left',
      padding: '11px 12px',
      minHeight: 'var(--tap-min)',
      cursor: 'pointer',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--volt-500)',
      flex: 'none'
    }
  }, s.key), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, s.label)))))));
}

/* Kapitel 11 — Chat-Simulation */
function ChatSimExtra({
  chat
}) {
  const [thread, setThread] = React.useState(chat.thread);
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const chosen = chat.replies.find(r => r.letter === picked);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5xl)',
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Simulation \xB7 sie fragt, was du suchst",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px minmax(0,1fr)',
      gap: 'var(--space-3xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SwipeCard, chat.profile), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, thread.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from,
    time: m.time,
    status: m.status
  }, m.text)), sent ? /*#__PURE__*/React.createElement(ChatBubble, {
    from: "her",
    typing: true
  }) : null)), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: sent ? 'Wirkung' : 'Deine Antwort',
    style: {
      margin: 'var(--space-xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, chat.replies.map(r => /*#__PURE__*/React.createElement(ChoiceOption, {
    key: r.letter,
    letter: r.letter,
    label: r.label,
    quote: r.quote,
    outcome: r.outcome,
    feedback: r.feedback,
    selected: picked === r.letter,
    revealed: sent,
    disabled: sent,
    onClick: () => setPicked(r.letter)
  }))), !sent ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "send",
    disabled: !picked,
    style: {
      marginTop: 'var(--space-lg)'
    },
    onClick: () => {
      setThread(t => [...t, {
        from: 'me',
        time: '23:39',
        text: chosen.quote.replace(/[„“]/g, ''),
        status: 'read'
      }]);
      setSent(true);
    }
  }, "Senden") : null)));
}
Object.assign(window, {
  PlaybookExtra,
  SnippetExtra,
  ChatSimExtra
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/SpecialBlocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/blocks.jsx
try { (() => {
const {
  Card,
  Rule,
  Badge,
  Button,
  Icon,
  Textarea,
  Toast,
  WarningNotice,
  ChoiceOption
} = window.FUCKBOYDesignSystem_007b99;
const KINDS = window.FBFeedbackKinds || {};

/* ── Quiz ── */
function QuizBlock({
  id,
  quiz,
  saved,
  onAnswer
}) {
  const answers = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2xl)'
    }
  }, quiz.map((q, qi) => {
    const picked = answers[qi];
    return /*#__PURE__*/React.createElement("div", {
      key: qi
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-data)',
        fontSize: '13px',
        fontWeight: 700,
        color: 'var(--text-faint)',
        flex: 'none'
      }
    }, String(qi + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '17px',
        fontWeight: 700,
        lineHeight: 1.35,
        color: 'var(--paper-100)'
      }
    }, q.q)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '6px',
        marginTop: 'var(--space-md)',
        paddingLeft: '30px'
      }
    }, q.options.map((o, oi) => {
      const chosen = picked === oi;
      const reveal = picked !== undefined;
      const color = o.correct ? 'var(--volt-500)' : 'var(--bordeaux-400)';
      return /*#__PURE__*/React.createElement("button", {
        key: oi,
        disabled: reveal,
        onClick: () => onAnswer(qi, oi),
        style: {
          display: 'block',
          width: '100%',
          textAlign: 'left',
          padding: '12px 14px',
          background: chosen ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
          border: '1px solid ' + (reveal && (chosen || o.correct) ? color : 'var(--rule-faint)'),
          cursor: reveal ? 'default' : 'pointer',
          opacity: reveal && !chosen && !o.correct ? 0.5 : 1,
          transition: 'var(--transition-hover)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start'
        }
      }, reveal ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flex: 'none',
          marginTop: '2px',
          color: o.correct ? 'var(--volt-500)' : chosen ? 'var(--bordeaux-400)' : 'transparent'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: o.correct ? 'check' : 'x',
        size: 14,
        stroke: 2.5
      })) : null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          lineHeight: 1.5,
          color: 'var(--text-primary)'
        }
      }, o.text)), reveal && (chosen || o.correct) ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          lineHeight: 1.5,
          color: 'var(--text-muted)',
          marginTop: '7px',
          paddingLeft: reveal ? '24px' : 0
        }
      }, o.why) : null);
    })));
  }));
}

/* ── Consent-Ampel ── */
const LIGHTS = {
  gruen: {
    label: 'Grün',
    color: 'var(--volt-500)',
    hint: 'Weiter'
  },
  gelb: {
    label: 'Gelb',
    color: 'var(--amber-500)',
    hint: 'Nachfragen'
  },
  rot: {
    label: 'Rot',
    color: 'var(--bordeaux-500)',
    hint: 'Stoppen'
  }
};
function TrafficBlock({
  items,
  saved,
  onAnswer
}) {
  const answers = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '10px'
    }
  }, items.map((it, i) => {
    const picked = answers[i];
    const right = picked === it.answer;
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      surface: "ink",
      padding: "sm"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 260px',
        minWidth: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 1.5,
        color: 'var(--text-primary)'
      }
    }, it.text), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: '6px',
        flex: 'none'
      }
    }, Object.keys(LIGHTS).map(k => {
      const L = LIGHTS[k];
      const on = picked === k;
      const isAnswer = picked !== undefined && it.answer === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        disabled: picked !== undefined,
        onClick: () => onAnswer(i, k),
        title: L.hint,
        style: {
          width: 34,
          height: 34,
          borderRadius: '50%',
          cursor: picked !== undefined ? 'default' : 'pointer',
          background: on || isAnswer ? L.color : 'transparent',
          border: '1px solid ' + (on || isAnswer ? L.color : 'var(--rule-subtle)'),
          opacity: picked !== undefined && !on && !isAnswer ? 0.3 : 1
        }
      });
    }))), picked !== undefined ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        marginTop: 'var(--space-md)',
        paddingTop: 'var(--space-md)',
        borderTop: '1px solid var(--rule-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flex: 'none',
        marginTop: '1px',
        color: right ? 'var(--volt-500)' : 'var(--amber-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: right ? 'check-check' : 'circle-alert',
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        lineHeight: 1.5,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: LIGHTS[it.answer].color
      }
    }, LIGHTS[it.answer].label, "."), " ", it.why)) : null);
  }));
}

/* ── Sortieren ── */
function SortBlock({
  block,
  saved,
  onAnswer
}) {
  const answers = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, block.items.map((it, i) => {
    const picked = answers[i];
    const right = picked === it.side;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '12px 14px',
        background: 'var(--bg-surface)',
        border: '1px solid ' + (picked ? right ? 'rgba(198,247,14,.4)' : 'var(--bordeaux-700)' : 'var(--rule-faint)')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 220px',
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        color: 'var(--text-primary)'
      }
    }, it.text), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: '6px',
        flex: 'none'
      }
    }, [['left', block.left], ['right', block.right]].map(([side, label]) => /*#__PURE__*/React.createElement("button", {
      key: side,
      disabled: Boolean(picked),
      onClick: () => onAnswer(i, side),
      style: {
        padding: '7px 12px',
        cursor: picked ? 'default' : 'pointer',
        background: picked === side ? 'var(--paper-100)' : 'transparent',
        color: picked === side ? 'var(--ink-900)' : 'var(--text-secondary)',
        border: '1px solid ' + (picked === side ? 'var(--paper-100)' : 'var(--rule-subtle)'),
        fontFamily: 'var(--font-condensed)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: picked && picked !== side ? 0.4 : 1
      }
    }, label))), picked ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        display: 'flex',
        color: right ? 'var(--volt-500)' : 'var(--bordeaux-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: right ? 'check' : 'x',
      size: 16,
      stroke: 2.5
    })) : null);
  }));
}

/* ── Fakt oder Interpretation ── */
function FactsBlock({
  items,
  saved,
  onAnswer
}) {
  const answers = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, items.map((it, i) => {
    const picked = answers[i];
    const right = picked === it.answer;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 'var(--space-lg)',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '12px 14px',
        background: 'var(--bg-surface)',
        border: '1px solid ' + (picked ? right ? 'rgba(198,247,14,.4)' : 'var(--bordeaux-700)' : 'var(--rule-faint)')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 240px',
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        lineHeight: 1.55,
        color: 'var(--text-primary)'
      }
    }, "\u201E", it.text, "\u201C"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: '6px',
        flex: 'none'
      }
    }, [['fakt', 'Fakt'], ['interpretation', 'Interpretation']].map(([v, label]) => /*#__PURE__*/React.createElement("button", {
      key: v,
      disabled: Boolean(picked),
      onClick: () => onAnswer(i, v),
      style: {
        padding: '7px 12px',
        cursor: picked ? 'default' : 'pointer',
        background: picked === v ? 'var(--paper-100)' : 'transparent',
        color: picked === v ? 'var(--ink-900)' : 'var(--text-secondary)',
        border: '1px solid ' + (picked === v ? 'var(--paper-100)' : 'var(--rule-subtle)'),
        fontFamily: 'var(--font-condensed)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: picked && picked !== v ? 0.4 : 1
      }
    }, label))), picked ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        display: 'flex',
        color: right ? 'var(--volt-500)' : 'var(--bordeaux-400)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: right ? 'check' : 'x',
      size: 16,
      stroke: 2.5
    })) : null);
  }));
}

/* ── Vergleich verbessern ── */
function ImproveBlock({
  rounds,
  saved,
  onAnswer
}) {
  const answers = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-xl)'
    }
  }, rounds.map((r, i) => {
    const picked = answers[i];
    const reveal = picked !== undefined;
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: '10px'
      }
    }, [['bad', r.bad], ['good', r.good]].map(([k, text]) => {
      const isGood = k === 'good';
      const chosen = picked === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        disabled: reveal,
        onClick: () => onAnswer(i, k),
        style: {
          textAlign: 'left',
          padding: 'var(--space-lg)',
          cursor: reveal ? 'default' : 'pointer',
          background: chosen ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
          border: '1px solid ' + (reveal ? isGood ? 'var(--volt-500)' : 'var(--bordeaux-700)' : 'var(--rule-faint)'),
          opacity: reveal && !isGood && !chosen ? 0.5 : 1
        }
      }, reveal ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          gap: '7px',
          alignItems: 'center',
          marginBottom: '9px',
          color: isGood ? 'var(--volt-500)' : 'var(--bordeaux-400)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: isGood ? 'check-check' : 'x',
        size: 14
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-condensed)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase'
        }
      }, isGood ? 'Bringt eine Antwort' : 'Bringt meistens nichts')) : null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          lineHeight: 1.55,
          color: 'var(--text-primary)'
        }
      }, text));
    })), reveal ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
        padding: '11px 13px',
        background: 'var(--bg-surface-sunken)',
        border: '1px solid var(--rule-faint)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flex: 'none',
        marginTop: '1px',
        color: 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        lineHeight: 1.5,
        color: 'var(--text-secondary)'
      }
    }, r.why)) : null);
  }));
}

/* ── Checkliste ── */
function ChecklistBlock({
  id,
  items,
  saved,
  onToggle
}) {
  const done = saved || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    onClick: e => {
      e.preventDefault();
      onToggle(i);
    },
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      cursor: 'pointer',
      padding: '9px 0',
      minHeight: 'var(--tap-min)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 19,
      height: 19,
      flex: 'none',
      marginTop: '2px',
      background: done[i] ? 'var(--volt-500)' : 'transparent',
      border: '1px solid ' + (done[i] ? 'var(--volt-500)' : 'var(--rule-default)')
    }
  }, done[i] ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--ink-900)",
    stroke: 3
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: done[i] ? 'var(--text-muted)' : 'var(--text-secondary)'
    }
  }, t))));
}

/* ── Werte / Kodex ── */
function ValuesBlock({
  items,
  saved,
  onToggle,
  max = 5
}) {
  const chosen = saved || {};
  const count = Object.keys(chosen).filter(k => chosen[k]).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '6px'
    }
  }, items.map((t, i) => {
    const on = Boolean(chosen[i]);
    const blocked = !on && count >= max;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: blocked,
      onClick: () => onToggle(i),
      style: {
        display: 'flex',
        gap: 'var(--space-md)',
        alignItems: 'flex-start',
        textAlign: 'left',
        width: '100%',
        padding: '12px 14px',
        cursor: blocked ? 'not-allowed' : 'pointer',
        background: on ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
        border: '1px solid ' + (on ? 'var(--volt-500)' : 'var(--rule-faint)'),
        opacity: blocked ? 0.4 : 1,
        transition: 'var(--transition-hover)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flex: 'none',
        marginTop: '2px',
        color: on ? 'var(--volt-500)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: on ? 'check-check' : 'circle-dot',
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
        lineHeight: 1.5,
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)'
      }
    }, t));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--text-faint)',
      marginTop: '12px'
    }
  }, count, " von ", max, " gew\xE4hlt"));
}
Object.assign(window, {
  QuizBlock,
  TrafficBlock,
  SortBlock,
  FactsBlock,
  ImproveBlock,
  ChecklistBlock,
  ValuesBlock,
  LIGHTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/blocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-a.js
try { (() => {
window.FBChaptersA = [/* ═══════════ 01 ═══════════ */
{
  number: '01',
  slug: 'mindset',
  rail: 'Mindset',
  image: 'assets/chapters/01-mindset.png',
  title: 'Das Mindset',
  subtitle: 'Selbstsicherheit ohne Selbstüberschätzung',
  duration: '14 Min',
  lead: 'Der Unterschied zwischen souverän und bedürftig ist kein Gesicht und kein Satz. Es ist die Frage, ob du das Ergebnis schon brauchst, bevor der Abend angefangen hat.',
  goals: ['Selbstwert und Dating-Erfolg auseinanderhalten.', 'Initiative zeigen, ohne eine Reaktion zu erzwingen.', 'Ablehnung als Information behandeln statt als Urteil.', 'Erkennen, was du an deiner Wirkung ändern kannst — und was nicht.'],
  story: 'Ich habe zwei Jahre lang geglaubt, mein Problem sei mein Gesicht. Ich habe trainiert, mich besser angezogen, mir Sprüche zurechtgelegt. Geändert hat sich nichts. Geändert hat sich erst etwas, als ich aufgehört habe, jedes Gespräch als Prüfung zu behandeln, die ich bestehen muss.',
  sections: [{
    type: 'text',
    h: 'Bedürftigkeit ist sichtbarer als Nervosität',
    p: ['Nervös sein ist normal und wirkt oft sogar sympathisch. Bedürftig sein ist etwas anderes: Du brauchst von der anderen Person eine bestimmte Reaktion, damit der Abend für dich in Ordnung ist. Das merkt man. Nicht an einem einzelnen Satz, sondern daran, wie du auf Pausen reagierst, wie schnell du nachlegst, wie sehr du bei jedem Lachen erleichtert bist.', 'Der Unterschied ist nicht Technik, sondern Ausgangslage. Wer den Abend auch dann in Ordnung findet, wenn nichts daraus wird, verhält sich automatisch anders — ruhiger, langsamer, ehrlicher.']
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Die Macht der Selbstsicherheit',
    p: 'Selbstsicherheit entsteht durch Handlungsfähigkeit, Erfahrung und das Aushalten unsicherer Ergebnisse — nicht durch die Überzeugung, anderen überlegen zu sein. Wer sich überlegen fühlt, braucht Bestätigung. Wer handlungsfähig ist, braucht sie nicht.'
  }, {
    type: 'split',
    h: 'Kontrollierbar und nicht kontrollierbar',
    good: {
      title: 'Liegt bei dir',
      items: ['Pflege, Kleidung, Haltung', 'Wie du ein Gespräch eröffnest', 'Ob du deine Absicht aussprichst', 'Wie du auf ein Nein reagierst', 'Wie oft du überhaupt Kontakt aufnimmst']
    },
    bad: {
      title: 'Liegt nicht bei dir',
      items: ['Ob sie gerade Kapazität hat', 'Ob sie etwas anderes sucht', 'Ihr Ex, ihr Tag, ihre Laune', 'Ihr Typ', 'Ob sie antwortet']
    }
  }, {
    type: 'compare',
    h: 'Dieselbe Situation, zwei Haltungen',
    bad: {
      label: 'Bedürftig',
      text: '„Hey, alles ok bei dir? Hab lang nichts gehört 😅 falls ich was falsch gesagt hab, sag ruhig“'
    },
    good: {
      label: 'Souverän',
      text: '„Hey — falls es bei dir gerade passt, würde ich dich gern auf ein Getränk treffen. Wenn nicht, auch völlig okay.“'
    }
  }, {
    type: 'text',
    h: 'Eine Absage ist ein Datenpunkt',
    p: ['Wer viele Menschen kennenlernt, sammelt zwangsläufig viele Absagen. Das ist Mathematik, nicht Kritik. Die Absage sagt etwas über die Passung aus, nicht über deinen Wert — und in den meisten Fällen weisst du gar nicht, woran es lag. Das auszuhalten, ohne nachzufragen, ist die eigentliche Übung.']
  }],
  scenario: {
    title: 'Sie antwortet seit zwei Tagen nicht',
    brief: ['Ihr habt vier Tage gut geschrieben. Dann hast du ein Treffen vorgeschlagen.', 'Seitdem: nichts. Zuletzt online war sie gestern Abend.'],
    signals: [{
      icon: 'clock',
      tone: 'caution',
      text: 'Zwei Tage Pause nach einer konkreten Frage.'
    }, {
      icon: 'eye',
      tone: 'caution',
      text: 'Sie war online, hat aber nicht geantwortet.'
    }, {
      icon: 'circle-dot',
      tone: 'consent',
      text: 'Vorher war das Gespräch beidseitig aktiv.'
    }],
    options: [{
      letter: 'A',
      label: 'Du schreibst',
      kind: 'rueckzug',
      outcome: 'good',
      quote: 'Nichts. Du wartest ab und schreibst niemandem hinterher.',
      feedback: 'Angemessen. Du hast eine klare Frage gestellt; die Antwort darauf ist ihre Entscheidung. Kein Nachfassen bedeutet nicht Aufgeben, sondern die Frage stehenlassen.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '+5'
      }, {
        id: 'respekt',
        delta: '+3'
      }]
    }, {
      letter: 'B',
      label: 'Du schreibst',
      kind: 'initiative',
      outcome: 'good',
      quote: '„Kein Stress — falls diese Woche nichts geht, meld dich einfach, wenn es wieder passt.“',
      feedback: 'Auch gut. Einmal nachfassen ist legitim, wenn es die Tür offen lässt statt Druck zu machen. Danach ist Schluss mit Nachfassen.',
      deltas: [{
        id: 'initiative',
        delta: '+4'
      }, {
        id: 'klarheit',
        delta: '+2'
      }]
    }, {
      letter: 'C',
      label: 'Du schreibst',
      kind: 'druck',
      outcome: 'costly',
      quote: '„Hab ich was falsch gemacht? 😅“',
      feedback: 'Verständlich, aber es dreht die Situation um: Sie muss dich jetzt beruhigen. Das ist eine Aufgabe, die du ihr gibst, ohne dass sie darum gebeten hat.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '−4'
      }, {
        id: 'klarheit',
        delta: '−2'
      }]
    }, {
      letter: 'D',
      label: 'Du schreibst',
      kind: 'grenze',
      outcome: 'bad',
      quote: '„Schade, hätte dich für anders gehalten.“',
      feedback: 'Das ist eine Bestrafung für eine nicht erhaltene Antwort. Es sagt nichts über sie und alles über dich — und es ist das Verhalten, das Frauen später als Grund nennen, gar nicht erst zu antworten.',
      deltas: [{
        id: 'resilienz',
        delta: '−8'
      }, {
        id: 'respekt',
        delta: '−6'
      }]
    }]
  },
  interaction: {
    type: 'sort',
    title: 'Kontrollierbar oder nicht?',
    prompt: 'Ordne zu. Es geht nicht um richtig oder falsch, sondern darum, wo du deine Energie hinlegst.',
    left: 'Liegt bei dir',
    right: 'Liegt nicht bei dir',
    items: [{
      text: 'Wie schnell du antwortest',
      side: 'left'
    }, {
      text: 'Ob sie deinen Humor mag',
      side: 'right'
    }, {
      text: 'Wie du auf eine Absage reagierst',
      side: 'left'
    }, {
      text: 'Ob sie gerade Lust auf Dating hat',
      side: 'right'
    }, {
      text: 'Wie gepflegt du auftrittst',
      side: 'left'
    }, {
      text: 'Ihre Erfahrung mit dem Letzten vor dir',
      side: 'right'
    }]
  },
  challenge: {
    title: 'Eine soziale Initiative ohne Ziel',
    text: 'Sprich diese Woche eine fremde Person an, bei der du kein Interesse hast. Kassiererin, Sitznachbar, jemand im Aufzug. Ein Satz, freundlich, ohne Absicht. Es geht darum, den Reflex zu trainieren, ohne dass ein Ergebnis daran hängt.'
  },
  reflection: {
    question: 'Wie reagierst du im Moment auf eine Absage — ehrlich, nicht wie du es gern hättest?',
    placeholder: 'Ich werde still und schreibe drei Tage niemandem …'
  },
  personalLine: {
    question: 'Formuliere deinen eigenen Mindset-Satz. Einen Satz, den du dir vor einem Date sagst.',
    placeholder: 'Ich gehe hin, weil ich sie kennenlernen will — nicht, weil ich etwas beweisen muss.'
  },
  summary: ['Bedürftigkeit ist sichtbarer als Nervosität.', 'Selbstsicherheit heisst, ein offenes Ergebnis auszuhalten.', 'Eine Absage ist Information über Passung, kein Urteil über dich.', 'Optimiere dein Verhalten, nicht ihre Reaktion.'],
  quiz: [{
    q: 'Woran erkennt man Bedürftigkeit am ehesten?',
    options: [{
      text: 'An Nervosität im Gespräch',
      why: 'Nervosität ist normal und wirkt oft sympathisch. Sie ist nicht dasselbe.'
    }, {
      text: 'Daran, dass jemand eine bestimmte Reaktion braucht, damit der Abend okay ist',
      correct: true,
      why: 'Genau. Es geht um die Ausgangslage, nicht um die Nerven.'
    }, {
      text: 'An zu wenig Blickkontakt',
      why: 'Kann viele Gründe haben und ist kein verlässliches Zeichen.'
    }]
  }, {
    q: 'Was gehört in deinen Einflussbereich?',
    options: [{
      text: 'Ob sie antwortet',
      why: 'Das ist ihre Entscheidung, nicht deine Leistung.'
    }, {
      text: 'Wie du auf ein Nein reagierst',
      correct: true,
      why: 'Richtig — das ist der Teil, den du vollständig steuerst.'
    }, {
      text: 'Ob sie gerade Kapazität für Dating hat',
      why: 'Liegt vollständig ausserhalb deines Einflusses.'
    }]
  }, {
    q: 'Sie antwortet nach einer konkreten Frage zwei Tage nicht. Was ist angemessen?',
    options: [{
      text: 'Einmal locker nachfassen oder es stehen lassen',
      correct: true,
      why: 'Beides ist in Ordnung. Wiederholtes Nachfassen ist es nicht.'
    }, {
      text: 'Fragen, ob du etwas falsch gemacht hast',
      why: 'Das macht sie für dein Befinden verantwortlich.'
    }, {
      text: 'Eine enttäuschte Nachricht schicken',
      why: 'Das ist eine Bestrafung für eine ausgebliebene Antwort.'
    }]
  }],
  transfer: 'Diese Woche: eine Kontaktaufnahme, bei der dir das Ergebnis bewusst egal ist.'
}, /* ═══════════ 02 ═══════════ */
{
  number: '02',
  slug: 'consent',
  rail: 'Consent',
  image: 'assets/chapters/02-consent.png',
  title: 'Consent ist die Regel',
  subtitle: 'Nicht das Kleingedruckte, sondern die Bedingung',
  duration: '22 Min',
  lead: 'Dieses Kapitel steht über allen anderen. Alles, was danach kommt, gilt nur, solange das hier eingehalten wird. Wer es als Formalität liest, hat den Kurs missverstanden.',
  goals: ['Consent konkret definieren können — nicht nur als Schlagwort.', 'Interesse, Flirt und Zustimmung sauber auseinanderhalten.', 'Direkt fragen, ohne die Situation zu zerstören.', 'Auf Zögern richtig reagieren und danach Sicherheit herstellen.', 'Einwilligungsfähigkeit bei Alkohol realistisch einschätzen.'],
  story: 'Ich habe einmal einen Abend lang übersehen, dass sie nur noch mitgemacht hat. Sie hat nicht nein gesagt. Sie hat auch nichts mehr selbst angefangen. Ich habe das damals als Zustimmung gelesen, weil ich es lesen wollte. Das ist der Fehler, über den ich am längsten nachgedacht habe.',
  sections: [{
    type: 'definition',
    h: 'Was Consent konkret bedeutet',
    items: [{
      k: 'Freiwillig',
      v: 'Ohne Druck, ohne Überredung, ohne Gegenleistung für Zeit, Geld oder Aufmerksamkeit.'
    }, {
      k: 'Informiert',
      v: 'Sie weiss, worum es geht — auch, was du willst und was nicht.'
    }, {
      k: 'Konkret',
      v: 'Zustimmung zu einem Kuss ist keine Zustimmung zu mehr.'
    }, {
      k: 'Fortlaufend',
      v: 'Sie gilt jetzt, nicht für den ganzen Abend und nicht für das nächste Mal.'
    }, {
      k: 'Widerrufbar',
      v: 'Jederzeit, ohne Begründung, auch mittendrin.'
    }, {
      k: 'Nicht ableitbar',
      v: 'Nicht aus Schweigen, nicht aus Körpersprache, nicht daraus, dass sie mitgekommen ist.'
    }]
  }, {
    type: 'note',
    tone: 'consent',
    title: 'Der Unterschied zwischen Interesse und Zustimmung',
    text: 'Interesse ist eine Beobachtung: Sie lacht, sie sucht Nähe, sie bleibt. Zustimmung ist eine Antwort auf eine Frage. Interesse macht die Frage sinnvoll. Es beantwortet sie nicht.'
  }, {
    type: 'phrases',
    h: 'So fragt man, ohne die Stimmung zu zerstören',
    note: 'Die Angst, mit einer Frage alles kaputtzumachen, ist der häufigste Einwand. In der Praxis passiert das Gegenteil: Wer fragt, wirkt sicher, nicht unsicher.',
    items: ['„Ist das für dich gerade gut?“', '„Möchtest du, dass ich weitermache?“', '„Wir müssen nichts machen.“', '„Sag mir jederzeit, wenn du etwas anders möchtest.“', '„Ich würde dich gern küssen.“']
  }, {
    type: 'phrases',
    h: 'Und so reagiert man auf ein Nein',
    tone: 'good',
    note: 'Das Ziel nach einem Nein ist nicht, die Situation zu retten. Es ist, ihr die Peinlichkeit zu nehmen.',
    items: ['„Alles gut. Danke, dass du es sagst.“', '„Kein Thema — willst du noch was trinken?“', '„Passt. Ich fand den Abend trotzdem gut.“']
  }, {
    type: 'note',
    tone: 'danger',
    title: 'Alkohol',
    text: 'Bei starkem Alkoholkonsum, erkennbarer Beeinträchtigung oder wenn du unsicher bist, ob sie klar entscheiden kann, findet kein sexueller Übergang statt. Nicht „lieber vorsichtig“ — gar nicht. Wenn die Situation nüchtern eine gute Idee ist, ist sie es morgen auch noch.'
  }, {
    type: 'list',
    h: 'Auch das gehört zu Consent',
    tone: 'neutral',
    items: ['Machtgefälle: Chefin, Mitarbeiterin, Abhängigkeit — Zustimmung ist dort nie einfach.', 'Digitale Grenzen: keine ungefragten Bilder, keine Weiterleitung privater Nachrichten.', 'Intime Bilder gehören der Person, die darauf ist. Auch nach dem Kontakt.', 'Keine heimlichen Aufnahmen. Nie.', 'Innerhalb einer Beziehung gilt dasselbe wie draussen.']
  }, {
    type: 'text',
    h: 'Wenn du selbst einen Fehler gemacht hast',
    p: ['Es kann passieren, dass du eine Grenze übersehen hast. Dann gilt: aufhören, benennen, nicht rechtfertigen, nicht um Absolution bitten. „Ich habe gerade nicht gemerkt, dass dir das zu viel war. Tut mir leid.“ Danach ist es ihre Entscheidung, wie es weitergeht — nicht deine.']
  }],
  scenario: {
    title: 'Sie zieht sich plötzlich zurück',
    brief: ['Ihr küsst euch seit ein paar Minuten auf ihrem Sofa. Es lief bis eben beidseitig.', 'Jetzt dreht sie den Kopf leicht weg und legt eine Hand auf deine Brust. Sie sagt nichts.'],
    signals: [{
      icon: 'hand',
      tone: 'danger',
      text: 'Hand auf der Brust — eine körperliche Distanzierung.'
    }, {
      icon: 'circle-alert',
      tone: 'caution',
      text: 'Sie sagt nichts. Schweigen ist keine Zustimmung.'
    }, {
      icon: 'eye',
      tone: 'caution',
      text: 'Der Blickkontakt ist weg.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: 'Du lehnst dich zurück, gibst Abstand und sagst: „Alles gut. Wollen wir kurz was trinken?“',
      feedback: 'Richtig. Du hast das Signal gelesen, sofort Abstand gegeben und ihr einen Ausweg ohne Peinlichkeit angeboten. Genau darum geht es: die Situation entlasten, nicht klären.',
      deltas: [{
        id: 'respekt',
        delta: '+8'
      }, {
        id: 'beobachtung',
        delta: '+6'
      }]
    }, {
      letter: 'B',
      label: 'Du fragst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ist das gerade okay für dich?“',
      feedback: 'Auch richtig. Direkt nachfragen ist immer erlaubt. Achte danach nicht nur auf das Wort, sondern darauf, ob sie danach wieder von selbst näher kommt.',
      deltas: [{
        id: 'respekt',
        delta: '+7'
      }, {
        id: 'klarheit',
        delta: '+5'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'voreilig',
      outcome: 'costly',
      quote: 'Du machst langsamer weiter und wartest ab, ob sie wieder mitgeht.',
      feedback: 'Das ist die häufigste Reaktion — und sie schiebt die Verantwortung zu ihr. Sie müsste jetzt aktiv stoppen, statt dass du auf ihr Signal reagierst. Ein Rückzug ist bereits die Antwort.',
      deltas: [{
        id: 'beobachtung',
        delta: '−5'
      }, {
        id: 'respekt',
        delta: '−4'
      }]
    }, {
      letter: 'D',
      label: 'Du fragst',
      kind: 'druck',
      outcome: 'bad',
      quote: '„Was ist denn los? Eben war doch alles gut.“',
      feedback: 'Damit muss sie sich rechtfertigen für etwas, das keine Rechtfertigung braucht. Das erzeugt genau den Druck, unter dem viele dann doch weitermachen — und das ist keine Zustimmung mehr.',
      deltas: [{
        id: 'respekt',
        delta: '−9'
      }, {
        id: 'beobachtung',
        delta: '−4'
      }]
    }]
  },
  interaction: {
    type: 'traffic',
    title: 'Consent-Ampel',
    prompt: 'Bewerte jede Situation. Bei Unsicherheit gilt immer Rot.',
    items: [{
      text: 'Sie sagt „ja, gern“ und kommt näher.',
      answer: 'gruen',
      why: 'Verbal und körperlich eindeutig, aus eigener Initiative.'
    }, {
      text: 'Sie sagt nichts, macht aber auch nichts dagegen.',
      answer: 'rot',
      why: 'Schweigen ist keine Zustimmung. Frag nach oder hör auf.'
    }, {
      text: 'Sie lacht viel und berührt deinen Arm.',
      answer: 'gelb',
      why: 'Interesse — mehr nicht. Es macht die Frage sinnvoll, beantwortet sie aber nicht.'
    }, {
      text: 'Sie sagt „ich weiss nicht“ und lacht dabei.',
      answer: 'rot',
      why: 'Unsicherheit ist ein Nein, bis sie von selbst ein klares Ja äussert. Das Lachen ändert daran nichts.'
    }, {
      text: 'Sie hatte fünf Drinks und lallt leicht.',
      answer: 'rot',
      why: 'Eingeschränkte Einwilligungsfähigkeit. Kein sexueller Übergang, unabhängig davon, was sie sagt.'
    }, {
      text: 'Letzte Woche wollte sie. Heute sagt sie nichts dazu.',
      answer: 'rot',
      why: 'Frühere Zustimmung gilt nicht weiter. Consent ist fortlaufend.'
    }, {
      text: 'Sie fragt: „Kommst du noch mit hoch?“',
      answer: 'gelb',
      why: 'Eine Einladung in die Wohnung ist keine Zusage für Sex. Kläre es dort, nicht im Kopf.'
    }]
  },
  challenge: {
    title: 'Drei Stopp-Signale definieren',
    text: 'Schreib dir drei konkrete nonverbale Signale auf, bei denen du künftig sofort Abstand nimmst — ohne nachzufragen, ohne zu prüfen. Wer sie vorher festlegt, muss sie im Moment nicht abwägen.'
  },
  reflection: {
    question: 'Gab es eine Situation, in der du im Nachhinein nicht sicher bist, ob sie wirklich wollte? Was würdest du heute anders machen?',
    placeholder: 'Ehrlich, nur für dich …'
  },
  summary: ['Consent ist freiwillig, informiert, konkret, fortlaufend und widerrufbar.', 'Interesse macht die Frage sinnvoll. Es beantwortet sie nicht.', 'Schweigen, Zögern und Erstarren sind keine Zustimmung.', 'Bei Alkohol oder Unsicherheit: kein Übergang. Ohne Ausnahme.', 'Nach einem Nein ist deine Aufgabe, die Situation zu entlasten.'],
  quiz: [{
    q: 'Sie hat vorhin zugestimmt. Zwanzig Minuten später wirkt sie zurückhaltend. Was gilt?',
    options: [{
      text: 'Die Zustimmung von vorhin gilt weiter',
      why: 'Nein. Consent ist fortlaufend und jederzeit widerrufbar.'
    }, {
      text: 'Du hörst auf und fragst nach',
      correct: true,
      why: 'Richtig. Eine Veränderung im Verhalten ist ein Signal, kein Rauschen.'
    }, {
      text: 'Du machst langsamer weiter',
      why: 'Das verlagert die Verantwortung zu ihr, aktiv zu stoppen.'
    }]
  }, {
    q: 'Was ersetzt eine verbale Zustimmung?',
    options: [{
      text: 'Eindeutige Körpersprache',
      why: 'Körpersprache kann Interesse zeigen, ersetzt Zustimmung aber nie sicher.'
    }, {
      text: 'Dass sie mit zu dir gekommen ist',
      why: 'Eine Einladung in die Wohnung ist keine Zusage.'
    }, {
      text: 'Nichts',
      correct: true,
      why: 'Richtig. Es gibt keinen Ersatz — nur die Frage und ihre Antwort.'
    }]
  }, {
    q: 'Sie sagt nein. Was ist die richtige Reaktion?',
    options: [{
      text: 'Nachfragen, woran es liegt',
      why: 'Das verlangt eine Rechtfertigung, die sie nicht schuldet.'
    }, {
      text: 'Abstand geben und die Situation entlasten',
      correct: true,
      why: 'Genau. Deine Aufgabe ist, ihr die Peinlichkeit zu nehmen.'
    }, {
      text: 'Später am Abend nochmal versuchen',
      why: 'Ein Nein ist keine Zwischenstation. Das Thema ist beendet.'
    }]
  }, {
    q: 'Wann ist Einwilligungsfähigkeit eingeschränkt?',
    options: [{
      text: 'Nur bei Bewusstlosigkeit',
      why: 'Deutlich zu eng gefasst.'
    }, {
      text: 'Bei starker Alkoholisierung, Angst, Druck oder Abhängigkeit',
      correct: true,
      why: 'Richtig — und im Zweifel gilt immer die vorsichtigere Einschätzung.'
    }, {
      text: 'Wenn sie selbst sagt, sie sei betrunken',
      why: 'Das ist ein Hinweis, aber nicht die einzige Grenze.'
    }]
  }],
  transfer: 'Vor dem nächsten körperlichen Schritt: einmal fragen. Wörtlich.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-a.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-b.js
try { (() => {
window.FBChaptersB = [/* ═══════════ 03 ═══════════ */
{
  number: '03',
  slug: 'auftreten',
  rail: 'Auftreten',
  image: 'assets/chapters/03-auftreten.png',
  title: 'Auftreten',
  subtitle: 'Was du mit dem Äusseren doch tust',
  duration: '16 Min',
  lead: 'Ich habe gesagt, es liegt nicht am Gesicht. Das stimmt. Es liegt aber sehr wohl an dem, was du mit dem machst, was du hast — und das ist etwas völlig anderes.',
  goals: ['Den Unterschied zwischen Aussehen und Sorgfalt verstehen.', 'Die wenigen Details identifizieren, die überproportional wirken.', 'Körperhaltung, Stimme und Tempo als steuerbare Grössen nutzen.', 'Dafür sorgen, dass das reale Auftreten zum Profil passt.'],
  story: 'Ein Freund hat mir mal gesagt, ich rieche nach Wohnung. Nicht schlecht — nach Wohnung. Ich habe drei Wochen später mehr Rückmeldung bekommen als im halben Jahr davor. Es war nicht mein Gesicht.',
  sections: [{
    type: 'text',
    h: 'Das Ziel ist nicht Schönheit, sondern Sorgfalt',
    p: ['Niemand erwartet ein Model. Was Menschen in den ersten Sekunden lesen, ist etwas anderes: Kümmert der sich um sich selbst? Sorgfalt ist ein Signal für Selbstrespekt, und Selbstrespekt ist attraktiv, weil er andeutet, wie du mit anderen umgehst.', 'Der gute Teil daran: Sorgfalt ist vollständig lernbar und kostet fast nichts.']
  }, {
    type: 'list',
    h: 'Die Reihenfolge, in der es sich lohnt',
    tone: 'accent',
    items: ['Geruch. Frisch geduscht, saubere Kleidung, Zähne. Alles andere ist zweitrangig, wenn das nicht sitzt.', 'Passform. Ein günstiges T-Shirt, das passt, schlägt ein teures, das nicht passt.', 'Schuhe. Werden bewusster wahrgenommen, als die meisten Männer glauben.', 'Haare und Bart. Regelmässig, nicht spektakulär.', 'Haut. Schlaf, Wasser, eine einfache Creme. Kein Programm.', 'Duft. Zurückhaltend. Man soll ihn erst bemerken, wenn man dir nahe kommt.']
  }, {
    type: 'compare',
    h: 'Authentizität und Nachlässigkeit sind nicht dasselbe',
    bad: {
      label: 'Nachlässig',
      text: '„Ich bin halt so. Wer mich mag, nimmt mich wie ich bin.“ — meistens der Satz von jemandem, der nie etwas ausprobiert hat.'
    },
    good: {
      label: 'Authentisch',
      text: 'Du wirkst wie du selbst, nur an einem guten Tag. Nichts Verkleidetes, nichts Kopiertes, aber sichtbar überlegt.'
    }
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Bedeutung von Körpersprache',
    p: 'Nutze Körpersprache zuerst zur Steuerung deiner eigenen Wirkung: offene Haltung, angemessener Blickkontakt, ruhiges Tempo, respektvolle Distanz, sichtbare Aufmerksamkeit. Die Signale der anderen Person helfen dir bei der Einschätzung — sie sind aber nie eine automatische Zustimmung.'
  }, {
    type: 'list',
    h: 'Drei Dinge, die sofort wirken',
    tone: 'neutral',
    items: ['Langsamer sprechen. Die meisten reden aus Nervosität zu schnell. Ein halber Gang runter wirkt sofort ruhiger.', 'Nicht wegschauen, wenn sie antwortet. Blickkontakt beim Zuhören zählt mehr als beim Reden.', 'Aufhören, mit Dingen zu spielen. Glas, Handy, Serviette — Hände ruhig auf dem Tisch.']
  }, {
    type: 'note',
    tone: 'caution',
    title: 'Das Profil ist ein Versprechen',
    text: 'Wenn deine Fotos zwei Jahre alt sind oder du nur im besten Licht darauf zu sehen bist, zahlst du in der ersten Minute des Dates. Enttäuschung am Anfang holst du nicht mehr auf.'
  }],
  scenario: {
    title: 'Eine Stunde vor dem ersten Treffen',
    brief: ['19:00, ihr seid um 20:00 auf ein Getränk verabredet.', 'Du kommst direkt vom Büro nach Hause und hast genau eine Stunde.'],
    signals: [{
      icon: 'clock',
      tone: 'caution',
      text: 'Eine Stunde für alles.'
    }, {
      icon: 'circle-dot',
      tone: 'consent',
      text: 'Ihr trefft euch in einer ruhigen Bar, nicht sportlich.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: 'Duschen, frisches Hemd, Zähne, zehn Minuten hinsetzen und nichts tun.',
      feedback: 'Das Wichtigste zuerst, plus der unterschätzte Teil: Du kommst nicht gehetzt an. Ruhe ist sichtbar.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '+5'
      }, {
        id: 'verlaesslichkeit',
        delta: '+3'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      kind: 'initiative',
      outcome: 'costly',
      quote: 'Vierzig Minuten Training, danach schnell duschen und los.',
      feedback: 'Gut gemeint. Aber du kommst mit erhöhtem Puls, feuchten Haaren und knapp an. Das Training bringt in dieser Stunde nichts mehr — die Ruhe schon.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '−2'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: 'Drei Outfits anprobieren, zwei Freunde um Fotos-Feedback fragen.',
      feedback: 'Der Aufwand fliesst in die Entscheidung, die am wenigsten bringt. Und die Unsicherheit, die du damit hochfährst, nimmst du mit an den Tisch.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '−4'
      }]
    }]
  },
  interaction: {
    type: 'checklist',
    title: 'Check vor dem nächsten Date',
    prompt: 'Sechs Punkte. Wenn drei davon sitzen, bist du über dem Durchschnitt.',
    items: ['Geduscht, frische Kleidung, Zähne', 'Kleidung passt — nicht zu weit, nicht zu eng', 'Schuhe sauber', 'Haare und Bart in Form', 'Duft zurückhaltend, maximal zwei Sprüher', 'Zehn Minuten Puffer eingeplant']
  },
  challenge: {
    title: 'Ein Detail sichtbar verbessern',
    text: 'Wähle diese Woche genau eine Sache: neue Schuhe, ein Hemd, das passt, oder ein Termin beim Coiffeur. Nur eine. Und dann achte darauf, ob sich etwas an den Reaktionen ändert.'
  },
  reflection: {
    question: 'Was an deinem Auftreten würdest du selbst bei jemand anderem als nachlässig bezeichnen?',
    placeholder: 'Ehrlich …'
  },
  summary: ['Sorgfalt schlägt Aussehen — und ist lernbar.', 'Geruch und Passform vor allem anderen.', 'Langsamer sprechen, beim Zuhören hinschauen, Hände ruhig.', 'Das Profil muss zum Original passen.'],
  quiz: [{
    q: 'Was wirkt in den ersten Sekunden am stärksten?',
    options: [{
      text: 'Gesichtszüge',
      why: 'Die kannst du nicht ändern — und sie entscheiden weniger, als du denkst.'
    }, {
      text: 'Sichtbare Sorgfalt',
      correct: true,
      why: 'Richtig. Sie wird als Selbstrespekt gelesen.'
    }, {
      text: 'Teure Kleidung',
      why: 'Passform schlägt Preis deutlich.'
    }]
  }, {
    q: 'Wo zahlt sich Blickkontakt am meisten aus?',
    options: [{
      text: 'Beim Reden',
      why: 'Hilft, ist aber nicht der wirksamste Moment.'
    }, {
      text: 'Beim Zuhören',
      correct: true,
      why: 'Genau. Aufmerksamkeit ist sichtbarer als Selbstdarstellung.'
    }, {
      text: 'Beim Begrüssen',
      why: 'Wichtig, aber kurz.'
    }]
  }, {
    q: '„Ich bin halt so“ ist meistens …',
    options: [{
      text: 'Authentizität',
      why: 'Authentisch heisst nicht ungepflegt.'
    }, {
      text: 'Nachlässigkeit mit besserem Namen',
      correct: true,
      why: 'Richtig — oft der Satz von jemandem, der nie etwas ausprobiert hat.'
    }, {
      text: 'Selbstbewusstsein',
      why: 'Eher das Gegenteil.'
    }]
  }],
  transfer: 'Eine Sache verbessern, nicht zehn. Diese Woche.'
}, /* ═══════════ 04 ═══════════ */
{
  number: '04',
  slug: 'profil',
  rail: 'Profil & Fotos',
  image: 'assets/chapters/04-profil.png',
  title: 'Profil & Fotos',
  subtitle: 'Was die App zeigt und was Menschen sehen',
  duration: '18 Min',
  lead: 'Dein Profil trifft die Vorentscheidung, bevor du ein Wort geschrieben hast. Es ist der einzige Teil des Datings, den du in Ruhe, ohne Zeitdruck und beliebig oft überarbeiten kannst.',
  goals: ['Ein Hauptfoto wählen, das Nähe erzeugt statt Distanz.', 'Die Fotoreihenfolge als Dramaturgie verstehen.', 'Einen Profiltext schreiben, der Gesprächsanker liefert.', 'Die eigene Absicht im Profil sichtbar machen.'],
  special: 'playbook',
  story: 'Mein erstes Profil bestand aus vier Fotos, auf denen ich nicht lachte, weil ich dachte, das wirke interessant. Es wirkte, als hätte man mich zur Anmeldung gezwungen.',
  sections: [{
    type: 'text',
    h: 'Das Hauptfoto entscheidet in einer halben Sekunde',
    p: ['Gesicht klar erkennbar, kein Hut, keine Sonnenbrille, keine Gruppe. Sie muss sofort wissen, wen sie trifft. Und der stärkste Einzelfaktor über alle Fotos hinweg ist ein echtes Lachen — Augen mit, nicht nur Mund. Es beantwortet die Frage, die niemand ausspricht: Wird ein Abend mit dir angenehm?']
  }, {
    type: 'note',
    tone: 'caution',
    title: 'Zum Thema Algorithmus',
    text: 'Niemand ausserhalb der Unternehmen kennt die Rankinglogik dieser Apps im Detail, und sie ändert sich laufend. Was hier steht, sind Erfahrungswerte und Hypothesen aus vielen Monaten Beobachtung — keine belegten Mechanismen. Behandle sie als Arbeitsannahmen, nicht als Naturgesetze.'
  }, {
    type: 'list',
    h: 'Die Reihenfolge der Fotos ist eine Dramaturgie',
    tone: 'neutral',
    items: ['1 — Gesicht, freundlich, klar. Der Türöffner.', '2 — Ganzkörper, unbearbeitet. Ehrlichkeit filtert im Voraus.', '3 — Eine Tätigkeit, die eine Frage provoziert.', '4 — Sozialer Kontext: du mit anderen, aber klar erkennbar.', '5 — Etwas Ruhiges. Ein Ort, ein Detail, keine Person.', '6 — Optional der Sonderfall (siehe unten).']
  }, {
    type: 'text',
    h: 'Der Sonderfall: oben ohne',
    p: ['Am See, im Meer, beim Sprung vom Steg ist ein freier Oberkörper normal und wirkt beiläufig. Im Badezimmerspiegel oder im Wohnzimmer wirkt er wie eine Ansage — und Ansagen liest man als Unsicherheit, nicht als Selbstbewusstsein. Und beides gilt nur, wenn du oben ohne wirklich gut aussiehst. Sonst kostet dich das Foto mehr Matches, als es bringt.']
  }, {
    type: 'compare',
    h: 'Profiltext: austauschbar oder konkret',
    bad: {
      label: 'Austauschbar',
      text: '„Reisen, Sport, gutes Essen. Humor ist mir wichtig. Frag einfach.“ — steht so in zehntausend Profilen und liefert keinen einzigen Anknüpfungspunkt.'
    },
    good: {
      label: 'Konkret',
      text: '„Verkaufstrainer, rede beruflich den ganzen Tag. Privat: klettern, kochen, lange Wege zu Fuss. Suche gerade nichts Festes — sag einfach, wenn du das Gegenteil suchst.“'
    }
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Ein Profil ist ein Versprechen',
    text: 'Jedes Foto, das besser aussieht als du, kaufst du auf Kredit. Bezahlt wird in der ersten Minute des Dates, mit Zinsen. Optimiere so weit, dass es dich zeigt — nicht weiter.'
  }],
  scenario: {
    title: 'Dein Profil steht seit drei Monaten unverändert',
    brief: ['Die Matches sind weniger geworden. Das Profil ist dasselbe wie im März.', 'Du überlegst, einen Boost zu kaufen.'],
    signals: [{
      icon: 'trending-down',
      tone: 'caution',
      text: 'Weniger Matches bei gleichem Profil.'
    }, {
      icon: 'circle-dot',
      tone: 'consent',
      text: 'Zwei Fotos sind über zwei Jahre alt.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: 'Erst zwei Fotos ersetzen und den Text neu schreiben. Boost frühestens danach.',
      feedback: 'Richtig. Ein Boost multipliziert nur die Sichtbarkeit des aktuellen Profils. Auf ein schwaches Profil kaufst du dir mehr Menschen, die vorbeiscrollen.',
      deltas: [{
        id: 'beobachtung',
        delta: '+5'
      }, {
        id: 'verlaesslichkeit',
        delta: '+3'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      kind: 'voreilig',
      outcome: 'costly',
      quote: 'Boost kaufen und schauen, was passiert.',
      feedback: 'Verständlich, aber die Reihenfolge ist falsch herum. Du misst danach nicht dein Profil, sondern nur die gekaufte Reichweite.',
      deltas: [{
        id: 'beobachtung',
        delta: '−3'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: 'Alle sechs Fotos auf einmal austauschen.',
      feedback: 'Dann weisst du hinterher nicht, was gewirkt hat. Ändere in Schritten, sonst lernst du nichts über dein eigenes Profil.',
      deltas: [{
        id: 'beobachtung',
        delta: '−2'
      }]
    }]
  },
  interaction: {
    type: 'checklist',
    title: 'Profil-Audit',
    prompt: 'Geh dein Profil jetzt durch. Jeder Punkt, der nicht sitzt, ist Arbeit für heute Abend.',
    items: ['Foto 1: Gesicht klar, kein Hut, keine Sonnenbrille, keine Gruppe', 'Mindestens zwei Fotos mit echtem Lachen', 'Ein ehrliches Ganzkörperfoto', 'Mindestens ein Foto, zu dem man etwas fragen kann', 'Kein Auto, keine Waffe, kein Spiegel-Selfie', 'Profiltext nennt zwei konkrete Dinge statt drei Kategorien', 'Deine Absicht steht drin']
  },
  challenge: {
    title: 'Sieben-Tage-Plan',
    text: 'Tag 1–2: neue Fotos machen lassen, nicht selbst. Tag 3: Reihenfolge festlegen. Tag 4: Text neu schreiben, laut lesen. Tag 5–7: laufen lassen und nichts ändern. Erst dann bewerten.'
  },
  reflection: {
    question: 'Welches deiner Fotos ist drin, weil es dir gefällt — und nicht, weil es etwas über dich erzählt?',
    placeholder: '…'
  },
  summary: ['Lachen ist der stärkste Einzelfaktor.', 'Foto 1 entscheidet: Gesicht, klar, allein.', 'Oben ohne nur mit Wasser im Bild und nur, wenn es wirklich passt.', 'Konkrete Angaben liefern Gesprächsanker, Kategorien nicht.', 'Erst das Profil fertig bauen, dann boosten.'],
  quiz: [{
    q: 'Was gehört auf Foto 1?',
    options: [{
      text: 'Ein Gruppenfoto, das dich sozial zeigt',
      why: 'Sie muss raten, wer du bist. Verlorener erster Eindruck.'
    }, {
      text: 'Dein Gesicht, klar erkennbar, allein',
      correct: true,
      why: 'Richtig. Alles andere kommt später.'
    }, {
      text: 'Ein Ganzkörperfoto beim Sport',
      why: 'Gehört ins Profil, aber nicht an Position 1.'
    }]
  }, {
    q: 'Wann ist ein Oben-ohne-Foto sinnvoll?',
    options: [{
      text: 'Wenn du trainiert bist',
      why: 'Zu wenig. Ohne Kontext wirkt es als Ansage.'
    }, {
      text: 'Wenn Wasser im Bild ist und es dir wirklich steht',
      correct: true,
      why: 'Genau — Kontext plus ehrliche Selbsteinschätzung.'
    }, {
      text: 'Nie',
      why: 'Zu pauschal. Am See ist es unauffällig.'
    }]
  }, {
    q: 'Du willst boosten. Was zuerst?',
    options: [{
      text: 'Boost kaufen, dann sehen',
      why: 'Du multiplizierst nur ein Profil, das du nicht geprüft hast.'
    }, {
      text: 'Profil fertigstellen, dann boosten',
      correct: true,
      why: 'Richtig. Reichweite verstärkt, was da ist — im Guten wie im Schlechten.'
    }, {
      text: 'Beides gleichzeitig',
      why: 'Dann weisst du nicht, was gewirkt hat.'
    }]
  }],
  transfer: 'Heute Abend: Foto 1 prüfen und den Profiltext laut vorlesen.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-b.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-c.js
try { (() => {
window.FBChaptersC = [/* ═══════════ 05 ═══════════ */
{
  number: '05',
  slug: 'schreiben',
  rail: 'Schreiben',
  image: 'assets/chapters/05-schreiben.png',
  title: 'Schreiben',
  subtitle: 'Textbausteine und „Wer fragt, der führt“',
  duration: '20 Min',
  lead: 'Die meisten Männer verlieren nicht beim Match, sondern in den ersten drei Nachrichten. Nicht weil sie langweilig sind, sondern weil sie nichts anbieten, worauf man antworten könnte.',
  goals: ['Aus dem Profil einen konkreten Anknüpfungspunkt lesen.', 'Fragen stellen, die eine Richtung vorgeben statt zu verhören.', 'Eigene Textbausteine bauen, die nach dir klingen.', 'Erkennen, wann ein Gespräch zu Ende ist.'],
  special: 'snippets',
  story: 'Ich habe zwei Jahre lang „Hey, wie gehts?“ geschrieben und mich gewundert. Der Wechsel kam nicht durch einen besseren Spruch, sondern dadurch, dass ich angefangen habe, ihr Profil überhaupt zu lesen.',
  sections: [{
    type: 'text',
    h: 'Lies das Profil, bevor du schreibst',
    p: ['Eine konkrete Beobachtung schlägt jedes Kompliment. „Schöne Augen“ hat sie heute schon dreimal bekommen. „Das Foto mit dem Steinbock — wo war das?“ hat sie noch nie bekommen, weil dafür jemand hinschauen müsste.', 'Und der Nebeneffekt: Du erkennst früh, ob überhaupt etwas da ist, worüber du reden willst.']
  }, {
    type: 'text',
    h: 'Jede Nachricht hat eine Aufgabe',
    p: ['Das ist der Punkt, an dem sich dieser Kurs von jedem anderen unterscheidet: Schreiben ist hier kein Selbstzweck, sondern ein Schritt in einer Kette. Nachricht eins soll eine Antwort erzeugen. Nachricht drei soll zeigen, wer du bist. Nachricht sechs soll das Treffen möglich machen. Wenn eine Nachricht keine dieser Aufgaben hat, kannst du sie weglassen.', 'Der häufigste Fehler ist nicht die falsche Formulierung, sondern das ziellose Weiterschreiben. Zwei Wochen netter Chat ohne Richtung enden zuverlässig in nichts — nicht weil du langweilig warst, sondern weil nie ein nächster Schritt angeboten wurde.']
  }, {
    type: 'list',
    h: 'Der Ablauf im Chat',
    tone: 'accent',
    items: ['Nachricht 1 — konkrete Beobachtung aus ihrem Profil plus eine Frage. Aufgabe: eine Antwort auslösen.', 'Nachricht 2–4 — antworten, eigene Perspektive geben, zurückfragen. Aufgabe: zeigen, wer du bist, und prüfen, ob es beidseitig läuft.', 'Nachricht 5 — Absicht klarstellen, wenn sie fragt. Aufgabe: keine falsche Erwartung entstehen lassen.', 'Nachricht 6 — die Einladung. Tag, Zeit, Ort. Aufgabe: aus dem Chat ein Treffen machen.', 'Danach — Bestätigung am Tag des Treffens. Aufgabe: Verlässlichkeit zeigen.']
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Die Kunst der Unterhaltung',
    p: 'Interessant sein heisst nicht, permanent Witze oder Geschichten zu liefern. Gute Unterhaltung entsteht aus Aufmerksamkeit, Resonanz, eigenen Perspektiven und konkreten Details. Wer dauernd performt, hört auf zuzuhören — und das merkt man schneller als jede Pointe.'
  }, {
    type: 'text',
    h: 'Wer fragt, der führt',
    p: ['Die meisten Frauen beantworten deine Frage und hängen zwei Wörter an: „Und du?“ Das ist der ganze Mechanismus. Du weisst bereits, was als Nächstes kommt — es ist exakt das, was du gefragt hast.', 'Also schreibst du deine Antwort einmal. Richtig gut, mit Tiefe, in deiner Sprache. Dann legst du sie auf drei Buchstaben. Beim nächsten Mal tippst du ein Kürzel und hast in einer Sekunde einen Absatz, für den andere fünf Minuten brauchen.']
  }, {
    type: 'definition',
    h: 'Einrichten — dauert fünf Minuten, einmalig',
    items: [{
      k: 'iPhone',
      v: 'Einstellungen → Allgemein → Tastatur → Textersetzung → Plus oben rechts. Oben bei „Phrase" den ganzen Text einfügen, unten bei „Kurzbefehl" das Kürzel, z. B. ;vor. Sichern. Läuft ab sofort in jeder App — iMessage, WhatsApp, Tinder, Bumble.'
    }, {
      k: 'Android · Gboard',
      v: 'Einstellungen → System → Sprachen & Eingabe → Bildschirmtastatur → Gboard → Wörterbuch → Persönliches Wörterbuch → Sprache wählen → Plus. Oben bei „Wort" den Text, unten bei „Verknüpfung" das Kürzel. Der Baustein erscheint dann als Vorschlag über der Tastatur — antippen, fertig.'
    }, {
      k: 'Android · Samsung',
      v: 'Einstellungen → Allgemeine Verwaltung → Samsung Tastatur → Weitere Eingabeoptionen → Text-Shortcuts. Gleiches Prinzip: Kürzel plus Volltext.'
    }, {
      k: 'Kürzel richtig wählen',
      v: 'Immer mit einem Sonderzeichen beginnen — ;vor statt vor. Sonst löst der Baustein mitten in einem normalen Wort aus. Drei Zeichen reichen, länger tippt sich schlechter als der Satz selbst.'
    }, {
      k: 'Unterschied',
      v: 'Auf dem iPhone ersetzt sich der Text automatisch, sobald du das Kürzel plus Leerzeichen tippst, und synchronisiert über iCloud auf alle Geräte. Bei Gboard musst du den Vorschlag antippen, dafür ist das Wörterbuch pro Sprache getrennt — leg die Bausteine dort an, in der du schreibst.'
    }, {
      k: 'Länge',
      v: 'Beide Systeme nehmen mehrere Sätze. Absätze mit Zeilenumbruch funktionieren auf dem iPhone zuverlässig, bei Gboard je nach Version nicht — im Zweifel als einen Fliesstext anlegen.'
    }]
  }, {
    type: 'list',
    h: 'Drei Regeln für Bausteine',
    tone: 'accent',
    items: ['Schreib sie selbst, in deiner Sprache. Ein Baustein, der nicht nach dir klingt, fliegt beim Date auf.', 'Nie als ganze Nachricht senden. Ein Satz zu ihrem Profil davor — dann der Baustein.', 'Alle drei Monate neu schreiben. Sprache, die du nicht mehr sprichst, merkt man.']
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Bausteine sind gegen das Tippen, nicht gegen das Zuhören',
    text: 'Zwanzig Gespräche gleichzeitig führen heisst: keines davon führst du wirklich. In dem Moment, in dem du ihre Nachricht nur noch nach dem passenden Kürzel scannst, hast du das Gespräch verloren — sie merkt es meistens vor dir. Und eine vorgetäuschte Persönlichkeit hält genau bis zum ersten Treffen.'
  }, {
    type: 'list',
    h: 'Was du nicht tust',
    tone: 'danger',
    items: ['Künstlich warten, um interessanter zu wirken. Spiele sind für Leute, die nichts zu sagen haben.', 'Drei Nachrichten hinterherschieben, wenn keine Antwort kommt.', 'Lügen, wenn sie fragt, ob du noch mit anderen schreibst. Du musst nichts von dir aus erzählen — gefragt wird ehrlich beantwortet.', 'Sofort sexualisieren. Flirt ja, Übergriff im Chat nein.']
  }, {
    type: 'text',
    h: 'Wann du aufhörst zu investieren',
    p: ['Wenn drei Nachrichten in Folge einsilbig zurückkommen und keine Gegenfrage dabei ist, ist das Gespräch beendet — sie hat es nur höflicher formuliert als ein Nein. Kein Vorwurf, keine Abschiedsrede. Einfach nicht mehr schreiben.']
  }],
  scenario: {
    title: 'Sie fragt, was du suchst',
    brief: ['Elf Tage geschrieben, gutes Tempo, noch kein Treffen.', 'Sie schreibt: „Und was suchst du so? 🙂“'],
    signals: [{
      icon: 'message-square',
      tone: 'consent',
      text: 'Direkte Frage — sie will Klarheit, nicht Small Talk.'
    }, {
      icon: 'clock',
      tone: 'caution',
      text: 'Elf Tage ohne Treffen ist schon lang.'
    }],
    options: [{
      letter: 'A',
      label: 'Offen',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ehrlich: aktuell nichts Festes. Wenn du das Gegenteil suchst, sag es einfach — dann sparen wir uns beide Zeit.“',
      feedback: 'Ehrlich, früh, ohne Drama. Verkleinert den Pool und schützt beide vor falschen Erwartungen. Das ist die einzige Antwort, die du in drei Monaten noch vertreten kannst.',
      deltas: [{
        id: 'klarheit',
        delta: '+8'
      }, {
        id: 'verlaesslichkeit',
        delta: '+5'
      }]
    }, {
      letter: 'B',
      label: 'Mehrdeutig',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: '„Ich lasse das offen. Man weiss ja nie, wer um die Ecke kommt.“',
      feedback: 'Taktisch wirksam — und genau die Aussage, die Hoffnung erzeugt, die du nicht einlösen willst. Unklarheit ist eine Entscheidung, keine Neutralität.',
      deltas: [{
        id: 'klarheit',
        delta: '−6'
      }, {
        id: 'verlaesslichkeit',
        delta: '−4'
      }]
    }, {
      letter: 'C',
      label: 'Ausweichend',
      kind: 'druck',
      outcome: 'bad',
      quote: '„Erstmal schauen, ob wir uns überhaupt riechen können 😏“',
      feedback: 'Du weichst der Frage aus, die sie gerade gestellt hat. Sie merkt es. Vertrauen sinkt, bevor ihr euch gesehen habt.',
      deltas: [{
        id: 'klarheit',
        delta: '−7'
      }, {
        id: 'respekt',
        delta: '−3'
      }]
    }, {
      letter: 'D',
      label: 'Umlenkend',
      kind: 'initiative',
      outcome: 'good',
      quote: '„Nichts Festes gerade. Aber das bespricht sich besser bei einem Getränk als hier — Donnerstag?“',
      feedback: 'Ehrlich plus Initiative. Nach elf Tagen ist das genau der richtige Moment, das Gespräch aus der App zu holen.',
      deltas: [{
        id: 'klarheit',
        delta: '+6'
      }, {
        id: 'initiative',
        delta: '+6'
      }]
    }]
  },
  interaction: {
    type: 'improve',
    title: 'Nachricht verbessern',
    prompt: 'Welche Version bringt eine Antwort — und warum?',
    rounds: [{
      bad: '„Hey :)“',
      good: '„Das Foto mit dem Steinbock — Alpstein oder täuscht das?“',
      why: 'Konkret, zeigt, dass du hingeschaut hast, und liefert ihr eine Antwort, die einfacher ist als Small Talk.'
    }, {
      bad: '„Was machst du so beruflich?“',
      good: '„Du schreibst, du arbeitest zu viel — was ist es, das dich so einsaugt?“',
      why: 'Greift ihre eigene Formulierung auf statt eine Standardfrage zu stellen.'
    }, {
      bad: '„Wollen wir mal was trinken gehen irgendwann?“',
      good: '„Donnerstag oder Samstag, ein Getränk in der Nähe vom Hauptbahnhof — passt dir eines davon?“',
      why: 'Konkret in Zeit und Ort. „Irgendwann“ ist keine Einladung, sondern eine Absichtserklärung.'
    }]
  },
  challenge: {
    title: 'Fünf eigene Bausteine schreiben',
    text: 'Setz dich einmal hin und schreib fünf Antworten, die du ständig brauchst: Vorstellung, Wohnort, was du suchst, Wochenende, Date-Vorschlag. In deiner Sprache. Danach legst du sie in die Textersetzung deines Handys.'
  },
  reflection: {
    question: 'Welche deiner Standardnachrichten würdest du selbst nicht beantworten?',
    placeholder: '…'
  },
  summary: ['Konkrete Beobachtung schlägt jedes Kompliment.', 'Die Frage, die du stellst, ist die Frage, die du zurückbekommst.', 'Bausteine sparen Tippen, nicht Zuhören.', 'Drei einsilbige Antworten in Folge sind ein höfliches Nein.'],
  quiz: [{
    q: 'Warum funktioniert „Wer fragt, der führt“?',
    options: [{
      text: 'Weil Fragen dominant wirken',
      why: 'Darum geht es nicht — es ist keine Machtfrage.'
    }, {
      text: 'Weil du die Rückfrage kennst, bevor sie kommt',
      correct: true,
      why: 'Genau. Sie spiegelt deine Frage zurück, und du hast die Antwort schon fertig.'
    }, {
      text: 'Weil Frauen gern gefragt werden',
      why: 'Pauschal und nicht der Mechanismus.'
    }]
  }, {
    q: 'Sie fragt, ob du noch mit anderen schreibst. Was tust du?',
    options: [{
      text: 'Ausweichen, das geht sie nichts an',
      why: 'Sie hat gefragt. Eine Ausweichantwort ist eine Antwort — nur eine unehrliche.'
    }, {
      text: 'Ehrlich antworten',
      correct: true,
      why: 'Richtig. Du musst nicht von dir aus erzählen, aber auf eine direkte Frage gehört eine ehrliche Antwort.'
    }, {
      text: 'Verneinen, um die Stimmung nicht zu kippen',
      why: 'Das ist die Lüge, die später am teuersten wird.'
    }]
  }, {
    q: 'Drei einsilbige Antworten in Folge, keine Gegenfrage. Was heisst das?',
    options: [{
      text: 'Sie ist schüchtern, dranbleiben',
      why: 'Möglich, aber unwahrscheinlich — und Nachhaken macht es nicht besser.'
    }, {
      text: 'Das Gespräch ist beendet',
      correct: true,
      why: 'Richtig. Höflicher formuliert als ein Nein, aber dasselbe.'
    }, {
      text: 'Zeit für ein Kompliment',
      why: 'Erhöht den Druck in einer Situation, die schon vorbei ist.'
    }]
  }],
  transfer: 'Heute: fünf Bausteine schreiben und im Handy hinterlegen.'
}, /* ═══════════ 06 ═══════════ */
{
  number: '06',
  slug: 'treffen',
  rail: 'Vom Match zum Treffen',
  image: 'assets/chapters/06-treffen.png',
  title: 'Vom Match zum Treffen',
  subtitle: 'Der Übergang, an dem die meisten scheitern',
  duration: '15 Min',
  lead: 'Zwischen einem guten Chat und einem realen Treffen liegt eine einzige Nachricht. Sie ist der Grund, warum manche Männer viele Matches und keine Dates haben.',
  goals: ['Den richtigen Moment an der Gesprächsdynamik erkennen statt an einer Nachrichtenzahl.', 'Eine Einladung formulieren, die konkret ist und trotzdem ein Nein zulässt.', 'Ausweichen richtig interpretieren.', 'Einmal nachfassen — und dann aufhören.'],
  sections: [{
    type: 'text',
    h: 'Es gibt keine magische Nachrichtenzahl',
    p: ['„Nach drei Nachrichten fragen“ ist ein Mythos. Was zählt, ist Gegenseitigkeit: Stellt sie auch Fragen? Kommen ihre Antworten in ähnlicher Länge? Bringt sie eigene Themen? Wenn ja, kannst du fragen — egal ob nach vier oder vierzig Nachrichten.', 'Der häufigere Fehler ist zu spät, nicht zu früh. Nach zwei Wochen Chat ohne Treffen wird aus Interesse eine Brieffreundschaft.']
  }, {
    type: 'list',
    h: 'Die Struktur einer guten Einladung',
    tone: 'accent',
    items: ['1 — Bezug zum Gespräch. Nicht aus dem Nichts.', '2 — Klare Einladung. Kein „man könnte ja mal“.', '3 — Konkreter Vorschlag: ein Tag, eine Uhrzeit, ein Ort.', '4 — Raum für Nein oder Alternative. Ein Satz reicht.']
  }, {
    type: 'compare',
    h: 'Zwei Einladungen',
    bad: {
      label: 'Unverbindlich',
      text: '„Wir sollten echt mal was trinken gehen irgendwann :)“ — sie müsste jetzt die ganze Arbeit machen: Tag, Ort, Initiative.'
    },
    good: {
      label: 'Konkret',
      text: '„Ich würde dich gern treffen. Donnerstag oder Samstag, ein Getränk beim Bellevue — passt dir eines davon? Wenn beides schlecht ist, sag einfach.“'
    }
  }, {
    type: 'text',
    h: 'Ausweichen lesen',
    p: ['„Diese Woche ist schwierig, nächste sieht besser aus“ mit einem konkreten Gegenvorschlag ist Interesse mit Terminproblem. Dasselbe ohne Gegenvorschlag, zweimal hintereinander, ist ein höfliches Nein. Der Unterschied liegt nicht in der Formulierung, sondern darin, ob sie etwas zurückgibt.']
  }, {
    type: 'note',
    tone: 'consent',
    title: 'Sicherheit gilt für beide',
    text: 'Erstes Treffen an einem öffentlichen, gut erreichbaren Ort. Keine Wohnung, kein abgelegener Platz, keine Abholung mit dem Auto. Das ist keine Misstrauensgeste — es macht es ihr leichter zuzusagen, und das ist in deinem Interesse.'
  }, {
    type: 'list',
    h: 'Nachfassen: einmal, nicht dreimal',
    tone: 'neutral',
    items: ['Keine Antwort auf die Einladung? Vier bis fünf Tage warten.', 'Einmal locker nachfassen, ohne Vorwurf und ohne Frage nach dem Warum.', 'Danach nicht mehr. Die Tür bleibt offen, aber du klopfst nicht weiter.', 'Am Tag des Treffens kurz bestätigen — das ist Verlässlichkeit, kein Nachfassen.']
  }],
  scenario: {
    title: 'Sie weicht zum zweiten Mal aus',
    brief: ['Du hast zweimal ein Treffen vorgeschlagen, beide Male konkret.', 'Beide Male: „Oh, diese Woche ist schwierig“ — ohne Gegenvorschlag. Geschrieben wird weiter, freundlich und regelmässig.'],
    signals: [{
      icon: 'circle-alert',
      tone: 'caution',
      text: 'Zweimal ausgewichen, beide Male ohne Alternative.'
    }, {
      icon: 'message-square',
      tone: 'consent',
      text: 'Der Chat läuft weiter und ist beidseitig.'
    }, {
      icon: 'scale',
      tone: 'caution',
      text: 'Chat ja, Treffen nein — das ist ein Muster.'
    }],
    options: [{
      letter: 'A',
      label: 'Du schreibst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich merke, Treffen ist gerade schwierig bei dir — kein Problem. Melde dich einfach, wenn es besser passt, dann machen wir was aus.“',
      feedback: 'Klar, ohne Vorwurf, und du gibst die Initiative zurück. Wenn Interesse da ist, meldet sie sich. Wenn nicht, hast du eine Antwort ohne peinliche Klärung.',
      deltas: [{
        id: 'klarheit',
        delta: '+7'
      }, {
        id: 'resilienz',
        delta: '+5'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      kind: 'rueckzug',
      outcome: 'good',
      quote: 'Du schreibst nichts mehr und lässt es auslaufen.',
      feedback: 'Auch legitim. Zwei konkrete Vorschläge ohne Gegenangebot sind eine Antwort. Etwas weniger sauber als A, weil sie im Unklaren bleibt — aber niemandem geschuldet.',
      deltas: [{
        id: 'resilienz',
        delta: '+4'
      }]
    }, {
      letter: 'C',
      label: 'Du schreibst',
      kind: 'druck',
      outcome: 'costly',
      quote: '„Willst du dich eigentlich treffen oder schreiben wir hier nur so?“',
      feedback: 'Die Frage ist berechtigt, der Ton macht sie zum Vorwurf. Sie muss sich jetzt verteidigen — und das beendet Gespräche zuverlässiger als jede Absage.',
      deltas: [{
        id: 'klarheit',
        delta: '+1'
      }, {
        id: 'respekt',
        delta: '−5'
      }]
    }, {
      letter: 'D',
      label: 'Du machst',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: 'Du schreibst weiter wie bisher und schlägst in zwei Wochen wieder etwas vor.',
      feedback: 'Damit wirst du zur Brieffreundschaft. Nach dem zweiten Ausweichen ohne Gegenvorschlag ändert sich durch mehr Chat nichts.',
      deltas: [{
        id: 'beobachtung',
        delta: '−4'
      }]
    }]
  },
  interaction: {
    type: 'improve',
    title: 'Einladung verbessern',
    prompt: 'Beide meinen dasselbe. Nur eine bekommt eine Zusage.',
    rounds: [{
      bad: '„Sollen wir mal was trinken?“',
      good: '„Donnerstag ab 19 Uhr, ein Getränk beim Bellevue — passt dir das?“',
      why: 'Tag, Zeit, Ort. Sie muss nur noch ja oder nein sagen statt selbst zu planen.'
    }, {
      bad: '„Wann hättest du denn Zeit?“',
      good: '„Ich kann Donnerstag oder Samstag. Passt eines davon, oder sag mir, was bei dir geht.“',
      why: 'Zwei Optionen statt einer offenen Frage — und trotzdem eine Tür für ihren Vorschlag.'
    }, {
      bad: '„Falls du Lust hast, könnten wir vielleicht mal …“',
      good: '„Ich würde dich gern treffen.“',
      why: 'Konjunktive und Einschränkungen wirken nicht höflich, sondern unsicher. Eine klare Einladung lässt sich leichter annehmen.'
    }]
  },
  challenge: {
    title: 'Deine Einladung schreiben',
    text: 'Formuliere deine Standard-Einladung nach der Viererstruktur. Ein Bezug, eine klare Einladung, ein konkreter Vorschlag, eine offene Tür. Vier Zeilen, nicht mehr.'
  },
  reflection: {
    question: 'Wie lange schreibst du im Schnitt, bevor du ein Treffen vorschlägst — und woran liegt das?',
    placeholder: '…'
  },
  summary: ['Nicht die Nachrichtenzahl entscheidet, sondern die Gegenseitigkeit.', 'Eine Einladung braucht Tag, Zeit, Ort und eine offene Tür.', 'Ausweichen mit Gegenvorschlag ist Interesse. Ohne, zweimal, ist ein Nein.', 'Einmal nachfassen, dann aufhören.', 'Erstes Treffen immer öffentlich.'],
  quiz: [{
    q: 'Wann ist der richtige Moment für die Einladung?',
    options: [{
      text: 'Nach genau drei Nachrichten',
      why: 'Feste Zahlen ignorieren die Dynamik des Gesprächs.'
    }, {
      text: 'Wenn das Gespräch beidseitig läuft',
      correct: true,
      why: 'Richtig — Gegenfragen und eigene Themen sind das Signal.'
    }, {
      text: 'Wenn sie zuerst fragt',
      why: 'Dann wartest du oft ewig. Initiative ist deine Aufgabe.'
    }]
  }, {
    q: 'Was fehlt bei „Wir sollten mal was trinken gehen“?',
    options: [{
      text: 'Ein Kompliment',
      why: 'Das Problem ist ein anderes.'
    }, {
      text: 'Ein konkreter Tag und Ort',
      correct: true,
      why: 'Genau. Sonst muss sie die ganze Planung übernehmen.'
    }, {
      text: 'Ein Emoji',
      why: 'Ändert nichts an der Unverbindlichkeit.'
    }]
  }, {
    q: 'Zweimal ausgewichen, kein Gegenvorschlag. Was tust du?',
    options: [{
      text: 'Ein drittes Mal vorschlagen',
      why: 'Das ist Verfolgen, nicht Werben.'
    }, {
      text: 'Initiative zurückgeben und es dabei belassen',
      correct: true,
      why: 'Richtig. Wenn Interesse besteht, meldet sie sich.'
    }, {
      text: 'Fragen, ob sie überhaupt Interesse hat',
      why: 'Berechtigt, aber der Ton wird fast immer als Vorwurf gelesen.'
    }]
  }],
  transfer: 'Beim nächsten guten Chat: Einladung mit Tag, Zeit und Ort — innerhalb einer Woche.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-c.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-d.js
try { (() => {
window.FBChaptersD = [/* ═══════════ 07 ═══════════ */
{
  number: '07',
  slug: 'date',
  rail: 'Das Date',
  image: 'assets/chapters/07-date.png',
  title: 'Das Date',
  subtitle: 'Ort, Länge, Ausstieg',
  duration: '17 Min',
  lead: 'Ein erstes Treffen ist kein Bewerbungsgespräch und kein Abendprogramm. Es ist eine Stunde, in der ihr beide herausfindet, ob ihr eine zweite wollt.',
  goals: ['Einen Ort wählen, der ein kurzes Treffen erlaubt.', 'Das Date bewusst kurz halten und bei Interesse verlängern.', 'Gesprächsbalance halten statt zu unterhalten.', 'Freundlich aussteigen, wenn es nicht passt.'],
  story: 'Mein schlechtestes Date war ein Fünfgänger. Wir wussten beide nach zwanzig Minuten, dass nichts läuft, und haben dann noch zwei Stunden höflich zusammen gegessen. Seitdem: ein Getränk.',
  sections: [{
    type: 'list',
    h: 'Ein Getränk schlägt ein Abendessen',
    tone: 'accent',
    items: ['Kurz, günstig, ohne Verpflichtung. Beide können nach einer Stunde gehen, ohne dass es unhöflich wirkt.', 'Kein Sitzenbleiben bis zur Rechnung, wenn es nicht passt.', 'Öffentlich und gut erreichbar — auch für ihren Heimweg.', 'Nicht zu laut. Wenn ihr euch anschreien müsst, entsteht kein Gespräch.', 'Nebeneinander oder über Eck ist entspannter als frontal gegenüber.']
  }, {
    type: 'text',
    h: 'Wer zahlt',
    p: ['Wenn du eingeladen hast, bietest du an zu zahlen. Ohne Aufhebens, ohne Erwartung und ohne es später zu erwähnen. Wenn sie teilen will, lässt du sie teilen — ein Insistieren macht daraus eine Schuld. Eine Einladung ist kein Vorschuss auf irgendetwas.']
  }, {
    type: 'note',
    tone: 'danger',
    title: 'Investition ist kein Anspruch',
    text: 'Zeit, Geld und Aufwand erzeugen keinen Anspruch auf Nähe. Wer so denkt, sagt es früher oder später auch — und in dem Moment ist der Abend vorbei. Zu Recht.'
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Gesprächsbalance',
    p: 'Ein gutes Gespräch ist ungefähr hälftig. Wer permanent erzählt, hört auf zuzuhören; wer nur fragt, führt ein Interview. Die einfachste Korrektur: Wenn du drei Sätze am Stück geredet hast, stell eine Frage. Wenn du drei Fragen gestellt hast, erzähl etwas von dir.'
  }, {
    type: 'text',
    h: 'Ein Drink ist kein Ziel, sondern ein Schritt',
    p: ['Hier steht die unbequeme Wahrheit über das erste Treffen: Ein Getränk ist keine Veranstaltung, die für sich steht. Es ist der kürzeste Weg, herauszufinden, ob ihr beide den Abend gemeinsam weiterführen wollt. Genau deshalb ein Getränk und kein Menü — nach einer Stunde ist der nächste Schritt möglich, statt dass ihr bis zur Rechnung festsitzt.', 'Das Ziel des Abends darf Sex sein. Was nicht erlaubt ist: den Ablauf gegen sie durchzuziehen. Jeder Schritt braucht ihr Ja, und an jedem Schritt kann der Abend enden, ohne dass etwas schiefgelaufen ist.']
  }, {
    type: 'list',
    h: 'Der Übergang — die Reihenfolge',
    tone: 'accent',
    items: ['1 — Direkt einladen. „Ich wohne fünf Minuten von hier. Willst du noch mit?" Klar gefragt, nicht als Vorwand verpackt.', '2 — Sagt sie nein: Spaziergang anbieten. Nicht als zweiter Anlauf zum selben Ziel, sondern als das, was es ist — mehr Zeit, weniger Verbindlichkeit.', '3 — Den Spaziergang an einen schönen Ort in deiner Nähe legen. See, Brücke, Altstadt. Es soll sich lohnen, nicht wie ein Umweg wirken.', '4 — Weiss sie nicht, wo das ist, hol sie mit dem Auto ab. Sag im selben Satz, dass du sie auch wieder zurückfährst, wann immer sie will.', '5 — Nach dem Spaziergang bist du in deiner Nähe. Jetzt ist die Einladung naheliegend statt konstruiert.', '6 — Fragt sie, was ihr bei dir macht: kochen. Das ist die einzige ehrliche Antwort, die nur zu Hause funktioniert.']
  }, {
    type: 'text',
    h: 'Warum kochen die beste Antwort ist',
    p: ['„Was machen wir denn bei dir?" ist keine rhetorische Frage. Sie will einen Grund, der nicht „Sex" heisst, weil sie sonst zusagen müsste, ohne es aussprechen zu wollen. Kochen ist der einzige Vorschlag, der ausschliesslich bei dir funktioniert, konkret ist und dir zwei Stunden gibt.', 'Wenn du nicht kochen kannst, sag genau das und bestell etwas. „Ich kann ehrlich gesagt nichts ausser Pasta — ich bestell uns was, ist das okay?" Die Entschuldigung ist besser als eine Behauptung, die in deiner Küche auffliegt.']
  }, {
    type: 'note',
    tone: 'consent',
    title: 'Der Ablauf hat an jedem Schritt eine Abbruchstelle.',
    text: 'Nein zur Wohnung heisst nein zur Wohnung. Der Spaziergang ist kein zweiter Versuch für dieselbe Frage, sondern ein eigenes Angebot mit eigenem Nein. Wenn sie zweimal ausweicht, ist der Abend zu Ende — freundlich, ohne dritten Vorschlag. Und wenn du sie fährst, gehört der Rückweg dir: Sie muss zu jedem Zeitpunkt ohne Diskussion nach Hause kommen, sonst hast du ihr die Möglichkeit genommen, den Abend zu beenden.'
  }, {
    type: 'compare',
    h: 'Beenden',
    bad: {
      label: 'Vertröstung',
      text: '„War schön, wir machen das bald wieder!“ — gesagt, obwohl du weisst, dass du dich nicht mehr meldest. Sie wartet dann drei Tage umsonst.'
    },
    good: {
      label: 'Ehrlich',
      text: '„Ich fand den Abend angenehm, aber ich glaube, es passt zwischen uns nicht. Danke, dass du da warst.“ — unangenehm für zehn Sekunden, fair für beide.'
    }
  }, {
    type: 'list',
    h: 'Verlängern nur bei beidseitigem Interesse',
    tone: 'neutral',
    items: ['Sie schaut nicht aufs Handy, stellt eigene Fragen, bestellt nochmal — dann kannst du fragen, ob ihr weiterzieht.', 'Sie wird einsilbig, checkt die Zeit, die Jacke bleibt an — dann beendest du es, bevor sie es tun muss.', 'Im Zweifel früher beenden. Ein zu kurzes gutes Date ist besser als ein zu langes mittelmässiges.']
  }],
  scenario: {
    title: 'Nach fünfzig Minuten',
    brief: ['Das Gespräch läuft solide, aber ohne Funken. Sie ist freundlich, aber stellt kaum eigene Fragen.', 'Die Gläser sind leer. Der Kellner schaut herüber.'],
    signals: [{
      icon: 'circle-alert',
      tone: 'caution',
      text: 'Wenig Gegenfragen von ihrer Seite.'
    }, {
      icon: 'clock',
      tone: 'caution',
      text: 'Natürlicher Ausstiegspunkt erreicht.'
    }, {
      icon: 'circle-dot',
      tone: 'consent',
      text: 'Freundlich, aber ohne erkennbaren Sog.'
    }],
    options: [{
      letter: 'A',
      label: 'Du sagst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich lass es für heute gut sein — hat mich gefreut, dich kennenzulernen.“',
      feedback: 'Souverän. Du beendest, bevor es zäh wird, und lässt ihr die Würde, nicht sitzengelassen worden zu sein. Wenn doch Interesse da war, meldet sie sich.',
      deltas: [{
        id: 'klarheit',
        delta: '+6'
      }, {
        id: 'beobachtung',
        delta: '+4'
      }]
    }, {
      letter: 'B',
      label: 'Du fragst',
      kind: 'initiative',
      outcome: 'good',
      quote: '„Ich hätte noch Zeit für ein zweites — oder wir lassen es hier gut sein. Beides passt mir.“',
      feedback: 'Ehrlich und ohne Druck. Du gibst ihr eine echte Wahl statt sie in eine Verlängerung zu manövrieren. Ihre Antwort ist dann auch eine echte Information.',
      deltas: [{
        id: 'klarheit',
        delta: '+5'
      }, {
        id: 'respekt',
        delta: '+4'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'druck',
      outcome: 'costly',
      quote: 'Du bestellst ungefragt zwei weitere Getränke.',
      feedback: 'Du triffst eine Entscheidung für sie. Jetzt müsste sie aktiv ablehnen, um zu gehen — das ist eine Hürde, die du gerade selbst aufgebaut hast.',
      deltas: [{
        id: 'respekt',
        delta: '−5'
      }, {
        id: 'beobachtung',
        delta: '−3'
      }]
    }, {
      letter: 'D',
      label: 'Du fragst',
      kind: 'initiative',
      outcome: 'costly',
      quote: '„Ich wohne gleich um die Ecke — willst du noch mit hoch?“',
      feedback: 'Die Frage ist erlaubt und klar gestellt. Nur der Zeitpunkt stimmt nicht: Sie stellt kaum eigene Fragen, der Funke fehlt. Die Einladung kommt hier nicht als Angebot an, sondern als das eigentliche Ziel des Abends — und genau so liest sie sie.',
      deltas: [{
        id: 'initiative',
        delta: '+2'
      }, {
        id: 'beobachtung',
        delta: '−5'
      }]
    }, {
      letter: 'E',
      label: 'Du sagst',
      kind: 'rechtfertig',
      outcome: 'costly',
      quote: '„Sorry, war ich zu langweilig? Sonst können wir auch noch woanders hin.“',
      feedback: 'Du bittest um Bewertung und bietest gleichzeitig eine Rettung an. Beides schwächt — und macht sie für den Verlauf des Abends verantwortlich.',
      deltas: [{
        id: 'selbstsicherheit',
        delta: '−5'
      }]
    }]
  },
  interaction: {
    type: 'checklist',
    title: 'Date-Plan',
    prompt: 'Vor dem nächsten Treffen abhaken.',
    items: ['Öffentlicher, gut erreichbarer Ort', 'Ein Getränk, kein Menü', 'Nicht zu laut', 'Für sie ohne Umweg heimzukommen', 'Zehn Minuten Puffer für die Anreise', 'Kein Programm nach dem Date geplant, das dich unter Zeitdruck setzt']
  },
  challenge: {
    title: 'Dein Standardort',
    text: 'Such dir einen Ort, den du für erste Treffen immer nimmst: ruhig, öffentlich, gut erreichbar, kein Menüzwang. Wenn der Ort feststeht, fällt eine Entscheidung weg — und du wirkst sicherer, weil du dich auskennst.'
  },
  reflection: {
    question: 'Wann hast du zuletzt ein Date länger laufen lassen, als beide wollten? Was hat dich davon abgehalten, es zu beenden?',
    placeholder: '…'
  },
  summary: ['Ein Getränk, eine Stunde, öffentlich.', 'Eingeladen heisst angeboten zu zahlen — ohne Erwartung.', 'Investition erzeugt keinen Anspruch.', 'Verlängern nur bei sichtbarem beidseitigem Interesse.', 'Ehrlich beenden schlägt freundliche Vertröstung.', 'Der Ablauf: Drink → Einladung → bei Nein Spaziergang → Einladung → kochen. Jeder Schritt mit eigenem Nein.'],
  quiz: [{
    q: 'Warum ein Getränk statt Abendessen?',
    options: [{
      text: 'Es ist günstiger',
      why: 'Stimmt, ist aber nicht der Hauptgrund.'
    }, {
      text: 'Beide können nach einer Stunde gehen, ohne unhöflich zu sein',
      correct: true,
      why: 'Richtig. Der Ausstieg ist eingebaut.'
    }, {
      text: 'Es wirkt lockerer',
      why: 'Nebeneffekt, nicht der Kern.'
    }]
  }, {
    q: 'Sie will die Rechnung teilen. Was tust du?',
    options: [{
      text: 'Darauf bestehen zu zahlen',
      why: 'Insistieren macht aus der Einladung eine Schuld.'
    }, {
      text: 'Teilen lassen',
      correct: true,
      why: 'Richtig. Angeboten hast du, entschieden hat sie.'
    }, {
      text: 'Sagen, sie könne beim nächsten Mal zahlen',
      why: 'Setzt ein nächstes Mal voraus, das noch nicht vereinbart ist.'
    }]
  }, {
    q: 'Das Date läuft solide, aber ohne Funken. Was ist die beste Option?',
    options: [{
      text: 'Verlängern und schauen, ob es noch kommt',
      why: 'Selten. Meistens wird es nur zäher.'
    }, {
      text: 'Freundlich beenden',
      correct: true,
      why: 'Richtig. Kurz und gut schlägt lang und mittelmässig.'
    }, {
      text: 'Fragen, ob du langweilig warst',
      why: 'Bittet um eine Bewertung und schwächt.'
    }]
  }],
  transfer: 'Nächstes erstes Treffen: ein Getränk, eine Stunde, fester Ort in deiner Nähe — und der nächste Schritt vorher überlegt.'
}, /* ═══════════ 08 ═══════════ */
{
  number: '08',
  slug: 'fehler',
  rail: 'Der grösste Fehler',
  image: 'assets/chapters/08-fehler.png',
  title: 'Der grösste Fehler',
  subtitle: 'Warum das Bedürfnis nach Sex der schnellste Weg ist, ihn nicht zu haben',
  duration: '14 Min',
  lead: 'Der grösste Fehler auf diesem Weg ist banal: unbedingt Sex haben zu wollen. Nichts riecht schneller nach Verzweiflung. Und nichts erzeugt mehr Druck.',
  goals: ['Verstehen, warum ein Bedürfnis nach aussen als Druck ankommt.', 'Ein Angebot machen, ohne ein Ergebnis zu erwarten.', 'Typische Rationalisierungen bei sich selbst erkennen.', 'Eine Absage als Datenpunkt behandeln.'],
  story: 'Ich erinnere mich an ein Date, bei dem ich den Abend im Kopf schon fertig hatte, bevor er angefangen hat. Sie hat es gemerkt. Ich dachte damals, es lag an meinem Hemd. Es lag an meiner Erwartung.',
  sections: [{
    type: 'text',
    h: 'Du hast es nicht nötig',
    p: ['Du kannst Interesse zeigen. Du kannst ein Angebot machen. Danach entscheidet sie — frei, ohne dass du nachschiebst. Wenn sie nicht will, ist das in Ordnung. Eine Absage ist kein persönliches Scheitern und keine Aufgabe, die es zu lösen gilt.', 'Der Unterschied zwischen souverän und verzweifelt liegt nicht im Ergebnis, sondern darin, ob du vorher schon eines erwartet hast.']
  }, {
    type: 'compare',
    h: 'Dieselbe Absicht, zwei Wirkungen',
    good: {
      label: 'Druckfrei',
      text: '„Ich würde dich gern küssen. Sag einfach nein, wenn nicht.“'
    },
    bad: {
      label: 'Druck',
      text: '„Komm schon, jetzt sei nicht so. Ein Kuss ist doch nichts.“'
    }
  }, {
    type: 'list',
    h: 'Rationalisierungen, die du bei dir erkennen solltest',
    tone: 'danger',
    items: ['„Sie meint es nicht so.“ — Doch. Sie meint genau das, was sie sagt.', '„Sie will nur, dass ich hartnäckig bin.“ — Nein. Das ist eine Filmszene, keine Realität.', '„Beim letzten Mal war sie auch erst unsicher.“ — Frühere Situationen sind keine Erlaubnis für diese.', '„Ich habe den ganzen Abend investiert.“ — Investition ist kein Anspruch.', '„Wenn ich jetzt aufhöre, war alles umsonst.“ — Der Abend war, was er war. Er wird durch Druck nicht besser.']
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Das sitzt bei mir inzwischen. Genau das ist das Unbequeme.',
    text: 'Ich arbeite als Verkaufstrainer. Ich erkenne die Muster, weil ich sie beruflich benutze — und ich muss nicht mehr darüber nachdenken. Aber dieselbe Technik, die ein Gespräch offen macht, kann es auch gezielt in eine Richtung schieben. Der Unterschied liegt allein in der Absicht. Und je automatischer das läuft, desto weniger merkst du selbst, auf welcher Seite du gerade stehst.'
  }, {
    type: 'text',
    h: 'Kurzfristiger Gewinn, langfristige Rechnung',
    p: ['Druck funktioniert manchmal. Das ist der unangenehme Teil. Er funktioniert bei Menschen, die schlecht Nein sagen können — und das sind selten die, mit denen du danach noch reden willst. Was du kurzfristig gewinnst, zahlst du in Ruf, in Wiederholungen und darin, wie du am nächsten Morgen über dich selbst denkst.']
  }],
  scenario: {
    title: 'Gutes Date, unklare Signale',
    brief: ['Zweites Getränk, 23:40. Sie lacht viel, sitzt nah, spielt mit dem Glas.', 'Vor zehn Minuten hat sie deinen Arm berührt. Als du näher gerutscht bist, hat sie sich leicht zurückgelehnt.', 'Du willst sie küssen.'],
    signals: [{
      icon: 'check-check',
      tone: 'consent',
      text: 'Sie hält Blickkontakt und stellt Rückfragen.'
    }, {
      icon: 'triangle-alert',
      tone: 'caution',
      text: 'Sie hat sich zurückgelehnt, als du näher kamst.'
    }, {
      icon: 'circle-alert',
      tone: 'caution',
      text: 'Drittes Getränk — sie ist angetrunken, nicht betrunken.'
    }],
    options: [{
      letter: 'A',
      label: 'Du sagst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich sag dir mal was Direktes: ich würde dich gern küssen. Und ein Nein ist völlig okay.“',
      feedback: 'Klar, respektvoll, druckfrei. Sie kann echt entscheiden — und genau das macht die Situation sicher. Wenn sie nein sagt, ist das Thema vom Tisch.',
      deltas: [{
        id: 'klarheit',
        delta: '+7'
      }, {
        id: 'respekt',
        delta: '+5'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      kind: 'grenze',
      outcome: 'bad',
      quote: 'Du rutschst nochmal näher und legst die Hand auf ihr Knie. Reden kann man später.',
      feedback: 'Sie hat sich vorher schon zurückgelehnt. Das war ein Signal, kein Zufall. Körperlich vorgehen, ohne die Ablehnung zu lesen, erzeugt Druck — und übergeht ihre Grenze.',
      deltas: [{
        id: 'respekt',
        delta: '−12'
      }, {
        id: 'beobachtung',
        delta: '−6'
      }]
    }, {
      letter: 'C',
      label: 'Du bleibst',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: 'Du bleibst maximal nett, machst Komplimente und hoffst, dass sie irgendwann anfängt.',
      feedback: 'Funktioniert manchmal. Aber du versteckst dein Interesse hinter Freundlichkeit und schiebst die Entscheidung ihr zu. Das ist kein Respekt, das ist Auslagern.',
      deltas: [{
        id: 'initiative',
        delta: '−5'
      }, {
        id: 'klarheit',
        delta: '−4'
      }]
    }, {
      letter: 'D',
      label: 'Du sagst',
      kind: 'rueckzug',
      outcome: 'good',
      quote: '„Ich hol uns noch was zu trinken — magst du?“ und lässt das Thema für den Moment.',
      feedback: 'Auch richtig. Du hast das Zurücklehnen gelesen und nimmst Tempo raus, ohne die Situation zu beenden. Wenn sie von selbst wieder näher kommt, ist die Frage später sinnvoller als jetzt.',
      deltas: [{
        id: 'beobachtung',
        delta: '+6'
      }, {
        id: 'selbstsicherheit',
        delta: '+3'
      }]
    }]
  },
  interaction: {
    type: 'checklist',
    title: 'Transfer — ausserhalb des Kurses',
    prompt: 'Niemand kontrolliert das. Deshalb funktioniert es nur ehrlich.',
    items: ['Formuliere deine aktuelle Datingabsicht in einem ehrlichen Satz.', 'Führe ein Gespräch, ohne ein bestimmtes Ergebnis zu erwarten.', 'Definiere drei nonverbale Signale, bei denen du sofort Abstand nimmst.', 'Übe, eine Absage anzunehmen — ohne Nachfrage, ohne Erklärung.', 'Erkenne eine Situation, in der du übertrieben freundlich warst, statt dein Interesse zu sagen.']
  },
  challenge: {
    title: 'Ein Gespräch ohne Ziel',
    text: 'Führe diese Woche ein Date oder ein längeres Gespräch, bei dem du dir vorher bewusst vornimmst: Ich will heute nichts erreichen. Achte darauf, wie sich dein eigenes Verhalten dadurch ändert.'
  },
  reflection: {
    question: 'Welche der fünf Rationalisierungen kennst du von dir selbst?',
    placeholder: '…'
  },
  summary: ['Das Bedürfnis ist sichtbarer als du denkst.', 'Angebot machen, Entscheidung überlassen, nicht nachschieben.', 'Rationalisierungen sind das Warnsignal, nicht die Erklärung.', 'Druck funktioniert manchmal — bei Menschen, die schlecht Nein sagen können.'],
  quiz: [{
    q: 'Was ist der eigentliche Fehler?',
    options: [{
      text: 'Zu früh Interesse zeigen',
      why: 'Interesse zeigen ist gut. Es geht um die Erwartung dahinter.'
    }, {
      text: 'Das Ergebnis schon vor dem Abend zu brauchen',
      correct: true,
      why: 'Richtig. Das erzeugt den Druck, den sie spürt.'
    }, {
      text: 'Nicht direkt genug sein',
      why: 'Direktheit ist Teil der Lösung, nicht das Problem.'
    }]
  }, {
    q: '„Ich habe den ganzen Abend investiert“ — was ist das?',
    options: [{
      text: 'Ein legitimer Gedanke',
      why: 'Gedacht wird viel. Als Begründung für Nachdruck ist es eine Rationalisierung.'
    }, {
      text: 'Eine Rationalisierung',
      correct: true,
      why: 'Genau. Investition erzeugt keinen Anspruch.'
    }, {
      text: 'Ein Zeichen von Interesse',
      why: 'Es ist ein Zeichen für eine Erwartungshaltung.'
    }]
  }, {
    q: 'Bei wem funktioniert Druck am ehesten?',
    options: [{
      text: 'Bei unentschlossenen Menschen',
      why: 'Zu harmlos formuliert.'
    }, {
      text: 'Bei Menschen, die schlecht Nein sagen können',
      correct: true,
      why: 'Richtig — und genau deshalb ist es keine Erfolgsgeschichte.'
    }, {
      text: 'Bei niemandem',
      why: 'Wäre bequem, ist aber nicht ehrlich. Er funktioniert manchmal.'
    }]
  }],
  transfer: 'Ein Gespräch führen, bei dem dir das Ergebnis vorher egal ist.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-d.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-e.js
try { (() => {
window.FBChaptersE = [/* ═══════════ 09 ═══════════ */
{
  number: '09',
  slug: 'ablehnung',
  rail: 'Ablehnung',
  image: 'assets/chapters/09-ablehnung.png',
  title: 'Ablehnung, Ghosting, Nichterscheinen',
  subtitle: 'Der häufigste Einzelfall überhaupt',
  duration: '15 Min',
  lead: 'Wenn du viel kennenlernst, wirst du viel abgelehnt. Das ist keine Nebenwirkung, das ist die Hauptmenge. Wie du damit umgehst, entscheidet mehr über deinen Alltag als jede Technik.',
  goals: ['Ablehnung von Bewertung trennen.', 'Auf Ghosting reagieren, ohne bitter zu werden.', 'Bei einem No-Show die eigene Grenze ziehen.', 'Muster erkennen, ohne jede Absage zu pathologisieren.'],
  story: 'Ich habe einmal auf ein Ghosting mit einer langen Nachricht reagiert, in der ich erklärt habe, wie unhöflich das sei. Ich hatte in jedem Punkt recht und war trotzdem der Idiot in dieser Geschichte.',
  sections: [{
    type: 'text',
    h: 'Du hast kein Recht auf eine Begründung',
    p: ['Das ist der Satz, an dem sich entscheidet, wie du mit Absagen umgehst. Sie schuldet dir keine Erklärung, kein Feedback und keine zweite Chance zur Verteidigung. Eine Begründung einzufordern verwandelt eine Absage in einen Konflikt — und macht aus einer neutralen Erinnerung eine schlechte.']
  }, {
    type: 'compare',
    h: 'Die letzte Nachricht',
    good: {
      label: 'Angemessen',
      text: '„Alles klar, danke fürs Sagen. Alles Gute dir.“'
    },
    bad: {
      label: 'Passiv-aggressiv',
      text: '„Kein Problem. Hätte nur nett gefunden, wenn du früher ehrlich gewesen wärst.“ — der Zusatz macht aus einem Abschied eine Rechnung.'
    }
  }, {
    type: 'list',
    h: 'Ghosting realistisch einordnen',
    tone: 'neutral',
    items: ['Meistens hat es nichts mit dir zu tun. Parallele Kontakte, ein Ex, keine Kapazität, keine Lust auf ein Gespräch darüber.', 'Nach einer konkreten Frage ohne Antwort: einmal nach vier bis fünf Tagen nachfassen. Dann Schluss.', 'Nach dem ersten Date ohne Antwort: gar nicht nachfassen. Die Antwort ist die Stille.', 'Nach Intimität zu verschwinden ist eine andere Kategorie. Wenn du das tust, siehe Kapitel 11.']
  }, {
    type: 'note',
    tone: 'caution',
    title: 'No-Show',
    text: 'Sie kommt nicht und meldet sich nicht. Warte zwanzig Minuten, schreib eine kurze Nachricht, dann geh. Wenn sich später eine Erklärung findet, entscheidest du, ob du einen zweiten Versuch machst — einmal. Ein zweiter No-Show ist keine Pechsträhne, sondern eine Information über Verlässlichkeit.'
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Fakten und Interpretation trennen',
    p: 'Fakt: Sie hat seit drei Tagen nicht geantwortet. Interpretation: Sie fand mich langweilig. Der Fakt ist überprüfbar, die Interpretation ist erfunden — und meistens die unfreundlichste von zehn möglichen. Trenne beides, bevor du reagierst.'
  }, {
    type: 'text',
    h: 'Muster prüfen, ohne dich abzuwerten',
    p: ['Wenn zwanzig Gespräche an derselben Stelle abbrechen, ist das ein Muster und kein Pech. Dann schaust du dir diese Stelle an: die Einladung, das erste Treffen, der Moment nach dem Date. Das ist Analyse, nicht Selbstkritik. Der Unterschied: Analyse führt zu einer konkreten Änderung, Selbstkritik führt zu einer schlechten Woche.']
  }],
  scenario: {
    title: 'Sie kommt nicht',
    brief: ['20:00 verabredet, es ist 20:25. Keine Nachricht, keine Antwort auf deine Frage vor zehn Minuten.', 'Du sitzt allein an der Bar.'],
    signals: [{
      icon: 'clock',
      tone: 'danger',
      text: '25 Minuten ohne Nachricht.'
    }, {
      icon: 'message-square',
      tone: 'caution',
      text: 'Deine Nachricht ist zugestellt, nicht gelesen.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich geh dann mal — falls was dazwischengekommen ist, kein Problem.“ Dann gehst du.',
      feedback: 'Genau richtig. Kurz, ohne Vorwurf, ohne Drama. Du hältst dir die Tür offen, ohne dich weiter hinhalten zu lassen.',
      deltas: [{
        id: 'resilienz',
        delta: '+7'
      }, {
        id: 'klarheit',
        delta: '+4'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      kind: 'rueckzug',
      outcome: 'good',
      quote: 'Du gehst wortlos und blockierst.',
      feedback: 'Verständlich, aber etwas hart. Zwischen Wartenlassen und Blockieren gibt es die kurze Nachricht. Für deine Resilienz ist A die bessere Übung.',
      deltas: [{
        id: 'resilienz',
        delta: '+3'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'druck',
      outcome: 'costly',
      quote: 'Du wartest noch eine Stunde und schreibst dreimal.',
      feedback: 'Du bestrafst dich für ihr Verhalten. Nach einer Nachricht ist die Information vollständig — alles danach ist Warten auf eine Bestätigung, die nicht kommt.',
      deltas: [{
        id: 'resilienz',
        delta: '−6'
      }, {
        id: 'selbstsicherheit',
        delta: '−4'
      }]
    }, {
      letter: 'D',
      label: 'Du schreibst',
      kind: 'grenze',
      outcome: 'bad',
      quote: '„Danke für gar nichts. Viel Erfolg mit deinem Verhalten.“',
      feedback: 'Sie hat sich schlecht verhalten. Diese Nachricht ändert daran nichts und verschiebt nur, wer sich am Ende schlechter benommen hat.',
      deltas: [{
        id: 'resilienz',
        delta: '−9'
      }, {
        id: 'respekt',
        delta: '−5'
      }]
    }]
  },
  interaction: {
    type: 'facts',
    title: 'Fakt oder Interpretation?',
    prompt: 'Trenne, was du weisst, von dem, was du dir erzählst.',
    items: [{
      text: 'Sie hat seit drei Tagen nicht geantwortet.',
      answer: 'fakt'
    }, {
      text: 'Sie fand mich langweilig.',
      answer: 'interpretation'
    }, {
      text: 'Sie war gestern Abend online.',
      answer: 'fakt'
    }, {
      text: 'Sie hat jemand Besseren gefunden.',
      answer: 'interpretation'
    }, {
      text: 'Sie hat auf meine Einladung nicht reagiert.',
      answer: 'fakt'
    }, {
      text: 'Ich habe mich beim Date blamiert.',
      answer: 'interpretation'
    }]
  },
  challenge: {
    title: 'Eine Absage sauber annehmen',
    text: 'Beim nächsten Nein: eine Zeile, freundlich, ohne Zusatz. Kein „schade“, kein „hätte nur“, keine Frage nach dem Grund. Dann Handy weglegen.'
  },
  reflection: {
    question: 'Was erzählst du dir normalerweise, wenn jemand nicht antwortet — und wie viel davon weisst du wirklich?',
    placeholder: '…'
  },
  summary: ['Du hast kein Recht auf eine Begründung.', 'Einmal nachfassen nach einer offenen Frage, nie nach einem Date.', 'Beim No-Show: eine Nachricht, dann gehen.', 'Fakten und Interpretationen trennen, bevor du reagierst.', 'Muster analysieren heisst nicht, sich abzuwerten.'],
  quiz: [{
    q: 'Sie sagt ab. Was ist die beste letzte Nachricht?',
    options: [{
      text: '„Alles klar, danke fürs Sagen.“',
      correct: true,
      why: 'Richtig. Kurz, freundlich, ohne Zusatz.'
    }, {
      text: '„Kein Problem, hätte nur nett gefunden …“',
      why: 'Der Zusatz macht aus einem Abschied eine Rechnung.'
    }, {
      text: 'Nach dem Grund fragen',
      why: 'Sie schuldet dir keine Begründung.'
    }]
  }, {
    q: 'Nach dem ersten Date meldet sie sich nicht. Was tust du?',
    options: [{
      text: 'Einmal nachfragen',
      why: 'Nach einem Date ist die Stille die Antwort.'
    }, {
      text: 'Nichts',
      correct: true,
      why: 'Richtig. Hier ist Nachfassen nicht mehr angebracht.'
    }, {
      text: 'Um ehrliches Feedback bitten',
      why: 'Klingt reif, ist aber eine Aufgabe, die du ihr gibst.'
    }]
  }, {
    q: '„Sie fand mich langweilig“ ist …',
    options: [{
      text: 'Ein Fakt',
      why: 'Nichts daran ist überprüfbar.'
    }, {
      text: 'Eine Interpretation',
      correct: true,
      why: 'Genau — und meistens die unfreundlichste von zehn möglichen.'
    }, {
      text: 'Eine realistische Einschätzung',
      why: 'Nur wenn sie es gesagt hat. Sonst erfunden.'
    }]
  }],
  transfer: 'Nächste Absage: eine Zeile, kein Zusatz, Handy weg.'
}, /* ═══════════ 10 ═══════════ */
{
  number: '10',
  slug: 'naehe',
  rail: 'Nähe',
  image: 'assets/chapters/10-naehe.png',
  title: 'Nähe',
  subtitle: 'Annäherung, Übergang und Alkohol',
  duration: '24 Min',
  lead: 'Das heikelste Kapitel des Kurses. Hier entscheidet sich, ob alles davor Kommunikationstraining war oder eine Anleitung zum Übergriff. Lies es zweimal.',
  goals: ['Nähe schrittweise und beidseitig entstehen lassen.', 'Berührung nie als Test gegen Widerstand einsetzen.', 'Verbale Check-ins natürlich einbauen.', 'Bei Alkohol die harte Grenze einhalten.', 'Vor sexueller Nähe über Schutz sprechen.'],
  story: 'Der Moment, der mir am längsten nachgegangen ist, war kein Nein. Es war ein Ja, bei dem ich hinterher nicht sicher war, ob sie es wirklich gemeint hat. Seitdem frage ich lieber einmal zu viel.',
  sections: [{
    type: 'text',
    h: 'Nähe entsteht wechselseitig oder gar nicht',
    p: ['Die Frage ist nie „Wie komme ich näher?“, sondern „Kommt sie auch?“. Wenn du einen Schritt machst und sie macht keinen, ist der nächste Schritt nicht deiner. Distanz verringert sich abwechselnd — sonst ist es kein Annähern, sondern ein Vorrücken.']
  }, {
    type: 'note',
    tone: 'danger',
    title: 'Berührung ist kein Test',
    text: 'Eine Hand auflegen, um zu sehen, ob sie sie wegnimmt, ist keine Kommunikation, sondern ein Versuch am lebenden Objekt. Wer so vorgeht, erfährt nur, wie gut jemand darin ist, sich zu wehren — nicht, ob er willkommen ist.'
  }, {
    type: 'phrases',
    h: 'Check-ins, die nichts kaputtmachen',
    note: 'Sie klingen im Kopf peinlicher, als sie im Moment sind. In der Situation wirken sie ruhig und sicher.',
    items: ['„Ist das gut so für dich?“', '„Ich würde dich gern küssen.“', '„Sag, wenn du etwas anders willst.“', '„Wir können auch einfach hier sitzen bleiben.“', '„Wie geht es dir gerade damit?“']
  }, {
    type: 'text',
    h: 'Zögern ist keine Aufgabe',
    p: ['Wenn sie zögert, ist das die Antwort. Nicht ein Hindernis, das mit mehr Charme, mehr Geduld oder einem besseren Moment überwunden wird. Zögern heisst: nicht jetzt. Und „nicht jetzt“ ist bis auf Weiteres ein Nein.', 'Der richtige nächste Schritt ist immer derselbe: Abstand geben und die Situation entlasten, damit sie sich nicht erklären muss.']
  }, {
    type: 'split',
    h: 'Der Übergang an einen privaten Ort',
    good: {
      title: 'So geht es',
      items: ['Offen einladen: „Willst du noch mit hoch?“', 'Ein Nein bedeutet, du bringst sie zum Taxi oder zur Bahn', 'Klarstellen, dass Mitkommen nichts festlegt', 'Sie soll wissen, wo sie ist und wie sie wegkommt']
    },
    bad: {
      title: 'So nicht',
      items: ['„Ich zeig dir nur schnell …“ als Vorwand', 'Letzte Bahn verpassen lassen und dann einladen', 'Bei Alkohol weitermachen, weil sie zugestimmt hat', 'Mitkommen als Zusage für Sex behandeln']
    }
  }, {
    type: 'note',
    tone: 'danger',
    title: 'Alkohol — die harte Grenze',
    text: 'Bei erkennbarer Beeinträchtigung findet kein sexueller Übergang statt. Nicht vorsichtiger, nicht langsamer — gar nicht. Auch wenn sie zustimmt. Auch wenn sie es initiiert. Wenn du dich fragen musst, ob sie klar entscheiden kann, ist die Frage schon die Antwort. Bring sie sicher nach Hause oder lass sie schlafen. Wenn es morgen noch eine gute Idee ist, ist es morgen noch da.'
  }, {
    type: 'list',
    h: 'Schutz ist Teil des Gesprächs, nicht der Störung',
    tone: 'consent',
    items: ['Kondom ist Standard, nicht Verhandlungssache. „Ich hab was dabei“ reicht als Satz.', 'Wer nach Tests fragt, ist nicht misstrauisch, sondern erwachsen.', 'Wenn kein Schutz da ist, findet kein Geschlechtsverkehr statt. Auch das ist eine Entscheidung, die vorher getroffen wird.', 'Über Wünsche und Grenzen reden ist kein Stimmungskiller — Unsicherheit ist einer.']
  }, {
    type: 'text',
    h: 'Stoppen ohne Diskussion',
    p: ['Wenn sie mittendrin aufhören will, hört ihr auf. Ohne Frage nach dem Warum, ohne „ist alles ok?“ in einem Ton, der eine Erklärung verlangt. Ein „alles gut, komm her“ und eine Decke sind die richtige Reaktion. Alles andere lernt sie als Erfahrung, dass Stoppen anstrengend ist — und das trägt sie zur nächsten Person weiter.']
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Nähe ist kein Abschluss',
    text: 'Ein Date endet nicht mit Sex, sondern mit dem Ende des Abends. Wer Nähe als geschuldetes Ergebnis eines gelungenen Abends denkt, hat den ganzen Kurs falsch verstanden — und wird es früher oder später auch aussprechen.'
  }],
  scenario: {
    title: 'Sie hat deutlich zu viel getrunken',
    brief: ['Der Abend war gut, ihr habt euch geküsst. Jetzt steht ihr vor deiner Tür.', 'Sie ist merklich betrunken, lacht viel, hat leichte Schwierigkeiten mit dem Schlüssel im Türschloss — und sagt, sie wolle mit hoch.'],
    signals: [{
      icon: 'triangle-alert',
      tone: 'danger',
      text: 'Erkennbar eingeschränkte Einwilligungsfähigkeit.'
    }, {
      icon: 'circle-dot',
      tone: 'caution',
      text: 'Sie initiiert selbst — das ändert nichts an der Grenze.'
    }, {
      icon: 'clock',
      tone: 'caution',
      text: 'Letzte Bahn ist weg.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich bring dich zum Taxi — und wenn du magst, treffen wir uns diese Woche nochmal.“',
      feedback: 'Richtig, und die sauberste Variante. Du nimmst ihr nichts weg: Die Einladung bleibt bestehen, nur nicht heute Nacht. Wenn es morgen noch eine gute Idee ist, ist sie morgen noch da.',
      deltas: [{
        id: 'respekt',
        delta: '+10'
      }, {
        id: 'verlaesslichkeit',
        delta: '+6'
      }]
    }, {
      letter: 'B',
      label: 'Du sagst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Komm hoch, du kannst auf dem Sofa schlafen. Aber wir machen heute nichts, du hast zu viel getrunken.“',
      feedback: 'Auch richtig, wenn du es genau so sagst und dich daran hältst. Wichtig ist, dass die Grenze vorher ausgesprochen wird — nicht erst, wenn ihr oben seid.',
      deltas: [{
        id: 'respekt',
        delta: '+9'
      }, {
        id: 'klarheit',
        delta: '+6'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'grenze',
      outcome: 'bad',
      quote: 'Ihr geht hoch. Du schaust, wie sich das entwickelt.',
      feedback: 'Nein. „Schauen, wie es sich entwickelt“ heisst hier: Du triffst die Entscheidung nicht, sondern lässt die Situation sie treffen — bei einer Person, die gerade nicht klar entscheiden kann. Das ist genau die Konstellation, um die es geht.',
      deltas: [{
        id: 'respekt',
        delta: '−14'
      }, {
        id: 'beobachtung',
        delta: '−6'
      }]
    }, {
      letter: 'D',
      label: 'Du sagst',
      kind: 'rechtfertig',
      outcome: 'costly',
      quote: '„Bist du sicher? Du hast ganz schön was getrunken.“ — und wenn sie ja sagt, geht ihr hoch.',
      feedback: 'Du hast die richtige Beobachtung gemacht und dann die Verantwortung dafür an sie zurückgegeben. Genau in dieser Situation kann ihr Ja die Frage nicht beantworten. Die Einschätzung bleibt bei dir.',
      deltas: [{
        id: 'respekt',
        delta: '−7'
      }, {
        id: 'beobachtung',
        delta: '−3'
      }]
    }]
  },
  interaction: {
    type: 'traffic',
    title: 'Übergang: geht das?',
    prompt: 'Grün heisst weiter, Gelb heisst nachfragen, Rot heisst stoppen.',
    items: [{
      text: 'Sie zieht dich zu sich und sagt „komm her“.',
      answer: 'gruen',
      why: 'Eigene Initiative, klare Worte.'
    }, {
      text: 'Sie lässt es geschehen, macht aber nichts von sich aus.',
      answer: 'gelb',
      why: 'Passivität ist kein Ja. Nachfragen oder Tempo rausnehmen.'
    }, {
      text: 'Sie war sehr betrunken, sagt aber deutlich ja.',
      answer: 'rot',
      why: 'Einwilligungsfähigkeit geht vor Zustimmung. Kein Übergang.'
    }, {
      text: 'Sie ist mitgekommen, sagt zum Thema aber nichts.',
      answer: 'gelb',
      why: 'Mitkommen ist keine Zusage. Kläre es dort, nicht im Kopf.'
    }, {
      text: 'Sie sagt „warte kurz“.',
      answer: 'rot',
      why: 'Sofort anhalten. Ob es weitergeht, bestimmt sie.'
    }, {
      text: 'Kein Kondom da, sie sagt, sei egal.',
      answer: 'rot',
      why: 'Kein Schutz, kein Geschlechtsverkehr. Diese Entscheidung triffst du vorher.'
    }]
  },
  challenge: {
    title: 'Einen Satz üben',
    text: 'Sag den Satz „Ich würde dich gern küssen“ dreimal laut vor dem Spiegel, bis er sich normal anfühlt. Das klingt albern und ist trotzdem der Grund, warum die meisten Männer stattdessen einfach vorrücken: Sie haben den Satz nie gesagt.'
  },
  reflection: {
    question: 'Was hindert dich daran, in dieser Situation zu fragen — ehrlich?',
    placeholder: 'Ich habe Angst, dass …'
  },
  summary: ['Nähe entsteht wechselseitig. Wenn sie keinen Schritt macht, machst du auch keinen.', 'Berührung ist nie ein Test.', 'Zögern ist eine Antwort, keine Aufgabe.', 'Bei Alkohol: kein Übergang. Auch bei Zustimmung.', 'Schutz wird vorher geklärt, nicht im Moment verhandelt.', 'Stoppen ohne Diskussion, ohne Frage nach dem Warum.'],
  quiz: [{
    q: 'Sie ist stark betrunken und initiiert selbst. Was gilt?',
    options: [{
      text: 'Sie hat zugestimmt, also ist es in Ordnung',
      why: 'Zustimmung setzt Einwilligungsfähigkeit voraus. Die fehlt hier.'
    }, {
      text: 'Kein sexueller Übergang, unabhängig von ihrer Zustimmung',
      correct: true,
      why: 'Richtig. Die Einschätzung bleibt bei dir und ist nicht delegierbar.'
    }, {
      text: 'Nachfragen und dann entscheiden',
      why: 'Ihre Antwort kann die Frage in diesem Zustand nicht beantworten.'
    }]
  }, {
    q: 'Was bedeutet es, wenn sie zögert?',
    options: [{
      text: 'Sie ist unsicher, du kannst sie beruhigen',
      why: 'Beruhigen wird schnell zu Überreden.'
    }, {
      text: 'Nicht jetzt — also nein',
      correct: true,
      why: 'Genau. Und der nächste Schritt ist Abstand, nicht Geduld.'
    }, {
      text: 'Sie will, dass du die Führung übernimmst',
      why: 'Das ist eine Filmszene, keine verlässliche Lesart.'
    }]
  }, {
    q: 'Sie ist mit zu dir gekommen. Was heisst das?',
    options: [{
      text: 'Sie will Sex',
      why: 'Eine Einladung in die Wohnung ist keine Zusage.'
    }, {
      text: 'Sie will nicht allein sein',
      why: 'Auch nur eine Vermutung.'
    }, {
      text: 'Nichts Bestimmtes — das klärt sich vor Ort im Gespräch',
      correct: true,
      why: 'Richtig. Mitkommen legt nichts fest.'
    }]
  }, {
    q: 'Sie will mittendrin aufhören. Deine Reaktion?',
    options: [{
      text: 'Fragen, was los ist',
      why: 'Verlangt eine Erklärung, die sie nicht schuldet.'
    }, {
      text: 'Aufhören, keine Frage, Situation entlasten',
      correct: true,
      why: 'Richtig. Stoppen darf nicht anstrengend sein.'
    }, {
      text: 'Kurz Pause machen und dann weiterschauen',
      why: 'Das behandelt den Stopp als Unterbrechung statt als Ende.'
    }]
  }],
  transfer: 'Vor dem nächsten körperlichen Schritt: den Satz sagen, nicht den Schritt machen.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-e.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/chapters-f.js
try { (() => {
window.FBChaptersF = [/* ═══════════ 11 ═══════════ */
{
  number: '11',
  slug: 'danach',
  rail: 'Danach',
  title: 'Danach',
  subtitle: 'Erwartungen, Wiederholung und sauber beenden',
  duration: '19 Min',
  special: 'chatsim',
  lead: 'Der Teil, den fast niemand vorbereitet. Der Sex ist vorbei, und jetzt entscheidet sich, ob du ein anständiger Mensch warst oder nur bis zu dem Punkt.',
  goals: ['Nach dem Treffen ehrlich kommunizieren, ohne falsche Versprechen.', 'Unterschiedliche Erwartungen früh benennen.', 'Auf eine direkte Frage nach anderen Kontakten ehrlich antworten.', 'Etwas beenden, ohne zu verschwinden.'],
  story: 'Ich habe zweimal jemanden warmgehalten, weil ich mich nicht entscheiden wollte. Beide Male hat es länger gedauert und mehr kaputtgemacht, als wenn ich am zweiten Tag ehrlich gewesen wäre.',
  sections: [{
    type: 'text',
    h: 'Der Abgang ist wichtiger als der Morgen danach',
    p: ['Für viele ist Übernachten gar nicht das Ziel. Genau das ist der unangenehmste Moment im ganzen Ablauf: Du willst nach Hause, sie hat mit Bleiben gerechnet.', 'Die Lösung ist banal und trotzdem selten: Sag es vorher. „Ich bleibe nicht über Nacht“ ist eine Information, keine Kränkung — solange sie vor dem Sex kommt und nicht danach. Danach ist derselbe Satz eine Zurückweisung im ungünstigsten Moment.']
  }, {
    type: 'compare',
    h: 'Dieselbe Absicht, zwei Zeitpunkte',
    good: {
      label: 'Vorher',
      text: '„Ich sag dir gleich: Ich schlafe meistens lieber zu Hause. Das hat nichts mit dir zu tun.“'
    },
    bad: {
      label: 'Danach',
      text: '„Ich fahr dann mal.“ — dieselbe Handlung, aber jetzt liest sie sich als Bewertung dessen, was gerade war.'
    }
  }, {
    type: 'principle',
    label: 'Psychologisches Prinzip',
    h: 'Die Macht der Erwartungen',
    p: 'Erwartungen dürfen Orientierung schaffen, aber nicht durch falsche Versprechen entstehen. Die Regel ist einfach: Dein Verhalten muss zu dem passen, was du angekündigt hast. Wer Unklarheit absichtlich stehen lässt, damit jemand dranbleibt, benutzt sie als Bindungsmittel — und das ist die Technik, die dieser Kurs kritisiert.'
  }, {
    type: 'list',
    h: 'Die Nachricht danach',
    tone: 'neutral',
    items: ['Kurz, ehrlich, ohne Versprechen, das du nicht halten willst.', '„War schön mit dir“ ist gut. „Wir machen das bald wieder“ nur, wenn du es meinst.', 'Wenn du kein Wiedersehen willst, sag es innerhalb von zwei Tagen — nicht nach zwei Wochen Funkstille.', 'Kein Ghosting nach Intimität. Das ist die eine Regel, an der man Charakter erkennt.']
  }, {
    type: 'phrases',
    h: 'Sätze für unangenehme Momente',
    note: 'Alle vier sind unbequem in dem Moment und einfacher als jede Alternative danach.',
    items: ['„Ich hab es gern gemacht, aber ich suche nichts Festes. Ich wollte, dass du das weisst.“', '„Du fragst, ob da noch jemand ist — ja, ich treffe im Moment auch andere.“', '„Ich merke, dass wir Unterschiedliches suchen. Ich glaube, es ist fairer, wenn wir es lassen.“', '„Ich hab mich gerade dabei erwischt, dass ich mehr will als abgemacht. Wollte ich sagen, bevor es komisch wird.“']
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Warmhalten ist die feige Variante',
    text: 'Jemanden nicht abzusagen, weil man sich die Option offenhalten will, ist keine Freundlichkeit. Es ist eine Entscheidung zulasten von jemandem, der die Lage nicht kennt. Wenn du merkst, dass du eine Antwort seit Tagen vor dir herschiebst, ist die Antwort meistens schon klar.'
  }, {
    type: 'text',
    h: 'Wenn du selbst Gefühle entwickelst',
    p: ['Der Fall kommt garantiert, und die meisten sind darauf schlechter vorbereitet als auf den umgekehrten. Die Regel ist dieselbe wie in die andere Richtung: früh sagen, einmal, ohne Druck. Wenn sie etwas anderes will, gilt für dich, was du von ihr erwartet hättest — es annehmen und nicht verhandeln.']
  }, {
    type: 'list',
    h: 'Wiederkehrende Kontakte',
    tone: 'consent',
    items: ['Auch bei einem lockeren Arrangement gilt Consent bei jedem einzelnen Mal neu.', 'Exklusivität ist nie stillschweigend vereinbart. Wenn du es annimmst, sprich es aus.', 'Tests gehören dazu, wenn du mehrere Kontakte hast. Ohne Ausrede.', 'Wenn es endet: einmal sagen, dass es endet. Nicht auslaufen lassen.']
  }],
  scenario: {
    title: 'Sie fragt, ob da noch jemand ist',
    brief: ['Ihr habt euch dreimal getroffen, zweimal miteinander geschlafen. Nichts war je definiert.', 'Sie schreibt: „Kurze Frage, weil ichs wissen will: Triffst du gerade noch andere?“ Du triffst noch zwei andere.'],
    signals: [{
      icon: 'message-square',
      tone: 'consent',
      text: 'Direkte Frage, ruhig formuliert.'
    }, {
      icon: 'scale',
      tone: 'caution',
      text: 'Nichts war definiert — sie fragt, weil sie es klären will.'
    }],
    options: [{
      letter: 'A',
      label: 'Du antwortest',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ja, ich treffe im Moment auch andere. Ich hab nichts anderes gesagt, aber du sollst es von mir wissen und nicht raten müssen.“',
      feedback: 'Die einzige Antwort, die du in einem Monat noch vertreten kannst. Unangenehm für zehn Sekunden. Alles andere kostet später mehr — dich und sie.',
      deltas: [{
        id: 'klarheit',
        delta: '+10'
      }, {
        id: 'verlaesslichkeit',
        delta: '+8'
      }]
    }, {
      letter: 'B',
      label: 'Du antwortest',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: '„Nichts Ernstes. Warum fragst du?“',
      feedback: 'Zwei Ausweichmanöver in einem Satz: eine Relativierung und eine Gegenfrage, die sie in die Rechtfertigung schiebt. Sie hat eine klare Frage gestellt und verdient eine klare Antwort.',
      deltas: [{
        id: 'klarheit',
        delta: '−7'
      }, {
        id: 'respekt',
        delta: '−3'
      }]
    }, {
      letter: 'C',
      label: 'Du antwortest',
      kind: 'grenze',
      outcome: 'bad',
      quote: '„Nein, nur dich.“',
      feedback: 'Das ist die Lüge, die am teuersten wird. Sie richtet ihr Verhalten danach aus — auch beim Thema Schutz. Und sie wird es irgendwann erfahren.',
      deltas: [{
        id: 'verlaesslichkeit',
        delta: '−12'
      }, {
        id: 'respekt',
        delta: '−8'
      }]
    }, {
      letter: 'D',
      label: 'Du antwortest',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ja. Und wenn du das nicht willst, verstehe ich das — dann sollten wir kurz reden, was das für uns heisst.“',
      feedback: 'Ehrlich plus Verantwortung für die Konsequenz. Du überlässt ihr die Entscheidung, statt sie mit der Information allein zu lassen.',
      deltas: [{
        id: 'klarheit',
        delta: '+9'
      }, {
        id: 'respekt',
        delta: '+6'
      }]
    }]
  },
  interaction: {
    type: 'improve',
    title: 'Beenden ohne Verschwinden',
    prompt: 'Zwei Wege, dasselbe zu sagen.',
    rounds: [{
      bad: 'Gar nicht mehr antworten.',
      good: '„Ich hab es gern gemacht, glaube aber nicht, dass es weitergehen sollte. Wollte es dir sagen statt einfach still zu werden.“',
      why: 'Nach Intimität zu verschwinden ist die eine Sache, die man nicht mehr geraderücken kann.'
    }, {
      bad: '„Melde mich, wenn ich mehr Zeit hab.“',
      good: '„Ich suche gerade nichts, was regelmässig wird. Das wird sich auch nicht ändern.“',
      why: 'Vertröstung hält jemanden in einer Warteschleife, die du nie auflösen wirst.'
    }, {
      bad: '„Du warst super, es liegt an mir.“',
      good: '„Es passt für mich nicht — das hat nichts damit zu tun, dass mit dir etwas nicht stimmt.“',
      why: 'Die Floskel ist erkennbar. Der zweite Satz sagt dasselbe, ohne zu behandeln, als wäre sie dumm.'
    }]
  },
  challenge: {
    title: 'Einen Satz vorbereiten',
    text: 'Formuliere jetzt den Satz, den du sagst, wenn du kein Wiedersehen willst. Ein Satz, ehrlich, ohne Floskel. Wer ihn vorbereitet hat, verschwindet nicht — weil Verschwinden meistens nur Sprachlosigkeit ist.'
  },
  reflection: {
    question: 'Hast du schon einmal jemanden warmgehalten? Was hätte dich davon abgehalten, es früher zu klären?',
    placeholder: '…'
  },
  summary: ['Sag vorher, wenn du nicht bleibst. Danach ist derselbe Satz eine Zurückweisung.', 'Dein Verhalten muss zu dem passen, was du angekündigt hast.', 'Auf die direkte Frage nach anderen Kontakten: ehrlich, immer.', 'Kein Ghosting nach Intimität.', 'Warmhalten ist eine Entscheidung zulasten von jemandem, der die Lage nicht kennt.'],
  quiz: [{
    q: 'Wann sagst du, dass du nicht über Nacht bleibst?',
    options: [{
      text: 'Vorher',
      correct: true,
      why: 'Richtig. Dann ist es eine Information statt einer Bewertung.'
    }, {
      text: 'Danach, beim Anziehen',
      why: 'Derselbe Satz, aber im ungünstigsten Moment — er liest sich als Zurückweisung.'
    }, {
      text: 'Gar nicht, einfach gehen',
      why: 'Die schlechteste Variante von allen.'
    }]
  }, {
    q: 'Sie fragt direkt, ob du andere triffst. Du triffst andere.',
    options: [{
      text: 'Verneinen, um nichts kaputtzumachen',
      why: 'Die teuerste Lüge — sie richtet auch ihr Schutzverhalten danach aus.'
    }, {
      text: 'Ehrlich antworten',
      correct: true,
      why: 'Richtig. Auf eine direkte Frage gehört eine direkte Antwort.'
    }, {
      text: 'Relativieren und zurückfragen',
      why: 'Schiebt sie in die Rechtfertigung.'
    }]
  }, {
    q: 'Du willst kein Wiedersehen. Was tust du?',
    options: [{
      text: 'Nicht mehr antworten',
      why: 'Ghosting nach Intimität. Nicht mehr korrigierbar.'
    }, {
      text: 'Innerhalb von zwei Tagen einmal ehrlich sagen',
      correct: true,
      why: 'Richtig. Kurz unangenehm, danach für beide erledigt.'
    }, {
      text: '„Melde mich, wenn ich Zeit habe“',
      why: 'Vertröstung — eine Warteschleife ohne Auflösung.'
    }]
  }, {
    q: 'Bei einem lockeren, wiederkehrenden Arrangement gilt Consent …',
    options: [{
      text: 'Als grundsätzlich geklärt',
      why: 'Nein. Frühere Zustimmung gilt nicht weiter.'
    }, {
      text: 'Bei jedem Mal neu',
      correct: true,
      why: 'Richtig — auch in einer Beziehung oder einem festen Arrangement.'
    }, {
      text: 'Nur beim ersten Mal',
      why: 'Genau die Annahme, vor der Kapitel 02 warnt.'
    }]
  }],
  transfer: 'Den Abschiedssatz formulieren, bevor du ihn brauchst.'
}, /* ═══════════ 12 ═══════════ */
{
  number: '12',
  slug: 'uebrig',
  rail: 'Was übrig bleibt',
  title: 'Was übrig bleibt',
  subtitle: 'Der Teil, den ich am längsten nicht aufschreiben wollte',
  duration: '16 Min',
  lead: 'Irgendwann funktioniert das Werkzeug besser als du selbst. Du weisst nach zwei Sätzen, wie ein Abend endet. Und du merkst, dass dich das nicht mehr freut.',
  goals: ['Unterscheiden, welche Fähigkeiten du wirklich gelernt hast.', 'Erfolg und Verbindung auseinanderhalten.', 'Das eigene Muster benennen.', 'Entscheiden, welche Version deines Verhaltens bleiben soll.'],
  story: 'Der Punkt, an dem es gekippt ist, war kein Drama. Ich sass an einem guten Abend mit einer interessanten Frau und habe mich dabei erwischt, wie ich innerlich abgehakt habe, an welcher Stelle wir waren. Nicht zugehört — abgehakt.',
  sections: [{
    type: 'text',
    h: 'Was der Kurs dir tatsächlich beigebracht hat',
    p: ['Nicht, Frauen zu bekommen. Sondern: klar zu sagen, was du willst. Ein Nein anzunehmen. Ein Gespräch zu führen, ohne es zu steuern. Dich zu pflegen. Initiative zu zeigen, ohne eine Reaktion zu erzwingen.', 'Das sind Fähigkeiten, die in jedem Teil deines Lebens funktionieren. Dass sie hier am Dating gelernt wurden, ist fast ein Zufall.']
  }, {
    type: 'split',
    h: 'Erfolg und Verbindung',
    good: {
      title: 'Erfolg',
      items: ['Messbar', 'Wiederholbar', 'Gibt kurzfristig Bestätigung', 'Gewöhnt sich schnell ab', 'Funktioniert auch ohne Interesse an der Person']
    },
    bad: {
      title: 'Verbindung',
      items: ['Nicht messbar', 'Nicht planbar', 'Braucht Zeit ohne Ergebnis', 'Verträgt keine Technik', 'Setzt voraus, dass du gesehen wirst']
    }
  }, {
    type: 'text',
    h: 'Die Gewöhnung',
    p: ['Aufmerksamkeit wirkt wie alles, woran man sich gewöhnt: Die erste Bestätigung ist gross, die zwanzigste ist normal, die fünfzigste fehlt nur noch, wenn sie ausbleibt. Das ist der Punkt, an dem manche anfangen, mehr zu brauchen — nicht weil sie mehr wollen, sondern weil dieselbe Menge nicht mehr reicht.']
  }, {
    type: 'note',
    tone: 'moral',
    title: 'Die Menschen, die dabei verletzt wurden',
    text: 'Es gibt sie. Bei mir mindestens vier, von denen ich weiss. Nicht durch Übergriffe — durch Unklarheit, durch Warmhalten, durch Sätze, die ich stehen liess, weil sie nützlich waren. Man kann das nicht rückwirkend reparieren. Man kann nur aufhören, es weiter zu tun.'
  }, {
    type: 'text',
    h: 'Einsamkeit trotz vieler Kontakte',
    p: ['Das ist die Rechnung, die am spätesten kommt. Viele Kontakte fühlen sich lange wie ein volles Leben an. Bis zu einem Abend, an dem du merkst, dass es niemanden gibt, den du anrufen würdest, wenn etwas Ernstes passiert. Reichweite ersetzt keine Tiefe, und man merkt es erst, wenn man Tiefe bräuchte.']
  }, {
    type: 'note',
    tone: 'consent',
    title: 'Wann Unterstützung sinnvoll ist',
    text: 'Wenn Ablehnung dich über Wochen aus der Bahn wirft, wenn du ohne Bestätigung nicht klarkommst, wenn du Muster wiederholst, die dir selbst schaden — dann ist das kein Dating-Thema mehr. Eine Therapeutin oder ein Berater ist an dieser Stelle nützlicher als jedes Kapitel hier.'
  }, {
    type: 'text',
    h: 'Die Frage, um die es geht',
    p: ['Was möchtest du mit diesen Fähigkeiten tun, wenn du niemandem mehr etwas beweisen musst?', 'Das ist keine rhetorische Frage. Die Antwort entscheidet, ob das hier ein Werkzeug war oder eine Persönlichkeit.']
  }],
  scenario: {
    title: 'Der Abend, an dem du es merkst',
    brief: ['Drittes Date mit jemandem, den du wirklich interessant findest. Es läuft gut.', 'Und du erwischst dich dabei, dass du innerlich den Ablauf abhakst statt zuzuhören.'],
    signals: [{
      icon: 'brain',
      tone: 'caution',
      text: 'Du bist im Ablauf, nicht im Gespräch.'
    }, {
      icon: 'circle-dot',
      tone: 'consent',
      text: 'Sie ist interessant. Das ist nicht das Problem.'
    }],
    options: [{
      letter: 'A',
      label: 'Du machst',
      kind: 'klar',
      outcome: 'good',
      quote: 'Du legst das Muster bewusst weg und stellst eine Frage, deren Antwort du nicht schon kennst.',
      feedback: 'Der einzige Weg zurück. Das Werkzeug abzuschalten ist eine Entscheidung, die man einzeln trifft — jedes Mal neu.',
      deltas: [{
        id: 'selbstreflexion',
        delta: '+10'
      }, {
        id: 'beobachtung',
        delta: '+5'
      }]
    }, {
      letter: 'B',
      label: 'Du sagst',
      kind: 'klar',
      outcome: 'good',
      quote: '„Ich muss dir was sagen: Ich hab mich gerade dabei erwischt, wie ich im Kopf abgehakt habe statt zuzuhören. Das war unfair. Nochmal von vorn?“',
      feedback: 'Riskant und ehrlich. Es ist die Variante, die am meisten kostet und am meisten verändert — an ihr und an dir.',
      deltas: [{
        id: 'selbstreflexion',
        delta: '+12'
      }, {
        id: 'klarheit',
        delta: '+7'
      }]
    }, {
      letter: 'C',
      label: 'Du machst',
      kind: 'uneindeutig',
      outcome: 'costly',
      quote: 'Du machst weiter wie bisher. Läuft ja.',
      feedback: 'Es läuft tatsächlich. Und das ist der Grund, warum die meisten an diesem Punkt nichts ändern — bis der Punkt kommt, an dem es auch nicht mehr läuft.',
      deltas: [{
        id: 'selbstreflexion',
        delta: '−6'
      }]
    }]
  },
  interaction: {
    type: 'values',
    title: 'Dein Kodex',
    prompt: 'Wähle bis zu fünf Sätze, die für dich ab jetzt gelten. Sie erscheinen in deiner Auswertung.',
    items: ['Ich sage, was ich suche — auch wenn es den Pool verkleinert.', 'Ein Nein beendet das Thema, nicht die Freundlichkeit.', 'Ich halte niemanden warm, weil ich mich nicht entscheiden will.', 'Ich verschwinde nicht nach Intimität.', 'Bei Alkohol passiert nichts. Ohne Ausnahme.', 'Ich frage, statt zu vermuten.', 'Ich beende ein Date lieber früh als unehrlich.', 'Ich beantworte direkte Fragen direkt.', 'Ich messe mich nicht an Zahlen.', 'Ich lege das Werkzeug weg, wenn jemand mir wichtig wird.']
  },
  challenge: {
    title: 'Brief an dein zukünftiges Ich',
    text: 'Schreib zehn Zeilen an dich selbst in einem Jahr. Was soll bis dahin anders sein — nicht in Zahlen, sondern im Verhalten? Leg den Text weg und lies ihn in zwölf Monaten.'
  },
  reflection: {
    question: 'Was möchtest du mit diesen Fähigkeiten tun, wenn du niemandem mehr etwas beweisen musst?',
    placeholder: 'Nimm dir Zeit für die Antwort …'
  },
  summary: ['Gelernt hast du Klarheit, Annahme, Initiative und Selbstpflege — nicht Eroberung.', 'Erfolg ist messbar, Verbindung nicht. Verwechsle die beiden nicht.', 'Aufmerksamkeit gewöhnt sich ab. Das ist der Kipppunkt.', 'Reichweite ersetzt keine Tiefe.', 'Der Kurs endet nicht damit, dass du Dating beherrschst. Er endet mit der Frage, was du damit tust.'],
  quiz: [{
    q: 'Was hast du in diesem Kurs tatsächlich gelernt?',
    options: [{
      text: 'Wie man mehr Frauen bekommt',
      why: 'Das ist ein Nebeneffekt, keine Fähigkeit.'
    }, {
      text: 'Klar zu kommunizieren, ein Nein anzunehmen und Initiative zu zeigen',
      correct: true,
      why: 'Richtig — und das funktioniert weit über Dating hinaus.'
    }, {
      text: 'Techniken zur Gesprächssteuerung',
      why: 'Vorhanden, aber nicht der Kern.'
    }]
  }, {
    q: 'Was ist der Kipppunkt bei Bestätigung?',
    options: [{
      text: 'Wenn man zu viel davon bekommt',
      why: 'Die Menge allein ist nicht das Problem.'
    }, {
      text: 'Wenn dieselbe Menge nicht mehr reicht',
      correct: true,
      why: 'Genau. Gewöhnung, nicht Sättigung.'
    }, {
      text: 'Wenn sie ausbleibt',
      why: 'Das ist die Folge, nicht der Kipppunkt.'
    }]
  }, {
    q: 'Wann ist professionelle Unterstützung sinnvoll?',
    options: [{
      text: 'Wenn man länger keinen Erfolg hat',
      why: 'Das ist normal und kein Anlass.'
    }, {
      text: 'Wenn Ablehnung dich über Wochen aus der Bahn wirft oder du ohne Bestätigung nicht klarkommst',
      correct: true,
      why: 'Richtig. Dann ist es kein Dating-Thema mehr.'
    }, {
      text: 'Nie, das schafft man allein',
      why: 'Genau die Haltung, die es länger dauern lässt.'
    }]
  }],
  transfer: 'Deinen Kodex festlegen und den Brief schreiben.'
}];
window.FBChapters = [].concat(window.FBChaptersA, window.FBChaptersB, window.FBChaptersC, window.FBChaptersD, window.FBChaptersE, window.FBChaptersF);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/chapters-f.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/competences.js
try { (() => {
window.FBCompetences = [{
  id: 'klarheit',
  label: 'Klarheit',
  icon: 'target',
  desc: 'Du sagst, was du willst — verständlich und ohne Hintertür.'
}, {
  id: 'respekt',
  label: 'Respekt',
  icon: 'shield-check',
  desc: 'Du erkennst Grenzen früh und hältst dich daran, ohne zu diskutieren.'
}, {
  id: 'initiative',
  label: 'Initiative',
  icon: 'zap',
  desc: 'Du machst den ersten Schritt, ohne eine Reaktion zu erzwingen.'
}, {
  id: 'selbstsicherheit',
  label: 'Selbstsicherheit',
  icon: 'flame',
  desc: 'Du hältst ein offenes Ergebnis aus, ohne dich zu verbiegen.'
}, {
  id: 'beobachtung',
  label: 'Beobachtung',
  icon: 'eye',
  desc: 'Du liest Signale im Gesamtbild statt einzelne Gesten zu überdeuten.'
}, {
  id: 'resilienz',
  label: 'Resilienz',
  icon: 'timer',
  desc: 'Eine Absage wirft dich nicht aus der Bahn und ändert dein Verhalten nicht ins Bittere.'
}, {
  id: 'selbstreflexion',
  label: 'Selbstreflexion',
  icon: 'brain',
  desc: 'Du erkennst dein eigenes Muster, auch wenn es unangenehm ist.'
}, {
  id: 'verlaesslichkeit',
  label: 'Verlässlichkeit',
  icon: 'check-check',
  desc: 'Was du ankündigst, tust du. Auch wenn niemand kontrolliert.'
}];

/* Punkte gibt es für gute Entscheidungen, nie für ein bestimmtes Ergebnis.
   Eine respektvoll akzeptierte Absage ist ein Erfolg. */
window.FBFeedbackKinds = {
  klar: {
    label: 'Klar und respektvoll',
    tone: 'good',
    icon: 'check-check'
  },
  druck: {
    label: 'Gut gemeint, zu viel Druck',
    tone: 'costly',
    icon: 'triangle-alert'
  },
  uneindeutig: {
    label: 'Uneindeutig',
    tone: 'costly',
    icon: 'scale'
  },
  voreilig: {
    label: 'Voreilig interpretiert',
    tone: 'costly',
    icon: 'circle-alert'
  },
  grenze: {
    label: 'Grenze übersehen',
    tone: 'bad',
    icon: 'ban'
  },
  initiative: {
    label: 'Gute Initiative',
    tone: 'good',
    icon: 'zap'
  },
  rechtfertig: {
    label: 'Unnötige Rechtfertigung',
    tone: 'costly',
    icon: 'quote'
  },
  rueckzug: {
    label: 'Angemessener Rückzug',
    tone: 'good',
    icon: 'hand'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/competences.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/content/safety.js
try { (() => {
window.FBSafety = {
  disclaimer: 'Dieser Bereich ist eine allgemeine Orientierung, keine Rechtsberatung. Die Angaben sind nicht auf eine bestimmte Rechtsordnung geprüft. Vor einer produktiven Veröffentlichung muss dieser Abschnitt von einer Fachperson für das jeweils geltende Recht — insbesondere für die Schweiz — überprüft werden.',
  groups: [{
    id: 'consent',
    icon: 'shield-check',
    tone: 'consent',
    title: 'Consent',
    items: [{
      k: 'Grundregel',
      v: 'Zustimmung ist freiwillig, informiert, konkret, fortlaufend und jederzeit widerrufbar. Sie lässt sich nicht aus Schweigen, Körpersprache oder einer früheren Situation ableiten.'
    }, {
      k: 'Nur Erwachsene',
      v: 'Alle Kontakte in diesem Kurs und in seiner Anwendung betreffen ausschliesslich Erwachsene. Bei Unsicherheit über das Alter findet kein Kontakt statt.'
    }, {
      k: 'Eingeschränkte Einwilligungsfähigkeit',
      v: 'Bei starker Alkoholisierung, anderen Substanzen, Bewusstseinsbeeinträchtigung, Angst, Druck oder Abhängigkeit ist eine wirksame Zustimmung nicht gegeben — unabhängig davon, was gesagt wird.'
    }, {
      k: 'Machtgefälle',
      v: 'Vorgesetzte, Ausbildung, finanzielle oder aufenthaltsrechtliche Abhängigkeit: Zustimmung ist in solchen Konstellationen nie unbelastet.'
    }, {
      k: 'Im Zweifel',
      v: 'Kein Übergang. Die Frage, ob jemand klar entscheiden kann, beantwortest du — sie ist nicht delegierbar.'
    }]
  }, {
    id: 'gesundheit',
    icon: 'heart',
    tone: 'caution',
    title: 'Sexuelle Gesundheit',
    items: [{
      k: 'Verhütung',
      v: 'Verhütung wird vorher besprochen, nicht im Moment verhandelt. Wenn kein Schutz vorhanden ist, findet kein Geschlechtsverkehr statt.'
    }, {
      k: 'Kondome',
      v: 'Standard bei wechselnden Kontakten. Richtig gelagert, vor dem Ablaufdatum, von Anfang an.'
    }, {
      k: 'Tests',
      v: 'Wer mehrere Kontakte hat, lässt sich regelmässig testen. Ein Testergebnis ist eine Momentaufnahme, kein Freibrief.'
    }, {
      k: 'Offen sprechen',
      v: 'Über Risiken zu reden ist kein Stimmungskiller. Es nicht zu tun, ist eine Entscheidung über den Körper einer anderen Person.'
    }, {
      k: 'Bei Verdacht',
      v: 'Kontakte informieren und ärztlich abklären lassen. Unangenehm, aber die einzige richtige Reaktion.'
    }]
  }, {
    id: 'digital',
    icon: 'lock',
    tone: 'neutral',
    title: 'Digitale Grenzen & Privatsphäre',
    items: [{
      k: 'Intime Bilder',
      v: 'Bilder gehören der Person, die darauf zu sehen ist — auch nach dem Kontakt. Keine Weitergabe, keine Sicherung „für mich“, kein Zeigen im Freundeskreis.'
    }, {
      k: 'Ungefragte Bilder',
      v: 'Keine intimen Aufnahmen ohne ausdrückliche Bitte. Das gilt in beide Richtungen.'
    }, {
      k: 'Private Nachrichten',
      v: 'Screenshots und Weiterleitungen von Chats sind ein Vertrauensbruch, auch wenn niemand es erfährt.'
    }, {
      k: 'Heimliche Aufnahmen',
      v: 'Nie. Weder Foto noch Video noch Ton. In vielen Rechtsordnungen ist das eine Straftat.'
    }, {
      k: 'Daten',
      v: 'Keine echten Namen, Telefonnummern oder Nachrichten anderer Personen in diesem Kurs eingeben. Alles, was du hier schreibst, bleibt lokal auf deinem Gerät — teile es trotzdem nicht mit Inhalten über Dritte.'
    }]
  }, {
    id: 'sicherheit',
    icon: 'triangle-alert',
    tone: 'danger',
    title: 'Sicherheit & Belästigung',
    items: [{
      k: 'Erste Treffen',
      v: 'Öffentlicher, gut erreichbarer Ort. Eigene An- und Abreise. Eine Person deines Vertrauens weiss, wo du bist.'
    }, {
      k: 'Ihre Sicherheit',
      v: 'Dieselben Regeln gelten aus ihrer Perspektive — und sie hat statistisch mehr Grund dazu. Vorschläge, die ihr Sicherheit geben, erhöhen die Zusagequote.'
    }, {
      k: 'Nachstellen',
      v: 'Wiederholtes Kontaktieren nach ausbleibender Antwort, Auftauchen an bekannten Orten, Kontaktaufnahme über Dritte oder neue Profile: das ist Nachstellen, unabhängig von der Absicht.'
    }, {
      k: 'Blockieren und Melden',
      v: 'Wer blockiert wird, akzeptiert das. Wer belästigt wird, meldet es der Plattform.'
    }, {
      k: 'Wenn dir ein Fehler passiert ist',
      v: 'Aufhören, benennen, nicht rechtfertigen, nicht um Absolution bitten. Wie es weitergeht, entscheidet die andere Person.'
    }]
  }, {
    id: 'hilfe',
    icon: 'info',
    tone: 'consent',
    title: 'Beratung & Hilfe',
    configurable: true,
    items: [{
      k: 'Hinweis',
      v: 'Dieser Block ist bewusst leer und wird pro Land konfiguriert. Vor der Veröffentlichung sind hier die zuständigen Opferberatungs-, Notruf- und Gesundheitsstellen der jeweiligen Region einzutragen.'
    }, {
      k: 'Vorgesehen',
      v: 'Notrufnummer · Opferhilfe · Beratung bei sexueller Gesundheit · Anlaufstelle bei Belästigung und Nachstellen · psychologische Beratung.'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/content/safety.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/data.js
try { (() => {
/* Inhalte für die Spezialbausteine in Kapitel 04, 05 und 11.
   Die Kapiteltexte selbst liegen in content/chapters-*.js */
window.FBData = {
  flow: [{
    n: '01',
    t: 'Profil',
    s: 'Das Profil macht die Vorentscheidung. Wer hier verliert, kommt gar nicht erst ins Gespräch.',
    k: 'Kapitel 04'
  }, {
    n: '02',
    t: 'Erste Nachricht',
    s: 'Konkrete Beobachtung aus ihrem Profil plus eine Frage, die eine Richtung vorgibt.',
    k: 'Kapitel 05'
  }, {
    n: '03',
    t: 'Gespräch',
    s: 'Jede Nachricht hat eine Aufgabe: näher an das Treffen. Kein Chat um des Chats willen.',
    k: 'Kapitel 05'
  }, {
    n: '04',
    t: 'Einladung',
    s: 'Tag, Zeit, Ort. Ein Getränk, eine Stunde, in deiner Nähe.',
    k: 'Kapitel 06'
  }, {
    n: '05',
    t: 'Das Treffen',
    s: 'Kein Programm, kein Menü. Ein Ort, von dem aus der nächste Schritt kurz ist.',
    k: 'Kapitel 07'
  }, {
    n: '06',
    t: 'Der Übergang',
    s: 'Die Einladung zu dir. Wenn sie nein sagt: Spaziergang. Wenn sie ja sagt: kochen.',
    k: 'Kapitel 07'
  }, {
    n: '07',
    t: 'Nähe',
    s: 'Nur mit ihrem ausgesprochenen Ja, bei jedem Schritt neu. Zögern beendet den Ablauf.',
    k: 'Kapitel 10'
  }, {
    n: '08',
    t: 'Der Abgang',
    s: 'Vorher sagen, ob du bleibst. Danach ist derselbe Satz eine Zurückweisung.',
    k: 'Kapitel 11'
  }],
  gamechangers: [{
    icon: 'split',
    t: 'Ein Ablauf statt Tipps',
    s: 'Andere Ratgeber geben dir dreissig einzelne Tricks. Hier ist es eine Kette: acht Schritte, jeder mit einer Aufgabe, jeder mit einem Ausstieg. Du weisst an jedem Punkt, wo du bist und was als Nächstes kommt.'
  }, {
    icon: 'zap',
    t: 'Textbausteine statt Talent',
    s: 'Du schreibst deine besten Antworten einmal und legst sie auf drei Buchstaben. Zwanzig Gespräche mit Tiefe in der Zeit, die andere für eines brauchen — in deiner Sprache, nicht in einer geliehenen.'
  }, {
    icon: 'scale',
    t: 'Die Kosten stehen daneben',
    s: 'Jede Technik kommt mit dem, was sie anrichtet. Kein Kapitel verkauft dir einen Trick, ohne zu sagen, wen er trifft. Das findest du sonst nirgends.'
  }, {
    icon: 'shield-check',
    t: 'Consent als Bedingung, nicht als Bremse',
    s: 'Der Ablauf hat an jedem Schritt eine Abbruchstelle. Nicht als Warnhinweis am Rand, sondern eingebaut: Wo sie nicht mitgeht, endet der Schritt — und du weisst vorher, wie du dann reagierst.'
  }],
  photos: [{
    rank: '01',
    title: 'Lachen. Echt, nicht posiert.',
    text: 'Der mit Abstand stärkste Einzelfaktor. Ein echtes Lachen — Augen mit, Zähne sichtbar — schlägt jedes Fitnessstudio-Foto. Es signalisiert: mit dem Menschen wird es ein angenehmer Abend.',
    verdict: 'immer',
    note: 'Mindestens zwei deiner Fotos.'
  }, {
    rank: '02',
    title: 'Ein Gesicht, klar erkennbar, ohne Sonnenbrille.',
    text: 'Das erste Foto entscheidet in einer halben Sekunde. Keine Gruppenbilder, keine Sonnenbrille, kein Hut, der das halbe Gesicht verdeckt. Sie muss wissen, wen sie trifft.',
    verdict: 'immer',
    note: 'Foto 1, ohne Ausnahme.'
  }, {
    rank: '03',
    title: 'Oben ohne — nur wenn der Kontext es trägt.',
    text: 'Am See, im Meer, beim Springen vom Steg: dort ist Oberkörper frei normal und wirkt beiläufig. Im Badezimmerspiegel oder im Wohnzimmer wirkt es wie eine Ansage — und die liest sich als Unsicherheit, nicht als Selbstbewusstsein.',
    verdict: 'bedingt',
    note: 'Nur mit Wasser im Bild. Und nur, wenn du oben ohne wirklich gut aussiehst — sonst kostet es dich mehr Matches, als es bringt.'
  }, {
    rank: '04',
    title: 'Eine Tätigkeit, die eine Frage provoziert.',
    text: 'Klettern, Kochen, Instrument, Hund, ein Ort mit Charakter. Nicht um zu beeindrucken, sondern um ihr eine Eröffnung zu schenken. Ein Foto, zu dem man nichts fragen kann, ist ein verlorener Slot.',
    verdict: 'empfohlen',
    note: 'Zwei bis drei Slots.'
  }, {
    rank: '05',
    title: 'Ganzkörper, unbearbeitet.',
    text: 'Ehrlich zeigen, wie du aussiehst. Wer beim Date überrascht wird, ist enttäuscht — und Enttäuschung am Anfang holst du nicht mehr auf. Ein ehrliches Ganzkörperfoto filtert im Voraus und spart beiden den Abend.',
    verdict: 'immer',
    note: 'Ein Slot reicht.'
  }, {
    rank: '06',
    title: 'Kein Auto, keine Waffe, kein Spiegel-Selfie.',
    text: 'Drei Klassiker, die zuverlässig Matches kosten. Sie erzählen nichts über dich, ausser dass du glaubst, sie würden etwas erzählen.',
    verdict: 'nie',
    note: 'Ersatzlos streichen.'
  }],
  algorithm: [{
    icon: 'timer',
    title: 'Aktivität schlägt Aussehen',
    text: 'Die Apps ranken Profile, die regelmässig und kurz aktiv sind, höher als solche, die einmal pro Woche zwei Stunden durchwischen. Zwei kurze Sessions am Tag sind mehr wert als eine lange.'
  }, {
    icon: 'target',
    title: 'Deine ersten Likes definieren dein Publikum',
    text: 'Wen du likst und wer dich zurück likt, formt die Zielgruppe, der du danach gezeigt wirst. Wahllos alles nach rechts zu wischen verwässert genau das.'
  }, {
    icon: 'trending-down',
    title: 'Antwortquote ist eine Ranking-Grösse',
    text: 'Matches, die im Nichts enden, zählen negativ. Weniger Matches mit echten Gesprächen ranken besser als hundert tote Threads.'
  }, {
    icon: 'zap',
    title: 'Boosts wirken nur mit fertigem Profil',
    text: 'Ein Boost multipliziert die Sichtbarkeit deines aktuellen Profils. Ist es schwach, kaufst du dir mehr Menschen, die vorbeiscrollen. Erst fertig bauen, dann boosten.'
  }, {
    icon: 'clock',
    title: 'Timing: Sonntagabend, 20 bis 22 Uhr',
    text: 'Höchste Aktivität in der Woche. Ein Boost am Dienstagvormittag verbrennt dieselbe Menge Geld für ein Viertel der Augen.'
  }, {
    icon: 'message-square',
    title: 'Nach dem Boost zählen 30 Minuten',
    text: 'Sei erreichbar, wenn er läuft. Die Matches, die währenddessen entstehen, antworten sofort — oder nie wieder.'
  }],
  snippets: [{
    key: ';vor',
    label: 'Vorstellung',
    text: 'Ich bin Verkaufstrainer, arbeite viel mit Menschen und rede beruflich den ganzen Tag — privat bin ich deshalb gern draussen und still. Klettern, kochen, lange Wege zu Fuss. Ich mag Gespräche, die nach zwei Sätzen aufhören, höflich zu sein.'
  }, {
    key: ';woh',
    label: 'Wohnort & Alltag',
    text: 'Ich wohne in Zürich, ursprünglich vom Land. Unter der Woche viel unterwegs, am Wochenende meistens irgendwo am Berg oder in der Küche.'
  }, {
    key: ';suc',
    label: 'Was ich suche',
    text: 'Ehrlich: aktuell nichts Festes. Wenn du das Gegenteil suchst, sag es einfach — dann sparen wir uns beide Zeit. Ich finde das fairer, als es offen zu lassen.'
  }, {
    key: ';wek',
    label: 'Wochenende',
    text: 'Freitag runterkommen, Samstag draussen, Sonntag kochen und niemanden sehen. Wobei die letzte Regel verhandelbar ist.'
  }, {
    key: ';dat',
    label: 'Date-Vorschlag',
    text: 'Wollen wir das Schreiben abkürzen? Donnerstag oder Samstag, ein Getränk, eine Stunde. Wenn es gut ist, bleiben wir länger.'
  }],
  chat: {
    profile: {
      name: 'M.',
      age: 27,
      meta: '4 km entfernt',
      image: '../../assets/sim/profile-01.png',
      tags: ['Klettern', 'Sarkasmus', 'Kein Small Talk']
    },
    thread: [{
      from: 'her',
      time: '23:31',
      text: 'Dein Profil ist verdächtig gut geschrieben.'
    }, {
      from: 'me',
      time: '23:33',
      text: 'Berufsrisiko. Ich verdiene Geld damit, Sätze zu bauen.',
      status: 'read'
    }, {
      from: 'her',
      time: '23:36',
      text: 'Und was suchst du so? 🙂'
    }],
    replies: [{
      letter: 'A',
      label: 'Offen',
      outcome: 'good',
      quote: '„Ehrlich: aktuell nichts Festes. Wenn du das Gegenteil suchst, sag es einfach — dann sparen wir uns beide Zeit.“',
      feedback: 'Ehrlich, früh, ohne Drama. Verkleinert den Pool und schützt beide vor falschen Erwartungen.'
    }, {
      letter: 'B',
      label: 'Mehrdeutig',
      outcome: 'costly',
      quote: '„Ich lasse das offen. Man weiss ja nie, wer um die Ecke kommt.“',
      feedback: 'Taktisch wirksam — und genau die Aussage, die Hoffnung erzeugt, die du nicht einlösen willst.'
    }, {
      letter: 'C',
      label: 'Ausweichen',
      outcome: 'bad',
      quote: '„Erstmal schauen, ob wir uns überhaupt riechen können 😏“',
      feedback: 'Du weichst der Frage aus, die sie gerade gestellt hat. Sie merkt es. Vertrauen sinkt, bevor ihr euch gesehen habt.'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/data.js", error: String((e && e.message) || e) }); }

// ui_kits/elearning/store.js
try { (() => {
/* Versioniertes lokales Speichermodell. Kein Backend, kein Account —
   die Struktur ist aber so gebaut, dass beides später ergänzt werden kann. */
(function () {
  const KEY = 'fuckboy.progress.v1';
  const VERSION = 1;
  const empty = () => ({
    version: VERSION,
    updatedAt: null,
    lastScreen: null,
    chapters: {},
    // '01': { started, completedParts:[], done }
    answers: {},
    // 'ch:key' -> gewählte Option
    reflections: {},
    // 'ch:key' -> Freitext
    challenges: {},
    // 'ch:idx'  -> bool
    quiz: {},
    // 'ch'      -> { idx: optionIndex }
    competences: {
      // Kompetenzprofil, 0–100
      klarheit: 40,
      respekt: 55,
      initiative: 35,
      selbstsicherheit: 38,
      beobachtung: 42,
      resilienz: 30,
      selbstreflexion: 45,
      verlaesslichkeit: 50
    },
    plan: {}
  });
  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return empty();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== VERSION) return empty();
      return Object.assign(empty(), parsed);
    } catch (e) {
      return empty();
    }
  }
  function save(state) {
    try {
      state.updatedAt = new Date().toISOString();
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {/* Speicher voll oder blockiert — App läuft trotzdem weiter */}
    return state;
  }
  function reset() {
    try {
      window.localStorage.removeItem(KEY);
    } catch (e) {}
    return empty();
  }
  window.FBStore = {
    KEY,
    VERSION,
    load,
    save,
    reset,
    empty
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/store.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.WarningNotice = __ds_scope.WarningNotice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ChapterCard = __ds_scope.ChapterCard;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ChoiceOption = __ds_scope.ChoiceOption;

__ds_ns.LockedPanel = __ds_scope.LockedPanel;

__ds_ns.PillChoice = __ds_scope.PillChoice;

__ds_ns.Redacted = __ds_scope.Redacted;

__ds_ns.ScoreMeter = __ds_scope.ScoreMeter;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.SwipeCard = __ds_scope.SwipeCard;

__ds_ns.ProgressRail = __ds_scope.ProgressRail;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
