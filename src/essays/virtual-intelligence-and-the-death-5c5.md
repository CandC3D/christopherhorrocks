---
title: "Virtual Intelligence and the Death of Authorship, Part 2"
subtitle: "What a Yale cheating case, the Heated Rivalry AI fan fiction blowup, and an open-source code laundering tool have in common."
date: 2026-08-04
substack: "https://chorrocks.substack.com/p/virtual-intelligence-and-the-death-5c5"
podcast: ""
image: "/img/virtual-intelligence-and-the-death-5c5/cdfbedce-d23e-48e3-aebd-e0d0a66e58a5_1408x768.png"
description: "What a Yale cheating case, the Heated Rivalry AI fan fiction blowup, and an open-source code laundering tool have in common."
substackWordcount: 3150
---
<figure><img src="/img/virtual-intelligence-and-the-death-5c5/cdfbedce-d23e-48e3-aebd-e0d0a66e58a5_1408x768.png" alt="" width="1408" height="768" loading="lazy"></figure>

---

*This is the second part of a two-part essay about generative AI and the authorship of cultural products. \[[Part 1 is here.](https://chorrocks.substack.com/p/virtual-intelligence-and-the-death)\]*

---

## 1. Thierry Rignol

Executive Master of Business Administration degrees, awarded through programs from business schools worldwide, afford working professionals an opportunity to advance their education. The coursework is often, but not always, paid for by the student’s employer. The professional’s future opportunities may open further with the awarding of the degree — especially if the awarding institution is prestigious.

Thierry Rignol is a principal at Midwest Plains Capital. He was accepted to Yale’s Executive MBA program; tuition for this program is over $200,000. A professor suspected Rignol of having used AI to complete a final examination in Spring of 2024, using GPTZero to investigate. \[1\] The tool told the professor that whole sections of Rignol’s final exam were composed by AI.

As Rignol tells it, his lengthy and well-polished answers were what caused a false detection. He also points out that tools like GPTZero have known biases against non-native English speakers like himself. A 2023 study of several detector products showed a high rate of false signals when set on text by such authors. \[2\]

The examination was a self-timed, “closed internet, open book” exam with answers to be provided as a PDF, and AI tools were explicitly disallowed. Notably, of all of the examinations turned in by the class, only Rignol’s was flagged as a possible instance of AI use. Throughout the subsequent investigation, Rignol was asked to provide the original Word document that could help settle the issue of provenance. He was asked repeatedly for it, and only after many inquiries by Yale officials did Rignol provide an excuse: he had not used Word, but Apple Pages; therefore he had nothing that could be provided for all the previous requests.

Why Rignol had not offered this Pages file before is left to the reader to guess. Despite being asked many times to provide possibly exculpatory evidence, Rignol was neither cooperative nor forthcoming with Yale during its investigation. Either Rignol has a poor understanding of file formats and assumed Yale didn’t know what Pages was, or some alternative explanation is required.

The case is now a thirteen-count federal lawsuit, *Rignol v. Yale University*, that’s nowhere near trial (while the case is mainly about the detection, Rignol also claims that he is being punished by Yale for his political views). \[3\] Mr. Rignol will have to explain, eventually, what led to his delay in providing the alleged original file to Yale. That’s why this case is important: the provenance of the ideas must be ascertained for Yale to be certain it is awarding degrees to those who do the work and deserve them. A detector cannot tell you that, but an original document could if it were substantially different from the final submission but had the same thesis or foundational ideas.

## 2. The Process

This is, in a sense, a similar solution to what Dr Sam Illingworth proposed for Substack’s Pangram implementation: eliminate the tool and instead tell us about your process; show it if you can. \[4\] This is a plea to honesty as the best policy. It is in large part founded on the knowledge that detection instruments like GPTZero and Pangram are not reliable. As examined in Part 1, it is possible for these tools to flag entirely human-authored text because they work through statistical pattern matching, and the patterns being matched often signal polished prose.

---

---

## 3. *Heated Rivalry:* The Fan Fiction AI Blowup

The television romance series *Heated Rivalry* had a cultural moment in early 2026 when it premiered on HBO Max. \[5\] Like many cultural properties, it has attracted fan fiction writers who place the starring characters of the series in new situations. Many of these are erotica; others imagine the handsome hockey players in alternate universes and in different occupations.

Fan fiction writing has a long and largely cryptic history, but erotica has often formed a core of it; it is only natural that *Heated Rivalry* (already a successful book series before it came to television) would attract fan writers, much as the *Star Trek* and *Harry Potter* fandoms had before. Many of these works are uploaded for sharing with other fans at the website Archive of Our Own, also known as AO3. \[6\]

The *Heated Rivalry* fan fiction community is in the grip of an AI authorship crisis. Stories with perceived AI tells generated controversy: writing patterns and impossibilities of human anatomy and relation in physical space, like being behind a person and still being able to admire their abdominal muscles.

The turmoil over AI use increased sharply when a more reliable trace was discovered: Anthropic’s Claude labels its generated output with a CSS class called `font-claude-response-body`. The class is invisible to readers, but it travels along with the text when it is pasted from Claude’s interface into editors that do not strip it, including AO3’s. It sits in the page’s source code, findable by anyone who looks. \[7\] An anonymous account on X published a 25-page document identifying thirty-eight popular *Heated Rivalry* fan stories carrying the marker, and released custom code that made flagged text glow bright red. Some stories were entirely red. \[8\]

This is a more reliable detection than Pangram’s. Claude left fingerprints that a human can trace with little difficulty. The author of a popular work who had previously decried the use of AI was found to have two such fingerprints in their own writing. The community treated those two instances as if they were hundreds. The writer has since ceased contributing new stories to the archive.

The community’s response follows the same pattern seen among Substack writers in Part I. Like Substack, AO3 will not ban AI-created works outright. Betsy Rosenblatt, a law professor and a leader of the site’s legal committee, said: “We do not and cannot know how works are created before they’re posted,” adding that a rule against AI use “would be an engine for harassment.” \[5\] Community members on Reddit came up with two punitive options for when AI use is identified: ban flagged works, or ban the author of any work that is flagged.

## 4. Functional Replication

It is possible to trace the provenance of some generated artifacts, like text, from their tells. What is less common, but more sinister, is the use of AI tools to strip away provenance.

The website malus.sh offers to take open-source software and produce “clean room” versions stripped of all licensing requirements. The site was created as a satire, but the service it offers is real: supply open-source software at one end, and a functionally identical version with no attribution or copyleft obligations is delivered at the other. \[9\] The site operates under the legal principles established in the 1982 precedent in which Columbia Data Products reverse-engineered the IBM PC’s BIOS. Courts held that no copyrights were infringed because copyright protects expression, not function; therefore, building something original from scratch that does the same thing is permitted. \[10\] AI collapses the clean-room timeline from months to minutes.

The legal right to use AI clean rooms is not as clear-cut as it sounds. Dan Blanchard, the long-time maintainer of the Python library `chardet`, used Anthropic’s Claude Code to create a new version of the library under a permissive license — first MIT, then 0BSD, a public-domain equivalent — replacing the original GNU LGPL, a copyleft license that requires modified versions to carry the same terms. \[11\] In a post from an individual claiming to be the library’s inventor, Mark Pilgrim, he noted that “Licensed code, when modified, must be released under the same LGPL license,” and that “\[the\] claim that it is a ‘complete rewrite’ is irrelevant, since they had ample exposure to the originally licensed code (i.e. this is not a ‘clean room’ implementation). Adding a fancy code generator into the mix does not somehow grant them any additional rights.” \[12\]

When Anthropic accidentally published the source of Claude Code in March, Sigrid Jin did the same thing in reverse: a clean-room Python rewrite using a competitor’s AI tools. It was reportedly the fastest repository in GitHub history to reach fifty thousand stars. \[13\] Anthropic’s DMCA takedown notices removed the direct copies but not the rewrite — another instance of the clean-room principle in action.

In all of these cases — malus.sh, `chardet`, and Claude Code — functionality survived the AI rewrite process. What was lost was the authorship and all it entails: license, attribution, and the obligation of the open-source author to share and share alike.

## 5. Style as Property

Among the earliest controversies about generative AI has been the ability of systems to imitate, to one degree or another, the style of a well-known author. Grammarly offered this as a feature called “Expert Review,” generating editing suggestions inspired by named writers and academics — among them Stephen King, Neil deGrasse Tyson, and Carl Sagan — until user backlash and a class-action lawsuit forced the feature’s withdrawal in March. \[14\] The lawsuit, *Angwin v. Superhuman*, was filed in the Southern District of New York on behalf of writers and academics whose identities were used without consent. \[15\]

OpenAI also permitted ChatGPT to be used for style mimicry, though without advertising it as a feature. That changed in late July, when ChatGPT began to refuse requests to write in a named author’s style. \[16\] Upset users went to Reddit to complain about this change. The original poster of one complaint thread noted that the entire novel they had been writing was produced by prompting ChatGPT to write in the style of a particular author. \[17\] This is an ugly specimen of confused authorship: writing by specification (a prompt) to generate an artificial text, written by a machine in the style of another person who is not a party to the exchange.

The top-voted workaround in this thread showed some ingenuity: have the model describe the style that is desired, build a persona around that description, and then feed it into a new ChatGPT session. This is a clean-room bypass in the spirit of what malus.sh does — the same evasion of the constraint, in a different domain. The service offered by AIStoryHub appears to operate on the same or a similar mechanism and is, in part, pitched to fan fiction writers. \[18\]

One Redditor’s reply to the thread was heavily downvoted but survived moderation: “Try writing your own words.”

In June, the CREATOR Act was introduced into the U.S. House of Representatives (H.R. 9112) to protect visual artists from having their distinctive style imitated in generated imagery. \[19\] It is an attempt to make style a protectable asset.

Three responses to the problems of authorship arrived inside of half a year: one commercial (Grammarly pulling the feature), one technical (OpenAI refusing the prompt), one legislative. None of them addresses the cases where nobody’s style is being imitated because nobody authored the work. The current toolkit protects named authors and mandates disclosure. It has no mechanism for the growing category of production  — true AI slop, made to capture eyeballs on revenue-generating platforms  — where no human author exists to name, protect, or hold responsible for the content.

## 6. The Failures of Detection

What links all of the cases we have examined is that detectors resolved none of them. GPTZero flagged Rignol’s exam at Yale; like Pangram at Substack, it produced more noise than real results. The fan fiction community around *Heated Rivalry* began its hunt with detectors but found a more reliable trace in a CSS artifact left behind by Claude. People who use `chardet` found the new version functionally identical even though it was supposed to be a ground-up clean-room rewrite; a real possibility with software, but the case is not clean because the person generating the rewrite is, as the maintainer, intimately familiar with the original being reproduced.

Every current mechanism — detectors, disclosure labels, style-protection statutes — assumes there is an author to find, to protect, or to hold responsible. The growing category of cultural products generated by AI has no such person to credit or discredit.

There is a small but visible trend of human authors purposefully leaving errors in their text to show they are human-written; but that can be done by software, too. Sinceerly, a Chrome extension that injects typos into polished text to defeat detectors, is the logical endpoint of the arms race between AI-assisted writers and detectors: imperfection as the last remaining signal of human authorship, manufactured by a machine. \[20\]

The *Heated Rivalry* fan fiction community’s stated goal is to encourage and promote human-written texts. The idea is that all-human writing is a bulwark against being inundated by AI slop. Precedent is again instructive here, because the publishing world has had a different slop era to draw lessons from. The pulp fiction age of the 1920s through 1940s provided inexpensive and often poor reading material to millions. Cheaply printed ephemera, the pulps were mostly trash written by writers who were churning out reams of material just to keep body and soul together. The pulps were also the training grounds of giants. The pulps gave us Raymond Chandler, Isaac Asimov, and Ray Bradbury, among others. In the urge to eliminate all AI assistance in writing, it might seem tempting to tear down new talents because they work differently from past authors. The history of the pulps tells us that would be an error.

## 7. The Open Grave

Thierry Rignol’s case is still unresolved, but he has encountered some skepticism of his claims about why he was not forthcoming in providing documentation that the work he turned in was his own, and not generated by AI. “Wouldn’t a reasonable professional person who was trying to be cooperative with a proceeding,” one judge asked, “upon getting not just one email but many emails asking for the underlying document that was used to create a PDF say, ‘Oh, I didn’t use Word. I used Pages, a different word processing \[program\]?’” \[3\] Rignol’s apparently evasive actions do not look like those of a person who is confident in his authorship or that it will be vindicated upon examination. Yale has moved to dismiss the case.

What the users of detector tools and other methods of finding AI use in cultural products cannot tell us about is the authorship of what is being scanned. It cannot tell us if the words come from the human presenting them, from the AI that generated them, or from a third party whose work was imitated by the machine through prompting. Authorship, as illustrated in Part I by the example of Rubens and the artist’s workshop, is not about each word on a page or each individual line made by a hair in a brush. It is a real person staking their name on their method of working, and standing behind it when asked how the work was made.

Detectors, text artifacts, and statutes can protect named authors and mandate disclosure. There is no mechanism, however, that governs or regulates the growing category of works that have no named human author to protect or hold responsible, or to tell where the human contribution ends and the machine’s outputs begin. It is here where authorship’s grave has been dug.

---

---

## Footnotes

1. Nate Anderson, “How a Yale AI-cheating dispute became a 13-count federal lawsuit,” *Ars Technica*, July 31, 2026. [https://arstechnica.com/tech-policy/2026/07/how-a-yale-ai-cheating-dispute-became-a-13-count-federal-lawsuit/](https://arstechnica.com/tech-policy/2026/07/how-a-yale-ai-cheating-dispute-became-a-13-count-federal-lawsuit/)
2. Weixin Liang et al., “GPT detectors are biased against non-native English writers,” *Patterns* 4, no. 7 (2023). [https://arxiv.org/abs/2304.02819](https://arxiv.org/abs/2304.02819)
3. *Rignol v. Yale University*, No. 3:25-cv-00236 (D. Conn.). Docket entries and judicial quotation as reported in Anderson (note 1).
4. Sam Illingworth, “Substack’s AI Detector and the Return of the Witch Hunt,” *The Slow AI*, July 24, 2026. See also Part I of this essay.
   
   [https://theslowai.substack.com/p/substack-ai-detection-witch-hunt](https://theslowai.substack.com/p/substack-ai-detection-witch-hunt)
5. Emmy Martin, “When A.I. Invaded ‘Heated Rivalry’ Fan Fiction, the Meltdown Was Epic,” *The New York Times*, July 30, 2026. [https://www.nytimes.com/2026/07/30/technology/ai-heated-rivalry-fan-fiction.html](https://www.nytimes.com/2026/07/30/technology/ai-heated-rivalry-fan-fiction.html)
6. Archive of Our Own, [https://archiveofourown.org/](https://archiveofourown.org/)
7. Whitney A. Foster, “A 25-Page PDF Named 30 Fanfiction Writers as AI Users. Here’s What the Evidence Shows,” Substack, July 2, 2026.
   
   [https://whitneyafoster.substack.com/p/ao3-ai-fanfiction-heated-rivalry-detection](https://whitneyafoster.substack.com/p/ao3-ai-fanfiction-heated-rivalry-detection). See also Candyce Edelen’s original 2025 discovery of the CSS class in pasted Claude output. [https://www.linkedin.com/posts/candyceedelen\_well-crap-i-didnt-know-claude-was-adding-activity-7448391850501124096-podz/](https://www.linkedin.com/posts/candyceedelen_well-crap-i-didnt-know-claude-was-adding-activity-7448391850501124096-podz/)
8. @heatedrivalryai (John Doe), “Fandom Has a Hidden Generative A.I. Problem,” published via X, June 29–30, 2026.
   
   <blockquote class="tweet"><p>The following link leads to our complete findings, the site skin, an appendix of works that contain the Claude code fragment, and copies of the referenced fics: &lt;a class=&quot;tweet-url&quot; href=&quot;https://drive.google.com/file/d/1YyFKLzunnvVJRDTql5nHJwBb-swxIftn/view?usp=sharing&quot;&gt;drive.google.com/file/d/1YyFKLz…&lt;/a&gt;.</p><footer><a href="https://x.com/heatedrivalryai/status/2071719230223811032">John Doe (@heatedrivalryai), June 29, 2026</a></footer></blockquote>
9. Emanuel Maiberg, “This AI Tool Rips Off Open Source Software Without Violating Copyright,” *404 Media*, April 21, 2026. [https://www.404media.co/this-ai-tool-rips-off-open-source-software-without-violating-copyright/](https://www.404media.co/this-ai-tool-rips-off-open-source-software-without-violating-copyright/)
10. Columbia Data Products reverse-engineered the IBM PC BIOS in 1982 using isolated teams; courts held that copyright protects expression, not ideas or function. [https://en.wikipedia.org/wiki/Clean-room\_design](https://en.wikipedia.org/wiki/Clean-room_design)
11. Dan Blanchard, “Everything Claude Saw,” personal blog. [https://dan-blanchard.github.io/blog/chardet-rewrite-controversy/](https://dan-blanchard.github.io/blog/chardet-rewrite-controversy/). See also Simon Willison’s coverage and ShiftMag, “License Laundering and the Death of Clean Room.”
12. Mark Pilgrim, comment on the `chardet` relicensing. [https://github.com/chardet/chardet/issues/327](https://github.com/chardet/chardet/issues/327)
13. Sigrid Jin (GitHub: instructkr), `claw-code` repository. Star count reported variously at 50,000 in approximately two hours, rising past 100,000 within a day. See Layer5, “The Claude Code Source Leak,” and Business Insider coverage.
14. Emma Loffhagen, “Grammarly removes AI Expert Review feature mimicking writers after backlash,” *The Guardian*, March 13, 2026. [https://www.theguardian.com/technology/2026/mar/13/grammarly-removes-ai-expert-review-feature-mimicking-writers-after-backlash](https://www.theguardian.com/technology/2026/mar/13/grammarly-removes-ai-expert-review-feature-mimicking-writers-after-backlash)
15. *Angwin v. Superhuman*, filed in the U.S. District Court for the Southern District of New York, March 2026. Julia Angwin, investigative journalist, is the lead plaintiff.
16. Kyle Orland, “ChatGPT starts blocking direct requests to copy an author’s style,” *Ars Technica*, July 27, 2026. [https://arstechnica.com/ai/2026/07/chatgpt-stops-cloning-famous-writers-voices-but-may-capture-a-similar-feeling/](https://arstechnica.com/ai/2026/07/chatgpt-stops-cloning-famous-writers-voices-but-may-capture-a-similar-feeling/)
17. u/Dazzling-Major-5620, post on r/WritingWithAI, July 24, 2026. [https://www.reddit.com/r/WritingWithAI/comments/1v5dfd0/chatgpt\_not\_letting\_you\_emulate\_specific\_authors/](https://www.reddit.com/r/WritingWithAI/comments/1v5dfd0/chatgpt_not_letting_you_emulate_specific_authors/)
18. AIStoryHub, [https://aistoryhub.co/](https://aistoryhub.co/)
19. CREATOR Act (Creative Rights Ensuring Artists’ Technique and Originality are Reserved Act), H.R. 9112, 119th Congress, introduced June 2, 2026 by Rep. Beth Van Duyne (R-TX). Referred to the House Committee on the Judiciary; no further action as of July 2026.
20. Sinceerly, Chrome browser extension by Ben Horwitz. See Fast Company coverage, April 25, 2026. [https://www.fastcompany.com/91531539/this-anti-grammarly-ai-tool-adds-typos-to-your-emails-on-purpose](https://www.fastcompany.com/91531539/this-anti-grammarly-ai-tool-adds-typos-to-your-emails-on-purpose)

---

*The opinions expressed in this essay are my own and do not reflect any official or unofficial institutional position of the University of Pennsylvania.*
