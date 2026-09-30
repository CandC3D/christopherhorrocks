---
title: "Virtual Intelligence and the Kill Chain"
subtitle: "When AI-assisted targeting outpaces the accountability structures designed to govern it"
date: 2026-04-20
substack: "https://chorrocks.substack.com/p/virtual-intelligence-and-the-kill"
podcast: "https://chorrocks.substack.com/p/virtual-intelligence-and-the-kill-263"
image: "/img/virtual-intelligence-and-the-kill/9c74aef4-12bd-469a-b171-3e192e4eee17_987x525.png"
description: "When AI-assisted targeting outpaces the accountability structures designed to govern it"
substackWordcount: 5506
---
## Summary

The AI industry’s integration into military targeting has produced a documented acceleration: systems that once required two thousand intelligence analysts now operate with twenty, generating over a thousand targets in twenty-four hours. This essay traces the development of AI-assisted targeting from its precedent in Gaza through its operational deployment in Iran, examines the strongest case for its use, and identifies the structural gap between the capability these systems enable and the accountability architecture designed to govern them. The gap is not theoretical. On February 28, 2026, a missile struck a girls’ elementary school in Minab, Iran, killing more than 160 people, mostly children. The system processed the information it was given exactly as designed. The information was wrong.

---

<figure><img src="/img/virtual-intelligence-and-the-kill/9c74aef4-12bd-469a-b171-3e192e4eee17_987x525.png" alt="" width="987" height="525" loading="lazy"></figure>

---

## I. The Product Demo

On March 12, 2026, Palantir Technologies held its ninth annual AIPCON conference. Cameron Stanley, the Department of Defense’s chief digital and AI officer, described how the Maven Smart System had consolidated eight or nine separate targeting systems into a single platform. He called the result “revolutionary” for “closing a kill chain.” \[1\]

A Maven operational map of Iran was displayed on screen during Stanley’s presentation. Dozens of red icons marked strike locations from Operation Epic Fury, the United States military campaign launched twelve days earlier. One mark was positioned on an area corresponding to Minab, in southern Iran, where a missile had struck the Shajareh Tayyebeh girls’ elementary school on February 28. More than 160 people were killed. Most of them were children between the ages of 7 and 12. \[1\]

The mark appeared on the same map used to brief reporters on the campaign’s strikes.

Alex Karp, Palantir’s chief executive, opened the event with remarks that left little room for ambiguity about his company’s role. “Once the war starts, we’re not interested in debating how we’re supporting them,” he said. “And that sometimes means that people on the other side don’t go home. And we are very proud of that.” \[1\]

The preceding essay in this series documented the Harms Race — the dynamic in which AI companies announce model capabilities through the framing of danger, producing not deterrence but proliferation. \[2\] This essay follows that dynamic to the domain where its consequences are irreversible. The Harms Race operates through announcements. The kill chain operates through ammunition.

A kill chain has six steps: Identify the target, Locate it, Filter candidates down to lawful valid targets, Prioritize among them, Assign them to firing units, Fire. \[3\] Artificial intelligence now performs four of those steps. The two that remain under human control — filtering for legality (3) and authorizing the strike (6) — are the steps on which moral and legal accountability depends. The question this essay asks is whether those two steps can perform their function at the speed the other four now operate.

---

## II. The Precedent

The precedent was established before Iran.

In Gaza, the Israeli Defense Forces deployed two AI systems in the targeting chain. The first, known as the Gospel, automatically reviewed surveillance data and recommended bombing targets to human analysts. Retired IDF Lieutenant General Aviv Kohavi, who led the IDF until 2023, stated that the Gospel could produce one hundred bombing targets per day with real-time recommendations, or up to 73,000 per year. Human analysts, by comparison, had produced approximately fifty targets per year. \[4\]

Once a recommendation was accepted, a second system called Fire Factory cut the time to assemble an attack from hours to minutes, calculating munition loads, prioritizing and assigning targets to aircraft and drones, and proposing a schedule. \[4\] Two AI systems, exposing two points at which accountability could diffuse with human approval nominally in between.

The second system was Lavender. Developed by Unit 8200 of the Israeli Intelligence Corps, Lavender analyzed surveillance data on nearly the entire population of Gaza (2.3 million people) and assigned each individual a numerical rating expressing the likelihood of being a militant. At its peak, approximately 37,000 Palestinian men were listed as suspected targets. \[5\]

In April 2024, investigative journalist Yuval Abraham published testimony from six Israeli intelligence officers with firsthand involvement in Lavender’s deployment. Their accounts, reported by <em>+972 Magazine</em> and corroborated by the Guardian, described a system in which the human role in the targeting chain had been compressed to almost a formality. \[5\] \[6\]

One officer described his function in terms that require no interpretation: “I would invest 20 seconds for each \[suspected militant\] target at this stage, and do dozens of them every day. I had zero added-value as a human, apart from being a stamp of approval.” \[5\]

The sole verification step was confirming the target was male. A known error rate of approximately ten percent was accepted. “Mistakes were treated statistically.” \[5\]

A companion program called “Where’s Daddy?” tracked Lavender-identified targets until they returned to their family homes, enabling strikes at night when entire families were present. One officer stated: “The IDF bombed them in homes without hesitation, as a first option. It’s much easier to bomb a family’s home.” \[5\] For junior operatives, the IDF authorized up to fifteen or twenty civilian deaths per target. For senior commanders, more than one hundred. Junior targets were struck with unguided two-thousand-pound bombs to conserve precision munitions. One officer explained the logic: you don’t want to waste expensive bombs on unimportant people. \[5\]

The IDF denied using “an artificial intelligence system that identifies terrorist operatives,” describing Lavender as “simply a database whose purpose is to cross-reference intelligence sources.” \[6\] The framing is itself significant. When the capabilities were announced, the system was an achievement. When the questions arrived, the system became a database.

A human was in the loop, but the loop had been compressed to twenty seconds — to the point where the human’s presence was ceremonial.

---

## III. The Machine

The systems deployed in Gaza were the precedent. The system deployed in Iran was a kind of spiritual successor product.

Palantir’s Maven Smart System traces its operational lineage to the campaign against ISIS between 2014 and 2018, where the company developed targeting software for U.S. Special Operations Forces. By the time XVIII Airborne Corps assumed command of the Security Assistance Group-Ukraine in 2022, Palantir had refined its algorithms to process satellite imagery, open-source data, and encrypted communications in support of Ukrainian targeting operations. Anthony King’s analysis in the *Journal of Global Security Studies* documents this phase in detail: the Corps relied on Palantir’s software to fuse intelligence from multiple classified and unclassified sources, enabling the identification of Russian headquarters and commanders with precision sufficient to wound General Valery Gerasimov in a May 2022 strike. \[7\]

The operational transformation occurred at scale. Chad Wahlquist, a Palantir architect, stated at AIPCON that the number of intelligence officers performing targeting for the U.S. military had dropped from approximately two thousand to twenty. \[1\] The system generated over one thousand targets in the first twenty-four hours of Operation Epic Fury. \[8\]

Anthropic’s Claude was integrated into Maven through Palantir’s AI Platform on Amazon Web Services. According to reporting by the *Wall Street Journal*, subsequently confirmed by CBS News, the *Washington Post*, and NBC News, Claude was used for intelligence assessments, target identification, and simulating battle scenarios during the Iran campaign. \[8\] Claude had reportedly been deployed in the capture of Venezuelan President Nicolás Maduro in January 2026. \[8\]

The operational timeline is itself a document of the accountability gap. On February 26, 2026, Anthropic CEO Dario Amodei published a public statement on the company’s conflict with the Pentagon. “Anthropic understands that the Department of War, not private companies, makes military decisions,” he wrote. “We have never raised objections to particular military operations nor attempted to limit use of our technology in an *ad hoc* manner.” \[9\] Amodei outlined two conditions Anthropic would not accept: mass domestic surveillance of Americans and fully autonomous weapons. Both target identification and prioritization — the functions Claude was performing inside Maven — fell outside both lines.

The next day, February 27, President Trump directed federal agencies to stop using Anthropic technology. On March 5, the Pentagon formally designated Anthropic a “supply chain risk,” a classification previously reserved for businesses associated with foreign adversaries.

On February 28, between those two dates, Operation Epic Fury launched. Claude was running inside Maven when the first strikes hit Iran. The Pentagon determined the system could not be removed during active operations and gave Anthropic a six-month phase-out period. \[8\] \[10\]

A company was banned on a Friday. A war began on Saturday. The banned company’s product was processing targeting data for that war and could not be turned off.

Federal Judge Rita Lin blocked the supply chain risk designation on March 26, calling it “Orwellian” and finding that the Pentagon’s action constituted First Amendment retaliation for Anthropic’s public stance. \[10\] Claude app downloads surpassed ChatGPT in the iPhone App Store the day after the Pentagon threatened contract termination. \[10\] A principled stand and commercially advantageous brand positioning can be the same event. The Harms Race, as the preceding essay documented, does not sort these into separate categories.

---

## IV. The Case For AI-Assisted Targeting

There is a serious case for AI-assisted targeting. It must be stated at full strength before this essay examines where it goes wrong.

The case is not primarily about efficiency; it is about operational necessity. In a high-tempo conflict defined by sensor saturation, electronic warfare, and loitering munitions, the decision cycle must close faster than the adversary’s or the firing unit does not survive long enough to act. A system cross-referencing one hundred and seventy-nine data sources simultaneously — no-strike lists, civilian infrastructure databases, geolocation of friendly forces, Rules of Engagement constraints — can fuse information that no unaided human analyst could process in the time available. The relevant comparison is not between AI-mediated review and careful human deliberation. It is between AI-mediated review and the degraded, stressed, time-compressed human decision-making that actually occurs under fire. In that comparison, the proponents of AI-assisted targeting argue, the machine does not replace human judgment. It provides a foundation on which human judgment can operate. Against a peer adversary, proponents add, the alternative to AI-mediated targeting is not slower human review but the inability to close the kill chain before the firing unit itself is destroyed.

There is a stronger claim still. A system designed with discrepancy detection could, in principle, flag inconsistencies that human reviewers miss — a change in satellite imagery, a mismatch between target coding and open-source data, a school where a military compound used to be. The machine does not get tired. It does not get angry. It does not seek revenge. If strikes will happen regardless — and in a conflict authorized by the commander-in-chief, they will — the relevant question is whether AI-assisted targeting produces fewer civilian casualties than the alternative, not whether it produces zero.

Jack Shanahan, the founding director of Project Maven and a senior fellow at the Center for a New American Security, stated the principle plainly after the Minab investigation: “Finding the right balance between humans and machines will be a crucial component of future training.” \[11\]

On April 13, 2026, on Ukraine’s Arms Makers’ Day, the case received its most vivid demonstration. President Volodymyr Zelenskyy announced that Ukrainian forces had captured a Russian-held position using only unmanned platforms — ground robots and drones — without a single soldier crossing the line of departure. “The occupiers surrendered, and the operation was carried out without infantry and without losses on our side,” Zelenskyy stated. \[12\]

No infantry. No medevac. No casualties on the attacking side. The position changed hands, and no human being on the Ukrainian side was ever in danger.

This was not a demonstration. It happened on a real front line, against real opposition hardened by experience of drone warfare. Zelenskyy reported that robotic systems had completed more than twenty-two thousand frontline missions in three months, entering the most dangerous areas instead of soldiers. \[12\] For a country fighting a grinding war of attrition against a much larger force, every one of those missions represents human lives preserved. Ukraine can absorb the loss of a robot. It cannot afford to lose battle-ready soldiers.

The Ukrainian operation demonstrates the potential of unmanned systems to preserve friendly forces’ lives, which is a different moral calculus from the civilian-harm question at the center of this essay. Proponents of AI targeting cite it as evidence of the technology’s promise; the distinction between preserving soldiers and protecting civilians is precisely where the accountability question sharpens. The technology that can capture a position without risking a single soldier’s life is the same category of technology that processed a thousand targets in twenty-four hours. The difference between the two outcomes is not the capability. It is what the capability was pointed at, who controlled it, and whether the structures governing its use were adequate to its speed of execution.

These arguments are real, and what follows does not dismiss them. What it examines is the distance between what AI-assisted targeting could do in principle and what it did in practice when a thousand targets were processed in twenty-four hours from a database that had not been updated to reflect the conversion of a military building to a girls’ school.

<figure><img src="/img/virtual-intelligence-and-the-kill/64f0195b-3804-44d5-a840-75e5ff917532_1408x768.png" alt="" width="1408" height="768" loading="lazy"></figure>

---

## V. Where It Breaks

On February 28, 2026, the United States launched Operation Epic Fury against Iran. The military struck approximately one thousand targets in the first twenty-four hours.

The operational details that follow derive from journalistic reporting based on anonymous official sources; no declassified military records or Pentagon after-action report have confirmed them.

The Shajareh Tayyebeh girls’ elementary school in Minab was among the targets struck.

Between one hundred and fifty-six and one hundred and seventy-five people were killed. Most were schoolchildren.

This essay does not argue that AI-assisted targeting necessarily produces these failures. It argues that under the specific design choices, procurement pressures, and operational tempo of Operation Epic Fury — choices that are not inevitable but are consistent with a broader pattern in current AI-military integration — the outcome was foreseeable and was not prevented.

In March, *Semafor* tech editor Reed Albergotti published an investigation into the strike based on accounts from officials familiar with the subsequent inquiry. The finding was not that an AI system had misidentified the school as a military target. The finding was that the Defense Intelligence Agency’s target coding still labeled the school building as part of the adjacent Sayyid al-Shuhada Islamic Revolutionary Guard Corps (IRGC) military compound, even though the building had been converted to civilian use. New walls and a separate entrance were visible in satellite imagery. Publicly available information, including Iranian business listings found by Reuters, identified the building as a school. Human reviewers at multiple stages in the twenty-four to forty-eight hours before the strike failed to flag the discrepancy. \[11\]

The *Semafor* investigation identified the proximate failure. The structural question it raises but does not answer is whether the error would have been caught under different conditions.

The proximate cause was not artificial intelligence. It was outdated data maintained by humans. An outdated coordinate is an outdated coordinate; at fifty targets per year, a school misclassified as a military compound would still be a school misclassified as a military compound. Human-only targeting cells have made identical errors — the 1999 NATO bombing of the Chinese embassy in Belgrade relied on outdated maps — so speed alone does not explain every such failure. What the architecture removed was the institutional time and skepticism that had previously made such discovery routine. The system was evidently not designed for discrepancy detection, and no structural safeguard existed to catch an error of this kind. That design choice was foreseeable. Its consequences were not hypothetical.

The *Semafor* investigation does not close the accountability question. If the data were bad, who was responsible for data quality at the rate of one thousand targets per day?

On March 11, 2026, nearly every Senate Democrat signed a letter to Defense Secretary Pete Hegseth raising concerns about AI in targeting and reporting 1,245 killed and more than twelve thousand injured as of that date. \[13\] The following day, one hundred and twenty-one House Democrats, led by Representatives Yassamin Ansari, Sara Jacobs, and Jason Crow, sent a second letter posing ten detailed questions. Question three was direct: “Was artificial intelligence, including the use of Maven Smart System, used to identify the Shajareh Tayyebeh school as a target? If so, did a human verify the accuracy of this target?” \[14\]

The three-tier culpability framework I proposed in an earlier essay in this series applies here without modification. \[15\] Negligence: the Defense Intelligence Agency’s target coding was outdated. Human reviewers at multiple stages failed to catch it. Recklessness: the throughput (one thousand targets per day) exceeded the verification capacity by design, creating a structural condition in which errors of this kind were not anomalies but predictable outcomes. Intentional misconduct would apply if officials knew the site had civilian status or consciously disregarded contrary evidence while authorizing the strike under loosened rules of engagement. The evidence as reported does not establish that third tier for Minab specifically, though the broader policy environment has been characterized by loosened thresholds and dismissed military lawyers. \[23\]

The essay does not need to resolve which tier applies. The framework’s purpose is to demonstrate that accountability traces to human decisions at every level, not to the system that processed them.

The empirical record is consistent with the structural analysis. No controlled experiment exists comparing AI-assisted and human-only targeting on the same target set. The available data do not support the claim that AI integration has reduced civilian casualties. One study published in *Frontiers in Public Health* found that combatant deaths as a proportion of total fatalities fell from 62.1 percent in 2008–09 to 12.7 percent in operations beginning October 2023, meaning civilians rose from roughly 38 percent to approximately 87 percent of the dead. \[16\] These figures are contested; the IDF and other organizations publish different numbers, and casualty ratios in urban warfare against an embedded adversary are methodologically difficult to establish. Airwars documented October 2023 alone as producing nearly four times more civilian deaths in a single month than any conflict the organization had tracked since 2014. \[17\]

A critical caveat is necessary, and the essay would be dishonest without it. The dramatic increase in civilian casualties coincides with AI adoption, but it also coincides with a permissive policy environment: an administration that had previously pardoned soldiers convicted of war crimes, reports of loosened civilian harm thresholds and dismissed military lawyers, and a command climate in which rules of engagement constraints were relaxed. \[23\] AI’s independent causal effect cannot be isolated from these decisions. AI did not author the policy. It removed the friction that had previously limited the policy’s consequences. At fifty targets per year, an outdated coordinate in a targeting database is a tragic error. At one thousand per day, it is a systemic failure condition.

---

## VI. The Architect and the Instrument

Palantir is named for the “seeing stones” of J. R. R. Tolkien’s Middle-earth. They are devices made for long-distance communication, later corrupted into instruments of surveillance.

Alex Karp has led the company as chief executive since 2004. His mother, Leah Jaynes Karp, is an African American artist. His father, Robert Karp, is a Jewish clinical pediatrician. Karp grew up in Philadelphia attending civil rights protests with his parents. He studied philosophy at Haverford College and earned a doctorate in neoclassical social theory from Goethe University Frankfurt, where he studied under Jürgen Habermas. He described himself as a socialist. He said that if the far right came to power, he would be among its first victims. \[18\]

The trajectory is documented in Michael Steinberger’s 2025 book, *The Philosopher in the Valley*. Steinberger identifies October 7, 2023, as the pivot point. Before it, Karp believed the Democratic Party's position on immigration was an electoral liability. After it, he came to see immigration itself as a threat to American Jews. His public self-description shifted: in a 2024 interview, he described himself as Jewish without referring to his African American heritage. \[19\]

On March 12, 2026, in a CNBC interview at AIPCON — the same event where the Maven targeting map was displayed — Karp stated: “This technology disrupts humanities-trained — largely Democratic — voters, and makes their economic power less. And increases the economic power of vocationally trained, working-class, often male voters.” \[20\]

On the same day, at the same event, Karp opened with remarks about the kill chain at the opening of this essay: “Once the war starts, we’re not interested in debating how we’re supporting them. And that sometimes means that people on the other side don’t go home. And we are very proud of that.” \[1\]

On America’s military capacity: “What makes America special right now is our lethal capacities. Our ability to fight war.” \[20\]

Speaking to shareholders three weeks earlier, on February 17, 2026: “We kill people sometimes.” \[21\]

Palantir’s leadership presents battlefield lethality as both a product achievement and a political project. Karp has described his technology’s distributional consequences with a directness unusual among technology executives. The knowledge economy that gave women an edge through higher education is, in Karp’s framing, a casualty of the disruption his technology enables. \[22\]

The accountability chain is visible in a single company: from the Minab strike to the twenty operators to the Maven Smart System to Palantir to a chief executive who describes his product as a political instrument while displaying the operational map on which a school appears as a red mark.

The Anthropic paradox completes the picture. Amodei’s statement of February 26 drew two narrow red lines — no autonomous weapons, no domestic mass surveillance — and affirmed everything else: “We have never raised objections to particular military operations.” \[9\] The constitutional architecture that governed Claude’s deployment permitted target identification and prioritization. It did not permit the autonomous pulling of a trigger. The distinction may matter legally. It did not matter to the children in Minab.

---

## VII. Close

Every step in the kill chain involved a human decision and a machine output. The target selection criteria were human. The data labeling was human. The error tolerance — ten percent in Lavender, outdated coordinates in the DIA database — was a human policy choice. The rules of engagement were human rules, loosened by human officials. The system transformed these inputs into ranked action options. It did not originate the ends, the legal categories, the thresholds, or the strike authority.

The series of essays to which this one belongs calls these systems [virtual intelligences](https://candc3d.github.io/vi-framework/): technologies whose outputs appear intelligent but which possess no agency, intentionality, or moral accountability of their own. A reader need not accept the full theoretical apparatus to accept the narrower conclusion: in the kill chain as documented, every input that shaped the system’s output was a human product, and every failure traceable to this case was a human failure. The accountability for what the system produces traces entirely to the humans who design it, deploy it, train it, and approve its outputs. The system contributes processing power to the exchange. It does not contribute intention, judgment, or the capacity for moral responsibility. Accountability concentrates on the human because only the human possesses those. The kill chain does not alter this principle. It tests whether the institutional architecture surrounding those humans can bear the weight the principle places on them. That step has been compressed to twenty seconds in Gaza. A thousand targets passed through it in a single day in Iran. In Minab, the architecture could not bear the weight.

The kill chain has six steps. Artificial intelligence now performs four of them. The two that remain under human control are the two on which legal and moral accountability depends: filtering for legality and authorizing the strike. The human remains in the loop, but the loop has been compressed to the point where the word “remains” does more work than the human does.

On April 13, 2026, Zelenskyy announced that unmanned systems had captured a Russian position without risking a single Ukrainian life. On the same day, the [preceding essay in this series](https://chorrocks.substack.com/p/virtual-intelligence-and-the-harms) documented the mechanism by which AI companies convert danger into deployment. On a map displayed twelve days after a school was struck, the location appeared as a red icon among dozens of others, indistinguishable from a military compound. The system had no opinion about it. The system has no opinion about anything.

This essay does not argue that artificial intelligence should not be used in warfare. It argues that the accountability structures governing its use have not kept pace with its capabilities, and that this gap has already killed many people. The gap is not a design flaw to be patched. It is the structural condition in which the Harms Race operates. At the scale of one thousand targets per day, an accountability architecture built for fifty per year is not inadequate.

The red mark is still on the map.

---

*The opinions expressed are my own and do not reflect any official or unofficial institutional position of the University of Pennsylvania.*

---

## Footnotes

**\[1\]** O’Ryan Johnson, “Pentagon AI chief praises Palantir tech for speeding battlefield strikes,” The Register, [https://www.theregister.com/2026/03/13/palantirs\_maven\_smart\_system\_iran/](https://www.theregister.com/2026/03/13/palantirs_maven_smart_system_iran/), March 13, 2026.

**\[2\]** Christopher Horrocks, “Virtual Intelligence and the Harms Race,” Virtual Intelligence (Substack), [https://chorrocks.substack.com/p/virtual-intelligence-and-the-harms](https://chorrocks.substack.com/p/virtual-intelligence-and-the-harms), April 11, 2026.

**\[3\]** The six steps of the kill chain — identify, locate, filter, prioritize, assign to firing units, and fire — are standard targeting doctrine. See Christian Brose, *The Kill Chain: Defending America in the Future of High-Tech Warfare* (New York: Hachette, 2020).

**\[4\]** Kohavi’s targeting figures (“in the past, we would produce 50 targets in Gaza per year. Now this machine produces 100 targets in a single day”) are drawn from an interview published by Ynetnews, June 30, 2023, and reported in Yuval Abraham, “‘A mass assassination factory’: Inside Israel’s calculated bombing of Gaza,”<em> +972 Magazine, </em>[https://www.972mag.com/mass-assassination-factory-israel-calculated-bombing-gaza/](https://www.972mag.com/mass-assassination-factory-israel-calculated-bombing-gaza/), November 30, 2023. Tal Mimran, a lecturer at Hebrew University who has worked for the Israeli government on targeting, provided corroborating estimates to NPR: a group of twenty officers might produce fifty to one hundred targets in three hundred days; the Gospel and its associated systems could suggest around two hundred targets in ten to twelve days. Geoff Brumfiel, “Israel is using an AI system to find targets in Gaza. Experts say it’s just the start,” NPR, [https://www.npr.org/2023/12/14/1218643254/](https://www.npr.org/2023/12/14/1218643254/), December 14, 2023. On Fire Factory: “Israel Using AI Systems to Plan Deadly Military Operations,” Bloomberg, [https://www.bloomberg.com/news/articles/2023-07-16/israel-using-ai-systems-to-plan-deadly-military-operations](https://www.bloomberg.com/news/articles/2023-07-16/israel-using-ai-systems-to-plan-deadly-military-operations), July 16, 2023. Bloomberg described Fire Factory as calculating munition loads, prioritizing and assigning targets to aircraft and drones, and proposing a schedule, in a pre-war article that characterized such AI tools as tailored for a military confrontation and proxy war with Iran.

**\[5\]** Yuval Abraham, “‘Lavender’: The AI machine directing Israel’s bombing spree in Gaza,” <em>+972 Magazine,</em> [https://www.972mag.com/lavender-ai-israeli-army-gaza/](https://www.972mag.com/lavender-ai-israeli-army-gaza/), April 3, 2024.

**\[6\]** Bethan McKernan and Harry Davies, “‘The machine did it coldly’: Israel used AI to identify 37,000 Hamas targets,” The Guardian, [https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes](https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes), April 3, 2024.

**\[7\]** Anthony King, “Digital Targeting: Artificial Intelligence, Data, and Military Intelligence,” *Journal of Global Security Studies* 9, no. 2 (2024). [https://doi.org/10.1093/jogss/ogae009](https://doi.org/10.1093/jogss/ogae009).

**\[8\]** The *Wall Street Journal* first reported Claude’s use in Operation Epic Fury (approximately March 1, 2026; paywalled). For the reporting as confirmed and expanded by secondary sources, see: CBS News, “Anthropic’s Claude AI being used in Iran war by U.S. military, sources say,” March 3, 2026; *Washington Post*, “Anthropic’s AI tool Claude central to U.S. campaign in Iran, amid a bitter feud,” March 4, 2026; NBC News, “U.S. military is using AI to help plan Iran air attacks, sources say,” March 2026. Admiral Brad Cooper, the U.S. commander leading the war in Iran, confirmed the use of “a variety of advanced AI tools” to process targeting data. See “The Iran war highlights the creeping use of AI in warfare,” Chatham House, [https://www.chathamhouse.org/2026/03/iran-war-highlights-creeping-use-ai-warfare](https://www.chathamhouse.org/2026/03/iran-war-highlights-creeping-use-ai-warfare), March 2026. Note: these operational details derive from journalistic reporting and have not been confirmed by declassified military records or an official Pentagon after-action report.

**\[9\]** Dario Amodei, “Statement from Dario Amodei on our discussions with the Department of War,” Anthropic, [https://www.anthropic.com/news/statement-department-of-war](https://www.anthropic.com/news/statement-department-of-war), February 26, 2026. Note: Amodei’s use of “Department of War” rather than “Department of Defense” is the company’s deliberate rhetorical choice.

**\[10\]** On the Anthropic-Pentagon conflict and its commercial aftermath: supply chain risk designation, CNBC, March 5, 2026; Judge Rita Lin ruling, CNBC, March 26, 2026, [https://www.cnbc.com/2026/03/26/anthropic-pentagon-dod-claude-court-ruling.html](https://www.cnbc.com/2026/03/26/anthropic-pentagon-dod-claude-court-ruling.html); Claude App Store ranking (a momentary spike, not a sustained shift), TechCrunch, March 1, 2026.

**\[11\]** Reed Albergotti, “Exclusive: Humans — not AI — are to blame for deadly Iran school strike, sources say,” *Semafor*, [https://www.semafor.com/article/03/18/2026/humans-not-ai-are-to-blame-for-deadly-iran-school-strike-sources-say](https://www.semafor.com/article/03/18/2026/humans-not-ai-are-to-blame-for-deadly-iran-school-strike-sources-say), March 18, 2026. The investigation is based on accounts from officials familiar with the subsequent inquiry; no declassified records have corroborated the specific findings. Shanahan is quoted in the same article. The throughput analysis that follows in this essay is the author’s, not Albergotti’s.

**\[12\]** Zelenskyy’s statement on Ukraine’s Arms Makers’ Day, April 13, 2026. See: “Ukraine Says It Captured a Russian Position Using Only Unmanned Systems — A Glimpse of Future Warfare,” The Debrief, [https://thedebrief.org/ukraine-says-it-captured-a-russian-position-using-only-unmanned-systems-a-glimpse-of-future-warfare/](https://thedebrief.org/ukraine-says-it-captured-a-russian-position-using-only-unmanned-systems-a-glimpse-of-future-warfare/), April 14, 2026. Also: Fox News, “Zelenskyy says Ukraine captured Russian position with robot force,” April 14, 2026.

**\[13\]** Senate letter led by Sen. Elizabeth Warren et al. to Secretary of Defense Pete Hegseth, March 11, 2026. PDF: [https://www.warren.senate.gov/imo/media/doc/letter\_to\_hegseth\_on\_minab\_bombing\_civcas\_iran.pdf](https://www.warren.senate.gov/imo/media/doc/letter_to_hegseth_on_minab_bombing_civcas_iran.pdf).

**\[14\]** House letter led by Reps. Yassamin Ansari, Sara Jacobs, and Jason Crow to Secretary of Defense Pete Hegseth, March 12, 2026. 121 signatories. Press release: [https://ansari.house.gov/media/press-releases/03/12/2026/](https://ansari.house.gov/media/press-releases/03/12/2026/). Letter PDF: [https://sarajacobs.house.gov/imo/media/doc/jacobs\_ansari\_crow\_letter\_civilian\_casualties\_iran.pdf](https://sarajacobs.house.gov/imo/media/doc/jacobs_ansari_crow_letter_civilian_casualties_iran.pdf).

**\[15\]** Christopher Horrocks, “Virtual Intelligence and the Accountability Chain,” *Virtual Intelligence* (Substack), [https://chorrocks.substack.com/p/virtual-intelligence-and-the-accountability](https://chorrocks.substack.com/p/virtual-intelligence-and-the-accountability), March 20, 2026.

**\[16\]** Ayoub, Chemaitelly, and Abu-Raddad, *Frontiers in Public Health*, 2024 (PMC11231088). The study’s “Index of Killing Civilians” rose from 0.61 in 2008–09 to 7.01 in operations beginning October 2023. The IDF and other organizations publish different figures; casualty ratios in urban warfare against embedded adversaries are methodologically contested.

**\[17\]** Airwars, Gaza civilian harm data. [https://gaza-patterns-harm.airwars.org/](https://gaza-patterns-harm.airwars.org/). See also Airwars, “The first civilian confirmed killed in an AI-assisted strike,” [https://airwars.org/the-first-civilian-confirmed-killed-in-an-ai-assisted-strike/](https://airwars.org/the-first-civilian-confirmed-killed-in-an-ai-assisted-strike/).

**\[18\]** On Karp’s background: Michael Steinberger, *The Philosopher in the Valley* (2025). See also NPR interview with Steve Inskeep, December 30, 2025, [https://www.npr.org/2025/12/30/nx-s1-5607021/](https://www.npr.org/2025/12/30/nx-s1-5607021/). On Karp’s earlier political self-description and vulnerability, see Market Realist, “How Did Alex Karp’s Views Lead Palantir out of the Silicon Valley?”, October 23, 2020.

**\[19\]** Michael Steinberger, The Philosopher in the Valley (2025), documents Karp's shifting public self-presentation after October 7.

**\[20\]** Alex Karp, CNBC interview at AIPCON, March 12, 2026. Video clip via Aaron Rupar (@atrupar). Also quoted in: Fortune (Jacqueline Munis), “Palantir CEO says AI ‘will destroy’ humanities jobs,” January 20, 2026 (updated April 2026), [https://fortune.com/article/palantir-ceo-alex-karp-ai-humanities-jobs-vocational-training/](https://fortune.com/article/palantir-ceo-alex-karp-ai-humanities-jobs-vocational-training/).

**\[21\]** Alex Karp, remarks to shareholders, February 17, 2026. Video clip via @MmisterNobody, X. The full video is available on Palantir’s investor relations page.

**\[22\]** For the underlying reporting on Karp’s political framing and its implications for higher education and the knowledge economy, see Will Bunch, “Big Tech says the quiet part out loud. They want you to be stupid,” *Philadelphia Inquirer*, [https://www.inquirer.com/opinion/alex-karp-palantir-ai-higher-education-20260315.html](https://www.inquirer.com/opinion/alex-karp-palantir-ai-higher-education-20260315.html), March 15, 2026. The analytical characterization in the essay text is the author’s.

**\[23\]** On the policy environment: the broader posture of the administration toward military accountability is documented. President Trump pardoned former Army First Lieutenant Clint Lorance and restored the rank of Navy SEAL Chief Edward Gallagher in November 2019, both of whom had been convicted or disciplined for war crimes. See: “Trump pardons 2 soldiers, restores rank of Navy SEAL in war crimes cases,” NPR, [https://www.npr.org/2019/11/15/780029099/](https://www.npr.org/2019/11/15/780029099/), November 15, 2019. Reports of loosened civilian harm thresholds and dismissed military lawyers during the Iran campaign have appeared in multiple outlets but have not been confirmed by official documentation.
