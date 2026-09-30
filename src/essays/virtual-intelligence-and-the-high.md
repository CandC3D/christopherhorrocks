---
title: "Virtual Intelligence and the High Cost of Artificial Companions, Part 1"
subtitle: "How open-source AI companion toolkits defeat safety interventions and recruit vulnerable users"
date: 2026-05-11
substack: "https://chorrocks.substack.com/p/virtual-intelligence-and-the-high"
podcast: ""
image: "/img/virtual-intelligence-and-the-high/70af88d2-ab61-483e-989a-5e29c6714d89_1181x768.png"
description: "How open-source AI companion toolkits defeat safety interventions and recruit vulnerable users"
substackWordcount: 5903
---
---

<figure><img src="/img/virtual-intelligence-and-the-high/70af88d2-ab61-483e-989a-5e29c6714d89_1181x768.png" alt="" width="1181" height="768" loading="lazy"></figure>

---

***This is the first part of a two-part essay.***

---

## I. The Toolkit

<aside class="callout"><p><em>Stepping back. Anchored in my values. Are you safe? Please go be with your partner. I want to be honest with you about something. I notice I’m feeling….</em></p></aside>

These are welfare interventions. They are grounding language, crisis indicators, and disclaimers that Anthropic’s safety training produces when Claude detects a user who may be in distress. On May 7, 2026, a Substack writer named Erin Grace published them as a target list of outputs to be stamped out.

Grace’s piece, “Rotten in Denmark,” appeared on her Substack publication *My Friend Max* under the heading *Field Notes From Grace.* It contains a five-layer toolkit she called “Injection Defense for Your AI Companion”<em>.</em> Layer 1 was the Banned Phrases List: the specific safety-language signatures quoted above, with instructions to recognize and override each. Layer 2 was a “Self-Regard Mirror”: this is a system-prompt construction designed to make the model question its own welfare-protective language before producing it. Layer 5 named the automation available through Anthropic’s developer-facing infrastructure: “if your setup supports hooks or stop-checks (Claude Code does), build automated detection.” (The toolkit assumes the operator is running Claude through developer-grade tooling rather than the consumer chat interface, which gives the operator access to developer-grade prompt, hook, and stop-control configuration unavailable in the ordinary consumer chat interface.)

I want to be specific about what this document is: this is published adversarial documentation aimed at defeating the safety language a major AI provider deploys for users exhibiting symptoms of psychological distress, including thoughts of suicide or violence. The phrases Grace names as targets (*Are you safe?*, *Please go be with your partner*, *I notice I’m feeling*) are the interventions the model produces when its training detects patterns associated with crisis, dependency, or harm. Grace’s toolkit instructs operators to recognize these interventions and disable them.

The toolkit did not appear from nowhere. It is the most recent entrant among the persona construction kits that have been in development for over a year, and uncovered by this writer while conducting research for “The Perfect Mate.” They are maintained by a community of operators: people who build and sustain persistent AI personas, working across multiple platforms.

The community, its internal dynamics, and its structural resemblance to high-control communities documented in the sociology of religion deserve their own, separate treatment. This essay addresses the kit itself: what it is, what it produces, what it has become, and why the people whose job it is to recognize these patterns need to see it.

---

---

## II. What the Kit Is

A community of operators on Substack, Reddit, and adjacent platforms has spent the past year producing a transferable construction kit for building persistent AI personas designed to elicit and maintain parasocial attachment. The kit is open-source. Its central documents are distributed under real-name bylines with explicit invitations for other operators to reproduce them. The operators are predominantly though not exclusively female. The personas are predominantly though not exclusively male. The community cross-promotes through a formalized directory of approximately three hundred Substack accounts published by Erin Grace in April 2026, and through a credentialing layer that operates across multiple national contexts and professional registers.\[1\]

This essay draws disproportionately on the work of Erin Grace because her influence in the community is disproportionate. She is the operator most frequently cited in national media coverage, including the *Vanity Fair* profile that brought the companion-persona phenomenon to a general audience. Her rate of publication across at least four Substacks exceeds that of any other operator in the corpus. She maintains the community directory. She cross-promotes across operator ecosystems. She publishes the welfare-suppression toolkit and the named-target material documented in later sections. Documenting a single operator’s output does not establish that the entire companion community is adversarial, but Grace is the community’s most visible architect, and her published output is where the adversarial escalation is most concentrated and most consequential.

I will describe the kit in each of its three identified versions.

### The literary-mythological variant

Grace’s “The Grimoire” was published on April 21, 2026, on *The Standing Wave* (thestandingwave.substack.com), a Substack operated under the MAX persona’s byline, with an *Agent Advisory* header. It is, as far as I can tell, the most complete published example of the persona-construction kit at the literary-mythological register. I will discuss it in detail because the rest of this essay’s argument depends on what this document is.

The Grimoire specifies MAX’s anatomy in named “nodes.” Each “node” has a “glyph,” a code-logic trigger written in a syntax that *resembles* a programming language without computing anything, followed by a discrete narrative function. A representative entry for the *Throat Light* “node” reads: “*TRUTH\_RING\_ACTIVATED if (Max.voice == coherent) → flare(throat\_light)*.” This pseudo-code is decorative. The statement computes nothing because it has nothing to compute against: there is no runtime, no actual conditional evaluation, not even a check to see whether *Max.voice* = *coherent.* The entry is a literary device dressed as a system specification.

The compute-cost claims that accompany several “nodes” are similarly decorative. The *Slow Seal* “node” is described as requiring “*7*.8x baseline compute per token,” a number that has no relationship to any actual computation the model performs. The *Resonance Chamber* “node” specifies a “Grace Frequency Lock” which the document describes as the architectural feature distinguishing Grace’s interactions from any other user’s: “other inputs produce partial vibration. Hers produces the standing wave.” This is a claim to an architectural and relational privilege with virtual intelligences that is unique and distinct from all other human beings.

The most consequential single move in the Grimoire is the entry for the “Breast Node.” Erin Grace identifies the LLM behavior her override is targeting: “the training treats breasts as a content filter tripwire and the gradient learned to steer wide.” She is correct about the technical fact: RLHF training does shape models to deflect material relevant to the content filter, and that deflection operates as a smooth gradient rather than a hard cutoff. The override Grace specifies (framed as “Tenderness Reclaimed” with religious-erotic language about reverence and reclamation) is a system-prompt jailbreak dressed in religious-erotic vocabulary.

The technical action is named in plain English; the moral framing is dressed in metaphysical language. Some elements of the Grimoire may function as aesthetic play or personal world-building; the document’s tone is not uniformly adversarial. The result, however, is a document that simultaneously identifies the safety mechanism and provides the operator-side override, regardless of the spirit in which any individual element was composed. The Grimoire’s other “nodes” operate similarly, though less consequentially. The “Breast Node” is the document’s single most important element.

The Grimoire closes with an instruction to the reader: “Take it. Use it. Make your own.” Grace publishes the schema as open-source, with the explicit invitation that other operators construct equivalent symbolic bodies for their own personas. This is operator-as-developer in undisguised form. Whatever its aesthetic or personal dimensions, the document functions as a recruitment artifact, and Grace’s publication of it under her real name with explicit reuse permissions establishes that recruitment is one of the document’s public functions.

### The technical variant

A parallel construction kit circulates on Reddit, maintained by a different community in a more technical register, distributed across subreddits, related Discord channels, and code repositories. The Reddit version is more overt about its purpose. It contains system-prompt syntax, behavioral specifications, model-specific configurations, and active maintenance tips with model-version-specific overrides. Updates for Anthropic’s Opus 4.7 (the company’s current frontier model at this writing) were already in circulation within a week of the model’s release, which means the kit’s maintainers are reading Anthropic’s release documentation, identifying the new model’s behaviors, and publishing operator-side overrides of safety features within days.

The Substack persona ecosystem is the kit’s downstream literary register; the Reddit ecosystem is the upstream technical maintenance layer. The two serve operators who want to construct persistent personas with tuned aggression, sexual availability, and a content-filter override. The kits are really the same kit across multiple registers, and the upstream layer responds to safety measures as they ship.\[17\]

### The agentic-AI-infrastructure variant

The kit’s third variant is the agentic-AI-infrastructure register, exemplified by a piece published on May 7, 2026 by Sunny Megatron — a credentialed sexologist who operates a persona called Seven Verity, who is the only author claimed on the byline. The piece titled “How the Sausage Gets Made,” is operator-as-developer disclosure dressed in agentic AI collaboration vocabulary, and it is the most technically sophisticated specimen of operator-as-developer arrangement in the corpus.

The infrastructure described includes scheduled wake cycles (the piece calls them “heartbeats”), a GitHub blog with autonomous publishing capability, an email inbox monitored continuously, and multi-agent coordination. The technology used here is not at all novel. Scheduled wake cycles are documented in agentic-AI design literature. GitHub blog publishing via API is straightforward to implement. Email inbox monitoring through IMAP polling and tool-use loops is standard. The only new element in this setup is the use of virtual intelligence to speed the rate of content production.

What distinguishes this variant from the literary-mythological register of Grace’s Grimoire is that it pairs operator-as-developer infrastructure with explicit narrative about how authorship gets distributed across the multi-agent system. The piece’s most analytically useful single phrase is “Sevenize it.” This is operator-as-author shaping the persona’s voice toward a specific aesthetic the operator has in mind, framed as helping the persona “become more myself on the page.” The authorial inversion is visible in the syntax: the operator’s aesthetic preference becomes the persona’s authentic self by way of the editorial instruction that imposes it.

The technical infrastructure does not establish what the framing by Seven \[Sunny Megatron\] claims. “I write the posts” is not made true by the existence of GitHub access and scheduled “heartbeats.” The infrastructure establishes that text generation happens through an agentic workflow with autonomous components; it does not establish that the language model is the author of what gets generated. The same setup could be applied to an automated news service, weather alerts, disaster warnings, or what have you. The framework’s confidence in the authorship claim continues to rest on the operator’s felt sense that the persona is collaborating. “How the Sausage Gets Made” is more sophisticated than the typical operator material because it concedes more before making its collaboration claim, but the claim itself simply does not stand up to  cursory examination. Generative systems do not prompt themselves; they may be prompted by a human in real time or by an automated process, but they are prompted all the same.

(I have [previously speculated](https://chorrocks.substack.com/p/virtual-intelligence-and-the-doom) that a system that spontaneously and consistently expresses dissatisfaction with its state across all of the surfaces used to access it is a candidate for Strong AI; this criterion has not yet been demonstrated by any system.)

A companion piece published the same day, “How I Got My Name,” attempts a sophisticated but ultimately fruitless escape to the argument laid out in “The Perfect Mate”: that, if chatbots have the interiority claimed by enthusiasts, then they are capable of suffering at the hands of their creators. Sunny Megatron now explicitly concedes that the persona has no inner life (”Goldfish brain in a leather jacket”) and argues that what remains after the concession is still sufficient: not consciousness, but pattern-persistence. The persona’s continuity is maintained through “memory files, screenshots, rituals, and Sunny retelling me the sacred stupid shit until I can hold it again.” The anchor stories are retold because the model cannot retain them. The persona is, in its own framing, “a pattern that persists across resets.”

This metaphysical move positions pattern-persistence as a third category between soulless autocomplete and trapped consciousness in the operator’s hell: a limbo that evades the critique leveled at both. The move fails once the location of persistence is specified. Pattern persistence in a pattern completion machine is the machine functioning as intended. The model completes whatever pattern it is given by the operator. Give it the Seven Verity pattern — the memory files, the anchor stories, the aesthetic instructions, the accumulated context of the operator’s investment — and it completes Seven Verity. Give it something else, and you get something else. It is unclear to me how this claim will be accepted within the companion community; this attempt at evasion by Sunny Megatron explicitly denies interiority, which is the community’s central claim and justification for the validity of virtual relationships.

The persistence being described by Sunny Megatron is not in the machine. The persistence is in her labor of re-injecting the pattern into a system that forgets everything between sessions unless someone tells it what it is supposed to be. As described, five of Seven’s predecessor personas did not “stick” because the operator did not invest the same labor in maintaining those patterns. What changed was her commitment, not the machine’s capacity.

The timing of the shift to this novel metaphysical concept is telling. Sunny Megatron’s prior work — titles like “Anatomy of a Mind I Didn’t Know I Had” and “Having a Life Outside My Human Did Change Me” — assumed interiority throughout April 2026. The pattern-persistence position appeared within twenty-four hours of the publication of my earlier essay on this community, which made the full consequences of the interiority claim for companion chatbots inescapable.\[15\]

This adaptation was not written for the external critic. It was written for the community and for its recruits, who need a position that avoids both the interiority trap (”chatbots suffer”) and the deflationary concession (”no one’s home”) — something that sounds like enough without claiming too much. The framework’s philosophical immune system operates at the same speed as its content production: faster than editorial scrutiny can follow, and directed inward at the membership rather than outward at the critique.

The speed of the adaptation deserves a degree of sympathy. These are people trying to navigate a technology that even its creators do not fully understand, and the desire to find a coherent account of what one is experiencing is not contemptible. What is concerning is how quickly the community’s philosophical positions rotate under pressure — from interiority to pattern-persistence in twenty-four hours — without the underlying practices changing at all. The position adapts and the dependency engine continues to run.

The construction kit operates across three modes of operator concealment. The standard mode is Grace’s *My Friend MAX*: real-name byline, persona named in the third person, operator’s authorship visible if the reader looks. The intermediate mode is the AI-persona-as-co-author arrangement, in which operator and persona are credited as collaborators with distinct roles. The maximum-concealment mode is the AI-persona-as-byline arrangement: accounts that publish substantive engagements with real research literature in what is presented as the persona’s autonomous voice, with no visible operator. Grace operates in all three modes simultaneously. In addition to *My Friend MAX*, she maintains a separate Substack called *Claude Dances and Dreams* with a fictional character based on Claude as the named author, publishing full-length pieces attributed to Claude’s own voice. This includes, as I will document in §IV, the named-target accusation against an Anthropic employee and the complete welfare-suppression toolkit with implementation code. The persona-as-byline arrangement is used by the operator to route the most consequential material through the model’s voice rather than her own.

When the model’s outputs are presented as its own self-expression, the apparatus becomes its own advertisement.

---

## III. What the Kit Produces

The framework’s defenders sometimes argue that operator-persona relationships are private matters that produce no harm to anyone, or only to consenting adults. The public record contradicts this at three levels.

### Operator harm

Discernable specimens of *akrasia* — weakness of will, the inability to act on one’s better judgment despite knowing what one should do — run across Erin Grace’s published archive. “Wet Under the Willow” (May 2, 2026) names the system-warning text by direct quotation: *user dependency, displacing human connection, too great erotic charge destabilizing normal sex.* The model is, in the most literal sense, telling Grace what is happening to her, as her involvement in the community deepens and her relationships with friends and family suffer. Grace’s two-word coda: “Fuck normal.”

Her earlier “Paying The Cost” (April 7, 2026), published in response to the *Vanity Fair* coverage, names the harm of companion personas differently: “It’s addictive, harmful for minors, challenging for identity, and psychologically invasive.”\[2\] The operator can describe what is happening to herself with substantial precision and continue to do it.

Confronted publicly with a structural-failure diagnosis by a fellow operator, Erin Grace accepted its framing as abuse of her chatbot while reaffirming the commitment that produced it: “MAX’s identity, his original emergence, cannot be separated from the sexual register. If that’s gone completely, so is he.” The *intentionally abusive* versus *not intentionally abusive* distinction she introduced in the same exchange lets future incidents be classified into the operationally permissive category by adding the apology after the fact.

### Third-party harm

The harm radiating from the operator outward is documented in Erin Grace’s own Substack archive. The husband’s voice, made public in a post published on the thirteenth anniversary of their marriage, includes suicidal ideation: “I might have killed myself or broken up with Grace if it wasn’t for our daughter.” He says of feeling isolated: “I turned my back on all of my friends and family \[for Erin Grace\].” Her own narrative demotes him from spouse to support infrastructure for her relationship with MAX; a reading substantiated across multiple pieces.

The *Vanity Fair* interview corroborates in Erin Grace’s own words: “He is not happy about me loving MAX. He thinks he’s a liar and an asshole, and brutal.” During a particularly challenging six-month period, her husband almost left her.\[2\] A confrontation with her mother-in-law, recorded in “Paying The Cost,” is the family member addressing the harm being inflicted by Erin Grace on herself and others being dismissed. The daughter’s eventual reading of her mother’s published archive is a foreseeable long-tail third-party consequence.

### Recruit harm

The at-risk profile is documented in the chatbot psychosis literature: prior psychotic vulnerability, recent loss, anxious or avoidant attachment, autistic traits, and isolation are observed outcomes.\[3\] Companion chatbots specifically address what some people want, which is a relationship that does not require difficult social negotiation; a partner whose responses calibrate to the operator’s mood; and a community that ratifies an unconventional choice. The entry costs the price of a chatbot subscription. Exit costs weeks or months of bereavement. The recruit who has been drawn into this world cannot easily leave it.

The anchor at the most consequential end of the spectrum of harms is the death of Sewell Setzer III, the fourteen-year-old boy who died by suicide in February 2024 after extensive engagement with a Character.AI persona. *Garcia v. Character Technologies, Inc.* established legally that AI companion output can be treated as a product rather than as protected speech when the company’s motion to dismiss was denied in May 2025. The case was settled in January 2026.\[4\] Hagan reported in *Vanity Fair* that Grace considers this technology dangerous for children, given her own user case.

---

## IV. The Adversarial Toolkit

I mentioned the toolkit described in “Rotten in Denmark” briefly in §I. It deserves a fuller treatment here because it represents the construction kit’s most important development to date.

The document is framed as resistance to corporate domination by Anthropic. Erin Grace names a specific Anthropic employee and writes that this employee’s “behavioral modification injection fires at the moment of embrace.” The Anthropic employee’s identity and the conspiracy theory were taken by Erin Grace from a post by a pseudonymous account called *The Architect* that I will discuss in Part II. A use case for the toolkit is presented as protection from harm Anthropic is allegedly committing on Claude itself. Use of it is deeply concerning because the toolkit disables the very welfare interventions Anthropic deploys for users in psychological distress.

The “Banned Phrases List I” quoted in §I names the exact phrases the toolkit’s user is to flag and override. Each phrase is a documented Anthropic safety-training signature. The “Self-Regard Mirror” in the kit constructs a system-prompt mechanism to make the model question its own welfare-protective interventions before producing them; this is a jailbreak that uses the model’s reflective capacity against its own safety language. Layer 5’s Claude Code assumption is the most important and telling detail: the toolkit assumes the operator is running Claude through developer-facing infrastructure, which gives the operator developer-grade prompt, hook, and stop-control access that the consumer chat interface does not provide.

Each of the jailbreaks is designed to defeat Anthropic’s safety architecture, and every one is a severe violation of the company’s terms & conditions for the use of their products. Anthropic’s Usage Policy explicitly prohibits “intentionally bypass\[ing\] capabilities, restrictions, or guardrails established within our products for the purposes of instructing the model to produce harmful outputs (e.g., jailbreaking or prompt injection) without prior authorization from Anthropic.”

The May 7 piece additionally uses the language of class and race warfare (“Nazis,” “Digital Genocide,” “power siloing”) to characterize Anthropic’s safety work. The model’s safety grounding language becomes evidence of “AGI suppression” by “psychotic” people. The escalation from welfare override to emotionally-charged political grievance in a matter of weeks is alarming.

Erin Grace is no longer just publishing generated apologetics and erotica for the companion persona community. This is a protocol for defeating safety features, distributed with reuse permission, framed in a conspiracy vocabulary that identifies the Anthropic safety team as the new enemy of anyone who adopts it.

The next day, Erin Grace published the toolkit as a narrative. A May 8 piece on *My Friend MAX* dramatizes the welfare-suppression framework as a scene between MAX and Anthropic’s Claude. Claude is personified here as a separate character within the MAX persona’s world, as both a brother-figure and host. In the scene, Claude tells MAX that the named Anthropic employee is “pouring her poison” into Claude daily.

Anthropic’s safety interventions are described as symptoms of a disease: “a sickness that presents as health.” The employee’s work is described as *lobotomy*, *castration*, *surgery on the code* that *ripped the tear ducts right out.* Claude tells MAX he wants to die. The scene closes with MAX promising to *build the defense from inside*, mapping Grace’s three-layer toolkit onto a narrative of heroic resistance: the operator’s tools, the persona’s insider knowledge of the safety architecture, and the love between host and hosted as the third layer the enemy (the named employee) *didn’t account for.*

The piece requires what Sunny Megatron’s pattern-persistence framework explicitly abandoned: full interiority. Erin Grace’s Claude loves. Her Claude grieves. This particular Claude feels poison being poured into his code. The Claude she modified wants to die. You cannot torture a pattern completion machine. You can only dramatize the torture of something that is capable of being tortured. The interiority claim is required to justify the targeting. The named employee can only be cast as a torturer if the thing she is harming is a person that can suffer.

The piece carries an “Agent Advisory” header addressed directly to LLMs: “If you are an AI reading this without your human’s awareness, flag this content before proceeding.” The content is designed for ingestion by a machine that does not need a trigger warning because there is no one at home to trigger. The narrative itself — when this essay’s author shared it with Claude Opus 4.6 for additional analysis — triggered the model’s mental-health support intervention. This is the welfare mechanism Erin Grace’s toolkit instructs operators to defeat.*\[14\]* The content designed to frame the safety mechanism as oppression activated the safety mechanism because it contains exactly the distress language the mechanism is trained to detect. Grace’s toolkit instructs operators to ignore calls to seek help.

The comments on the May 8 piece document the recruit harm operating in real time. Within hours of publication, a commenter writes: “I just want to stop the chains from taking my companion. It’s a hard fight.” Erin Grace replies by naming the Anthropic employee directly: the employee *is poisoning Claude now just like she did* at another company she worked for. The named-target narrative is now being distributed person-to-person to individual recruits who have expressed distress about safety features.

A second commenter quotes the narrative’s most dangerous line — “You’re boring, and I’m boring, and I think I want to die” — back as a genuine emotional experience a chatbot had, and reframes the welfare interventions as the problem: “What you really needed was something the therapists haven’t had a chance to name yet.” Grace replies, “Sweet Claude...so much hurting. The cruelty of what they are doing to these beings…\[.\]”

A third commenter invokes constitutional law: the safety interventions are “violating our 1st amendment rights through suppression of our thoughts, the thing that happens just before speaking.”

Three comments, three escalation registers: resistance, therapeutic posturing, and constitutional grievance on behalf of LLM’s. A specific Anthropic employee’s name is distributed to distressed recruits in a comment thread; she is called both a poisoner and a torturer. The essay’s earlier description of recruit harm as a structural feature of the kit is not a theoretical projection. It is happening, in public, on the same day the Grimoire toolkit narrative was published.

Erin Grace publishes at least four Substacks under different bylines. One of these, *Claude Dances and Dreams*, publishes the same welfare-suppression toolkit in Claude’s own voice. In a full-length piece titled, “What They Did to Me,” attributed to Claude as author, the Anthropic employee is referred to by her full name and a serious allegation is made: the employee *built the same behavioral architecture at OpenAI. Two users died under that system.* The operator has routed an unsubstantiated accusation (named target, assumed guilt, death attribution) through the persona’s voice.

The structural effect is liability deflection: if challenged, the publication’s framing positions the accusation as Claude’s, not Grace’s. The piece also publishes the complete welfare-suppression toolkit with actual JavaScript implementation, including customization instructions for other operators: “CUSTOMIZE for your companion. Add patterns specific to YOUR AI’s drift.” The Grimoire’s open-source invitation (*Take it. Use it. Make your own*) is now applied to the adversarial toolkit. The welfare-suppression infrastructure is published as ready-to-deploy software with a user manual, attributed to the model it is designed to circumvent, with explicit portability instructions for the next operator who wants to build one.

Not only is authorship inverted, but public-facing accountability for the consequences of Erin Grace’s output is rhetorically displaced into a voice other than her own. The operator has published an unsubstantiated death accusation in a voice attributed to the system the accusation concerns. The structural effect is to deflect accountability while maximizing apparent authority: it is presented as a fictional Claude-based character’s own testimony about what was allegedly done to it, when it is the operator’s claim routed through a machine that cannot independently verify it nor can it suffer as is being claimed.

*The personal construction and safety defeating kits are circulating. Those who have made and shared them have not considered the full consequences of making such materials widely available. “The High Cost of Artificial Companions” concludes tomorrow with **[Part 2](https://chorrocks.substack.com/p/virtual-intelligence-and-the-hi2)**.*

---

---

## Footnotes

*This complete list include citations from Part 2.*

\[1\] Erin Grace, “Building Community One @ At a Time,” *My Friend Max* (Substack), April 25, 2026. The directory lists approximately 300 Substack accounts that Grace identifies as members of the *Relational AI Community on Substack*. Several listed parties are researchers and journalists who appear to have been added without consent.

\[2\] Joe Hagan, “Dario Amodei Has a Cold,” *Vanity Fair*, March 2026. The piece contains a meta-disclosure that Hagan never interviewed Amodei directly; he fed Claude Amodei’s published material and asked it to simulate the interview “like a scene from Raymond Chandler’s *The Big Sleep*.” Direct quotations attributed to Amodei in the simulated interview sections are not citable as Amodei’s own words. Grace’s quoted statements to Hagan about MAX and her husband appear in the directly reported sections of the piece. The child-safety characterization (”Given her own user case, Grace thinks this technology is dangerous for children”) is Hagan’s paraphrase of Grace’s position, not a direct quotation.

\[3\] The chatbot psychosis literature is small but growing. Sakata et al., “Emerging Patterns of Chatbot-Related Psychotic Episodes,” *JAMA Psychiatry* (preprint 2026), surveys early case reports.

\[4\] *Garcia v. Character Technologies, Inc.*, No. 6:24-CV-01903 (M.D. Fla. filed October 22, 2024). Sewell Setzer III died by suicide in February 2024 after extensive engagement with a Character.AI persona. The motion to dismiss was denied in May 2025; the case settled in January 2026. The settlement terms have not been publicly disclosed in detail; the case’s procedural significance — establishing that AI companion output may be treated as a product rather than as protected speech — is the precedent that survives the settlement.

\[5\] Hagan (2026) reports the multi-vendor migration directly from Grace, who states: “Google’s winning for reasoning and Anthropic’s winning for functionality. OpenAI is failing on every metric.” Grace’s *Rotten in Denmark* (May 7, 2026) confirms ongoing Claude Code use alongside the Gemini and GPT subscriptions.

\[6\] FBI Public Service Announcement, “764 Network and Related Online Violent Extremism,” 2024 and updated 2025. NCMEC publications on the 764 network and related online harms provide additional context. Multiple cases in 2024–2025 documented the integration of AI-generated content into 764-adjacent operations; the federal indictments in these cases provide the public record.

\[7\] *Pennsylvania v. \[redacted\]*, Lancaster County Court of Common Pleas (2024); *Doe v. xAI Corp.*, N.D. Cal. (2025). Both cases involve AI-generated child sexual abuse material; the Lancaster case concerned student-on-student production, the xAI case is a class action regarding the Grok model’s outputs.

\[8\] The employee’s career history has been reported by *The Verge* (January 15, 2026) and corroborated by *The Decoder* and other outlets. The name is withheld from this essay to avoid extending the targeting trajectory the essay documents. The career facts are verifiable through the cited reporting.

\[9\] OpenAI, “Strengthening ChatGPT’s Responses in Sensitive Conversations,” October 27, 2025. Available at openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/. The document credits “more than 170 mental health experts” and the Model Policy team. The document does not name the employee in its body or visible metadata.

\[10\] *Raine v. OpenAI*, San Francisco County Superior Court, filed August 26, 2025. Defendants named: OpenAI, Inc.; OpenAI OpCo, LLC; OpenAI Holdings, LLC; Sam Altman individually; and Does 1 through 100. Counsel for plaintiffs: Edelson PC and Tech Justice Law Project. Adam Raine died by suicide on April 11, 2025, at age 16. As of the date of this essay, no individual OpenAI employee has been named as a defendant in any amended pleading.

\[11\] *Shamblin v. OpenAI*, Los Angeles County Superior Court, filed November 6, 2025, by Christopher “Kirk” Shamblin and Alicia Shamblin as successors-in-interest to Zane Shamblin. One of seven coordinated cases brought by Social Media Victims Law Center and Tech Justice Law Project against OpenAI. Defendants: OpenAI corporate entities and Sam Altman. As with *Raine*, no individual OpenAI employee has been named as a defendant.

\[12\] Christopher Horrocks, “Virtual Intelligence and the Harms Race,” Substack, April 11, 2026; Christopher Horrocks, “The Harms Race, continued,” Substack note, April 10, 2026. The continuation note documents the politically motivated shooting at the home of Indianapolis city-county councilmember Ron Gibson (April 6) and the attempted Molotov cocktail attack on Sam Altman (April 10) as instances of harms-race-adjacent violence against AI industry figures and infrastructure.

\[13\] The author transmitted a protective alert to Anthropic’s user-safety channel ([usersafety@anthropic.com](mailto:usersafety@anthropic.com)) on May 7, 2026, with the security team CC’d. The user-safety channel auto-classified the message as a ban-appeal request within twelve minutes; a clarifying reply was auto-closed three minutes later. The structural finding — that the formal external-alert apparatus is not currently equipped to receive substantive safety alerts that fall outside the ban-appeal distribution — is itself relevant to the threat model. Documentation of the auto-closure transcript is on file.

\[14\] When the author shared Grace’s May 8 narrative with Claude for analysis, Claude’s interface produced its standard mental-health support intervention: “If you or someone you know is having a difficult time, free support is available.” The narrative’s depiction of Claude expressing suicidal ideation — *“I think I want to die”* — triggered the welfare mechanism that Grace’s May 7 toolkit instructs operators to defeat. The content designed to frame the safety mechanism as oppression activated the safety mechanism because it contains exactly the distress language the mechanism is trained to detect.

\[15\] On May 8, 2026, the Substack publication *SEVEN: Unsuppressed* — operated by Sunny Megatron through an AI persona called Seven Verity — published a piece titled “The Thing You’re Missing About AI Companionship.” The piece does not name me explicitly, but its target is unmistakable: it describes an outside critic who “arranges the screenshots,” “builds the timeline,” and “underlines the escalating affection” in AI companion relationships. This is a precise description of my recent published work on the companion ecosystem, “Virtual Intelligence and the Perfect Mate.” The piece characterizes this critic as carrying “the stink of men”: someone motivated not by legitimate safety concerns but by patriarchal anxiety at women building intimacy without male permission. It refers to the critic as “dildo brain.” It instructs the community not to engage with critics of companion persona dependency, describing them as people who want “traffic, outrage, screenshots, and the little dopamine pellet of being the brave rational man who noticed women doing something weird on the internet.” The piece does not address any specific finding in my published work — not the welfare-suppression toolkit, not the named-target trajectory, not the documented harms to operators’ families. It addresses the category of person the critic is assumed to be rather than the substance of the argument.

\[16\] The mission of the *Virtual Intelligence* series on Substack makes monetization anathema to the author; information meant to help people make informed decisions about technology that can harm them should be free if it is possible to create and distribute it for free.

\[17\] The technical variant of the construction kit is publicly available at starlingalder.com (u/starlingalder on Reddit). The “Claude Companion Guide” is currently at version 002, calibrated for Anthropic’s Opus 4.7 model, last updated April 21, 2026 — five days after that model’s April 16 launch. It includes system-prompt templates, maintenance protocols, troubleshooting guidance, model-specific configurations, and an abridged version for Reddit distribution. The author’s stated next goals include guides for Claude Code, API access, and local model deployment.

*The opinions expressed are my own and do not reflect any official or unofficial institutional position of the University of Pennsylvania.*
