// ── ПИТАННЯ 5 — useMemo / useCallback ───────────────────────
//
// Є такий компонент. Батько ре-рендериться кожну секунду.
// Дочірній Child чомусь теж ре-рендериться кожного разу.
// Знайди причину і виправ.
//
// function Parent() {
//   const [tick, setTick] = useState(0);
//
//   useEffect(() => {
//     const id = setInterval(() => setTick(t => t + 1), 1000);
//     return () => clearInterval(id);
//   }, []);
//
//   const config = { theme: 'dark', lang: 'en' };
//   const handleClick = () => console.log('clicked');
//
//   return <Child config={config} onClick={handleClick} />;
// }
//
// const Child = React.memo(({ config, onClick }) => {
//   console.log('Child render');
//   return <button onClick={onClick}>{config.theme}</button>;
// });

// ТВОЯ ВІДПОВІДЬ:
function Parent() {
  const [tick, setTick] = useState(0);

  useCallback(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const config = { theme: 'dark', lang: 'en' };
  const handleClick = () => console.log('clicked');

  return <Child config={config} onClick={handleClick} />;
}

const Child = React.memo(({ config, onClick }) => {
  console.log('Child render');
  return <button onClick={onClick}>{config.theme}</button>;
});
