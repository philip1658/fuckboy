/* @ds-bundle: {"format":4,"namespace":"FUCKBOYDesignSystem_007b99","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"WarningNotice","sourcePath":"components/feedback/WarningNotice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ChapterCard","sourcePath":"components/learning/ChapterCard.jsx"},{"name":"ChatBubble","sourcePath":"components/learning/ChatBubble.jsx"},{"name":"ChoiceOption","sourcePath":"components/learning/ChoiceOption.jsx"},{"name":"LockedPanel","sourcePath":"components/learning/LockedPanel.jsx"},{"name":"PillChoice","sourcePath":"components/learning/PillChoice.jsx"},{"name":"Redacted","sourcePath":"components/learning/Redacted.jsx"},{"name":"ScoreMeter","sourcePath":"components/learning/ScoreMeter.jsx"},{"name":"Stamp","sourcePath":"components/learning/Stamp.jsx"},{"name":"SwipeCard","sourcePath":"components/learning/SwipeCard.jsx"},{"name":"ProgressRail","sourcePath":"components/navigation/ProgressRail.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e2bbe2a7a11a","components/core/Button.jsx":"cd305263f1a5","components/core/Card.jsx":"13072fdf5436","components/core/Icon.jsx":"6c93ab88a0b7","components/core/IconButton.jsx":"a7d5259ce0ab","components/core/Rule.jsx":"c822fccc941a","components/core/Tag.jsx":"7618278547c5","components/feedback/Dialog.jsx":"12693b085b46","components/feedback/Toast.jsx":"b9fc74012dc7","components/feedback/Tooltip.jsx":"d2b83a92f5bf","components/feedback/WarningNotice.jsx":"a69363af9b4c","components/forms/Checkbox.jsx":"306b341d4910","components/forms/Input.jsx":"ebfceb11a3bf","components/forms/Radio.jsx":"b52970611868","components/forms/Select.jsx":"c47ed9223855","components/forms/Switch.jsx":"7aa168d60e0a","components/forms/Textarea.jsx":"b6943173a1b5","components/learning/ChapterCard.jsx":"4d13b04fd488","components/learning/ChatBubble.jsx":"d5f7c0a0787f","components/learning/ChoiceOption.jsx":"17f2f24fa82d","components/learning/LockedPanel.jsx":"0564ea704980","components/learning/PillChoice.jsx":"2a6fded48305","components/learning/Redacted.jsx":"3861851c9c2d","components/learning/ScoreMeter.jsx":"e6f01ae8f949","components/learning/Stamp.jsx":"15bbe8ab930f","components/learning/SwipeCard.jsx":"e8157921eee2","components/navigation/ProgressRail.jsx":"94d34157f3bf","components/navigation/Tabs.jsx":"f1e5e9d97f4a","ui_kits/elearning/App.jsx":"8c301028b909","ui_kits/elearning/ChapterIndex.jsx":"6906f1fcd609","ui_kits/elearning/ChatSimScreen.jsx":"b39ccf1b6040","ui_kits/elearning/CoverScreen.jsx":"cb843662eef5","ui_kits/elearning/LessonScreen.jsx":"93a02604f447","ui_kits/elearning/OverviewScreen.jsx":"3c36a9518bfc","ui_kits/elearning/ProfileScreen.jsx":"8cf4d49f60d5","ui_kits/elearning/ScenarioScreen.jsx":"ae7e711c26ec","ui_kits/elearning/Shell.jsx":"d3481cf775a6","ui_kits/elearning/data.js":"f7f4e89a91d8"},"inlinedExternals":[],"unexposedExports":[]} */

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
      color: t.accent
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
      marginTop: '2px'
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
  }, bonus ? 'Bonusakte' : 'Kapitel', duration ? ' · ' + duration : '', decisions !== undefined ? ' · ' + decisions + ' Entscheidungen' : ''), locked ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
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
      marginTop: '1px'
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

// ui_kits/elearning/App.jsx
try { (() => {
const {
  Badge,
  Button
} = window.FUCKBOYDesignSystem_007b99;
const CRUMBS = {
  overview: ['Kursübersicht', 'Ein Werkzeug — und die Rechnung dazu'],
  index: ['Akten-Index', 'FB-01 bis FB-06'],
  lesson: ['Kapitel 03', 'Der grösste Fehler'],
  scenario: ['Boss-Level', 'Gutes Date, unklare Signale'],
  chat: ['Simulation 02', 'Sie fragt, was du suchst'],
  profile: ['Persönliche Akte', 'Fuckboy-Profil']
};
function App() {
  const D = window.FBData;
  const [screen, setScreen] = React.useState('cover');
  const [transfer, setTransfer] = React.useState(D.transfer);
  const [scores, setScores] = React.useState(D.scores);
  const toggleTransfer = i => setTransfer(t => t.map((x, j) => j === i ? {
    ...x,
    done: !x.done
  } : x));
  const applyDeltas = chosen => {
    if (!chosen || !chosen.deltas) return;
    setScores(prev => prev.map(s => {
      const d = chosen.deltas.find(x => x.label === s.label);
      if (!d) return s;
      const n = Math.max(0, Math.min(100, s.value + parseInt(d.delta.replace('−', '-'), 10)));
      return {
        ...s,
        value: n,
        delta: d.delta
      };
    }));
  };
  if (screen === 'cover') return /*#__PURE__*/React.createElement(CoverScreen, {
    go: setScreen
  });
  const [crumb, title] = CRUMBS[screen] || ['', ''];
  const level = scores.find(s => s.label === 'Fuckboy-Level');
  return /*#__PURE__*/React.createElement(Shell, {
    chapters: D.chapters,
    screen: screen,
    go: setScreen,
    level: level ? level.value : 62,
    crumb: crumb,
    title: title,
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "consent",
      icon: "shield-check"
    }, "Consent 92")
  }, screen === 'overview' ? /*#__PURE__*/React.createElement(OverviewScreen, {
    chapters: D.chapters,
    goals: D.goals,
    formats: D.formats,
    bosslevels: D.bosslevels,
    scores: scores,
    go: setScreen
  }) : null, screen === 'index' ? /*#__PURE__*/React.createElement(ChapterIndex, {
    chapters: D.chapters,
    go: setScreen,
    flags: D.flags
  }) : null, screen === 'lesson' ? /*#__PURE__*/React.createElement(LessonScreen, {
    go: setScreen,
    transfer: transfer,
    toggleTransfer: toggleTransfer
  }) : null, screen === 'scenario' ? /*#__PURE__*/React.createElement(ScenarioScreen, {
    scenario: D.scenario,
    go: setScreen,
    onCommit: applyDeltas
  }) : null, screen === 'chat' ? /*#__PURE__*/React.createElement(ChatSimScreen, {
    chat: D.chat,
    go: setScreen,
    onCommit: () => {}
  }) : null, screen === 'profile' ? /*#__PURE__*/React.createElement(ProfileScreen, {
    scores: scores,
    transfer: transfer,
    toggleTransfer: toggleTransfer,
    flags: D.flags,
    go: setScreen
  }) : null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ChapterIndex.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ChapterCard,
  Stamp,
  Rule,
  Badge,
  Icon,
  LockedPanel,
  Button
} = window.FUCKBOYDesignSystem_007b99;
function ChapterIndex({
  chapters,
  go,
  flags
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Akten-Index \xB7 FB-01 bis FB-06"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Sechs Kapitel.", /*#__PURE__*/React.createElement("br", null), "Zwei davon willst du nicht lesen.")), /*#__PURE__*/React.createElement(Stamp, {
    tone: "unlocked",
    icon: "lock-open",
    rotate: 2
  }, "2 von 6 offen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-4xl)'
    }
  }, chapters.filter(c => !c.bonus).map(c => /*#__PURE__*/React.createElement(ChapterCard, _extends({
    key: c.number
  }, c, {
    onClick: () => go(c.number === '03' ? 'lesson' : 'lesson')
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-3xl)',
      marginTop: 'var(--space-4xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Bonusakte \xB7 gesperrt",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(LockedPanel, {
    title: "06 \xB7 Was \xFCbrig bleibt",
    requirement: "Kapitel 05 abschliessen",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      icon: "lock-open"
    }, "Freischalten")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Der Teil, den ich am l\xE4ngsten nicht aufschreiben wollte. Irgendwann funktioniert das Werkzeug besser als du selbst. Du merkst, dass du bei jeder Frau schon nach zwei S\xE4tzen weisst, wie es endet \u2014 und dass dich das nicht mehr freut."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Red-Flag-Katalog",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, flags.slice(0, 5).map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      padding: '10px 12px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bordeaux-400)',
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    icon: "flag"
  }, "7 Signale"), /*#__PURE__*/React.createElement(Badge, {
    tone: "consent",
    icon: "shield-check"
  }, "Consent zuerst")))));
}
Object.assign(window, {
  ChapterIndex
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ChapterIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ChatSimScreen.jsx
try { (() => {
const {
  SwipeCard,
  ChatBubble,
  ChoiceOption,
  Card,
  Rule,
  Button,
  Stamp,
  Badge,
  Icon,
  Tag
} = window.FUCKBOYDesignSystem_007b99;
function ChatSimScreen({
  chat,
  go,
  onCommit
}) {
  const [thread, setThread] = React.useState(chat.thread);
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const chosen = chat.replies.find(r => r.letter === picked);
  const send = () => {
    if (!chosen) return;
    setThread(t => [...t, {
      from: 'me',
      time: '23:39',
      text: chosen.quote.replace(/[„“]/g, ''),
      status: 'read'
    }]);
    setSent(true);
    if (onCommit) onCommit(chosen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Kapitel 05 \xB7 Simulation 02"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Sie fragt, was du suchst."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)',
      maxWidth: '52ch'
    }
  }, "Die unbequemste Nachricht im ganzen Chat. Drei Antworten. Alle drei funktionieren \u2014 nur nicht f\xFCr dieselbe Sache."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px minmax(0,1fr)',
      gap: 'var(--space-4xl)',
      marginTop: 'var(--space-3xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(SwipeCard, chat.profile), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Kontext",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      lineHeight: 1.45,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14,
    color: "var(--text-faint)"
  }), " 11 Tage geschrieben"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square",
    size: 14,
    color: "var(--text-faint)"
  }), " Noch kein Treffen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14,
    color: "var(--wire-500)"
  }), " Keine Grenze signalisiert")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 'var(--space-md)',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '9px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--ink-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-data)',
      fontSize: '12px',
      fontWeight: 700,
      color: 'var(--paper-300)'
    }
  }, "M"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, "M., 27")), /*#__PURE__*/React.createElement(Stamp, {
    tone: "neutral"
  }, "Simulation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-lg)'
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
    label: sent ? 'Wirkung deiner Antwort' : 'Deine Antwort',
    style: {
      margin: 'var(--space-2xl) 0 var(--space-lg)'
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-2xl)'
    }
  }, sent ? /*#__PURE__*/React.createElement(Badge, {
    tone: "caution",
    icon: "scale"
  }, "Unklarheit ist eine Entscheidung, keine Neutralit\xE4t") : /*#__PURE__*/React.createElement(Stamp, {
    tone: "classified"
  }, "Antwort wird protokolliert"), sent ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "gauge",
    onClick: () => go('profile')
  }, "Mein Profil") : /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "send",
    disabled: !picked,
    onClick: send
  }, "Senden")))));
}
Object.assign(window, {
  ChatSimScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ChatSimScreen.jsx", error: String((e && e.message) || e) }); }

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
      alignItems: 'flex-start',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    tone: "classified",
    rotate: -3
  }, "Vertraulich \xB7 nicht weitergeben"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "neutral"
  }, "Akte FB-00")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '3px solid var(--paper-100)',
      padding: 'var(--space-4xl) var(--space-4xl) var(--space-3xl)',
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: '124px',
      lineHeight: 0.82,
      letterSpacing: '-0.04em',
      color: 'var(--paper-100)'
    }
  }, "FUCKBOY"), /*#__PURE__*/React.createElement("div", {
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
      letterSpacing: '0.42em',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "Das verbotene Werkzeug"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "6 Kapitel \xB7 33 Entscheidungen"))), /*#__PURE__*/React.createElement("div", {
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
  }, "Ich bin nicht besonders gut aussehend. Ich hatte trotzdem mit ungef\xE4hr 200 Frauen Sex. Nicht wegen meinem Gesicht \u2014 wegen Kommunikation, Auftreten und dem Umgang mit Erwartungen."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--bordeaux-700)',
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
  }, "Ich schreibe das auf, weil es funktioniert. Und weil ich weiss, was es kaputt macht. Beides steht in dieser Akte. Du entscheidest, was du mitnimmst.")), /*#__PURE__*/React.createElement(Rule, {
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
    title: "Zeig mir das Werkzeug.",
    cost: "N\xE4he wird schwerer",
    selected: pill === 'red',
    onClick: () => setPill('red'),
    description: "Alle Techniken \u2014 inklusive dem, was sie langfristig mit dir machen."
  }), /*#__PURE__*/React.createElement(PillChoice, {
    pill: "blue",
    title: "Ich sag die Wahrheit.",
    cost: "Kleinerer Pool",
    selected: pill === 'blue',
    onClick: () => setPill('blue'),
    description: "Offen kommunizierte Unverbindlichkeit. Weniger Matches, keine falschen Hoffnungen."
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    iconRight: "arrow-right",
    disabled: !pill,
    onClick: () => go('overview'),
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, pill ? 'Akte öffnen' : 'Wähle eine Pille')))));
}
Object.assign(window, {
  CoverScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/CoverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/LessonScreen.jsx
try { (() => {
const {
  Card,
  Rule,
  Redacted,
  WarningNotice,
  Stamp,
  Checkbox,
  Button,
  Badge,
  Icon,
  Tooltip
} = window.FUCKBOYDesignSystem_007b99;
function LessonScreen({
  go,
  transfer,
  toggleTransfer
}) {
  return /*#__PURE__*/React.createElement("article", {
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
  }, "Kapitel 03"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "14 Min \xB7 6 Entscheidungen \xB7 1 Boss-Level")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '72px',
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.025em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-xl)'
    }
  }, "Der gr\xF6sste Fehler"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      marginTop: 'var(--space-2xl)',
      maxWidth: '46ch'
    }
  }, "Der gr\xF6sste Fehler auf diesem Weg ist banal: unbedingt Sex haben zu wollen. Nichts riecht schneller nach Verzweiflung. Und nichts erzeugt mehr Druck."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--bordeaux-700)',
      paddingLeft: 'var(--space-lg)',
      margin: 'var(--space-3xl) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)',
      marginBottom: 'var(--space-md)'
    }
  }, "Feldnotiz \xB7 ", /*#__PURE__*/React.createElement(Redacted, {
    width: "5ch"
  }, "2019")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Ich erinnere mich an ein Date mit ", /*#__PURE__*/React.createElement(Redacted, null, "Marlene"), ". Ich hatte den Abend im Kopf schon fertig, bevor er angefangen hat. Sie hat es gemerkt. Ich habe damals gedacht, es lag an meinem Hemd. Es lag an ", /*#__PURE__*/React.createElement(Redacted, null, "meiner Erwartung"), ".")), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Prinzip",
    style: {
      margin: 'var(--space-3xl) 0 var(--space-xl)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: 'var(--paper-100)'
    }
  }, "Du hast es nicht n\xF6tig."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)',
      maxWidth: 'var(--measure-prose)'
    }
  }, "Du kannst Interesse zeigen. Du kannst ein Angebot machen. Danach entscheidet sie \u2014 frei, ohne dass du nachschiebst. Wenn sie nicht will, ist das in Ordnung. Eine Absage ist kein pers\xF6nliches Scheitern und keine Aufgabe, die es zu l\xF6sen gilt. Sie ist ein Datenpunkt: keine gegenseitige Passung. Beide investieren ihre Zeit ab jetzt sinnvoller."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)',
      maxWidth: 'var(--measure-prose)'
    }
  }, "Wer viele Menschen kennenlernt, sammelt zwangsl\xE4ufig viele Absagen. Das ist Mathematik, nicht Kritik. Der Unterschied zwischen souver\xE4n und verzweifelt liegt nicht im Ergebnis, sondern darin, ob du vorher schon eines erwartet hast."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-lg)',
      margin: 'var(--space-3xl) 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: 'var(--volt-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-check",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "Druckfrei")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-primary)',
      marginTop: '10px'
    }
  }, "\u201EIch w\xFCrde dich gern k\xFCssen. Sag einfach nein, wenn nicht.\u201C")), /*#__PURE__*/React.createElement(Card, {
    surface: "raised",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      color: 'var(--bordeaux-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ban",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "Druck")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-primary)',
      marginTop: '10px'
    }
  }, "\u201EKomm schon, jetzt sei nicht so. Ein Kuss ist doch nichts.\u201C"))), /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "moral",
    title: "Das sitzt bei mir inzwischen. Genau das ist das Unbequeme."
  }, "Ich arbeite als Verkaufstrainer. Ich erkenne die Muster, weil ich sie beruflich benutze \u2014 und ich muss nicht mehr dar\xFCber nachdenken. Aber dieselbe Technik, die ein Gespr\xE4ch offen macht, kann es auch gezielt in eine Richtung schieben. Der Unterschied liegt allein in der Absicht. Und je automatischer das l\xE4uft, desto weniger merkst du selbst, auf welcher Seite du gerade stehst."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Transfer \xB7 ausserhalb dieses Kurses",
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
      alignItems: 'center',
      borderBottom: '1px solid var(--rule-ink)',
      paddingBottom: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-600)'
    }
  }, "Beilage 03 \xB7 \xDCbungsblatt"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '12px',
      fontWeight: 700,
      color: 'var(--ink-400)'
    }
  }, transfer.filter(t => t.done).length, "/", transfer.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px',
      marginTop: 'var(--space-md)'
    }
  }, transfer.map((t, i) => /*#__PURE__*/React.createElement("label", {
    key: i,
    onClick: e => {
      e.preventDefault();
      toggleTransfer(i);
    },
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      cursor: 'pointer',
      padding: '7px 0',
      minHeight: '44px'
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
      background: t.done ? 'var(--ink-800)' : 'transparent',
      border: '1px solid var(--rule-ink-strong)'
    }
  }, t.done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--paper-100)",
    stroke: 3
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      lineHeight: 1.55,
      color: t.done ? 'var(--ink-400)' : 'var(--ink-700)',
      textDecoration: t.done ? 'line-through' : 'none'
    }
  }, t.text)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-4xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    tone: "classified"
  }, "Kapitel 03 \xB7 Seite 4 von 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-left",
    onClick: () => go('index')
  }, "Index"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "split",
    onClick: () => go('scenario')
  }, "Zum Boss-Level"))));
}
Object.assign(window, {
  LessonScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/LessonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/OverviewScreen.jsx
try { (() => {
const {
  Card,
  Rule,
  Stamp,
  Badge,
  Button,
  Icon,
  ScoreMeter,
  WarningNotice,
  ChapterCard,
  LockedPanel,
  ProgressRail,
  Tooltip
} = window.FUCKBOYDesignSystem_007b99;
function StatBlock({
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
      color: tone || 'var(--paper-100)',
      fontVariantNumeric: 'tabular-nums'
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
function GoalList({
  number,
  title,
  duration,
  goals,
  state
}) {
  const locked = state === 'locked';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '62px minmax(0,1fr)',
      gap: 'var(--space-2xl)',
      padding: 'var(--space-2xl) 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1,
      color: locked ? 'var(--text-faint)' : 'var(--bordeaux-400)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
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
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.015em',
      color: locked ? 'var(--text-muted)' : 'var(--paper-100)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, duration), locked ? /*#__PURE__*/React.createElement(Badge, {
    tone: "locked",
    icon: "lock"
  }, "Gesperrt") : null), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-lg) 0 0',
      padding: 0,
      display: 'grid',
      gap: '9px'
    }
  }, goals.map(g => /*#__PURE__*/React.createElement("li", {
    key: g,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      marginTop: '4px',
      color: locked ? 'var(--ink-400)' : 'var(--volt-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, g))))));
}
function OverviewScreen({
  chapters,
  goals,
  formats,
  bosslevels,
  scores,
  go
}) {
  const gains = scores.filter(s => s.tone === 'gain' || s.tone === 'consent');
  const costs = scores.filter(s => s.tone === 'loss' || s.tone === 'neutral');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Kurs\xFCbersicht \xB7 Akte FB-00 bis FB-06"), /*#__PURE__*/React.createElement(Stamp, {
    tone: "classified",
    rotate: -2
  }, "Vertraulich")), /*#__PURE__*/React.createElement("h1", {
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
  }, "Ein Werkzeug \u2014 und die Rechnung dazu."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead-size)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-2xl)',
      maxWidth: '58ch'
    }
  }, "Sechs Kapitel \xFCber Kommunikation, Wirkung und Erwartungen beim Dating \u2014 geschrieben von jemandem, der es gemacht hat und weiss, was es kostet. Du entscheidest an jeder Stelle selbst. Der Kurs bewertet dich nicht, er zeigt dir nur, was deine Entscheidung wahrscheinlich ausl\xF6st."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6xl)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "06",
    label: "Kapitel"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "33",
    label: "Entscheidungen"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "08",
    label: "Score-Dimensionen"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "80",
    label: "Minuten total"
  }), /*#__PURE__*/React.createElement(StatBlock, {
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
  }, "Sobald sie z\xF6gert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne charmantes Nachfassen, ohne zweiten Anlauf sp\xE4ter am Abend. Consent ist in diesem Kurs keine Technik, um doch noch ans Ziel zu kommen \u2014 es ist die Bedingung, unter der \xFCberhaupt etwas stattfindet. Wer das anders liest, hat den Kurs nicht verstanden.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Dramaturgie \xB7 vom Mindset zur Rechnung"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(ProgressRail, {
    current: 2,
    steps: chapters.map(c => ({
      label: c.number + ' ' + (c.railLabel || c.title),
      locked: c.state === 'locked'
    })),
    onSelect: () => go('index')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-2xl)'
    }
  }, [{
    k: 'Akt I · Kapitel 01–02',
    t: 'Haltung',
    s: 'Wirkung statt Aussehen. Absicht statt Andeutung. Consent als Fundament, nicht als Fussnote.'
  }, {
    k: 'Akt II · Kapitel 03–04',
    t: 'Reibung',
    s: 'Druck, Erwartung, Ablehnung. Der Teil, in dem das Ego stört und der Kurs unbequem wird.'
  }, {
    k: 'Akt III · Kapitel 05–06',
    t: 'Rechnung',
    s: 'Ehrlichkeit gegen Reichweite. Und die Bonusakte: was das Werkzeug mit dem macht, der es benutzt.'
  }].map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.t,
    surface: "ink",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: 1.02,
      letterSpacing: '-0.015em',
      color: 'var(--paper-100)'
    }
  }, "Was du pro Kapitel mitnimmst"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "chevron-right",
    onClick: () => go('index')
  }, "Zum Akten-Index")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, chapters.map(c => /*#__PURE__*/React.createElement(GoalList, {
    key: c.number,
    number: c.number,
    title: c.title,
    duration: c.duration,
    state: c.state,
    goals: goals[c.number] || []
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Lernformate \xB7 kein klassisches Schulungsmodul"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-xl)'
    }
  }, formats.map(fm => /*#__PURE__*/React.createElement(Card, {
    key: fm.title,
    surface: "raised",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--paper-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: fm.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, fm.count)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '17px',
      fontWeight: 700,
      lineHeight: 1.25,
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, fm.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-sm)'
    }
  }, fm.text))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
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
  }, "Der Score misst beides."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 1.62,
      color: 'var(--text-secondary)',
      marginTop: 'var(--space-lg)'
    }
  }, "Vier Werte steigen, wenn du souver\xE4n handelst. Vier Werte zeigen, was dein Verhalten kostet \u2014 Erwartungsdruck, Kollateralschaden, und ein Fuckboy-Level, das ausdr\xFCcklich kein Ziel ist. Du kannst nicht alle acht gleichzeitig optimieren. Genau das ist die Lektion."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "trending-up"
  }, "4 St\xE4rken"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    icon: "trending-down"
  }, "3 Kosten"), /*#__PURE__*/React.createElement(Badge, {
    tone: "consent",
    icon: "shield-check"
  }, "Consent wird nie belohnt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)'
    }
  }, gains.map(s => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: s.label,
    label: s.label,
    value: s.value,
    tone: s.tone,
    icon: s.icon
  })), /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Kosten",
    style: {
      margin: 'var(--space-sm) 0'
    }
  }), costs.map(s => /*#__PURE__*/React.createElement(ScoreMeter, {
    key: s.label,
    label: s.label,
    value: s.value,
    tone: s.tone,
    icon: s.icon
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5xl)',
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 'var(--space-3xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Boss-Level \xB7 eines pro Kapitel",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, bosslevels.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'grid',
      gridTemplateColumns: '34px minmax(0,1fr)',
      gap: 'var(--space-md)',
      alignItems: 'center',
      padding: '13px 0',
      borderBottom: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '14px',
      fontWeight: 700,
      color: 'var(--text-faint)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, b))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "danger",
    label: "Bonusakte \xB7 gesperrt",
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(LockedPanel, {
    title: "06 \xB7 Was \xFCbrig bleibt",
    requirement: "Kapitel 05 abschliessen",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      icon: "lock-open"
    }, "Freischalten")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Irgendwann funktioniert das Werkzeug besser als du selbst. Du weisst nach zwei S\xE4tzen, wie ein Abend endet \u2014 und merkst, dass dich das nicht mehr freut. Dieses Kapitel handelt nicht von Technik.")))), /*#__PURE__*/React.createElement("section", {
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
  }, "Kapitel 03 wartet."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, "Der gr\xF6sste Fehler \xB7 14 Min \xB7 6 Entscheidungen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "gauge",
    onClick: () => go('profile')
  }, "Mein Profil"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('lesson')
  }, "Weiterlesen"))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ProfileScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  ScoreMeter,
  Card,
  Rule,
  Stamp,
  Badge,
  Icon,
  Button,
  Redacted,
  LockedPanel,
  Checkbox,
  WarningNotice,
  Tooltip
} = window.FUCKBOYDesignSystem_007b99;
function ProfileScreen({
  scores,
  transfer,
  toggleTransfer,
  flags,
  go
}) {
  const [tab, setTab] = React.useState('score');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, "Pers\xF6nliche Akte \xB7 ", /*#__PURE__*/React.createElement(Redacted, {
    width: "7ch"
  }, "P. Bischof")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, "Dein Fuckboy-Profil")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '64px',
      fontWeight: 700,
      lineHeight: 0.9,
      color: 'var(--paper-100)'
    }
  }, "62"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '6px'
    }
  }, "Fuckboy-Level"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 'var(--space-3xl)'
    },
    items: [{
      value: 'score',
      label: 'Score',
      icon: 'gauge'
    }, {
      value: 'flags',
      label: 'Red Flags',
      icon: 'flag',
      count: flags.length
    }, {
      value: 'transfer',
      label: 'Transferplan',
      icon: 'target',
      count: transfer.filter(t => !t.done).length
    }, {
      value: 'akte',
      label: 'Akte',
      icon: 'file-text'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, tab === 'score' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 'var(--space-4xl)',
      rowGap: 'var(--space-2xl)'
    }
  }, scores.map(s => /*#__PURE__*/React.createElement(ScoreMeter, _extends({
    key: s.label
  }, s)))), /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "moral",
    title: "Ein hoher Fuckboy-Level ist kein Ergebnis, auf das man stolz sein muss.",
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, "Dein Charme ist hoch, deine Ehrlichkeit mittel, dein Kollateralschaden steigt. Das ist genau das Muster, das kurzfristig funktioniert und langfristig dazu f\xFChrt, dass N\xE4he schwerer wird. Du entscheidest, welche Zahl du optimierst.")) : null, tab === 'flags' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-md)'
    }
  }, flags.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      alignItems: 'flex-start',
      padding: 'var(--space-lg)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--rule-faint)',
      borderLeft: '2px solid var(--bordeaux-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bordeaux-400)',
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flag",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, t)))) : null, tab === 'transfer' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-3xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '2px'
    }
  }, transfer.map((t, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: i,
    label: t.text,
    checked: t.done,
    onChange: () => toggleTransfer(i)
  }))), /*#__PURE__*/React.createElement(LockedPanel, {
    title: "Pers\xF6nlicher Transferplan als PDF",
    requirement: "Alle 5 \xDCbungen abschliessen",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "sm",
      icon: "lock-open"
    }, "Freischalten")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Vier Wochen, ein Fokus pro Woche: Erwartung senken, Absicht sagen, Nein annehmen, zuh\xF6ren statt warten."))) : null, tab === 'akte' ? /*#__PURE__*/React.createElement(Card, {
    surface: "paper",
    padding: "lg",
    style: {
      maxWidth: 'var(--width-reader)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--rule-ink)',
      paddingBottom: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-600)'
    }
  }, "Abschlussprotokoll \xB7 Akte FB-XX"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "3 von 6 Kapiteln")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--ink-700)',
      marginTop: 'var(--space-lg)'
    }
  }, "Der Teilnehmer kommuniziert direkt und wird als charmant wahrgenommen. Unter Druck weicht er auf ", /*#__PURE__*/React.createElement(Redacted, {
    tone: "paper"
  }, "Mehrdeutigkeit"), " aus, statt seine Absicht zu benennen. Grenzen erkennt er zuverl\xE4ssig; er akzeptiert ein Nein ohne Nachverhandlung."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: 'var(--ink-700)',
      marginTop: 'var(--space-md)'
    }
  }, "Empfehlung: Ehrlichkeit vor Reichweite. Der kleinere Pool ist der billigere Preis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-xl)',
      paddingTop: 'var(--space-lg)',
      borderTop: '1px solid var(--rule-ink-faint)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    tone: "classified",
    rotate: -2
  }, "Vertraulich"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "file-text",
    style: {
      color: 'var(--ink-800)',
      boxShadow: 'inset 0 0 0 1px var(--rule-ink-strong)'
    }
  }, "Exportieren"))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-4xl)',
      paddingTop: 'var(--space-2xl)',
      borderTop: '1px solid var(--rule-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    tone: "consent",
    icon: "shield-check"
  }, "Consent-Kompetenz 92 \xB7 dein bester Wert"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-left",
    onClick: () => go('index')
  }, "Zur\xFCck zum Index")));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/ScenarioScreen.jsx
try { (() => {
const {
  Card,
  Rule,
  ChoiceOption,
  Button,
  Stamp,
  Icon,
  Toast,
  WarningNotice,
  Badge
} = window.FUCKBOYDesignSystem_007b99;
const SIGNAL_COLOR = {
  consent: 'var(--wire-500)',
  caution: 'var(--amber-500)',
  danger: 'var(--bordeaux-400)'
};
function ScenarioScreen({
  scenario,
  go,
  onCommit
}) {
  const [picked, setPicked] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);
  const chosen = scenario.options.find(o => o.letter === picked);
  const commit = () => {
    setRevealed(true);
    if (onCommit && chosen) onCommit(chosen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 'var(--space-4xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--bordeaux-400)'
    }
  }, scenario.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '54px',
      fontWeight: 700,
      lineHeight: 0.94,
      letterSpacing: '-0.02em',
      color: 'var(--paper-100)',
      marginTop: 'var(--space-lg)'
    }
  }, scenario.title), /*#__PURE__*/React.createElement(Card, {
    surface: "sunken",
    padding: "md",
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 'var(--space-md)'
    }
  }, "Situation"), scenario.brief.map((b, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '15px',
      lineHeight: 1.7,
      color: i === scenario.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
      marginTop: i ? '10px' : 0
    }
  }, b))), /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: revealed ? 'Deine Entscheidung · Wirkung' : 'Was machst du?',
    style: {
      margin: 'var(--space-3xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-md)'
    }
  }, scenario.options.map(o => /*#__PURE__*/React.createElement(ChoiceOption, {
    key: o.letter,
    letter: o.letter,
    label: o.label,
    quote: o.quote,
    outcome: o.outcome,
    feedback: o.feedback,
    selected: picked === o.letter,
    revealed: revealed,
    disabled: revealed,
    onClick: () => setPicked(o.letter)
  }))), revealed ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(WarningNotice, {
    tone: "consent",
    title: "Egal welche Variante: das Nein beendet alles."
  }, "Wenn sie in diesem Moment ausweicht, das Thema wechselt oder \u201Evielleicht\u201C sagt, ist Schluss. Nicht sp\xE4ter nochmal probieren. Nicht charmant nachfassen. Thema vom Tisch \u2014 dauerhaft.")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    tone: revealed ? 'moral' : 'classified'
  }, revealed ? 'Keine Option ist kostenlos' : 'Antworten sind nicht richtig oder falsch'), revealed ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "message-square",
    onClick: () => go('chat')
  }, "Chat-Simulation") : /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    disabled: !picked,
    onClick: commit
  }, picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion'))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-lg)',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "subtle",
    label: "Signal-Lesung",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, scenario.signals.map((s, i) => /*#__PURE__*/React.createElement("div", {
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
      color: SIGNAL_COLOR[s.tone],
      marginTop: '1px'
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
  }, s.text))))), revealed && chosen ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    label: "Score-\xC4nderung",
    style: {
      marginBottom: 'var(--space-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-sm)'
    }
  }, chosen.deltas.map(d => /*#__PURE__*/React.createElement(Toast, {
    key: d.label,
    tone: d.tone,
    title: d.label,
    delta: d.delta
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      marginTop: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: chosen.outcome === 'good' ? 'consent' : chosen.outcome === 'bad' ? 'danger' : 'caution',
    icon: chosen.outcome === 'good' ? 'shield-check' : chosen.outcome === 'bad' ? 'ban' : 'triangle-alert'
  }, chosen.outcome === 'good' ? 'Souverän' : chosen.outcome === 'bad' ? 'Grenze übergangen' : 'Wirksam, aber teuer'))) : null));
}
Object.assign(window, {
  ScenarioScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/ScenarioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/elearning/Shell.jsx
try { (() => {
const {
  Badge,
  IconButton,
  Rule,
  Icon,
  ProgressRail,
  Stamp
} = window.FUCKBOYDesignSystem_007b99;
function Wordmark({
  size = 26
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
  }, "FUCKBOY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '9px',
      fontWeight: 600,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '5px'
    }
  }, "Das verbotene Werkzeug"));
}
function Rail({
  chapters,
  screen,
  go,
  level
}) {
  const steps = chapters.map(c => ({
    label: c.number + ' ' + (c.railLabel || c.title),
    locked: c.state === 'locked'
  }));
  const NAV = [{
    id: 'overview',
    label: 'Übersicht',
    icon: 'scale'
  }, {
    id: 'index',
    label: 'Akten-Index',
    icon: 'file-text'
  }, {
    id: 'lesson',
    label: 'Kapitel 03',
    icon: 'quote'
  }, {
    id: 'scenario',
    label: 'Boss-Level',
    icon: 'split'
  }, {
    id: 'chat',
    label: 'Chat-Simulation',
    icon: 'message-square'
  }, {
    id: 'profile',
    label: 'Mein Profil',
    icon: 'gauge'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--width-rail)',
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-void)',
      borderRight: '1px solid var(--rule-faint)',
      padding: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('cover'),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement(Rule, {
    tone: "faint",
    style: {
      margin: 'var(--space-2xl) 0 var(--space-xl)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, NAV.map(n => {
    const active = screen === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => go(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: '10px 12px',
        background: active ? 'rgba(245,242,235,.06)' : 'transparent',
        borderLeft: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'),
        border: 0,
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderLeftColor: active ? 'var(--paper-100)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-condensed)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 15
    }), n.label);
  })), /*#__PURE__*/React.createElement(Rule, {
    tone: "faint",
    label: "Fortschritt",
    style: {
      margin: 'var(--space-2xl) 0 var(--space-lg)'
    }
  }), /*#__PURE__*/React.createElement(ProgressRail, {
    orientation: "vertical",
    steps: steps,
    current: 2,
    onSelect: () => go('lesson')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
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
  }, "Fuckboy-Level"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: '22px',
      fontWeight: 700,
      color: 'var(--paper-100)'
    }
  }, level)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--score-track)',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: level + '%',
      background: 'var(--paper-300)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      lineHeight: 1.4,
      color: 'var(--text-faint)',
      marginTop: '9px'
    }
  }, "Hoch ist nicht gut. Hoch ist nur hoch.")));
}
function TopBar({
  crumb,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--height-topbar)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)',
      padding: '0 var(--gutter-page)',
      borderBottom: '1px solid var(--rule-faint)',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-md)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      fontWeight: 700,
      letterSpacing: '0.24em',
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
  }, right, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Suchen",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "Mehr",
    size: "sm"
  })));
}
function Shell({
  chapters,
  screen,
  go,
  level,
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
    level: level
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    crumb: crumb,
    title: title,
    right: right
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: 'var(--space-4xl) var(--gutter-page-wide) var(--space-6xl)'
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

// ui_kits/elearning/data.js
try { (() => {
window.FBData = {
  chapters: [{
    number: '01',
    railLabel: 'Mindset',
    title: 'Das Mindset',
    duration: '12 Min',
    decisions: 4,
    state: 'done',
    summary: 'Warum Wirkung, Auftreten und Erwartungsmanagement mehr entscheiden als dein Gesicht.'
  }, {
    number: '02',
    railLabel: 'Consent',
    title: 'Consent ist die Regel, nicht das Kleingedruckte',
    duration: '16 Min',
    decisions: 7,
    state: 'done',
    summary: 'Signale lesen, Grenzen früh erkennen, ein Nein annehmen — ohne zu verhandeln.'
  }, {
    number: '03',
    railLabel: 'Der grösste Fehler',
    title: 'Der grösste Fehler',
    duration: '14 Min',
    decisions: 6,
    state: 'available',
    summary: 'Warum das Bedürfnis nach Sex der schnellste Weg ist, ihn nicht zu haben.'
  }, {
    number: '04',
    railLabel: 'Ablehnung',
    title: 'Warum will sie dich nicht?',
    duration: '11 Min',
    decisions: 5,
    state: 'locked',
    summary: 'Ablehnung ohne Ego. Was mit dir zu tun hat — und was nicht.'
  }, {
    number: '05',
    railLabel: 'Beziehung',
    title: 'Thema Beziehung',
    duration: '18 Min',
    decisions: 8,
    state: 'locked',
    summary: 'Der unbequemste Teil: was du sagst, wenn du etwas Unverbindliches willst.'
  }, {
    number: '06',
    railLabel: 'Was übrig bleibt',
    title: 'Was übrig bleibt',
    duration: '9 Min',
    decisions: 3,
    state: 'locked',
    bonus: true,
    summary: 'Die Bonusakte. Was das Werkzeug mit dem macht, der es benutzt.'
  }],
  scores: [{
    label: 'Charme',
    value: 84,
    tone: 'gain',
    icon: 'flame'
  }, {
    label: 'Authentizität',
    value: 71,
    tone: 'gain',
    icon: 'quote'
  }, {
    label: 'Selbstkontrolle',
    value: 66,
    tone: 'gain',
    icon: 'timer'
  }, {
    label: 'Consent-Kompetenz',
    value: 92,
    tone: 'consent',
    icon: 'shield-check'
  }, {
    label: 'Ehrlichkeit',
    value: 58,
    tone: 'neutral',
    icon: 'scale'
  }, {
    label: 'Erwartungsdruck',
    value: 38,
    tone: 'loss',
    icon: 'gauge',
    note: 'Du wartest im Gespräch oft schon auf das Ergebnis.'
  }, {
    label: 'Kollateralschaden',
    value: 31,
    tone: 'loss',
    icon: 'heart-crack',
    note: 'Zwei Personen rechnen mit mehr, als du geben willst.'
  }, {
    label: 'Fuckboy-Level',
    value: 62,
    tone: 'neutral',
    icon: 'skull',
    note: 'Kein Ziel. Nur eine Messung.'
  }],
  scenario: {
    kicker: 'Kapitel 03 · Boss-Level',
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
      outcome: 'good',
      quote: '„Ich sag dir mal was Direktes: ich würde dich gern küssen. Und ein Nein ist völlig okay.“',
      feedback: 'Klar, respektvoll, druckfrei. Sie kann echt entscheiden — und genau das macht die Situation sicher. Wenn sie nein sagt, ist das Thema vom Tisch.',
      deltas: [{
        label: 'Authentizität',
        delta: '+6',
        tone: 'gain'
      }, {
        label: 'Erwartungsdruck',
        delta: '−4',
        tone: 'gain'
      }]
    }, {
      letter: 'B',
      label: 'Du machst',
      outcome: 'bad',
      quote: 'Du rutschst nochmal näher und legst die Hand auf ihr Knie. Reden kann man später.',
      feedback: 'Sie hat sich vorher schon zurückgelehnt. Das war ein Signal, kein Zufall. Körperlich vorgehen, ohne die Ablehnung zu lesen, erzeugt Druck — und übergeht ihre Grenze.',
      deltas: [{
        label: 'Consent-Kompetenz',
        delta: '−12',
        tone: 'loss'
      }, {
        label: 'Kollateralschaden',
        delta: '+8',
        tone: 'loss'
      }]
    }, {
      letter: 'C',
      label: 'Du bleibst',
      outcome: 'costly',
      quote: 'Du bleibst maximal nett, machst Komplimente und hoffst, dass sie irgendwann anfängt.',
      feedback: 'Funktioniert manchmal. Aber du versteckst dein Interesse hinter Freundlichkeit und schiebst die Entscheidung ihr zu. Das ist kein Respekt, das ist Auslagern.',
      deltas: [{
        label: 'Charme',
        delta: '+2',
        tone: 'gain'
      }, {
        label: 'Authentizität',
        delta: '−5',
        tone: 'loss'
      }]
    }]
  },
  chat: {
    profile: {
      name: 'M.',
      age: 27,
      meta: '4 km entfernt',
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
  },
  goals: {
    '01': ['Erkennen, dass Wirkung aus Kommunikation entsteht, nicht aus Aussehen.', 'Eigene Stärken benennen und als Gesprächsstil nutzen.', 'Absichten aussprechen statt hinter Freundlichkeit verstecken.'],
    '02': ['Verbale und nonverbale Grenzsignale zuverlässig lesen.', 'Ein Nein annehmen, ohne zu diskutieren oder zu verhandeln.', 'Consent von Technik unterscheiden — und nie als Umweg benutzen.'],
    '03': ['Verstehen, warum Bedürfnis Druck erzeugt.', 'Ein Angebot machen, ohne ein Ergebnis zu erwarten.', 'Eine Absage als Datenpunkt behandeln, nicht als Niederlage.'],
    '04': ['Ablehnung entkoppeln von Selbstwert.', 'Gründe akzeptieren, die nichts mit dir zu tun haben.', 'Ein Date respektvoll und ehrlich beenden.'],
    '05': ['Die eigene Absicht in einem Satz formulieren.', 'Fünf Grade von Ehrlichkeit unterscheiden — von offen bis Täuschung.', 'Den Preis von Mehrdeutigkeit benennen.'],
    '06': ['Langfristige Kosten des Werkzeugs erkennen.', 'Merkmale bemerken, die Nähe erschweren.', 'Eine bewusste Entscheidung über den weiteren Weg treffen.']
  },
  formats: [{
    icon: 'split',
    title: 'Interaktive Entscheidungen',
    text: 'Realistische Situationen, mehrere plausible Reaktionen. Nichts ist offensichtlich richtig — du siehst nur die wahrscheinliche Wirkung.',
    count: '33 Entscheidungen'
  }, {
    icon: 'gauge',
    title: 'Konsequenz-Simulation',
    text: 'Jede Wahl verschiebt Vertrauen, Anziehung, Druck, Glaubwürdigkeit und das Risiko falscher Erwartungen.',
    count: '8 Dimensionen'
  }, {
    icon: 'message-square',
    title: 'Chat- & Dating-Simulationen',
    text: 'Profilkarten, Threads, erste Nachrichten. Du formulierst, das Gegenüber reagiert plausibel.',
    count: '7 Simulationen'
  }, {
    icon: 'flag',
    title: 'Red-Flag-Momente',
    text: 'Problematische Situationen erkennen, bevor sie eskalieren — bei ihr und bei dir selbst.',
    count: '7 Signale'
  }, {
    icon: 'trophy',
    title: 'Boss-Level',
    text: 'Am Kapitelende eine komplexe Lage, in der mehrere Prinzipien gleichzeitig gelten.',
    count: '6 Level'
  }, {
    icon: 'target',
    title: 'Real-Life-Übungen',
    text: 'Transferaufgaben für ausserhalb des Kurses. Niemand kontrolliert sie — deshalb funktionieren sie nur ehrlich.',
    count: '5 Übungen'
  }],
  bosslevels: ['Ein gutes Date, aber unklare Signale', 'Starke Anziehung bei unterschiedlichen Beziehungswünschen', 'Sie möchte mit nach Hause, hat aber deutlich zu viel getrunken', 'Nach dem Sex entstehen unterschiedliche Erwartungen', 'Eine Absage verletzt das eigene Ego', 'Der Erzähler empfiehlt eine wirksame, aber unehrliche Aussage'],
  transfer: [{
    text: 'Formuliere deine aktuelle Datingabsicht in einem ehrlichen Satz.',
    done: true
  }, {
    text: 'Führe ein Gespräch, ohne ein bestimmtes Ergebnis zu erwarten.',
    done: true
  }, {
    text: 'Definiere drei nonverbale Signale, bei denen du sofort Abstand nimmst.',
    done: false
  }, {
    text: 'Übe, eine Absage anzunehmen — ohne Nachfrage, ohne Erklärung.',
    done: false
  }, {
    text: 'Erkenne eine Situation, in der du übertrieben freundlich warst, statt dein Interesse zu sagen.',
    done: false
  }],
  flags: ['Sie antwortet nur noch sehr kurz.', 'Sie weicht Berührungen aus.', 'Sie lacht aus Unsicherheit.', 'Sie sagt vielleicht, meint aber sichtbar nein.', 'Sie hat viel Alkohol konsumiert.', 'Du verschweigst bewusst deine Absichten.', 'Du versuchst, ein Nein umzuinterpretieren.']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/elearning/data.js", error: String((e && e.message) || e) }); }

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
