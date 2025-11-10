/speckit.specify Build an application that will track the percentages that specific modifier cards will be pulled for the tabletop game Gloomhaven.

I need the ability to define which specific cards my character has and those for the monster deck has.

Since the turns alternate between monsters and players the application needs to allow for quick switching between my cards and the monster cards.

Player decks and monster decks are independent of each other.

Both the player and monster decks will be "drawn" from separately. When a card is drawn it should be removed from the deck and put in the "drawn" pile. The percentages for specific cards should change when a particular card is drawn. Percentages should only be shown for the cards that are still in the deck.

I want to see stacks of each type of card. Next to each stack display the count remaning and the percentage that it will be the next one drawn.

I want the ability to click on a card type to act as the "draw" effect.

I also want to see a drawn pile. That should show the number of cards drawn. Upon clicking on the drawn pile it should show the specific cards that have been drawn so far. From there I want the ability to "return" a card back to the deck which will update the percentages accordingly. This will be useful for when I will inevitably make a mistake while clicking cards.

Since there are cards that cause the player or the monster to reshuffle the deck, this app needs to be able to reset each deck and the percentages accordingly.

I want to have a visual representation of each type of card. Try to stick with the Gloomhaven art style as much as possible. I don't want images of the actual cards, just a representation of them in a similar style.

The types of possible cards are: +0, +1, +2, -1, -2, 2x, miss, curse, stun, bless, wound, poison, immobilize, disarm, muddle, push, pull, add target, heal, shield, fire, ice, air, earth, light, dark.

This application should take a Mobile-first approach as the majority of the time it will be used on a phone while playing the game.

I want to be able to reset both decks independently.

The app needs to be able to reset the entire state in case I want to start over from scratch.

Whenever the user is first interacting with the app, or the state has been reset, the application should prompt the user to define the initial decks for both the player and the monsters. This includes selecting which specific modifier cards are included in each deck and their quantities.
