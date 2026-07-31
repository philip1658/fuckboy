const { Button } = window.FUCKBOYDesignSystem_007b99;

/* Der blaue Ausgang. Wird gespielt wie ein echtes Ende — kein Weiterknopf,
   nur der Rückweg. Das Bild liefert der Host; hier steht bewusst ein Platzhalter. */
function HeavenScreen({ go, compact = false, image }) {
  const src = image || (window.__resources && window.__resources.heavenImg) || '../../assets/heaven.png';
  return (
    <div style={{
      position: 'relative', height: '100%', overflowY: 'auto',
      background: 'radial-gradient(120% 90% at 50% 0%, #fffdf6 0%, var(--paper-100) 42%, var(--paper-200) 78%, var(--paper-300) 100%)'
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-conic-gradient(from 0deg at 50% -10%, rgba(255,255,255,.85) 0deg 3deg, rgba(255,255,255,0) 3deg 11deg)',
        opacity: 0.5, maskImage: 'radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(70% 60% at 50% 0%, #000 0%, transparent 75%)'
      }} />

      <div style={{
        minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: compact ? '32px 24px' : 'var(--space-5xl) var(--gutter-page-wide)'
      }}>
      <div style={{ position: 'relative', maxWidth: compact ? '100%' : '560px', width: '100%' }}>
        <div style={{
          width: '100%', maxWidth: compact ? '250px' : '320px', margin: '0 auto',
          aspectRatio: '4 / 5', overflow: 'hidden',
          borderRadius: '999px 999px 8px 8px',
          boxShadow: '0 30px 80px -30px rgba(120,90,20,.5)',
          maskImage: 'linear-gradient(to bottom, #000 62%, rgba(0,0,0,.25) 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 62%, rgba(0,0,0,.25) 88%, transparent 100%)'
        }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%' }} />
        </div>

        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: compact ? '38px' : '64px', lineHeight: 0.94, letterSpacing: '-0.025em',
          color: 'var(--ink-900)', marginTop: compact ? '10px' : 'var(--space-lg)'
        }}>
          Willkommen, Sohn.
        </div>

        <div style={{
          fontFamily: 'var(--font-condensed)', fontSize: compact ? '11px' : '13px', fontWeight: 600,
          letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-400)',
          marginTop: compact ? '16px' : 'var(--space-xl)'
        }}>
          Du hast die blaue Pille genommen
        </div>

        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: compact ? '15px' : '17px', lineHeight: 1.6,
          color: 'var(--ink-500)', marginTop: compact ? '14px' : 'var(--space-lg)',
          maxWidth: '44ch', marginLeft: 'auto', marginRight: 'auto'
        }}>
Du suchst eine Beziehung. Dann hat dieser Kurs dir nichts zu geben — er ist für etwas anderes gebaut. Geh und such sie. Ehrlich, ohne Methode, ohne Timing.
        </p>

        <Button variant="ghost" size="sm" icon="arrow-left" onClick={() => go('cover')}
          style={{ marginTop: compact ? '22px' : 'var(--space-2xl)', color: 'var(--ink-400)' }}>
          Doch die rote Pille nehmen
        </Button>
      </div>
      </div>
    </div>
  );
}

Object.assign(window, { HeavenScreen });
