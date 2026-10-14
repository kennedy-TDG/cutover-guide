/* @ds-bundle: {"format":4,"namespace":"ACMEDesignSystem_e7c578","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Banner","sourcePath":"components/core/Banner.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CalloutBox","sourcePath":"components/core/CalloutBox.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checklist","sourcePath":"components/core/Checklist.jsx"},{"name":"DoBox","sourcePath":"components/core/DoBox.jsx"},{"name":"IconCards","sourcePath":"components/core/IconCards.jsx"},{"name":"IconList","sourcePath":"components/core/IconList.jsx"},{"name":"InnovationLine","sourcePath":"components/core/InnovationLine.jsx"},{"name":"NumberedCards","sourcePath":"components/core/NumberedCards.jsx"},{"name":"PhaseChecklist","sourcePath":"components/core/PhaseChecklist.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f61b1935e97b","components/core/Banner.jsx":"6e3c75c1aedc","components/core/Button.jsx":"43a59fd0fa99","components/core/CalloutBox.jsx":"056b08ea6881","components/core/Card.jsx":"c78e5d2fa2a3","components/core/Checklist.jsx":"b0775e72be87","components/core/DoBox.jsx":"8a34693cb413","components/core/IconCards.jsx":"dc6a300c4dd4","components/core/IconList.jsx":"2d2eb22f9e1a","components/core/InnovationLine.jsx":"c91745ecab56","components/core/NumberedCards.jsx":"beb5e2684860","components/core/PhaseChecklist.jsx":"2ad8af632ce5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ACMEDesignSystem_e7c578 = window.ACMEDesignSystem_e7c578 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * ACME Badge — compact status/label indicator.
 * Colors follow the Innovation Line family: teal, green, orange, purple, neutral.
 */
function Badge({
  children,
  color = 'teal',
  size = 'md',
  dot = false
}) {
  const colors = {
    teal: {
      bg: 'var(--color-teal-100)',
      text: 'var(--color-teal-800)',
      dot: 'var(--color-teal-500)'
    },
    green: {
      bg: 'var(--color-green-300)',
      text: 'var(--color-green-900)',
      dot: 'var(--color-green-700)'
    },
    orange: {
      bg: 'var(--color-orange-100)',
      text: 'var(--color-orange-800)',
      dot: 'var(--color-orange-600)'
    },
    purple: {
      bg: 'var(--color-purple-100)',
      text: 'var(--color-purple-800)',
      dot: 'var(--color-purple-600)'
    },
    neutral: {
      bg: 'var(--color-neutral-100)',
      text: 'var(--color-neutral-700)',
      dot: 'var(--color-neutral-500)'
    },
    dark: {
      bg: 'var(--color-teal-800)',
      text: '#ffffff',
      dot: 'rgba(255,255,255,0.6)'
    }
  };
  const sizes = {
    sm: {
      fontSize: '0.6875rem',
      padding: '2px 7px'
    },
    md: {
      fontSize: '0.75rem',
      padding: '3px 9px'
    },
    lg: {
      fontSize: '0.8125rem',
      padding: '4px 11px'
    }
  };
  const c = colors[color] || colors.teal;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: c.bg,
      color: c.text,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--font-weight-semibold)',
      borderRadius: 'var(--radius-pill)',
      lineHeight: '1.4',
      whiteSpace: 'nowrap',
      ...s
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: c.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Banner.jsx
try { (() => {
/**
 * ACME Banner — wide document/presentation header bar with logo, title, and optional icon.
 */
function Banner({
  title,
  subtitle,
  label,
  logoSrc,
  iconSrc,
  color = 'teal',
  dark = true
}) {
  const colors = {
    teal: {
      bg: 'var(--color-teal-800)',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.85)',
      label: 'rgba(255,255,255,0.65)'
    },
    green: {
      bg: 'var(--color-green-800)',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.85)',
      label: 'rgba(255,255,255,0.65)'
    },
    orange: {
      bg: 'var(--color-orange-800)',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.85)',
      label: 'rgba(255,255,255,0.65)'
    },
    purple: {
      bg: 'var(--color-purple-800)',
      text: '#ffffff',
      sub: 'rgba(255,255,255,0.85)',
      label: 'rgba(255,255,255,0.65)'
    },
    light: {
      bg: 'var(--color-teal-100)',
      text: 'var(--color-teal-900)',
      sub: 'var(--color-teal-700)',
      label: 'var(--color-teal-600)'
    }
  };
  const c = colors[color] || colors.teal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: c.bg,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "ACME",
    style: {
      height: '36px',
      marginBottom: '12px',
      display: 'block',
      filter: dark ? 'brightness(10)' : undefined
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: 'var(--letter-spacing-caps)',
      textTransform: 'uppercase',
      color: c.label,
      marginBottom: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.625rem',
      fontWeight: '700',
      color: c.text,
      lineHeight: '1.2',
      marginBottom: subtitle ? '6px' : 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.9375rem',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: c.sub
    }
  }, subtitle)), iconSrc && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      height: '72px',
      opacity: 0.9
    }
  })));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * ACME Button — primary interactive element.
 * Variants: primary, secondary, ghost, danger
 * Sizes: sm, md, lg
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--font-weight-semibold)',
    letterSpacing: '0.01em',
    border: '2px solid transparent',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: 'background 0.15s, box-shadow 0.15s, opacity 0.15s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined
  };
  const sizes = {
    sm: {
      fontSize: '0.8125rem',
      padding: '6px 14px',
      lineHeight: '1.4'
    },
    md: {
      fontSize: '0.9375rem',
      padding: '9px 20px',
      lineHeight: '1.4'
    },
    lg: {
      fontSize: '1rem',
      padding: '12px 28px',
      lineHeight: '1.4'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-teal-800)',
      color: '#fff',
      borderColor: 'var(--color-teal-800)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-teal-800)',
      borderColor: 'var(--color-teal-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-teal-700)',
      borderColor: 'transparent'
    },
    danger: {
      background: 'var(--color-orange-800)',
      color: '#fff',
      borderColor: 'var(--color-orange-800)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, icon && iconPosition === 'left' && icon, children, icon && iconPosition === 'right' && icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CalloutBox.jsx
try { (() => {
/**
 * ACME CalloutBox — used in job aids, resource guides, and decks.
 * Types: info (default), warning, check, general, note, purple
 * Full border all around; icons are inline SVG matching the brand guide.
 */

const ICONS = {
  info: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "9",
    stroke: color,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.25",
    y: "8.5",
    width: "1.5",
    height: "6",
    rx: "0.75",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6",
    r: "1",
    fill: color
  })),
  warning: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2.5L18.5 17H1.5L10 2.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.25",
    y: "8",
    width: "1.5",
    height: "5",
    rx: "0.75",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "14.5",
    r: "1",
    fill: color
  })),
  check: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "16",
    height: "16",
    rx: "2",
    stroke: color,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10L8.5 13L14.5 7",
    stroke: color,
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  general: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "9",
    stroke: color,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.25",
    y: "8.5",
    width: "1.5",
    height: "6",
    rx: "0.75",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6",
    r: "1",
    fill: color
  })),
  note: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "2",
    width: "12",
    height: "16",
    rx: "1.5",
    stroke: color,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6H13M7 9.5H13M7 13H10.5",
    stroke: color,
    strokeWidth: "1.25",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "1",
    width: "6",
    height: "2.5",
    rx: "1",
    stroke: color,
    strokeWidth: "1.25",
    fill: "none"
  })),
  purple: color => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "9",
    stroke: color,
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.25",
    y: "8.5",
    width: "1.5",
    height: "6",
    rx: "0.75",
    fill: color
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6",
    r: "1",
    fill: color
  }))
};
function CalloutBox({
  children,
  type = 'info',
  title
}) {
  const types = {
    info: {
      bg: 'var(--callout-info-bg)',
      border: 'var(--callout-info-border)',
      iconColor: 'var(--callout-info-icon-color)'
    },
    warning: {
      bg: 'var(--callout-warning-bg)',
      border: 'var(--callout-warning-border)',
      iconColor: 'var(--callout-warning-icon-color)'
    },
    check: {
      bg: 'var(--callout-check-bg)',
      border: 'var(--callout-check-border)',
      iconColor: 'var(--callout-check-icon-color)'
    },
    general: {
      bg: 'var(--callout-general-bg)',
      border: 'var(--callout-general-border)',
      iconColor: 'var(--callout-general-icon-color)'
    },
    note: {
      bg: 'var(--callout-note-bg)',
      border: 'var(--callout-note-border)',
      iconColor: 'var(--callout-note-icon-color)'
    },
    purple: {
      bg: 'var(--callout-purple-bg)',
      border: 'var(--callout-purple-border)',
      iconColor: 'var(--callout-purple-icon-color)'
    }
  };
  const t = types[type] || types.info;
  const iconKey = type in ICONS ? type : 'info';

  // Resolve CSS var to actual color for SVG stroke (SVG can't read CSS vars)
  const iconColors = {
    info: '#326DC2',
    warning: '#C0392B',
    check: '#43884D',
    general: '#6B7280',
    note: '#6B7280',
    purple: '#7C3AED'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      border: `var(--callout-border-width, 1px) solid ${t.border}`,
      borderRadius: 'var(--callout-border-radius)',
      padding: 'var(--callout-padding)',
      display: 'flex',
      gap: 'var(--callout-gap)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--callout-font-size)',
      color: '#374151',
      lineHeight: 'var(--callout-line-height)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      lineHeight: 0,
      paddingTop: '1px'
    }
  }, ICONS[iconKey](iconColors[iconKey])), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--callout-title-weight)',
      marginBottom: '1px',
      color: '#111827'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#000000'
    }
  }, children)));
}
Object.assign(__ds_scope, { CalloutBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CalloutBox.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * ACME Card — clean white surface with subtle shadow and optional header accent.
 */
function Card({
  children,
  accent,
  padding = 'md',
  shadow = true,
  border = false,
  borderRadius = 'lg',
  header,
  footer
}) {
  const paddings = {
    sm: '12px',
    md: '20px',
    lg: '28px 32px'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const accents = {
    teal: 'var(--color-teal-800)',
    green: 'var(--color-green-800)',
    orange: 'var(--color-orange-800)',
    purple: 'var(--color-purple-800)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg-white)',
      borderRadius: radii[borderRadius] || radii.lg,
      boxShadow: shadow ? 'var(--shadow-card)' : 'none',
      border: border ? '1px solid var(--color-border-default)' : 'none',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, accent && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '4px',
      background: accents[accent] || accent
    }
  }), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: paddings[padding] || paddings.md,
      borderBottom: '1px solid var(--color-border-default)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: 'var(--font-size-h3)',
      color: 'var(--color-neutral-900)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: paddings[padding] || paddings.md,
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `12px ${typeof paddings[padding] === 'string' ? paddings[padding].split(' ').pop() : '20px'}`,
      borderTop: '1px solid var(--color-border-default)',
      background: 'var(--color-neutral-50)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checklist.jsx
try { (() => {
/**
 * ACME Checklist — vertical, interactive, phase-grouped checklist.
 *
 * Distinct from PhaseChecklist (horizontal table layout).
 * This component renders phases stacked vertically; each phase has a
 * colored section band drawn from the ACME Innovation Line palette,
 * followed by togglable checkbox rows.
 *
 * Color auto-assignment order: teal → green → orange → purple (cycles).
 *
 * Uses Tabler Icons for icon props — ensure the Tabler CDN is loaded
 * in the consuming page:
 *   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
 */

const PALETTE = {
  teal: {
    band: '#BFD7FB',
    bandText: '#1356B8',
    check: '#326DC2'
  },
  green: {
    band: '#CDE675',
    bandText: '#3a5a00',
    check: '#5F646A'
  },
  orange: {
    band: '#FFAC64',
    bandText: '#7a3000',
    check: '#5F646A'
  },
  purple: {
    band: '#EDBCFD',
    bandText: '#6b1f8a',
    check: '#5F646A'
  }
};
const COLOR_ORDER = ['teal', 'green', 'orange', 'purple'];
function CheckSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 10 8",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4L3.5 6.5L9 1",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Checklist({
  title = 'Checklist',
  subtitle,
  icon,
  phases = [],
  onComplete
}) {
  const [checked, setChecked] = React.useState({});
  function toggle(phaseIdx, itemIdx) {
    const key = `${phaseIdx}-${itemIdx}`;
    setChecked(prev => {
      const next = {
        ...prev,
        [key]: !prev[key]
      };
      if (onComplete) {
        const total = phases.reduce((s, p) => s + (p.items || []).length, 0);
        const doneCount = Object.values(next).filter(Boolean).length;
        onComplete(doneCount, total);
      }
      return next;
    });
  }
  const total = phases.reduce((s, p) => s + (p.items || []).length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body, Inter, Arial, sans-serif)',
      border: '1px solid var(--color-border-tertiary, #D3E2FA)',
      borderRadius: 'var(--radius-md, 3px)',
      overflow: 'hidden',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-teal-900, #326DC2)',
      padding: '20px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: '28px',
      color: 'rgba(255,255,255,0.85)',
      flexShrink: 0
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.04em',
      lineHeight: 1.2
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.6)',
      marginTop: '4px'
    }
  }, subtitle)), total > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.75)',
      background: 'rgba(255,255,255,0.12)',
      borderRadius: '20px',
      padding: '3px 10px',
      flexShrink: 0,
      letterSpacing: '0.04em'
    }
  }, done, "/", total))), phases.map((phase, pi) => {
    const colorKey = phase.color || COLOR_ORDER[pi % 4];
    const pal = PALETTE[colorKey] || PALETTE.teal;
    const items = phase.items || [];
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: pi
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: pal.band,
        padding: '9px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '9px'
      }
    }, phase.icon && /*#__PURE__*/React.createElement("i", {
      className: phase.icon,
      style: {
        fontSize: '20px',
        color: pal.bandText
      },
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        color: pal.bandText
      }
    }, phase.label)), items.map((item, ii) => {
      const key = `${pi}-${ii}`;
      const isChecked = !!checked[key];
      const isLast = ii === items.length - 1;
      const label = typeof item === 'string' ? item : item.label;
      return /*#__PURE__*/React.createElement("div", {
        key: ii,
        role: "checkbox",
        "aria-checked": isChecked,
        tabIndex: 0,
        onClick: () => toggle(pi, ii),
        onKeyDown: e => (e.key === ' ' || e.key === 'Enter') && toggle(pi, ii),
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px 20px',
          borderBottom: isLast ? 'none' : '1px solid var(--color-border-tertiary, #D3E2FA)',
          cursor: 'pointer',
          background: isChecked ? '#f7fafa' : '#fff',
          transition: 'background 0.1s',
          outline: 'none'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '18px',
          height: '18px',
          borderRadius: '3px',
          flexShrink: 0,
          marginTop: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: isChecked ? 'none' : `2px solid ${pal.check}`,
          background: isChecked ? pal.check : 'transparent',
          transition: 'all 0.15s'
        }
      }, isChecked && /*#__PURE__*/React.createElement(CheckSVG, null)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '15px',
          fontWeight: 500,
          color: isChecked ? 'var(--color-text-disabled, #9ca3af)' : 'var(--color-text-primary, #111827)',
          lineHeight: 1.4,
          textDecoration: isChecked ? 'line-through' : 'none',
          transition: 'color 0.15s'
        }
      }, label));
    }));
  }));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/core/DoBox.jsx
try { (() => {
/**
 * ACME DoBox — Side-by-side Do/Don't comparison panel.
 * Used in job aids, resource guides, guidelines, and training documents.
 * Do column: ACME Green (#5F646A) | Don't column: ACME Orange Dark (#B83F0F)
 */

const DO_COLOR = '#5F646A';
const DONT_COLOR = '#B83F0F';
function CheckIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10.5L8 14.5L16 6",
    stroke: "white",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function XIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5",
    stroke: "white",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }));
}
function Column({
  title,
  items,
  color,
  Icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      background: '#ffffff',
      border: `2px solid ${color}`,
      borderRadius: '8px',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '22px',
      fontWeight: 800,
      color: color,
      lineHeight: 1,
      fontFamily: 'var(--font-body)'
    }
  }, title)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.25rem',
      listStyle: 'disc',
      fontSize: '0.9375rem',
      lineHeight: 1.35,
      color: '#000000',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, item))));
}
function DoBox({
  doItems = [],
  dontItems = [],
  doTitle = 'Do',
  dontTitle = "Don't"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'stretch',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Column, {
    title: doTitle,
    items: doItems,
    color: DO_COLOR,
    Icon: CheckIcon
  }), /*#__PURE__*/React.createElement(Column, {
    title: dontTitle,
    items: dontItems,
    color: DONT_COLOR,
    Icon: XIcon
  }));
}
Object.assign(__ds_scope, { DoBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DoBox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCards.jsx
try { (() => {
/**
 * ACME IconCards — a horizontal row of icon + title + body cards.
 * Used in job aids, resource guides, and training slides to present
 * 2–4 parallel concepts side by side.
 *
 * Default: 3 equal columns, center-aligned content.
 */

function IconCards({
  items = [],
  columns,
  align = 'center',
  iconSize = 56
}) {
  const cols = columns || items.length || 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: '16px',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#ffffff',
      border: '1px solid var(--color-neutral-200)',
      borderRadius: '12px',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      boxSizing: 'border-box'
    }
  }, item.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: item.iconSrc,
    alt: "",
    style: {
      width: item.iconSize || iconSize,
      height: item.iconSize || iconSize,
      objectFit: 'contain',
      marginBottom: '14px',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 700,
      color: 'var(--color-teal-900)',
      lineHeight: 1.25,
      marginBottom: '8px'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--color-neutral-900)',
      lineHeight: 1.55
    }
  }, item.body))));
}
Object.assign(__ds_scope, { IconCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCards.jsx", error: String((e && e.message) || e) }); }

// components/core/IconList.jsx
try { (() => {
/**
 * ACME IconList — a vertical stack of icon + title + body rows with dividers.
 * No outer border or background — the list floats on whatever surface it sits on.
 * Used in job aids and resource guides for task lists, role summaries, and step overviews.
 */

function IconList({
  items = [],
  iconBg = 'var(--color-teal-100)',
  iconSize = 34,
  dividers = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '8px',
      background: item.iconBg || iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, item.iconSrc && /*#__PURE__*/React.createElement("img", {
    src: item.iconSrc,
    alt: "",
    style: {
      width: item.iconSize || iconSize,
      height: item.iconSize || iconSize,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      color: 'var(--color-neutral-900)',
      lineHeight: 1.3,
      marginBottom: '4px'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--color-neutral-900)',
      lineHeight: 1.55
    }
  }, item.body))), dividers && i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: 'var(--color-neutral-200)'
    }
  }))));
}
Object.assign(__ds_scope, { IconList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconList.jsx", error: String((e && e.message) || e) }); }

// components/core/InnovationLine.jsx
try { (() => {
/**
 * ACME InnovationLine — the brand's four-color horizontal accent stripe.
 * Always rendered Teal → Green → Purple → Orange.
 */
function InnovationLine({
  height = 'thin',
  className,
  style
}) {
  const heights = {
    thin: '5px',
    thick: '10px',
    rule: '2px'
  };
  const h = heights[height] || height;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: h,
      borderRadius: '2px',
      overflow: 'hidden',
      ...style
    },
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--color-innovation-4)'
    }
  }));
}
Object.assign(__ds_scope, { InnovationLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InnovationLine.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberedCards.jsx
try { (() => {
/**
 * ACME NumberedCards — a grid of numbered step/phase cards.
 *
 * Each card has an oversized innovation-line number, a bold title, and a
 * description. Colors cycle through the four ACME Innovation Line pastels
 * (light teal → light green → light lilac → light orange) unless overridden.
 *
 * Default layout: 2-column grid. Supports 1–4 columns via the `columns` prop.
 * For print or narrow contexts, use columns={1}.
 */

const PASTEL_CYCLE = ['#BFD7FB', /* light teal   — Division A */
'#CDE675', /* light green  — Division B            */
'#EDBCFD', /* light lilac  — Division C       */
'#FFAC64' /* light orange — Division D            */];
function NumberedCards({
  items = [],
  columns = 2,
  gap = 12,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: `${gap}px`,
      fontFamily: 'var(--font-body, Inter, Arial, sans-serif)',
      ...style
    }
  }, items.map((item, i) => {
    const accent = item.color || PASTEL_CYCLE[i % PASTEL_CYCLE.length];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--color-background-primary, #fff)',
        border: '1px solid var(--color-border-tertiary, #D3E2FA)',
        borderLeft: `6px solid ${accent}`,
        borderRadius: '0 3px 3px 0',
        padding: '18px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '54px',
        fontWeight: 900,
        color: accent,
        lineHeight: 0.88,
        flexShrink: 0,
        marginTop: '-2px',
        userSelect: 'none'
      }
    }, item.number !== undefined ? item.number : i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--color-text-primary, #111827)',
        marginBottom: item.description ? '4px' : 0,
        lineHeight: 1.2
      }
    }, item.title), item.description && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '13px',
        color: 'var(--color-text-secondary, #4b5563)',
        lineHeight: 1.5
      }
    }, item.description), item.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        color: 'var(--color-text-disabled, #9ca3af)',
        lineHeight: 1.5,
        marginTop: '6px',
        fontStyle: 'italic'
      }
    }, item.note))));
  }));
}
Object.assign(__ds_scope, { NumberedCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberedCards.jsx", error: String((e && e.message) || e) }); }

// components/core/PhaseChecklist.jsx
try { (() => {
/**
 * ACME PhaseChecklist — multi-phase or multi-topic checklist grid.
 * Each column is a phase or topic with a colored header and a list of
 * checkable items. Columns don't need equal item counts.
 *
 * Default header progression (if colors not specified): light teal → medium teal → dark teal
 */

const DEFAULT_PHASE_COLORS = [{
  bg: '#C4DBFC',
  text: '#326DC2'
},
// teal-200, dark text
{
  bg: '#1A6AD9',
  text: '#ffffff'
},
// teal-700, white text
{
  bg: '#326DC2',
  text: '#ffffff'
} // teal-900 (brand), white text
];
function PhaseChecklist({
  phases = [],
  checkSrc,
  checkSize = 22,
  cellBg = '#ffffff'
}) {
  const maxRows = Math.max(...phases.map(p => (p.items || []).length), 0);
  const SPACER_W = '10px';
  const SPACER_STYLE = {
    width: SPACER_W,
    minWidth: SPACER_W,
    background: '#ffffff',
    border: 'none',
    padding: 0
  };

  // Build header cells with spacers between phases
  const headerCells = phases.flatMap((phase, i) => {
    const palette = phase.bg ? {
      bg: phase.bg,
      text: phase.text || '#ffffff'
    } : DEFAULT_PHASE_COLORS[i] || DEFAULT_PHASE_COLORS[DEFAULT_PHASE_COLORS.length - 1];
    const th = /*#__PURE__*/React.createElement("th", {
      key: `h-${i}`,
      style: {
        background: palette.bg,
        color: palette.text,
        fontWeight: 700,
        fontSize: '15px',
        textAlign: 'center',
        padding: '10px 16px',
        border: '1px solid #C8DFE0',
        lineHeight: 1.25
      }
    }, phase.title);
    return i < phases.length - 1 ? [th, /*#__PURE__*/React.createElement("th", {
      key: `hs-${i}`,
      style: SPACER_STYLE
    })] : [th];
  });
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headerCells)), /*#__PURE__*/React.createElement("tbody", null, Array.from({
    length: maxRows
  }, (_, row) => {
    const bodyCells = phases.flatMap((phase, col) => {
      const item = (phase.items || [])[row];
      const td = /*#__PURE__*/React.createElement("td", {
        key: `c-${col}`,
        style: {
          background: cellBg,
          border: '1px dashed #C8DFE0',
          padding: '12px 14px',
          verticalAlign: 'top'
        }
      }, item && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start'
        }
      }, checkSrc !== false && /*#__PURE__*/React.createElement("img", {
        src: checkSrc || 'assets/icons/general/teal/Check_Circle.png',
        alt: "\u2713",
        style: {
          width: checkSize,
          height: checkSize,
          flexShrink: 0,
          marginTop: '1px',
          objectFit: 'contain'
        }
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          color: 'var(--color-teal-900)',
          lineHeight: 1.3,
          marginBottom: item.body ? '5px' : 0
        }
      }, item.title, item.note && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--color-teal-700)'
        }
      }, ' ', item.note)), item.body && /*#__PURE__*/React.createElement("div", {
        style: {
          color: '#000000',
          fontWeight: 400,
          lineHeight: 1.5
        }
      }, item.body))));
      return col < phases.length - 1 ? [td, /*#__PURE__*/React.createElement("td", {
        key: `s-${col}`,
        style: SPACER_STYLE
      })] : [td];
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: row
    }, bodyCells);
  })));
}
Object.assign(__ds_scope, { PhaseChecklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhaseChecklist.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CalloutBox = __ds_scope.CalloutBox;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.DoBox = __ds_scope.DoBox;

__ds_ns.IconCards = __ds_scope.IconCards;

__ds_ns.IconList = __ds_scope.IconList;

__ds_ns.InnovationLine = __ds_scope.InnovationLine;

__ds_ns.NumberedCards = __ds_scope.NumberedCards;

__ds_ns.PhaseChecklist = __ds_scope.PhaseChecklist;

})();
