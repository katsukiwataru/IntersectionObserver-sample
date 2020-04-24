const target = document.getElementById('root');
const obsever = new IntersectionObserver((entries) => {
  console.log({ entries });
  const entry = entries[0];
  if (entry.intersectionRatio > 0) {
    console.log('要素が中にはいりました')
  } else {
    console.log('要素が外に出ました')
  }
});

obsever.observe(target);
