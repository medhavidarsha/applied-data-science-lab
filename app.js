
"use strict";
const W=[
["Probability & foundations","Build confidence with probability, sampling, and Python fundamentals.",["Conditional probability, Bayes theorem and expectation","Distributions, central limit theorem and standard error","Python fundamentals, NumPy and Pandas","SQL aggregates, CTEs and window functions","Bias–variance, generalization and train/test splits","Metric trees and funnel reasoning"]],
["Inference & statistical modeling","Connect model estimates with uncertainty.",["MLE, MAP, bias and consistency","Confidence intervals, p-values and hypothesis testing","Arrays, dictionaries and hashing practice","SQL sessionization and conversion analysis","Linear regression, logistic regression and regularization","Multilevel models: correlated data and cluster-robust standard errors"]],
["Experiment design","Understand sensitivity and trustworthy experiments.",["Power, minimum detectable effect and sample size","Bootstrap confidence intervals and statistical tests","Two pointers, sliding windows and binary search","SQL experiment cohorts and retention","Trees, forests and gradient boosting","Duke Stories in Causal Inference: power and modified Poisson regression"]],
["Advanced experiments & correlated outcomes","Reason about experimental reliability and repeated observations.",["CUPED and covariate adjustment","Ratio metrics, sample ratio mismatch and multiple comparisons","Stacks, heaps and algorithmic drills","SQL experiment segmentation and clustered data","Duke STA 610: GLS, mixed-effects models, GLMMs and GEE","Guardrail metrics and decision-making"]],
["Causal inference","Study identification assumptions and observational studies.",["Potential outcomes, ATE, ATT and randomized assignment","Duke STA 640: outcome regression, matching and propensity scores","Inverse probability weighting, overlap weighting and doubly robust estimation","SQL matched cohorts and pre/post datasets","Recommendation basics and heterogeneous effects","DAGs, confounding and sensitivity analysis"]],
["Advanced causal methods & ML systems","Move from fundamental effects to modern methods.",["Difference-in-differences, synthetic control and instrumental variables","Regression discontinuity and mediation analysis","Bayesian causal inference: estimands, models and propensity scores","Duke STA 610: Bayesian hierarchical models and longitudinal analysis","Retrieval, ranking, NDCG and recommendation design","Search and recommendation systems: generic design case"]],
["Integrated applications","Combine statistical reasoning with applied systems.",["Causal heterogeneity, subgroup analyses and sensitivity bounds","Bayesian causal sensitivity and model specification","Algorithmic problem-solving: trees and graphs","Advanced SQL analytical challenge","Machine learning monitoring, leakage, drift and retraining","Technical writing and presentation of uncertainty"]],
["Knowledge mastery","Consolidate statistical and engineering fluency.",["Cumulative statistics and causal reasoning assessment","Review standard error, Bayes and confidence intervals","Timed Python and SQL exercises","ISLP applied modeling mini-project","End-to-end applied ML system case","Summarize learnings and propose next study cycle"]]
];
const RES=[
["Harvard STAT 110","Probability","Probability lectures, derivations and examples.","https://stat110.hsites.harvard.edu/youtube",1],
["Seeing Theory","Probability","Interactive visualizations of probability and inference.","https://seeing-theory.brown.edu/",1],
["StatQuest","Statistics","Intuitive videos about inference, regression and ML.","https://statquest.org/video-index/",2],
["ISLP — Python edition","Machine learning","Free book, lecture resources and Python labs.","https://www.statlearning.com/",2],
["Duke STA 640: Causal Inference","Causal inference","Potential outcomes, RCTs, weighting, doubly robust methods, DID, IV, RDD.","https://www2.stat.duke.edu/~fl35/CausalInferenceClass.html",5],
["Duke STA 610: Multilevel and Hierarchical Models","Statistics","Correlated data, cluster robust SE, GLS, LMM, GLMM, GEE and Bayesian hierarchies.","https://www2.stat.duke.edu/~fl35/teaching/610-26F/",4],
["Duke STA 790: Bayesian Causal Inference","Causal inference","Bayesian estimands, propensity scores, heterogeneity and sensitivity.","https://www2.stat.duke.edu/~fl35/BayesianCausalInference.html",6],
["Duke STA 790: Stories in Causal Inference","Causal inference","Modified Poisson regression, mediation, power and statistical writing.","https://www2.stat.duke.edu/~fl35/teaching/790-26F/",3],
["Causal Inference for the Brave and True","Causal inference","Python-based treatments of causal inference.","https://matheusfacure.github.io/python-causality-handbook/landing-page.html",5],
["Trustworthy Online Controlled Experiments","Experimentation","Experiment design, power, metrics, guardrails.","https://experimentguide.com/",3],
["Microsoft Experimentation research","Experimentation","Research into randomized online experiments and variance reduction.","https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/",4],
["Kaggle Learn — Python","Python","Hands-on Python exercises.","https://www.kaggle.com/learn/python",1],
["Kaggle Learn — Pandas","Python","Practical data wrangling exercises.","https://www.kaggle.com/learn/pandas",1],
["NeetCode roadmap","Python","Curated algorithms and data structures.","https://neetcode.io/roadmap",2],
["DataLemur","SQL","SQL exercises involving analytics, joins and windows.","https://datalemur.com/questions",1],
["Google ML Crash Course","Machine learning","Interactive practical ML instruction.","https://developers.google.com/machine-learning/crash-course",3],
["Google Recommendation Systems","Machine learning","Retrieval, ranking and recommendations.","https://developers.google.com/machine-learning/recommendation",6],
["Made With ML","Machine learning","Model design, testing, deployment and monitoring.","https://madewithml.com/",7],
["Amplitude North Star Playbook","Product analytics","Measure product impact with actionable metric trees.","https://amplitude.com/north-star",1]
];
const BANK=[
["Statistics","Foundational","A store search occurs in 30% of sessions and has 40% conversion; other sessions convert at 15%. What is P(store search | converted)?",["12%","30%","53.3%","40%"],2,"Use Bayes: (0.3×0.4)/(0.3×0.4+0.7×0.15) = 53.3%.","Bayes theorem"],
["Statistics","Foundational","For 100 independent samples from a population with SD=20, what is the standard error of the sample mean?",["20","2","0.2","200"],1,"SE(mean) = population SD / square root of n = 20/10 = 2.","Standard error"],
["Statistics","Foundational","If each of five independent sessions converts with probability 0.2, what is the probability at least one converts?",["20%","32.8%","67.2%","80%"],2,"Use the complement: 1 - (0.8)^5 = 67.232%.","Binomial distribution"],
["Statistics","Intermediate","What is the MLE of a Bernoulli success probability given 150 successes in 1000 independent trials?",["0.015","0.15","0.85","1.5"],1,"The binomial likelihood is maximized at number of successes divided by trials.","Maximum likelihood"],
["Statistics","Intermediate","A 95% confidence interval for a treatment effect is [-2%, +0.5%]. Which statement is supported?",["The effect is definitively negative","The result is not significant at a two-sided 5% level","The effect has a 95% probability of falling in the interval","There is no effect"],1,"The interval includes zero. Frequentist 95% refers to long-run coverage of this interval procedure.","Confidence intervals"],
["Statistics","Intermediate","If sample size quadruples while variance and independence hold, the standard error of the mean usually:",["Quadruples","Doubles","Halves","Does not change"],2,"SE is proportional to 1/sqrt(n), so quadrupling n halves it.","Standard error"],
["Experimentation","Foundational","What is the main purpose of random assignment in an experiment?",["Guarantee exactly equal group sizes","Reduce systematic confounding in expectation","Eliminate sampling error","Maximize conversion"],1,"Randomization breaks systematic association between treatment and pre-treatment covariates in expectation.","Randomization"],
["Experimentation","Intermediate","An experiment result has p=0.147 at a two-sided 5% threshold. What is correct?",["A significant positive effect","Statistically inconclusive at the specified threshold","Probability null is true = 14.7%","Treatment and control are identical"],1,"p-value above 0.05 does not reject the null. It doesn't prove equivalence.","P-values"],
["Experimentation","Intermediate","A sample ratio mismatch (SRM) most directly suggests:",["Conversion increased","Assignment/exposure or data-quality problems worth investigating","The null is false","The sample is too small"],1,"SRM flags unexpected differences in experiment allocation or logging.","SRM"],
["Experimentation","Advanced","Why does CUPED often improve experimental precision?",["It removes all outliers","It reduces outcome variance using correlated pre-treatment covariates","It guarantees significance","It changes the treatment group"],1,"Pre-treatment covariates correlated with outcomes can explain residual variation.","CUPED"],
["Experimentation","Advanced","If a metric is orders per user, why might a naive event-level t-test be invalid?",["Orders are never numeric","Multiple events from one user violate observation independence","Ratio metrics have no uncertainty","A test requires equal orders per user"],1,"Randomization and dependence should align at the user/cluster level.","Correlated outcomes"],
["Causal inference","Foundational","In the potential-outcomes framework, the fundamental problem of causal inference is:",["We observe both outcomes for each person","We cannot simultaneously observe both treatment potential outcomes for the same unit","All studies are confounded","Randomized experiments always fail"],1,"We only observe the potential outcome under the received treatment.","Potential outcomes"],
["Causal inference","Intermediate","Which assumption is especially needed to identify causal effects using propensity-score methods in observational data?",["No unmeasured confounding given measured covariates","Perfect predictive accuracy","Equal group sizes","Normality of the treatment"],0,"Identification typically requires conditional exchangeability (plus consistency and positivity).","Propensity scores"],
["Causal inference","Intermediate","A covariate that is caused by treatment and then affects the outcome is generally called:",["A baseline confounder","A mediator","An instrument","A randomized block"],1,"A mediator lies on the causal path from treatment to outcome.","Mediation"],
["Causal inference","Advanced","What makes an augmented inverse-probability-weighted estimator doubly robust?",["It always has zero variance","It can be consistent if either the outcome model or propensity model is correctly specified (with other assumptions)","It requires two instruments","It doubles the sample size"],1,"Doubly robust procedures combine outcome regression and weighting.","Doubly robust estimation"],
["Causal inference","Advanced","In a conventional difference-in-differences design, the key identifying condition is:",["Equal outcomes before intervention","Parallel untreated outcome trends across groups","Treatment randomly assigned","Identical baseline means"],1,"The assumption concerns how untreated outcomes would have trended.","Difference-in-differences"],
["Causal inference","Advanced","Which is a common consideration for Bayesian causal analysis?",["Posterior uncertainty depends partly on model and prior assumptions","Posteriors are always prior-independent","The treatment effect must be constant","Ignorability is never required"],0,"Bayesian posterior causal estimates rely on causal identification and modeling assumptions.","Bayesian inference"],
["Machine learning","Foundational","A model performs well on training data but poorly on unseen data. The most likely issue is:",["Underfitting","Overfitting","Too much test data","Perfect calibration"],1,"A generalization gap often indicates overfitting.","Generalization"],
["Machine learning","Intermediate","Which metric emphasizes the quality of ordering in ranked retrieval?",["MAE","NDCG","R-squared","Adjusted R-squared"],1,"Normalized discounted cumulative gain accounts for position and relevance.","Ranking metrics"],
["Machine learning","Intermediate","For rare positive classes, which can be more informative than ROC-AUC?",["PR-AUC","Training accuracy alone","Sample size alone","AIC only"],0,"Precision-recall curves emphasize positive class performance.","Classification metrics"],
["Machine learning","Advanced","Why should model features be timestamped when building training data?",["To increase CPU speed","To prevent future information from leaking into historical predictions","To guarantee accuracy","To remove the need for monitoring"],1,"Use only features available at the prediction timestamp.","Data leakage"],
["SQL","Foundational","Which SQL window expression numbers rows within each user, ordered by event time?",["ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time)","COUNT(*) GROUP BY user_id","ORDER BY user_id","DENSE_RANK() GROUP BY user_id"],0,"ROW_NUMBER with PARTITION BY and ORDER BY labels events in each user sequence.","SQL windows"],
["SQL","Intermediate","A LEFT JOIN from users to orders followed by WHERE orders.status='complete' usually:",["Preserves every user","Drops unmatched users, behaving like an inner filter for that condition","Doubles every user","Returns only users with zero orders"],1,"WHERE on the right table removes NULL rows produced by the outer join.","Join semantics"],
["Python","Foundational","Average-case lookup for a key in a Python dict is generally:",["O(n²)","O(log n)","O(1)","O(n)"],2,"Hash maps support average constant-time lookup.","Hashing"],
["Python","Intermediate","Which approach usually finds duplicates in a list in expected O(n) time?",["Nested loops","Sort by bubble sort","Track seen values with a set","Recompute counts for every item"],2,"A hash set supports average constant-time membership checks.","Sets"],
["Product analytics","Foundational","A search feature increases query count but not successful outcomes. The next useful step is:",["Declare success immediately","Inspect successful sessions, reformulations and downstream completion","Ignore conversion","Maximize query volume"],1,"Activity metrics need to be balanced with user success and downstream outcomes.","Metric trees"],
["Product analytics","Intermediate","A conversion decline occurs only in one entry channel. Which investigation is most useful first?",["Remove all experiments","Decompose channel mix, cohort changes and funnel stages","Assume seasonality","Retrain all models"],1,"Segmented diagnosis separates composition changes and within-segment deterioration.","Metric diagnosis"],
["Statistics","Advanced","For correlated observations within users, which adjustment is often appropriate for regression uncertainty?",["Naive iid SE","User-clustered robust standard errors","Ignore repeated rows","Randomly duplicate users"],1,"Clustered SE accounts for within-user dependence under suitable assumptions.","Cluster robust SE"],
["Statistics","Advanced","What is a key difference between a fixed-effect and random-intercept model?",["Random intercepts allow group-specific intercepts with a distributional assumption","Fixed effects always use a Bayesian prior","Both guarantee causal identification","Random intercepts prohibit correlated data"],0,"Random intercepts partially pool groups using assumptions on group-level variation.","Multilevel modeling"],
["Statistics","Advanced","What is GEE commonly used for?",["Marginal regression with correlated observations","Training neural networks","Imputing all missing values","Computing eigenvectors"],0,"Generalized estimating equations support marginal models of clustered outcomes.","GEE"]
];
const KEY="adslab-v1";
const empty=()=>({completed:[],hours:Array(8).fill(0),notes:Array(8).fill(""),quizHistory:[],reviewed:[],theme:"dark"});
let data;
try{const d=JSON.parse(localStorage.getItem(KEY));data={...empty(),...(d&&typeof d==="object"?d:{})};if(!Array.isArray(data.completed))data.completed=[];if(!Array.isArray(data.quizHistory))data.quizHistory=[];if(!Array.isArray(data.hours)||data.hours.length!==8)data.hours=Array(8).fill(0);if(!Array.isArray(data.notes)||data.notes.length!==8)data.notes=Array(8).fill("");}catch{data=empty();}
let view="overview",activeWeek=0,resourceFilter="All",quiz=null,cardIdx=0,cardFlip=false,cardSubject="All";
const $=id=>document.getElementById(id),esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pct=(x,y)=>Math.round((x/(y||1))*100);
const totalHours=()=>data.hours.reduce((a,b)=>a+Number(b||0),0);
function persist(){try{localStorage.setItem(KEY,JSON.stringify(data));}catch{toast("Browser storage is unavailable. Export a backup.")}}
function toast(s){const t=$("toast");t.textContent=s;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",2800)}
function header(label,heading,desc){return '<div class="eyebrow">'+esc(label)+'</div><h1 class="title">'+esc(heading)+'</h1><p class="intro">'+esc(desc)+'</p>'}
function bar(n,d,green=false){return '<div class="progress'+(green?' green':'')+'"><i style="width:'+Math.min(100,pct(n,d))+'%"></i></div>'}
function button(txt,fn,cls="btn"){return '<button class="'+cls+'" type="button" data-action="'+esc(fn)+'">'+esc(txt)+'</button>'}
function weekCard(w,i){const count=data.completed.filter(t=>t.startsWith(i+"-")).length;return '<button class="weekly-card" data-week="'+i+'" type="button"><span class="weeknum">MODULE '+String(i+1).padStart(2,"0")+'</span><h3>'+esc(w[0])+'</h3>'+bar(count,6)+'<span class="tiny muted">'+count+' of 6 topics complete</span></button>'}
function overview(){
 let done=data.completed.length;
 return header("Your learning space","Small steps. Deep understanding.","An eight-week guided learning pathway for statistics, causal reasoning, programming, product analytics and applied machine learning.")+
 '<div class="grid stats">'+
 [['Curriculum progress',pct(done,48)+'%',''+done+' / 48 topics'],['Study time',totalHours().toFixed(1)+'h',totalHours().toFixed(1)+' / 80h target'],['Assessments',data.quizHistory.length,'Completed quizzes'],['Average accuracy',data.quizHistory.length?pct(data.quizHistory.reduce((s,q)=>s+q.correct,0),data.quizHistory.reduce((s,q)=>s+q.total,0))+'%':'—','Across completed quizzes']].map(a=>'<div class="stat"><div class="label">'+a[0]+'</div><div class="num">'+a[1]+'</div><div class="detail">'+a[2]+'</div></div>').join('')+'</div>'+
 '<div class="grid two section"><div class="panel"><div class="row"><h2 class="block-title">Eight-week learning pathway</h2><span class="pill">'+done+' / 48 complete</span></div><div class="grid thirds">'+W.map(weekCard).join('')+'</div></div><div class="panel"><h2 class="block-title">Your next learning step</h2><div class="focus-box"><span class="eyebrow">RECOMMENDED</span><h2>'+esc(W[Math.min(7,Math.max(0,W.findIndex((_,i)=>data.completed.filter(x=>x.startsWith(i+"-")).length<6)))][0])+'</h2><p>Start with a reading, mark the topic complete, then test recall with a short quiz.</p>'+button("Open learning pathway","pathway")+'</div><h2 class="block-title section">Weekly rhythm</h2><div class="muted">3h statistics · 2.5h Python · 2h ML · 1.5h product analytics · 1h SQL</div><div class="section"><div class="row"><span class="muted">Your current study time</span><strong>'+totalHours().toFixed(1)+' / 80h</strong></div>'+bar(totalHours(),80,true)+'</div></div></div>'+
 '<div class="section grid two"><div class="panel"><h2 class="block-title">Revisit these concepts</h2>'+['Bayes theorem and conditional probability','Standard error versus standard deviation','CLT and sampling distributions','Confidence interval interpretation'].map((x,i)=>'<div class="resource-link"><div><strong>'+x+'</strong><small>Initial learning assessment: '+[4,5,5,6][i]+'/10</small></div><span class="pill">Review</span></div>').join('')+'</div><div class="panel"><h2 class="block-title">Practice with intention</h2><p class="muted">Build a short quiz around your current module. Each answer has immediate feedback and an explanation.</p>'+button("Open practice lab","practice")+'<h2 class="block-title section">Progress portability</h2><p class="muted">Study progress is saved in this browser. Export and import a JSON backup to move devices.</p>'+button("Import backup","import","ghost")+'</div></div>';
}
function pathway(){
 const w=W[activeWeek],n=data.completed.filter(x=>x.startsWith(activeWeek+"-")).length;
 return header("Structured curriculum","Your learning pathway","Follow topics sequentially or explore any module. Advanced Duke coursework is integrated into the second half of the pathway.")+
 '<div class="toolbar"><label class="muted" for="weekPicker">SELECT WEEK</label><select id="weekPicker" style="max-width:390px">'+W.map((a,i)=>'<option value="'+i+'" '+(i===activeWeek?'selected':'')+'>Week '+(i+1)+' · '+esc(a[0])+'</option>').join('')+'</select><span class="pill">'+n+'/6 completed</span></div>'+
 '<div class="grid two"><div class="panel"><span class="eyebrow">WEEK '+(activeWeek+1)+'</span><h2 class="section-title">'+esc(w[0])+'</h2><p class="sub">'+esc(w[1])+'</p>'+bar(n,6)+'<div class="section">'+w[2].map((x,i)=>{const k=activeWeek+"-"+i,d=data.completed.includes(k);return '<label class="check-row '+(d?'done':'')+'"><input type="checkbox" data-complete="'+k+'" '+(d?'checked':'')+'/><span><strong>'+esc(x)+'</strong><small>'+esc(["Fundamental concept","Mathematical or applied extension","Practical exercise","Guided practice","Deeper application","Case synthesis"][i])+'</small></span></label>'}).join('')+'</div></div>'+
 '<div class="panel"><h2 class="block-title">Guided reading list</h2>'+RES.filter(x=>x[4]===activeWeek+1 || (activeWeek>0&&x[4]===activeWeek)).slice(0,6).map(x=>'<div class="resource-link"><div><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div><a href="'+esc(x[3])+'" target="_blank" rel="noopener noreferrer">Read ↗</a></div>').join('')+
 '<div class="section"><h2 class="block-title">Log learning time</h2><div class="row"><span class="muted">Week '+(activeWeek+1)+' hours</span><strong>'+Number(data.hours[activeWeek]).toFixed(1)+' / 10</strong></div>'+bar(Number(data.hours[activeWeek]),10,true)+'<div class="toolbar">'+button("− 30 min","less-hour","ghost")+button("+ 30 min","more-hour","ghost")+'</div></div>'+
 '<div class="section"><h2 class="block-title">Weekly learning notes</h2><textarea id="weeklyNotes" aria-label="Weekly notes" placeholder="What clicked? Which derivations need revisiting?">'+esc(data.notes[activeWeek])+'</textarea><p class="hint">Automatically saved locally as you type.</p></div>'+
 '<div class="toolbar">'+button("Practice this module","practice")+'</div></div></div>';
}
function resources(){
 const cats=["All",...new Set(RES.map(x=>x[1]))],entries=RES.filter(r=>resourceFilter==="All"||r[1]===resourceFilter);
 return header("Curated references","Resource library","Selected university courses, open textbooks and practical labs. Use the study pathway to decide what to read next.")+
 '<div class="toolbar"><label for="resourceFilter" class="muted">FILTER BY SUBJECT</label><select id="resourceFilter" style="max-width:280px">'+cats.map(c=>'<option '+(resourceFilter===c?'selected':'')+'>'+esc(c)+'</option>').join('')+'</select></div>'+
 '<div class="resource-grid">'+entries.map(r=>'<article class="resource-tile"><span class="category">'+esc(r[1])+' · WEEK '+r[4]+'+</span><h3>'+esc(r[0])+'</h3><p>'+esc(r[2])+'</p><a href="'+esc(r[3])+'" target="_blank" rel="noopener noreferrer">Explore resource ↗</a></article>').join('')+'</div>';
}
function quizSetup(){
 let subject=quiz?.subject||"Mixed topics",diff=quiz?.difficulty||"Mixed",size=quiz?.size||5;
 return header("Active recall","Practice lab","Create a quiz from the built-in question bank. Answers are graded instantly with explanations and topic-level feedback.")+
 '<div class="grid two"><div class="panel"><h2 class="block-title">Create an assessment</h2>'+
 '<div class="form-field"><label for="quizSubject">Subject</label><select id="quizSubject">'+["Mixed topics","Statistics","Experimentation","Causal inference","Machine learning","SQL","Python","Product analytics"].map(s=>'<option '+(subject===s?'selected':'')+'>'+s+'</option>').join('')+'</select></div>'+
 '<div class="form-field"><label for="quizDifficulty">Difficulty</label><select id="quizDifficulty">'+["Mixed","Foundational","Intermediate","Advanced"].map(s=>'<option '+(diff===s?'selected':'')+'>'+s+'</option>').join('')+'</select></div>'+
 '<div class="form-field"><label for="quizSize">Questions</label><select id="quizSize">'+[5,10,20].map(x=>'<option '+(size===x?'selected':'')+'>'+x+'</option>').join('')+'</select></div>'+
 '<div class="form-field"><label for="quizWeek">Curriculum week</label><select id="quizWeek">'+W.map((x,i)=>'<option value="'+i+'" '+(activeWeek===i?'selected':'')+'>Week '+(i+1)+': '+esc(x[0])+'</option>').join('')+'</select></div>'+
 '<p class="hint">The local bank contains '+BANK.length+' reviewed questions. Quiz length is capped by the number of matching questions; mixed-topic quizzes provide more variety.</p>'+button("Generate quiz","start-quiz")+'</div>'+
 '<div class="panel"><h2 class="block-title">A good practice routine</h2><p class="muted">Take a five-question knowledge check midweek and a ten-question cumulative quiz on Sunday. Review explanations even when you answered correctly.</p><div class="focus-box section"><span class="eyebrow">KNOWLEDGE FIRST</span><h2>Explain instead of only memorizing.</h2><p>Try to justify an answer before selecting it. Use your notebook to derive equations and track assumptions.</p></div><h2 class="block-title section">Most recent assessments</h2>'+
 (data.quizHistory.length?data.quizHistory.slice(-4).reverse().map(x=>'<div class="history-row row"><span>'+esc(x.subject)+'<small style="display:block" class="muted">'+esc(x.date)+'</small></span><strong>'+pct(x.correct,x.total)+'%</strong></div>').join(''):'<div class="empty">No completed assessments yet.</div>')+'</div></div>';
}
function startQuiz(){
 const subject=$("quizSubject").value,difficulty=$("quizDifficulty").value,size=Number($("quizSize").value),wk=Number($("quizWeek").value);
 activeWeek=wk;
 let pool=BANK.map((q,i)=>({...{subject:q[0],difficulty:q[1],text:q[2],options:q[3],answer:q[4],explanation:q[5],tag:q[6]},idx:i}))
 .filter(q=>(subject==="Mixed topics"||q.subject===subject)&&(difficulty==="Mixed"||q.difficulty===difficulty));
 if(!pool.length){toast("No questions match that combination. Try Mixed difficulty.");return}
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 quiz={subject,difficulty,size,items:pool.slice(0,size),idx:0,selected:null,correct:0,answers:[],ended:false};
 render();
}
function quizScreen(){
 if(quiz.ended){
  const missed=quiz.answers.filter(x=>!x.correct),correct=quiz.correct,total=quiz.items.length;
  return header("Practice complete","Assessment summary","Use each missed topic as a focused revision opportunity.")+
  '<div class="grid two"><div class="panel"><span class="eyebrow">YOUR RESULT</span><div class="num" style="font:700 60px Outfit">'+pct(correct,total)+'%</div><p>'+correct+' correct of '+total+' questions</p>'+bar(correct,total,true)+'<div class="toolbar">'+button("New quiz","reset-quiz")+button("Review resources","resources","ghost")+'</div></div><div class="panel"><h2 class="block-title">Revision opportunities</h2>'+ (missed.length?missed.map(x=>'<div class="history-row"><strong>'+esc(x.tag)+'</strong><p class="sub">'+esc(x.explanation)+'</p></div>').join(''):'<div class="empty">Great work! Try an advanced quiz next.</div>')+'</div></div>';
 }
 const q=quiz.items[quiz.idx],chosen=quiz.selected!==null;
 return header("Active recall","Knowledge assessment","Question "+(quiz.idx+1)+" of "+quiz.items.length+" · "+quiz.subject+" · "+quiz.difficulty)+
 '<div class="panel" style="max-width:850px"><div class="row"><span class="pill">'+esc(q.tag)+'</span><strong>'+pct(quiz.idx,quiz.items.length)+'% through</strong></div>'+bar(quiz.idx,quiz.items.length)+
 '<div class="question">'+esc(q.text)+'</div>'+q.options.map((c,i)=>'<button type="button" class="choice '+(chosen?(i===q.answer?'correct':i===quiz.selected?'incorrect':''):'')+'" '+(chosen?'disabled':'')+' data-answer="'+i+'">'+String.fromCharCode(65+i)+'. '+esc(c)+'</button>').join('')+
 (chosen?'<div class="explanation"><strong>'+(quiz.selected===q.answer?'✓ Correct':'Not quite — '+String.fromCharCode(65+q.answer)+' is correct')+'</strong><p>'+esc(q.explanation)+'</p></div><div class="toolbar">'+button(quiz.idx+1===quiz.items.length?"Finish assessment":"Next question","next-question")+'</div>':'<p class="hint">Choose one answer to reveal the reasoning.</p>')+'</div>';
}
function practice(){return quiz?(quiz.items?quizScreen():quizSetup()):quizSetup()}
function flashcards(){
 let cards=BANK.filter(q=>cardSubject==="All"||q[0]===cardSubject),q=cards[cardIdx%cards.length];if(!q){cardIdx=0;cardSubject="All";cards=BANK;q=cards[0]}
 return header("Reinforce knowledge","Flashcards","Flip cards for worked explanations. Use them for quick concept recall before practice sessions.")+
 '<div class="panel" style="max-width:850px"><div class="toolbar"><label for="cardSubject">Subject</label><select id="cardSubject" style="max-width:270px">'+["All",...new Set(BANK.map(x=>x[0]))].map(x=>'<option '+(cardSubject===x?'selected':'')+'>'+esc(x)+'</option>').join('')+'</select><span class="spacer"></span><span class="pill">Card '+((cardIdx%cards.length)+1)+' / '+cards.length+'</span></div>'+
 '<button class="flashcard" data-action="flip-card" aria-label="Flip flashcard"><div><span class="eyebrow">'+(cardFlip?"EXPLANATION":"QUESTION")+'</span><h2>'+esc(cardFlip?q[5]:q[2])+'</h2><p class="muted">'+(cardFlip?"Tap to return to question":"Tap to reveal the explanation")+'</p></div></button>'+
 '<div class="toolbar">'+button("← Previous","prev-card","ghost")+button("Flip card","flip-card")+button("Next →","next-card","ghost")+'</div></div>';
}
function insights(){
 const scores=data.quizHistory,tot=scores.reduce((s,x)=>s+x.total,0),correct=scores.reduce((s,x)=>s+x.correct,0);
 const buckets={};for(const entry of scores){for(const ans of entry.answers||[]){if(!buckets[ans.tag])buckets[ans.tag]={right:0,total:0};buckets[ans.tag].right+=Number(ans.correct);buckets[ans.tag].total++;}}
 const sorted=Object.entries(buckets).sort((a,b)=>pct(a[1].right,a[1].total)-pct(b[1].right,b[1].total));
 return header("Learning analytics","Progress insights","Review your consistency and revise concepts with weaker performance.")+
 '<div class="grid stats">'+[['Completed topics',data.completed.length+'/48'],['Total study time',totalHours().toFixed(1)+' hours'],['Assessment accuracy',tot?pct(correct,tot)+'%':'—'],['Assessment attempts',scores.length]].map(x=>'<div class="stat"><div class="label">'+x[0]+'</div><div class="num">'+x[1]+'</div></div>').join('')+'</div>'+
 '<div class="grid two section"><div class="panel"><h2 class="block-title">Study time by week</h2><div class="bars">'+data.hours.map((h,i)=>'<div class="bar-col"><div class="bar" title="'+esc(h)+' hours" style="height:'+Math.min(100,(Number(h)/10)*100)+'%"></div><small>W'+(i+1)+'</small></div>').join('')+'</div><p class="sub">Suggested weekly rhythm: 10 hours.</p></div><div class="panel"><h2 class="block-title">Concept mastery</h2>'+
 (sorted.length?sorted.map(([k,v])=>'<div class="history-row"><div class="row"><strong>'+esc(k)+'</strong><span>'+pct(v.right,v.total)+'% · '+v.total+' attempt(s)</span></div>'+bar(v.right,v.total)+'</div>').join(''):'<div class="empty">Complete a quiz to see concept-level results.</div>')+'</div></div>'+
 '<div class="panel section"><h2 class="block-title">Assessment history</h2>'+(scores.length?scores.slice().reverse().map(x=>'<div class="history-row row"><div><strong>'+esc(x.subject)+' · '+esc(x.difficulty)+'</strong><small style="display:block" class="muted">'+esc(x.date)+' · '+x.total+' questions</small></div><strong>'+pct(x.correct,x.total)+'%</strong></div>').join(''):'<div class="empty">No quiz history yet.</div>')+'</div>';
}
function notes(){
 return header("Personal knowledge base","Study notebook","Store derivations, questions and learning reflections by week. Everything remains in your browser.")+
 '<div class="toolbar"><label for="notesWeek">MODULE</label><select id="notesWeek" style="max-width:400px">'+W.map((x,i)=>'<option value="'+i+'" '+(i===activeWeek?'selected':'')+'>Week '+(i+1)+' · '+esc(x[0])+'</option>').join('')+'</select></div><div class="panel" style="max-width:900px"><h2 class="block-title">'+esc(W[activeWeek][0])+'</h2><p class="muted">Ideas to capture: definitions, assumptions, derivations, open questions, useful analogies and mistakes worth revisiting.</p><textarea id="weeklyNotes" style="min-height:300px" placeholder="Your private learning notes...">'+esc(data.notes[activeWeek])+'</textarea><p class="hint">Saved automatically in this browser. Use Export data for backups.</p><div class="toolbar">'+button("Export backup","export")+button("Import backup","import","ghost")+'</div></div>';
}
const names={overview:"Overview",pathway:"Learning pathway",resources:"Resource library",practice:"Practice lab",flashcards:"Flashcards",insights:"Progress insights",notes:"Study notebook"};
function render(){
 document.documentElement.classList.toggle("light",data.theme==="light");
 $("themeToggle").textContent=data.theme==="light"?"☾ Dark theme":"☀ Light theme";
 document.querySelectorAll("[data-view]").forEach(x=>x.classList.toggle("active",x.dataset.view===view));
 $("currentPage").textContent=names[view];
 $("main").innerHTML=({overview,pathway,resources,practice,flashcards,insights,notes})[view]();
}
function changeView(v){view=v;if(v==="practice"&&!quiz)quiz=null;render();window.scrollTo({top:0,behavior:"smooth"})}
function download(){const blob=new Blob([JSON.stringify({...data,exportedAt:new Date().toISOString()},null,2)],{type:"application/json"});const u=URL.createObjectURL(blob);const a=document.createElement("a");a.href=u;a.download="applied-ds-learning-progress.json";a.click();URL.revokeObjectURL(u);toast("Backup exported")}
function importBackup(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{let next=JSON.parse(reader.result);if(!Array.isArray(next.completed)||!Array.isArray(next.hours)||!Array.isArray(next.notes)||!Array.isArray(next.quizHistory))throw Error("invalid");if(next.hours.length!==8||next.notes.length!==8)throw Error("invalid");data={...empty(),completed:next.completed.filter(x=>/^[0-7]-[0-5]$/.test(x)),hours:next.hours.map(x=>Math.max(0,Number(x)||0)),notes:next.notes.map(x=>String(x).slice(0,20000)),quizHistory:next.quizHistory,theme:next.theme==="light"?"light":"dark"};persist();render();toast("Progress imported")}catch{toast("Invalid progress JSON file")}};reader.readAsText(file)}
document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-view]");if(nav){changeView(nav.dataset.view);$("nav").closest(".sidebar").classList.remove("open");return}
 const wc=e.target.closest("[data-week]");if(wc){activeWeek=+wc.dataset.week;changeView("pathway");return}
 const answer=e.target.closest("[data-answer]");if(answer&&quiz&&!quiz.ended&&quiz.selected===null){const q=quiz.items[quiz.idx],chosen=+answer.dataset.answer;quiz.selected=chosen;quiz.answers.push({tag:q.tag,correct:chosen===q.answer,explanation:q.explanation});if(chosen===q.answer)quiz.correct++;render();return}
 const el=e.target.closest("[data-action]");if(!el)return;const action=el.dataset.action;
 if(names[action]){changeView(action);return}
 if(action==="more-hour"||action==="less-hour"){data.hours[activeWeek]=Math.max(0,Number(data.hours[activeWeek])+ (action==="more-hour"?0.5:-0.5));persist();render()}
 if(action==="start-quiz")startQuiz();
 if(action==="next-question"&&quiz){quiz.idx++;quiz.selected=null;if(quiz.idx>=quiz.items.length){quiz.ended=true;data.quizHistory.push({date:new Date().toLocaleDateString(),subject:quiz.subject,difficulty:quiz.difficulty,correct:quiz.correct,total:quiz.items.length,answers:quiz.answers});persist()}render()}
 if(action==="reset-quiz"){quiz=null;render()}
 if(action==="flip-card"){cardFlip=!cardFlip;render()}
 if(action==="prev-card"||action==="next-card"){const len=BANK.filter(q=>cardSubject==="All"||q[0]===cardSubject).length;cardIdx=(cardIdx+(action==="prev-card"?len-1:1))%len;cardFlip=false;render()}
 if(action==="export")download();
 if(action==="import")$("importFile").click();
});
document.addEventListener("change",e=>{
 const el=e.target;
 if(el.matches("[data-complete]")){const id=el.dataset.complete;data.completed=el.checked?[...new Set([...data.completed,id])]:data.completed.filter(x=>x!==id);persist();render()}
 if(el.id==="weekPicker"||el.id==="notesWeek"){activeWeek=+el.value;render()}
 if(el.id==="resourceFilter"){resourceFilter=el.value;render()}
 if(el.id==="cardSubject"){cardSubject=el.value;cardIdx=0;cardFlip=false;render()}
 if(el.id==="importFile"){importBackup(el.files[0]);el.value=""}
});
document.addEventListener("input",e=>{if(e.target.id==="weeklyNotes"){data.notes[activeWeek]=e.target.value;persist()}});
$("exportTop").addEventListener("click",download);
$("themeToggle").addEventListener("click",()=>{data.theme=data.theme==="light"?"dark":"light";persist();render()});
$("mobileMenu").addEventListener("click",()=>$("nav").closest(".sidebar").classList.toggle("open"));
$("todayDate").textContent=new Date().toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});
render();
