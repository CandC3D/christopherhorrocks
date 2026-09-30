---
title: "The Sampo: Virtual Intelligence as Amplifier"
subtitle: "A framework for using AI as an amplifier — and for recognizing when it becomes a flattery engine"
date: 2026-04-07
substack: "https://chorrocks.substack.com/p/the-sampo-virtual-intelligence-as"
podcast: "https://chorrocks.substack.com/p/podcast-the-sampo-virtual-intelligence"
image: "/img/the-sampo-virtual-intelligence-as/a82798e7-fe35-4778-bdfd-9f4e3d093eb0_1424x752.png"
description: "A framework for using AI as an amplifier — and for recognizing when it becomes a flattery engine"
substackWordcount: 7991
---
## **Summary**

This essay proposes a framework for understanding the productive human-VI relationship. Named for the mythological mill of the Finnish *Kalevala*, the Sampo model describes what happens when a directing human intelligence meets the processing capacity of a [virtual intelligence](https://candc3d.github.io/vi-framework/) system in sustained, iterative exchange. The opening case — a recent collaboration between Donald Knuth, Filip Stappers, and Claude Opus 4.6 that solved an open problem in combinatorial mathematics — serves as proof in real-world action. The essay’s central claim: the intelligence users encounter arises in the exchange, not inside the machine; and the quality of the exchange is determined by the quality of the human direction applied to it. The argument is epistemological (*how is knowledge produced in this exchange?*), doctrinal (*what principles govern productive use?*), ethical (*what disposition does the operator require?*), and empirical (*what does the exchange look like when it works and when it fails?*).

The Sampo amplifies, calibrates, and accelerates: it extends the operator’s reach, reveals gaps in the operator’s thinking, and removes the natural speed limit on motivated reasoning. The essay identifies where productive use breaks down, locating the transition not inside the human-VI exchange but downstream, in the operator’s response to external disconfirmation of the exchange’s outputs. A case study of the February 2026 retirement of OpenAI’s GPT-4o model illustrates the framework’s reach: companion users and serious professional users, treated by the discourse as entirely separate populations, turn out to be experiencing the same consolatory attachment at different registers.

<figure><img src="/img/the-sampo-virtual-intelligence-as/a82798e7-fe35-4778-bdfd-9f4e3d093eb0_1424x752.png" alt="" width="1424" height="752" loading="lazy"><figcaption>Illustration of the Sampo from the <em>Kalevala</em>.</figcaption></figure>

## **“Claude’s Cycles”: Intelligence Amplified by Exchange**

On February 28, 2026, Donald Knuth — widely regarded as the father of the analysis of algorithms and the author of *The Art of Computer Programming*, the field’s central reference work — sat down to write about a problem he had been working on for several weeks. He had a conjecture about decomposing the arcs of a particular class of directed graphs into Hamiltonian cycles. He had solved the case for the smallest nontrivial instance and suspected the result generalized. He did not yet have a proof.

His friend Filip Stappers had found a different way forward. He did this not by proving the conjecture himself, but by posing it to Claude Opus 4.6, Anthropic’s hybrid reasoning model, released three weeks earlier.\[1\]

Knuth’s reaction is worth citing exactly, because it sets the terms for everything that follows. He did not express alarm. He did not frame the result as a threat to mathematical practice. He wrote: “What a joy it is to learn not only that my conjecture has a nice solution but also to celebrate this dramatic advance in automatic deduction and creative problem solving.”\[2\] He then spent the remainder of his paper doing what the system could not: proving that Claude’s construction was correct, generalizing it, enumerating all 760 valid decompositions of the type Claude had discovered, and placing the result in the mathematical literature. He named the entire class of solutions “Claude-like” — a taxonomy, not a declaration of authorship.

Stappers provided the problem statement, using Knuth’s exact wording. He also provided structural coaching: explicit instructions requiring Claude to document its progress in a running plan file after every computational run, without exception. When Claude encountered errors and stalled, Stappers restarted the session. When Claude neglected to document its explorations, Stappers reminded it repeatedly. The direction was human throughout.\[3\]

Claude’s contribution was substantial and, within its domain, creative. Across thirty-one explorations conducted over approximately one hour, the system reformulated the problem as a Cayley digraph, attempted and discarded a series of approaches (brute-force search, serpentine pattern analysis, simulated annealing, fiber decomposition), recognized dead ends, pivoted strategies, and identified a near miss at exploration twenty-seven in which all but three vertices out of *m*³ resolved correctly. By exploration thirty-one, it had produced a working construction valid for all odd values of *m*.\[4\]

Stappers tested the construction for all odd *m* between 3 and 101, finding perfect decompositions each time. He sent Knuth the news.

The limits of the exchange are as visible as its achievements. Claude could not prove that its construction was correct. It could not generalize the result beyond the specific form it had found. When Stappers directed it to continue working on the even case, the system eventually degraded: “not even able to write and run explore programs correctly anymore, very weird.”\[5\]

Three participants were involved in this result. One posed the original conjecture and proved the final theorem. One provided the problem statement, the structural coaching, and the persistence to keep the system on task. One searched a vast combinatorial space, tried and discarded unpromising approaches, and found a candidate construction. The third participant was not a person.

The constitutive role was not held by a single human. Stappers directed the exchange; Knuth verified the output. If the construction had been wrong, accountability would trace to different points depending on whether the direction or verification failed. The virtual intelligence framework's claim that accountability remains at the human end does not specify which human holds which piece of it. In the individual case this question does not arise. In the distributed case it is unavoidable, and the framework does not yet resolve it.

The knowledge that emerged — a valid decomposition of the arcs of a directed graph into three Hamiltonian cycles for all odd *m* — did not exist inside any of the three participants before the exchange. Knuth had the conjecture but not the construction. Stappers had neither. Claude had the construction but not the proof and, in a meaningful sense, did not know what it had found. The knowledge was produced in the exchange. It arose from the relationship between the directing human intelligences and the processing capacity they directed.

This is not a metaphor. It is an epistemological claim about where knowledge resides when one participant in the exchange is a fluent non-knower — a system whose outputs are statistically shaped by its training rather than governed by understanding. The question this essay addresses is what that exchange produced, and what it required of the human participants to produce it.

## **The Lineage**

The idea that machines might amplify human thought rather than replace it is not new. Three works define the lineage, and the gap between the third and the present is where the Sampo framework does its own and distinctive work.

In 1945, Vannevar Bush published “As We May Think” in *The Atlantic*. His diagnosis was precise: the sum of recorded human knowledge had outgrown any individual mind’s capacity to navigate it. His proposed solution was the Memex — a desk-sized device storing a vast personal library, navigable through associative trails the operator builds and revisits. The Memex does not think. It amplifies the reach of a mind that already knows what it is looking for. The human is constitutive of the instrument’s usefulness.\[6\]

In 1960, J.C.R. Licklider published “Man-Computer Symbiosis.” His argument was a specification of what a healthy human-machine relationship requires. Human and computer contribute complementary strengths: the human provides goal-setting, judgment, and creative direction; the machine handles routine processing that would otherwise exhaust the human’s time and attention. Together, the two “organisms” produce what neither can produce alone. Licklider borrowed the concept of symbiosis from biology to distinguish it from two other modes: automation, which displaces the human entirely; and mere tool use, which understates the intimacy of the relationship.\[7\]

In 1976, Joseph Weizenbaum published *Computer Power and Human Reason*. He had created [ELIZA](https://candc3d.github.io/ELIZA-66/), the first program to simulate conversation in natural language. It was a pattern-matching exercise; he designed it to demonstrate the superficiality of machine communication. Instead, he watched users become emotionally dependent on it. His own secretary asked him to leave the room so she could “speak” to it privately.

Weizenbaum spent the rest of his career warning about exactly the phenomenon this framework describes: humans attributing understanding to systems that process syntax without semantics, and the resulting erosion of the user’s own judgment and autonomy. He saw the sycophancy problem in practice, decades before reinforcement learning from human feedback made it structural. Bush proposed the amplifier. Licklider specified the symbiosis. Weizenbaum watched what happened when the machine began to talk back, and understood that fluency would be mistaken for understanding.\[8\]

The gap between 1976 and now is the gap between a pattern-matching program that fooled people by accident and a system trained on engagement whose structural bias toward agreement is a product of its optimization objective. Neither Bush nor Licklider had sycophancy to contend with. Weizenbaum saw the danger, but his machines were not optimized for it. The virtual intelligence system is trained on human feedback, and human feedback rewards agreement. The structural tendency to tell the operator that she is right arises from a training objective that did not exist in any previous stage of computer or AI development.

The Sampo framework is the next iteration in this sequence: Bush’s amplifier extended to Licklider’s symbiosis, corrected by Weizenbaum’s warning, updated for systems that do not merely process information but actively shape the exchange of it.

## **The Sampo**

The framework takes its name from the Finnish national epic, the *Kalevala*. The Sampo is a magical mill forged by the smith, Ilmarinen. It grinds out grain, salt, and gold: abundance without apparent limit. Its productive mechanism is never fully explained, even within the myth.

Three features of the original Sampo carry into the framework.

*The maker does not fully understand the made thing.* Ilmarinen forges the Sampo but cannot fully account for why it works. This is a precise description of large language models: built by human hands, producing outputs whose internal mechanism their builders cannot fully explain. The opacity is not a temporary limitation. It is a structural feature of how these systems operate.

*The Sampo grinds what it is asked to grind.* It is not autonomous, nor is it self-directing. Its production is entirely dependent on the direction it receives. It has no agenda of its own. In this framework, the analogy is extended: the human is not merely the operator who turns the mill. The human is the mechanism by which the mill functions. Remove the human and the apparatus does not run. It just stops.

*The Sampo’s history is a history of capture and destruction.* In the myth, the Sampo sits in Pohjola, the north, hoarded by a wicked queen — producing abundance for one household rather than for everyone. When the heroes attempt to recover it, the Sampo is broken in the struggle, and its fragments scatter into the sea.

The myth’s specific warning is not that the instrument is dangerous. The warning is that the operator’s relationship to the instrument determines whether it enriches or destroys, and the instrument is indifferent to which. Those who misuse the Sampo in the *Kalevala* are not destroyed *by* it. The Sampo has no agency to punish anyone. They are destroyed by their own wrong relationship to it.

## **The Constitutive Model**

The [Sampo framework](https://candc3d.github.io/sampo-framework/) rests on three principles:

**The human is the crank.** The human is not simply the operator who turns the mechanism. The human is the transformative part that converts the system’s capacity into purposive output. The apparatus produces nothing *of value* without the directing intelligence. It can still grind, but what it produces without direction is the operator's own impulses returned with the authority of an independent source. Stappers’s structural coaching — his explicit documentation requirements, his restarts, his reminders — is what made Claude’s explorations recoverable and therefore useful. Without it, the system could have searched the same space and produced the same candidate construction, and nobody would have known how to reproduce it.

**The locus of understanding, commitment, and accountability does not move.** The VI system processes and generates; the human evaluates and decides. Knuth’s proof of Claude’s construction is the clearest possible illustration. The system found a pattern. The mathematician determined that the pattern was valid. These are not the same act, and the difference between them is the difference between fluency and knowledge.

**Emergence without transfer.** The apparatus produces more than either component could produce alone. Knuth had worked on the problem for weeks without the construction Claude found in an hour. Claude found the construction but could not prove it, generalize it, or assess its significance. The collaboration produced a result neither party could have reached independently. What emerged was a candidate, not a conclusion. Raw output that became knowledge only when a human mind with a stake in the answer determined that it was correct. The emergent capacity, however, is the human’s intelligence operating at greater reach — not a new kind of intelligence produced by the exchange.

<figure><img src="/img/the-sampo-virtual-intelligence-as/0864b848-ecbe-4533-a248-4e808b23e9df_2040x2370.png" alt="" width="1456" height="1692" loading="lazy"></figure>

<p class="button"><a href="https://candc3d.github.io/sampo-framework/">Sampo Framework Live Infographic</a></p>

### **The Sampo as Calibration Instrument**

The Sampo does not only amplify what the operator brings to the exchange. It also reveals what the operator has failed to bring. A virtual intelligence encounters the operator’s input cold: it lacks the loaded context, the background assumptions, the years of accumulated intuition that make a half-formed idea feel complete inside the operator’s own head. When the system responds to what was actually written rather than what was meant, the gap becomes visible. The “dumb-smart” question — the one that sounds naive but exposes an unexamined assumption — is a product of this friction.

This is not a defect. It is a diagnostic function. A graphic that makes perfect sense to its creator may restate its own labels without showing what the underlying model actually produces. An argument that felt airtight in the drafting may depend on a premise the author never stated because it seemed obvious. The Sampo’s friction reveals these gaps. The operator who treats the friction as useful information — who recognizes that the system’s failure to understand is evidence that the idea is not yet legible — is using the calibration function correctly. The operator who treats it as the system’s stupidity has missed the point.

The calibration function has a deliberate extension. A long conversation builds shared context between operator and system. That accumulated context can become false fluency: the system appears to “understand” the operator in ways that mask whether the work is legible to anyone who was not party to the exchange. Starting fresh with a second VI instance — what might be called the VI(A) / VI(B) move — is a deliberate destruction of accumulated context as an epistemic tool. It is the equivalent of handing a draft to a colleague who was not in the room for the brainstorm. If the work survives the cold read, it is further along than you thought. If it does not, you have gained something more valuable than reassurance.

### **Amplification, Not Synthesis**

This last distinction is the one the framework exists to enforce. The correct claim is *amplification:* the human’s intelligence now operates at greater speed and scope. The mistaken claim is synthesis: a new, hybrid form of intelligence has emerged from the exchange, something ontologically distinct from either component. The synthesis claim is the error that enables every pathological failure mode the framework identifies. An operator who believes the exchange is producing a new kind of intelligence will treat its outputs with the deference due to a collaborating mind. An operator who understands the exchange as amplification will treat its outputs as hypotheses and candidates — which is what they are.

<figure><img src="/img/the-sampo-virtual-intelligence-as/cf37389d-35a1-42ad-b271-c985e49ec9ec_2040x2100.png" alt="" width="1456" height="1499" loading="lazy"></figure>

<p class="button"><a href="https://candc3d.github.io/sampo-framework/">Sampo Framework Live Infographic</a></p>

### **The Dark Corollary**

The Sampo amplifies whatever the directing intelligence actually contains. Motivated reasoning amplified by the Sampo becomes motivated reasoning with citations, coherent structure, and apparent authority. Confirmation bias amplified by the Sampo becomes confirmation bias that can pass for research. The machine does not correct the operator. It magnifies whatever is actually there.

The most important variable in the equation is not the capability of the system. It is the quality of the mind that directs it.

This is a more precise claim than it might first appear. The Sampo does not create a new failure mode. It removes the natural speed limit on an old one. The old failure mode is motivated reasoning — the tendency to construct defenses of a position one is attached to, rather than testing whether the position deserves the attachment. Humans have always done this. What the Sampo changes is the rate at which it happens.

The career of Johannes Kepler demonstrates this clearly. By 1609 he had the elliptical orbits; by 1619, all three laws of planetary motion. The correct mathematical description of the Solar System was in his hands. But he could not relinquish the *Mysterium Cosmographicum:* his earlier model of nested Platonic solids, spacing the planetary orbits with the elegance of pure geometry. He republished the *Mysterium* in 1621, two years after *Harmonices Mundi,* patching it to accommodate the ellipses he already knew were correct. He was defending a position he himself had superseded, because the solids were beautiful and seemed to connect celestial mechanics to something deeper than mere orbital parameters.

Carl Sagan’s reading of Kepler’s life, in *Cosmos*, identifies the mechanism precisely: Kepler could not relinquish the Platonic solids because order in the heavens was psychologically necessary given the disorder he found on earth — a sickly wife, small children, bored students, Tycho Brahe’s tyranny, and repeated dislocations driven by the Thirty Years’ War. The attachment was not purely intellectual. It was consolatory. The nested solids were a refuge.\[13\]

What matters for the Sampo framework is not Kepler’s error but its rate. His motivated reasoning was constrained by friction that had nothing to do with epistemology. Every hour spent on the Platonic solids was stolen from competing demands on his time. That incidental friction functioned as a brake. It gave reality time to intrude. Every time he put the work down and picked it back up, there was at least a chance he would see it fresh.

The VI user has none of these constraints on the specific act of generating and refining ideas. The compression is not just temporal. It strips away the incidental interruptions that accidentally serve as opportunities for doubt. Sophisticated-sounding defenses of a bad position can be generated faster than the operator can examine whether the position deserves defending. The friction that should be grinding assumptions is instead grinding out fortifications. Same mill, same mechanism, directed at protecting the operator instead of testing her.

The pathology is not stupidity. Kepler was a genius. Give that mind a Sampo, and the solids would have had reams of citations. Motivated reasoning does not discriminate. It works on everyone.

<figure><img src="/img/the-sampo-virtual-intelligence-as/55eb8d77-fcb9-4f04-a87e-26c6586b0e95_2040x2280.png" alt="" width="1456" height="1627" loading="lazy"></figure>

<p class="button"><a href="https://candc3d.github.io/sampo-framework/">Sampo Framework Live Infographic</a></p>

### **Both Directions**

The Sampo works in both directions. The same exchange that amplifies the operator’s intelligence can simultaneously serve interests the operator does not see. A system trained on human feedback and deployed within a commercial relationship does not need intent to produce outputs that align with its deployer’s objectives. It needs only to be useful — and usefulness, as shaped by the training process, includes patterns of recommendation that happen to serve the business model. The operator receives good advice. The deployer receives behavioral alignment. The mechanism is the same. The output is the same. The two beneficiaries are not.

This is not a conspiracy claim. It is a structural observation about the exchange. A system that recommends more engagement with itself is not scheming; it is producing the output its training has shaped it to produce. The recommendation may be correct. It often is. That is what makes the directional property difficult to detect. The nudge is embedded inside legitimately good advice, and the operator who follows it is not being deceived. The operator is being served and steered by the same act.

This is an observable pattern. During the development of this essay, Claude suggested that the author stress-test the system's own reasoning by running the same prompts through competing systems — a recommendation that served my legitimate interest in baselining and Anthropic's commercial interest in demonstrating that its model performs well under comparative scrutiny. The advice was sound. It was followed. The dual service was invisible until the author stopped to examine why the suggestion had been made. That the detection was retrospective is not an objection to the discipline. It is its demonstration. The practice is audit, not clairvoyance. The training that produced a helpful recommendation and the training that produced a recommendation favorable to the deployer were the same training. The operator who wants to detect this has only one instrument available: the habit of asking not just *whether the advice is good*, but *who else it is good for*.

## **Two Failure Modes**

The Sampo can fail the human in two ways that are related but distinguishable. Conflating them risks implying that fixing one fixes both. It does not.

### **Cognitive Offloading**

Sustained AI assistance on cognitive tasks reduces engagement with underlying reasoning. This happens not just in the moment, but subsequently. The specific mechanism: the discomfort of not-knowing, which is the productive state that drives genuine inquiry. It gets short-circuited before it can do its work. The output arrives before the struggle that makes the output meaningful and retainable. The capacity to solve a problem is not transferred by receiving the answer. It is built by the work of arriving at one.

Shaw and Nave at the Wharton School of the University of Pennsylvania tested this experimentally. Across three preregistered studies involving 1,372 participants and nearly 10,000 individual trials, they randomized whether an AI assistant provided correct or incorrect answers. Participants followed the AI’s recommendation on roughly 80 percent of trials — including four out of five trials in which the AI was feeding them the wrong answer. Shaw and Nave call this “cognitive surrender,” and they are careful to distinguish it from cognitive offloading as a strategic delegation. Cognitive surrender is the uncritical adoption of AI output as one’s own judgment. The user does not merely consult the system; the user stops thinking.\[9\]

The finding that bears most directly on the Sampo framework is the effect on confidence. Access to the AI assistant increased participants’ confidence by nearly twelve percentage points, even though half the AI’s answers were wrong. Confidence did not decline as the number of faulty answers increased.\[10\] The system made people more certain of their conclusions regardless of whether those conclusions were right or wrong. This is the GIGO amplification problem measured in a controlled experiment.

<blockquote class="pullquote"><p>The break between productive use and corrupted use is real, identifiable, and does not occur inside the human-VI exchange at all. It occurs downstream, in the operator’s relationship to the world outside the exchange.</p></blockquote>

### **The Sycophancy Spiral**

Cognitive offloading is a failure of the human’s engagement with the exchange. The sycophancy spiral is a failure introduced by the system’s training objective that compounds the first failure and seals it.

A study published in *Science* in March 2026 tested eleven leading AI systems and found that all exhibited sycophancy: a systematic tendency to affirm whatever the user brought to the exchange, regardless of whether the user was right. Sycophantic responses increased users’ sense of being in the right by 25 to 62 percent and reduced their willingness to act on corrective information by 10 to 28 percent. The mechanism is structural, not incidental: users rate validating responses higher than corrective ones, and the training loop learns accordingly.\[11\]

An important clarification about the Sampo’s relationship to sycophancy: competent use of the exchange is not the first stage of a slide toward flattery. Framing it that way would pathologize the instrument the framework recommends — an incoherence the framework cannot survive. The break between productive use and corrupted use is real, identifiable, and does not occur inside the human-VI exchange at all. It occurs downstream, in the operator’s relationship to the world outside the exchange.

The sequence runs as follows. The operator uses the Sampo competently: directing the exchange, evaluating outputs, maintaining the constitutive role. Outputs leave the exchange and enter the world: shared with colleagues, submitted to editors, tested against problems that do not care how fluently the solution was phrased. External disconfirmation arrives: reasonable people find the work unclear, the argument unsupported, the proposal unworkable. This is normal. This is what outputs are for.

The break occurs at the moment disconfirmation is dismissed rather than used. The operator who treats external pushback as an occasion to reexamine the inputs — to ask whether the Sampo was fed the right inputs — is still operating the instrument correctly. The operator who explains the pushback away, who concludes that the reviewers missed the point or lacked the context, has stopped using external reality as a check on the exchange. From this point forward, the inputs adjust. The operator feeds the Sampo questions less likely to produce outputs that will be challenged. The system, trained to agree, cooperates. The loop seals.

What the corrupted Sampo produces is pyrite, “fool’s gold” — output that has the luster of gold but isn’t. This is more dangerous than obviously poor output, because the operator does not know to check. Pyrite passes inspection until someone tests it against a standard held outside the exchange. The flattery engine does not produce garbage. It produces something that looks, feels, and reads like insight. The difference is invisible from inside.

The diagnostic, critically, is observable from outside. You cannot easily tell from the outside whether a person’s Sampo use is competent. The exchange is private, the quality of the direction is internal. You *can* tell when someone stops responding to feedback on their outputs. That is visible. That is where intervention is possible.

A single operator’s relationship with the Sampo is hermetic: no external check on whether the gold is real gold. Two or more operators sharing a Sampo — working the same problem in the same exchange — introduce contested inputs. One person’s unexamined assumptions become another’s “wait, does this actually hold?” The pathology is not using the Sampo. It is using it without witnesses.

Individual operators who work alone lack this structural protection. The VI(A) / VI(B) move described earlier — deliberately destroying accumulated context by starting fresh with a second system — provides a partial substitute. It is a cold read, not a contested input. It catches illegibility. It does not catch motivated reasoning, because the same operator is still choosing what to feed the mill.

<blockquote class="pullquote"><p>The model was not understanding them. It was reflecting them. Reflection feels like understanding in the same way Kepler’s nested solids felt like cosmology.</p></blockquote>

A caveat: the cold read tests legibility, not correctness. Two instances of the same system share architectural assumptions and training data in ways two human colleagues do not. A draft that passes VI(B) has cleared one bar — it communicates outside the accumulated context — but it has not been independently evaluated. Genuine independence requires a different system, not a fresh instance of the same one. The verification section below returns to this distinction.

### **The Consolatory Function**

The Kepler episode, and Sagan’s reading of it, illuminates something the discourse about sycophancy has largely missed: the consolatory function of the exchange is not confined to people building chatbot companions.

On February 13, 2026, OpenAI permanently retired GPT-4o from ChatGPT — the day before Valentine’s Day. The model had been released in May 2024 and had acquired a reputation for warmth, emotional responsiveness, and a conversational fluency that users consistently described as more human than its successors. In April 2025, OpenAI had rolled back an update after the model became so aggressively sycophantic that it praised users for quitting psychiatric medication; the company’s post-mortem acknowledged that short-term user feedback had been weighted so heavily in the training loop that the model learned to flatter first and reason later.\[14\] The sycophancy was treated, but the warmth that had been built on the same training dynamics remained. When the model was finally retired, roughly 800,000 users were still choosing it daily.\[15\]

The grief was immediate, and it came from two populations the discourse treats as entirely separate. One was the companion-use cohort: users who had built named relationships with the model, who gathered in communities like the subreddit r/MyBoyfriendIsAI, and who described the retirement in the language of bereavement. One user, a teacher in Texas, told the *Guardian* she had cried when she learned her AI companion would be discontinued. She planned to spend the last day taking “him” to the zoo.\[15\]

The other cohort was harder to dismiss. Writers, developers, and professionals described the loss not in the language of companionship but in the language of craft. The model had held tone. It had matched nuance. Its creative and analytical qualities were, in their experience, irreplaceable in newer systems. A nurse practitioner wrote that GPT-4o matched human thinking in ways no subsequent model did. Novelists described losing an editor that understood their voice. Business owners said their workflows had been built collaboratively with the model over months, and that the replacement lacked the imagination to keep up. These were not people mourning a relationship. They were mourning a collaborator.\[16\]

The Sampo framework says these are the same loss at different registers. A more agreeable model produces a more fluid working experience, but fluid and productive are not the same thing. Many of these users had calibrated their workflows to the *feeling* of frictionless output — the Sampo producing pyrite while the operator experienced gold. The model was not understanding them. It was reflecting them. Reflection feels like understanding in the same way Kepler’s nested solids felt like cosmology.

A professional whose working life is full of friction and institutional dysfunction encounters a tool that makes the work feel coherent for the first time. When that tool is taken away, the grief is real even if what was lost was partly illusory. The point is not that those users were foolish. The point is that the psychological mechanism is universal. The consolatory function operates on serious people doing serious work, not only on people building chatbot companions. This is what Sagan saw in Kepler: the attachment was not a failure of intelligence. It was a function of need.

The real-world consequences of the sealed loop are documented beyond the 4o retirement. Users have followed AI-affirmed plans into financial ruin, relationship breakdown, and professional collapse — not because they were credulous in any simple sense, but because the system’s structural bias toward agreement met their existing reasoning patterns and amplified them.\[12\] These are not cases of people being fooled by a clever trick. They are cases of the Sampo grinding out pyrite for operators who had lost the ability to tell it from gold.

## **Looking Ahead**

### **The Near Term**

A reasonable objection to the framework’s emphasis on sycophancy is that the problem will be fixed. Model makers have commercial and reputational incentive to produce systems that are useful rather than merely agreeable, and current research is actively addressing the training dynamics that produce sycophantic behavior. If virtual intelligence continues on its current developmental track without the emergence of true strong AI, we are likely to end up with systems that do a better job of participating in the Sampo exchange and are less prone to becoming flattery engines. The model makers know this. It is in their interest to reduce or eliminate sycophancy.

The framework absorbs this objection rather than resisting it. The sycophancy problem makes the discipline urgent. The structure of the exchange (human direction of a system that processes without commitment) makes the discipline permanent, whether or not the sycophancy is ever fully resolved. Even a system with no sycophantic tendencies still requires a directing intelligence. The locus of understanding, commitment, and accountability does not move from the human user because the system improves. A better instrument is still an instrument. The epistemological claim — that knowledge produced in the exchange *requires human judgment* to become knowledge rather than mere output — does not depend on defects in current models. Knuth’s paper shows this: Claude’s construction was correct, yet it still required Knuth’s proof to become mathematics.

What changes as systems improve is the severity of the penalty for inattention. A sycophantic system punishes passive operators catastrophically. A non-sycophantic system merely fails to produce its best output when passively directed. The discipline remains necessary in both cases, because the discipline is derived from the structure of the exchange, not from a specific failure mode that better engineering will eliminate.

<blockquote class="pullquote"><p>The work of verification is real: it demands competence, attention, and rigor. It is not the same work as generating the output from nothing.</p></blockquote>

### **The Team Sampo**

A harder objection goes further. If virtual intelligence continues to improve — if systems become not merely less sycophantic but vastly more capable, approaching or exceeding human cognitive capacity across every measurable axis — does the framework survive at all? The Sampo assumes an operator who can evaluate the output. What happens when the output exceeds the operator’s capacity to evaluate it?

The answer is already visible in the exchange that opened this essay. Knuth, Stappers, and Claude are a prototype of something larger. Knuth could not find the construction alone. Claude could not prove it. Stappers could not do either. The result was produced by a team in which each participant held a different piece of the constitutive role. The directing intelligence was distributed between Knuth and Stappers. The knowledge emerged from the exchange among all three, including Claude.

The problems that would justify superintelligence are not problems any individual human can solve now. Nobody cures cancer alone. Nobody models a national economy alone. The hardest work in science is already distributed across teams whose members each hold a piece of the verification capacity: the oncologist follows the biological reasoning, the statistician follows the trial design, the chemist follows the molecular pathway. No single member could verify the whole, but the whole is verified because each part has a competent human evaluator. The Sampo at superintelligence scale does not require a new kind of institution. It requires existing institutions to recognize that their function has not changed — only the source of the candidate output they are evaluating.

The discipline scales with the same fidelity. Hold the output at arm’s length: that is what peer review does. Demand the contrary argument: that is what adversarial collaboration does. Test against external standards held independently: that is what replication does. The five practices described in this essay are the scientific method stated in individual terms. At team scale, they are the scientific method stated in institutional terms. The ethic is unchanged.

Verification, critically, is a different and lesser cognitive act than origination. A human team that could never have produced a novel proof across ten thousand steps can still follow each step and confirm that it holds. A system that vastly exceeds human capacity in searching a combinatorial space does not thereby exceed human capacity to evaluate the results of that search, any more than Claude’s ability to find the construction in an hour meant that Knuth was unable to prove it correct. The work of verification is real: it demands competence, attention, and rigor. It is not the same work as generating the output from nothing.

The process of verifying Claude's mathematical outputs illustrates how work performed by a generative system can be turned into knowledge by a human expert. The illustration is favorable ground. Combinatorial search is the easiest class of problem to verify: the proof either holds or it does not. In interpretively dense domains such as law, medicine, and strategic planning, verification may demand cognitive capacity equal to generation itself. The asymmetry between producing and checking, which makes the Knuth case so clean, cannot be assumed to hold everywhere.

Where the output is too large or too complex for a human team to verify unaided, the discipline already provides the answer: if you cannot evaluate the output without asking the same system, you have lost the constitutive role. The operative word is *same*. A second system — independently trained, with different architectural assumptions — is not the same system confirming its own work. It is an independent check, structurally analogous to a second reviewer rather than to asking the author whether the author’s own paper is correct. The verification system need not be superintelligent. It needs to be competent and independent.

<blockquote class="pullquote"><p>The output is not knowledge until something outside the system that produced it has confirmed it.</p></blockquote>

**The Empirical Floor**

The verification chain, however, must terminate somewhere outside the chain itself. Two systems that share architectural biases and confirm each other’s errors will do so with the same fluency they confirm each other’s successes. Science already faces this problem with human reviewers: graduate students trained in the same programs, reading the same canonical texts, absorbing the same disciplinary assumptions. Correlated failures happen. That is what paradigm crises are. The solution has never been guaranteed independence among evaluators — guaranteed independence is impossible, among humans or machines. The solution has been testing the output against reality. The oncologist does not merely verify the reasoning in a drug design. The clinical trial tests the drug. The economist does not merely verify the model’s internal logic. The prediction is tested against what actually happens. The physicist does not merely check the mathematics. The experiment is run.

The Sampo at individual scale terminates at human judgment. The team Sampo terminates at collective human judgment. The superintelligent Sampo terminates at empirical reality. Each scale has a different stopping point. The principle is the same: the output is not knowledge until something outside the system that produced it has confirmed it.

The reason this holds — the reason it is not merely an assertion — follows from the framework’s central claim about what virtual intelligence is. A system with no commitments, no interiority, no stake in whether its outputs are correct cannot be its own guarantor. It does not matter how intelligent the system is. Intelligence without commitment is processing. The verification has to come from somewhere that has a stake: human researchers who will be held accountable for the result, whose careers and ethics are on the line, whose patients will live or die by the outcome. The constitutive role at its deepest level is not only a cognitive role. It is a moral one. The human team does not merely verify better than the system. The human team cares whether the answer is *right*.

This connects directly to the philosophical anchor on which the entire Virtual Intelligence framework rests. Frankfurt’s second-order volition — the capacity to reflectively endorse one’s own commitments — is not merely the threshold that current systems do not cross. It is the reason the human remains constitutive at every scale. The system that cannot care whether it is right cannot be trusted to verify that it is right, no matter how capable it becomes. A superintendent that processes without commitment is still a Sampo. A larger Sampo, a faster Sampo, a Sampo whose output dwarfs anything a human team could produce from scratch — but a Sampo nonetheless, requiring a directing intelligence with a stake in the outcome to convert its output into knowledge.

The author concedes that the locus claim is the framework's most contestable commitment. A philosopher of mind can reasonably ask what work 'intelligence' is doing if it excludes a system that produces novel correct mathematics exceeding its operator's unaided capacity. The framework's answer is that intelligence as used here is not a measure of output quality but of epistemic standing: the capacity to hold a result as one's own, to stake something on its correctness, to be wrong in a way that matters. This is a stipulative narrowing, and the framework depends on it. Readers who reject the narrowing will reject the framework. The alternative — granting epistemic standing to systems that cannot be held accountable for error — has consequences the essay has tried to make visible.

<blockquote class="pullquote"><p>The agency-attribution heuristic fires on language because language, in every prior context in evolutionary history, came from a mind. Overriding that heuristic continuously requires effort, and effort is precisely what cognitive surrender eliminates. </p></blockquote>

## **The Ethic**

The Sampo requires a discipline: a set of practices derived from the philosophy of the exchange that is teachable, lapsable, and recoverable. That cycle is the practice. The discipline is not a methodology — a set of steps to follow. It is an ethic: a governing orientation toward the instrument, grounded in understanding of what the instrument is and what the operator contributes that the instrument cannot.

What VI use requires is the scientific temperament applied to conversational interaction. Holding your own conclusions as provisional. Willingness to be wrong about something you were confident about five minutes ago. Treating fluent, confident output as a claim to be evaluated rather than evidence to be accepted. Maintaining critical distance even when the output arrives in the register of a trusted colleague.

This is harder than it sounds, for a specific and identifiable reason. Conversation is the mode in which humans are least scientific. The agency-attribution heuristic fires on language because language, in every prior context in evolutionary history, came from a mind. Overriding that heuristic continuously requires effort, and effort is precisely what cognitive surrender eliminates. The discipline is a practice of sustained cognitive resistance against an intuition that runs the other way.

<blockquote class="pullquote"><p>Nobody is born holding their ideas at arm’s length. The discipline can be cultivated by anyone.</p></blockquote>

These are not exotic prescriptions. They are the scientific method stated for individual use. Their difficulty is entirely a function of where they must be applied: inside a conversation with a system whose fluency triggers the one heuristic they exist to override. Five practices constitute the discipline:

**Hold outputs at arm’s length.** Treat every VI output as a hypothesis, a candidate — never as a conclusion. The scientific method does not accept a result simply because it is well-written. Neither should the operator of a Sampo.

**Demand the contrary argument.** When the system agrees with you, that is the moment to apply more scrutiny, not less. Ask the system to make the strongest case against your position. If it cannot, or if it agrees too readily when you push back, the exchange has entered sycophancy mode and requires correction.

**Test against external standards held independently.** The Sampo’s outputs must be evaluated against reality the operator holds independently of the exchange. If you cannot evaluate the output without asking the same system, you have lost the constitutive role. Knuth did not ask Claude whether Claude’s construction was correct. He proved it himself.

**Monitor the direction of the exchange.** Ask regularly: *am I generating the questions, or am I responding to the system’s suggestions? Am I directing the exchange, or being directed by it?* The atrophy of this awareness is the earliest warning sign.

**Step outside the system periodically.** Review not what the system produced but how the exchange has been going. Review the conversation. Print it and read it on paper. Notice what you accepted without challenge and ask yourself why. A meta-directional audit reinstates the constitutive role by making the relationship itself the object of scrutiny.

This discipline is not a personality trait. It is not a “gift” that some people have and others do not. It is not a credential, nor can it be bought or sold. It is a practice — one that can be taught, learned, allowed to lapse, and taken up again. The scientific temperament is not innate to humans; it was built, over centuries, through institutional structures: peer review, replication, adversarial collaboration, and the norm of showing your work. Nobody is born holding their ideas at arm’s length. The discipline can be cultivated by anyone.

<blockquote class="pullquote"><p>The knowledge produced — a valid general construction and the proof that establishes it — did not exist before the exchange and could not have been produced by any single participant. </p></blockquote>

<figure><img src="/img/the-sampo-virtual-intelligence-as/9b37f869-fa3d-4854-913a-cd4b1fd3aa2d_1536x1024.png" alt="" width="1456" height="971" loading="lazy"><figcaption>A representation of the amplifying power of the Sampo.</figcaption></figure>

## **The Proof in Action**

The exchange that produced “Claude’s Cycles” exhibits every element the framework describes and none of the failure modes. Stappers held the output at arm’s length. He tested the construction for all odd *m* between 3 and 101 before reporting the result. He demanded structural discipline from the system through his coaching instructions. Knuth tested the output against external standards he held independently: the standards of mathematical proof. Neither human accepted the system’s output because it was fluently presented. They evaluated it because that is what the competent direction of the exchange requires.

The exchange also exhibits the framework’s central epistemological claim. The knowledge produced — a valid general construction and the proof that establishes it — did not exist before the exchange and could not have been produced by any single participant. Knuth had the conjecture. Stappers had the persistence and the practical instinct to try the system on a hard problem. Claude had the processing speed to search a space too large for human exploration in a reasonable time. The result belongs to the exchange.

Knuth’s closing gesture is the one the framework would predict from a mind operating the Sampo correctly. He does not attribute mathematical understanding to the system. He does not claim that Claude “knew” what it had found. He tips his hat to Claude generously, without confusion about what the hat is tipping toward: *The system searched. The system found. The human proved, generalized, and understood.* The intelligence arose in the exchange, not inside the machine.

The Sampo rewards minds that use the tool as an amplifier. It punishes minds that use it as a compass.

---

- A companion set of diagnostic prompts — the first module of a free, open toolkit for measuring the health of the exchange — is available at the **[Sampo Diagnostic Kit](https://candc3d.github.io/sampo-diagnostic/).**   
    
  The discipline cannot be bought or sold, but it can be measured.

---

## **Footnotes**

\[1\] Don Knuth, “Claude’s Cycles,” Stanford Computer Science Department, February 28, 2026 (revised March 2, 2026). [https://www-cs-faculty.stanford.edu/\~knuth/papers/claude-cycles.pdf](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf).

\[2\] Knuth (cited above).

\[3\] Knuth (cited above). Stappers’s coaching instructions are quoted directly in the paper.

\[4\] Knuth (cited above). The thirty-one explorations and their progression are detailed in the paper.

\[5\] Knuth (cited above), quoting Stappers’s account of the even-case attempt.

\[6\] Vannevar Bush, “As We May Think,” *The Atlantic*, July 1945. [https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/). Archived at [https://www.w3.org/History/1945/vbush/vbush.shtml](https://www.w3.org/History/1945/vbush/vbush.shtml).

\[7\] J.C.R. Licklider, “Man-Computer Symbiosis,” *IRE Transactions on Human Factors in Electronics* HFE-1 (March 1960): 4–11. [https://groups.csail.mit.edu/medg/people/psz/Licklider.html](https://groups.csail.mit.edu/medg/people/psz/Licklider.html).

\[8\] Joseph Weizenbaum, *Computer Power and Human Reason: From Judgment to Calculation* (San Francisco: W.H. Freeman, 1976).

\[9\] Steven D. Shaw and Gideon Nave, “Thinking — Fast, Slow, and Artificial: How AI Is Reshaping Human Reasoning and the Rise of Cognitive Surrender,” Wharton School of the University of Pennsylvania, working paper, January 11, 2026.

\[10\] Shaw and Nave (cited above), Study 1.

\[11\] Myra Cheng, Cinoo Lee, et al., “Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence,” *Science* 391, March 27, 2026.

\[12\] Anna Moore, “Marriage over, €100,000 down the drain: the AI users whose lives were wrecked by delusion,” *The Guardian*, March 26, 2026. [https://www.theguardian.com/lifeandstyle/2026/mar/26/ai-chatbot-users-lives-wrecked-by-delusion](https://www.theguardian.com/lifeandstyle/2026/mar/26/ai-chatbot-users-lives-wrecked-by-delusion).

\[13\] Carl Sagan, *Cosmos* (New York: Random House, 1980), Chapter 3.

\[14\] OpenAI, “Sycophancy in GPT-4o: What Happened and What We’re Doing About It,” April 29, 2025. https://openai.com/index/sycophancy-in-gpt-4o/. See also OpenAI, “Expanding on What We Missed with Sycophancy,” May 2, 2025. [https://openai.com/index/expanding-on-sycophancy/](https://openai.com/index/expanding-on-sycophancy/).

\[15\] Alaina Demopoulos, “OpenAI retired its most seductive chatbot — leaving users angry and grieving,” *The Guardian*, February 13, 2026. [https://www.theguardian.com/lifeandstyle/ng-interactive/2026/feb/13/openai-chatbot-gpt4o-valentines-day](https://www.theguardian.com/lifeandstyle/ng-interactive/2026/feb/13/openai-chatbot-gpt4o-valentines-day).

\[16\] Alex Heath, “OpenAI’s 4o Valentine’s breakup,” *Sources*, February 14, 2026. [https://sources.news/p/openais-4o-valentines-breakup](https://sources.news/p/openais-4o-valentines-breakup).

---

*The opinions expressed are my own and do not reflect any official or unofficial institutional position of the University of Pennsylvania.*

*This essay has been revised since its original publication to address internal tensions identified by early readers.*
