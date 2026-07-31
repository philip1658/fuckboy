const { Badge, Button } = window.FUCKBOYDesignSystem_007b99;

const CRUMBS = {
  overview: ['Kursübersicht', 'Ein Werkzeug — und die Rechnung dazu'],
  index:    ['Akten-Index', 'FB-01 bis FB-06'],
  lesson:   ['Kapitel 03', 'Der grösste Fehler'],
  scenario: ['Boss-Level', 'Gutes Date, unklare Signale'],
  chat:     ['Simulation 02', 'Sie fragt, was du suchst'],
  profile:  ['Persönliche Akte', 'Fuckboy-Profil']
};

function App() {
  const D = window.FBData;
  const [screen, setScreen] = React.useState('cover');
  const [transfer, setTransfer] = React.useState(D.transfer);
  const [scores, setScores] = React.useState(D.scores);

  const toggleTransfer = (i) => setTransfer(t => t.map((x, j) => j === i ? { ...x, done: !x.done } : x));

  const applyDeltas = (chosen) => {
    if (!chosen || !chosen.deltas) return;
    setScores(prev => prev.map(s => {
      const d = chosen.deltas.find(x => x.label === s.label);
      if (!d) return s;
      const n = Math.max(0, Math.min(100, s.value + parseInt(d.delta.replace('−', '-'), 10)));
      return { ...s, value: n, delta: d.delta };
    }));
  };

  if (screen === 'cover') return <CoverScreen go={setScreen} />;

  const [crumb, title] = CRUMBS[screen] || ['', ''];
  const level = scores.find(s => s.label === 'Fuckboy-Level');

  return (
    <Shell chapters={D.chapters} screen={screen} go={setScreen} level={level ? level.value : 62} crumb={crumb} title={title}
      right={<Badge tone="consent" icon="shield-check">Consent 92</Badge>}>
      {screen === 'overview' ? <OverviewScreen chapters={D.chapters} goals={D.goals} formats={D.formats} bosslevels={D.bosslevels} scores={scores} go={setScreen} /> : null}
      {screen === 'index' ? <ChapterIndex chapters={D.chapters} go={setScreen} flags={D.flags} /> : null}
      {screen === 'lesson' ? <LessonScreen go={setScreen} transfer={transfer} toggleTransfer={toggleTransfer} /> : null}
      {screen === 'scenario' ? <ScenarioScreen scenario={D.scenario} go={setScreen} onCommit={applyDeltas} /> : null}
      {screen === 'chat' ? <ChatSimScreen chat={D.chat} go={setScreen} onCommit={() => {}} /> : null}
      {screen === 'profile' ? <ProfileScreen scores={scores} transfer={transfer} toggleTransfer={toggleTransfer} flags={D.flags} go={setScreen} /> : null}
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
