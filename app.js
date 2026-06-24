(() => {
  const views = {
    home: gid('view-home'), topics: gid('view-topics'), quiz: gid('view-quiz'), results: gid('view-results'),
    shop: gid('view-shop'), collection: gid('view-collection'), battle: gid('view-battle'), stats: gid('view-stats')
  };
  const dom = {
    nav: [...document.querySelectorAll('.nav-btn')], coins: gid('coin-balance'), answered: gid('answered-count'),
    team: gid('team-count'), toast: gid('toast')
  };
  const K = {
    coins:key('coins'), correct:key('correct'), incorrect:key('incorrect'), answered:key('answered'),
    correctTotal:key('correctTotal'), inventory:key('inventory'), packs:key('packs'), daily:key('daily'),
    battle:key('battleTeam'), history:key('history'), trainer:key('trainer')
  };
  const S = {
    coins:num(K.coins, APP_CONFIG.defaultCoins), correct:arr(K.correct), incorrect:arr(K.incorrect),
    answered:num(K.answered,0), correctTotal:num(K.correctTotal,0), inventory:obj(K.inventory),
    packs:num(K.packs,0), daily:obj(K.daily,{date:today(),count:0}), battle:arr(K.battle), history:arr(K.history),
    trainer: localStorage.getItem(K.trainer) || null, quiz:null, lastResults:null, lastBattle:null
  };

  ensureDaily();
  bindNav();
  renderAll();
  activate('home');

  function gid(id){return document.getElementById(id);} 
  function key(name){return `${APP_CONFIG.storagePrefix}:${name}`;}
  function today(){const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
  function arr(k){try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return []}}
  function obj(k,f={}){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}}
  function num(k,f=0){const v=Number(localStorage.getItem(k)); return Number.isFinite(v)?v:f}
  function uniq(x){return [...new Set(x)]}
  function esc(s){return String(s).replaceAll('"','&quot;')}
  function norm(s){return String(s||'').trim().toLowerCase().replace(/\s+/g,' ')}
  function shuffle(a){const c=[...a]; for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [c[i],c[j]]=[c[j],c[i]];} return c;}
  function pick(a){return a[Math.floor(Math.random()*a.length)]}

  function save(){
    localStorage.setItem(K.coins,String(S.coins));
    localStorage.setItem(K.correct,JSON.stringify(uniq(S.correct)));
    localStorage.setItem(K.incorrect,JSON.stringify(uniq(S.incorrect)));
    localStorage.setItem(K.answered,String(S.answered));
    localStorage.setItem(K.correctTotal,String(S.correctTotal));
    localStorage.setItem(K.inventory,JSON.stringify(S.inventory));
    localStorage.setItem(K.packs,String(S.packs));
    localStorage.setItem(K.daily,JSON.stringify(S.daily));
    localStorage.setItem(K.battle,JSON.stringify(uniq(S.battle).slice(0,APP_CONFIG.battle.teamSize)));
    localStorage.setItem(K.history,JSON.stringify(S.history.slice(-20)));
    localStorage.setItem(K.trainer,S.trainer||'');
  }
  function ensureDaily(){ if(S.daily.date!==today()){ S.daily={date:today(),count:0}; save(); } }
  function updateHdr(){ dom.coins.textContent=S.coins; dom.answered.textContent=S.answered; dom.team.textContent=`${S.battle.length}/${APP_CONFIG.battle.teamSize}`; }
  function toast(msg){ dom.toast.textContent=msg; dom.toast.classList.add('show'); clearTimeout(toast.tid); toast.tid=setTimeout(()=>dom.toast.classList.remove('show'),2600); }

  function trainer(){ return TRAINERS.find(t=>t.id===S.trainer) || null; }
  function ownedQty(id){ return S.inventory[id] || 0; }
  function ownedMonsters(){ return PSEUDOMON_ROSTER.filter(m=>ownedQty(m.id)>0); }
  function monster(id){ return PSEUDOMON_ROSTER.find(m=>m.id===id); }
  function trainerBonus(mon){ const t=trainer(); if(!t) return 0; return t.stat==='ALL' ? t.bonus : (mon.stats[t.stat] ? t.bonus : 0); }
  function power(mon){ return Math.round(((mon.power||0)+trainerBonus(mon))*10)/10; }
  function rarityClass(r){ return `rarity-bg-${r}`; }

  function bindNav(){ dom.nav.forEach(btn=>btn.addEventListener('click',()=>activate(btn.dataset.view))); }
  function activate(name){
    Object.entries(views).forEach(([k,v])=>v.classList.toggle('active',k===name));
    dom.nav.forEach(b=>b.classList.toggle('active',b.dataset.view===name));
    ({home:renderHome,topics:renderTopics,shop:renderShop,collection:renderCollection,battle:renderBattle,stats:renderStats}[name]||(()=>{}))();
  }
  function renderAll(){ renderHome(); renderTopics(); renderShop(); renderCollection(); renderBattle(); renderStats(); updateHdr(); }

  function renderHome(){
    const t = trainer();
    views.home.innerHTML = `<div class="hero-grid"><section class="panel"><div class="badge-row"><span class="badge">🎲 Quiz mode</span><span class="badge">🃏 Flip pack reveals</span><span class="badge">⚔️ Battle mode</span><span class="badge">🧑‍🏫 Trainers</span></div><h2>Quiz, collect, and build your squad</h2><p class="muted">Answer questions, earn ByteCoins, open single or multi-card packs with slow flip reveals, hire a trainer, and take your best seven into battle.</p><div class="button-row"><button class="primary-btn" id="play-mixed-home">🎲 Play Mixed Quiz</button><button class="secondary-btn" id="go-shop-home">🛍️ Open Packs</button><button class="secondary-btn" id="go-battle-home">⚔️ Battle Mode</button></div></section><section class="panel"><h2>Your mission panel</h2><div class="small-grid"><div class="stat-card"><p class="muted">Correct review bank</p><h3>${S.correct.length}</h3><button class="secondary-btn" id="review-correct-home" ${S.correct.length?'':'disabled'}>Review Correct</button></div><div class="stat-card"><p class="muted">Incorrect revision bank</p><h3>${S.incorrect.length}</h3><button class="secondary-btn" id="revise-incorrect-home" ${S.incorrect.length?'':'disabled'}>Revise Incorrect</button></div><div class="stat-card"><p class="muted">Active trainer</p><h3>${t?t.name:'None'}</h3><p class="muted">${t?`+${t.bonus} ${t.stat}`:'Hire one in the shop.'}</p></div></div></section></div><section class="panel"><div class="tile-grid"><article class="card"><h3>🖼️ Owned-only collection</h3><p class="muted">Only the Pseudomon you own are shown in your collection.</p></article><article class="card"><h3>✨ Better shop tiers</h3><p class="muted">Single packs are cheaper with weaker odds; three-card packs cost more and offer stronger premium-card chances.</p></article><article class="card"><h3>📚 80-question bank</h3><p class="muted">Each syllabus section now has 8 questions for better targeted revision.</p></article><article class="card"><h3>⚔️ Best 7 battle</h3><p class="muted">Choose your favourites manually or auto-pick your strongest owned squad.</p></article></div></section>`;
    gid('play-mixed-home').onclick=()=>startQuiz('mixed');
    gid('go-shop-home').onclick=()=>activate('shop');
    gid('go-battle-home').onclick=()=>activate('battle');
    const a=gid('review-correct-home'); if(a) a.onclick=()=>startQuiz('correct');
    const b=gid('revise-incorrect-home'); if(b) b.onclick=()=>startQuiz('incorrect');
  }

  function renderTopics(){
    const topics = [...new Set(QUESTION_BANK.map(q=>q.topic))];
    const cards = topics.map(topic => {
      const qs = QUESTION_BANK.filter(q=>q.topic===topic);
      return `<article class="topic-card"><h3>${topic}</h3><p>${qs.length} question(s) available.</p><div class="topic-meta"><span class="meta-pill">${qs.filter(q=>q.type==='typed').length} typed</span><span class="meta-pill">${qs.filter(q=>q.type==='mcq').length} MCQ</span><span class="meta-pill">${qs.filter(q=>q.type==='truefalse').length} T/F</span></div><div class="button-row"><button class="primary-btn" data-topic="${esc(topic)}">Start Topic Quiz</button></div></article>`;
    }).join('');
    views.topics.innerHTML = `<section class="panel"><h2>Choose a topic</h2><p class="muted">Each quiz uses up to ${APP_CONFIG.quizLength} questions.</p><div class="button-row"><button class="primary-btn" id="mixed-topics">🎲 Mixed Quiz</button><button class="secondary-btn" id="incorrect-topics" ${S.incorrect.length?'':'disabled'}>🔁 Revise Incorrect</button><button class="secondary-btn" id="correct-topics" ${S.correct.length?'':'disabled'}>✅ Review Correct</button></div></section><section class="panel"><div class="tile-grid">${cards}</div></section>`;
    gid('mixed-topics').onclick=()=>startQuiz('mixed');
    const i=gid('incorrect-topics'); if(i) i.onclick=()=>startQuiz('incorrect');
    const c=gid('correct-topics'); if(c) c.onclick=()=>startQuiz('correct');
    document.querySelectorAll('[data-topic]').forEach(btn=>btn.onclick=()=>startQuiz('topic', btn.dataset.topic));
  }

  function qpool(mode,topic){
    if(mode==='topic') return QUESTION_BANK.filter(q=>q.topic===topic);
    if(mode==='incorrect') return QUESTION_BANK.filter(q=>S.incorrect.includes(q.id));
    if(mode==='correct') return QUESTION_BANK.filter(q=>S.correct.includes(q.id));
    return [...QUESTION_BANK];
  }
  function startQuiz(mode,topic=null){
    const pool=qpool(mode,topic);
    if(!pool.length){ toast('No questions available for that option yet.'); return; }
    S.quiz={mode,topic,questions:shuffle(pool).slice(0, Math.min(APP_CONFIG.quizLength,pool.length)),index:0,score:0,answers:[],lock:false};
    renderQuiz(); activate('quiz');
  }
  function renderQuiz(){
    const z=S.quiz; if(!z){ activate('topics'); return; }
    const q=z.questions[z.index]; const pct=(z.index/z.questions.length)*100;
    views.quiz.innerHTML = `<section class="panel"><div class="progress-wrap"><div><h2>${z.mode==='topic'?q.topic:z.mode==='mixed'?'Mixed Revision Quiz':z.mode==='incorrect'?'Revise Incorrect Questions':'Review Correct Questions'}</h2><p class="muted">Question ${z.index+1} of ${z.questions.length} • Score: ${z.score}</p></div><button class="secondary-btn" id="quit-quiz">Exit Quiz</button></div><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div></section><section class="question-card"><div class="badge-row"><span class="meta-pill">${q.topic}</span><span class="meta-pill">Type: ${q.type}</span><span class="meta-pill">Difficulty: ${q.difficulty}</span></div><p class="question-text">${q.question}</p><div id="answer-area"></div><div id="feedback-area"></div></section>`;
    gid('quit-quiz').onclick=()=>activate('topics');
    const area=gid('answer-area');
    if(q.type==='mcq'){
      area.innerHTML=`<div class="answer-grid">${q.options.map(o=>`<button class="answer-btn" data-answer="${esc(o)}">${o}</button>`).join('')}</div>`;
      area.querySelectorAll('.answer-btn').forEach(btn=>btn.onclick=()=>answer(btn.dataset.answer));
    } else if(q.type==='truefalse'){
      area.innerHTML='<div class="answer-grid"><button class="answer-btn" data-answer="true">True</button><button class="answer-btn" data-answer="false">False</button></div>';
      area.querySelectorAll('.answer-btn').forEach(btn=>btn.onclick=()=>answer(btn.dataset.answer));
    } else {
      area.innerHTML='<div class="typed-answer-wrap"><input id="typed-input" type="text" placeholder="Type your answer here" /><button class="primary-btn" id="typed-submit">Submit answer</button></div>';
      gid('typed-submit').onclick=()=>answer(gid('typed-input').value);
      gid('typed-input').onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); answer(gid('typed-input').value); } };
      gid('typed-input').focus();
    }
  }
  function check(q,a){
    if(q.type==='truefalse'){ const n=String(a).toLowerCase()==='true'; return {ok:n===q.correctAnswer, correct:q.correctAnswer?'True':'False'}; }
    if(q.type==='typed'){ return {ok:(q.acceptableAnswers||[]).map(norm).includes(norm(a)), correct:(q.acceptableAnswers||[]).join(' / ')}; }
    return {ok:String(a)===q.correctAnswer, correct:q.correctAnswer};
  }
  function answer(ans){
    const z=S.quiz; if(!z || z.lock) return;
    const q=z.questions[z.index]; const r=check(q,ans); z.lock=true; S.answered += 1;
    if(r.ok){ z.score += 1; S.coins += APP_CONFIG.rewards.correctAnswerCoins; S.correctTotal += 1; S.correct = uniq([...S.correct,q.id]); }
    else { S.incorrect = uniq([...S.incorrect,q.id]); }
    z.answers.push({questionId:q.id, userAnswer:ans, isCorrect:r.ok, correctDisplay:r.correct});
    save(); updateHdr();
    gid('feedback-area').innerHTML = `<div class="feedback-card ${r.ok?'correct':'incorrect'}"><div class="badge-row"><span class="badge ${r.ok?'correct':'incorrect'}">${r.ok?'✅ Correct':'❌ Incorrect'}</span><span class="meta-pill">Correct answer: ${r.correct}</span><span class="meta-pill">+${r.ok?APP_CONFIG.rewards.correctAnswerCoins:0} coins</span></div><p>${q.explanation}</p><div class="button-row"><button class="primary-btn" id="next-question">${z.index<z.questions.length-1?'Next Question':'See Results'}</button></div></div>`;
    gid('next-question').onclick=nextQ;
    gid('answer-area').querySelectorAll('button,input').forEach(el=>el.disabled=true);
  }
  function nextQ(){ const z=S.quiz; z.index += 1; z.lock=false; if(z.index>=z.questions.length){ finishQuiz(); return; } renderQuiz(); }
  function finishQuiz(){
    const z=S.quiz; let completion=APP_CONFIG.rewards.quizCompletionCoins; let perfect=0;
    if(z.score===z.questions.length){ perfect=APP_CONFIG.rewards.perfectQuizBonus; completion+=perfect; }
    S.coins += completion;
    S.lastResults = {mode:z.mode, topic:z.topic, total:z.questions.length, score:z.score, coinsEarnedFromAnswers:z.score*APP_CONFIG.rewards.correctAnswerCoins, completionReward:completion, perfectBonus:perfect, answers:z.answers};
    S.quiz=null; save(); updateHdr(); renderResults(); activate('results');
  }
  function renderResults(){
    const r=S.lastResults; if(!r){ activate('home'); return; }
    const cards = r.answers.map(it=>{ const q=QUESTION_BANK.find(x=>x.id===it.questionId); return `<article class="result-card"><div class="badge-row"><span class="badge ${it.isCorrect?'correct':'incorrect'}">${it.isCorrect?'Correct':'Incorrect'}</span><span class="meta-pill">${q.topic}</span><span class="meta-pill">ID: ${q.id}</span></div><h3>${q.question}</h3><p class="muted">Correct answer: ${it.correctDisplay}</p><p>${q.explanation}</p></article>`; }).join('');
    views.results.innerHTML = `<section class="panel"><h2>Quiz complete!</h2><div class="stats-grid"><div class="stat-card"><p class="muted">Score</p><h3>${r.score} / ${r.total}</h3></div><div class="stat-card"><p class="muted">Coins from answers</p><h3>${r.coinsEarnedFromAnswers}</h3></div><div class="stat-card"><p class="muted">Quiz completion reward</p><h3>${r.completionReward}</h3></div><div class="stat-card"><p class="muted">Accuracy</p><h3>${Math.round((r.score/r.total)*100)}%</h3></div></div><div class="button-row"><button class="primary-btn" id="retry-results">Play another quiz</button><button class="secondary-btn" id="shop-results">Spend coins in shop</button><button class="secondary-btn" id="battle-results">Try Battle Mode</button></div></section><section class="panel"><h3>Question-by-question recap</h3><div class="results-grid">${cards}</div></section>`;
    gid('retry-results').onclick=()=>startQuiz(r.mode,r.topic); gid('shop-results').onclick=()=>activate('shop'); gid('battle-results').onclick=()=>activate('battle');
  }

  function renderShop(){
    ensureDaily(); const left=Math.max(0, APP_CONFIG.dailyPackLimit-S.daily.count); const t=trainer();
    const packs = Object.entries(APP_CONFIG.packs).map(([key,p]) => {
      return `<article class="pack-card"><h3>${p.emoji} ${p.label}</h3><p>${p.description}</p><div class="badge-row"><span class="meta-pill">Cost: ${p.cost}</span><span class="meta-pill">Cards: ${p.packSize}</span><span class="meta-pill">B ${Math.round(p.odds.Bronze*100)}%</span><span class="meta-pill">S ${Math.round(p.odds.Silver*100)}%</span><span class="meta-pill">G ${Math.round(p.odds.Gold*100)}%</span><span class="meta-pill">L ${Math.round(p.odds.Legend*100)}%</span></div><div class="button-row"><button class="primary-btn" data-pack="${key}" ${S.coins>=p.cost && left>0 ? '' : 'disabled'}>Buy ${p.packSize===1?'1 card':p.packSize+' cards'}</button></div><p class="muted">${S.coins<p.cost?'Too expensive right now.':left<=0?'Daily pack limit reached.':'Flip reveal enabled.'}</p></article>`;
    }).join('');
    const trainers = TRAINERS.map(tr=>`<article class="trainer-card ${t&&t.id===tr.id?'selected':''}"><h3>${tr.name}</h3><p class="muted">${tr.title}</p><div class="badge-row"><span class="meta-pill">${tr.stat==='ALL'?`+${tr.bonus} All`:`+${tr.bonus} ${tr.stat}`}</span><span class="meta-pill">Cost ${tr.cost}</span></div><p>${tr.description}</p><div class="button-row"><button class="secondary-btn" data-trainer="${tr.id}">${t&&t.id===tr.id?'Active trainer':'Hire trainer'}</button></div></article>`).join('');
    views.shop.innerHTML = `<section class="panel"><h2>Pseudomon Shop</h2><p class="muted">Single-card packs are cheaper but usually weaker. Three-card packs cost more and have stronger premium-card odds. Five-card packs are the best value for premium hunting.</p><div class="stats-grid"><div class="stat-card"><p class="muted">Today</p><h3>${S.daily.date}</h3></div><div class="stat-card"><p class="muted">Bought today</p><h3>${S.daily.count}</h3></div><div class="stat-card"><p class="muted">Packs left</p><h3>${left}</h3></div></div></section><section class="panel"><h3>Packs</h3><div class="pack-grid">${packs}</div></section><section class="panel"><h3>Hire a Trainer</h3><p class="muted">A trainer adds passive battle bonuses for your whole squad.</p><div class="trainer-grid">${trainers}</div></section>`;
    document.querySelectorAll('[data-pack]').forEach(b=>b.onclick=()=>buyPack(b.dataset.pack));
    document.querySelectorAll('[data-trainer]').forEach(b=>b.onclick=()=>hireTrainer(b.dataset.trainer));
  }
  function rollRarity(odds){ const x=Math.random(); let c=0; for(const r of ['Bronze','Silver','Gold','Legend']){ c += (odds[r]||0); if(x<c) return r; } return 'Bronze'; }
  async function buyPack(key){
    ensureDaily(); const p=APP_CONFIG.packs[key]; if(!p) return;
    if(S.daily.count>=APP_CONFIG.dailyPackLimit){ toast('Daily pack limit reached'); return; }
    if(S.coins<p.cost){ toast('Too expensive — earn more coins first'); return; }
    const prizes=[];
    for(let i=0;i<p.packSize;i++){ const rarity=rollRarity(p.odds); const cand=PSEUDOMON_ROSTER.filter(mon=>mon.rarity===rarity); const prize=pick(cand); prizes.push(prize); S.inventory[prize.id]=(S.inventory[prize.id]||0)+1; }
    S.coins -= p.cost; S.packs += 1; S.daily.count += 1; save(); updateHdr(); renderShop(); renderCollection(); renderBattle(); renderStats();
    await packReveal(p, prizes);
  }
  function burstPieces(){ let out=''; for(let i=0;i<18;i++){ const ang=(Math.PI*2*i)/18, dist=160+(i%3)*48, dx=Math.cos(ang)*dist, dy=Math.sin(ang)*dist, hue=(i*23)%360; out += `<span class="burst-piece" style="left:50%;top:50%;--dx:${dx}px;--dy:${dy}px;background:hsl(${hue} 95% 70%);"></span>`; } return out; }
  function fireworks(overlay,count,color){ for(let i=0;i<count;i++){ const s=document.createElement('span'); s.className='firework'; s.style.left='50%'; s.style.top='50%'; s.style.background=color; s.style.setProperty('--dx',`${(Math.random()-.5)*560}px`); s.style.setProperty('--dy',`${(Math.random()-.5)*420}px`); s.style.animationDelay=`${Math.random()*.3}s`; overlay.appendChild(s); } }
  function sortReveal(prizes){ const order={Bronze:1,Silver:2,Gold:3,Legend:4}; return [...prizes].sort((a,b)=>order[a.rarity]-order[b.rarity]); }
  function packReveal(pack, prizes){
    return new Promise(resolve => {
      const sorted=sortReveal(prizes), containsLegend=sorted.some(p=>p.rarity==='Legend');
      const overlay=document.createElement('div'); overlay.className=`pack-overlay ${containsLegend?'legend':''}`;
      overlay.innerHTML=`<div class="pack-box"><div class="pack-lid"></div><div class="pack-ribbon-v"></div><div class="pack-ribbon-h"></div><div class="pack-bow"></div><div class="pack-core">${pack.emoji}</div></div><div class="pack-burst">${burstPieces()}</div>`;
      document.body.appendChild(overlay);
      setTimeout(()=>overlay.classList.add('open'),900);
      setTimeout(()=>{
        overlay.innerHTML=`<div class="reveal-panel ${containsLegend?'legend':''}"><p class="eyebrow">${pack.label} opened!</p><h2 class="reveal-title">Flip reveal</h2><p class="reveal-sub">${pack.packSize} card${pack.packSize>1?'s':''} • each card flips in slowly from lower rarity to higher rarity.</p><div class="multi-pack-grid" id="flip-grid"></div><div class="button-row" style="justify-content:center"><button class="primary-btn" id="close-reveal" disabled>Excellent</button><button class="secondary-btn" id="go-collection">View collection</button></div></div>`;
        const grid=gid('flip-grid');
        sorted.forEach((prize,index)=>{
          setTimeout(()=>{
            const card=document.createElement('div'); card.className='flip-card';
            card.innerHTML=`<div class="flip-inner"><div class="flip-face flip-back"><div class="card-back-core">PSEUDOMON</div></div><div class="flip-face flip-front reveal-card ${rarityClass(prize.rarity)}"><span class="level-banner">${prize.rarity} Lvl</span><span class="rarity-badge">${prize.rarity}</span><div class="monster-image"><img src="${prize.imagePath}" alt="${prize.name}" /></div><h3>${prize.name}</h3><p class="muted">${prize.theme}</p><p class="muted">Owned now: ${ownedQty(prize.id)}</p></div></div>`;
            grid.appendChild(card);
            setTimeout(()=>card.classList.add('flipped'),80);
            if(prize.rarity==='Gold') fireworks(overlay,20,'#fde047');
            if(prize.rarity==='Legend') fireworks(overlay,36,'#ff8ccc');
          }, index*650);
        });
        setTimeout(()=>gid('close-reveal').disabled=false, sorted.length*650+350);
        gid('close-reveal').onclick=()=>{ overlay.remove(); resolve(); };
        gid('go-collection').onclick=()=>{ overlay.remove(); resolve(); activate('collection'); };
      }, containsLegend?2300:1700);
    });
  }
  function hireTrainer(id){ const t=TRAINERS.find(x=>x.id===id); if(!t) return; if(S.trainer===t.id){ toast(`${t.name} is already your active trainer.`); return; } if(S.coins<t.cost){ toast('Not enough coins to hire that trainer yet.'); return; } S.coins-=t.cost; S.trainer=t.id; save(); updateHdr(); renderShop(); renderBattle(); renderCollection(); renderStats(); toast(`Trainer hired: ${t.name}`); }

  function card(mon, controls=true){
    const qty=ownedQty(mon.id), selected=S.battle.includes(mon.id);
    return `<article class="monster-card ${rarityClass(mon.rarity)} ${selected?'selected':''}"><span class="level-banner">${mon.rarity} Lvl</span><span class="rarity-badge">${mon.rarity}</span><div class="monster-image"><img src="${mon.imagePath}" alt="${mon.name}" /></div><h3>${mon.name}</h3><div class="badge-row"><span class="meta-pill">Theme: ${mon.theme}</span><span class="meta-pill">Owned: ${qty}</span><span class="meta-pill">Power ${power(mon)}</span></div><p>${mon.funnyDescription}</p><ul class="stats-list"><li>Logic: ${mon.stats.Logic}</li><li>Speed: ${mon.stats.Speed}</li><li>Chaos: ${mon.stats.Chaos}</li><li>Debug: ${mon.stats.Debug}</li></ul>${controls?`<div class="button-row"><button class="secondary-btn" data-team="${mon.id}">${selected?'Remove from team':'Add to battle team'}</button><button class="sell-btn" data-sell="${mon.id}">Sell one for ${mon.sellValue}</button></div>`:''}</article>`;
  }
  function toggleTeam(id){
    if(!ownedQty(id)){ toast('You can only add owned Pseudomon to your battle team.'); return; }
    if(S.battle.includes(id)) S.battle=S.battle.filter(x=>x!==id);
    else { if(S.battle.length>=APP_CONFIG.battle.teamSize){ toast(`Team already full (${APP_CONFIG.battle.teamSize}).`); return; } S.battle.push(id); }
    save(); updateHdr(); renderCollection(); renderBattle();
  }
  function autoTeam(){
    const owned=ownedMonsters(); if(!owned.length){ toast('Open some packs first so you own monsters to battle with.'); return; }
    S.battle=[...owned].sort((a,b)=>power(b)-power(a)).slice(0,APP_CONFIG.battle.teamSize).map(x=>x.id);
    save(); updateHdr(); renderCollection(); renderBattle(); toast('Battle team auto-filled with your strongest owned Pseudomon.');
  }
  function sell(id){
    const mon=monster(id); if(!mon || !ownedQty(id)){ toast('You do not own any copies to sell.'); return; }
    S.inventory[id]-=1; S.coins += mon.sellValue;
    if(S.inventory[id]<=0){ delete S.inventory[id]; S.battle=S.battle.filter(x=>x!==id); }
    save(); updateHdr(); renderCollection(); renderBattle(); renderStats(); toast(`Sold one ${mon.name} for ${mon.sellValue} coins.`);
  }
  function renderCollection(){
    const owned=ownedMonsters();
    const cards=owned.length?owned.map(mon=>card(mon,true)).join(''):'<p class="muted">You do not own any Pseudomon yet. Open a pack in the shop to begin your collection.</p>';
    const squad=S.battle.map(monster).filter(Boolean).filter(mon=>ownedQty(mon.id)>0).map(mon=>`<div class="card ${rarityClass(mon.rarity)}"><div class="monster-image small"><img src="${mon.imagePath}" alt="${mon.name}" /></div><h3>${mon.name}</h3><p class="muted">Power ${power(mon)}</p></div>`).join('') || '<p class="muted">No battle team selected yet.</p>';
    views.collection.innerHTML=`<section class="panel"><h2>Your collection album</h2><p class="muted">Only owned Pseudomon are shown here, so the page feels like a trophy cabinet rather than a wishlist poster.</p><div class="stats-grid"><div class="stat-card"><p class="muted">Unique owned</p><h3>${owned.length} / ${PSEUDOMON_ROSTER.length}</h3></div><div class="stat-card"><p class="muted">Total copies</p><h3>${Object.values(S.inventory).reduce((a,b)=>a+b,0)}</h3></div><div class="stat-card"><p class="muted">Battle squad</p><h3>${S.battle.length}/${APP_CONFIG.battle.teamSize}</h3></div></div><div class="button-row"><button class="primary-btn" id="auto-team">Auto-pick best squad</button><button class="secondary-btn" id="clear-team">Clear squad</button><button class="secondary-btn" id="go-battle-collection">Go to battle</button></div></section><section class="panel"><h3>Your selected battle squad</h3><div class="squad-grid">${squad}</div></section><section class="panel"><div class="collection-grid">${cards}</div></section>`;
    document.querySelectorAll('[data-team]').forEach(b=>b.onclick=()=>toggleTeam(b.dataset.team));
    document.querySelectorAll('[data-sell]').forEach(b=>b.onclick=()=>sell(b.dataset.sell));
    gid('auto-team').onclick=autoTeam; gid('clear-team').onclick=()=>{ S.battle=[]; save(); updateHdr(); renderCollection(); renderBattle(); };
    gid('go-battle-collection').onclick=()=>activate('battle');
  }

  function buildComputer(){ return [...PSEUDOMON_ROSTER].sort((a,b)=>power(b)-power(a)).slice(0,APP_CONFIG.battle.teamSize).map(x=>x.id); }
  function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }
  function startBattle(){
    const you=S.battle.map(monster).filter(Boolean).filter(mon=>ownedQty(mon.id)>0); if(!you.length){ toast('Choose at least one owned Pseudomon for your battle squad first.'); return; }
    const comp=buildComputer().map(monster).filter(Boolean); const n=Math.min(APP_CONFIG.battle.teamSize,you.length,comp.length); const rounds=[]; let yw=0,cw=0,d=0,reward=0;
    for(let i=0;i<n;i++){
      const a=you[i], b=comp[i], as=Math.round(power(a)+randInt(APP_CONFIG.battle.randomBonusMin,APP_CONFIG.battle.randomBonusMax)), bs=Math.round(power(b)+randInt(APP_CONFIG.battle.randomBonusMin,APP_CONFIG.battle.randomBonusMax));
      let outcome='draw'; if(as>bs){ outcome='win'; yw++; reward+=APP_CONFIG.rewards.battleRoundWinCoins; } else if(bs>as){ outcome='loss'; cw++; } else { d++; }
      rounds.push({index:i+1,yours:a.id,theirs:b.id,youScore:as,compScore:bs,outcome});
    }
    let result='Draw'; if(yw>cw){ result='You win'; reward+=APP_CONFIG.rewards.battleMatchWinCoins; } else if(cw>yw){ result='Computer wins'; } else { reward+=APP_CONFIG.rewards.battleDrawCoins; }
    S.coins+=reward; S.lastBattle={date:new Date().toLocaleString(),rounds,userWins:yw,compWins:cw,drawCount:d,coinReward:reward,matchResult:result}; S.history.unshift({date:S.lastBattle.date,matchResult:result,userWins:yw,compWins:cw,coinReward:reward}); save(); updateHdr(); renderBattle(); renderStats(); toast(`Battle complete: ${result}. Coins earned: ${reward}.`);
  }
  function renderBattle(){
    const you=S.battle.map(monster).filter(Boolean).filter(mon=>ownedQty(mon.id)>0); const comp=buildComputer().map(monster).filter(Boolean); const t=trainer();
    const squad=you.length?you.map(mon=>`<div class="card ${rarityClass(mon.rarity)}"><div class="monster-image small"><img src="${mon.imagePath}" alt="${mon.name}" /></div><h3>${mon.name}</h3><p class="muted">Power ${power(mon)}</p></div>`).join(''):'<p class="muted">No squad selected yet. Add owned Pseudomon from Collection.</p>';
    const cpu=comp.map(mon=>`<div class="card ${rarityClass(mon.rarity)}"><div class="monster-image small"><img src="${mon.imagePath}" alt="${mon.name}" /></div><h3>${mon.name}</h3><p class="muted">Power ${power(mon)}</p></div>`).join('');
    const recap=S.lastBattle?`<section class="panel"><div class="progress-wrap"><div><h2>Last battle result</h2><p class="muted">${S.lastBattle.date}</p></div><div class="score-big">${S.lastBattle.matchResult}</div></div><div class="stats-grid"><div class="stat-card"><p class="muted">Your round wins</p><h3>${S.lastBattle.userWins}</h3></div><div class="stat-card"><p class="muted">Computer round wins</p><h3>${S.lastBattle.compWins}</h3></div><div class="stat-card"><p class="muted">Draws</p><h3>${S.lastBattle.drawCount}</h3></div><div class="stat-card"><p class="muted">Coins earned</p><h3>${S.lastBattle.coinReward}</h3></div></div><div class="results-grid">${S.lastBattle.rounds.map(r=>{const a=monster(r.yours), b=monster(r.theirs); return `<article class="round-card ${r.outcome}"><div class="badge-row"><span class="meta-pill">Round ${r.index}</span><span class="badge ${r.outcome==='win'?'correct':r.outcome==='loss'?'incorrect':''}">${r.outcome.toUpperCase()}</span></div><div class="battle-grid"><div><div class="monster-image small"><img src="${a.imagePath}" alt="${a.name}" /></div><h3>${a.name}</h3><p class="muted">Score ${r.youScore}</p></div><div><div class="monster-image small"><img src="${b.imagePath}" alt="${b.name}" /></div><h3>${b.name}</h3><p class="muted">Score ${r.compScore}</p></div></div></article>`;}).join('')}</div></section>`:'';
    views.battle.innerHTML=`<section class="panel"><div class="progress-wrap"><div><h2>Battle mode: Best ${APP_CONFIG.battle.teamSize}</h2><p class="muted">Choose your team manually from owned Pseudomon or auto-fill your strongest squad. ${t?`Active trainer: ${t.name} (+${t.bonus} ${t.stat}).`:'No trainer active.'}</p></div><button class="primary-btn" id="start-battle" ${you.length?'':'disabled'}>⚔️ Start Battle</button></div><div class="button-row"><button class="secondary-btn" id="auto-battle-team">Auto-pick my best ${APP_CONFIG.battle.teamSize}</button><button class="secondary-btn" id="choose-team">Choose team in Collection</button><button class="secondary-btn" id="hire-trainer">Hire a trainer</button></div></section><section class="panel"><div class="battle-grid"><article class="battle-card"><h3>Your squad</h3><p class="muted">Owned monsters only • ${you.length}/${APP_CONFIG.battle.teamSize} selected</p><div class="squad-grid">${squad}</div></article><article class="battle-card"><h3>Computer squad</h3><p class="muted">Auto-picked from highest power in the roster</p><div class="squad-grid">${cpu}</div></article></div></section>${recap}<section class="panel"><h3>Recent battle history</h3><div class="small-grid">${S.history.length?S.history.slice(0,6).map(h=>`<div class="stat-card"><p class="muted">${h.date}</p><h3>${h.matchResult}</h3><p class="muted">${h.userWins} - ${h.compWins} • +${h.coinReward} coins</p></div>`).join(''):'<p class="muted">No battles yet. Your future victory speeches will go here.</p>'}</div></section>`;
    const sb=gid('start-battle'); if(sb) sb.onclick=startBattle; gid('auto-battle-team').onclick=autoTeam; gid('choose-team').onclick=()=>activate('collection'); gid('hire-trainer').onclick=()=>activate('shop');
  }

  function renderStats(){
    const t=trainer(); const acc=S.answered?Math.round((S.correctTotal/S.answered)*100):0;
    views.stats.innerHTML=`<section class="panel"><h2>Revision + battle stats</h2><div class="stats-grid"><div class="stat-card"><p class="muted">Questions answered</p><h3>${S.answered}</h3></div><div class="stat-card"><p class="muted">Correct answers</p><h3>${S.correctTotal}</h3></div><div class="stat-card"><p class="muted">Accuracy</p><h3>${acc}%</h3></div><div class="stat-card"><p class="muted">Packs opened</p><h3>${S.packs}</h3></div><div class="stat-card"><p class="muted">Unique owned</p><h3>${ownedMonsters().length}</h3></div><div class="stat-card"><p class="muted">Active trainer</p><h3>${t?t.name:'None'}</h3></div></div></section><section class="panel"><h3>Saved progress overview</h3><ul class="muted"><li>Coins, question history, trainer choice, inventory, daily pack limits, and battle team are all saved in localStorage.</li><li>Collection shows only owned Pseudomon.</li><li>Single packs are cheaper; triple packs cost more and have better premium-card odds.</li><li>The question bank now contains 80 questions.</li></ul><div class="button-row"><button class="secondary-btn" id="reset-progress">⚠️ Reset all progress</button></div></section>`;
    gid('reset-progress').onclick=resetAll;
  }
  function resetAll(){
    if(!window.confirm('Reset coins, question history, collection, trainer, battle team, and pack data?')) return;
    Object.values(K).forEach(k=>localStorage.removeItem(k));
    Object.assign(S,{coins:APP_CONFIG.defaultCoins,correct:[],incorrect:[],answered:0,correctTotal:0,inventory:{},packs:0,daily:{date:today(),count:0},battle:[],history:[],trainer:null,quiz:null,lastResults:null,lastBattle:null});
    renderAll(); updateHdr(); activate('home'); toast('All progress reset.');
  }
})();
