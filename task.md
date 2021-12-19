
Your task is to create a feed displaying the entries from a sub reddit JSON feed.

What you will do now
Show the entries from https://www.reddit.com/r/sweden.json

Entry should contain
- author
- created (as readable date):
- thumbnail
- title
- score
- num_comments

When user clicks on a entry:
Open the entry's selftext in a modal or navigate to another page.

Style the entry-card. It does not need to look good.

Allow user to toggle between 5, 10 or 25 entries.
When changing this, the data will be refetched from reddit.

Navigation buttons: Next and Previous.
When user clicks those the user will go to the next entries or go back to the last ones.
One unit test, that tests the navigation buttons.

Typescript: Type what you think is important.


Guidelines
You can fetch the posts with: https://www.reddit.com/r/sweden.json

Parameters supported:
- limit = (number) Number of entries to fetch (default: 25)
- before = (entry id) Show entries before an entry id. (ex before: ”t3_758x8e”)
- after = (entry id) Show entries after an entry id. (ex after: ”t3_758x8e”)
Example: https://www.reddit.com/r/sweden.json?limit=25&after=t3_758x8e

Use any Typescript framework (Angular, Vue, React, as long it is Typescript)
Write the code as you would have done in any project. Dont over-engineer.

Use a Linter.
