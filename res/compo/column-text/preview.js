TEXT = "" + // 
"<p>There was once a young Shepherd Boy who tended his sheep at the foot of a mountain near a dark forest.</p>" + //
"<p>It was rather lonely for him all day, so he thought upon a plan by which he could get a little company and some excitement.</p>" + //
"<p>He rushed down towards the village calling out <q>Wolf, Wolf</q>, and the villagers came out to meet him, and some of them stopped with him for a considerable time.</p>" + //
"<p>This pleased the boy so much that a few days afterwards he tried the same trick, and again the villagers came to his help.</p>" + //
"<p>But shortly after this a Wolf actually did come out from the forest, and began to worry the sheep, and the boy of course cried out <q>Wolf, Wolf</q>, still louder than before.</p>" + //
"<p>But this time the villagers, who had been fooled twice before, thought the boy was again deceiving them, and nobody stirred to come to his help. So the Wolf made a good meal off the boy's flock.</p>" + //
"";

TEXT2 = "" + //
"<p>Once upon a time a severe plague raged among the animals.</p>" + //
"<p>Many died, and those who lived were so ill, that they cared for neither food nor drink, and dragged themselves about listlessly. No longer could a fat young hen tempt Master Fox to dinner, nor a tender lamb rouse greedy Sir Wolf's appetite.</p>" + //
"<p>At last the Lion decided to call a council. When all the animals were gathered together he arose and said:</p>" + //
"<p><q>Dear friends, I believe the gods have sent this plague upon us as a punishment for our sins. Therefore, the most guilty one of us must be offered in sacrifice. Perhaps we may thus obtain forgiveness and cure for all.</q></p>" + //
"<p><q>I will confess all my sins first. I admit that I have been very greedy and have devoured many sheep. They had done me no harm. I have eaten goats and bulls and stags. To tell the truth, I even ate up a shepherd now and then.</q></p>" + //
"<p><q>Now, if I am the most guilty, I am ready to be sacrificed. But I think it best that each one confess his sins as I have done. Then we can decide in all justice who is the most guilty.</q></p>" + //
"<p><q>Your majesty</q>, said the Fox, <q>you are too good. Can it be a crime to eat sheep, such stupid mutton heads? No, no, your majesty. You have done them great honor by eating them up.</q></p>" + //
"<p><q>And so far as shepherds are concerned, we all know they belong to that puny race that pretends to be our masters.</q></p>" + //
"<p>All the animals applauded the Fox loudly. Then, though the Tiger, the Bear, the Wolf, and all the savage beasts recited the most wicked deeds, all were excused and made to appear very saint-like and innocent.</p>" + //
"<p>It was now the Ass's turn to confess. <q>I remember</q>, he said guiltily, <q>that one day as I was passing a field belonging to some priests, I was so tempted by the tender grass and my hunger, that I could not resist nibbling a bit of it. I had no right to do it, I admit.</q></p>" + //
"<p>A great uproar among the beasts interrupted him. Here was the culprit who had brought misfortune on all of them! What a horrible crime it was to eat grass that belonged to someone else! It was enough to hang anyone for, much more an Ass.</p>" + //
"<p>Immediately they all fell upon him, the Wolf in the lead, and soon had made an end to him, sacrificing him to the gods then and there, and without the formality of an altar.</p>" + //
"";

WinMain.on("load", function() {
	$E("button").on("click", function(ev) {
		var columnText = WinMain.doc.getByCssClass("column-text");
		columnText.setObject(TEXT);
	}, this);
});
